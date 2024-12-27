import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Paperclip, Send } from 'lucide-react';

export default function Compose() {
  const navigate = useNavigate();
  const [recipients, setRecipients] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [attachments, setAttachments] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('recipients', recipients);
      formData.append('subject', subject);
      formData.append('body', body);

      attachments.forEach((file) => {
        formData.append('attachments', file);
      });

      const response = await fetch('http://127.0.0.1:8000/emails/compose/', {
        method: 'POST',
        credentials: 'include',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Email sent successfully!');
        navigate('/sent');
      } else {
        toast.error(result.error || 'Failed to send email.');
      }
    } catch (error) {
      toast.error('An unexpected error occurred. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAttachment = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments(Array.from(e.target.files));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="to">To</Label>
          <Input
            id="to"
            placeholder="recipient@example.com"
            value={recipients}
            onChange={(e) => setRecipients(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            placeholder="Email subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Type your message here..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="attachments">Attachments</Label>
          <div className="flex items-center gap-4">
            <Button type="button" variant="outline" onClick={() => document.getElementById('attachments')?.click()}>
              <Paperclip className="h-4 w-4 mr-2" />
              Add Attachments
            </Button>
            <Input id="attachments" type="file" multiple className="hidden" onChange={handleAttachment} />
            {attachments.length > 0 && (
              <span className="text-sm text-muted-foreground">{attachments.length} file(s) selected</span>
            )}
          </div>
        </div>
      </div>
      <Button type="submit" className="w-full sm:w-auto" disabled={loading}>
        {loading ? 'Sending...' : <>
          <Send className="h-4 w-4 mr-2" />
          Send Email
        </>}
      </Button>
    </form>
  );
}

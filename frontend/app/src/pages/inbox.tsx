import { useState, useEffect } from 'react';
import EmailList from '@/components/email/email-list';
import EmailToolbar from '@/components/email/email-toolbar';

export default function Inbox() {
  const [emails, setEmails] = useState<any[]>([]);
  const [selectedEmails, setSelectedEmails] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch emails from the API
  useEffect(() => {
    const fetchEmails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/emails'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch emails');
        }
        const data = await response.json();
        setEmails(data);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchEmails();
  }, []);

  const toggleEmailSelection = (id: number) => {
    setSelectedEmails((prev) =>
      prev.includes(id)
        ? prev.filter((emailId) => emailId !== id)
        : [...prev, id]
    );
  };

  const handleToolbarAction = (action: string) => {
    console.log(`${action} action triggered for emails:`, selectedEmails);
    // Add API logic here if needed
  };

  return (
    <div className="space-y-4">
      {error && <div className="text-red-500">Error: {error}</div>}
      <EmailToolbar
        selectedCount={selectedEmails.length}
        onArchive={() => handleToolbarAction('Archive')}
        onDelete={() => handleToolbarAction('Delete')}
        onMarkRead={() => handleToolbarAction('Mark as read')}
        onMarkUnread={() => handleToolbarAction('Mark as unread')}
        onStar={() => handleToolbarAction('Star')}
      />
      {loading ? (
        <div>Loading emails...</div>
      ) : (
        <EmailList
          emails={emails}
          type="inbox"
          selectedEmails={selectedEmails}
          onSelectEmail={toggleEmailSelection}
        />
      )}
    </div>
  );
}

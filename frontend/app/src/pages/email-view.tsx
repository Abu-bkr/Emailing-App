import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { ArrowLeft, Download, Reply, Star, Trash2 } from 'lucide-react';

// Mock email data
const mockEmail = {
  id: '1',
  from: 'john.doe@organization.com',
  to: 'me@organization.com',
  subject: 'Project Update',
  date: '2024-03-20T10:30:00',
  content: `
    Hi there,

    I wanted to give you a quick update on the project status. We've made significant progress on the key deliverables and are on track to meet our deadlines.

    Here are the main points:
    - Frontend development is 80% complete
    - Backend APIs are fully implemented
    - QA testing has begun on completed features
    - Documentation is being updated regularly

    Please let me know if you have any questions or concerns.

    Best regards,
    John
  `,
  attachments: [
    { name: 'project-timeline.pdf', size: '2.4 MB' },
    { name: 'requirements.docx', size: '1.1 MB' },
  ],
};

export default function EmailView() {
  const { id } = useParams();
  const navigate = useNavigate();

  // In a real app, fetch email data based on id
  const email = mockEmail;

  return (
    <Card className="glass-card">
      <CardHeader className="space-y-4">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">{email.subject}</h2>
            <p className="text-sm text-muted-foreground">
              From: {email.from}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <Star className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Reply className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          {new Date(email.date).toLocaleString()}
        </p>
      </CardHeader>
      <CardContent>
        <div className="prose dark:prose-invert max-w-none">
          <pre className="whitespace-pre-wrap font-sans">{email.content}</pre>
        </div>
      </CardContent>
      {email.attachments.length > 0 && (
        <CardFooter className="flex-col items-start gap-4">
          <h3 className="font-semibold">Attachments</h3>
          <div className="space-y-2 w-full">
            {email.attachments.map((attachment) => (
              <div
                key={attachment.name}
                className="flex items-center justify-between p-2 rounded-lg border bg-card/50"
              >
                <span className="text-sm">{attachment.name}</span>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    {attachment.size}
                  </span>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
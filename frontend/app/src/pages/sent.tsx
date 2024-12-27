import { useState } from 'react';
import EmailList from '@/components/email/email-list';
import EmailToolbar from '@/components/email/email-toolbar';

// Mock data
const sentEmails = [
  {
    id: 1,
    to: 'Alice Johnson',
    subject: 'Re: Project Proposal',
    preview: 'Thank you for your feedback...',
    date: '2024-03-20',
  },
  {
    id: 2,
    to: 'Bob Wilson',
    subject: 'Meeting Notes',
    preview: 'Here are the notes from today\'s meeting...',
    date: '2024-03-19',
  },
  // Add more mock emails
];

export default function Sent() {
  const [selectedEmails, setSelectedEmails] = useState<number[]>([]);

  const toggleEmailSelection = (id: number) => {
    setSelectedEmails((prev) =>
      prev.includes(id)
        ? prev.filter((emailId) => emailId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="space-y-4">
      <EmailToolbar
        selectedCount={selectedEmails.length}
        onArchive={() => console.log('Archive')}
        onDelete={() => console.log('Delete')}
      />
      <EmailList
        emails={sentEmails}
        type="sent"
        selectedEmails={selectedEmails}
        onSelectEmail={toggleEmailSelection}
      />
    </div>
  );
}
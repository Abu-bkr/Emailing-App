import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';

type Email = {
  id: number;
  from?: string;
  to?: string;
  subject: string;
  preview: string;
  date: string;
  read?: boolean;
};

type EmailListProps = {
  emails: Email[];
  type: 'inbox' | 'sent';
  selectedEmails: number[];
  onSelectEmail: (id: number) => void;
};

export default function EmailList({
  emails,
  type,
  selectedEmails,
  onSelectEmail,
}: EmailListProps) {
  const navigate = useNavigate();

  const handleEmailClick = (id: number) => {
    navigate(`/email/${id}`);
  };

  return (
    <div className="glass-card rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox />
            </TableHead>
            <TableHead>{type === 'inbox' ? 'From' : 'To'}</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead className="hidden md:table-cell">Preview</TableHead>
            <TableHead className="text-right">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {emails.map((email) => (
            <TableRow
              key={email.id}
              className={cn(
                'cursor-pointer hover:bg-muted/50',
                !email.read && type === 'inbox' && 'font-medium'
              )}
              onClick={() => handleEmailClick(email.id)}
            >
              <TableCell
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectEmail(email.id);
                }}
              >
                <Checkbox
                  checked={selectedEmails.includes(email.id)}
                  onCheckedChange={() => onSelectEmail(email.id)}
                />
              </TableCell>
              <TableCell>
                {type === 'inbox' ? email.from : email.to}
              </TableCell>
              <TableCell>{email.subject}</TableCell>
              <TableCell className="hidden md:table-cell text-muted-foreground">
                {email.preview}
              </TableCell>
              <TableCell className="text-right">
                {new Date(email.date).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
import { Button } from '@/components/ui/button';
import { Archive, Mail, MailOpen, Star, Trash2 } from 'lucide-react';

type EmailToolbarProps = {
  selectedCount: number;
  onArchive?: () => void;
  onDelete?: () => void;
  onMarkRead?: () => void;
  onMarkUnread?: () => void;
  onStar?: () => void;
};

export default function EmailToolbar({
  selectedCount,
  onArchive,
  onDelete,
  onMarkRead,
  onMarkUnread,
  onStar,
}: EmailToolbarProps) {
  const disabled = selectedCount === 0;

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {onArchive && (
        <Button variant="outline" size="sm" disabled={disabled} onClick={onArchive}>
          <Archive className="h-4 w-4 mr-2" />
          Archive
        </Button>
      )}
      {onDelete && (
        <Button variant="outline" size="sm" disabled={disabled} onClick={onDelete}>
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </Button>
      )}
      {onMarkRead && (
        <Button variant="outline" size="sm" disabled={disabled} onClick={onMarkRead}>
          <MailOpen className="h-4 w-4 mr-2" />
          Mark as Read
        </Button>
      )}
      {onMarkUnread && (
        <Button variant="outline" size="sm" disabled={disabled} onClick={onMarkUnread}>
          <Mail className="h-4 w-4 mr-2" />
          Mark as Unread
        </Button>
      )}
      {onStar && (
        <Button variant="outline" size="sm" disabled={disabled} onClick={onStar}>
          <Star className="h-4 w-4 mr-2" />
          Star
        </Button>
      )}
    </div>
  );
}
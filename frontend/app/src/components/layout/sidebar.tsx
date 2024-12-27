import { Link, useLocation} from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import {
  Mail,
  Send,
  Inbox,
  Archive,
  Star,
  Trash2,
  Settings,
} from 'lucide-react';

const navigation = [
  { name: 'Compose', to: '/compose', icon: Mail },
  { name: 'Inbox', to: '/inbox', icon: Inbox },
  { name: 'Sent', to: '/sent', icon: Send },
  { name: 'Starred', to: '/starred', icon: Star },
  { name: 'Archive', to: '/archive', icon: Archive },
  { name: 'Trash', to: '/trash', icon: Trash2 },
  
];

export default function Sidebar({ onClose }: { onClose?: () => void }) {
  const location = useLocation();
  const onLogout = () => {
    const logout = fetch('127.0.0.1:8000/logout')
    console.log(logout);
  }

  return (
    <div className="h-full flex flex-col glass-sidebar">
      <div className="p-4">
        <Link
          to="/"
          className="flex items-center space-x-2 text-xl font-bold"
          onClick={onClose}
        >
          <Mail className="h-6 w-6" />
          <span>Mail App</span>
        </Link>
      </div>
      <Separator />
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
        
          return (
            <Button
              key={item.name}
              asChild
              variant={location.pathname === item.to ? 'secondary' : 'ghost'}
              className="w-full justify-start"
              onClick={onClose}
            >
              <Link
                to={item.to}
                className={cn(
                  'flex items-center space-x-2',
                  location.pathname === item.to && 'font-medium bg-black'
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            </Button>
          );
        })}
      </nav>
      <Separator />
      <div className="p-4">
        <Button
          asChild
          variant="ghost"
          className="w-full justify-start"
          onClick={onClose}
        >
          <Link to="/settings" className="flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </Link>
        </Button>
      </div>
      <div className="p-4">
        <Button
          asChild
          variant="ghost"
          className="w-full justify-start"
          onClick={onLogout}
        >
          <Link to="/logout" className="flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <span>Logout</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
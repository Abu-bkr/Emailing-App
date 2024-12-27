import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import ThemeToggle from './theme-toggle';
import UserMenu from './user-menu';

type NavbarProps = {
  onMenuClick: () => void;
};

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <div className="h-16 flex items-center justify-between px-4 glass-navbar">
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={onMenuClick}
      >
        <Menu className="h-6 w-6" />
      </Button>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <UserMenu />
      </div>
    </div>
  );
}
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useTheme } from '@/components/theme-provider';
import {
  Mail,
  Send,
  Inbox,
  Menu,
  X,
  Moon,
  Sun,
  Laptop,
} from 'lucide-react';
import Sidebar from './layout/sidebar';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const sidebarContent = (
    <>
      <Separator />
      <Sidebar />
      <Separator />
      <div className="p-4">
        <div className="flex justify-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme('light')}
            className={theme === 'light' ? 'bg-accent' : ''}
          >
            <Sun className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme('dark')}
            className={theme === 'dark' ? 'bg-accent' : ''}
          >
            <Moon className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme('system')}
            className={theme === 'system' ? 'bg-accent' : ''}
          >
            <Laptop className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all md:hidden ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      >
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-background border-r transition-transform duration-300 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {sidebarContent}
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col md:border-r">
        {sidebarContent}
      </div>

      {/* Main content */}
      <div className="md:pl-64">
        <div className="flex h-16 items-center gap-x-4 border-b px-4 md:px-6">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleSidebar}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
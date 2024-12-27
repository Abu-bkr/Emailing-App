import { useState } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import MobileMenu from './mobile-menu';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Desktop Sidebar */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-80 md:flex-col">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="md:pl-80">
        <Navbar onMenuClick={() => setIsMobileMenuOpen(true)} />
        <main className="container mx-auto p-4 md:p-6 space-y-6">
          {children}
        </main>
      </div>
    </div>
  );
}
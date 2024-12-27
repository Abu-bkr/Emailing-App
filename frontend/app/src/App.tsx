import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import Layout from '@/components/layout';
import Loading from '@/components/loading';

// Lazy load routes
const Inbox = lazy(() => import('@/pages/inbox'));
const Sent = lazy(() => import('@/pages/sent'));
const Compose = lazy(() => import('@/pages/compose'));
const EmailView = lazy(() => import('@/pages/email-view'));

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Navigate to="/inbox" replace />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/sent" element={<Sent />} />
              <Route path="/compose" element={<Compose />} />
              <Route path="/email/:id" element={<EmailView />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <Header />
      {/* Main layout */}
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Inbox Section */}
        <Outlet />
      </div>
    </div>
  );
};

export default App;

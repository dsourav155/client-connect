import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';

interface PageContainerProps {
  children: React.ReactNode;
  title: string;
  sidebarLinks: Array<{
    name: string;
    href: string;
    icon: React.ReactNode;
  }>;
  logo: React.ReactNode;
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
  notifications?: number;
  actions?: React.ReactNode;
}

const PageContainer = ({
  children,
  title,
  sidebarLinks,
  logo,
  user,
  notifications,
  actions,
}: PageContainerProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={handleCloseSidebar}
        links={sidebarLinks}
        logo={logo}
        user={user}
      />

      <div className="flex flex-col flex-1 md:pl-64">
        <TopNav
          title={title}
          onMenuClick={handleOpenSidebar}
          user={user}
          notifications={notifications}
          actions={actions}
        />

        <main className="flex-1 p-4 overflow-y-auto sm:p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PageContainer; 
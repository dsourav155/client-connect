import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PageContainer from '@/components/layout/PageContainer';
import ProjectProgress from '@/components/dashboard/ProjectProgress';
import Timeline from '@/components/dashboard/Timeline';
import ActionItems from '@/components/dashboard/ActionItems';
import ActivityFeed from '@/components/dashboard/ActivityFeed';
import { getCurrentProject } from '@/mocks/projects';
import { Project } from '@/types/project';

export default function Dashboard() {
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  // Define sidebar links for navigation
  const sidebarLinks = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      name: 'Messages',
      href: '/messages',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      name: 'Documents',
      href: '/documents',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      name: 'Invoices',
      href: '/invoices',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
  ];

  // Define logo component
  const logo = (
    <div className="flex items-center">
      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-2 text-xl font-bold text-gray-900">Client Connect</span>
    </div>
  );

  // Function to handle temporary authentication for development
  const handleTempAuth = () => {
    localStorage.setItem('isAuthenticated', 'true');
    window.location.reload();
  };

  useEffect(() => {
    // Simulate authentication check (replace with real auth logic)
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    // Fetch project data
    try {
      const currentProject = getCurrentProject();
      setProject(currentProject);
    } catch (error) {
      console.error('Error fetching project data:', error);
    } finally {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto border-4 border-t-primary border-gray-200 rounded-full animate-spin"></div>
          <p className="mt-4 text-lg text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <p className="text-lg text-gray-600">No project data available.</p>
          {/* Temporary authentication button for development */}
          <button 
            onClick={handleTempAuth}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Authenticate for Development
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Dashboard | Client Connect</title>
        <meta name="description" content="Client project dashboard" />
      </Head>
      
      <PageContainer
        title="Project Dashboard"
        sidebarLinks={sidebarLinks}
        logo={logo}
        user={{
          name: 'John Smith',
          email: 'john@example.com',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        }}
        notifications={3}
      >
        <div className="px-4 py-6 md:px-6 md:py-8">
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">{project.name} Dashboard</h1>
          <p className="mt-2 text-gray-600">{project.description}</p>
          
          <div className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-2">
            <div className="lg:col-span-2">
              <ProjectProgress project={project} />
            </div>
            
            <div className="lg:col-span-2">
              <Timeline project={project} />
            </div>
            
            <div>
              <ActionItems project={project} />
            </div>
            
            <div>
              <ActivityFeed project={project} />
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
} 
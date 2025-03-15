import React from 'react';
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Project } from '@/types/project';

interface ConversationListProps {
  projects: Project[];
  activeProjectId: string;
  onSelectProject: (projectId: string) => void;
  onNewConversation: () => void;
}

const ConversationList: React.FC<ConversationListProps> = ({
  projects,
  activeProjectId,
  onSelectProject,
  onNewConversation
}) => {
  const getLastMessagePreview = (project: Project) => {
    if (!project.messages || project.messages.length === 0) {
      return 'No messages yet';
    }
    
    // Find the most recent message
    const lastMessage = [...project.messages].sort(
      (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    )[0];
    
    return `${lastMessage.sender.name}: ${lastMessage.text.substring(0, 30)}${lastMessage.text.length > 30 ? '...' : ''}`;
  };
  
  const getLastMessageTime = (project: Project) => {
    if (!project.messages || project.messages.length === 0) {
      return '';
    }
    
    // Find the most recent message
    const lastMessage = [...project.messages].sort(
      (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    )[0];
    
    const date = new Date(lastMessage.timestamp);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      // Today, show time
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else if (diffDays < 7) {
      return date.toLocaleDateString([], { weekday: 'short' });
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
  };
  
  const countUnreadMessages = (project: Project) => {
    if (!project.messages) return 0;
    return project.messages.filter(message => message.unread).length;
  };

  return (
    <div className="h-full flex flex-col bg-white rounded-lg shadow-sm">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Conversations</h2>
          <button 
            onClick={onNewConversation}
            className="p-1.5 bg-primary text-white rounded-full hover:bg-primary-dark"
            title="New conversation"
          >
            <PlusIcon className="w-5 h-5" />
          </button>
        </div>
        
        <div className="relative">
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Search conversations..."
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {projects.map((project) => {
          const unreadCount = countUnreadMessages(project);
          const isActive = project.id === activeProjectId;
          
          return (
            <div 
              key={project.id}
              onClick={() => onSelectProject(project.id)}
              className={`p-4 border-b hover:bg-gray-50 cursor-pointer ${isActive ? 'bg-blue-50' : ''}`}
            >
              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full bg-gray-200 flex-shrink-0 mr-3 overflow-hidden">
                  {project.clientLogo && (
                    <Image
                      src={project.clientLogo}
                      alt={project.clientName}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-sm truncate">{project.name}</h3>
                    <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                      {getLastMessageTime(project)}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 truncate">
                    {getLastMessagePreview(project)}
                  </p>
                </div>
              </div>
              
              {unreadCount > 0 && (
                <div className="mt-1 flex justify-end">
                  <span className="bg-primary text-white text-xs py-0.5 px-2 rounded-full">
                    {unreadCount}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConversationList; 
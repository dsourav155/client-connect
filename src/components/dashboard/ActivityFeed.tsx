import React from 'react';
import { Project } from '@/types/project';
import { formatDate } from '@/utils/dateFormatter';

interface ActivityFeedProps {
  project: Project;
}

const ActivityFeed: React.FC<ActivityFeedProps> = ({ project }) => {
  // Get activity items and sort by date (most recent first)
  const activityItems = project.activities 
    ? [...project.activities].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      )
    : [];

  // Get icon based on activity type
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'task_completed':
        return (
          <div className="bg-green-100 p-2 rounded-full">
            <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        );
      case 'milestone_reached':
        return (
          <div className="bg-blue-100 p-2 rounded-full">
            <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        );
      case 'file_uploaded':
        return (
          <div className="bg-purple-100 p-2 rounded-full">
            <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
        );
      case 'comment_added':
        return (
          <div className="bg-yellow-100 p-2 rounded-full">
            <svg className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="bg-gray-100 p-2 rounded-full">
            <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
      
      <div className="flow-root">
        <ul className="-mb-8">
          {activityItems.map((activity, index) => {
            const isLast = index === activityItems.length - 1;
            
            return (
              <li key={index}>
                <div className="relative pb-8">
                  {!isLast && (
                    <span 
                      className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" 
                      aria-hidden="true"
                    />
                  )}
                  
                  <div className="relative flex items-start space-x-3">
                    {/* Activity icon */}
                    <div className="relative">
                      {getActivityIcon(activity.type)}
                    </div>
                    
                    {/* Activity content */}
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm">
                          <span className="font-medium text-gray-900">
                            {activity.user}
                          </span>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          {formatDate(activity.date)}
                        </p>
                      </div>
                      <div className="mt-2 text-sm text-gray-700">
                        <p>{activity.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      
      {activityItems.length === 0 && (
        <div className="text-center py-6">
          <p className="text-gray-500">No recent activity for this project.</p>
        </div>
      )}
      
      {activityItems.length > 0 && (
        <div className="mt-4 text-center">
          <button 
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            View All Activity
          </button>
        </div>
      )}
    </div>
  );
};

export default ActivityFeed; 
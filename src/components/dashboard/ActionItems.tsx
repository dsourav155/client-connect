import React from 'react';
import { Project } from '@/types/project';
import { formatDate } from '@/utils/dateFormatter';

interface ActionItemsProps {
  project: Project;
}

const ActionItems: React.FC<ActionItemsProps> = ({ project }) => {
  // Filter tasks that require client action
  const actionItems = project.tasks
    ? project.tasks.filter(task => 
        task.status !== 'completed' && 
        task.requiresClientAction
      )
    : [];

  // Sort by due date (closest first)
  const sortedActionItems = [...actionItems].sort((a, b) => 
    new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
  );

  // Determine priority level
  const getPriorityLevel = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'overdue';
    if (diffDays <= 2) return 'high';
    if (diffDays <= 7) return 'medium';
    return 'low';
  };

  // Get priority badge styling
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'overdue':
        return 'bg-red-100 text-red-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Action Required</h2>
      
      <div className="space-y-4">
        {sortedActionItems.map((item, index) => {
          const priority = getPriorityLevel(item.dueDate);
          const priorityClass = getPriorityBadge(priority);
          
          return (
            <div key={index} className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${priorityClass}`}>
                  {priority === 'overdue' ? 'Overdue' : `${priority.charAt(0).toUpperCase() + priority.slice(1)} Priority`}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-2">{item.description}</p>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Due: {formatDate(item.dueDate)}</span>
                <button 
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  Complete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      
      {sortedActionItems.length === 0 && (
        <div className="text-center py-8">
          <svg 
            className="mx-auto h-12 w-12 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No action items</h3>
          <p className="mt-1 text-sm text-gray-500">You're all caught up! No items require your attention.</p>
        </div>
      )}
    </div>
  );
};

export default ActionItems; 
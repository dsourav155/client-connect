import React from 'react';
import { Project } from '@/types/project';

interface ProjectProgressProps {
  project: Project;
}

const ProjectProgress: React.FC<ProjectProgressProps> = ({ project }) => {
  // Calculate overall completion percentage
  const totalTasks = project.tasks?.length || 0;
  const completedTasks = project.tasks?.filter(task => task.status === 'completed').length || 0;
  const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  
  // Determine status color
  const getStatusColor = () => {
    if (completionPercentage >= 80) return 'bg-green-500';
    if (completionPercentage >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Project Progress</h2>
      
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700">Overall Completion</span>
          <span className="text-sm font-medium text-gray-700">{completionPercentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className={`h-2.5 rounded-full ${getStatusColor()}`} 
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Time Remaining</h3>
          <p className="text-xl font-bold text-gray-900">
            {project.daysRemaining} days
          </p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Tasks</h3>
          <p className="text-xl font-bold text-gray-900">
            {completedTasks}/{totalTasks} completed
          </p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Status</h3>
          <div className="flex items-center">
            <div className={`w-3 h-3 rounded-full mr-2 ${getStatusColor()}`}></div>
            <p className="text-xl font-bold text-gray-900">
              {project.status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectProgress; 
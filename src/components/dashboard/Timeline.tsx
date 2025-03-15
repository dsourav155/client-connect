import React from 'react';
import { Project } from '@/types/project';
import { formatDate } from '@/utils/dateFormatter';

interface TimelineProps {
  project: Project;
}

const Timeline: React.FC<TimelineProps> = ({ project }) => {
  // Sort milestones by date
  const sortedMilestones = project.milestones 
    ? [...project.milestones].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    : [];
  
  // Determine milestone status
  const getMilestoneStatus = (date: string, completed: boolean) => {
    if (completed) return 'completed';
    
    const milestoneDate = new Date(date);
    const currentDate = new Date();
    
    if (milestoneDate < currentDate) return 'overdue';
    
    // Check if it's the next upcoming milestone
    const upcomingMilestones = sortedMilestones.filter(
      m => !m.completed && new Date(m.date) > currentDate
    );
    
    if (upcomingMilestones.length > 0 && upcomingMilestones[0].date === date) {
      return 'current';
    }
    
    return 'upcoming';
  };

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'current':
        return 'bg-blue-500';
      case 'overdue':
        return 'bg-red-500';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Project Timeline</h2>
      
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 h-full w-0.5 bg-gray-200"></div>
        
        {/* Timeline items */}
        <div className="space-y-8">
          {sortedMilestones.map((milestone, index) => {
            const status = getMilestoneStatus(milestone.date, milestone.completed);
            const statusColor = getStatusColor(status);
            
            return (
              <div key={index} className="relative pl-12">
                {/* Status dot */}
                <div className={`absolute left-4 w-3 h-3 rounded-full ${statusColor} transform -translate-x-1/2 mt-1.5`}></div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-medium text-gray-900">{milestone.title}</h3>
                    <span className="text-sm text-gray-600">{formatDate(milestone.date)}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{milestone.description}</p>
                  
                  <div className="mt-2 flex items-center">
                    <span 
                      className={`text-xs px-2 py-1 rounded-full ${
                        status === 'completed' ? 'bg-green-100 text-green-800' : 
                        status === 'current' ? 'bg-blue-100 text-blue-800' : 
                        status === 'overdue' ? 'bg-red-100 text-red-800' : 
                        'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {sortedMilestones.length === 0 && (
        <div className="text-center py-6">
          <p className="text-gray-500">No milestones have been set for this project.</p>
        </div>
      )}
    </div>
  );
};

export default Timeline; 
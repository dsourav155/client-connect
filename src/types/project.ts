export interface Milestone {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  completedDate?: string;
}

export interface ActionItem {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'completed';
}

export interface Activity {
  id: string;
  type: 'update' | 'message' | 'document' | 'milestone' | 'invoice';
  content: string;
  date: string;
  user: {
    id: string;
    name: string;
    avatar?: string;
  };
  projectId: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'not_started' | 'in_progress' | 'on_hold' | 'completed';
  daysRemaining: number;
  startDate: string;
  endDate: string;
  client: {
    id: string;
    name: string;
    email: string;
    company: string;
    avatar?: string;
  };
  team: Array<{
    id: string;
    name: string;
    role: string;
    avatar?: string;
  }>;
  tasks: Array<{
    id: string;
    title: string;
    description: string;
    status: 'not_started' | 'in_progress' | 'completed';
    dueDate: string;
    assignedTo: string;
    requiresClientAction: boolean;
  }>;
  milestones: Array<{
    id: string;
    title: string;
    description: string;
    date: string;
    completed: boolean;
  }>;
  activities: Array<{
    id: string;
    type: 'task_completed' | 'milestone_reached' | 'file_uploaded' | 'comment_added' | 'other';
    date: string;
    user: string;
    description: string;
  }>;
  files: Array<{
    id: string;
    name: string;
    type: string;
    size: number;
    uploadedBy: string;
    uploadedDate: string;
    url: string;
  }>;
  budget: {
    total: number;
    spent: number;
    currency: string;
  };
} 
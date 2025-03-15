export interface Document {
  id: string;
  title: string;
  description?: string;
  type: 'pdf' | 'doc' | 'sheet' | 'image' | 'other';
  status: 'draft' | 'pending_approval' | 'approved' | 'rejected';
  url: string;
  thumbnailUrl?: string;
  size: number;
  createdAt: string;
  updatedAt: string;
  createdBy: {
    id: string;
    name: string;
    avatar?: string;
    role: 'client' | 'agency';
  };
  projectId: string;
  category?: string;
  tags?: string[];
  version: number;
  previousVersions?: {
    id: string;
    version: number;
    url: string;
    createdAt: string;
  }[];
  feedback?: {
    id: string;
    content: string;
    createdAt: string;
    createdBy: {
      id: string;
      name: string;
      avatar?: string;
      role: 'client' | 'agency';
    };
  }[];
} 
export interface Document {
  id: string;
  title: string;
  description: string;
  type: 'contract' | 'proposal' | 'invoice' | 'design' | 'other';
  status: 'draft' | 'pending_approval' | 'approved' | 'changes_requested';
  url: string;
  thumbnailUrl?: string;
  size: number;
  createdAt: string;
  updatedAt: string;
  createdBy: {
    id: string;
    name: string;
    avatar: string;
    role: string;
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
      avatar: string;
      role: string;
    };
  }[];
} 
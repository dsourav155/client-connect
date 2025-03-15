export interface Attachment {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
  thumbnailUrl?: string;
  uploadedAt: string;
}

export interface Reaction {
  type: '👍' | '👎' | '❤️' | '😄' | '😮' | '😢' | '🎉';
  count: number;
  users: {
    id: string;
    name: string;
  }[];
}

export interface Sender {
  id: string;
  name: string;
  avatar?: string;
}

export interface FileAttachment {
  id: string;
  name: string;
  size: string;
  type: 'image' | 'document' | 'pdf' | 'other';
  url?: string;
}

export interface Message {
  id: string;
  projectId: string;
  text: string;
  sender: Sender;
  timestamp: string;
  unread?: boolean;
  reactions?: number;
  topic?: string;
  attachments?: FileAttachment[];
  replies?: Message[];
  parentId?: string;
}

export interface MessageThread {
  id: string;
  projectId: string;
  topic: string;
  lastUpdated: string;
  messages: Message[];
  unreadCount?: number;
}

export interface Thread {
  id: string;
  title: string;
  projectId: string;
  createdAt: string;
  updatedAt: string;
  participants: {
    id: string;
    name: string;
    avatar?: string;
    role: 'client' | 'agency';
  }[];
  messages: Message[];
  unreadCount: number;
  lastMessage?: Message;
} 
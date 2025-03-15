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

export interface Message {
  id: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
  sender: {
    id: string;
    name: string;
    avatar?: string;
    role: 'client' | 'agency';
  };
  attachments: Attachment[];
  reactions: Reaction[];
  read: boolean;
  threadId: string;
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
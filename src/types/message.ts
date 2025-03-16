export interface Attachment {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
  thumbnailUrl?: string;
  uploadedAt: string;
}

export interface Sender {
  id: string;
  name: string;
  avatar?: string;
  type: 'client' | 'agency';
}

export interface Reaction {
  emoji: string;
  user: string;
}

export interface Message {
  id: string;
  conversationId: string;
  content: string;
  timestamp: string;
  sender: Sender;
  read: boolean;
  attachments: string[];
  reactions: Reaction[];
}

export interface Conversation {
  id: string;
  title: string;
  participants: Sender[];
  lastMessage: {
    content: string;
    timestamp: string;
  };
  unreadCount: number;
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
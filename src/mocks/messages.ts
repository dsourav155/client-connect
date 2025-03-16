import { Conversation, Message } from '../types/message';

export const mockMessages = {
  conversations: [
    {
      id: '1',
      title: 'Homepage Design Feedback',
      participants: [
        {
          id: '101',
          name: 'John Smith',
          avatar: '/avatars/john.jpg',
          type: 'agency' as const
        },
        {
          id: '201',
          name: 'Jane Doe',
          avatar: '/avatars/jane.jpg',
          type: 'client' as const
        }
      ],
      lastMessage: {
        content: 'I think we should adjust the hero section to better match your brand guidelines.',
        timestamp: '2023-08-29T14:30:00Z'
      },
      unreadCount: 2
    },
    {
      id: '2',
      title: 'Logo Revision Request',
      participants: [
        {
          id: '102',
          name: 'Michael Brown',
          avatar: '/avatars/michael.jpg',
          type: 'agency' as const
        },
        {
          id: '201',
          name: 'Jane Doe',
          avatar: '/avatars/jane.jpg',
          type: 'client' as const
        }
      ],
      lastMessage: {
        content: 'We need to make the logo a bit more vibrant. Can we try some different color options?',
        timestamp: '2023-08-28T11:15:00Z'
      },
      unreadCount: 0
    },
    {
      id: '3',
      title: 'Content Strategy Discussion',
      participants: [
        {
          id: '103',
          name: 'Sarah Wilson',
          avatar: '/avatars/sarah.jpg',
          type: 'agency' as const
        },
        {
          id: '201',
          name: 'Jane Doe',
          avatar: '/avatars/jane.jpg',
          type: 'client' as const
        }
      ],
      lastMessage: {
        content: 'Let\'s schedule a call to discuss the blog content strategy for next quarter.',
        timestamp: '2023-08-25T09:45:00Z'
      },
      unreadCount: 1
    }
  ],
  messages: [
    // Conversation 1: Homepage Design Feedback
    {
      id: 'm1',
      conversationId: '1',
      sender: {
        id: '101',
        name: 'John Smith',
        avatar: '/avatars/john.jpg',
        type: 'agency' as const
      },
      content: 'Hi Jane, I\'ve uploaded the latest homepage designs for your review. Could you please take a look and provide feedback by tomorrow?',
      timestamp: '2023-08-25T10:00:00Z',
      read: true,
      attachments: ['homepage-v2.pdf'],
      reactions: []
    },
    {
      id: 'm2',
      conversationId: '1',
      sender: {
        id: '201',
        name: 'Jane Doe',
        avatar: '/avatars/jane.jpg',
        type: 'client' as const
      },
      content: 'Thanks John! I\'ll review it this afternoon and get back to you.',
      timestamp: '2023-08-25T10:15:00Z',
      read: true,
      attachments: [],
      reactions: [{ emoji: '👍', user: '101' }]
    },
    {
      id: 'm3',
      conversationId: '1',
      sender: {
        id: '201',
        name: 'Jane Doe',
        avatar: '/avatars/jane.jpg',
        type: 'client' as const
      },
      content: 'I just went through the designs and they look great overall! But I think we should adjust the hero section to better match our brand guidelines.',
      timestamp: '2023-08-25T15:30:00Z',
      read: true,
      attachments: [],
      reactions: []
    },
    {
      id: 'm4',
      conversationId: '1',
      sender: {
        id: '101',
        name: 'John Smith',
        avatar: '/avatars/john.jpg',
        type: 'agency' as const
      },
      content: 'That makes sense. I\'ll work on some revisions to the hero section and get those to you by tomorrow morning.',
      timestamp: '2023-08-25T16:00:00Z',
      read: true,
      attachments: [],
      reactions: []
    },
    {
      id: 'm5',
      conversationId: '1',
      sender: {
        id: '101',
        name: 'John Smith',
        avatar: '/avatars/john.jpg',
        type: 'agency' as const
      },
      content: 'Hi Jane, I\'ve updated the hero section based on your feedback. Let me know what you think!',
      timestamp: '2023-08-29T09:30:00Z',
      read: false,
      attachments: ['homepage-v3.pdf'],
      reactions: []
    },
    {
      id: 'm6',
      conversationId: '1',
      sender: {
        id: '101',
        name: 'John Smith',
        avatar: '/avatars/john.jpg',
        type: 'agency' as const
      },
      content: 'Also included a variation that uses your secondary brand color as well.',
      timestamp: '2023-08-29T14:30:00Z',
      read: false,
      attachments: ['homepage-v3-alt.pdf'],
      reactions: []
    },
    
    // Conversation 2: Logo Revision Request
    {
      id: 'm7',
      conversationId: '2',
      sender: {
        id: '201',
        name: 'Jane Doe',
        avatar: '/avatars/jane.jpg',
        type: 'client' as const
      },
      content: 'Hi Michael, I\'ve been thinking about our logo and I feel it\'s not quite there yet.',
      timestamp: '2023-08-26T14:20:00Z',
      read: true,
      attachments: [],
      reactions: []
    },
    {
      id: 'm8',
      conversationId: '2',
      sender: {
        id: '102',
        name: 'Michael Brown',
        avatar: '/avatars/michael.jpg',
        type: 'agency' as const
      },
      content: 'I understand, Jane. What aspects would you like to revisit?',
      timestamp: '2023-08-26T14:45:00Z',
      read: true,
      attachments: [],
      reactions: []
    },
    {
      id: 'm9',
      conversationId: '2',
      sender: {
        id: '201',
        name: 'Jane Doe',
        avatar: '/avatars/jane.jpg',
        type: 'client' as const
      },
      content: 'We need to make the logo a bit more vibrant. Can we try some different color options?',
      timestamp: '2023-08-28T11:15:00Z',
      read: true,
      attachments: [],
      reactions: [{ emoji: '👍', user: '102' }]
    },
    
    // Conversation 3: Content Strategy Discussion
    {
      id: 'm10',
      conversationId: '3',
      sender: {
        id: '103',
        name: 'Sarah Wilson',
        avatar: '/avatars/sarah.jpg',
        type: 'agency' as const
      },
      content: 'Hi Jane, I wanted to touch base about your content strategy for the next quarter.',
      timestamp: '2023-08-25T09:00:00Z',
      read: true,
      attachments: [],
      reactions: []
    },
    {
      id: 'm11',
      conversationId: '3',
      sender: {
        id: '201',
        name: 'Jane Doe',
        avatar: '/avatars/jane.jpg',
        type: 'client' as const
      },
      content: 'Hi Sarah, that sounds good. I\'ve been thinking about focusing more on case studies.',
      timestamp: '2023-08-25T09:30:00Z',
      read: true,
      attachments: [],
      reactions: []
    },
    {
      id: 'm12',
      conversationId: '3',
      sender: {
        id: '103',
        name: 'Sarah Wilson',
        avatar: '/avatars/sarah.jpg',
        type: 'agency' as const
      },
      content: 'Let\'s schedule a call to discuss the blog content strategy for next quarter.',
      timestamp: '2023-08-25T09:45:00Z',
      read: false,
      attachments: [],
      reactions: []
    }
  ]
}; 
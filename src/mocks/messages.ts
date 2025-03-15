import { Thread, Message } from '@/types/message';
import { v4 as uuidv4 } from 'uuid';

export const threads: Thread[] = [
  {
    id: '1',
    title: 'Homepage Design Feedback',
    projectId: '1',
    createdAt: '2023-08-25T10:00:00Z',
    updatedAt: '2023-08-29T14:30:00Z',
    participants: [
      {
        id: '101',
        name: 'John Smith',
        avatar: '/avatars/john.jpg',
        role: 'agency',
      },
      {
        id: '201',
        name: 'Jane Doe',
        role: 'client',
        avatar: '/avatars/jane.jpg',
      },
    ],
    messages: [
      {
        id: 'm1',
        content: 'Hi Jane, I\'ve uploaded the latest homepage designs for your review. Could you please take a look and provide feedback by tomorrow?',
        createdAt: '2023-08-25T10:00:00Z',
        sender: {
          id: '101',
          name: 'John Smith',
          avatar: '/avatars/john.jpg',
          role: 'agency',
        },
        attachments: [
          {
            id: 'a1',
            name: 'homepage-v2.pdf',
            type: 'pdf',
            size: 2457600,
            url: '/documents/homepage-v2.pdf',
            thumbnailUrl: '/documents/homepage-v2-thumb.jpg',
            uploadedAt: '2023-08-25T09:58:00Z',
          },
        ],
        reactions: [],
        read: true,
        threadId: '1',
      },
      {
        id: 'm2',
        content: 'I\'ll take a look today and get back to you with my thoughts. Are there any specific areas you want me to focus on?',
        createdAt: '2023-08-25T13:45:00Z',
        sender: {
          id: '201',
          name: 'Jane Doe',
          avatar: '/avatars/jane.jpg',
          role: 'client',
        },
        attachments: [],
        reactions: [
          {
            type: '👍',
            count: 1,
            users: [
              {
                id: '101',
                name: 'John Smith',
              },
            ],
          },
        ],
        read: true,
        threadId: '1',
      },
      {
        id: 'm3',
        content: 'The main areas to focus on would be the hero section and the product showcase. We made significant changes there based on our last discussion.',
        createdAt: '2023-08-25T14:20:00Z',
        sender: {
          id: '101',
          name: 'John Smith',
          avatar: '/avatars/john.jpg',
          role: 'agency',
        },
        attachments: [],
        reactions: [],
        read: true,
        threadId: '1',
      },
      {
        id: 'm4',
        content: 'I\'ve reviewed the designs and I really like the direction. The hero section is much stronger now. I have a few suggestions for the product showcase though - could we make the images larger and reduce the text?',
        createdAt: '2023-08-26T09:10:00Z',
        sender: {
          id: '201',
          name: 'Jane Doe',
          avatar: '/avatars/jane.jpg',
          role: 'client',
        },
        attachments: [
          {
            id: 'a2',
            name: 'feedback-sketch.jpg',
            type: 'image',
            size: 1245000,
            url: '/documents/feedback-sketch.jpg',
            thumbnailUrl: '/documents/feedback-sketch-thumb.jpg',
            uploadedAt: '2023-08-26T09:08:00Z',
          },
        ],
        reactions: [
          {
            type: '❤️',
            count: 1,
            users: [
              {
                id: '101',
                name: 'John Smith',
              },
            ],
          },
        ],
        read: true,
        threadId: '1',
      },
      {
        id: 'm5',
        content: 'Those are great suggestions. I\'ll work on the revisions and have a new version for you by tomorrow.',
        createdAt: '2023-08-26T10:30:00Z',
        sender: {
          id: '101',
          name: 'John Smith',
          avatar: '/avatars/john.jpg',
          role: 'agency',
        },
        attachments: [],
        reactions: [],
        read: true,
        threadId: '1',
      },
      {
        id: 'm6',
        content: 'Here\'s the revised version with larger product images and less text as requested. Let me know what you think!',
        createdAt: '2023-08-29T14:30:00Z',
        sender: {
          id: '101',
          name: 'John Smith',
          avatar: '/avatars/john.jpg',
          role: 'agency',
        },
        attachments: [
          {
            id: 'a3',
            name: 'homepage-v3.pdf',
            type: 'pdf',
            size: 2845000,
            url: '/documents/homepage-v3.pdf',
            thumbnailUrl: '/documents/homepage-v3-thumb.jpg',
            uploadedAt: '2023-08-29T14:28:00Z',
          },
        ],
        reactions: [],
        read: false,
        threadId: '1',
      },
    ],
    unreadCount: 1,
    lastMessage: {
      id: 'm6',
      content: 'Here\'s the revised version with larger product images and less text as requested. Let me know what you think!',
      createdAt: '2023-08-29T14:30:00Z',
      sender: {
        id: '101',
        name: 'John Smith',
        avatar: '/avatars/john.jpg',
        role: 'agency',
      },
      attachments: [
        {
          id: 'a3',
          name: 'homepage-v3.pdf',
          type: 'pdf',
          size: 2845000,
          url: '/documents/homepage-v3.pdf',
          thumbnailUrl: '/documents/homepage-v3-thumb.jpg',
          uploadedAt: '2023-08-29T14:28:00Z',
        },
      ],
      reactions: [],
      read: false,
      threadId: '1',
    },
  },
  {
    id: '2',
    title: 'Project Timeline Update',
    projectId: '1',
    createdAt: '2023-08-20T09:00:00Z',
    updatedAt: '2023-08-28T16:15:00Z',
    participants: [
      {
        id: '102',
        name: 'Sarah Johnson',
        avatar: '/avatars/sarah.jpg',
        role: 'agency',
      },
      {
        id: '201',
        name: 'Jane Doe',
        avatar: '/avatars/jane.jpg',
        role: 'client',
      },
      {
        id: '202',
        name: 'Robert Brown',
        avatar: '/avatars/robert.jpg',
        role: 'client',
      },
    ],
    messages: [
      {
        id: 'm7',
        content: 'Hello everyone, I wanted to discuss a potential adjustment to our project timeline. We may need to extend the design phase by one week due to some additional requirements.',
        createdAt: '2023-08-20T09:00:00Z',
        sender: {
          id: '102',
          name: 'Sarah Johnson',
          avatar: '/avatars/sarah.jpg',
          role: 'agency',
        },
        attachments: [
          {
            id: 'a4',
            name: 'revised-timeline.xlsx',
            type: 'sheet',
            size: 1560000,
            url: '/documents/revised-timeline.xlsx',
            uploadedAt: '2023-08-20T08:58:00Z',
          },
        ],
        reactions: [],
        read: true,
        threadId: '2',
      },
      {
        id: 'm8',
        content: 'I understand the need for extension, but how will this affect our launch date? We have marketing campaigns scheduled.',
        createdAt: '2023-08-20T10:30:00Z',
        sender: {
          id: '202',
          name: 'Robert Brown',
          avatar: '/avatars/robert.jpg',
          role: 'client',
        },
        attachments: [],
        reactions: [],
        read: true,
        threadId: '2',
      },
      {
        id: 'm9',
        content: 'We can still maintain the same launch date by slightly condensing the testing phase. I\'ve outlined the adjusted schedule in the attached file.',
        createdAt: '2023-08-20T11:15:00Z',
        sender: {
          id: '102',
          name: 'Sarah Johnson',
          avatar: '/avatars/sarah.jpg',
          role: 'agency',
        },
        attachments: [],
        reactions: [
          {
            type: '👍',
            count: 2,
            users: [
              {
                id: '201',
                name: 'Jane Doe',
              },
              {
                id: '202',
                name: 'Robert Brown',
              },
            ],
          },
        ],
        read: true,
        threadId: '2',
      },
      {
        id: 'm10',
        content: 'That works for us. Thank you for accommodating the launch date.',
        createdAt: '2023-08-20T11:45:00Z',
        sender: {
          id: '201',
          name: 'Jane Doe',
          avatar: '/avatars/jane.jpg',
          role: 'client',
        },
        attachments: [],
        reactions: [],
        read: true,
        threadId: '2',
      },
      {
        id: 'm11',
        content: 'Update: We\'ve completed the additional design requirements ahead of schedule. We might be able to get back to the original timeline. I\'ll confirm by end of week.',
        createdAt: '2023-08-28T16:15:00Z',
        sender: {
          id: '102',
          name: 'Sarah Johnson',
          avatar: '/avatars/sarah.jpg',
          role: 'agency',
        },
        attachments: [],
        reactions: [
          {
            type: '🎉',
            count: 2,
            users: [
              {
                id: '201',
                name: 'Jane Doe',
              },
              {
                id: '202',
                name: 'Robert Brown',
              },
            ],
          },
        ],
        read: true,
        threadId: '2',
      },
    ],
    unreadCount: 0,
    lastMessage: {
      id: 'm11',
      content: 'Update: We\'ve completed the additional design requirements ahead of schedule. We might be able to get back to the original timeline. I\'ll confirm by end of week.',
      createdAt: '2023-08-28T16:15:00Z',
      sender: {
        id: '102',
        name: 'Sarah Johnson',
        avatar: '/avatars/sarah.jpg',
        role: 'agency',
      },
      attachments: [],
      reactions: [
        {
          type: '🎉',
          count: 2,
          users: [
            {
              id: '201',
              name: 'Jane Doe',
            },
            {
              id: '202',
              name: 'Robert Brown',
            },
          ],
        },
      ],
      read: true,
      threadId: '2',
    },
  },
];

export const getThread = (id: string): Thread | undefined => {
  return threads.find(thread => thread.id === id);
};

export const getThreadsByProject = (projectId: string): Thread[] => {
  return threads.filter(thread => thread.projectId === projectId);
}; 
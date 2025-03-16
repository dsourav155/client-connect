import { Document } from '@/types/document';
import { v4 as uuidv4 } from 'uuid';

export const documents: Document[] = [
  {
    id: 'd1',
    title: 'Website Redesign - Project Brief',
    description: 'Project scope, goals, and requirements',
    type: 'proposal',
    status: 'approved',
    url: '/documents/project-brief.pdf',
    thumbnailUrl: '/documents/project-brief-thumb.jpg',
    size: 1245000,
    createdAt: '2023-08-10T09:00:00Z',
    updatedAt: '2023-08-12T14:30:00Z',
    createdBy: {
      id: '101',
      name: 'John Smith',
      avatar: '/avatars/john.jpg',
      role: 'agency',
    },
    projectId: '1',
    category: 'Planning',
    tags: ['brief', 'requirements', 'scope'],
    version: 1,
  },
  {
    id: 'd2',
    title: 'Homepage Design Mockup',
    description: 'Initial design concept for the homepage',
    type: 'design',
    status: 'approved',
    url: '/documents/homepage-design.jpg',
    thumbnailUrl: '/documents/homepage-design-thumb.jpg',
    size: 3560000,
    createdAt: '2023-08-15T11:20:00Z',
    updatedAt: '2023-08-28T09:45:00Z',
    createdBy: {
      id: '102',
      name: 'Sarah Johnson',
      avatar: '/avatars/sarah.jpg',
      role: 'agency',
    },
    projectId: '1',
    category: 'Design',
    tags: ['homepage', 'mockup', 'design'],
    version: 3,
    previousVersions: [
      {
        id: 'd2-v1',
        version: 1,
        url: '/documents/homepage-design-v1.jpg',
        createdAt: '2023-08-15T11:20:00Z',
      },
      {
        id: 'd2-v2',
        version: 2,
        url: '/documents/homepage-design-v2.jpg',
        createdAt: '2023-08-22T15:45:00Z',
      },
    ],
    feedback: [
      {
        id: 'f1',
        content: 'The hero section looks great, but can we make the call-to-action button more prominent?',
        createdAt: '2023-08-16T10:30:00Z',
        createdBy: {
          id: '201',
          name: 'Jane Doe',
          avatar: '/avatars/jane.jpg',
          role: 'client',
        },
      },
      {
        id: 'f2',
        content: 'I\'ve updated the CTA button to be more prominent. Also adjusted the color scheme slightly.',
        createdAt: '2023-08-22T15:40:00Z',
        createdBy: {
          id: '102',
          name: 'Sarah Johnson',
          avatar: '/avatars/sarah.jpg',
          role: 'agency',
        },
      },
      {
        id: 'f3',
        content: 'This looks perfect now. Approved!',
        createdAt: '2023-08-23T09:15:00Z',
        createdBy: {
          id: '201',
          name: 'Jane Doe',
          avatar: '/avatars/jane.jpg',
          role: 'client',
        },
      },
    ],
  },
  {
    id: 'd3',
    title: 'About Us Page Wireframe',
    description: 'Wireframe layout for the About Us page',
    type: 'design',
    status: 'pending_approval',
    url: '/documents/about-wireframe.pdf',
    thumbnailUrl: '/documents/about-wireframe-thumb.jpg',
    size: 1845000,
    createdAt: '2023-08-29T13:00:00Z',
    updatedAt: '2023-08-29T13:00:00Z',
    createdBy: {
      id: '103',
      name: 'Michael Lee',
      avatar: '/avatars/michael.jpg',
      role: 'agency',
    },
    projectId: '1',
    category: 'Design',
    tags: ['wireframe', 'about-us', 'layout'],
    version: 1,
  },
  {
    id: 'd4',
    title: 'Content Guidelines',
    description: 'Style guide and content requirements',
    type: 'other',
    status: 'draft',
    url: '/documents/content-guidelines.docx',
    size: 780000,
    createdAt: '2023-08-28T16:45:00Z',
    updatedAt: '2023-08-28T16:45:00Z',
    createdBy: {
      id: '104',
      name: 'Emily Wilson',
      avatar: '/avatars/emily.jpg',
      role: 'agency',
    },
    projectId: '1',
    category: 'Content',
    tags: ['guidelines', 'content', 'style-guide'],
    version: 1,
  },
  {
    id: 'd5',
    title: 'Technical Requirements',
    description: 'Technical specifications and requirements for development',
    type: 'other',
    status: 'approved',
    url: '/documents/tech-requirements.pdf',
    thumbnailUrl: '/documents/tech-requirements-thumb.jpg',
    size: 2150000,
    createdAt: '2023-08-05T10:15:00Z',
    updatedAt: '2023-08-06T14:20:00Z',
    createdBy: {
      id: '105',
      name: 'David Chen',
      avatar: '/avatars/david.jpg',
      role: 'agency',
    },
    projectId: '1',
    category: 'Technical',
    tags: ['requirements', 'technical', 'specifications'],
    version: 1,
  },
  {
    id: 'd6',
    title: 'Mobile App Wireframes',
    description: 'Initial wireframes for mobile app',
    type: 'design',
    status: 'approved',
    url: '/documents/mobile-wireframes.pdf',
    thumbnailUrl: '/documents/mobile-wireframes-thumb.jpg',
    size: 4230000,
    createdAt: '2023-07-20T09:30:00Z',
    updatedAt: '2023-07-25T15:40:00Z',
    createdBy: {
      id: '106',
      name: 'Lisa Park',
      avatar: '/avatars/lisa.jpg',
      role: 'agency',
    },
    projectId: '2',
    category: 'Design',
    tags: ['mobile', 'wireframes', 'ux'],
    version: 2,
    previousVersions: [
      {
        id: 'd6-v1',
        version: 1,
        url: '/documents/mobile-wireframes-v1.pdf',
        createdAt: '2023-07-20T09:30:00Z',
      },
    ],
    feedback: [
      {
        id: 'f4',
        content: 'The user flow for login seems a bit complicated. Can we simplify it?',
        createdAt: '2023-07-21T11:20:00Z',
        createdBy: {
          id: '202',
          name: 'Robert Brown',
          avatar: '/avatars/robert.jpg',
          role: 'client',
        },
      },
      {
        id: 'f5',
        content: 'Updated with a simplified login flow as requested.',
        createdAt: '2023-07-25T15:35:00Z',
        createdBy: {
          id: '106',
          name: 'Lisa Park',
          avatar: '/avatars/lisa.jpg',
          role: 'agency',
        },
      },
    ],
  },
];

export const getDocument = (id: string): Document | undefined => {
  return documents.find(doc => doc.id === id);
};

export const getDocumentsByProject = (projectId: string): Document[] => {
  return documents.filter(doc => doc.projectId === projectId);
};

export const getDocumentsByStatus = (status: Document['status']): Document[] => {
  return documents.filter(doc => doc.status === status);
}; 
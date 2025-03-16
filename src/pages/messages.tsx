import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { ConversationList } from '../components/communication/ConversationList';
import { MessageThread } from '../components/communication/MessageThread';
import PageContainer from '../components/layout/PageContainer';
import { mockMessages } from '../mocks/messages';
import { Conversation, Message } from '../types/message';

const MessagesPage: NextPage = () => {
  // Ensure mockMessages and its properties exist with default values if needed
  const conversations = mockMessages?.conversations || [];
  
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(
    conversations.length > 0 ? conversations[0] : null
  );

  const [messages, setMessages] = useState<Message[]>(
    activeConversation && mockMessages?.messages 
      ? mockMessages.messages.filter(message => message.conversationId === activeConversation.id)
      : []
  );

  const handleSelectConversation = (conversation: Conversation) => {
    setActiveConversation(conversation);
    setMessages(
      mockMessages?.messages 
        ? mockMessages.messages.filter(message => message.conversationId === conversation.id)
        : []
    );
  };

  const handleSendMessage = (content: string, attachments: string[] = []) => {
    if (!activeConversation) return;
    
    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      conversationId: activeConversation.id,
      sender: {
        id: 'client-1',
        name: 'You',
        avatar: '/avatars/client.png',
        type: 'client'
      },
      content,
      attachments,
      timestamp: new Date().toISOString(),
      read: true,
      reactions: []
    };
    
    setMessages(prev => [...prev, newMessage]);
  };

  // Define sidebar links for navigation
  const sidebarLinks = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      name: 'Messages',
      href: '/messages',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      name: 'Documents',
      href: '/documents',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      name: 'Invoices',
      href: '/invoices',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    }
  ];

  // Logo component
  const logo = (
    <div className="flex items-center">
      <span className="text-blue-600 text-xl font-bold">Client Connect</span>
    </div>
  );

  // User info for the sidebar
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: '/avatars/client.png',
  };

  return (
    <>
      <Head>
        <title>Messages | Client Connect</title>
      </Head>
      <PageContainer
        title="Messages"
        sidebarLinks={sidebarLinks}
        logo={logo}
        user={user}
      >
        <div className="flex flex-col md:flex-row h-[calc(100vh-80px)]">
          <div className="w-full md:w-1/3 border-r border-gray-200 overflow-y-auto">
            <ConversationList 
              conversations={conversations} 
              activeConversationId={activeConversation?.id || ''}
              onSelectConversation={handleSelectConversation}
            />
          </div>
          <div className="w-full md:w-2/3 flex flex-col">
            {activeConversation ? (
              <MessageThread 
                conversation={activeConversation}
                messages={messages}
                onSendMessage={handleSendMessage}
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">Select a conversation to start messaging</p>
              </div>
            )}
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default MessagesPage; 
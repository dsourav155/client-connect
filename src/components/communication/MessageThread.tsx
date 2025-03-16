import React, { useRef, useEffect } from 'react';
import { Conversation, Message } from '../../types/message';
import { MessageInput } from './MessageInput';

interface MessageThreadProps {
  conversation: Conversation;
  messages: Message[];
  onSendMessage: (content: string, attachments: string[]) => void;
}

export const MessageThread: React.FC<MessageThreadProps> = ({
  conversation,
  messages,
  onSendMessage
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  };

  const groupMessagesByDate = () => {
    const groups: { [key: string]: Message[] } = {};
    
    messages.forEach((message) => {
      const date = new Date(message.timestamp);
      const dateKey = date.toLocaleDateString();
      
      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      
      groups[dateKey].push(message);
    });
    
    return Object.entries(groups);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <h2 className="text-lg font-medium text-gray-900">{conversation.title}</h2>
          <span className="text-sm text-gray-500">
            {conversation.participants.length} participant{conversation.participants.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 my-8">
            <p>No messages yet</p>
            <p className="text-sm mt-1">Start the conversation by sending a message</p>
          </div>
        ) : (
          groupMessagesByDate().map(([dateKey, dateMessages]) => (
            <div key={dateKey} className="space-y-4">
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink mx-4 text-xs text-gray-500">{dateKey}</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>
              
              {dateMessages.map((message) => {
                const isClient = message.sender.type === 'client';
                return (
                  <div 
                    key={message.id} 
                    className={`flex ${isClient ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start max-w-[75%] ${isClient ? 'flex-row-reverse' : ''}`}>
                      {!isClient && (
                        <img 
                          src={message.sender.avatar || '/avatars/default.png'} 
                          alt={message.sender.name}
                          className="h-10 w-10 rounded-full mr-3"
                        />
                      )}
                      <div>
                        <div className={`rounded-xl p-3 ${
                          isClient 
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          <p className="text-sm">{message.content}</p>
                          {message.attachments && message.attachments.length > 0 && (
                            <div className="mt-2 space-y-2">
                              {message.attachments.map((attachment, index) => (
                                <div 
                                  key={index}
                                  className="flex items-center p-2 rounded bg-gray-50 bg-opacity-20"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                  </svg>
                                  <span className="text-sm truncate">{attachment}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className={`text-xs text-gray-500 mt-1 ${isClient ? 'text-right' : ''}`}>
                          {formatDate(message.timestamp)}
                        </div>
                      </div>
                      {isClient && (
                        <img 
                          src={message.sender.avatar || '/avatars/default.png'}
                          alt={message.sender.name}
                          className="h-10 w-10 rounded-full ml-3"
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-200">
        <MessageInput onSendMessage={onSendMessage} />
      </div>
    </div>
  );
}; 
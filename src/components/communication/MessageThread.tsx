import React, { useState } from 'react';
import { 
  HandThumbUpIcon, 
  ChatBubbleLeftIcon, 
  EllipsisHorizontalIcon,
  HandThumbUpIcon as HandThumbUpSolidIcon
} from '@heroicons/react/24/solid';
import FileAttachment from './FileAttachment';
import MessageInput from './MessageInput';
import { Message } from '@/types/message';
import Image from 'next/image';

interface MessageThreadProps {
  messages: Message[];
  onSendMessage: (text: string, attachments: any[], parentId?: string) => void;
}

const MessageThread: React.FC<MessageThreadProps> = ({ messages, onSendMessage }) => {
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [reactedMessages, setReactedMessages] = useState<Record<string, boolean>>({});

  const handleReaction = (messageId: string) => {
    setReactedMessages((prev) => ({
      ...prev,
      [messageId]: !prev[messageId]
    }));
  };

  const handleReply = (messageId: string) => {
    setReplyingTo(messageId === replyingTo ? null : messageId);
  };

  const handleSendReply = (messageId: string, text: string, attachments: any[]) => {
    onSendMessage(text, attachments, messageId);
    setReplyingTo(null);
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).format(date);
  };

  // Convert Markdown-like syntax to HTML
  const formatMessageText = (text: string) => {
    let formattedText = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/_(.*?)_/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/\n- (.*?)(\n|$)/g, '<li>$1</li>');
    
    if (formattedText.includes('<li>')) {
      formattedText = `<ul>${formattedText}</ul>`;
    }
    
    return formattedText;
  };

  const renderMessage = (message: Message, isReply = false) => {
    const hasReacted = reactedMessages[message.id];
    
    return (
      <div 
        key={message.id} 
        className={`mb-6 ${isReply ? 'ml-12 mt-4' : ''}`}
        id={`message-${message.id}`}
      >
        <div className="flex items-start">
          <div className="mr-3 flex-shrink-0">
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-200">
              {message.sender.avatar && (
                <Image
                  src={message.sender.avatar}
                  alt={message.sender.name}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center mb-1">
              <span className="font-medium text-sm">{message.sender.name}</span>
              <span className="text-xs text-gray-500 ml-2">
                {formatTimestamp(message.timestamp)}
              </span>
              
              {message.unread && (
                <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                  New
                </span>
              )}
            </div>
            
            <div 
              className="text-sm text-gray-800"
              dangerouslySetInnerHTML={{ __html: formatMessageText(message.text) }} 
            />
            
            {message.attachments && message.attachments.length > 0 && (
              <div className="mt-2">
                {message.attachments.map((file) => (
                  <FileAttachment 
                    key={file.id} 
                    file={file} 
                  />
                ))}
              </div>
            )}
            
            <div className="flex mt-2">
              <button 
                className={`flex items-center ${hasReacted ? 'text-blue-500' : 'text-gray-500'} hover:text-blue-600 mr-4 text-xs`}
                onClick={() => handleReaction(message.id)}
              >
                {hasReacted ? (
                  <HandThumbUpSolidIcon className="w-4 h-4 mr-1" />
                ) : (
                  <HandThumbUpIcon className="w-4 h-4 mr-1" />
                )}
                <span>{hasReacted ? 'Liked' : 'Like'}</span>
                {message.reactions && message.reactions > 0 && (
                  <span className="ml-1">({message.reactions + (hasReacted ? 1 : 0)})</span>
                )}
              </button>
              
              <button 
                className="flex items-center text-gray-500 hover:text-blue-600 mr-4 text-xs"
                onClick={() => handleReply(message.id)}
              >
                <ChatBubbleLeftIcon className="w-4 h-4 mr-1" />
                <span>Reply</span>
                {message.replies && message.replies.length > 0 && (
                  <span className="ml-1">({message.replies.length})</span>
                )}
              </button>
              
              <button className="flex items-center text-gray-500 hover:text-gray-700 text-xs">
                <EllipsisHorizontalIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        {replyingTo === message.id && (
          <div className="ml-11 mt-3">
            <MessageInput 
              onSend={(text, attachments) => handleSendReply(message.id, text, attachments)} 
            />
          </div>
        )}
        
        {message.replies && message.replies.length > 0 && (
          <div className="mt-2">
            {message.replies.map((reply) => renderMessage(reply, true))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg p-4">
      <div className="mb-6">
        {messages.map((message) => renderMessage(message))}
      </div>
      
      <div className="pt-4 border-t">
        <MessageInput onSend={(text, attachments) => onSendMessage(text, attachments)} />
      </div>
    </div>
  );
};

export default MessageThread; 
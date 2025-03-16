import React from 'react';
import { Conversation } from '../../types/message';

interface ConversationListProps {
  conversations: Conversation[];
  activeConversationId: string;
  onSelectConversation: (conversation: Conversation) => void;
}

export const ConversationList: React.FC<ConversationListProps> = ({
  conversations,
  activeConversationId,
  onSelectConversation
}) => {
  return (
    <div className="h-full">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Conversations</h2>
        <div className="mt-2">
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
      
      <div className="overflow-y-auto">
        {conversations.length === 0 ? (
          <div className="p-4 text-center text-gray-500">No conversations found</div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {conversations.map((conversation) => {
              const isActive = conversation.id === activeConversationId;
              return (
                <li 
                  key={conversation.id}
                  className={`cursor-pointer hover:bg-gray-50 ${isActive ? 'bg-blue-50' : ''}`}
                  onClick={() => onSelectConversation(conversation)}
                >
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-3">
                        {conversation.participants[0].avatar ? (
                          <img 
                            src={conversation.participants[0].avatar} 
                            alt={conversation.participants[0].name}
                            className="h-10 w-10 rounded-full"
                          />
                        ) : (
                          <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                            <span className="text-gray-600 font-medium">
                              {conversation.participants[0].name.charAt(0)}
                            </span>
                          </div>
                        )}
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">{conversation.title}</h3>
                          <p className="text-xs text-gray-500 mt-1">
                            {conversation.participants.map(p => p.name).join(', ')}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-xs text-gray-500">
                          {new Date(conversation.lastMessage.timestamp).toLocaleDateString()}
                        </span>
                        {conversation.unreadCount > 0 && (
                          <span className="bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center mt-1">
                            {conversation.unreadCount}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 truncate">
                      {conversation.lastMessage.content}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}; 
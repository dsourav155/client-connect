import React, { useState } from 'react';
import { 
  PaperClipIcon, 
  PaperAirplaneIcon,
  BoltIcon,
  DocumentIcon,
  PhotoIcon,
  ListBulletIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';
import FileAttachment from './FileAttachment';

interface MessageInputProps {
  onSend: (message: string, attachments: any[]) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSend }) => {
  const [message, setMessage] = useState('');
  const [attachments, setAttachments] = useState<any[]>([]);
  const [showFormatting, setShowFormatting] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() === '' && attachments.length === 0) return;
    
    onSend(message, attachments);
    setMessage('');
    setAttachments([]);
  };

  const handleFileAttach = () => {
    // In a real app, this would open a file picker
    // For now, we'll just simulate adding a file
    const mockFile = {
      id: `file-${Date.now()}`,
      name: `Document-${Math.floor(Math.random() * 1000)}.pdf`,
      size: `${Math.floor(Math.random() * 1000) + 100} KB`,
      type: 'pdf' as const
    };
    
    setAttachments([...attachments, mockFile]);
  };

  const removeAttachment = (id: string) => {
    setAttachments(attachments.filter(file => file.id !== id));
  };

  const insertFormatting = (tag: string) => {
    // Simple formatting by wrapping selected text or inserting placeholders
    const textarea = document.getElementById('message-input') as HTMLTextAreaElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = message.substring(start, end);
    let replacement = '';
    
    switch(tag) {
      case 'bold':
        replacement = `**${selectedText || 'bold text'}**`;
        break;
      case 'italic':
        replacement = `_${selectedText || 'italic text'}_`;
        break;
      case 'list':
        replacement = `\n- ${selectedText || 'list item'}\n- `;
        break;
      case 'code':
        replacement = `\`${selectedText || 'code'}\``;
        break;
    }
    
    const newMessage = message.substring(0, start) + replacement + message.substring(end);
    setMessage(newMessage);
    
    // Focus back on textarea after formatting is applied
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + replacement.length, start + replacement.length);
    }, 0);
  };

  return (
    <div className="border rounded-lg bg-white p-3">
      {attachments.length > 0 && (
        <div className="mb-2 max-h-32 overflow-y-auto">
          {attachments.map((file) => (
            <FileAttachment 
              key={file.id} 
              file={file} 
              onRemove={removeAttachment} 
            />
          ))}
        </div>
      )}
      
      <form onSubmit={handleSend} className="space-y-2">
        <div className="relative">
          <textarea
            id="message-input"
            className="w-full border border-gray-300 rounded-lg p-3 pr-10 min-h-[100px] focus:ring-primary focus:border-primary"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            type="button"
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            onClick={() => setShowFormatting(!showFormatting)}
          >
            <BoltIcon className="w-5 h-5" />
          </button>
        </div>
        
        {showFormatting && (
          <div className="flex space-x-2 px-1">
            <button 
              type="button" 
              className="p-1.5 rounded hover:bg-gray-100" 
              title="Bold"
              onClick={() => insertFormatting('bold')}
            >
              <span className="font-bold text-sm">B</span>
            </button>
            <button 
              type="button" 
              className="p-1.5 rounded hover:bg-gray-100" 
              title="Italic"
              onClick={() => insertFormatting('italic')}
            >
              <span className="italic text-sm">I</span>
            </button>
            <button 
              type="button" 
              className="p-1.5 rounded hover:bg-gray-100" 
              title="Bullet List"
              onClick={() => insertFormatting('list')}
            >
              <ListBulletIcon className="w-4 h-4" />
            </button>
            <button 
              type="button" 
              className="p-1.5 rounded hover:bg-gray-100" 
              title="Code"
              onClick={() => insertFormatting('code')}
            >
              <CodeBracketIcon className="w-4 h-4" />
            </button>
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <button 
              type="button" 
              className="p-1.5 rounded hover:bg-gray-100" 
              title="Attach File"
              onClick={handleFileAttach}
            >
              <PaperClipIcon className="w-5 h-5 text-gray-500" />
            </button>
            <button 
              type="button" 
              className="p-1.5 rounded hover:bg-gray-100" 
              title="Attach Document"
              onClick={handleFileAttach}
            >
              <DocumentIcon className="w-5 h-5 text-gray-500" />
            </button>
            <button 
              type="button" 
              className="p-1.5 rounded hover:bg-gray-100" 
              title="Attach Image"
              onClick={handleFileAttach}
            >
              <PhotoIcon className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          
          <button
            type="submit"
            className={`p-2 rounded-full ${message.trim() || attachments.length > 0 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}
            disabled={message.trim() === '' && attachments.length === 0}
          >
            <PaperAirplaneIcon className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput; 
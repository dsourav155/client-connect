import React, { useState, useRef } from 'react';

interface MessageInputProps {
  onSendMessage: (content: string, attachments: string[]) => void;
}

export const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [attachments, setAttachments] = useState<string[]>([]);
  const [showFormatting, setShowFormatting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (message.trim() === '' && attachments.length === 0) return;
    
    onSendMessage(message, attachments);
    setMessage('');
    setAttachments([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    
    const newAttachments = Array.from(files).map(file => file.name);
    setAttachments([...attachments, ...newAttachments]);
    
    // Reset the input to allow selecting the same file again
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeAttachment = (index: number) => {
    const newAttachments = [...attachments];
    newAttachments.splice(index, 1);
    setAttachments(newAttachments);
  };

  const formatText = (type: 'bold' | 'italic' | 'link') => {
    const textarea = document.getElementById('message-input') as HTMLTextAreaElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = message.substring(start, end);
    
    let formattedText = '';
    let cursorPosition = 0;
    
    switch (type) {
      case 'bold':
        formattedText = `**${selectedText}**`;
        cursorPosition = start + 2;
        break;
      case 'italic':
        formattedText = `_${selectedText}_`;
        cursorPosition = start + 1;
        break;
      case 'link':
        formattedText = `[${selectedText}](url)`;
        cursorPosition = end + 3;
        break;
      default:
        return;
    }
    
    const newMessage = message.substring(0, start) + formattedText + message.substring(end);
    setMessage(newMessage);
    
    // Focus and set cursor position after state update
    setTimeout(() => {
      textarea.focus();
      
      // If text was selected, place cursor at the end of formatted text
      // Otherwise, place cursor at specific position for editing
      const newPosition = selectedText ? start + formattedText.length : cursorPosition;
      textarea.setSelectionRange(newPosition, newPosition);
    }, 0);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      {/* Attachments preview */}
      {attachments.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-2">
          {attachments.map((filename, index) => (
            <div 
              key={index} 
              className="flex items-center bg-gray-100 rounded-md px-3 py-1 text-sm text-gray-700"
            >
              <span className="truncate max-w-[150px]">{filename}</span>
              <button 
                type="button"
                onClick={() => removeAttachment(index)}
                className="ml-2 text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
      
      {/* Formatting toolbar */}
      {showFormatting && (
        <div className="flex items-center space-x-2 text-gray-500 border-b border-gray-200 pb-2">
          <button 
            type="button"
            onClick={() => formatText('bold')}
            className="p-1 hover:bg-gray-100 rounded"
            title="Bold"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </button>
          <button 
            type="button"
            onClick={() => formatText('italic')}
            className="p-1 hover:bg-gray-100 rounded"
            title="Italic"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </button>
          <button 
            type="button"
            onClick={() => formatText('link')}
            className="p-1 hover:bg-gray-100 rounded"
            title="Link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </button>
        </div>
      )}
      
      {/* Message input area */}
      <div className="flex items-end border border-gray-300 rounded-lg p-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
        <textarea
          id="message-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className="w-full resize-none focus:outline-none min-h-[60px] max-h-[150px]"
          rows={3}
        />
        
        <div className="flex items-center space-x-2 ml-2">
          <button
            type="button"
            onClick={() => setShowFormatting(!showFormatting)}
            className="text-gray-500 hover:text-gray-700"
            title="Formatting options"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          
          <input
            type="file"
            multiple
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          
          <button
            type="button"
            onClick={triggerFileInput}
            className="text-gray-500 hover:text-gray-700"
            title="Attach files"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
          </button>
          
          <button
            type="submit"
            className={`p-2 rounded-full ${
              message.trim() || attachments.length > 0
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!message.trim() && attachments.length === 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
}; 
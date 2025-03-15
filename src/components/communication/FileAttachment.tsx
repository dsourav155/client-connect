import React from 'react';
import { 
  DocumentTextIcon, 
  PhotoIcon, 
  DocumentIcon, 
  XMarkIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';

interface FileAttachmentProps {
  file: {
    id: string;
    name: string;
    size: string;
    type: 'image' | 'document' | 'pdf' | 'other';
  };
  onRemove?: (id: string) => void;
  uploading?: boolean;
}

const FileAttachment: React.FC<FileAttachmentProps> = ({ file, onRemove, uploading = false }) => {
  const getIcon = () => {
    switch (file.type) {
      case 'image':
        return <PhotoIcon className="w-5 h-5 text-blue-500" />;
      case 'pdf':
        return <DocumentTextIcon className="w-5 h-5 text-red-500" />;
      case 'document':
        return <DocumentTextIcon className="w-5 h-5 text-green-500" />;
      default:
        return <DocumentIcon className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="flex items-center p-2 my-1 bg-gray-50 rounded-md border border-gray-200">
      <div className="flex items-center flex-1">
        <div className="mr-2">
          {getIcon()}
        </div>
        <div className="overflow-hidden">
          <p className="text-sm font-medium truncate">{file.name}</p>
          <p className="text-xs text-gray-500">{file.size}</p>
        </div>
      </div>
      <div className="flex items-center ml-2">
        {uploading ? (
          <div className="w-4 h-4 mr-2 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
        ) : (
          <button 
            className="p-1 text-gray-400 hover:text-gray-600 rounded-full"
            title="Download"
          >
            <ArrowDownTrayIcon className="w-4 h-4" />
          </button>
        )}
        {onRemove && (
          <button
            onClick={() => onRemove(file.id)}
            className="p-1 text-gray-400 hover:text-gray-600 rounded-full"
            title="Remove"
          >
            <XMarkIcon className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default FileAttachment; 
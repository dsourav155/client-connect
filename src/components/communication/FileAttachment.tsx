import React from 'react';

interface FileAttachmentProps {
  filename: string;
  size?: string;
  type?: string;
  downloadable?: boolean;
  onRemove?: () => void;
}

export const FileAttachment: React.FC<FileAttachmentProps> = ({
  filename,
  size = 'Unknown size',
  type = 'file',
  downloadable = false,
  onRemove
}) => {
  const getFileIcon = () => {
    const extension = filename.split('.').pop()?.toLowerCase();
    
    switch (extension) {
      case 'pdf':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        );
      case 'doc':
      case 'docx':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        );
      case 'xls':
      case 'xlsx':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 4a1 1 0 00-2 0v9.5A2.5 2.5 0 105.5 16H15a1 1 0 100-2H5.5A.5.5 0 015 13.5V4z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v9.5a.5.5 0 00.5.5H15a1 1 0 100-2H6.5a.5.5 0 00-.5-.5V3a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        );
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  return (
    <div className="flex items-center p-3 border border-gray-200 rounded-lg bg-white shadow-sm hover:bg-gray-50">
      <div className="mr-3">
        {getFileIcon()}
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-gray-900 truncate">{filename}</h4>
        <p className="text-xs text-gray-500">{size} • {type}</p>
      </div>
      
      <div className="flex items-center space-x-2 ml-4">
        {downloadable && (
          <button 
            type="button"
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            title="Download"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        )}
        
        {onRemove && (
          <button 
            type="button"
            onClick={onRemove}
            className="text-gray-500 hover:text-red-500 focus:outline-none"
            title="Remove"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}; 
/**
 * Format file size to a human-readable string
 */
export const formatFileSize = (sizeInBytes: number): string => {
  if (sizeInBytes < 1024) {
    return `${sizeInBytes} B`;
  }
  
  const sizeInKB = sizeInBytes / 1024;
  if (sizeInKB < 1024) {
    return `${Math.round(sizeInKB * 10) / 10} KB`;
  }
  
  const sizeInMB = sizeInKB / 1024;
  if (sizeInMB < 1024) {
    return `${Math.round(sizeInMB * 10) / 10} MB`;
  }
  
  const sizeInGB = sizeInMB / 1024;
  return `${Math.round(sizeInGB * 10) / 10} GB`;
};

/**
 * Get file extension from filename
 */
export const getFileExtension = (filename: string): string => {
  return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2);
};

/**
 * Get file type from file extension
 */
export const getFileType = (extension: string): 'image' | 'document' | 'spreadsheet' | 'presentation' | 'pdf' | 'other' => {
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp'];
  const documentExtensions = ['doc', 'docx', 'txt', 'rtf'];
  const spreadsheetExtensions = ['xls', 'xlsx', 'csv'];
  const presentationExtensions = ['ppt', 'pptx'];
  
  const ext = extension.toLowerCase();
  
  if (imageExtensions.includes(ext)) {
    return 'image';
  }
  
  if (documentExtensions.includes(ext)) {
    return 'document';
  }
  
  if (spreadsheetExtensions.includes(ext)) {
    return 'spreadsheet';
  }
  
  if (presentationExtensions.includes(ext)) {
    return 'presentation';
  }
  
  if (ext === 'pdf') {
    return 'pdf';
  }
  
  return 'other';
};

/**
 * Get file icon based on file type
 */
export const getFileIcon = (filename: string): string => {
  const extension = getFileExtension(filename);
  const type = getFileType(extension);
  
  switch (type) {
    case 'image':
      return '/icons/image.svg';
    case 'document':
      return '/icons/document.svg';
    case 'spreadsheet':
      return '/icons/spreadsheet.svg';
    case 'presentation':
      return '/icons/presentation.svg';
    case 'pdf':
      return '/icons/pdf.svg';
    default:
      return '/icons/file.svg';
  }
};
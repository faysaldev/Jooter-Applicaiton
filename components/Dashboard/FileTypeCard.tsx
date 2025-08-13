// Enhanced FileType Card
"use client";

import React from 'react';
import {
  FolderIcon,
  PhotoIcon,
  DocumentTextIcon,
  PencilSquareIcon,
  DocumentIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

interface FileTypeCardProps {
  icon: keyof typeof iconMap;
  name: string;
  totalItems: number;
  storageSize: string;
  backgroundColor: string;
  iconColor: string;
  gradient: string;
}

const iconMap = {
  Folder: FolderIcon,
  Image: PhotoIcon,
  FileText: DocumentTextIcon,
  FileEdit: PencilSquareIcon,
  File: DocumentIcon,
};

const FileTypeCard: React.FC<FileTypeCardProps> = ({
  icon,
  name,
  totalItems,
  storageSize,
  backgroundColor,
  iconColor,
  gradient,
}) => {
  const IconComponent = iconMap[icon] || iconMap.File;

  return (
    <div className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50/50 hover:from-white hover:to-blue-50/30 p-5 rounded-2xl border border-white/20 shadow-lg shadow-gray-500/5 hover:shadow-xl hover:shadow-gray-500/10 transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-1">
      {/* Background decoration */}
      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${gradient} opacity-30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div
              className="relative w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
              style={{ backgroundColor }}
            >
              <IconComponent className="w-6 h-6 transition-all duration-300" style={{ color: iconColor }} />
              <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg group-hover:text-blue-600 transition-colors duration-300">
                {name}
              </h3>
              <div className="flex items-center space-x-1 mt-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-gray-500 font-medium">Active</span>
              </div>
            </div>
          </div>
          
          <div className="p-2 rounded-xl bg-gray-100/50 group-hover:bg-blue-100 transition-all duration-300 group-hover:scale-110">
            <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all duration-300" />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 font-medium">Items</span>
            <span className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              {totalItems}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 font-medium">Storage</span>
            <span className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              {storageSize}
            </span>
          </div>
          
          {/* Progress bar */}
          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform origin-left scale-x-75 group-hover:scale-x-100 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
    </div>
  );
};

export default FileTypeCard;

// "use client";


// import React from 'react';
// import {
//   FolderIcon,
//   PhotoIcon,
//   DocumentTextIcon,
//   PencilSquareIcon,
//   DocumentIcon,
// } from '@heroicons/react/24/outline';

// interface FileTypeCardProps {
//   icon: keyof typeof iconMap;
//   name: string;
//   totalItems: number;
//   storageSize: string;
//   backgroundColor: string;
//   iconColor: string;
// }

// const iconMap = {
//   Folder: FolderIcon,
//   Image: PhotoIcon,
//   FileText: DocumentTextIcon,
//   FileEdit: PencilSquareIcon,
//   File: DocumentIcon,
// };

// const FileTypeCard: React.FC<FileTypeCardProps> = ({
//   icon,
//   name,
//   totalItems,
//   storageSize,
//   backgroundColor,
//   iconColor,
// }) => {
//   const IconComponent = iconMap[icon] || iconMap.File;

//   return (
//     <div className="bg-card p-4 rounded-lg border border-border hover:shadow-sm transition-shadow cursor-pointer">
//       <div className="flex items-center space-x-3 mb-3">
//         <div
//           className="w-8 h-8 rounded-lg flex items-center justify-center"
//           style={{ backgroundColor }}
//         >
//           <IconComponent className="w-5 h-5" style={{ color: iconColor }} />
//         </div>
//         <h3 className="font-medium text-foreground">{name}</h3>
//       </div>

//       <div className="space-y-1">
//         <p className="text-sm text-muted-foreground">
//           Total Item: <span className="text-foreground font-medium">{totalItems}</span>
//         </p>
//         <p className="text-sm text-muted-foreground">
//           Storage: <span className="text-foreground font-medium">{storageSize}</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default FileTypeCard;

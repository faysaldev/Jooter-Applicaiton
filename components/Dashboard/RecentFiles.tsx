

"use client";

import React from 'react';
import {
  EllipsisVerticalIcon,
  PhotoIcon,
  FolderIcon,
  PencilSquareIcon,
  DocumentTextIcon,
  StarIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import SingleFile from './SingleFile';

interface RecentFile {
  id: string;
  name: string;
  date: string;
  icon: keyof typeof iconMap;
  iconColor: string;
  backgroundColor: string;
  size?: string;
  isStarred?: boolean;
}

const iconMap = {
  Image: PhotoIcon,
  Folder: FolderIcon,
  FileEdit: PencilSquareIcon,
  FileText: DocumentTextIcon,
};



const RecentFiles: React.FC = () => {
  const [starredFiles, setStarredFiles] = React.useState<string[]>(['2']);

  const recentFiles: RecentFile[] = [
    {
      id: '1',
      name: 'Summer_vacation_2024.jpg',
      date: 'Jan 18, 2025',
      icon: 'Image',
      iconColor: '#10B981',
      backgroundColor: '#D1FAE5',
      size: '2.4MB',
    },
    {
      id: '2',
      name: 'Project Documents',
      date: 'Jan 18, 2025',
      icon: 'Folder',
      iconColor: '#F59E0B',
      backgroundColor: '#FEF3C7',
      size: '156MB',
    },
    {
      id: '3',
      name: 'Meeting_notes_Q1.md',
      date: 'Jan 17, 2025',
      icon: 'FileEdit',
      iconColor: '#6366F1',
      backgroundColor: '#E0E7FF',
      size: '24KB',
    },
    {
      id: '4',
      name: 'Financial_Report_2024.pdf',
      date: 'Jan 17, 2025',
      icon: 'FileText',
      iconColor: '#EF4444',
      backgroundColor: '#FEE2E2',
      size: '1.8MB',
    },
  ];

  const toggleStar = (fileId: string) => {
    setStarredFiles(prev => 
      prev.includes(fileId) 
        ? prev.filter(id => id !== fileId)
        : [...prev, fileId]
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
            <ClockIcon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Recent Files</h2>
            <p className="text-sm text-gray-500 font-medium">Last accessed documents</p>
          </div>
        </div>
        <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
          View all
        </button>
      </div>

      <div className="space-y-3">
        {recentFiles.map((file, index) => {
          const IconComponent = iconMap[file.icon] || iconMap.FileText;
          const isStarred = starredFiles.includes(file.id);
          
          return (
            <SingleFile
            key={file.id}
            file={file}
            IconComponent={IconComponent}
            isStarred={isStarred}
            toggleStar={toggleStar}
            index={index}
          />
          );
        })}
      </div>

      {/* Load more button */}
      <div className="flex justify-center pt-4">
        <button className="px-8 py-3 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-100 hover:to-purple-100 text-gray-700 hover:text-gray-800 font-semibold rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
          Load More Files
        </button>
      </div>
    </div>
  );
};

export default RecentFiles;

// "use client";


// import React from 'react';
// import {
//   EllipsisVerticalIcon,
//   PhotoIcon,
//   FolderIcon,
//   PencilSquareIcon,
//   DocumentTextIcon,
// } from '@heroicons/react/24/outline';

// interface RecentFile {
//   id: string;
//   name: string;
//   date: string;
//   icon: keyof typeof iconMap;
//   iconColor: string;
//   backgroundColor: string;
// }

// const iconMap = {
//   Image: PhotoIcon,
//   Folder: FolderIcon,
//   FileEdit: PencilSquareIcon,
//   FileText: DocumentTextIcon,
// };

// const RecentFiles: React.FC = () => {
//   const recentFiles: RecentFile[] = [
//     {
//       id: '1',
//       name: 'image.123',
//       date: 'Jan 18, 2025',
//       icon: 'Image',
//       iconColor: '#10B981',
//       backgroundColor: '#ECFDF5',
//     },
//     {
//       id: '2',
//       name: 'Folder.1',
//       date: 'Jan 18, 2025',
//       icon: 'Folder',
//       iconColor: '#F59E0B',
//       backgroundColor: '#FFFBEB',
//     },
//     {
//       id: '3',
//       name: 'Note.bd',
//       date: 'Jan 18, 2025',
//       icon: 'FileEdit',
//       iconColor: '#EF4444',
//       backgroundColor: '#FEF2F2',
//     },
//     {
//       id: '4',
//       name: 'pdf.1',
//       date: 'Jan 18, 2025',
//       icon: 'FileText',
//       iconColor: '#EF4444',
//       backgroundColor: '#FEF2F2',
//     },
//   ];

//   return (
//     <div className="space-y-3">
//       <h2 className="text-lg font-semibold text-foreground">Recent</h2>

//       <div className="space-y-2">
//         {recentFiles.map((file) => {
//           const IconComponent = iconMap[file.icon] || iconMap.FileText;
//           return (
//             <div
//               key={file.id}
//               className="flex items-center justify-between p-3 bg-card rounded-lg border border-border hover:shadow-sm transition-shadow cursor-pointer"
//             >
//               <div className="flex items-center space-x-3">
//                 <div
//                   className="w-10 h-10 rounded-lg flex items-center justify-center"
//                   style={{ backgroundColor: file.backgroundColor }}
//                 >
//                   <IconComponent className="w-5 h-5" style={{ color: file.iconColor }} />
//                 </div>
//                 <div>
//                   <p className="font-medium text-foreground">{file.name}</p>
//                   <p className="text-sm text-muted-foreground">{file.date}</p>
//                 </div>
//               </div>

//               <button className="p-1 hover:bg-muted rounded transition-colors">
//                 <EllipsisVerticalIcon className="w-4 h-4 text-muted-foreground" />
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default RecentFiles;

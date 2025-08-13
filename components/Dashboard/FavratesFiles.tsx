'use client'

import React from "react";
import { FolderIcon } from "@heroicons/react/24/solid";
import {
  EllipsisVerticalIcon,
  PhotoIcon,
  PencilSquareIcon,
  DocumentTextIcon,
  StarIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import SingleFile from "./SingleFile";

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


const FavratesFiles=()=> {

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


  return(
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
  )
}

export default FavratesFiles
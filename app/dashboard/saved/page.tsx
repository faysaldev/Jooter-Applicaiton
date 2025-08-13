import {MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { FolderIcon } from "@heroicons/react/24/solid";
import {
  EllipsisVerticalIcon,
  PhotoIcon,
  PencilSquareIcon,
  DocumentTextIcon,
  StarIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import SingleFile from "@/components/Dashboard/SingleFile";
import React from "react";
import FavratesFiles from "@/components/Dashboard/FavratesFiles";
import FloatingActionMenu from "@/components/layout/FloatingActionMenu";

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



const Saved = () => {



  return (
    <div className="min-h-screen pb-20 relative">
      <div className="container mx-auto px-5">
        {/* Header */}
        <div className="bg-card pt-8 p-4">
          <h1 className="text-xl font-semibold text-foreground text-center">
            Favorites
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl" />
            <MagnifyingGlassIcon className="absolute left-4 h-5 w-5 top-1/2 transform -translate-y-1/2 text-gray-700" />
            <input
              type="text"
              placeholder="Search your files..."
              className="w-full pl-12 pr-4 h-14 bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg shadow-blue-500/5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/30 transition-all duration-300"
            />
          </div>
        </div>
        {/* Empty State */}
        <div className="min-h-full pt-6">

        {/* <NotfoundFiles /> */}
        <FavratesFiles />

        </div>
      </div>
      <FloatingActionMenu />

    </div>
  );
};

export default Saved;





export const NotfoundFiles = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
        <FolderIcon className="text-muted-foreground h-16 text-[#F9A571]" />
      </div>
      <h2 className="text-lg font-semibold text-foreground mb-2">
        No items yet
      </h2>
    </div>
  );
};

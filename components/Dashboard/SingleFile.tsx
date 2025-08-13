// components/SingleFile.tsx
"use client";

import { FC, useState } from "react";
import {
  EllipsisVerticalIcon,
  ClockIcon,
  StarIcon as StarIconOutline,
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

interface FileData {
  id: string;
  name: string;
  date: string;
  size?: string;
  backgroundColor: string;
  iconColor: string;
}

interface SingleFileProps {
  file: FileData;
  IconComponent: FC<React.SVGProps<SVGSVGElement>>;
  isStarred: boolean;
  toggleStar: (id: string) => void;
  index: number;
}

const SingleFile: FC<SingleFileProps> = ({
  file,
  IconComponent,
  isStarred,
  toggleStar,
  index,
}) => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);
      const options = ["Favorite", "Copy", "Rename", "Duplicate", "Delete", "Share"];



  return (
    <div
      key={file.id}
      className="group relative overflow-hidden flex items-center justify-between p-4 bg-gradient-to-r from-white to-gray-50/30 hover:from-white hover:to-blue-50/50 rounded-2xl border border-white/20 shadow-lg shadow-gray-500/5 hover:shadow-xl hover:shadow-gray-500/10 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:-translate-y-0.5"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />

      <div className="relative flex items-center space-x-4 flex-1">
        <div className="relative">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
            style={{ backgroundColor: file.backgroundColor }}
          >
            <IconComponent
              className="w-6 h-6 transition-all duration-300"
              style={{ color: file.iconColor }}
            />
          </div>

          {/* File type indicator */}
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full shadow-md flex items-center justify-center">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: file.iconColor }}
            />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <p className="font-semibold text-gray-800 truncate group-hover:text-blue-600 transition-colors duration-300">
              {file.name}
            </p>
            {isStarred && (
              <StarIconSolid className="w-4 h-4 text-amber-400 flex-shrink-0 animate-pulse" />
            )}
          </div>

          <div className="flex items-center space-x-3 text-sm text-gray-500">
            <span className="flex items-center space-x-1">
              <ClockIcon className="w-3 h-3" />
              <span>{file.date}</span>
            </span>
            {file.size && (
              <>
                <span>•</span>
                <span className="font-medium">{file.size}</span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="relative flex items-center space-x-2">
        {/* Star button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleStar(file.id);
          }}
          className="p-2 hover:bg-amber-100 rounded-xl transition-all duration-300 hover:scale-110 group/star"
        >
          {isStarred ? (
            <StarIconSolid className="w-5 h-5 text-amber-400 group-hover/star:scale-125 transition-transform duration-200" />
          ) : (
            <StarIconOutline className="w-5 h-5 text-gray-400 group-hover/star:text-amber-400 group-hover/star:scale-125 transition-all duration-200" />
          )}
        </button>


 <div className="relative inline-block">
      {/* Menu button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setMenuOpen(true);
        }}
        className="p-2 hover:bg-gray-100 rounded-xl transition-all duration-300 hover:scale-110 group/menu"
      >
        <EllipsisVerticalIcon className="w-5 h-5 text-gray-400 group-hover/menu:text-gray-600 transition-colors duration-200" />
      </button>

      {/* Side Menu */}
    </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
    </div>
  );
};

export default SingleFile;

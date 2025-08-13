// Enhanced Floating Action Menu
"use client";

import React, { useState } from 'react';
import {
  PlusIcon,
  XMarkIcon,
  DocumentTextIcon,
  PhotoIcon,
  FolderPlusIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

const FloatingActionMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { 
      icon: DocumentDuplicateIcon, 
      label: 'Add Note', 
      action: () => console.log('Add Note'),
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    { 
      icon: PhotoIcon, 
      label: 'Import Image', 
      action: () => console.log('Import Image'),
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    { 
      icon: DocumentTextIcon, 
      label: 'Import PDF', 
      action: () => console.log('Import PDF'),
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 to-pink-50'
    },
    { 
      icon: FolderPlusIcon, 
      label: 'Create Folder', 
      action: () => console.log('Create Folder'),
      color: 'from-amber-500 to-orange-500',
      bgColor: 'from-amber-50 to-orange-50'
    },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-14 z-50 left-1/2 transform -translate-x-1/2">
      {/* Menu Items */}
      {isOpen && (
        <div className="mb-6 space-y-3">
          {menuItems.map(({ icon: Icon, label, action, color, bgColor }, index) => (
            <div
              key={index}
              className="flex items-center justify-center animate-slideInUp"
              style={{ 
                animationDelay: `${index * 50}ms`,
                animationDuration: '0.4s',
                animationFillMode: 'both'
              }}
            >
              <button
                onClick={() => {
                  action();
                  setIsOpen(false);
                }}
                className={`flex items-center space-x-4 pl-6 pr-8 py-4 bg-gradient-to-r ${bgColor} backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl shadow-gray-500/10 hover:shadow-2xl hover:shadow-gray-500/20 transition-all duration-300 hover:scale-105 group`}
                type="button"
                aria-label={label}
              >
                <div className={`p-2 rounded-xl bg-gradient-to-br ${color} shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{label}</span>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Main FAB */}
      <button
        onClick={toggleMenu}
        className={`relative bg-gradient-to-br  from-blue-500 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30 hover:shadow-3xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-110 ${
          isOpen ? 'rotate-45 scale-110' : 'hover:rotate-12'
        }`}
        type="button"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 to-purple-500/50 rounded-2xl blur animate-pulse" />
        <div className="relative">
          {isOpen ? (
            <XMarkIcon className="h-7 w-7 transition-transform duration-300" />
          ) : (
            <PlusIcon className="h-7 w-7 transition-transform duration-300" />
          )}
        </div>
        
        {/* Ripple effect */}
        <div className={`absolute inset-0 rounded-2xl transition-all duration-1000 ${
          isOpen ? 'bg-white/20 scale-150 opacity-0' : 'scale-100 opacity-0'
        }`} />
      </button>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FloatingActionMenu;

// "use client";


// import React, { useState } from 'react';
// import {
//   PlusIcon,
//   XMarkIcon,
//   DocumentTextIcon,
//   PhotoIcon,
//   FolderPlusIcon,
//   DocumentDuplicateIcon,
// } from '@heroicons/react/24/outline';

// const FloatingActionMenu: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const menuItems = [
//     { icon: DocumentDuplicateIcon, label: 'Add Note', action: () => console.log('Add Note') },
//     { icon: PhotoIcon, label: 'Import Image', action: () => console.log('Import Image') },
//     { icon: DocumentTextIcon, label: 'Import PDF', action: () => console.log('Import PDF') },
//     { icon: FolderPlusIcon, label: 'Create Folder', action: () => console.log('Create Folder') },
//   ];

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50">
//       {/* Menu Items */}
//       {isOpen && (
//         <div className="mb-4 space-y-3">
//           {menuItems.map(({ icon: Icon, label, action }, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-center bg-card border border-border rounded-lg shadow-lg animate-in slide-in-from-bottom-2 duration-200"
//               style={{ animationDelay: `${index * 50}ms` }}
//             >
//               <button
//                 onClick={() => {
//                   action();
//                   setIsOpen(false);
//                 }}
//                 className="flex items-center space-x-3 px-4 py-3 w-full text-left hover:bg-muted transition-colors rounded-lg"
//                 type="button"
//                 aria-label={label}
//               >
//                 <Icon className="h-5 w-5 text-muted-foreground" />
//                 <span className="text-sm font-medium text-foreground">{label}</span>
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Main FAB */}
//       <button
//         onClick={toggleMenu}
//         className={`bg-foreground text-background w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 ${
//           isOpen ? 'rotate-45' : ''
//         }`}
//         type="button"
//         aria-label={isOpen ? 'Close menu' : 'Open menu'}
//       >
//         {isOpen ? <XMarkIcon className="h-6 w-6" /> : <PlusIcon className="h-6 w-6" />}
//       </button>
//     </div>
//   );
// };

// export default FloatingActionMenu;

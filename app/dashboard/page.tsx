"use client"; // ✅ Add this line

// / Dashboard Page - Enhanced with modern styling and animations
import React from 'react';
import { MagnifyingGlassIcon, Bars3Icon, LockClosedIcon, SparklesIcon } from "@heroicons/react/24/outline";
import BottomNavigation from '@/components/layout/BottomNavigation';
import FloatingActionMenu from '@/components/layout/FloatingActionMenu';
import StorageOverview from '@/components/Dashboard/StorageOverview';
import FileTypeCard from '@/components/Dashboard/FileTypeCard';
import RecentFiles from '@/components/Dashboard/RecentFiles';

interface FileType {
  icon: string;
  name: string;
  totalItems: number;
  storageSize: string;
  backgroundColor: string;
  iconColor: string;
  gradient: string;
}

const Dashboard: React.FC = () => {
  const fileTypes: FileType[] = [
    {
      icon: 'Folder',
      name: 'Folder',
      totalItems: 15,
      storageSize: '5.30GB',
      backgroundColor: '#FEF3C7',
      iconColor: '#F59E0B',
      gradient: 'from-amber-100 to-yellow-50'
    },
    {
      icon: 'Image',
      name: 'Images',
      totalItems: 15,
      storageSize: '5.30GB',
      backgroundColor: '#D1FAE5',
      iconColor: '#10B981',
      gradient: 'from-emerald-100 to-green-50'
    },
    {
      icon: 'FileText',
      name: 'PDF',
      totalItems: 15,
      storageSize: '5.30GB',
      backgroundColor: '#FEE2E2',
      iconColor: '#EF4444',
      gradient: 'from-red-100 to-rose-50'
    },
    {
      icon: 'FileEdit',
      name: 'Note',
      totalItems: 15,
      storageSize: '5.30GB',
      backgroundColor: '#E0E7FF',
      iconColor: '#6366F1',
      gradient: 'from-indigo-100 to-blue-50'
    }
  ];

  return (
    <div className="min-h-screen pb-20 relative">
      <div className='container mx-auto'>
        {/* Enhanced Header with glassmorphism */}
        <div className="sticky top-0 z-40 backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-lg shadow-blue-500/5">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <SparklesIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Jotter
                  </h1>
                  <p className="text-xs md:text-sm text-gray-500 font-medium">File Management Pro</p>
                </div>
              </div>
              <div className="p-2 md:p-3 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-inner">
                <LockClosedIcon className="text-gray-600 h-6 w-6" />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl" />
                <MagnifyingGlassIcon className="absolute left-4 h-5 w-5 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type='text'
                  placeholder="Search your files..."
                  className="w-full pl-12 pr-4 h-10 md:h-14 bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg shadow-blue-500/5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/30 transition-all duration-300"
                />
              </div>
              <button className="p-2 md:p-4 bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                <Bars3Icon className="text-gray-600 h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Content */}
        <div className="p-6 space-y-8">
          {/* Storage Overview with animation */}


          {/* File Type Grid with staggered animation */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">Quick Access</h2>
              <div className="h-1 flex-1 ml-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-transparent rounded-full" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <>
            <div className="animate-fadeIn col-span-2">
            <StorageOverview />
          </div>
         
              {fileTypes.map((fileType, index) => (
                <div 
                  key={index}
                  className="animate-slideInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <FileTypeCard {...fileType} />
                </div>
              ))}
                   </>
            </div>
          </div>

          {/* Recent Files with enhanced styling */}
          <div className="animate-fadeIn" style={{ animationDelay: '500ms' }}>
            <RecentFiles />
          </div>
        </div>

        <FloatingActionMenu />
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;


// import React from 'react';
// import { MagnifyingGlassIcon, Bars3Icon,LockClosedIcon } from "@heroicons/react/24/outline";

// import FloatingActionMenu from '@/components/layout/FloatingActionMenu';
// import StorageOverview from '@/components/Dashboard/StorageOverview';
// import FileTypeCard from '@/components/Dashboard/FileTypeCard';
// import RecentFiles from '@/components/Dashboard/RecentFiles';

// interface FileType {
//   icon: string; // You might want to replace string with actual Icon component or enum
//   name: string;
//   totalItems: number;
//   storageSize: string;
//   backgroundColor: string;
//   iconColor: string;
// }

// const Dashboard: React.FC = () => {
//   const fileTypes: FileType[] = [
//     {
//       icon: 'Folder',
//       name: 'Folder',
//       totalItems: 15,
//       storageSize: '5.30GB',
//       backgroundColor: '#FFFBEB',
//       iconColor: '#F59E0B'
//     },
//     {
//       icon: 'Image',
//       name: 'Images',
//       totalItems: 15,
//       storageSize: '5.30GB',
//       backgroundColor: '#ECFDF5',
//       iconColor: '#10B981'
//     },
//     {
//       icon: 'FileText',
//       name: 'PDF',
//       totalItems: 15,
//       storageSize: '5.30GB',
//       backgroundColor: '#FEF2F2',
//       iconColor: '#EF4444'
//     },
//     {
//       icon: 'FileEdit',
//       name: 'Note',
//       totalItems: 15,
//       storageSize: '5.30GB',
//       backgroundColor: '#FEF2F2',
//       iconColor: '#EF4444'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-background pb-20">
//         <div className='container mx-auto'>
//                   {/* Header */}
//       <div className="bg-card border-b border-border p-4">
//         <div className="flex items-center justify-between mb-4">
//           <h1 className="text-2xl font-bold text-foreground">Jotter</h1>
//           <LockClosedIcon className="text-muted-foreground h-6" />
//         </div>
        
//         <div className="flex items-center space-x-3">
//           <div className="relative flex-1">
//             <MagnifyingGlassIcon className="absolute left-3 h-6 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
//             <input
//             type='text'
//               placeholder="Search here"
//               className="pl-10 h-10 bg-muted border-0"
//             />
//           </div>
//           <button className="p-2 hover:bg-muted rounded-lg transition-colors">
//             <Bars3Icon className="text-muted-foreground h-6" />
//           </button>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-4 space-y-6">
//         {/* Storage Overview */}
//         <StorageOverview />

//         {/* File Type Grid */}
//         <div className="grid grid-cols-2 gap-3">
//           {fileTypes.map((fileType, index) => (
//             <FileTypeCard key={index} {...fileType} />
//           ))}
//         </div>

//         {/* Recent Files */}
//         <RecentFiles />
//       </div>

//       <FloatingActionMenu />
//         </div>
//     </div>
//   );
// };

// export default Dashboard;

// Enhanced Storage Overview
"use client";

import React from 'react';
import { ComputerDesktopIcon, CloudIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

const StorageOverview = () => {
  const usagePercentage = (5.00 / 15.00) * 100;

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50/50 p-6 rounded-3xl border border-white/20 shadow-xl shadow-blue-500/5 backdrop-blur-sm">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-xl" />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg shadow-blue-500/25">
              <CloudIcon className="w-6 h-6 text-white" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <ArrowTrendingUpIcon className="w-2.5 h-2.5 text-white" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Cloud Storage</p>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              </div>
              <p className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
                15.00 GB
              </p>
              <p className="text-xs text-gray-500 font-medium">Total Capacity</p>
            </div>
          </div>
          
          <div className="text-right space-y-1">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
              <p className="text-xs text-gray-500 font-medium">Used</p>
            </div>
            <p className="text-lg font-bold text-gray-800">5.00GB</p>
            
            <div className="flex items-center space-x-2 mt-2">
              <div className="w-3 h-3 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full" />
              <p className="text-xs text-gray-500 font-medium">Available</p>
            </div>
            <p className="text-lg font-bold text-gray-800">10.00GB</p>
          </div>
        </div>

        {/* Enhanced Progress Bar */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-600">Storage Usage</p>
            <p className="text-sm font-bold text-blue-600">{usagePercentage.toFixed(1)}%</p>
          </div>
          
          <div className="relative">
            <div className="w-full h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-full shadow-lg relative overflow-hidden"
                style={{ width: `${usagePercentage}%` }}
              >
                {/* Animated shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              </div>
            </div>
            
            {/* Usage indicator */}
            <div 
              className="absolute top-0 w-6 h-6 bg-white rounded-full shadow-lg border-2 border-blue-500 transform -translate-y-1.5 transition-all duration-300"
              style={{ left: `calc(${usagePercentage}% - 12px)` }}
            >
              <div className="absolute inset-1 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default StorageOverview;



// "use client";


// import React from 'react';
// import { ComputerDesktopIcon } from '@heroicons/react/24/outline';

// const StorageOverview = () => {
//   return (
//     <div className="bg-card p-4 rounded-lg border border-border">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center space-x-3">
//           <div className="p-2 bg-muted rounded-lg">
//             <ComputerDesktopIcon className="w-5 h-5 text-muted-foreground" />
//           </div>
//           <div>
//             <p className="text-sm font-medium text-foreground">Your storage</p>
//             <p className="text-lg font-semibold text-foreground">15.00 GB</p>
//           </div>
//         </div>
//         <div className="text-right">
//           <p className="text-xs text-muted-foreground">Usage storage</p>
//           <p className="text-sm font-medium text-foreground">5.00GB</p>
//           <p className="text-xs text-muted-foreground">Available storage</p>
//           <p className="text-sm font-medium text-foreground">5.30GB</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StorageOverview;

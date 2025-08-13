
// Enhanced Bottom Navigation
"use client";

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  HomeIcon,
  BookmarkIcon,
  CalendarIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import {
  HomeIcon as HomeIconSolid,
  BookmarkIcon as BookmarkIconSolid,
  CalendarIcon as CalendarIconSolid,
  UserIcon as UserIconSolid,
} from '@heroicons/react/24/solid';

const BottomNavigation: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { 
      icon: HomeIcon, 
      iconSolid: HomeIconSolid,
      label: 'Home', 
      path: '/dashboard',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: BookmarkIcon, 
      iconSolid: BookmarkIconSolid,
      label: 'Saved', 
      path: '/dashboard/saved',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: CalendarIcon, 
      iconSolid: CalendarIconSolid,
      label: 'Calendar', 
      path: '/dashboard/calendar',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: UserIcon, 
      iconSolid: UserIconSolid,
      label: 'Profile', 
      path: '/dashboard/profiles',
      color: 'from-orange-500 to-red-500'
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30">
      {/* Backdrop blur with gradient */}
      <div className="absolute inset-0 backdrop-blur-2xl bg-white/80 border-t border-white/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent" />
      
      <div className="relative flex items-center justify-around py-2 max-w-md mx-auto">
        {navItems.map(({ icon: Icon, iconSolid: IconSolid, label, path, color }) => {
          const isActive = pathname === path;

          return (
            <button
              key={path}
              onClick={() => router.push(path)}
              className={`relative flex cursor-pointer flex-col items-center justify-center p-2 transition-all duration-300 rounded-2xl group ${
                isActive ? 'scale-110' : 'hover:scale-105'
              }`}
              aria-current={isActive ? 'page' : undefined}
              aria-label={label}
              type="button"
            >
              {/* Active background */}
              {isActive && (
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10 rounded-2xl animate-pulse`} />
              )}
              
              {/* Icon with gradient background when active */}
              <div className={`relative p-2 rounded-xl transition-all duration-300 ${
                isActive 
                  ? `bg-gradient-to-br ${color} shadow-lg shadow-blue-500/25` 
                  : 'group-hover:bg-gray-100'
              }`}>
                {isActive ? (
                  <IconSolid className="h-5 w-5 text-white" />
                ) : (
                  <Icon className="h-5 w-5 text-gray-500 group-hover:text-gray-700 transition-colors" />
                )}
              </div>

              {/* Active indicator dot */}
              {isActive && (
                <div className={`absolute -top-1 w-2 h-2 rounded-full bg-gradient-to-r ${color} animate-bounce`} />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;


// "use client";

// import React from 'react';
// import { useRouter, usePathname } from 'next/navigation';
// import {
//   HomeIcon,
//   BookmarkIcon,
//   CalendarIcon,
//   UserIcon,
// } from '@heroicons/react/24/outline';

// const BottomNavigation: React.FC = () => {
//   const router = useRouter();

//   const navItems = [
//     { icon: HomeIcon, label: 'Home', path: '/dashboard' },
//     { icon: BookmarkIcon, label: 'Saved', path: '/dashboard/saved' },
//     { icon: CalendarIcon, label: 'Calendar', path: '/dashboard/calendar' },
//     { icon: UserIcon, label: 'Profile', path: '/dashboard/profiles' },
//   ];

//   console.log(usePathname)

//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-gray-500 shadow bg-white">
//       <div className="flex items-center justify-around py-2 max-w-md mx-auto">
//         {navItems.map(({ icon: Icon, label, path }) => {
//           const isActive = router?.pathname === path;

//           return (
//             <button
//               key={path}
//               onClick={() => router.push(path)}
//               className={`flex flex-col items-center cursor-pointer justify-center py-2 px-4 min-h-[60px] transition-colors ${
//                 isActive
//                   ? 'text-foreground'
//                   : 'text-muted-foreground hover:text-foreground'
//               }`}
//               aria-current={isActive ? 'page' : undefined}
//               aria-label={label}
//               type="button"
//             >
//               <Icon className="h-6 w-6" />
//               <span className="text-xs mt-1 font-medium">{label}</span>
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default BottomNavigation;

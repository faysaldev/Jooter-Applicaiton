
"use client";

import {
  UserCircleIcon,
  Cog6ToothIcon,
  LifebuoyIcon,
  ArrowRightOnRectangleIcon,
  HomeIcon,
  BookmarkIcon,
  CalendarDaysIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';



export default function ProfilePage() {

    const router = useRouter();
    const userString = localStorage.getItem("jotter_user");
const user = userString ? JSON.parse(userString) : null;

  const handleLogout = () => {
    localStorage.removeItem('jotter_user');
    toast('You have been logged out successfully');
    router.push('/');
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Profile Header */}
      <div className="flex flex-col items-center pt-8 pb-6">
        <UserCircleIcon className="w-24 h-24 text-gray-300" />
        <h2 className="mt-3 text-lg font-medium text-gray-800">
          {user?.username}
        </h2>
      </div>

      {/* Menu Items */}
      <div className="px-4 space-y-3">
        <button className="w-full flex items-center justify-between p-4 cursor-pointer bg-gray-100 rounded-xl">
          <div className="flex items-center gap-3">
            <UserCircleIcon className="w-5 h-5 text-gray-700" />
            <span className="text-gray-800 text-sm font-medium">Edit Profile</span>
          </div>
          <span className="text-gray-400 text-3xl">›</span>
        </button>

        <button className="w-full flex items-center justify-between p-4 cursor-pointer bg-gray-100 rounded-xl"
        onClick={()=> router.push('/settings')}
        >
          <div className="flex items-center gap-3">
            <Cog6ToothIcon className="w-5 h-5 text-gray-700" />
            <span className="text-gray-800 text-sm font-medium">Settings</span>
          </div>
          <span className="text-gray-400 text-3xl">›</span>
        </button>

        <button className="w-full flex items-center justify-between p-4 cursor-pointer bg-gray-100 rounded-xl">
          <div className="flex items-center gap-3">
            <LifebuoyIcon className="w-5 h-5 text-gray-700" />
            <span className="text-gray-800 text-sm font-medium">Support</span>
          </div>
          <span className="text-gray-400 text-3xl">›</span>
        </button>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Logout Button */}
      <div className="px-4 pb-20">
        <button className="w-full flex items-center justify-center gap-2 p-4 bg-black rounded-xl text-white font-medium"
          onClick={handleLogout}
        >
          <ArrowRightOnRectangleIcon className="w-5 h-5" />
          Log Out
        </button>
      </div>

    </div>
  );
}


// "use client";

// import React from 'react';
// import { useRouter } from 'next/navigation';
// import { 
//   UserIcon, 
//   Cog6ToothIcon, 
//   PhoneIcon, 
//   ArrowRightIcon, 
//   PlusIcon, 
//   ArrowLeftIcon,
//   ArrowLongRightIcon,
//   ArrowTurnUpRightIcon 
// } from '@heroicons/react/24/outline';
// import BottomNavigation from '@/components/layout/BottomNavigation';
// import { toast } from 'sonner';

// const Profile = () => {
//   const router = useRouter();

//   const handleLogout = () => {
//     localStorage.removeItem('jotter_user');
//     toast('You have been logged out successfully');
//     router.push('/');
//   };

//   const menuItems = [
//     {
//       icon: UserIcon,
//       label: 'Edit Profile',
//       onClick: () => router.push('/edit-profile')
//     },
//     {
//       icon: Cog6ToothIcon,
//       label: 'Settings',
//       onClick: () => router.push('/settings')
//     },
//     {
//       icon: PhoneIcon,
//       label: 'Support',
//       onClick: () => toast('Opening support...')
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-background pb-20">
//       {/* Profile Header */}
//       <div className="bg-card p-6 text-center space-y-4">
//         <div className="w-20 h-20 bg-muted rounded-full mx-auto flex items-center justify-center">
//           <UserIcon className="w-10 h-10 text-muted-foreground" />
//         </div>
//         <h1 className="text-xl font-semibold text-foreground">Daniel Martinez</h1>
//       </div>

//       {/* Menu Items */}
//       <div className="p-4 space-y-3">
//         {menuItems.map(({ icon: Icon, label, onClick }, index) => (
//           <button
//             key={index}
//             onClick={onClick}
//             className="w-full flex items-center justify-between p-4 bg-card rounded-lg border border-border hover:shadow-sm transition-shadow"
//           >
//             <div className="flex items-center space-x-3">
//               <Icon className="w-5 h-5 text-muted-foreground" />
//               <span className="font-medium text-foreground">{label}</span>
//             </div>
//             <ArrowRightIcon className="w-4 h-4 text-muted-foreground" />
//           </button>
//         ))}
//       </div>

//       {/* Logout Button */}
//       <div className="p-4 mt-8">
//         <button
//           onClick={handleLogout}
//           className="w-full h-12 text-lg font-medium flex items-center justify-center"
//         >
//           <ArrowTurnUpRightIcon className="w-5 h-5 mr-2" />
//           Log Out
//         </button>
//       </div>

//       {/* Add Button */}
//       <div className="fixed bottom-20 right-4">
//         <button 
//           onClick={() => toast('Add button clicked!')}
//           className="bg-foreground text-background w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
//           aria-label="Add"
//         >
//           <PlusIcon className="w-6 h-6" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;

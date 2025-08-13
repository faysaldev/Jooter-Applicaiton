



"use client"

import React, { useState } from 'react';
import { ChevronDownIcon, PlusIcon, EllipsisVerticalIcon } from '@heroicons/react/24/solid';

import BottomNavigation from '@/components/layout/BottomNavigation';
import FavratesFiles from '@/components/Dashboard/FavratesFiles';
import FloatingActionMenu from '@/components/layout/FloatingActionMenu';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState('January 2025');

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = [
    [28, 30, 31, 1, 2, 3, 4]
  ];

  const todayEvents = [
    {
      id: '1',
      name: 'image.123',
      date: 'Jan 18, 2025',
      icon: '🏔️',
      backgroundColor: '#ECFDF5'
    },
    {
      id: '2',
      name: 'image.123', 
      date: 'Jan 18, 2025',
      icon: '🏔️',
      backgroundColor: '#ECFDF5'
    },
    {
      id: '3',
      name: 'image.123',
      date: 'Jan 18, 2025',
      icon: '🏔️',
      backgroundColor: '#ECFDF5'
    },
    {
      id: '4',
      name: 'Folder.1',
      date: 'Jan 18, 2025',
      icon: '📁',
      backgroundColor: '#FFFBEB'
    },
    {
      id: '5',
      name: 'image.123',
      date: 'Jan 18, 2025',
      icon: '🏔️',
      backgroundColor: '#ECFDF5'
    },
    {
      id: '6',
      name: 'link.1',
      date: 'Jan 18, 2025',
      icon: '🔗',
      backgroundColor: '#EFF6FF'
    },
    {
      id: '7',
      name: 'document.1',
      date: 'Jan 18, 2025',
      icon: '📄',
      backgroundColor: '#FEF2F2'
    },
    {
      id: '8',
      name: 'image.123',
      date: 'Jan 18, 2025',
      icon: '🏔️',
      backgroundColor: '#ECFDF5'
    },
    {
      id: '9',
      name: 'image.123',
      date: 'Jan 18, 2025',
      icon: '🏔️',
      backgroundColor: '#ECFDF5'
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <h1 className="text-xl font-semibold text-foreground text-center">Calendar</h1>
      </div>

      {/* Calendar Content */}
      <div className="p-4">
        {/* Month Selector */}
        <div className="flex items-center justify-center mb-6">
          <button className="flex items-center space-x-2 px-4 py-2 bg-card rounded-lg border border-border">
            <span className="font-medium text-foreground">{currentMonth}</span>
            <ChevronDownIcon  className="text-muted-foreground h-6" />
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="mb-6">
          {/* Days of Week Header */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {daysOfWeek.map((day) => (
              <div key={day} className="text-center py-2">
                <span className="text-sm font-medium text-muted-foreground">{day}</span>
              </div>
            ))}
          </div>

          {/* Calendar Dates */}
          <div className="grid grid-cols-7 gap-1">
            {[28, 30, 31, 1, 2, 3, 4].map((date, index) => (
              <div 
                key={index} 
                className={`aspect-square flex items-center justify-center rounded-lg cursor-pointer transition-colors ${
                  date === 31 
                    ? 'bg-primary text-primary-foreground font-semibold' 
                    : date < 28 
                    ? 'text-muted-foreground hover:bg-muted' 
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                <span className="text-sm">{date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Events */}
        <div className="space-y-2">
            <FavratesFiles />
        </div>
      </div>

      {/* Add Button */}
      {/* <div className="fixed bottom-20 right-4">
        <button className="bg-foreground text-background w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
          <PlusIcon className='h-6' />
        </button>
      </div> */}
      <FloatingActionMenu />
    </div>
  );
};

export default Calendar;
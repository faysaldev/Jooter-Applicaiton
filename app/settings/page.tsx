'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowLeftIcon,
  LockClosedIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  InformationCircleIcon,
  TrashIcon,
} from '@heroicons/react/24/solid';
import { toast } from 'sonner';

const Settings = () => {
  const router = useRouter();

  const settingsItems = [
    {
      icon: LockClosedIcon,
      label: 'Change Password',
      onClick: () => toast('Opening password change...'),
    },
    {
      icon: DocumentTextIcon,
      label: 'Terms & Conditions',
      onClick: () => toast('Opening terms & conditions...'),
    },
    {
      icon: ShieldCheckIcon,
      label: 'Privacy Policy',
      onClick: () => toast('Opening privacy policy...'),
    },
    {
      icon: InformationCircleIcon,
      label: 'About Us',
      onClick: () => toast('Opening about us...'),
    },
  ];

  const handleDeleteAccount = () => {
    toast.error('This feature is not available in demo mode');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => router.push('/profiles')}
            className="p-1 hover:bg-muted rounded-lg transition-colors"
            aria-label="Go back to profile"
          >
            <ArrowLeftIcon className="text-muted-foreground w-5 h-5" />
          </button>
          <h1 className="text-xl font-semibold text-foreground">Settings</h1>
        </div>
      </div>

      {/* Settings Content */}
      <div className="p-4 space-y-3">
        {settingsItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              onClick={item.onClick}
              className="w-full flex items-center justify-between p-4 bg-card rounded-lg border border-border hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center space-x-3">
                <Icon className="text-muted-foreground w-5 h-5" />
                <span className="font-medium text-foreground">{item.label}</span>
              </div>
              <ArrowLeftIcon className="text-muted-foreground w-4 h-4 rotate-180" />
            </button>
          );
        })}
      </div>

      {/* Delete Account Section */}
      <div className="p-4 mt-8">
        <div className="bg-destructive/10 rounded-lg p-4 border border-destructive/20">
          <button
            onClick={handleDeleteAccount}
            className="w-full h-12 text-lg font-medium text-destructive hover:text-destructive hover:bg-destructive/10 rounded transition-colors flex items-center justify-center"
          >
            <TrashIcon className="mr-2 w-5 h-5" />
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;

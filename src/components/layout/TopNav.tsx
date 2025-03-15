import React from 'react';
import Link from 'next/link';
import Avatar from '../ui/Avatar';

interface TopNavProps {
  title: string;
  onMenuClick: () => void;
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
  notifications?: number;
  actions?: React.ReactNode;
}

const TopNav = ({ title, onMenuClick, user, notifications = 0, actions }: TopNavProps) => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section */}
          <div className="flex items-center">
            <button
              type="button"
              className="p-1 -ml-1 text-gray-500 rounded-md md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={onMenuClick}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <h1 className="ml-3 text-lg font-medium text-gray-900">{title}</h1>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {actions && <div className="hidden md:block">{actions}</div>}
            
            {/* Notification bell */}
            <button
              type="button"
              className="p-1 text-gray-500 rounded-full hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <span className="sr-only">View notifications</span>
              <div className="relative">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                {notifications > 0 && (
                  <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                    {notifications > 9 ? '9+' : notifications}
                  </span>
                )}
              </div>
            </button>

            {/* User dropdown */}
            {user && (
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="flex items-center max-w-xs text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                    id="user-menu-button"
                  >
                    <span className="sr-only">Open user menu</span>
                    <Avatar
                      src={user.avatar}
                      name={user.name}
                      size="sm"
                    />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav; 
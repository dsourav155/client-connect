import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface SidebarLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  links: SidebarLink[];
  logo: React.ReactNode;
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
}

const Sidebar = ({ isOpen, onClose, links, logo, user }: SidebarProps) => {
  const router = useRouter();

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            <div className="flex items-center">
              {logo}
            </div>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 md:hidden"
              onClick={onClose}
            >
              <span className="sr-only">Close sidebar</span>
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 py-4 overflow-y-auto">
            <ul className="space-y-1">
              {links.map((link) => {
                const isActive = router.pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                    >
                      <div className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}>
                        <span className="mr-3">{link.icon}</span>
                        {link.name}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* User profile */}
          {user && (
            <div className="flex items-center p-4 border-t border-gray-200">
              <div className="flex-shrink-0">
                {user.avatar ? (
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user.avatar}
                    alt={user.name}
                  />
                ) : (
                  <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar; 
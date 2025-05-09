import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-8"
                src="https://www.kaggle.com/static/images/site-logo.png"
                alt="Kaggle"
              />
            </Link>
            <nav className="hidden md:flex md:space-x-1">
              <Link to="/competitions" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Competitions
              </Link>
              <Link to="/datasets" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Datasets
              </Link>
              <Link to="/models" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Models
              </Link>
              <Link to="/code" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Code
              </Link>
              <Link to="/discussions" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Discussions
              </Link>
              <Link to="/courses" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Courses
              </Link>
              <button className="text-gray-700 hover:text-gray-900 px-3 py-2">
                <EllipsisHorizontalIcon className="h-5 w-5" />
              </button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block w-64">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
            <Link to="/signin" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Sign In
            </Link>
            <Link
              to="/register"
              className="bg-[#20BEFF] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1A95CC] transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
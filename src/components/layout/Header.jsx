import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-8"
                src="https://www.kaggle.com/static/images/site-logo.svg"
                alt="Kaggle"
              />
            </Link>
            <nav className="hidden md:ml-6 md:flex md:space-x-4">
              <Link to="/competitions" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Competitions
              </Link>
              <Link to="/datasets" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Datasets
              </Link>
              <Link to="/models" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Models
              </Link>
              <Link to="/discuss" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Discuss
              </Link>
              <Link to="/learn" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Learn
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Search Kaggle"
                />
              </div>
            </div>
            <div className="ml-4 flex items-center">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
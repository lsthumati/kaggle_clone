import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-[#E5E5E5] sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between h-[60px]">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-6"
                src="https://www.kaggle.com/static/images/site-logo.svg"
                alt="Kaggle"
              />
            </Link>
            <nav className="hidden lg:flex items-center space-x-1">
              <Link to="/competitions" className="text-[#4C4C4C] hover:text-[#1A1A1A] px-3 py-2 text-sm font-medium">
                Competitions
              </Link>
              <Link to="/datasets" className="text-[#4C4C4C] hover:text-[#1A1A1A] px-3 py-2 text-sm font-medium">
                Datasets
              </Link>
              <Link to="/models" className="text-[#4C4C4C] hover:text-[#1A1A1A] px-3 py-2 text-sm font-medium">
                Models
              </Link>
              <Link to="/code" className="text-[#4C4C4C] hover:text-[#1A1A1A] px-3 py-2 text-sm font-medium">
                Code
              </Link>
              <Link to="/discussions" className="text-[#4C4C4C] hover:text-[#1A1A1A] px-3 py-2 text-sm font-medium">
                Discussions
              </Link>
              <Link to="/courses" className="text-[#4C4C4C] hover:text-[#1A1A1A] px-3 py-2 text-sm font-medium">
                Courses
              </Link>
              <button className="text-[#4C4C4C] hover:text-[#1A1A1A] p-2">
                <EllipsisHorizontalIcon className="h-5 w-5" />
              </button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden lg:block w-72">
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-[#737373]" />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="block w-full pl-10 pr-3 py-2 bg-[#F5F5F5] rounded-lg text-sm placeholder-[#737373] focus:outline-none focus:ring-2 focus:ring-[#20BEFF] focus:bg-white transition-colors"
                />
              </div>
            </div>
            <Link to="/signin" className="text-[#4C4C4C] hover:text-[#1A1A1A] px-3 py-2 text-sm font-medium">
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
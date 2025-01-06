'use client';

import React from 'react';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';

const Navigation = () => {
  return (
    <header className="border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-blue-600">GenericStore</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Office Chairs</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Desks</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Accessories</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Collections</a>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
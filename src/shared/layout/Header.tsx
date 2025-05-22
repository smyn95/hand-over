'use client';

import { useState } from 'react';

import { Menu, Search, X } from 'lucide-react';

import { Button } from '@/components/ui/button';

import NextLink from '../ui/Link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <NextLink href="/" className="flex items-center space-x-2">
            <div className="from-brand-500 to-success-500 ropglounded-full h-8 w-8 bg-gradient-to-r"></div>
            <span className="text-xl font-bold">양도마켓</span>
          </NextLink>

          <div className="hidden items-center space-x-6 md:flex">
            <div className="relative">
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                className="focus:ring-brand-500 w-64 rounded-full border border-gray-200 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:outline-none"
              />
              <Search className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
            </div>

            <div className="flex space-x-2">
              <NextLink href="/login">
                <Button variant="outline" size="sm" className="font-medium">
                  로그인
                </Button>
              </NextLink>
              <NextLink href="/signup">
                <Button
                  size="sm"
                  className="bg-brand-500 hover:bg-brand-600 font-medium"
                >
                  회원가입
                </Button>
              </NextLink>
            </div>
          </div>

          <button
            className="focus:outline-none md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="animate-fade-in mt-4 pb-4 md:hidden">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                className="focus:ring-brand-500 w-full rounded-full border border-gray-200 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:outline-none"
              />
              <Search className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <NextLink href="/login" className="w-full">
                <Button variant="outline" className="w-full font-medium">
                  로그인
                </Button>
              </NextLink>
              <NextLink href="/signup" className="w-full">
                <Button variant="outline" className="w-full font-medium">
                  회원가입
                </Button>
              </NextLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

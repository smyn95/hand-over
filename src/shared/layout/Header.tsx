'use client';

import { useState, lazy } from 'react';

import { Bell, ShoppingCart, SquareChevronDown } from 'lucide-react';

import { Button } from '@/components/ui/button';

import NextLink from '../ui/Link';

const MobileMenu = lazy(() => import('@/widgets/layout/MobileMenu'));

const Navbar = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  const toggleMenu = () => setVisibleMenu(prev => !prev);

  return (
    <header className="fixed container w-full py-3 xl:relative xl:border-b-gray-100 xl:bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <NextLink href="/" className="flex items-center">
            <span className="text-xl">HANDOVER</span>
          </NextLink>

          <Button
            variant="ghost"
            size="icon"
            className={`w-auto transition-transform duration-300 md:hidden ${visibleMenu ? '-rotate-180' : ''}`}
            onClick={toggleMenu}
          >
            <SquareChevronDown />
          </Button>
        </div>

        <article className="flex items-center gap-2">
          <div className="hidden md:flex md:gap-2">
            <NextLink href="/login">
              <Button variant="outline" size="sm">
                로그인
              </Button>
            </NextLink>
            <NextLink href="/signup">
              <Button size="sm">회원가입</Button>
            </NextLink>
          </div>

          <div className="flex gap-2 md:hidden">
            <button aria-label="알림">
              <Bell size={20} />
            </button>
            <button aria-label="장바구니">
              <ShoppingCart size={20} />
            </button>
          </div>
        </article>
      </div>

      {visibleMenu && <MobileMenu />}
    </header>
  );
};

export default Navbar;

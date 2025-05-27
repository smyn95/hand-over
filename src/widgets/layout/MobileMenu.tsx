import { memo } from 'react';

import { Button } from '@/components/ui/button';
import NextLink from '@/shared/ui/Link';

const MobileMenu = () => {
  return (
    <div className="mt-4 pb-4 md:hidden">
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
  );
};

export default memo(MobileMenu);

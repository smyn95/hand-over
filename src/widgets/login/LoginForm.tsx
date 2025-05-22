import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { SiKakaotalk, SiNaver } from 'react-icons/si';

import { Button } from '@/components/ui/button';
import { doSocialLogin, doLogout } from '@/lib/actions';

type SocialProvider = 'google' | 'naver' | 'kakao';

interface SocialButtonProps {
  provider: SocialProvider;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

const SocialButton = ({
  provider,
  icon,
  label,
  className,
}: SocialButtonProps) => {
  return (
    <Button
      type="submit"
      name="action"
      value={provider}
      variant="outline"
      className={className}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </Button>
  );
};

const LoginForm = () => {
  const socialButtons: SocialButtonProps[] = [
    {
      provider: 'google',
      icon: <FcGoogle className="size-5" />,
      label: '구글 로그인',
      className: 'w-full bg-white text-black hover:bg-gray-100',
    },
    {
      provider: 'naver',
      icon: <SiNaver className="size-5" />,
      label: '네이버 로그인',
      className: 'w-full bg-[#03C75A] text-white hover:bg-[#029d4d]',
    },
    {
      provider: 'kakao',
      icon: <SiKakaotalk className="size-5" />,
      label: '카카오 로그인',
      className: 'w-full bg-[#FEE500] text-black hover:bg-[#ecd400]',
    },
  ];

  return (
    <form action={doSocialLogin} className="flex w-full flex-col gap-3">
      {socialButtons.map(button => (
        <SocialButton key={button.provider} {...button} />
      ))}
    </form>
  );
};

export const Logout = () => {
  return (
    <form action={doLogout}>
      <Button variant="destructive" size="sm" className="text-base">
        로그아웃
      </Button>
    </form>
  );
};

export default LoginForm;

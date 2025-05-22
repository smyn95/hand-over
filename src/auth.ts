import type { NextAuthConfig } from 'next-auth';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import KakaoProvider from 'next-auth/providers/kakao';
import NaverProvider from 'next-auth/providers/naver';

import { prisma } from '@/lib/prisma';

export const config: NextAuthConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID ?? '',
      clientSecret: process.env.KAKAO_CLIENT_SECRET ?? '',
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID ?? '',
      clientSecret: process.env.NAVER_CLIENT_SECRET ?? '',
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (!user || !account) return false;

      try {
        if (user.email) {
          const existingUser = await prisma.user.findUnique({
            where: { email: user.email },
          });

          if (!existingUser) {
            await prisma.user.create({
              data: {
                email: user.email,
                name: user.name || '',
                image: user.image || '',
                provider: account?.provider || '',
              },
            });
            console.log('User created successfully');
          } else {
            console.log('User already exists');
          }
        }
        return true;
      } catch (error) {
        console.error('Error in signIn callback:', error);
        return true;
      }
    },
  },
  debug: true,
};

export const { handlers, signIn, signOut } = NextAuth(config);

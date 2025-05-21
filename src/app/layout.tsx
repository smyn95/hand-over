import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';

import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';
import '../styles/globals.css';

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'HAND OVER',
  openGraph: {
    title: 'HAND OVER',
  },
  twitter: {
    title: 'HAND OVER',
  },
};

export default function RootLayout(props: Readonly<Props>) {
  const { children } = props;

  return (
    <html lang="en">
      <SessionProvider>
        <body className="antialiased">{children}</body>
      </SessionProvider>
    </html>
  );
}

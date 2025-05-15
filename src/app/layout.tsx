import type { Metadata } from 'next';

import Header from '@/components/layout/Header';

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
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}

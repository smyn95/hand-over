import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';

import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';
import '../styles/globals.css';
import Container from '@/shared/Container';
import Footer from '@/shared/layout/Footer';
import Header from '@/shared/layout/Header';

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
        <body className="antialiased">
          <Header />
          <section className="flex min-h-screen flex-col">
            <Container>{children}</Container>
            <Footer />
          </section>
        </body>
      </SessionProvider>
    </html>
  );
}

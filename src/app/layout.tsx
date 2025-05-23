import type { Metadata } from 'next';

import AuthProvider from '@/provider/AuthProvider';
import Container from '@/shared/Container';
import Footer from '@/shared/layout/Footer';
import Header from '@/shared/layout/Header';
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
        <AuthProvider>
          <Header />
          <section className="flex min-h-screen flex-col">
            <Container>{children}</Container>
            <Footer />
          </section>
        </AuthProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import Navbar from '../components/Navbar';
import './globals.css';

const noto = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'NS 디지털선도기업아카데미',
  description: 'NS 디지털선도기업아카데미 홍보 페이지',
  openGraph: {
    title: 'NS 디지털선도기업아카데미',
    description: 'NS 디지털선도기업아카데미 홍보 페이지',
    images: [
      {
        url: 'https://nsue.monsteratech.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'UnrealEngine Bootcamp',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${noto.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

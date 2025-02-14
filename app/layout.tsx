import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import Navbar from '../components/Navbar';
import './globals.css';

const noto = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: '언리얼 엔진5 부트캠프 / Unreal Engine5 Bootcamp',
  description:
    '언리얼 엔진, UnrealEngine, 개발자, 부트캠프, 게임개발, 미디어컨텐츠, 취업교육, 취업, 구인, 구직, 미취업자, 교육',
  openGraph: {
    title: '언리얼 엔진5 부트캠프',
    description: '언리얼엔진5로 게임, 콘텐츠를 제작하며 프로그래밍/아트 직무별 전문성까지 챙길 수 있는 교육과정!!',
    images: [
      {
        url: 'https://nsue.monsteratech.com/og-image2.png',
        width: 1200,
        height: 630,
        alt: 'UnrealEngine5 Bootcamp',
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

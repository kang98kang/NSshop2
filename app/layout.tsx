import Head from 'next/head';
import Navbar from '../components/Navbar';
import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=8, viewport-fit=cover" />
        <title>MONSTERATECH EDU</title>
        <meta name="description" content="몬스테라텍 디지털 트레이닝" />
      </Head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Head from "next/head";
import Navbar from "../components/Navbar";
import "./globals.css";

const noto = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Unity Bootcamp",
  description: "Unity Bootcamp 홍보 페이지",
  openGraph: {
    title: "Unity Bootcamp",
    description: "Unity Bootcamp 홍보 페이지",
    images: [
      {
        url: "https://unity.monsteratech.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Unity Bootcamp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1, maximum-scale=8, viewport-fit=cover"
        />
      </Head>
      <body className={`${noto.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

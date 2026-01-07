import type { Metadata } from 'next';
import { Noto_Serif_JP, Montserrat } from 'next/font/google';
import './template.css';
import SmoothScroll from '@/components/templates/apartment-pro/SmoothScroll';
import SplashScreen from '@/components/templates/apartment-pro/SplashScreen';

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  variable: '--font-noto-serif-jp',
  weight: ['300', '400', '600', '700'],
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ザ・パークハウス東銀座 | The Park House Higashi-Ginza',
  description: '銀座の中心で、贅沢な暮らしを。東京都中央区新富に位置する高級レジデンス。',
};

export default function TemplateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${notoSerifJP.variable} ${montserrat.variable} antialiased font-sans bg-primary text-dark min-h-screen`}>
      <SplashScreen />
      <SmoothScroll />
      {children}
    </div>
  );
}

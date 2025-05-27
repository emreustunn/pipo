import './globals.css';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import LanguageSelector from '@/components/LanguageSelector';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dulger Meerschaum',
  description: 'Premium Meerschaum Pipes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="pt-0">
              {children}
            </main>
            <LanguageSelector />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
} 
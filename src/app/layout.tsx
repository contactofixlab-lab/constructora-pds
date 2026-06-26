import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Constructora PDS | Proyectos Inmobiliarios de Calidad',
  description: 'Constructora PDS - Desarrollando proyectos de calidad con compromiso, profesionalismo y experiencia.',
  keywords: 'construcción, proyectos, inmobiliarios, constructora',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased">
        <div className="flex flex-col min-h-screen bg-white">
          <Navbar />
          <main className="flex-grow pt-16 sm:pt-[88px] md:pt-[120px] lg:pt-[136px]">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}

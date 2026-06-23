import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

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
    <html lang="es">
      <body className="antialiased">
        <div className="flex flex-col min-h-screen bg-white">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

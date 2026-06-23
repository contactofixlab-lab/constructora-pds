import type { Metadata } from 'next';
import './globals.css';
import RootLayout from '@/components/layout/RootLayout';

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
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}

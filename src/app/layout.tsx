import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import { getTextos, t, resolveContactoInfo } from '@/lib/textos';
import { contactoInfo as contactoInfoDefault } from '@/data/contacto';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Constructora PDS | Proyectos Inmobiliarios de Calidad',
  description: 'Constructora PDS - Desarrollando proyectos de calidad con compromiso, profesionalismo y experiencia.',
  keywords: 'construcción, proyectos, inmobiliarios, constructora',
  icons: {
    icon: '/favicon.svg',
  },
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const textos = await getTextos();
  const navbarLogo = t(textos, 'navbar-logo', '/logos/puertas-del-sol.png');
  const footerLogo = t(textos, 'footer-logo', '/logos/puertas-del-sol.png');
  const footerCopyright = t(textos, 'footer-copyright', 'Constructora Puerta del Sol. Todos los derechos reservados.');
  const contacto = resolveContactoInfo(textos, contactoInfoDefault);

  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased">
        <div className="flex flex-col min-h-screen bg-white">
          <Navbar logo={navbarLogo} />
          <main className="flex-grow pt-16 sm:pt-[88px] md:pt-[120px] lg:pt-[136px]">
            {children}
          </main>
          <Footer logo={footerLogo} copyright={footerCopyright} contacto={contacto} />
          <WhatsAppButton whatsapp={contacto.whatsapp} />
        </div>
      </body>
    </html>
  );
}

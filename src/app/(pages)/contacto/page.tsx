import { getTextos, t, resolveContactoInfo } from '@/lib/textos';
import { contactoInfo as contactoInfoDefault } from '@/data/contacto';
import ContactoClient from './ContactoClient';

export default async function Contacto() {
  const textos = await getTextos();

  return (
    <ContactoClient
      bannerImagen={t(textos, 'contacto-banner-imagen', '/images/heroes/hero-home.png')}
      bannerTitulo={t(textos, 'contacto-banner-titulo', 'Contáctanos')}
      bannerSubtitulo={t(textos, 'contacto-banner-subtitulo', 'Cuéntanos sobre tu proyecto y te responderemos a la brevedad')}
      contactoInfo={resolveContactoInfo(textos, contactoInfoDefault)}
    />
  );
}

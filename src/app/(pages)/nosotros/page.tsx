import { getTextos, t } from '@/lib/textos';
import { getEquipo } from '@/lib/equipo';
import NosotrosClient from './NosotrosClient';

export default async function Nosotros() {
  const [textos, equipo] = await Promise.all([getTextos(), getEquipo()]);

  return (
    <NosotrosClient
      bannerImagen={t(textos, 'nosotros-banner-imagen', '/images/heroes/hero-home.png')}
      bannerTitulo={t(textos, 'nosotros-banner-titulo', 'Nuestro Equipo')}
      bannerSubtitulo={t(textos, 'nosotros-banner-subtitulo', 'Profesionales comprometidos con la excelencia en cada proyecto')}
      directivaImagen={textos['nosotros-directiva-imagen'] || ''}
      directivaParrafo={t(textos, 'nosotros-directiva-parrafo', 'Somos una constructora especializada en el desarrollo de proyectos residenciales y comerciales. Nos enfocamos en ser el brazo constructor de cada proyecto, con un equipo comprometido con la excelencia y la calidad en cada una de sus etapas.')}
      equipo={equipo}
    />
  );
}

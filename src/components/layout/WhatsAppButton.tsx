import Link from 'next/link';

export default function WhatsAppButton({
  whatsapp = 'https://wa.me/56979877883?text=Hola,%20me%20gustaría%20más%20información%20sobre%20sus%20proyectos.',
}: { whatsapp?: string }) {
  return (
    <Link
      href={whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contáctanos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 transition-all"
    >
      {/* Etiqueta que aparece al hover */}
      <span className="hidden sm:block opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 bg-white text-[#128C7E] font-semibold text-sm px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
        Escríbenos por WhatsApp
      </span>

      {/* Ícono principal */}
      <div className="relative">
        <img
          src="/icons/whatsapp.png"
          alt="WhatsApp"
          className="w-20 h-20 drop-shadow-2xl hover:scale-110 transition-transform duration-300"
        />
      </div>
    </Link>
  );
}

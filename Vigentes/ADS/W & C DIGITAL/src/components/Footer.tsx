import { Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black border-t-2 border-[rgb(237,27,38)] py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6">
          <img
            src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=wec%20digital%2FWhatsApp%20Image%202025-11-18%20at%2020.35.34-Photoroom.png&version_id=null"
            alt="W&C Digital"
            className="h-12 w-auto brightness-0 invert"
          />

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/wecdigital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[rgb(237,27,38)] transition-all duration-200 hover:scale-125"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/WeCDigital?locale=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[rgb(237,27,38)] transition-all duration-200 hover:scale-125"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
          </div>

          <p className="text-gray-400 text-sm text-center">
            © 2026 W&C Digital - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

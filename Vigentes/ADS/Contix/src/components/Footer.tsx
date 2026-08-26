import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#solucoes', label: 'Soluções' },
  { href: '#contato', label: 'Fale Conosco' },
];

export default function Footer() {
  return (
    <footer className="bg-[#234783] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/contix%2Fimg%2Flogo.png"
              alt="Contix Inovação Contábil"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/90 leading-relaxed">
              Escritório de contabilidade em Campo Grande - MS, especializado em
              abertura de empresas, contabilidade digital e gestão financeira
              estratégica para micro e pequenas empresas. Desde 2016
              transformando negócios.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg text-white mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white/90 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/556733052146?text=Olá! Gostaria de abrir minha empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/90 hover:text-white transition-colors"
              >
                Abrir Empresa
              </a>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg text-white mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 justify-center md:justify-start">
                <Phone
                  className="lucide lucide-phone text-white/90 flex-shrink-0 mt-1"
                  width={18}
                  height={18}
                />
                <span className="text-white/90">(67) 3305-2146</span>
              </div>
              <div className="flex items-start gap-2 justify-center md:justify-start">
                <MapPin
                  className="lucide lucide-map-pin text-white/90 flex-shrink-0 mt-1"
                  width={18}
                  height={18}
                />
                <span className="text-white/90">
                  Rua Dr. Mário Gonçalves, 84
                  <br />
                  Campo Grande - MS
                </span>
              </div>
              <div className="flex items-start gap-2 justify-center md:justify-start">
                <Clock
                  className="lucide lucide-clock text-white/90 flex-shrink-0 mt-1"
                  width={18}
                  height={18}
                />
                <span className="text-white/90">Seg-Sex 08:00-17:00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.instagram.com/contixcontabilidade"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="lucide lucide-instagram text-white" width={28} height={28} />
          </a>
          <a
            href="https://www.facebook.com/share/19UnNAvtWv/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300"
            aria-label="Facebook"
          >
            <Facebook className="lucide lucide-facebook text-white" width={28} height={28} />
          </a>
          <a
            href="https://wa.me/556733052146"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300"
            aria-label="WhatsApp"
          >
            <Phone className="lucide lucide-phone text-white" width={28} height={28} />
          </a>
        </div>
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-white/70 text-sm">
            2026 Contix Inovação Contábil. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Instagram, MapPin, Phone, Clock } from 'lucide-react';

const WHATSAPP_ORCAMENTO =
  'http://wa.me/557192534118?text=Ol%C3%A1%21+Gostaria+de+um+or%C3%A7amento+para+reparo+do+meu+celular.';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#quem-somos', label: 'Quem Somos' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-[#001030] text-white">
      <div className="bg-[#004AAC] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-1">
              Seu celular quebrou? Fale conosco agora.
            </h3>
            <p className="text-blue-200 text-sm">
              Orçamento grátis e resposta rápida pelo WhatsApp.
            </p>
          </div>
          <a
            href={WHATSAPP_ORCAMENTO}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-[#004AAC] font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-all duration-200 active:scale-95 shadow-lg"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <img
              src="https://storage.lucasmendes.dev/site-sp/jm-celular/img/logo-sem-fundo-letra-branca.webp"
              alt="JM Celular"
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Desde 2012 oferecendo serviços de assistência técnica com qualidade e confiança para
              todos os clientes em Salvador e região. Não arrisque com quem ainda está aprendendo —
              venha para quem é profissional.
            </p>
            <a
              href="https://www.instagram.com/jmcelulariphone/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <Instagram width={18} height={18} className="lucide lucide-instagram " />
              @jmcelulariphone
            </a>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  width={16}
                  height={16}
                  className="text-[#004AAC] shrink-0 mt-0.5"
                />
                <span className="text-gray-400 text-sm">
                  Av. Dorival Caymmi, 548
                  <br />
                  Itapuã, Salvador - BA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone width={16} height={16} className="text-[#004AAC] shrink-0" />
                <a
                  href="http://wa.me/557192534118"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  (71) 9 9253-4118
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  width={16}
                  height={16}
                  className="text-[#004AAC] shrink-0 mt-0.5"
                />
                <span className="text-gray-400 text-sm">
                  Seg–Sex: 08:00 às 17:00
                  <br />
                  Sáb: 08:00 às 14:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-600 text-xs">© 2026 JM Celular. Todos os direitos reservados.</p>
          <p className="text-gray-600 text-xs">Assistência Técnica em Salvador – BA</p>
        </div>
      </div>
    </footer>
  );
}

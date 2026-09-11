import { MapPin, Phone, Instagram, Heart } from 'lucide-react';

const WHATSAPP_URL = 'http://wa.me/553399711500';
const INSTAGRAM_URL = 'https://www.instagram.com/dramarcelalaender/';
const LOGO = 'https://storage.lucasmendes.dev/site-sp/dra%20marcela%20laender%2Fimg%2Flogo-sem-fundo.webp';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const servicesList = [
  'Laser Íntimo',
  'Ninfoplastia',
  'Reposição Hormonal',
  'Preenchimento Íntimo',
  'Histeroscopia',
  'Consultas Ginecológicas',
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#613C45] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img src={LOGO} alt="Dra. Marcela Laender" className="h-16 w-auto mb-6 brightness-0 invert" />
            <p className="text-white/80 leading-relaxed">
              Especialista em ginecologia e obstetrícia, oferecendo atendimento de excelência com
              tecnologia de ponta e cuidado humanizado.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Navegação</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-white/80 hover:text-[#D88B9B] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Serviços</h3>
            <ul className="space-y-3 text-white/80">
              {servicesList.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 text-[#D88B9B] mt-1" />
                <p className="text-white/80 text-sm leading-relaxed">
                  R. 7 de Setembro, 2716 - Sala 1404
                  <br />
                  Centro, Gov. Valadares - MG
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0 text-[#D88B9B]" />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#D88B9B] transition-colors"
                >
                  (33) 99971-1500
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram size={20} className="flex-shrink-0 text-[#D88B9B]" />
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#D88B9B] transition-colors"
                >
                  @dramarcelalaender
                </a>
              </div>
            </div>
            <div className="mt-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#D88B9B] text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#613C45] transition-all duration-300 font-medium"
              >
                Agendar Consulta
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm flex items-center justify-center gap-2 flex-wrap">
            2026 Dra. Marcela Laender. Todos os direitos reservados. Feito com{' '}
            <Heart size={16} className="text-[#D88B9B] fill-current" /> para cuidar de você.
          </p>
        </div>
      </div>
    </footer>
  );
}

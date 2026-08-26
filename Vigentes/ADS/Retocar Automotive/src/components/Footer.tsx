import { Instagram, Phone, MapPin } from 'lucide-react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=556233396922&text&type=phone_number&app_absent=0';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#localizacao', label: 'Localização' },
  { href: '#contato', label: 'Contato' },
];

const servicos = [
  'Mecânica Geral',
  'Lanternagem e Pintura',
  'Elétrica Automotiva',
  'Ar Condicionado',
  'Alinhamento e Balanceamento',
  'Chaveiro Automotivo',
  'Injeção Eletrônica',
  'Módulos',
  'Peças em Geral',
  'Locação de Veículos',
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/RETOCAR/logo-retocar-servicos-pecas-locacao-veiculos_1024x1024.webp"
              alt="Retocar"
              className="h-16 w-auto object-contain mb-5"
            />
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              A oficina mais completa de Santa Terezinha de Goiás. Mais de 15 anos cuidando do seu
              veículo com qualidade e transparência.
            </p>
            <a
              href="https://instagram.com/retocarltda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
            >
              <Instagram className="lucide lucide-instagram" width={16} height={16} />
              @retocarltda
            </a>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Serviços</h4>
            <ul className="space-y-3">
              {servicos.map((servico) => (
                <li key={servico}>
                  <span className="text-gray-500 text-sm">{servico}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contato</h4>
            <div className="space-y-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-500 hover:text-white text-sm transition-colors"
              >
                <Phone
                  className="lucide lucide-phone mt-0.5 flex-shrink-0 text-[#DB151F]"
                  width={14}
                  height={14}
                />
                +55 (62) 3339-6922
              </a>
              <div className="flex items-start gap-3 text-gray-500 text-sm">
                <MapPin
                  className="lucide lucide-map-pin mt-0.5 flex-shrink-0 text-[#DB151F]"
                  width={14}
                  height={14}
                />
                <span>
                  AV DONA DITA N° 400 - CENTRO
                  <br />
                  Santa Terezinha de Goiás - GO
                  <br />
                  CEP: 76.500-000
                </span>
              </div>
              <div className="pt-2">
                <p className="text-gray-600 text-xs">Seg – Sex: 08:00 às 18:00</p>
                <p className="text-gray-600 text-xs">Sáb: 08:00 às 12:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs text-center sm:text-left">
            © 2026 Retocar Serviços e Peças Ltda. Todos os direitos reservados.
          </p>
          <p className="text-gray-700 text-xs">Santa Terezinha de Goiás – GO</p>
        </div>
      </div>
    </footer>
  );
}

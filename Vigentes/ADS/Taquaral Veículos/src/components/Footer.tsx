import { Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react';

const LOGO = 'https://storage.lucasmendes.dev/site-sp/taquaral%20veiculos%2Fimg2%2Flogo-atualizada-sem-fundo.webp';

const servicos = [
  { label: 'Venda de Veículos', href: 'https://wa.me/5562992489166?text=Gostaria de saber sobre venda de veículos.' },
  { label: 'Compra de Veículos', href: 'https://wa.me/5562992489166?text=Quero vender meu veículo.' },
  { label: 'Troca', href: 'https://wa.me/5562992489166?text=Gostaria de trocar meu veículo.' },
  { label: 'Consignação', href: 'https://wa.me/5562992489166?text=Quero deixar meu veículo em consignação.' },
  { label: 'Financiamento', href: 'https://wa.me/5562992489166?text=Gostaria de informações sobre financiamento.' },
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(16,16,16)] border-t border-[rgb(193,148,35)]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <img src={LOGO} alt="Taquaral Veículos" className="h-16 w-auto object-contain mb-6" />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Compra, venda, troca e consignação de veículos com transparência e segurança.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/taquaralveiculos.oficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-[rgb(193,148,35)] rounded-lg flex items-center justify-center transition-all duration-200 group"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-[rgb(16,16,16)]" />
              </a>
              <a
                href="https://www.facebook.com/taquaralveiculosofc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-[rgb(193,148,35)] rounded-lg flex items-center justify-center transition-all duration-200 group"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-[rgb(16,16,16)]" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-3">
              {servicos.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[rgb(254,240,115)] transition-colors duration-200 text-sm"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[rgb(193,148,35)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  AV. Antonio Moreira, N°531<br />
                  Vila Jandira, Inhumas - GO<br />
                  CEP: 75405-135
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[rgb(193,148,35)] flex-shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/5562992489166"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[rgb(254,240,115)] transition-colors duration-200 text-sm"
                >
                  (62) 99248-9166
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Horário de Atendimento</h3>
            <div className="flex items-start space-x-3 mb-6">
              <Clock className="w-5 h-5 text-[rgb(193,148,35)] flex-shrink-0 mt-0.5" />
              <div className="text-gray-400 text-sm leading-relaxed">
                Segunda a Sexta: 8h às 18h<br />
                Sábado: 8h às 14h<br />
                Domingo: Fechado
              </div>
            </div>
            <a
              href="https://wa.me/5562992489166"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-[rgb(193,148,35)] hover:bg-[rgb(254,240,115)] text-[rgb(16,16,16)] px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 transform hover:scale-105"
            >
              Fale Conosco
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Taquaral Veículos. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

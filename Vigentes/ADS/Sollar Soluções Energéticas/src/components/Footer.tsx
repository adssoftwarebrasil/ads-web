import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const quickLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Portfólio', id: 'portfolio' },
  { label: 'Contato', id: 'contato' },
];

const services = [
  'Energia Solar Residencial',
  'Energia Solar Comercial',
  'Sistemas On-Grid',
  'Sistemas Off-Grid',
  'Sistemas Híbridos',
  'Usinas de Investimento',
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[rgb(40,68,126)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <img
              src="https://storage.lucasmendes.dev/site-sp/sollarsolucoes%2Flogo.png"
              alt="Sollar Soluções Energéticas"
              className="h-16 w-auto"
            />
            <p className="text-gray-300 leading-relaxed">
              Transformando luz solar em economia real desde 2020. Soluções completas em energia solar para
              residências e empresas.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-[rgb(237,185,47)]">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.id}>
                  <button onClick={() => scrollTo(l.id)} className="text-gray-300 hover:text-white transition-colors">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-[rgb(237,185,47)]">Serviços</h3>
            <ul className="space-y-3 text-gray-300">
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-[rgb(237,185,47)]">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin
                  width={20}
                  height={20}
                  className="lucide lucide-map-pin text-[rgb(237,185,47)] flex-shrink-0 mt-1"
                />
                <span className="text-gray-300">Rua Bahia, 461 - Siqueira Campos, Aracaju/SE</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone width={20} height={20} className="lucide lucide-phone text-[rgb(237,185,47)] flex-shrink-0" />
                <a href="tel:+5579991174811" className="text-gray-300 hover:text-white transition-colors">
                  (79) 99117-4811
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail width={20} height={20} className="lucide lucide-mail text-[rgb(237,185,47)] flex-shrink-0" />
                <a href="mailto:contato@sollar.com.br" className="text-gray-300 hover:text-white transition-colors">
                  contato@sollar.com.br
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Instagram
                  width={20}
                  height={20}
                  className="lucide lucide-instagram text-[rgb(237,185,47)] flex-shrink-0"
                />
                <a
                  href="https://instagram.com/sollarsergipe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  @sollarsergipe
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Sollar Soluções Energéticas. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">Desenvolvido com tecnologia de ponta</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

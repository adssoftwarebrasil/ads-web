import { Instagram, Phone, MapPin, Mail, Clock } from 'lucide-react';

const quickLinks = [
  { label: 'Serviços', target: 'services' },
  { label: 'Sobre Nós', target: 'about' },
  { label: 'Avaliações', target: 'testimonials' },
  { label: 'Localização', target: 'location' },
];

const servicesList = [
  'Manutenção em Computadores',
  'Manutenção em Notebooks',
  'Manutenção em Impressoras',
  'Manutenção em Nobreaks',
  'Formatação e Limpeza',
  'Suporte Empresarial',
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <img
              src="https://storage.lucasmendes.dev/site-sp/rn%20informatica%2Fimg%2Flogo-sem-fundo.png"
              alt="RN Informática"
              className="h-16 w-auto object-contain"
            />
            <p className="text-gray-400 leading-relaxed">
              Há mais de 18 anos oferecendo soluções em informática com qualidade, confiança e atendimento
              diferenciado em Feira de Santana.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/rn_informatica_/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[rgb(152,204,50)] p-3 rounded-lg transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5575981914422"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[rgb(152,204,50)] p-3 rounded-lg transition-all duration-300"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.target}>
                  <button
                    onClick={() => scrollTo(link.target)}
                    className="text-gray-400 hover:text-[rgb(152,204,50)] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Serviços</h3>
            <ul className="space-y-3 text-gray-400">
              {servicesList.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[rgb(152,204,50)] flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  R. Barão do Rio Branco, 1348 - Loja 10<br />
                  Centro, Feira de Santana - BA
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[rgb(152,204,50)] flex-shrink-0 mt-1" />
                <div className="flex flex-col space-y-1">
                  <a href="tel:+5575981914422" className="text-gray-400 hover:text-white transition-colors">
                    (75) 98191-4422
                  </a>
                  <a href="tel:+5575991575254" className="text-gray-400 hover:text-white transition-colors">
                    (75) 99157-5254
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[rgb(152,204,50)] flex-shrink-0" />
                <a href="mailto:remafisinformartica@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm break-all">
                  remafisinformartica@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[rgb(152,204,50)] flex-shrink-0" />
                <span className="text-gray-400 text-sm">Seg - Sex: 8:00 às 18:00</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              2026 RN Informática. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Feira de Santana - BA | CNPJ: Assistência Técnica Especializada
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

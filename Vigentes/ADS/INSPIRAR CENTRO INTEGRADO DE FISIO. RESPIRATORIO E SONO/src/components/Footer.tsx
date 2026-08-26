import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const menuLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const services = [
  'Treinamentos e Capacitações',
  'Engenharia Clínica',
  'Concentradores de Oxigênio',
  'Fisioterapia Cardiorrespiratória',
  'Polissonografia',
  'Máscaras de CPAP',
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-slate-900 to-black text-white py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          <div className="space-y-6">
            <img
              src="https://storage.lucasmendes.dev/site-sp/inspirar%2Flogo-inspirar-300x132.png"
              alt="Inspirar Centro Integrado"
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
              Pioneiros em saúde respiratória em Sinop/MT. Atendimento
              humanizado e tecnologia de ponta desde 2018.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg lg:text-xl mb-6 text-white">Menu</h4>
            <ul className="space-y-3 text-gray-400">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[rgb(100,150,200)] transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>{' '}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg lg:text-xl mb-6 text-white">
              Serviços
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm lg:text-base">
              {services.map((service) => (
                <li
                  key={service}
                  className="hover:text-[rgb(100,150,200)] transition-colors cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg lg:text-xl mb-6 text-white">
              Contato
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm lg:text-base">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[rgb(25,85,137)] transition-colors">
                  <Phone
                    className="lucide lucide-phone"
                    width={18}
                    height={18}
                  />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Telefone</div>
                  <a
                    href="tel:+556630153100"
                    className="hover:text-[rgb(100,150,200)] transition-colors font-medium"
                  >
                    (66) 3015-3100
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[rgb(25,85,137)] transition-colors">
                  <Mail
                    className="lucide lucide-mail"
                    width={18}
                    height={18}
                  />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Email</div>
                  <a
                    href="mailto:contato@inspirarservicos.com.br"
                    className="hover:text-[rgb(100,150,200)] transition-colors break-all font-medium"
                  >
                    contato@inspirarservicos.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[rgb(25,85,137)] transition-colors">
                  <MapPin
                    className="lucide lucide-map-pin"
                    width={18}
                    height={18}
                  />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Endereço</div>
                  <span className="font-medium">R. Cannes, 316 - Sinop/MT</span>
                </div>
              </li>
            </ul>
            <div className="flex gap-3 mt-8">
              <a
                href="#"
                className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[rgb(25,85,137)] transition-all duration-300 hover:scale-110 border border-white/10"
              >
                <Facebook
                  className="lucide lucide-facebook"
                  width={22}
                  height={22}
                />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[rgb(25,85,137)] transition-all duration-300 hover:scale-110 border border-white/10"
              >
                <Instagram
                  className="lucide lucide-instagram"
                  width={22}
                  height={22}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8">
          <p className="text-center text-gray-500 text-sm lg:text-base">
            © 2026 Inspirar Centro Integrado. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

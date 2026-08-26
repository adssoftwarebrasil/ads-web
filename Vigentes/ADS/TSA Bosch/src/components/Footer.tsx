import { Instagram, Phone, MapPin, Mail } from 'lucide-react';

const quickLinks = [
  { label: 'Início', id: 'hero' },
  { label: 'Sobre Nós', id: 'about' },
  { label: 'Serviços', id: 'services' },
  { label: 'Produtos', id: 'products' },
];

const ourServices = [
  'Recuperação de Turbinas',
  'Direção Hidráulica',
  'Peças Bosch Originais',
  'Diagnóstico Completo',
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[rgb(4,26,58)] to-[rgb(2,15,35)] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/tsa%20bosh%2Fimg%2Ftsa-logo-sem-fundo.webp"
              alt="TSA Logo"
              className="h-16 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-300 leading-relaxed mb-6">
              Especialistas em recuperação de turbinas e direção hidráulica para para
              veículos a diesel, pickups, caminhões e maquinas. Qualidade certificada
              Bosch.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/tsacentrodirecoesbosch/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[rgb(163,24,23)] rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Instagram width={20} height={20} />
              </a>
              <button className="w-10 h-10 bg-white/10 hover:bg-[rgb(163,24,23)] rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110">
                <Phone width={20} height={20} />
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-[rgb(163,24,23)] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-[rgb(163,24,23)] group-hover:w-4 transition-all duration-200"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Nossos Serviços</h3>
            <ul className="space-y-3">
              {ourServices.map((service) => (
                <li key={service} className="text-gray-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[rgb(163,24,23)] rounded-full"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin
                  width={20}
                  height={20}
                  className="flex-shrink-0 mt-1 text-[rgb(163,24,23)]"
                />
                <span className="text-sm">
                  Av. Buenos Aires, 1230
                  <br />
                  Vila Martins, Goiânia - GO
                  <br />
                  74703-060
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone
                  width={20}
                  height={20}
                  className="flex-shrink-0 text-[rgb(163,24,23)]"
                />
                <div className="text-sm">
                  <p>(62) 99804-8885</p>
                  <p>(62) 99469-9904</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail
                  width={20}
                  height={20}
                  className="flex-shrink-0 text-[rgb(163,24,23)]"
                />
                <a
                  href="mailto:comercialtsa02@gmail.com"
                  className="text-sm hover:text-[rgb(163,24,23)] transition-colors break-all"
                >
                  comercialtsa02@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Instagram
                  width={20}
                  height={20}
                  className="flex-shrink-0 text-[rgb(163,24,23)]"
                />
                <a
                  href="https://www.instagram.com/tsacentrodirecoesbosch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-[rgb(163,24,23)] transition-colors"
                >
                  @tsacentrodirecoesbosch
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 TSA Centro de Direções Bosch. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

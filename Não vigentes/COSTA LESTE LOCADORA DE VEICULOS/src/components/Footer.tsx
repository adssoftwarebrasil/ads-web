import { Facebook, Instagram, Twitter, Car, MapPin, Phone, Mail } from 'lucide-react';

const quickLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Nossa Frota', href: '#frota' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Localização', href: '#localizacao' },
];

const services = [
  'Locação de Carros',
  'Entrega no Aeroporto',
  'Entrega no Hotel',
  'Carros Novos e Revisados',
  'Seguro Completo',
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(16,14,13)] text-[rgb(255,254,252)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img
                src="https://storage.lucasmendes.dev/site-sp/locadora%20costa%20leste%2Fimg%2Flogo-sem-fundo.png"
                alt="Locadora Costa Leste"
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-[rgb(255,254,252)]/70 leading-relaxed mb-6">
              12 anos de experiência oferecendo os melhores serviços de locação de veículos em
              Fortaleza.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/locadoracostaleste"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[rgb(255,254,252)]/10 hover:bg-[rgb(202,25,27)] rounded-full transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/locadoracostaleste/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[rgb(255,254,252)]/10 hover:bg-[rgb(202,25,27)] rounded-full transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://x.com/locadoracl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[rgb(255,254,252)]/10 hover:bg-[rgb(202,25,27)] rounded-full transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[rgb(255,254,252)]/70 hover:text-[rgb(202,25,27)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Nossos Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="flex items-center space-x-2">
                  <Car size={16} className="text-[rgb(202,25,27)]" />
                  <span className="text-[rgb(255,254,252)]/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-[rgb(202,25,27)] flex-shrink-0 mt-1" />
                <span className="text-[rgb(255,254,252)]/70 text-sm leading-relaxed">
                  Rua Dr. Atualpa Barbosa Lima, 618 - LOJA 02
                  <br />
                  Meireles, Fortaleza - CE
                  <br />
                  CEP: 60115-015
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-[rgb(202,25,27)] flex-shrink-0" />
                <a
                  href="http://wa.me/5585986018954"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgb(255,254,252)]/70 hover:text-[rgb(202,25,27)] transition-colors text-sm"
                >
                  (85) 98601-8954
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-[rgb(202,25,27)] flex-shrink-0" />
                <a
                  href="mailto:contato@locadoracostaleste.com.br"
                  className="text-[rgb(255,254,252)]/70 hover:text-[rgb(202,25,27)] transition-colors text-sm"
                >
                  contato@locadoracostaleste.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[rgb(255,254,252)]/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[rgb(255,254,252)]/60 text-sm text-center md:text-left">
              © 2026 Locadora Costa Leste. Todos os direitos reservados.
            </p>
            <p className="text-[rgb(255,254,252)]/60 text-sm text-center md:text-right">
              Desenvolvido com <span className="text-[rgb(202,25,27)]">♥</span> para você
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

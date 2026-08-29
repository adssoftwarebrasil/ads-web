import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const menuLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Vantagens', href: '#vantagens' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  const services = [
    'Manutenção e Calibragem',
    'Balança Rodoviária',
    'Balanças Eletrônicas',
    'Peças de Reposição',
    'Atendimento Técnico',
    'Consultoria Especializada',
  ];

  return (
    <footer className="bg-[#003D6B] text-white border-t-4 border-[#EA1E26]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/balan%C3%A7as%20nova%20era%2Flogomarca.png"
              alt="Balanças Nova Era"
              className="h-16 mb-6 brightness-0 invert"
            />
            <p className="text-[#CCE5F5] leading-relaxed mb-6">
              A Balanças Nova Era foi criada para oferecer um atendimento diferenciado em soluções de pesagem. Com mais de 30 anos de experiência no mercado.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/balancasnovaera"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#EA1E26] p-3 rounded-full transition-all transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Menu</h3>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#CCE5F5] hover:text-white hover:translate-x-2 inline-block transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#servicos"
                    className="text-[#CCE5F5] hover:text-white hover:translate-x-2 inline-block transition-all"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+5541972037264"
                  className="flex items-start gap-3 text-[#CCE5F5] hover:text-white transition-colors group"
                >
                  <Phone size={20} className="flex-shrink-0 mt-1 group-hover:animate-bounce" />
                  <span>(41) 9720-3764</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:balancasnovaera@hotmail.com"
                  className="flex items-start gap-3 text-[#CCE5F5] hover:text-white transition-colors group"
                >
                  <Mail size={20} className="flex-shrink-0 mt-1 group-hover:animate-bounce" />
                  <span className="break-all">balancasnovaera@hotmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/dir//Rua+Jo%C3%A3o+Reffo,+872+-+Santa+Felicidade,+Curitiba+-+PR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[#CCE5F5] hover:text-white transition-colors group"
                >
                  <MapPin size={20} className="flex-shrink-0 mt-1 group-hover:animate-bounce" />
                  <span>
                    Rua João Reffo, 872<br />
                    Santa Felicidade<br />
                    Curitiba/PR
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#CCE5F5] text-sm">
            <p>© {currentYear} Balanças Nova Era. Todos os direitos reservados.</p>
            <p>
              Desenvolvido por{' '}
              <a
                href="https://www.google.com/partners/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#EA1E26] font-semibold transition-colors"
              >
                Parceiro Google
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

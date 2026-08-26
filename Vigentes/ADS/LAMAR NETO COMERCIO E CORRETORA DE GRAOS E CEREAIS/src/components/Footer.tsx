import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#324422] text-[#e6e6e6]" role="contentinfo" aria-label="Rodapé">
      <div className="max-w-[1320px] mx-auto px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/lamarneto%2Flamar-neto-agronegocios_1_-logo-nova-sem-fundo.png"
              alt="Lamar Neto - Logomarca"
              className="h-20 w-auto object-contain brightness-0 invert mb-5"
              loading="lazy"
            />
            <p className="text-sm leading-relaxed mb-5">
              A Lamar Neto é especializada em comercialização de grãos desde 2009. Qualidade, compromisso e tradição familiar.
            </p>
          </div>

          <div>
            <h3 className="text-[#fbbf1f] text-lg font-semibold mb-5">Menu</h3>
            <nav className="space-y-3">
              {[
                { label: 'Início', id: 'hero' },
                { label: 'Sobre', id: 'sobre' },
                { label: 'Serviços', id: 'servicos' },
                { label: 'Vantagens', id: 'vantagens' },
                { label: 'Depoimentos', id: 'depoimentos' },
                { label: 'Contato', id: 'contato' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="block text-[15px] hover:text-[#fbbf1f] hover:pl-1 transition-all duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-[#fbbf1f] text-lg font-semibold mb-5">Nossos Serviços</h3>
            <nav className="space-y-3">
              {[
                'Soja para Industrialização',
                'Milho para Fábricas',
                'Milheto para Confinamento',
                'Sorgo',
                'Logística e Transporte',
                'Consultoria em Grãos'
              ].map((service, index) => (
                <a
                  key={index}
                  href="#servicos"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('servicos');
                  }}
                  className="block text-[15px] hover:text-[#fbbf1f] hover:pl-1 transition-all duration-300"
                >
                  {service}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-[#fbbf1f] text-lg font-semibold mb-5">Fale Conosco</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-[18px] h-[18px] text-[#fbbf1f] flex-shrink-0 mt-1" />
                <div className="space-y-2 text-[15px]">
                  <a href="tel:+5566984082396" className="block hover:text-[#fbbf1f] transition-colors">
                    (66) 98408-2396
                  </a>
                  <a href="tel:+5566999383052" className="block hover:text-[#fbbf1f] transition-colors">
                    (66) 99938-3052
                  </a>
                  <a href="tel:+5566996892350" className="block hover:text-[#fbbf1f] transition-colors">
                    (66) 99689-2350
                  </a>
                  <a href="tel:+5566984080873" className="block hover:text-[#fbbf1f] transition-colors">
                    (66) 98408-0873
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-[18px] h-[18px] text-[#fbbf1f] flex-shrink-0 mt-1" />
                <a href="mailto:contato@site.com" className="text-[15px] hover:text-[#fbbf1f] transition-colors">
                  contato@site.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-[18px] h-[18px] text-[#fbbf1f] flex-shrink-0 mt-1" />
                <div className="text-sm">
                  Querência – MT<br />CEP: 78.643-000
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-3">Siga-nos</h4>
                <div className="flex gap-3">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border-2 border-white border-opacity-25 flex items-center justify-center hover:bg-[#fbbf1f] hover:border-[#fbbf1f] hover:scale-110 transition-all"
                    aria-label="Facebook da Lamar Neto"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border-2 border-white border-opacity-25 flex items-center justify-center hover:bg-[#fbbf1f] hover:border-[#fbbf1f] hover:scale-110 transition-all"
                    aria-label="Instagram da Lamar Neto"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#999999] text-center md:text-left">
            © 2025 Lamar Neto Comércio de Grãos e Cereais - Todos os direitos reservados
          </p>
          <a
            href="#"
            className="text-[#a2c145] text-[13px] hover:text-[#fbbf1f] transition-colors"
          >

          </a>
        </div>
      </div>
    </footer>
  );
}
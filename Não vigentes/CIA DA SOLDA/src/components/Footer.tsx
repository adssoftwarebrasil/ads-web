import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from 'lucide-react';

const WA_LINK = 'http://wa.me/553184631447';

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: 'Produtos', href: '#produtos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/cia%20da%20solda/img/logo-sem-fundo.webp"
              alt="Cia da Solda"
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Mais de 8 anos fornecendo máquinas, consumíveis e EPIs de qualidade para soldadores
              profissionais, serralherias e indústrias em Contagem e BH.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/ciadasoldacia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-red/20 text-gray-400 hover:text-white flex items-center justify-center transition-all"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/ciasolda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-red/20 text-gray-400 hover:text-white flex items-center justify-center transition-all"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Links Rápidos</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Produtos</h4>
            <ul className="flex flex-col gap-2.5 text-gray-500 text-sm">
              <li>Máquinas de Solda MIG/MAG</li>
              <li>Máquinas TIG e Eletrodo</li>
              <li>Arames e Consumíveis</li>
              <li>EPIs para Soldagem</li>
              <li>Peças para Tochas</li>
              <li>Ferramentas e Acessórios</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Contato</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-gray-500 text-sm">
                <MapPin size={15} className="text-brand-red shrink-0 mt-0.5" />
                <span>R. Monsenhor Messías, 378 – Flamengo, Contagem – MG</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-brand-red shrink-0" />
                <a href="tel:3135654833" className="text-gray-500 hover:text-white text-sm transition-colors">
                  (31) 3565-4833
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-brand-red shrink-0" />
                <a href="mailto:vendas@ciasolda.com.br" className="text-gray-500 hover:text-white text-sm transition-colors break-all">
                  vendas@ciasolda.com.br
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-500 text-sm">
                <Clock size={15} className="text-brand-red shrink-0" />
                <span>Seg–Sex: até 18h</span>
              </li>
            </ul>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 bg-brand-red hover:bg-red-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-all"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs text-center sm:text-left">
            © {year} Cia da Solda. Todos os direitos reservados.
          </p>
          <p className="text-gray-700 text-xs">
            Loja de solda em Contagem, Belo Horizonte e região – MG
          </p>
        </div>
      </div>
    </footer>
  );
}

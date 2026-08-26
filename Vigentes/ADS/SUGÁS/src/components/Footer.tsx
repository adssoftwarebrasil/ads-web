import { Phone, MapPin, Clock, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-blue text-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/sugas/img/logo-sem-fundo.webp"
              alt="SUGÁS Logo"
              className="h-16 w-auto object-contain mb-5"
            />
            <p className="text-brand-white/70 text-sm leading-relaxed mb-5">
              Desde 2013 levando gás de qualidade, confiança e agilidade para cada lar e comércio de Rondonópolis.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/sugasroo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-yellow hover:text-brand-blue flex items-center justify-center transition-all duration-200 text-brand-white"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/Sugasultragas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-yellow hover:text-brand-blue flex items-center justify-center transition-all duration-200 text-brand-white"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-brand-white text-base mb-5 relative after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-brand-yellow">
              Navegação
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'Produtos', href: '#produtos' },
                { label: 'Sobre Nós', href: '#sobre' },
                { label: 'Avaliações', href: '#avaliacoes' },
                { label: 'Contato', href: '#contato' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-brand-white/70 hover:text-brand-yellow text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-white text-base mb-5 relative after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-brand-yellow">
              Produtos
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                'Gás de Cozinha P13',
                'Gás de Cozinha P5',
                'Garrafão de Água 20L',
                'Reguladores de Gás',
                "Bombas d'Água",
                'Carvão para Churrasco (vários tamanhos)',
                'Churrasqueiras (vários tamanhos)',
              ].map((item) => (
                <li key={item}>
                  <span className="text-brand-white/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-white text-base mb-5 relative after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-brand-yellow">
              Contato
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-yellow flex-shrink-0 mt-0.5" />
                <span className="text-brand-white/70 text-sm">
                  R. Barão do Rio Branco, 4092 - Monte Libano, Rondonópolis - MT
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-brand-yellow flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <a
                  href="https://wa.me/556696502020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-white/70 hover:text-brand-yellow text-sm transition-colors"
                >
                  (66) 9 9650-2020
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-brand-yellow flex-shrink-0" />
                <span className="text-brand-white/70 text-sm">Seg-Sáb: 6:45–19:30</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-yellow flex-shrink-0" />
                <a href="mailto:suzyaneluz@yahoo.com.br" className="text-brand-white/70 hover:text-brand-yellow text-sm transition-colors">
                  suzyaneluz@yahoo.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-brand-white/50 text-sm text-center">
            © {currentYear} SUGÁS — Revenda de Gás de Cozinha. Todos os direitos reservados.
          </p>
          <p className="text-brand-white/40 text-xs">
            Rondonópolis — Mato Grosso
          </p>
        </div>
      </div>
    </footer>
  );
}

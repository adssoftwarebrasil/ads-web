import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

const navLinks = ['Início', 'Produtos', 'Sobre Nós', 'Galeria', 'Contato'];
const navTargets = ['hero', 'produtos', 'sobre', 'galeria', 'contato'];
const productLinks = [
  'Portas WPC Premium',
  'Portas PVC Premium',
  'Linha Moderna Interior',
  'Portas Impermeáveis',
  'Portas para Banheiro',
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="bg-[#003d32] text-[#ECC4A4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/turen%20portas/img/logo-sem-fundo.webp"
              alt="Turen Portas"
              className="h-14 w-auto mb-4"
            />
            <p className="text-[#ECC4A4]/70 text-sm leading-relaxed mb-5">
              Pioneiros em portas 100% WPC à prova d'água no Centro-Oeste. Qualidade, sofisticação e
              durabilidade para o seu projeto.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/turenportas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#ECC4A4]/10 hover:bg-[#DE8F52] flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram width={16} height={16} />
              </a>
              <a
                href="https://www.facebook.com/turenportas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#ECC4A4]/10 hover:bg-[#DE8F52] flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook width={16} height={16} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map((label, i) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(navTargets[i])}
                    className="text-[#ECC4A4]/70 hover:text-[#ECC4A4] text-sm transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Produtos</h4>
            <ul className="space-y-3">
              {productLinks.map((label) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo('produtos')}
                    className="text-[#ECC4A4]/70 hover:text-[#ECC4A4] text-sm transition-colors text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin width={15} height={15} className="text-[#DE8F52] mt-0.5 shrink-0" />
                <span className="text-[#ECC4A4]/70 text-sm leading-relaxed">
                  R. das Nogueiras, 1150 – Sala A, St. Comercial, Sinop – MT
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone width={15} height={15} className="text-[#DE8F52] shrink-0" />
                <a
                  href="tel:+556699118484"
                  className="text-[#ECC4A4]/70 hover:text-[#ECC4A4] text-sm transition-colors"
                >
                  (66) 9 9911-8484
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail width={15} height={15} className="text-[#DE8F52] shrink-0" />
                <a
                  href="mailto:thales.leitao@hotmail.com"
                  className="text-[#ECC4A4]/70 hover:text-[#ECC4A4] text-sm transition-colors"
                >
                  thales.leitao@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock width={15} height={15} className="text-[#DE8F52] mt-0.5 shrink-0" />
                <span className="text-[#ECC4A4]/70 text-sm leading-relaxed">
                  Seg–Sex: 07:30–11:30<br />
                  13:30–17:30
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#ECC4A4]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#ECC4A4]/50 text-xs text-center sm:text-left">
            © 2026 Turen Portas – Todos os direitos reservados.
          </p>
          <p className="text-[#ECC4A4]/40 text-xs">
            Sinop – MT | Portas de Alto Padrão WPC e PVC
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Instagram, Scale, Phone, Mail, MapPin, Clock } from 'lucide-react';

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const navItems: { label: string; id: string }[] = [
  { label: 'Início', id: 'hero' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Áreas de Atuação', id: 'servicos' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const areas = [
  'Direito Ambiental',
  'Direito Tributário',
  'Direito Empresarial',
  'Regularização Ambiental',
  'Consultoria Preventiva',
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(8,16,20)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://storage.lucasmendes.dev/site-sp/mp%20advocacia/img/logo-sem-texto.webp"
                alt="MP Advocacia Logo"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold text-[rgb(249,253,249)]">MP Assessoria</h3>
                <p className="text-[rgb(153,138,71)] text-sm">Jurídica Especializada</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed">
              Escritório de advocacia especializado em Direito Ambiental, Tributário e Empresarial,
              oferecendo soluções jurídicas estratégicas desde 2023.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/mpadvocaciaeconsultoria/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[rgb(153,138,71)] transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="lucide lucide-instagram w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-[rgb(249,253,249)] mb-4">Navegação</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-white/70 hover:text-[rgb(153,138,71)] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-[rgb(249,253,249)] mb-4">Áreas de Atuação</h4>
            <ul className="space-y-3 text-white/70">
              {areas.map((area) => (
                <li key={area} className="flex items-start space-x-2">
                  <Scale className="lucide lucide-scale w-4 h-4 text-[rgb(153,138,71)] mt-1 flex-shrink-0" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-[rgb(249,253,249)] mb-4">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="http://wa.me/556281931078"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-white/70 hover:text-[rgb(153,138,71)] transition-colors group"
                >
                  <Phone className="lucide lucide-phone w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>(62) 98193-1078</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:advocaciamarcospurificacao@gmail.com"
                  className="flex items-start space-x-3 text-white/70 hover:text-[rgb(153,138,71)] transition-colors group break-all"
                >
                  <Mail className="lucide lucide-mail w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">advocaciamarcospurificacao@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-white/70">
                <MapPin className="lucide lucide-map-pin w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  R. Rio Grande do Sul, Qd.17 - Lt.16<br />
                  Uruaçu - GO, 76400-000
                </span>
              </li>
              <li className="flex items-start space-x-3 text-white/70">
                <Clock className="lucide lucide-clock w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Seg - Sex<br />
                  08:00 - 12:00 | 14:00 - 17:00
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm text-center md:text-left">
              © 2026 MP Assessoria Jurídica Especializada. Todos os direitos reservados.
            </p>
            <p className="text-white/60 text-sm text-center md:text-right">
              OAB/GO - Uruaçu, Goiás
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

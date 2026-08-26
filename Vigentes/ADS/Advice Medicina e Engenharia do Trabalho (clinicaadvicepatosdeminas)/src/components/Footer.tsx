import { Instagram, MapPin, Phone, Clock } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Estrutura', id: 'estrutura' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const servicos = ['ASO', 'PGR', 'PCMSO', 'eSocial', 'Exame Toxicológico', 'Engenharia do Trabalho'];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/advice%2Fimg%2Flogo-sem-fundo.webp"
              alt="Advice"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Referência em Medicina e Engenharia do Trabalho há mais de 34 anos em Patos de Minas e região.
            </p>
            <a
              href="https://www.instagram.com/clinica.advice/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-brand-400 transition-colors text-sm"
            >
              <Instagram className="w-5 h-5" />
              @clinica.advice
            </a>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Navegação</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-neutral-400 hover:text-brand-400 transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              {servicos.map((s) => (
                <li key={s}>
                  <span className="text-neutral-400 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-400 text-sm">
                  R. Ana de Oliveira, 181 - Centro, Patos de Minas - MG
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-400 text-sm">(34) 3823-1771</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-400 text-sm">Seg a Sex, 06:00 - 17:30</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            © 2026 Advice Medicina e Engenharia do Trabalho. Todos os direitos reservados.
          </p>
          <a
            href="https://www.clinicaadvice.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-brand-400 transition-colors text-sm"
          >
            www.clinicaadvice.com.br
          </a>
        </div>
      </div>
    </footer>
  );
}

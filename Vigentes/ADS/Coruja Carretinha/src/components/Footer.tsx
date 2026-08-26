import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const servicos = [
  'Aluguel de Carretinha',
  'Venda de Carretinha',
  'Manutenção',
  'Peças e Acessórios',
  'Venda de Engate',
];

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(25,47,79)] text-[rgb(253,253,253)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/coruja%20carretinha%2Fimg%2Flogo-sem-fundo.webp"
              alt="Coruja Carretinha"
              className="h-16 w-auto mb-6"
            />
            <p className="text-[rgb(253,253,253)]/70 leading-relaxed">
              Especialistas em aluguel e venda de carretinhas desde 2021. Referência em Camaçari e região metropolitana de Salvador.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Serviços</h4>
            <ul className="space-y-3">
              {servicos.map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    className="text-[rgb(253,253,253)]/70 hover:text-[rgb(242,150,1)] transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[rgb(253,253,253)]/70 hover:text-[rgb(242,150,1)] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-[rgb(242,150,1)] flex-shrink-0 mt-1" />
                <span className="text-[rgb(253,253,253)]/70 text-sm">
                  Av. Dr. Manoel Mercês, 980<br />
                  Alto da Cruz, Camaçari - BA
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-[rgb(242,150,1)] flex-shrink-0" />
                <a
                  href="https://wa.me/5571986462034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgb(253,253,253)]/70 hover:text-[rgb(242,150,1)] transition-colors text-sm"
                >
                  (71) 98646-2034
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-[rgb(242,150,1)] flex-shrink-0" />
                <a
                  href="mailto:corujaalugueldecarretinha@gmail.com"
                  className="text-[rgb(253,253,253)]/70 hover:text-[rgb(242,150,1)] transition-colors text-sm break-all"
                >
                  corujaalugueldecarretinha@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-[rgb(242,150,1)] flex-shrink-0 mt-1" />
                <span className="text-[rgb(253,253,253)]/70 text-sm">
                  Seg-Sex: 08:00-17:30<br />
                  Sáb: 08:00-13:30
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[rgb(253,253,253)]/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[rgb(253,253,253)]/60 text-sm text-center md:text-left">
              © 2026 Coruja Aluguel de Carretinha. Todos os direitos reservados.
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/corujacarretinha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[rgb(253,253,253)]/10 rounded-full flex items-center justify-center hover:bg-[rgb(242,150,1)] transition-all duration-300 hover:scale-110 group"
              >
                <Instagram className="w-5 h-5 text-[rgb(253,253,253)] group-hover:text-[rgb(25,47,79)]" />
              </a>
              <a
                href="https://www.facebook.com/curujacarretinhas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[rgb(253,253,253)]/10 rounded-full flex items-center justify-center hover:bg-[rgb(242,150,1)] transition-all duration-300 hover:scale-110 group"
              >
                <Facebook className="w-5 h-5 text-[rgb(253,253,253)] group-hover:text-[rgb(25,47,79)]" />
              </a>
              <a
                href="https://wa.me/5571986462034"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[rgb(253,253,253)]/10 rounded-full flex items-center justify-center hover:bg-[rgb(242,150,1)] transition-all duration-300 hover:scale-110 group"
              >
                <Phone className="w-5 h-5 text-[rgb(253,253,253)] group-hover:text-[rgb(25,47,79)]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

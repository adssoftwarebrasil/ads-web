import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const WHATSAPP_URL = 'http://wa.me/5548988277661';

const navItems: { label: string; target: string }[] = [
  { label: 'Início', target: 'inicio' },
  { label: 'Sobre', target: 'sobre' },
  { label: 'Produtos', target: 'catalogo' },
  { label: 'Depoimentos', target: 'depoimentos' },
  { label: 'Contato', target: 'contato' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[rgb(102,78,56)] to-[rgb(111,86,60)] text-[rgb(254,254,252)]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/moonlight%20pijamas%2Fimg%2Flogo-sem-fundo.webp"
              alt="Moonlight Pijamas"
              className="h-20 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-[rgb(254,254,252)]/80 leading-relaxed">
              Conforto e elegância para noites perfeitas. Há mais de 5 anos realizando sonhos em Florianópolis.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Navegação</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.target}>
                  <button
                    onClick={() => scrollTo(item.target)}
                    className="text-[rgb(254,254,252)]/80 hover:text-[rgb(254,254,252)] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin width={20} height={20} className="flex-shrink-0 mt-1" />
                <span className="text-[rgb(254,254,252)]/80">
                  R. Vidal Ramos, 201 - Centro<br />Florianópolis - SC
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone width={20} height={20} className="flex-shrink-0" />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgb(254,254,252)]/80 hover:text-[rgb(254,254,252)] transition-colors"
                >
                  (48) 98827-7661
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail width={20} height={20} className="flex-shrink-0" />
                <a
                  href="mailto:moonpijamass@gmail.com"
                  className="text-[rgb(254,254,252)]/80 hover:text-[rgb(254,254,252)] transition-colors"
                >
                  moonpijamass@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Horário</h4>
            <ul className="space-y-3 text-[rgb(254,254,252)]/80">
              <li>Segunda a Sexta</li>
              <li className="font-semibold text-[rgb(254,254,252)]">9h às 18h30</li>
              <li className="mt-4">Sábado</li>
              <li className="font-semibold text-[rgb(254,254,252)]">9h às 13h</li>
            </ul>
            <div className="mt-8">
              <h4 className="text-lg font-bold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/moonlightpijamass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[rgb(254,254,252)]/10 rounded-full flex items-center justify-center hover:bg-[rgb(254,254,252)]/20 transition-all hover:scale-110 transform"
                >
                  <Instagram width={20} height={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[rgb(254,254,252)]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[rgb(254,254,252)]/70">
            <p>© 2026 Moonlight Pijamas. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Instagram, MapPin, Phone, Clock } from 'lucide-react';

const navItems = [
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Localização', id: 'localizacao' },
];

const produtos = ['Peças Automotivas', 'Baterias', 'Pneus', 'Óleos Lubrificantes', 'Acessórios'];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/mt%20autopecas/img/logo-sem-fundo.webp"
                alt="MT Auto Peças"
                className="h-16 w-auto mb-4"
              />
              <p className="text-gray-400 leading-relaxed mb-4">
                Mais de 19 anos oferecendo as melhores soluções automotivas para toda a região metropolitana de Belém.
              </p>
              <a
                href="https://www.instagram.com/grupomtautopecas/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[rgb(4,152,134)] hover:text-[rgb(3,122,107)] transition-colors"
              >
                <Instagram size={20} />
                @grupomtautopecas
              </a>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Navegação</h3>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollTo(item.id)}
                      className="text-gray-400 hover:text-[rgb(4,152,134)] transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Produtos</h3>
              <ul className="space-y-3 text-gray-400">
                {produtos.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contato</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-[rgb(4,152,134)] flex-shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm">
                    ROD BR-316, N° 408
                    <br />
                    Centro, Marituba - PA
                    <br />
                    CEP: 67201-045
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-[rgb(4,152,134)] flex-shrink-0" />
                  <a
                    href="https://wa.me/559191706760"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[rgb(4,152,134)] transition-colors text-sm"
                  >
                    (91) 91706-760
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={20} className="text-[rgb(4,152,134)] flex-shrink-0 mt-1" />
                  <div className="flex flex-col text-gray-400 text-sm">
                    <span>Seg. a sex.: 07:30 - 18:00</span>
                    <span>Sáb.: 07:30 - 12:00</span>
                    <span className="text-gray-500 italic">Dom.: Fechado</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2026 MT Auto Peças. Todos os direitos reservados.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <span>19 Anos de Experiência</span>
                <span>•</span>
                <span>Avaliação 4.5 ⭐</span>
                <span>•</span>
                <span>Atendimento Premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Phone, MapPin } from 'lucide-react';

const links = [
  { label: 'Produtos', id: 'produtos' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-[rgb(40,60,100)] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/embreagens%2Flogo.png"
              alt="União Embreagens Logo"
              className="h-16 w-auto mb-4"
            />
            <p className="opacity-90 leading-relaxed">
              Embreagens remanufaturadas com qualidade desde 2003. Atendendo Ribeirão Preto e região
              num raio de até 300km.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="opacity-90 hover:text-[rgb(240,178,121)] transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="flex-shrink-0 mt-1" size={20} />
                <a
                  href="tel:+551636265853"
                  className="opacity-90 hover:text-[rgb(240,178,121)] transition-colors"
                >
                  (16) 3626-5853
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="flex-shrink-0 mt-1" size={20} />
                <span className="opacity-90">
                  Avenida Brasil, 2.936 – Vila Elisa
                  <br />
                  Ribeirão Preto - SP
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white border-opacity-20 pt-8 text-center">
          <p className="opacity-90">© 2025 União Embreagens. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

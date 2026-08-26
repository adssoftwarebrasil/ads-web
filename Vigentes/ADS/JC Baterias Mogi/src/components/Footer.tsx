import { MapPin, Phone, Instagram, MessageCircle } from 'lucide-react';

const links = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <img
              src="https://storage.lucasmendes.dev/site-sp/JC%20BATERIAS%20MOGI%2Fimg%2Flogo.webp"
              alt="JC Baterias Mogi"
              className="h-16 w-auto object-contain"
            />
            <p className="text-white/70 leading-relaxed">
              Baterias automotivas de qualidade em Mogi das Cruzes desde 2011. Atendimento
              profissional e produtos das melhores marcas.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary-yellow mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-white/70 hover:text-primary-yellow hover:underline transition-all duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary-yellow mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/70">
                <MapPin
                  size={18}
                  className="lucide lucide-map-pin flex-shrink-0 mt-1"
                />
                <span>Mogi das Cruzes - SP</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone
                  size={18}
                  className="lucide lucide-phone flex-shrink-0 mt-1"
                />
                <div className="text-white/70">
                  <a href="tel:1125989022" className="hover:text-primary-yellow transition-colors block">
                    (11) 2598-9022
                  </a>
                  <a href="tel:1125989042" className="hover:text-primary-yellow transition-colors block">
                    (11) 2598-9042
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary-yellow mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/bateriasmogi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-yellow hover:scale-110 transition-all duration-200 group"
                aria-label="Instagram"
              >
                <Instagram
                  size={24}
                  className="lucide lucide-instagram text-white group-hover:text-primary-purple"
                />
              </a>
              <a
                href="https://wa.me/5511958136971"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-yellow hover:scale-110 transition-all duration-200 group"
                aria-label="WhatsApp"
              >
                <MessageCircle
                  size={24}
                  className="lucide lucide-message-circle text-white group-hover:text-primary-purple"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
            <p>© 2026 JC Baterias Mogi. Todos os direitos reservados.</p>
            <p>Desenvolvido com dedicação</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

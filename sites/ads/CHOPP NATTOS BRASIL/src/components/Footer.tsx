import { scrollToId } from '../lib/site';

const quickLinks = [
  { label: 'Início', id: 'hero' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(40,44,115)] text-white py-12 md:py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/CHOPP%20NATTOS%20BRASIL%2Fimg%2Flogo%201.png"
              alt="Chopp Nattos Brasil"
              className="h-16 mb-6"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              Qualidade premium e atendimento excepcional desde 2018
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[rgb(176,146,71)] mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToId(link.id)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[rgb(176,146,71)] mb-4">Contato</h3>
            <ul className="space-y-3 text-white/80 text-sm">
              <li>(62) 99224-2454</li>
              <li>(62) 98504-9183</li>
              <li>choppnattosbrasil@gmail.com</li>
              <li>Segunda a Domingo</li>
              <li>08:00 às 22:00</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70 text-sm">© 2025 Chopp Nattos Brasil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

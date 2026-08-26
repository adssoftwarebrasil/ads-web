import { Phone, Mail, MapPin, MessageCircle, Instagram } from 'lucide-react';

const menu = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const servicos = [
  'Compra e Venda de Eletrônicos para Reuso',
  'Loja de salvados',
  'Destinação Certificada',
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[rgb(53,64,66)] text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/reciclatechbrasil%2Flogo.jpg"
              alt="Reciclatech Logo"
              className="h-12 w-auto mb-4"
              loading="lazy"
            />
            <p className="text-sm text-white text-opacity-80 leading-relaxed max-w-xs">
              A Reciclatech Reciclagem de Eletroeletrônicos foi fundada em 2011 e atua em Curitiba e
              Região Metropolitana. Nossa missão é promover a sustentabilidade através da gestão
              adequada de resíduos Eletroeletrônicos.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              {menu.map((m) => (
                <li key={m.id}>
                  <button
                    onClick={() => scrollTo(m.id)}
                    className="text-white text-opacity-70 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm block"
                  >
                    {m.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {servicos.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('servicos')}
                    className="text-white text-opacity-70 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm block"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm text-white text-opacity-70">
                <Phone className="lucide lucide-phone w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+5541999600458" className="hover:text-white transition-colors">
                  (41) 99960-0458
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white text-opacity-70">
                <Mail className="lucide lucide-mail w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:atendimento@reciclatech.com.br"
                  className="hover:text-white transition-colors break-all"
                >
                  atendimento@reciclatech.com.br
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white text-opacity-70">
                <MapPin className="lucide lucide-map-pin w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Avenida Marginal José de Anchieta, 740
                  <br />
                  PR 83.408-010, Brasil
                </span>
              </li>
            </ul>
            <a
              href="https://wa.me/5541999600458"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[rgb(26,157,39)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(18,132,27)] hover:scale-105 transition-all duration-300 text-sm"
            >
              <MessageCircle className="lucide lucide-message-circle w-4 h-4 mr-2" />
              WhatsApp
            </a>
            <div className="mt-6">
              <a
                href="https://www.instagram.com/reciclatech/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-[rgb(26,157,39)] transition-colors duration-300"
              >
                <Instagram className="lucide lucide-instagram w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white border-opacity-10 pt-6 text-center">
          <p className="text-sm text-white text-opacity-60">
            © 2025 Reciclatech – Desenvolvido por Parceiro Google
          </p>
        </div>
      </div>
    </footer>
  );
}

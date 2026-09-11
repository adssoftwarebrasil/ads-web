import { Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react';
import { WHATSAPP_URL, PHONE_TEL, LOGO_URL } from '../constants';

const MAPS_DIR_URL =
  'https://www.google.com/maps/dir//Centro+Automotivo+Bosco,+Av.+Ministro+Jos%C3%A9+Am%C3%A9rico,+815+-+Parque+Iracema,+Fortaleza+-+CE,+60824-245/@-3.8094059,-38.4945558,17z';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

const servicos = [
  'Troca de Óleo',
  'Injeção Eletrônica',
  'Revisão Completa',
  'Ar Condicionado',
  'Sistema de Freios',
  'Sistema Elétrico',
  'Retífica de Motor',
  'Caminhões e Ônibus',
];

function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[rgb(10,33,75)] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src={LOGO_URL}
              alt="Centro Automotivo Bosco"
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 leading-relaxed mb-4">
              Mais de 20 anos de experiência em manutenção automotiva em Fortaleza. Qualidade,
              confiança e profissionalismo.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/centroautomotivoboscoce/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[rgb(204,53,49)] rounded-lg flex items-center justify-center hover:bg-[rgb(184,43,39)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/CentroAutomotivoBoscoCe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[rgb(204,53,49)] rounded-lg flex items-center justify-center hover:bg-[rgb(184,43,39)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-gray-300 hover:text-[rgb(204,53,49)] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              {servicos.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={MAPS_DIR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-gray-300 hover:text-[rgb(204,53,49)] transition-colors group"
                >
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span className="leading-relaxed">
                    Av. Ministro José Américo, 815
                    <br />
                    Parque Iracema, Fortaleza - CE
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center space-x-3 text-gray-300 hover:text-[rgb(204,53,49)] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>(85) 3472-4371</span>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-[rgb(204,53,49)] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>(85) 98893-9362</span>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <Clock className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <div>Seg - Sex: 08:00 - 18:00</div>
                  <div>Sábado e Domingo: Fechado</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Centro Automotivo Bosco. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="https://www.instagram.com/centroautomotivoboscoce/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[rgb(204,53,49)] transition-colors text-sm"
              >
                @centroautomotivoboscoce
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

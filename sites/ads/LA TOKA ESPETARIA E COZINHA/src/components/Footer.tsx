import { MapPin, Phone, Mail, Instagram as InstagramIcon, Clock, UtensilsCrossed, Navigation } from 'lucide-react';
import { scrollToId } from '../lib/scroll';
import { unidades } from '../lib/unidades';
import { useIfoodPicker } from '../lib/ifood';

const WHATSAPP = 'https://wa.me/556233001050';

export default function Footer() {
  const abrirIfood = useIfoodPicker();

  return (
    <footer className="bg-[#1A1A1A] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-8">
          <div>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=La%20Toka%20Espetaria%2Flogo.png&version_id=null"
              alt="La Toka Espetaria"
              className="h-20 w-auto mb-4"
              loading="lazy"
            />
            <p className="text-gray-400 text-sm">
              Espetinhos, jantinhas e cerveja gelada no coração de Goiânia desde 2024. Duas unidades para te atender.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#F93131]">Menu Rápido</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToId('sobre')}
                  className="text-gray-400 hover:text-[#FFD700] transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToId('cardapio')}
                  className="text-gray-400 hover:text-[#FFD700] transition-colors"
                >
                  Cardápio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToId('localizacao')}
                  className="text-gray-400 hover:text-[#FFD700] transition-colors"
                >
                  Nossas Unidades
                </button>
              </li>
              <li>
                <button
                  onClick={abrirIfood}
                  className="text-gray-400 hover:text-[#FFD700] transition-colors flex items-center gap-2"
                >
                  <UtensilsCrossed className="lucide lucide-utensils-crossed w-4 h-4 text-[#FFD700]" />
                  Peça pelo iFood
                </button>
              </li>
              <li>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#FFD700] transition-colors"
                >
                  Dúvidas (WhatsApp)
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#F93131]">Nossas Unidades</h3>
            <ul className="space-y-5 text-sm">
              {unidades.map((unidade) => (
                <li key={unidade.id}>
                  <p className="font-semibold text-white mb-1">{unidade.nome}</p>
                  <div className="flex items-start gap-2 text-gray-400">
                    <MapPin className="lucide lucide-map-pin w-4 h-4 flex-shrink-0 mt-1 text-[#FFD700]" />
                    <span>
                      {unidade.enderecoCurto.map((linha) => (
                        <span key={linha} className="block">
                          {linha}
                        </span>
                      ))}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 ml-6">
                    <a
                      href={unidade.mapsDir}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gray-400 hover:text-[#FFD700] transition-colors"
                    >
                      <Navigation className="lucide lucide-navigation w-3 h-3" />
                      Como chegar
                    </a>
                    <a
                      href={unidade.ifood}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gray-400 hover:text-[#FFD700] transition-colors"
                    >
                      <UtensilsCrossed className="lucide lucide-utensils-crossed w-3 h-3" />
                      iFood
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#F93131]">Contato</h3>
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="lucide lucide-phone w-4 h-4 text-[#FFD700]" />
                <a href="tel:+556233001050" className="hover:text-[#FFD700] transition-colors">
                  (62) 3300-1050
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="lucide lucide-mail w-4 h-4 text-[#FFD700]" />
                <a href="mailto:speedacailoja@gmail.com" className="hover:text-[#FFD700] transition-colors break-all">
                  speedacailoja@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <InstagramIcon className="lucide lucide-instagram w-4 h-4 text-[#FFD700]" />
                <a
                  href="https://www.instagram.com/latokabueno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFD700] transition-colors"
                >
                  @latokabueno
                </a>
              </li>
            </ul>
            <h3 className="font-bold text-lg mb-4 text-[#F93131]">Horários</h3>
            <div className="flex items-start gap-2 text-sm">
              <Clock className="lucide lucide-clock w-4 h-4 flex-shrink-0 mt-1 text-[#FFD700]" />
              <div className="text-gray-400">
                <p className="font-semibold text-white mb-1">Aberto Todos os Dias</p>
                <p>17:30 às 23:30</p>
                <p className="text-xs mt-1">Nas duas unidades</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2024 La Toka Espetaria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

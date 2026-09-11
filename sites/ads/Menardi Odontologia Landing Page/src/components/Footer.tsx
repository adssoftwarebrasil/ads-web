import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { scrollToSection } from '../lib/scroll';

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Servicos', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Emergencias', id: 'emergencias' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/agenciaeua/clinicamenardi%2Fmenardilogo%20%281%29.jpg"
              alt="Menardi Odontologia"
              className="h-16 w-auto mb-4 bg-white p-2 rounded-lg"
            />
            <p className="text-slate-300 text-base leading-relaxed">
              Cuidando do seu sorriso há mais de 30 anos com excelência e dedicação
            </p>
            <div className="mt-4 flex items-center gap-2 text-teal-400">
              <div className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-semibold">Atendimento 24h para Emergências</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-300 hover:text-teal-400 transition-colors text-base hover:translate-x-1 inline-block transform duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={20} className="lucide lucide-phone flex-shrink-0 mt-1 text-teal-400" />
                <div>
                  <a
                    href="tel:+5514996933360"
                    className="text-slate-300 hover:text-teal-400 transition-colors text-base block"
                  >
                    (14) 99693-3360
                  </a>
                  <span className="text-xs text-slate-400">WhatsApp e Telefone</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="lucide lucide-map-pin flex-shrink-0 mt-1 text-teal-400" />
                <div className="text-slate-300 text-base">
                  <p>Av. Domingos Carmelingo Caló, 2668</p>
                  <p>Vila São José</p>
                  <p>Ourinhos - SP, 19905-136</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="lucide lucide-clock flex-shrink-0 mt-1 text-teal-400" />
                <div className="text-slate-300 text-sm">
                  <p>Seg-Sex: 08:30 - 18:30</p>
                  <p>Sábado: 08:30 - 13:30</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Redes Sociais</h3>
            <p className="text-slate-300 text-base mb-4">
              Siga-nos nas redes sociais e fique por dentro das novidades
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/menardiodontologia/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-pink-500 to-purple-600 p-3 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
                aria-label="Instagram"
              >
                <Instagram size={24} className="lucide lucide-instagram " />
              </a>
              <a
                href="https://www.facebook.com/menardiodontologia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-blue-500 to-blue-700 p-3 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                aria-label="Facebook"
              >
                <Facebook size={24} className="lucide lucide-facebook " />
              </a>
              <a
                href="https://www.google.com/maps/place/Cl%C3%ADnica+Menardi+Odontologia+%7C+Dentista+%7C+Dr.+Luciano+Menardi/@-22.9988005,-49.8837423,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-red-500 to-red-700 p-3 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-red-500/50"
                aria-label="Google Maps"
              >
                <MapPin size={24} className="lucide lucide-map-pin " />
              </a>
              <a
                href="https://wa.me/5514996933360"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-green-500 to-green-700 p-3 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-green-500/50"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2025 Clínica Menardi Odontologia. Todos os direitos reservados.
            </p>
            <p className="text-slate-400 text-sm">Dr. Luciano Menardi - CRO-SP XXXXX</p>
          </div>
          <div className="text-center mt-4">
            <p className="text-slate-500 text-xs">Desenvolvido com ❤️ para cuidar do seu sorriso</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

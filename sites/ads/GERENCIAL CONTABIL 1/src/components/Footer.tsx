import { Facebook, Instagram, Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src="https://iili.io/KedTp7S.png"
              alt="Gerencial Contábil"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Desde 2000 oferecendo soluções contábeis personalizadas para pequenos negócios no Distrito Federal. 25 anos de experiência focada em você.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-[#C0A062] transition-colors" aria-label="Facebook">
                <Facebook className="lucide lucide-facebook" width={20} height={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C0A062] transition-colors" aria-label="Instagram">
                <Instagram className="lucide lucide-instagram" width={20} height={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <a href="tel:+5561983132002" className="flex items-start space-x-3 text-gray-400 hover:text-[#C0A062] transition-colors">
                <Phone className="lucide lucide-phone mt-1 flex-shrink-0" width={18} height={18} />
                <span className="text-sm">(61) 98313-2002</span>
              </a>
              <a href="mailto:adm@gerencialcontabildf.com.br" className="flex items-start space-x-3 text-gray-400 hover:text-[#C0A062] transition-colors break-all">
                <Mail className="lucide lucide-mail mt-1 flex-shrink-0" width={18} height={18} />
                <span className="text-sm">adm@gerencialcontabildf.com.br</span>
              </a>
              <a href="mailto:edsonfranca40@icloud.com" className="flex items-start space-x-3 text-gray-400 hover:text-[#C0A062] transition-colors break-all">
                <Mail className="lucide lucide-mail mt-1 flex-shrink-0" width={18} height={18} />
                <span className="text-sm">edsonfranca40@icloud.com</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-400">
                <Clock className="lucide lucide-clock mt-1 flex-shrink-0" width={18} height={18} />
                <span className="text-sm">Segunda a Sexta: 08:00 às 18:00</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Localização</h3>
            <div className="flex items-start space-x-3 text-gray-400">
              <MapPin className="lucide lucide-map-pin mt-1 flex-shrink-0" width={18} height={18} />
              <p className="text-sm leading-relaxed">
                St. A Norte CNA 2 Lote 11<br />
                Salas 205 à 208<br />
                Taguatinga, Brasília - DF<br />
                CEP: 72110-025
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2026 Gerencial Contábil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/mecanica%20277/img/logo-sem-fundo.png"
              alt="Mecânica 277"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 leading-relaxed">Excelência em mecânica automotiva com mais de 20 anos de tradição em Foz do Iguaçu.</p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <a href="http://wa.me/5545998527494" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#f0e92c] transition-colors duration-300">
                <Phone className="lucide lucide-phone" width={18} height={18} />
                (45) 99852-7494
              </a>
              <a href="mailto:mecanica_277@hotmail.com" className="flex items-center gap-2 hover:text-[#f0e92c] transition-colors duration-300 break-all">
                <Mail className="lucide lucide-mail" width={18} height={18} />
                mecanica_277@hotmail.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="lucide lucide-map-pin mt-1 flex-shrink-0" width={18} height={18} />
                <span>Av. Olímpio Rafagnin, 361<br />Parque Presidente II<br />Foz do Iguaçu - PR</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Horário</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Clock className="lucide lucide-clock mt-1 flex-shrink-0" width={18} height={18} />
                <div>
                  <p className="font-medium text-white">Segunda a Sexta</p>
                  <p className="text-gray-400">08:00 - 18:00</p>
                </div>
              </div>
              <div className="text-gray-400">
                <p className="font-medium text-white">Sábado e Domingo</p>
                <p>Fechado</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/mecanica277foz" target="_blank" rel="noopener noreferrer" className="bg-[#595959] p-3 rounded-lg hover:bg-[#f0e92c] hover:text-[#0a0a0a] transition-all duration-300 transform hover:scale-110">
                <Instagram className="lucide lucide-instagram" width={24} height={24} />
              </a>
              <a href="https://www.facebook.com/Jerry277/?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="bg-[#595959] p-3 rounded-lg hover:bg-[#f0e92c] hover:text-[#0a0a0a] transition-all duration-300 transform hover:scale-110">
                <Facebook className="lucide lucide-facebook" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#595959] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">© 2026 Mecânica 277. Todos os direitos reservados.</p>
            <p className="text-gray-400 text-sm text-center md:text-right">Desenvolvido com tecnologia de ponta</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

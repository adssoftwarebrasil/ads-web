import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[rgb(87,168,45)] to-[rgb(253,192,20)] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">ACS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">ACS Brasil</h3>
                <p className="text-sm text-gray-300">Consórcios</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Especialistas em consórcio de imóveis e automóveis. Quase 20 anos de experiência ajudando pessoas a realizarem seus sonhos.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/acsbrasilconsorcios/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[rgb(87,168,45)] rounded-full flex items-center justify-center hover:bg-[rgb(253,192,20)] transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/5571982041655"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[rgb(87,168,45)] rounded-full flex items-center justify-center hover:bg-[rgb(253,192,20)] transition"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Entre em Contato</h3>
            <div className="space-y-4">
              <a
                href="tel:+5571982041655"
                className="flex items-start hover:text-[rgb(253,192,20)] transition"
              >
                <Phone className="mr-3 mt-1 flex-shrink-0 text-[rgb(87,168,45)]" size={20} />
                <div>
                  <p>(71) 98204-1655</p>
                </div>
              </a>
              <a
                href="mailto:acesar@acsbrasilbahia.com.br"
                className="flex items-start hover:text-[rgb(253,192,20)] transition"
              >
                <Mail className="mr-3 mt-1 flex-shrink-0 text-[rgb(87,168,45)]" size={20} />
                <span className="break-all">acesar@acsbrasilbahia.com.br</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Localização</h3>
            <div className="flex items-start">
              <MapPin className="mr-3 mt-1 flex-shrink-0 text-[rgb(87,168,45)]" size={20} />
              <div>
                <p className="text-gray-300">Shopping Ponto Verde - Loja 17</p>
                <p className="text-gray-300">Av Santos Dumont, Est do Coco, 2774</p>
                <p className="text-gray-300">Centro, Lauro de Freitas - BA</p>
                <p className="text-gray-300">CEP: 42702-400</p>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-2 text-white">Horário de Funcionamento</h4>
              <p className="text-gray-300 text-sm">Segunda a Sexta: 08h às 17:40h</p>
              <p className="text-gray-300 text-sm">Sábado: Por agendamento</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {currentYear} ACS Brasil Consórcios. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[rgb(253,192,20)] transition">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-[rgb(253,192,20)] transition">
                Termos de Uso
              </a>
            </div>
          </div>
          <p className="text-gray-500 text-xs text-center mt-4">
            Área de Atendimento: Cidades e Bairros de todo Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}

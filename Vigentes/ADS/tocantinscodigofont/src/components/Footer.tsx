import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[rgb(45,62,84)] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/tamboraria%20tocatins%2Fimg%2Flogo-sem-fundo.png"
              alt="Tamboraria Tocantins"
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 leading-relaxed">
              Há 20 anos oferecendo soluções completas em produtos plásticos
              para o agronegócio regional.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-[rgb(78,128,196)] transition-colors duration-200"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-[rgb(78,128,196)] transition-colors duration-200"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-[rgb(78,128,196)] transition-colors duration-200"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-[rgb(78,128,196)] transition-colors duration-200"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Produtos</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Tambores e Bombonas</li>
              <li>Containers IBC 1000L</li>
              <li>Cochos para Gado</li>
              <li>Bebedouros</li>
              <li>Chapas de Polietileno</li>
              <li>Arame Farpado</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-[rgb(78,128,196)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Av. Transbrasiliana, S/N - Vila Milena, Paraíso do Tocantins - TO
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-[rgb(78,128,196)] flex-shrink-0" />
                <a
                  href="tel:6336023333"
                  className="text-gray-300 hover:text-[rgb(78,128,196)] transition-colors"
                >
                  (63) 3602-3333
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-[rgb(78,128,196)] flex-shrink-0" />
                <a
                  href="https://wa.me/556392280772"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[rgb(78,128,196)] transition-colors"
                >
                  (63) 99228-0772
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-[rgb(78,128,196)] flex-shrink-0" />
                <span className="text-gray-300">tamborariatocantins.com.br</span>
              </li>
            </ul>

            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com/tamborariatocantins/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[rgb(78,128,196)] p-2 rounded-lg transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/tamborariatocantins/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[rgb(78,128,196)] p-2 rounded-lg transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              {currentYear} Tamboraria Tocantins. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              Desenvolvido com tecnologia de ponta
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

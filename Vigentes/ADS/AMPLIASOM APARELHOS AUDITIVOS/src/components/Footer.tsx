import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=AMPLIASOM%2FLogomarcaCorreta.png&version_id=null"
                alt="AmpliaSom Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Especialistas em soluções auditivas para melhorar a qualidade de vida de nossos clientes.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-[#007E7A] hover:to-[#ED0180] flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-[#007E7A] hover:to-[#ED0180] flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-[#007E7A] hover:to-[#ED0180] flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <a href="#aluguel" className="text-gray-400 hover:text-[#007E7A] transition-colors">
                  Aluguel de Aparelhos Auditivos
                </a>
              </li>
              <li>
                <a href="#Cuidamos" className="text-gray-400 hover:text-[#007E7A] transition-colors">
                  Cuidamos do seu aparelho
                </a>
              </li>
              <li>
                <a href="#venda" className="text-gray-400 hover:text-[#007E7A] transition-colors">
                  Venda de Aparelhos Auditivos
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5561994174249?text=Olá! Gostaria de fazer um teste auditivo gratuito."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#007E7A] transition-colors"
                >
                  Teste Auditivo Gratuito
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Marcas</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-400">DANAVOX</span></li>
              <li><span className="text-gray-400">Rexton</span></li>
              <li><span className="text-gray-400">A&M</span></li>
              <li><span className="text-gray-400">Interton</span></li>
              <li><span className="text-gray-400">Sonic</span></li>
              <li><span className="text-gray-400">Oticon</span></li>
              <li><span className="text-gray-400">Argosy</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Fale conosco</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#007E7A] flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  Setor SHLN Bloco M, Loja 48, Edifício Med Center, Asa Norte, Brasília/DF - 70.770-577
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#007E7A] flex-shrink-0" />
                <a href="tel:+5561994174249" className="text-gray-400 hover:text-[#007E7A] transition-colors">
                  (61) 99417-4249
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#007E7A] flex-shrink-0" />
                <a href="mailto:contato.ampliasom@gmail.com" className="text-gray-400 hover:text-[#007E7A] transition-colors">
                  contato.ampliasom@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} AmpliaSom. Todos os direitos reservados.
            </p>
            <a
              href="https://wa.me/5561994174249"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-[#007E7A] hover:text-[#ED0180] transition-colors font-medium"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Fale pelo WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

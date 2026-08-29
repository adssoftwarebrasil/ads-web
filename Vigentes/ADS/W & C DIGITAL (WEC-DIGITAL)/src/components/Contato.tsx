import { Clock, MessageCircle, Mail, Instagram, MapPin } from 'lucide-react';

export default function Contato() {
  return (
    <section id="contato" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="opacity-0">
            <div className="flex items-start gap-3 mb-6">
              <Clock size={24} className="text-[rgb(237,27,38)] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Segunda a Sexta: 8h às 17h</li>
                  <li>Sábado: 8h às 16h</li>
                  <li>Domingo: Fechado</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="opacity-0">
            <h3 className="text-xl font-bold mb-4">Fale Conosco</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5584991775185"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-[rgb(237,27,38)] transition-colors"
                >
                  <MessageCircle size={20} />
                  (84) 99177-5185
                </a>
              </li>
              <li>
                <a
                  href="mailto:claudeilsonsm@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-[rgb(237,27,38)] transition-colors"
                >
                  <Mail size={20} />
                  claudeilsonsm@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/wecdigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-[rgb(237,27,38)] transition-colors"
                >
                  <Instagram size={20} />
                  @wecdigital
                </a>
              </li>
            </ul>
          </div>
          <div className="opacity-0">
            <div className="flex items-start gap-3">
              <MapPin size={24} className="text-[rgb(237,27,38)] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-4">Onde Estamos</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Rua Deputado Hesíquio Fernandes, 123</li>
                  <li>Centro - São Miguel/RN</li>
                  <li className="mt-3 text-white">Atendemos São Miguel e região</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

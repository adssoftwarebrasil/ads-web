import { Clock, MessageCircle, Mail, MapPin, Instagram } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Contato = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contato" className="py-20 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div
            className={`${
              isVisible ? 'animate-in fade-in duration-500' : 'opacity-0'
            }`}
          >
            <div className="flex items-start gap-3 mb-6">
              <Clock className="text-[rgb(237,27,38)] flex-shrink-0 mt-1" size={24} />
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

          <div
            className={`${
              isVisible ? 'animate-in fade-in duration-500 delay-200' : 'opacity-0'
            }`}
          >
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
                  href="mailto:wecdigital@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-[rgb(237,27,38)] transition-colors"
                >
                  <Mail size={20} />
                  wecdigital@gmail.com
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

          <div
            className={`${
              isVisible ? 'animate-in fade-in duration-500 delay-400' : 'opacity-0'
            }`}
          >
            <div className="flex items-start gap-3">
              <MapPin className="text-[rgb(237,27,38)] flex-shrink-0 mt-1" size={24} />
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

        <div
          className={`w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl ${
            isVisible ? 'animate-in fade-in duration-700 delay-500' : 'opacity-0'
          }`}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3836409821124!2d-38.49869!3d-6.213029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a4afcc3618b00f%3A0x20fa44d5e34599d5!2zVyZDIERpZ2l0YWwg4pyFIHwgTWFudXRlbsOnw7VlcywgU2VydmnDp29zIGRlIEluZm9ybcOhdGljYSwgQ29uZmVjw6fDo28gZGUgQ2FyaW1ib3MsIENlbHVsYXJlcywgTm90ZWJvb2ssIENvbXB1dGFkb3Jlcw!5e0!3m2!1spt-BR!2sbr!4v1773945343489!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização W&C Digital"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

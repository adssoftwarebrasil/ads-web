import { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Mail, Phone, Instagram, Facebook } from 'lucide-react';

export default function Location() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 text-white"
            style={{ backgroundColor: 'rgb(56,73,156)' }}
          >
            Localização
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-4" style={{ color: 'rgb(62,64,150)' }}>
            Venha Nos Visitar
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Estamos localizados no coração de Sinop - MT. Venha conhecer nossa estrutura e falar com nossa equipe.
          </p>
        </div>

        <div
          className={`flex flex-col lg:flex-row gap-8 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex-1 rounded-2xl overflow-hidden shadow-xl min-h-[350px] lg:min-h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.7739191785226!2d-55.510555624941944!3d-11.851092688370722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a7801de3957fff%3A0x281cdb216258959d!2sCIENTEC%20-%20Centro%20Integrado%20de%20Ensino%20T%C3%A9cnico!5e0!3m2!1spt-BR!2sbr!4v1773322442221!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '350px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Cientec Sinop"
            />
          </div>

          <div className="flex-shrink-0 w-full lg:w-80 flex flex-col gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgb(62,64,150)' }}
                >
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm mb-1">Endereço</div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    R. das Azaléias, 2095<br />
                    St. Comercial, Sinop - MT<br />
                    CEP: 78550-000
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgb(5,145,211)' }}
                >
                  <Clock size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm mb-1">Horários</div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    <span className="font-semibold text-gray-700">Presencial:</span><br />
                    13h às 22h (dias úteis)<br />
                    <span className="font-semibold text-gray-700 mt-1 block">WhatsApp:</span>
                    Atendimento integral
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgb(188,51,54)' }}
                >
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm mb-1">Contato</div>
                  <a
                    href="http://wa.me/556699893074"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold hover:underline block mb-1"
                    style={{ color: 'rgb(188,51,54)' }}
                  >
                    (66) 9 9989-3074
                  </a>
                  <a
                    href="mailto:cientec_sinop@hotmail.com"
                    className="text-sm text-gray-500 hover:text-gray-800 transition-colors flex items-center gap-1"
                  >
                    <Mail size={13} />
                    cientec_sinop@hotmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="font-bold text-gray-900 text-sm mb-3">Redes Sociais</div>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/cientecmt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
                >
                  <Instagram size={16} />
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:scale-105 bg-blue-600"
                >
                  <Facebook size={16} />
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

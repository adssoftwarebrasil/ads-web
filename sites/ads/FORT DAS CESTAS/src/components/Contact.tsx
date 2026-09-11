import { MapPin, Clock, Phone, Instagram, Facebook } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { WHATSAPP_NUMBER, INSTAGRAM_URL, FACEBOOK_URL, GOOGLE_REVIEW_URL, MAPS_URL, MAPS_EMBED_URL } from '../lib/constants';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-4">
              Contato
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Visite Nosso Showroom
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div className={`animate-on-scroll-left ${isVisible ? 'visible' : ''} space-y-3 sm:space-y-4`}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 bg-white p-4 sm:p-5 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" size={20} />
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-gray-900 mb-1">Endereco</div>
                <div className="text-gray-600 text-sm leading-relaxed">GO-040 - St. Garavelo, Aparecida de Goiania - GO, CEP: 74930-117</div>
              </div>
            </a>

            <div className="flex items-start gap-4 bg-white p-4 sm:p-5 rounded-xl border border-gray-100">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="text-primary" size={20} />
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-gray-900 mb-1">Horario de Atendimento</div>
                <div className="text-gray-600 text-sm">Seg-Sex: 08:00 - 18:00</div>
                <div className="text-gray-600 text-sm">Sab: 08:00 - 13:00</div>
              </div>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 bg-white p-4 sm:p-5 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary" size={20} />
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-gray-900 mb-1">Telefone / WhatsApp</div>
                <div className="text-primary text-lg font-bold">(62) 99999-8831</div>
              </div>
            </a>

            <div className="pt-2 sm:pt-4">
              <div className="font-semibold text-gray-900 mb-3 sm:mb-4">Redes Sociais</div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-4 sm:px-5 py-2.5 rounded-full hover:scale-105 transition-transform text-sm font-medium">
                  <Instagram size={18} />
                  Instagram
                </a>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#1877F2] text-white px-4 sm:px-5 py-2.5 rounded-full hover:scale-105 transition-transform text-sm font-medium">
                  <Facebook size={18} />
                  Facebook
                </a>
                <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 sm:px-5 py-2.5 rounded-full hover:scale-105 transition-transform text-sm font-medium">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
                  Google
                </a>
              </div>
            </div>
          </div>

          <div className={`animate-on-scroll-right ${isVisible ? 'visible' : ''} rounded-2xl overflow-hidden shadow-xl border-2 border-primary/20`} style={{ height: 'clamp(300px, 50vw, 450px)' }}>
            <iframe
              src={MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localizacao Fort das Cestas"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

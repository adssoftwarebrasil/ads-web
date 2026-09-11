import { Instagram, Facebook } from 'lucide-react';
import { useReveal } from '../lib/useReveal';
import WhatsAppIcon from './WhatsAppIcon';

export default function Social() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section className="py-16 bg-white">
      <div ref={ref} className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2
          className={`text-2xl md:text-3xl font-bold text-gray-900 mb-4 transition-all duration-700 ${
            shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Siga-nos nas Redes Sociais
        </h2>
        <p
          className={`text-base text-gray-600 mb-8 transition-all duration-700 delay-100 ${
            shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Acompanhe nossas novidades, promoções e dicas sobre manutenção automotiva.
        </p>
        <div
          className={`flex justify-center gap-4 transition-all duration-700 delay-200 ${
            shown ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <a
            href="https://www.instagram.com/lojaodoparabrisa.salvador/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram width={24} height={24} className="text-white" />
          </a>
          <a
            href="https://www.facebook.com/people/Loj%C3%A3o-do-Parabrisa/100063540761369/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook width={24} height={24} className="text-white" />
          </a>
          <a
            href="http://wa.me/557188114690"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}

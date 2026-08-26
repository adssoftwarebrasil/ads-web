import { Navigation } from 'lucide-react';
import { useReveal } from '../lib/useReveal';

export default function Location() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[rgb(1,160,199)] font-semibold text-sm tracking-widest uppercase mb-3">
            ONDE ESTAMOS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visite Nossa Loja em Salvador
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos localizados na Av. Barros Reis, 318 - Pau Miúdo, Salvador - BA. Fácil acesso e estacionamento disponível.
          </p>
        </div>
        <div
          className={`bg-white p-4 rounded-2xl shadow-xl border border-gray-200 transition-all duration-700 delay-200 ${
            shown ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.215344096745!2d-38.490155690218664!3d-12.96840693851987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161ad5da3b1e4b%3A0x281b1ddc8b685238!2sLoj%C3%A3o%20do%20Parabrisa!5e0!3m2!1spt-BR!2sbr!4v1765895224122!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            className="rounded-xl h-[450px] md:h-[550px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Lojão do Parabrisa"
            style={{ border: '0px' }}
          ></iframe>
        </div>
        <div
          className={`mt-8 flex justify-center transition-all duration-700 delay-400 ${
            shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href="https://www.google.com/maps/dir//Loj%C3%A3o+do+Parabrisa/@-12.9684069,-38.4901557,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x7161ad5da3b1e4b:0x281b1ddc8b685238!2m2!1d-38.4901557!2d-12.9684069"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[rgb(1,160,199)] hover:bg-[rgb(1,140,179)] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Navigation width={20} height={20} />
            Como Chegar
          </a>
        </div>
      </div>
    </section>
  );
}

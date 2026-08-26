import { Star, Quote } from 'lucide-react';
import { WhatsAppIcon, WHATSAPP_URL } from './icons';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/Anjos+Po%C3%A7os+Artesianos/@-11.858060488364229,-55.56736062494189,17z';

interface Testimonial {
  initial: string;
  name: string;
  meta: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    initial: 'L',
    name: 'Larissa Maldonado',
    meta: '3 avaliações • 1 foto',
    text: '"Serviço muito bom, super recomendo"',
  },
  {
    initial: 'N',
    name: 'Nilson Oliveira',
    meta: '4 avaliações',
    text: '"Anjos e anjos poços artesianos eu recomendo serviço de qualidade e garantia no que faz"',
  },
  {
    initial: 'D',
    name: 'Djonatas Michell Rempel',
    meta: '1 avaliação',
    text: '"Esse eu garanto"',
  },
];

export default function Reviews() {
  return (
    <section
      id="avaliacoes"
      className="py-20 bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O Que Dizem Nossos Clientes
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[0, 1, 2, 3].map((i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-yellow-400"
                />
              ))}
              <Star className="w-6 h-6 text-gray-300 fill-gray-300" />
            </div>
            <span className="text-2xl font-bold text-gray-900">4.4</span>
          </div>
          <p className="text-gray-600">Avaliação média no Google</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-100" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {t.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.meta}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Quer deixar sua avaliação ou saber mais sobre nossos serviços?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            >
              Avaliar no Google
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg border-2 border-blue-600 font-semibold"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

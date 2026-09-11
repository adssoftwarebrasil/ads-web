import { Quote, Star } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Testimonial {
  text: string;
  initials: string;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"A qualidade dos produtos da Casa do Serralheiro é excepcional! Sempre que preciso, é lá que vou."',
    initials: 'CS',
    name: 'Carlos Silva',
  },
  {
    text: '"Ótimo atendimento e produtos de primeira qualidade. Recomendo a todos!"',
    initials: 'AL',
    name: 'Ana Lima',
  },
  {
    text: '"As telhas Galvalume que comprei na Casa do Serralheiro são as melhores do mercado."',
    initials: 'FS',
    name: 'Fernando Santos',
  },
  {
    text: '"Estou muito satisfeita com o serviço prestado. A equipe é muito atenciosa e dedicada."',
    initials: 'JF',
    name: 'Juliana Ferreira',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Depoimentos</h2>
          <p className="text-lg text-gray-600">Nossos clientes</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <Quote className="w-10 h-10 text-[rgb(122,21,25)] mb-4" />
              <p className="text-gray-600 italic mb-6 leading-relaxed text-lg">{t.text}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[rgb(122,21,25)] rounded-full flex items-center justify-center text-white font-bold">
                    {t.initials}
                  </div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                </div>
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(122,21,25)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(90,15,18)] transition-all duration-300 font-bold"
          >
            Enviar WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

import { Target, Heart, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=5575999369036';

interface Reason {
  Icon: LucideIcon;
  title: string;
  text: string;
}

const reasons: Reason[] = [
  {
    Icon: Target,
    title: 'Experiência Reconhecida',
    text: 'Anos de atuação no mercado nos tornam especialistas.',
  },
  {
    Icon: Heart,
    title: 'Serviços Personalizados',
    text: 'Cada cliente recebe um atendimento único e direcionado.',
  },
  {
    Icon: TrendingUp,
    title: 'Garantia de Qualidade',
    text: 'Todos os nossos serviços possuem garantia e suporte completo.',
  },
];

export default function WhyHire() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/ssescapamentoeperformance%2FPor%20que%20contratar%3F.jpg"
              alt="Por que contratar SS Escapamentos"
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Por que <span className="text-[rgb(254,0,0)]">Contratar?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Confiança, qualidade e atendimento diferenciado que fazem a diferença.
            </p>
            <div className="space-y-6">
              {reasons.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-[rgb(254,0,0)] hover:text-white transition-all duration-300 group"
                >
                  <div className="bg-[rgb(254,0,0)] group-hover:bg-white p-4 rounded-xl transition-colors duration-300">
                    <Icon
                      size={28}
                      className="text-white group-hover:text-[rgb(254,0,0)] transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-[rgb(254,0,0)] hover:bg-[rgb(172,1,2)] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Solicite um Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

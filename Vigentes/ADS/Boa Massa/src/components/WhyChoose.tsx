import { Users, Award } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const reasons = [
  {
    Icon: Users,
    title: 'Mais de 1.067 Clientes Satisfeitos',
    description: 'Oferecemos somente o que há de melhor e mais confiável.',
  },
  {
    Icon: Award,
    title: 'Produtos Certificados e Testados',
    description: 'Oferecemos somente o que há de melhor e mais confiável.',
  },
];

export default function WhyChoose() {
  return (
    <div className="animate-on-scroll">
      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: 'rgb(250, 250, 250)' }}
      >
        <div className="max-w-[1000px] mx-auto px-5 lg:px-10">
          <div className="text-center mb-12 lg:mb-16">
            <span
              className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: 'rgb(255, 220, 2)', color: 'rgb(0, 0, 0)' }}
            >
              Por que contratar?
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: 'rgb(0, 0, 0)' }}
            >
              Por Que Escolher a Boa Massa?
            </h2>
            <p
              className="text-base lg:text-lg max-w-[800px] mx-auto"
              style={{ color: 'rgb(51, 51, 51)' }}
            >
              Conheça os motivos que fazem da Boa Massa a melhor escolha para sua
              obra.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {reasons.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-8 lg:p-10 text-center shadow-lg transition-all hover:shadow-xl"
              >
                <div className="flex justify-center mb-6">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgb(255, 220, 2)' }}
                  >
                    <Icon size={36} color="rgb(0, 0, 0)" strokeWidth={2.5} />
                  </div>
                </div>
                <h3
                  className="text-xl lg:text-2xl font-bold mb-4"
                  style={{ color: 'rgb(0, 0, 0)' }}
                >
                  {title}
                </h3>
                <p
                  className="text-base lg:text-lg leading-relaxed"
                  style={{ color: 'rgb(51, 51, 51)' }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 lg:mt-16">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
              style={{ backgroundColor: 'rgb(0, 0, 0)', color: 'rgb(255, 220, 2)' }}
            >
              Enviar WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

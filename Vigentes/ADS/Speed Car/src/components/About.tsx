import { Star, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';

const features = [
  'Equipe técnica treinada e experiente',
  'Equipamentos modernos e tecnologia de ponta',
  'Peças originais e com garantia',
  'Orçamento transparente, sem surpresas',
  'Atendimento personalizado e humanizado',
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-speedcar-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
                <img
                  src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Mecânico trabalhando em veículo"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-speedcar-red text-white rounded-xl p-5 shadow-xl shadow-red-900/30">
                <div className="flex items-center gap-2">
                  <Star className="lucide lucide-star w-6 h-6 fill-white" />
                  <span className="text-3xl font-extrabold">4.8</span>
                </div>
                <p className="text-white/80 text-xs font-medium mt-1">Avaliação Google</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[2px] w-8 bg-speedcar-red"></span>
                <span className="text-speedcar-red text-xs font-bold tracking-[0.2em] uppercase">
                  Quem somos
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-speedcar-black leading-tight mb-6">
                Excelência em Serviços Automotivos em Sinop
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A SpeedCar Centro Automotivo e referência em manutenção de veículos leves e camionetas
                na região de Sinop e cidades vizinhas. Nossa missão e cuidar do seu veículo com a
                dedicação e competência que ele merece.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Com uma equipe altamente qualificada e equipamentos de última geração, oferecemos desde
                manutenção preventiva até reparos complexos, sempre com transparência no orçamento e
                compromisso com a qualidade.
              </p>
              <div className="space-y-3 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="lucide lucide-check-circle2 w-5 h-5 text-speedcar-red flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <a
                href="http://wa.me/5566984369336"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-speedcar-red hover:bg-red-700 text-white px-7 py-3.5 rounded-lg text-sm font-bold tracking-wide uppercase transition-all hover:scale-105 hover:shadow-lg hover:shadow-red-900/30"
              >
                Fale Conosco
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

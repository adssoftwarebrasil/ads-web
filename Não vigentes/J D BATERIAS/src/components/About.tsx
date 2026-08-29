import { Check } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { WHATSAPP_URL } from '../constants';

const ITEMS = [
  'Baterias de Moto',
  'Baterias de Carro',
  'Baterias de Caminhão',
  'Baterias Estacionárias',
  'Baterias para Nobreak',
  'Baterias Náuticas',
];

export default function About() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section id="sobre" className="py-20 md:py-24 bg-white">
      <div ref={ref} className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <img
              src="https://storage.lucasmendes.dev/site-sp/jd-baterias%2Fimg%2FQuem%20somos.jpg"
              alt="Quem Somos"
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>
          <div
            className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <div className="text-sm font-semibold mb-3 tracking-widest uppercase" style={{ color: 'rgb(254, 186, 0)' }}>
              JD Baterias
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: 'rgb(4, 51, 140)' }}>
              Quem Somos
            </h2>
            <p className="text-[#555] text-lg leading-relaxed mb-8">
              Na JD Baterias, somos especializados em baterias automotivas com compromisso total com qualidade e
              satisfação. Localizados em Natal, oferecemos as melhores marcas do mercado como Moura, Heliar e Bosch. Nossa
              equipe treinada garante entrega em domicílio e instalação gratuita para a melhor experiência aos nossos
              clientes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {ITEMS.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgb(254, 186, 0)' }}
                  >
                    <Check size={16} style={{ color: 'rgb(4, 51, 140)' }} />
                  </div>
                  <span className="text-[#333] font-medium">{item}</span>
                </div>
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-xl font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: 'rgb(254, 186, 0)', color: 'rgb(4, 51, 140)' }}
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Phone } from 'lucide-react';
import { BLUE, BLUE_LIGHT, YELLOW, WA_SOLAR_MSG } from '../theme';
import { useInView } from '../useInView';

const projects = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/eletroluz%2Fimg%2FPainel_Casa.webp',
    title: 'Instalação Residencial',
    sub: 'Sistema fotovoltaico completo',
    delay: '600ms',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/eletroluz%2Fimg%2FPaineis_haras2.webp',
    title: 'Projeto Comercial',
    sub: 'Alta eficiência energética',
    delay: '750ms',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/eletroluz%2Fimg%2Fpos-vendas-2.webp',
    title: 'Suporte Técnico',
    sub: 'Manutenção especializada',
    delay: '900ms',
  },
];

export default function Projetos() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className={`text-sm font-black tracking-widest mb-4 transition-all duration-700 ${
              inView ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ color: BLUE_LIGHT, textTransform: 'uppercase' }}
          >
            NOSSOS PROJETOS
          </p>
          <h2
            className={`text-3xl lg:text-5xl font-black mb-4 transition-all duration-700 delay-200 ${
              inView ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ color: BLUE }}
          >
            Energia Solar em <span style={{ color: YELLOW }}>Ação</span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto transition-all duration-700 delay-400 font-medium ${
              inView ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ color: 'rgb(80, 80, 80)' }}
          >
            Confira alguns dos projetos que transformam energia solar em economia e sustentabilidade
            para nossos clientes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`group relative overflow-hidden rounded-3xl shadow-xl transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: p.delay, height: '450px' }}
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-500">
                <h3 className="text-2xl font-black mb-2">{p.title}</h3>
                <p className="text-white/80 font-medium">{p.sub}</p>
                <div className="w-12 h-1 bg-[rgb(254,201,1)] mt-4 transition-all duration-500 group-hover:w-full"></div>
              </div>
              <div
                className="absolute top-6 right-6 w-12 h-12 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-[-10px] group-hover:translate-y-0 shadow-2xl"
                style={{ backgroundColor: YELLOW }}
              >
                <ArrowRight width={24} height={24} strokeWidth={3} className="lucide lucide-arrow-right " style={{ color: BLUE }} />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-20">
          <div
            className={`inline-block transition-all duration-700 delay-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <a
              href={WA_SOLAR_MSG}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center space-x-4 px-12 py-6 rounded-2xl font-black text-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              style={{ backgroundColor: BLUE, color: 'white', boxShadow: 'rgba(0, 73, 176, 0.3) 0px 15px 40px' }}
            >
              <Phone width={24} height={24} className="lucide lucide-phone fill-white/20" />
              <span className="uppercase tracking-tight">Solicite Seu Projeto Agora</span>
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine-fast"></div>
            </a>
            <p className="mt-6 text-[rgb(0,73,176)] font-bold animate-bounce text-sm">
              Clique acima para garantir sua economia de até 95% ⚡
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

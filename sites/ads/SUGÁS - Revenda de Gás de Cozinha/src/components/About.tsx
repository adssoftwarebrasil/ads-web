import { CheckCircle2, Calendar, Star, Flame } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const stats = [
  { value: '2013', label: 'Fundada em', icon: <Calendar size={20} /> },
  { value: '10+', label: 'Anos de mercado', icon: <Star size={20} /> },
  { value: '4.5★', label: 'Avaliação Google', icon: <Star size={20} /> },
  { value: '100%', label: 'Clientes satisfeitos', icon: <Flame size={20} /> },
];

const points = [
  'Entrega rápida e pontual em toda Rondonópolis',
  'Atendimento residencial, comercial e empresarial',
  'Produtos com procedência e qualidade certificadas',
  'Peso certo garantido em todos os botijões',
  'Equipe treinada e comprometida com sua segurança',
  'Mais de uma década servindo a cidade com excelência',
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="sobre" className="py-20 bg-brand-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <span className="inline-block bg-brand-blue/10 text-brand-blue text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Nossa História
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-blue leading-tight mb-5">
              Mais de 10 anos{' '}
              <span className="text-brand-red">levando confiança</span>{' '}
              para Rondonópolis
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Desde 2013, a SUGÁS faz parte do cotidiano das famílias rondonopolitanas, levando muito mais do que gás:
              levamos <strong>confiança, agilidade e compromisso</strong> na porta de cada cliente.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Sabemos que o gás é indispensável na rotina. Por isso, construímos uma operação eficiente para garantir
              que você nunca fique sem gás quando mais precisa. Atendemos residências, comércios e empresas com o
              mesmo cuidado e responsabilidade do primeiro dia.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-red flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/556696502020?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20SUG%C3%81S."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 text-sm"
              >
                Falar Conosco
              </a>
              <a
                href="tel:+5566996502020"
                className="bg-brand-gray hover:bg-brand-gray/70 text-brand-blue font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 text-sm"
              >
                (66) 9 9650-2020
              </a>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/sugas/img/logo.webp"
                  alt="SUGÁS - Revenda de Gás"
                  className="w-full h-72 sm:h-96 object-contain bg-brand-blue p-8"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 right-6 grid grid-cols-2 gap-3">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3 border border-brand-gray/40"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue flex-shrink-0">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="font-black text-brand-blue text-lg leading-none">{stat.value}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { BLUE, BLUE_LIGHT } from '../theme';
import { useInView } from '../useInView';

const tags = [
  'Energia Solar',
  'Painel Solar',
  'Placa Solar',
  'Inversor Fotovoltaico',
  'Energia Fotovoltaica',
  'Material Elétrico',
  'Qualidade Garantida',
  'Instalação Solar',
];

export default function SearchTags() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="py-20 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl lg:text-4xl font-bold text-center mb-12 transition-all duration-600 ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ color: BLUE }}
        >
          O Que Você Procura?
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {tags.map((tag, i) => (
            <div
              key={tag}
              className={`px-6 py-3 rounded-full border-2 cursor-pointer transition-all duration-300 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                backgroundColor: 'rgb(245, 248, 252)',
                borderColor: BLUE_LIGHT,
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <span className="font-semibold">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

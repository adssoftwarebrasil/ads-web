import { Clock, Award, Leaf, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const base = 'https://storage.lucasmendes.dev/site-sp/dom-manoel-moveis-e-decoracoes/galeria';

const features = [
  {
    Icon: Clock,
    title: '10 Anos de experiência',
    text: 'Mais de uma década criando móveis que atravessam gerações.',
  },
  {
    Icon: Award,
    title: 'Melhor acabamento da região',
    text: 'Cada peça é trabalhada com atenção artesanal aos detalhes.',
  },
  {
    Icon: Leaf,
    title: 'Madeira maciça 100%',
    text: 'Matéria-prima nobre, resistente e sustentável, sem compensado.',
  },
  {
    Icon: MapPin,
    title: 'Atendemos Sinop e região',
    text: 'Entregamos para cidades e fazendas de toda a região.',
  },
];

export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="sobre" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <span className="h-px w-12 bg-[rgb(183,149,108)]"></span>
          <span className="text-[rgb(183,149,108)] text-sm font-semibold uppercase tracking-widest">
            Nossa história
          </span>
          <span className="h-px w-12 bg-[rgb(183,149,108)]"></span>
        </div>
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`relative transition-all duration-700 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={`${base}/fachada-loja-dom-manuel-moveis-madeira_382x510.webp`}
                  alt="Fachada Dom Manoel"
                  className="w-full h-56 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src={`${base}/armarios-madeira-expostos-em-frente-a-loja_382x510.webp`}
                  alt="Armários na loja"
                  className="w-full h-40 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src={`${base}/homem-em-frente-a-loja-dom-manoel_851x1280.webp`}
                  alt="Dom Manoel"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src={`${base}/fachada-loja-moveis-balanco-banco-madeira_382x510.webp`}
                  alt="Fachada loja"
                  className="w-full h-44 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[rgb(103,66,42)] text-cream rounded-2xl px-6 py-4 shadow-xl hidden sm:block">
              <div className="text-3xl font-bold font-serif">10+</div>
              <div className="text-xs text-[rgb(183,149,108)] uppercase tracking-wide font-semibold">
                Anos de tradição
              </div>
            </div>
          </div>
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h2 className="font-serif text-4xl lg:text-5xl text-[rgb(103,66,42)] font-bold mb-6 leading-tight">
              Móveis com alma,
              <br />
              <span className="text-[rgb(183,149,108)]">feitos para durar</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A Dom Manoel nasceu da paixão pela madeira e pelo trabalho bem feito. Há mais de 10
              anos em Sinop, nos tornamos referência em móveis de madeira maciça — peças robustas,
              elegantes e vitalícias que valorizam qualquer ambiente.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Trabalhamos com uma linha completa: mesas, roupeiros, móveis rústicos e muito mais.
              Cada produto é concebido para unir tradição, sofisticação e durabilidade real — sem
              compensado, sem atalhos.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map(({ Icon, title, text }) => (
                <div key={title} className="flex gap-4 items-start group">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[rgb(183,149,108)]/15 flex items-center justify-center group-hover:bg-[rgb(183,149,108)]/30 transition-colors">
                    <Icon size={20} className="text-[rgb(103,66,42)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[rgb(103,66,42)] text-sm mb-1">{title}</h4>
                    <p className="text-gray-500 text-sm leading-snug">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

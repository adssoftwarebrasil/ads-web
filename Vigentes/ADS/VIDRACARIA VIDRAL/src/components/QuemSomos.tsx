import { CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const highlights = [
  'Credibilidade e Transparência',
  'Inovação e Qualidade Premium',
  'Agilidade e Compromisso',
  'Responsabilidade Socioambiental',
];

export default function QuemSomos() {
  const img = useInView<HTMLDivElement>();
  const text = useInView<HTMLDivElement>();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="quem-somos" className="bg-white py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div ref={img.ref} className={img.inView ? 'animate-fade-in-right' : 'opacity-0'}>
            <img
              src="https://storage.lucasmendes.dev/site-sp/vidral%2Fquem%20somos.jpg"
              alt="Vidral Equipe"
              className="rounded-2xl shadow-xl w-full h-[300px] lg:h-[500px] object-cover"
            />
          </div>
          <div ref={text.ref} className={text.inView ? 'animate-fade-in-up' : 'opacity-0'}>
            <p className="text-[#29456D] text-sm font-semibold tracking-[2px] mb-4">SOBRE NÓS</p>
            <h2 className="text-[#29456D] text-3xl lg:text-[38px] font-bold leading-tight mb-6">
              Transformamos Projetos em Patrimônios Valorizados
            </h2>
            <div className="text-[#666666] text-base leading-relaxed mb-8 space-y-4">
              <p>
                Somos indústria e comércio especializado em esquadrias e vidros de alto padrão. Nossa
                missão é entregar soluções inteligentes de valorização patrimonial através de uma
                experiência de compra simples e segura.
              </p>
              <p>
                Com mais de 11 anos no mercado e 300 obras realizadas, nos consolidamos como referência
                em qualidade, inovação e compromisso com o cliente em Cuiabá, Várzea Grande e região.
              </p>
            </div>
            <div className="space-y-4 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#29456D] flex-shrink-0" strokeWidth={2} />
                  <span className="text-[#333333] text-[15px] font-medium">{item}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => scrollTo('produtos')}
              className="bg-[#29456D] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1f3657] transition-all hover:shadow-lg"
            >
              Conheça Nossas Soluções
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

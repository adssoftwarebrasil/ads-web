import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Fundada em 1998, com mais de 25 anos de tradição',
  'Amplo estoque com diversas marcas e modelos',
  'Atendimento especializado no balcão',
  'Produtos para pronta entrega',
  'Varejo e atacado – preço competitivo',
  'Peças para tratores e implementos agrícolas',
];

export default function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 yellow-gradient rounded-2xl opacity-20 z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0131AC] rounded-2xl opacity-10 z-0"></div>
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/dinapel/img/loja-de-pecas-automotivas-azul-e-amarela_670x388.webp"
                alt="Loja Dinapel Peças para Tratores"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 z-20 bg-[#FCE500] rounded-2xl p-4 shadow-xl">
              <div className="text-3xl font-black text-[#0131AC]">+25</div>
              <div className="text-xs font-semibold text-[#0131AC]/80 mt-0.5">
                Anos de
                <br />
                Experiência
              </div>
            </div>
          </div>
          <div>
            <span className="inline-block text-[#0131AC] font-semibold text-sm uppercase tracking-widest mb-3">
              Nossa História
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6 section-line leading-tight">
              Referência em Peças Agrícolas em Roraima
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A <strong className="text-[#0131AC]">Dinapel</strong> nasceu em 1998 com o propósito claro
              de suprir a demanda do agronegócio de Roraima por peças de qualidade para tratores e
              implementos agrícolas. Em mais de duas décadas no mercado, construímos nossa reputação
              atendendo produtores rurais, fazendeiros, mecânicos e revendedores com seriedade e
              agilidade.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Nossa loja física, localizada no bairro Liberdade em Boa Vista – RR, conta com um extenso
              estoque organizado, pronto para atender qualquer necessidade do seu maquinário – de mancais
              e rolamentos a filtros e componentes elétricos.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-gray-700 text-sm">
                  <CheckCircle2
                    size={17}
                    className="lucide lucide-check-circle2 text-[#0131AC] flex-shrink-0 mt-0.5"
                  />
                  {h}
                </li>
              ))}
            </ul>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 blue-gradient text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Fale com a gente
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

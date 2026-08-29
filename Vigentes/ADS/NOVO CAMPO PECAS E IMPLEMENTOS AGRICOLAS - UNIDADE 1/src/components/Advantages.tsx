import { ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/constants';

const advantages = [
  {
    number: '01',
    title: 'Qualidade Superior nos Produtos',
    text: 'Trabalhamos com peças de alta durabilidade',
    img: 'https://storage.lucasmendes.dev/site-sp/novocampo%2FQualidade%20Superior%20nos%20Produtos.jpg',
  },
  {
    number: '02',
    title: 'Suporte Técnico Especializado',
    text: 'Contamos com profissionais capacitados para ajudar você',
    img: 'https://storage.lucasmendes.dev/site-sp/novocampo%2FSuporte%20Te%CC%81cnico%20Especializado.jpg',
  },
  {
    number: '03',
    title: 'Facilidade de Acesso',
    text: 'Localização central para melhor atendimento',
    img: 'https://storage.lucasmendes.dev/site-sp/novocampo%2FFacilidade%20de%20Acesso.jpg',
  },
];

export default function Advantages() {
  return (
    <section id="vantagens" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A385C] mb-4">
            Vantagens em Escolher a NOVO CAMPO
          </h2>
          <p className="text-xl text-[#001F7A] font-semibold">
            Descubra os diversos benefícios ao nos escolher como seu fornecedor
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {advantages.map((a) => (
            <div
              key={a.number}
              className="relative h-[450px] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url("${a.img}")` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#001F7A]/60 to-[#001F7A]/95 group-hover:to-[#001F7A]"></div>
              <div className="relative h-full flex flex-col justify-between p-8">
                <div className="text-[#F8D617] text-7xl font-bold opacity-90">
                  {a.number}
                </div>
                <div>
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-3 leading-tight">
                    {a.title}
                  </h3>
                  <p className="text-white/90 text-base md:text-lg">{a.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#F8D617] text-[#1A385C] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e6c615] transition-all hover:shadow-lg"
          >
            CONHECER TODAS AS VANTAGENS
            <ArrowRight className="lucide lucide-arrow-right" width={20} height={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

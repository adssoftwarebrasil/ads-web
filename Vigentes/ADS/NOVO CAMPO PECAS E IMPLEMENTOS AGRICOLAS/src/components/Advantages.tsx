import { CheckCircle2 } from 'lucide-react';

const cards = [
  {
    num: '01',
    img: 'https://storage.lucasmendes.dev/site-sp/novocampo%2FQualidade%20Superior%20nos%20Produtos.jpg',
    title: 'Qualidade Superior nos Produtos',
    desc: 'Trabalhamos com peças de alta durabilidade',
  },
  {
    num: '02',
    img: 'https://storage.lucasmendes.dev/site-sp/novocampo%2FSuporte%20Te%CC%81cnico%20Especializado.jpg',
    title: 'Suporte Técnico Especializado',
    desc: 'Contamos com profissionais capacitados para ajudar você',
  },
  {
    num: '03',
    img: 'https://storage.lucasmendes.dev/site-sp/novocampo%2FFacilidade%20de%20Acesso.jpg',
    title: 'Facilidade de Acesso',
    desc: 'Localização central para melhor atendimento',
  },
];

const reasons = [
  {
    title: 'Expertise de Mercado',
    desc: 'Atuamos há anos no setor agrícola',
  },
  {
    title: 'Atendimento Personalizado',
    desc: 'Foco nas necessidades específicas de cada cliente',
  },
  {
    title: 'Inovação Constante',
    desc: 'Buscamos sempre as melhores soluções para nossos clientes',
  },
  {
    title: 'Compromisso Total',
    desc: 'Compromisso com prazos e qualidade',
  },
];

export default function Advantages() {
  return (
    <>
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
            {cards.map((c) => (
              <div
                key={c.num}
                className="relative h-[450px] rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url("${c.img}")` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#001F7A]/60 to-[#001F7A]/95 group-hover:to-[#001F7A]"></div>
                <div className="relative h-full flex flex-col justify-between p-8">
                  <div className="text-[#F8D617] text-7xl font-bold opacity-90">
                    {c.num}
                  </div>
                  <div>
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-3 leading-tight">
                      {c.title}
                    </h3>
                    <p className="text-white/90 text-base md:text-lg">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://storage.lucasmendes.dev/site-sp/novocampo%2FMotivos%20para%20Escolher%20NOVO%20CAMPO.jpg")',
                }}
              ></div>
              <div className="absolute inset-0 bg-[#1A385C]/30"></div>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-12 border-l-8 border-[#F8D617]">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A385C] mb-4">
                Por que Contratar?
              </h2>
              <p className="text-xl text-[#001F7A] font-semibold mb-3">
                Motivos para Escolher NOVO CAMPO
              </p>
              <p className="text-lg text-[#424242] mb-8">
                Entenda porque somos a melhor escolha para suas necessidades
                agrícolas
              </p>
              <div className="space-y-6">
                {reasons.map((r) => (
                  <div key={r.title} className="flex gap-4 items-start group">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CheckCircle2
                        width={24}
                        height={24}
                        className="lucide lucide-check-circle2 text-white"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#1A385C] mb-1">
                        {r.title}
                      </h4>
                      <p className="text-[#424242]">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

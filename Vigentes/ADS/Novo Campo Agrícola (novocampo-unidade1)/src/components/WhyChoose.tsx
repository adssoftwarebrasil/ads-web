import { CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    title: 'Expertise de Mercado',
    text: 'Atuamos há anos no setor agrícola',
  },
  {
    title: 'Atendimento Personalizado',
    text: 'Foco nas necessidades específicas de cada cliente',
  },
  {
    title: 'Inovação Constante',
    text: 'Buscamos sempre as melhores soluções para nossos clientes',
  },
  {
    title: 'Compromisso Total',
    text: 'Compromisso com prazos e qualidade',
  },
];

export default function WhyChoose() {
  return (
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
                    <CheckCircle2 className="lucide lucide-check-circle2 text-white" width={24} height={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#1A385C] mb-1">
                      {r.title}
                    </h4>
                    <p className="text-[#424242]">{r.text}</p>
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

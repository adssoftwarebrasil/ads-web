import { CheckCircle2, PhoneCall } from 'lucide-react';

const items = [
  'Verificacao completa do sistema',
  'Limpeza de filtros e componentes',
  'Analise de desempenho e eficiencia',
  'Recarga de gas refrigerante',
];

export default function Maintenance() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 scroll-reveal-left">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/climatec%2Far-condicionado-manutencao-texto.webp"
                alt="Manutencao de ar condicionado"
                className="w-full h-80 lg:h-[26rem] object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 scroll-reveal-right">
            <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
              Manutencao
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Manutencao Preventiva<br />
              <span className="text-primary">e Corretiva</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              A manutencao regular do seu ar condicionado e essencial para garantir eficiencia energetica, prolongar a vida util do equipamento e manter a qualidade do ar.
            </p>
            <ul className="mt-8 space-y-4">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contato"
              className="mt-10 inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:shadow-secondary/25"
            >
              <PhoneCall className="w-5 h-5" />
              Agendar Manutencao
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

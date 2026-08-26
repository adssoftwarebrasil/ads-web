interface Counter {
  value: string;
  title: string;
  subtitle: string;
}

const counters: Counter[] = [
  { value: '0+', title: 'Anos de Experiência', subtitle: 'No mercado regional' },
  { value: '0+', title: 'Projetos Realizados', subtitle: 'Com excelência' },
  { value: '0%', title: 'Satisfação Garantida', subtitle: 'Clientes satisfeitos' },
  { value: '0h', title: 'Resposta de Orçamento', subtitle: 'Atendimento rápido' },
];

export default function CounterStats() {
  return (
    <section className="py-20 bg-gradient-to-br from-[rgb(139,0,2)] to-[rgb(100,0,1)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 255, 255, 0.03) 10px, rgba(255, 255, 255, 0.03) 20px)',
          }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((counter, i) => (
            <div key={i} className="text-center transform hover:scale-105 transition-all">
              <div className="text-7xl font-bold text-white mb-3">
                <span style={{ fontFamily: 'Impact, sans-serif' }}>{counter.value}</span>
              </div>
              <div className="text-2xl text-white font-semibold mb-2">{counter.title}</div>
              <div className="text-white text-opacity-80 text-lg">{counter.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

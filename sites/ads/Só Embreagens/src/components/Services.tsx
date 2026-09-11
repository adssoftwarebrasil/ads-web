import { Wrench, RefreshCw, ShoppingBag, Truck, Tractor, Car } from 'lucide-react';

const SERVICES = [
  {
    icon: RefreshCw,
    title: 'Remanufatura de Embreagens',
    description:
      'Processo técnico especializado que restaura a embreagem ao padrão original de fábrica, com peças de qualidade e total confiabilidade.',
    highlight: true,
  },
  {
    icon: Wrench,
    title: 'Recuperação de Embreagens',
    description:
      'Diagnóstico preciso e recuperação completa do sistema de embreagem, eliminando falhas e prolongando a vida útil do componente.',
    highlight: false,
  },
  {
    icon: ShoppingBag,
    title: 'Venda de Embreagens Novas',
    description:
      'Comercializamos embreagens novas de procedência confiável, com garantia do fabricante, para veículos leves e pesados.',
    highlight: false,
  },
  {
    icon: Truck,
    title: 'Linha Pesada — Caminhões',
    description:
      'Especialistas em embreagens para caminhões de grande porte, com estoque de peças e agilidade no atendimento para evitar parada da frota.',
    highlight: false,
  },
  {
    icon: Tractor,
    title: 'Tratores e Maquinário',
    description:
      'Soluções em embreagens para tratores e máquinas agrícolas, fundamentais para quem não pode parar a produção no campo.',
    highlight: false,
  },
  {
    icon: Car,
    title: 'Veículos Leves',
    description:
      'Atendimento completo para carros de passeio: recuperação, remanufatura e venda de embreagens com garantia e preço justo.',
    highlight: false,
  },
];

export default function Services() {
  const handleWhatsApp = (service: string) => {
    const msg = encodeURIComponent(
      `Olá! Gostaria de mais informações sobre: ${service}`
    );
    window.open(`https://wa.me/5566996595500?text=${msg}`, '_blank');
  };

  return (
    <section
      id="servicos"
      className="py-20 md:py-28"
      style={{ background: 'rgb(18, 14, 17)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{
              background: 'rgba(234,34,37,0.12)',
              color: 'rgb(234, 34, 37)',
              border: '1px solid rgba(234,34,37,0.25)',
            }}
          >
            O Que Fazemos
          </div>
          <h2
            className="text-3xl sm:text-4xl font-black mb-4"
            style={{ color: '#fff' }}
          >
            Serviços Especializados em{' '}
            <span style={{ color: 'rgb(234, 34, 37)' }}>Embreagem</span>
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: 'rgb(153, 151, 150)' }}
          >
            Do veículo leve ao caminhão pesado, temos a solução ideal para o seu sistema de
            embreagem — com qualidade, garantia e custo-benefício.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon: Icon, title, description, highlight }) => (
            <div
              key={title}
              className="group relative rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              style={{
                background: highlight
                  ? 'linear-gradient(135deg, rgba(98,11,12,0.6), rgba(73,20,15,0.8))'
                  : 'rgba(255,255,255,0.03)',
                border: highlight
                  ? '1px solid rgba(234,34,37,0.5)'
                  : '1px solid rgba(255,255,255,0.07)',
                boxShadow: highlight ? '0 8px 32px rgba(234,34,37,0.15)' : 'none',
              }}
              onClick={() => handleWhatsApp(title)}
            >
              {highlight && (
                <span
                  className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full"
                  style={{
                    background: 'rgb(234, 34, 37)',
                    color: '#fff',
                  }}
                >
                  Principal
                </span>
              )}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: highlight
                    ? 'rgba(234,34,37,0.25)'
                    : 'rgba(234,34,37,0.1)',
                }}
              >
                <Icon size={22} style={{ color: 'rgb(234, 34, 37)' }} />
              </div>

              <div>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ color: '#fff' }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgb(153, 151, 150)' }}>
                  {description}
                </p>
              </div>

              <span
                className="text-xs font-semibold mt-auto flex items-center gap-1 transition-colors duration-200"
                style={{ color: 'rgb(205, 50, 21)' }}
              >
                Solicitar orçamento →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

const stats = [
  { value: '20+', label: 'Anos de Experiência' },
  { value: '5.0', label: 'Avaliação no Google' },
  { value: '100+', label: 'Marcas e Modelos' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/optica%20salute/img/hero-background.webp")',
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(0, 0, 0, 0.72) 0%, rgba(80, 4, 4, 0.45) 60%, rgba(0, 0, 0, 0.55) 100%)',
        }}
      ></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8"
          style={{
            backgroundColor: 'rgba(223, 209, 162, 0.15)',
            border: '1px solid rgba(223, 209, 162, 0.4)',
            color: 'rgb(223, 209, 162)',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: 'rgb(223, 209, 162)' }}
          ></span>
          Asa Sul, Brasília — Desde 2023
        </div>
        <h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6"
          style={{ color: 'rgb(240, 238, 239)' }}
        >
          Enxergue o Mundo{' '}
          <span className="block mt-1" style={{ color: 'rgb(223, 209, 162)' }}>
            com Estilo e Saúde
          </span>
        </h1>
        <p
          className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'rgba(240, 238, 239, 0.82)' }}
        >
          Na Óptica Salute, cada detalhe importa. Encontre a armação perfeita entre centenas de
          modelos das melhores marcas mundiais — com atendimento personalizado e suporte completo no
          pós-venda.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="http://wa.me/556135424555"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto justify-center"
            style={{ backgroundColor: 'rgb(223, 209, 162)', color: 'rgb(53, 59, 59)' }}
          >
            <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
            Falar no WhatsApp
          </a>
          <a
            href="#servicos"
            className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto justify-center"
            style={{ border: '1.5px solid rgba(223, 209, 162, 0.6)', color: 'rgb(223, 209, 162)' }}
          >
            Conheça Nossos Produtos
          </a>
        </div>
        <div
          className="flex items-center justify-center gap-8 mt-16 flex-wrap"
          style={{ color: 'rgba(240, 238, 239, 0.65)' }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl sm:text-3xl font-bold mb-1"
                style={{ color: 'rgb(223, 209, 162)' }}
              >
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 transition-opacity hover:opacity-80"
        style={{ color: 'rgba(223, 209, 162, 0.7)' }}
      >
        <span className="text-xs tracking-widest uppercase">Saiba Mais</span>
        <ChevronDown
          width={20}
          height={20}
          className="lucide lucide-chevron-down animate-bounce"
          strokeWidth={2}
        />
      </a>
    </section>
  );
}

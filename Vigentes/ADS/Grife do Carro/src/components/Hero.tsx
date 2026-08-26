import { IMG, WHATSAPP_URL } from '../data';

const STATS = [
  { value: '+10', label: 'ANOS DE MERCADO' },
  { value: '+83', label: 'VEÍCULOS VENDIDOS' },
  { value: '+208', label: 'CLIENTES FELIZES' },
  { value: '+41', label: 'FINANCIAMENTOS' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-ink pt-20">
      <div className="absolute inset-0">
        <img
          src={IMG.hero}
          alt="Veículo premium"
          className="h-full w-full object-cover object-right opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl py-20 lg:py-28">
          <p className="mb-5 inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-gold">
            Mais de 10 anos de tradição em Sinop
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-[1.05] text-white">
            Compra, venda e troca de{' '}
            <span className="text-gold">veículos premium</span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/70">
            Seminovos selecionados, inspecionados e com financiamento
            facilitado. Atendimento personalizado da Grife do Carro – referência
            em Sinop/MT.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="rounded-full bg-gold px-7 py-3.5 text-center text-sm font-bold tracking-wider text-black hover:bg-gold-light transition-colors"
            >
              FALAR NO WHATSAPP
            </a>
            <a
              href="#servicos"
              className="rounded-full border border-white/25 px-7 py-3.5 text-center text-sm font-bold tracking-wider text-white hover:border-gold hover:text-gold transition-colors"
            >
              CONHECER SERVIÇOS
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-ink/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="font-heading text-3xl sm:text-4xl font-extrabold text-gold">
                  {stat.value}
                </div>
                <div className="mt-1 text-[11px] font-semibold tracking-wider text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

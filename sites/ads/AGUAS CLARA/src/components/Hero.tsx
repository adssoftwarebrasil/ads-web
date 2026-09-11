import { CheckCircle2, ArrowRight } from 'lucide-react';

const stats = [
  { value: '20+', label: 'Anos de mercado' },
  { value: '150+', label: 'Projetos entregues' },
  { value: '300+', label: 'Clientes felizes' },
  { value: '40+', label: 'Cidades atendidas' },
];

const WHATSAPP_ORCAMENTO =
  'https://wa.me/5574981267777?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento.';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100vh] flex flex-col justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/aguasclaraspiscinas%2Fimg%2Fhero.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/10 z-10"></div>
      <div className="relative z-20 px-6 md:px-12 lg:px-24 w-full max-w-7xl mx-auto flex flex-col h-full justify-center pt-20 pb-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-6 backdrop-blur-md">
            <CheckCircle2 className="w-4 h-4" />
            <span>Excelência em Piscinas desde 2003</span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
            Seu paraíso particular <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              começa aqui.
            </span>
          </h1>
          <p className="text-base md:text-lg text-slate-300 mb-8 max-w-lg font-light leading-relaxed">
            Especialistas na construção de piscinas de alto padrão. Unimos design exclusivo e
            durabilidade para transformar o seu lazer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_ORCAMENTO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3.5 text-sm md:text-base font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-accent/25 hover:-translate-y-0.5"
            >
              Solicitar Orçamento
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#servicos"
              className="inline-flex justify-center items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3.5 text-sm md:text-base font-medium rounded-lg backdrop-blur-sm transition-all duration-300"
            >
              Ver Nossos Projetos
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full z-20 border-t border-white/10 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col md:flex-row items-baseline md:items-center gap-2"
              >
                <span className="text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-xs md:text-sm text-slate-300 uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Star, ArrowRight } from 'lucide-react';

const stats = [
  { value: '+3', label: 'Anos de Experiência' },
  { value: '100%', label: 'Satisfação' },
  { value: '+1000', label: 'Clientes Atendidos' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[rgb(25,47,79)] via-[rgb(25,47,79)]/95 to-[rgb(25,47,79)]/90"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/coruja%20carretinha%2Fimg%2Fjet-ski-carretinha.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(25,47,79)]/90 to-[rgb(25,47,79)]/70"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-[rgb(242,150,1)]/10 border border-[rgb(242,150,1)]/30 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-[rgb(242,150,1)] fill-[rgb(242,150,1)]" />
              <span className="text-[rgb(242,150,1)] font-semibold text-sm">
                Pioneiros em Camaçari desde 2021
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[rgb(253,253,253)] mb-6 leading-tight">
              Aluguel e Venda de <span className="text-[rgb(242,150,1)]">Carretinhas</span> de Qualidade
            </h1>
            <p className="text-xl text-[rgb(253,253,253)]/80 mb-8 leading-relaxed">
              Soluções completas em carretinhas, reboques, peças e acessórios. Atendemos Salvador e toda a região metropolitana com excelência e compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://wa.me/5571986462034?text=Olá!%20Gostaria%20de%20alugar%20uma%20carretinha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[rgb(242,150,1)] text-[rgb(25,47,79)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[rgb(242,150,1)]/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-[rgb(242,150,1)]/30"
              >
                Alugar Agora
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[rgb(253,253,253)] text-[rgb(253,253,253)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[rgb(253,253,253)]/10 transition-all duration-300"
              >
                Nossos Serviços
              </a>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[rgb(253,253,253)]/20">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-[rgb(242,150,1)] mb-1">{stat.value}</div>
                  <div className="text-sm text-[rgb(253,253,253)]/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <img
                src="https://storage.lucasmendes.dev/site-sp/coruja%20carretinha%2Fimg%2Fhomem-colocando-jetski-na-carretinha.webp"
                alt="Carretinha com Jet Ski"
                className="rounded-2xl shadow-2xl shadow-[rgb(242,150,1)]/20 w-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-[rgb(242,150,1)]/20 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[rgb(242,150,1)]/30 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[rgb(253,253,253)] to-transparent"></div>
    </section>
  );
}

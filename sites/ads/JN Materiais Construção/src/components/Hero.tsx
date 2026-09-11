import { Award, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

const stats = [
  { icon: Award, value: '15+', label: 'Anos de Experiência' },
  { icon: CheckCircle, value: '1000+', label: 'Produtos' },
  { icon: Clock, value: 'Entrega', label: 'Rápida e Segura' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-br from-[rgb(34,39,69)] via-[rgb(44,58,128)] to-[rgb(34,39,69)] text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("https://storage.lucasmendes.dev/site-sp/j%20n%20materiais%20de%20construcao/img/ferramentas-loja-parede.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
      </div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-[rgb(216,27,27)] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Desde 2009 no Mercado
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Materiais de Construção de
              <span className="text-[rgb(216,27,27)]"> Qualidade Superior</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Há mais de 15 anos oferecendo os melhores produtos em cerâmicas,
              acabamentos, louças, elétrica e hidráulica para transformar seus
              projetos em realidade.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <s.icon className="text-[rgb(216,27,27)]" width={24} height={24} />
                  <div>
                    <p className="font-bold text-lg">{s.value}</p>
                    <p className="text-sm text-gray-300">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contato')}
                className="bg-[rgb(216,27,27)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(196,17,17)] transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-[rgb(216,27,27)]/50 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Solicitar Orçamento
                <ArrowRight width={20} height={20} />
              </button>
              <a
                href="https://wa.me/5584994982060?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[rgb(34,39,69)] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(216,27,27)] to-transparent opacity-20 rounded-2xl transform rotate-3"></div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/j%20n%20materiais%20de%20construcao/img/ceramica-promocao-loja.webp"
                alt="Loja J N Materiais"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

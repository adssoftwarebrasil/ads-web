import { Award } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';

const stats = [
  { value: '1+', label: 'Ano' },
  { value: '50+', label: 'Clientes' },
  { value: '500+', label: 'Projetos' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, rgb(13, 27, 76) 0%, rgb(30, 58, 138) 50%, rgb(59, 130, 246) 100%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/jmpremoldados%2Fblocos-concreto-empilhados%201.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 animate-fadeInUp">
            <div
              className="inline-flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-5 py-2.5 animate-fadeInUp shadow-lg"
              style={{ animationDelay: '0.2s' }}
            >
              <Award size={20} className="text-[#A8AAAA]" />
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fadeInUp"
              style={{ animationDelay: '0.3s' }}
            >
              Artefatos de Concreto de Alta Qualidade
            </h1>
            <p
              className="text-lg md:text-xl text-gray-100 animate-fadeInUp"
              style={{ animationDelay: '0.4s' }}
            >
              Blocos, Tubos, Manilhas e muito mais para sua obra em Dourados/MS
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 pt-4 animate-fadeInUp"
              style={{ animationDelay: '0.5s' }}
            >
              <a
                href="https://wa.me/5567999737241"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 shadow-lg"
              >
                <WhatsappIcon size={24} />
                <span>Solicitar Orçamento</span>
              </a>
              <a
                href="#produtos"
                className="inline-flex items-center justify-center space-x-2 bg-transparent border-2 border-white hover:bg-white hover:text-[#0D1B4C] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                <span>Ver Produtos</span>
              </a>
            </div>
            <div
              className="grid grid-cols-3 gap-4 pt-8 animate-fadeInUp"
              style={{ animationDelay: '0.6s' }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#F5F5F5]">{stat.value}</div>
                  <div className="text-sm md:text-base text-gray-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center animate-fadeInRight">
            <div className="relative">
              <div className="absolute inset-0 bg-[#3b82f6] rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/jmpremoldados%2FJM-Pre-Moldados-Logo.webp"
                alt="JM Pré-moldados"
                className="relative w-full max-w-md h-auto object-contain drop-shadow-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

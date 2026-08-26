import { Award, Shield, Zap, Users, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../lib/whatsapp';

const stats = [
  { Icon: Award, value: '11+ Anos', label: 'de Experiência' },
  { Icon: Users, value: '5.000+', label: 'Clientes Atendidos' },
  { Icon: Zap, value: '1.000+', label: 'Instalações' },
  { Icon: Shield, value: '100%', label: 'Qualidade Garantida' },
];

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="relative bg-white py-20 md:py-32 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-50 rounded-full blur-3xl opacity-30 -z-0"></div>
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 rounded-full px-6 py-2 mb-6">
            <Award className="lucide lucide-award w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Sobre Nós
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4">
            Quem Somos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[rgb(250,204,21)] to-yellow-400 mx-auto mb-4"></div>
          <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[rgb(250,204,21)] to-yellow-600 text-transparent bg-clip-text">
            Center Baterias
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                A{' '}
                <span className="font-semibold text-blue-900">
                  Center Baterias
                </span>{' '}
                é uma empresa que atua no segmento de venda, instalação e
                assistência de baterias automotivas.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                Com mais de{' '}
                <span className="font-semibold text-[rgb(250,204,21)]">
                  11 anos de experiência
                </span>
                , nossa missão é fornecer produtos de qualidade e serviços
                diferenciados para atender melhor nossos clientes.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                Trabalhamos com{' '}
                <span className="font-semibold text-blue-900">
                  baterias originais
                </span>
                , garantindo segurança e eficiência. Oferecemos também
                assistência em socorro elétrico, sempre focados na satisfação do
                cliente e na excelência do nosso atendimento.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 py-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200">
                <Shield className="lucide lucide-shield w-8 h-8 text-blue-600 mb-2" />
                <h4 className="font-bold text-blue-900 text-sm">
                  Baterias Originais
                </h4>
                <p className="text-xs text-gray-600 mt-1">Produtos de qualidade</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-5 rounded-xl border border-yellow-200">
                <Zap className="lucide lucide-zap w-8 h-8 text-[rgb(250,204,21)] mb-2" />
                <h4 className="font-bold text-yellow-900 text-sm">
                  Socorro Elétrico
                </h4>
                <p className="text-xs text-gray-700 mt-2 font-medium leading-tight">
                  Seg a Sex: 07h às 18h
                  <br />
                  Sáb: 08h às 12h
                </p>
              </div>
            </div>
            <button
              onClick={() => openWhatsApp()}
              className="group inline-flex items-center gap-3 border-2 border-[rgb(250,204,21)] text-[rgb(250,204,21)] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[rgb(250,204,21)] hover:text-black transition-all duration-300 hover:shadow-xl hover:shadow-yellow-200 hover:scale-105"
            >
              <MessageCircle className="lucide lucide-message-circle w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              Fale Conosco
            </button>
          </div>
          <div className="relative animate-fade-in-right">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-[rgb(250,204,21)] to-blue-600 rounded-3xl blur-lg opacity-20"></div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/Center%20Baterias%2Fimg%2FQuem%20somos%2001.webp"
                alt="Center Baterias - Equipe profissional"
                className="relative w-full h-[450px] md:h-[550px] object-cover rounded-3xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border-4 border-blue-50">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-4">
                    <Award className="lucide lucide-award w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-900">11+</p>
                    <p className="text-sm text-gray-600 font-medium">
                      Anos de Excelência
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-10 -right-4 w-32 h-32 bg-[rgb(250,204,21)]/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -right-6 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
          </div>
        </div>
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          {stats.map(({ Icon, value, label }) => (
            <div
              key={label}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon className="lucide w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-2">{value}</h3>
              <p className="text-sm text-gray-600 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

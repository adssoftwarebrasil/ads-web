import { ArrowRight, Shield, Award, Clock } from 'lucide-react';
import { scrollToId, openWhatsApp } from '../whatsapp';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-[rgb(2,45,103)] via-blue-900 to-[rgb(2,45,103)]"
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-white space-y-8">
            <div className="inline-block">
              <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                Há mais de 30 anos no mercado
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Medidores de Fios de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                Alta Precisão
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
              Soluções inovadoras em equipamentos para medição de fios e cabos elétricos. Qualidade
              certificada pelo INMETRO, garantindo eficiência e precisão para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() =>
                  openWhatsApp('Olá! Gostaria de solicitar um orçamento dos medidores de fios Goiafio.')
                }
                className="group bg-white text-[rgb(2,45,103)] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                Solicite um Orçamento
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToId('produtos')}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30"
              >
                Conheça Nossos Produtos
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <Shield size={32} className="mx-auto mb-2 text-blue-200" />
                <p className="text-2xl font-bold">30+</p>
                <p className="text-sm text-blue-200">Anos de Experiência</p>
              </div>
              <div className="text-center">
                <Award size={32} className="mx-auto mb-2 text-blue-200" />
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm text-blue-200">Certificado INMETRO</p>
              </div>
              <div className="text-center">
                <Clock size={32} className="mx-auto mb-2 text-blue-200" />
                <p className="text-2xl font-bold">24h</p>
                <p className="text-sm text-blue-200">Suporte Rápido</p>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-3xl transform rotate-3"></div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/goiafio%2Fsubstituicao%2Fhero-sem-logo.webp"
              alt="Máquina Industrial Goiafio"
              className="relative rounded-3xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl max-w-xs">
              <p className="text-[rgb(2,45,103)] font-semibold mb-2">Tecnologia de Ponta</p>
              <p className="text-gray-600 text-sm">
                Equipamentos testados e aprovados individualmente pelo INMETRO
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

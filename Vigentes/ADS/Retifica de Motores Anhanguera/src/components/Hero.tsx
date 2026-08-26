import { ArrowRight, CheckCircle, Award, Clock } from 'lucide-react';
import { WHATSAPP_URL } from '../utils';

const features = [
  { Icon: CheckCircle, title: 'Qualidade Garantida', desc: 'Serviços com excelência' },
  { Icon: Award, title: 'Experiência', desc: 'Anos no mercado' },
  { Icon: Clock, title: 'Atendimento Rápido', desc: 'Seg a Sex 7:30-18:00' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-[rgb(167,20,42)] text-white px-4 py-2 rounded-full text-sm font-semibold">
                Desde 2016 em Goiânia
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Retífica de Motores
              <span className="block text-[rgb(167,20,42)] mt-2">
                Especializada e Confiável
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Especialistas em retífica de motores para linha leve, média e pesada. Centro
              automotivo completo com qualidade garantida e atendimento excepcional em Goiânia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center space-x-2 bg-[rgb(167,20,42)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(147,15,37)] transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight
                  width={20}
                  height={20}
                  className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"
                />
              </a>
              <button className="flex items-center justify-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl border-2 border-gray-200">
                <span>Fale Conosco</span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {features.map(({ Icon, title, desc }) => (
                <div key={title} className="flex items-start space-x-3">
                  <Icon
                    width={24}
                    height={24}
                    className="text-[rgb(167,20,42)] flex-shrink-0 mt-1"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{title}</p>
                    <p className="text-sm text-gray-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative lg:block hidden">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Retífica de Motores Profissional"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-4 border-[rgb(167,20,42)]">
                <div className="flex items-center space-x-4">
                  <div className="bg-[rgb(167,20,42)] text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl">
                    8+
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Anos de</p>
                    <p className="font-bold text-gray-900">Experiência</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[rgb(167,20,42)] opacity-10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-2 bg-gradient-to-r from-[rgb(167,20,42)] via-red-600 to-[rgb(167,20,42)]"></div>
    </section>
  );
}

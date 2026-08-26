import { Star, Award, Users, ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/dr%20sillas%20mourao/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#144170]/95 via-[#144170]/80 to-[#144170]/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#144170]/60 via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 w-fit">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    width={13}
                    height={13}
                    className="lucide lucide-star fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="text-white text-xs font-medium">4.9 — Especialista em Coloproctologia</span>
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Cuidado Especializado
                <span className="block text-[#009FC2]">para o Seu Bem-estar</span>
                <span className="block text-white/90">Intestinal</span>
              </h1>
            </div>
            <p className="text-white/80 text-lg leading-relaxed max-w-xl">
              Dr. Sillas Mourão oferece tratamentos modernos em coloproctologia com tecnologia de ponta,
              atendimento humanizado e diagnóstico preciso. Da consulta à cirurgia, você está em boas mãos.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-2">
              <a
                href="https://wa.me/553399711500"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#009FC2] hover:bg-[#007fa0] text-white px-7 py-3.5 rounded-full font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Agendar pelo WhatsApp
              </a>
              <button
                onClick={() => scrollTo('servicos')}
                className="border-2 border-white/50 hover:border-white text-white px-7 py-3.5 rounded-full font-semibold text-base transition-all duration-200 hover:bg-white/10"
              >
                Ver Serviços
              </button>
            </div>
            <div className="flex flex-wrap gap-6 mt-4 pt-4 border-t border-white/20">
              <div className="flex items-center gap-3">
                <div className="bg-[#009FC2]/20 p-2 rounded-lg">
                  <Award width={20} height={20} className="lucide lucide-award text-[#009FC2]" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-none">+10 anos</p>
                  <p className="text-white/60 text-xs">de Experiência</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#009FC2]/20 p-2 rounded-lg">
                  <Users width={20} height={20} className="lucide lucide-users text-[#009FC2]" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-none">+3.000</p>
                  <p className="text-white/60 text-xs">Pacientes Atendidos</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#009FC2]/20 p-2 rounded-lg">
                  <Star width={20} height={20} className="lucide lucide-star text-[#009FC2] fill-[#009FC2]" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-none">4.9/5.0</p>
                  <p className="text-white/60 text-xs">Avaliação Média</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-end items-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-t from-[#009FC2]/20 to-transparent rounded-3xl blur-2xl"></div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/dr%20sillas%20mourao/img/dr-sillas-bracos-cruzados.webp"
                alt="Dr. Sillas Mourão"
                className="relative h-[550px] w-auto object-contain object-bottom drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollTo('sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown width={32} height={32} className="lucide lucide-chevron-down " />
      </button>
    </section>
  );
}

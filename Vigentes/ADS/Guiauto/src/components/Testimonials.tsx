import { Award, Users, CheckCircle2, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: '"A Guiauto sempre foi minha escolha. O atendimento é excelente e os serviços são de extrema qualidade. Sinto total segurança!"',
    initial: 'M',
    name: 'Maria da Silva',
    role: 'Proprietária de Veículo Importado',
  },
  {
    text: '"Fiz a revisão do meu carro e me impressionei com a competência técnica da equipe. Resolveram tudo com muita agilidade."',
    initial: 'J',
    name: 'João Pereira',
    role: 'Cliente Fidelizado',
  },
  {
    text: '"Ótima experiência! Desde a recepção até a entrega do veículo, a transparência e a seriedade da empresa são impecáveis."',
    initial: 'A',
    name: 'Ana Costa',
    role: 'Cliente Deliciada',
  },
  {
    text: '"A qualidade dos serviços e o cuidado com o meu carro me surpreenderam. É, sem dúvida, minha oficina de confiança em Sobral."',
    initial: 'C',
    name: 'Carlos Almeida',
    role: 'Cliente de Reboque 24h',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#00335F] rounded-[3rem] p-8 md:p-16 mb-24 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2BA2CC]/10 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#2BA2CC] font-bold text-sm uppercase tracking-widest">Sólida e Eficiente</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6 leading-tight">
                Especialista em Veículos Nacionais e Importados
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                Nossa história de mais de 44 anos é pautada na idoneidade. Aliamos treinamentos rigorosos a equipamentos
                de última geração para garantir que sua confiança passe por gerações.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-[#D7282A]" />
                  <div>
                    <p className="text-white font-bold leading-none">44+ Anos</p>
                    <p className="text-blue-200 text-xs">De tradição e confiança</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-[#D7282A]" />
                  <div>
                    <p className="text-white font-bold leading-none">Equipe Expert</p>
                    <p className="text-blue-200 text-xs">Treinamento constante</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#D7282A]" />
                  <div>
                    <p className="text-white font-bold leading-none">Tecnologia</p>
                    <p className="text-blue-200 text-xs">Equipamentos modernos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="border-4 border-[#D7282A] rounded-2xl p-4 rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/fachada.webp"
                  alt="Fachada da Guiauto - Oficina e Reboque em Sobral"
                  loading="lazy"
                  className="w-full h-[340px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <span className="text-[#D7282A] font-bold text-sm uppercase tracking-wider">Voz do Cliente</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#00335F] mt-4 mb-6">Quem confia, recomenda</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group bg-gray-50 rounded-3xl p-8 md:p-10 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100 relative"
            >
              <Quote className="absolute top-10 right-10 w-16 h-16 text-[#00335F]/5 group-hover:text-[#D7282A]/10 transition-colors duration-500" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D7282A] text-[#D7282A]" />
                ))}
              </div>
              <p className="text-gray-700 text-xl italic leading-relaxed mb-8 relative z-10">{t.text}</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00335F] to-[#2BA2CC] rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform">
                  <span className="text-white font-black text-xl">{t.initial}</span>
                </div>
                <div>
                  <p className="font-bold text-[#00335F] text-lg">{t.name}</p>
                  <p className="text-sm font-medium text-[#D7282A] uppercase tracking-tighter">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Award, ArrowRight, MapPin } from 'lucide-react';

const features = [
  { title: 'Grande Variedade', desc: 'Amplo estoque de peças originais e paralelas' },
  { title: 'Entrega Rápida', desc: 'Entrega no mesmo dia para Uberlândia' },
  { title: 'Melhor Preço', desc: 'Preços competitivos e condições especiais' },
  { title: 'Atendimento Especializado', desc: 'Equipe experiente para ajudar você' },
];

const stats = [
  { value: '31', label: 'Anos de Experiência' },
  { value: '1000+', label: 'Clientes Satisfeitos' },
  { value: '5★', label: 'Avaliação Google' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/udi%20latas%2Fimg%2Fhero-atualizado.webp"
          alt="Udi Latas - Frente da Loja"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#28156F]/90 via-[#28156F]/70 to-[#28156F]/50"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-[#F2CD00] text-[#28156F] px-4 py-2 rounded-full font-semibold text-sm">
              <Award className="w-4 h-4" />
              <span>31 anos de excelência</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Autopeças de<span className="block text-[#F2CD00]">Qualidade em Uberlândia</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Encontre tudo que seu veículo precisa: para-choques, capôs, faróis, lanternas, retrovisores e muito mais.
              Peças originais e paralelas com o melhor atendimento da região.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://wa.me/553488692793?text=Olá! Gostaria de saber mais sobre as autopeças disponíveis."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-[#F2CD00] text-[#28156F] px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <span>Fale Conosco</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+553432364573"
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
              >
                Ligar Agora
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl md:text-4xl font-bold text-[#F2CD00]">{s.value}</div>
                  <div className="text-sm md:text-base text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 space-y-6 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white">Por que escolher a Udi Latas?</h3>
              <div className="space-y-4">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="flex items-start gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                  >
                    <div className="w-2 h-2 mt-2 bg-[#F2CD00] rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-white">{f.title}</div>
                      <div className="text-sm text-gray-300">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-[#F2CD00] pt-4">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Uberlândia - MG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FEFEFF] to-transparent z-10"></div>
    </section>
  );
}

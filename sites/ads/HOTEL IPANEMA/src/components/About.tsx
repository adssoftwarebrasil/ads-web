import { Award, Heart, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-56 sm:h-64">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/hotel-ipanema%2FRecepcao.jpg"
                    alt="Recepção Hotel Ipanema"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-40 sm:h-44">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/hotel-ipanema%2FLugar-Do-Caf%C3%A9.jpg"
                    alt="Café da manhã"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-2xl overflow-hidden h-40 sm:h-44">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/hotel-ipanema%2FFoto-De-Quadro-Na-Recepcao.jpg"
                    alt="Decoração recepção"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-56 sm:h-64">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/hotel-ipanema%2FTV-No-Quarto.jpg"
                    alt="Quarto com TV"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-[#f68033] rounded-2xl p-5 shadow-2xl hidden sm:block">
              <p className="text-black font-black text-3xl leading-none">12+</p>
              <p className="text-black/80 text-xs font-semibold mt-1">Anos Hospedando<br />com Excelência</p>
            </div>
          </div>

          <div>
            <span className="inline-block text-[#f68033] text-sm font-bold tracking-widest uppercase mb-3">
              Nossa História
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Tradição e <span className="text-[#fff808]">Hospitalidade</span>{' '}
              que Fazem a Diferença
            </h2>
            <p className="text-[#bdbec2] text-base leading-relaxed mb-4">
              O Hotel Ipanema nasceu junto ao Posto Ipanema com um único propósito: oferecer ao viajante muito mais do que um simples lugar para dormir. Fundado há 12 anos em Araguaína — TO, na Vila Cearence, desde o primeiro dia nosso compromisso é com a excelência no atendimento.
            </p>
            <p className="text-[#bdbec2] text-base leading-relaxed mb-10">
              Com ótimas avaliações e uma equipe bem treinada, oferecemos quartos limpos e aconchegantes, Wi-Fi, água quente, ar-condicionado, Smart TV, estacionamento privativo e um café da manhã que faz a diferença. Para nós, hospedar é cuidar de pessoas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { icon: Award, title: 'Qualidade Garantida', desc: 'Padrão elevado em todos os ambientes' },
                { icon: Heart, title: 'Atendimento Humano', desc: 'Equipe dedicada e sempre disponível' },
                { icon: Users, title: 'Para Todos', desc: 'Negócios, lazer ou família' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="w-10 h-10 bg-[#f68033]/10 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="text-[#f68033]" size={20} />
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1">{title}</h4>
                  <p className="text-[#bdbec2] text-xs">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

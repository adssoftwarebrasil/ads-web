import { Award, Microscope, BookOpen, Heart } from 'lucide-react';

const features = [
  { Icon: Award, name: 'award', text: 'Biomédica Esteta e Tricologista Capilar' },
  { Icon: Microscope, name: 'microscope', text: 'Abordagem Integrativa e Avaliação Precisa' },
  { Icon: BookOpen, name: 'book-open', text: 'Especializada em Saúde e Regeneração Capilar' },
  { Icon: Heart, name: 'heart', text: 'Atendimento Humanizado e Personalizado' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="relative animate-on-scroll order-2 lg:order-1">
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-[#F8E5E4] rounded-full opacity-40 blur-3xl"></div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/tatiane-terapeuta-capilar/img/capa-livro-terapia-capilar-dra-tatiane_1080x1920.webp"
                  alt="Dra. Tatiane Fernandes - Tricologista"
                  className="w-full h-[600px] lg:h-[650px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 max-w-[200px]">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/tatiane-terapeuta-capilar/img/capa-livro-terapia-capilar-dra-tatiane_1080x1920.webp"
                  alt="Livro Terapia Capilar"
                  className="w-12 h-16 object-cover rounded-md shadow-sm"
                />
                <div>
                  <p className="text-xs font-semibold text-[#737373]">Autora</p>
                  <p className="text-[11px] text-[#A6A6A6] leading-tight">Terapia Capilar Avançada</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="animate-on-scroll">
              <span className="text-[#A6A6A6] text-sm font-medium tracking-widest uppercase">
                Sobre a Especialista
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#404040] mt-3 mb-6 leading-snug">
                Uma história de <span className="italic text-[#737373]">transformação</span> que
                inspira resultados
              </h2>
            </div>
            <div className="animate-on-scroll">
              <p className="text-[#737373] leading-relaxed mb-4">
                Ex-bancária, a Dra. Tatiane Fernandes vivenciou na própria pele os efeitos
                devastadores da queda capilar. Foi essa experiência pessoal que a levou a abandonar
                uma carreira estável para se dedicar integralmente à tricologia.
              </p>
              <p className="text-[#737373] leading-relaxed mb-8">
                Hoje, como biomédica esteta e tricologista, ela avalia o couro cabeludo associando
                fatores metabólicos, hormonais e nutricionais para entregar tratamentos
                verdadeiramente personalizados — devolvendo não apenas os cabelos, mas também a
                autoestima e a confiança dos seus pacientes em Pouso Alegre e região.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 animate-on-scroll">
              {features.map(({ Icon, name, text }) => (
                <div
                  key={text}
                  className="flex items-start gap-3 bg-[#F8E5E4]/50 rounded-xl p-3.5 transition-all duration-300 hover:bg-[#F8E5E4]"
                >
                  <div className="bg-white rounded-lg p-2 shadow-sm flex-shrink-0">
                    <Icon width={16} height={16} className={`lucide lucide-${name} text-[#737373]`} />
                  </div>
                  <span className="text-sm text-[#737373] font-medium leading-snug">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

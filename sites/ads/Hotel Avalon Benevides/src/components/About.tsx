import { Heart, Award, Clock, Users } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const values = [
  {
    icon: Heart,
    title: 'Gestão Familiar',
    text: 'Tratamos cada hóspede como um amigo, com atenção próxima e cuidado genuíno em cada detalhe.',
  },
  {
    icon: Award,
    title: '10 Anos de Qualidade',
    text: 'Desde 2017, construindo uma reputação sólida baseada em conforto, hospitalidade e confiança.',
  },
  {
    icon: Clock,
    title: 'Atendimento 24h',
    text: 'Nossa equipe está disponível a qualquer hora para garantir que sua estadia seja perfeita.',
  },
  {
    icon: Users,
    title: 'Para Todos os Perfis',
    text: 'Ideal tanto para viajantes a lazer quanto para quem busca praticidade em viagens de trabalho.',
  },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="sobre" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-700 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold text-sm font-semibold uppercase tracking-widest">
                Nossa História
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
              Um Lugar Onde Você{' '}
              <span className="text-[#0aaff9]">Se Sente em Casa</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              O Hotel Avalon Benevides nasceu do desejo de criar um espaço verdadeiramente acolhedor — um hotel onde cada detalhe é pensado com carinho para proporcionar conforto, tranquilidade e a sensação de que você sempre tem um lugar especial para voltar.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Localizado estrategicamente em Benevides – PA, estamos na rota das belas praias de Mosqueiro, Salinas e Marudá. De gestão familiar, prezamos por um atendimento próximo e cordial, onde cada hóspede é tratado como um amigo. Trabalhamos com <strong>diária completa</strong> e <strong>pernoite</strong> (22h às 7h), sempre garantindo seu bem-estar.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-navy/5 rounded-full px-4 py-2">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <span className="text-navy text-sm font-medium">Fundado em 2017</span>
              </div>
              <div className="flex items-center gap-2 bg-navy/5 rounded-full px-4 py-2">
                <div className="w-2 h-2 rounded-full bg-[#0aaff9]" />
                <span className="text-navy text-sm font-medium">Benevides – Pará</span>
              </div>
              <div className="flex items-center gap-2 bg-navy/5 rounded-full px-4 py-2">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <span className="text-navy text-sm font-medium">Café da manhã incluso</span>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2Frecepcao%2F5763965e-231e-4807-b659-459f8807c174.jpg"
                  alt="Recepção do Hotel Avalon"
                  className="rounded-2xl w-full h-56 object-cover shadow-lg"
                />
                <img
                  src="https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FArea-Cafe-Da-Manha2.jpg"
                  alt="Café da manhã"
                  className="rounded-2xl w-full h-56 object-cover shadow-lg mt-8"
                />
                <img
                  src="https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FFachada-do-Outro-Lado-Da-Fachada.jpg"
                  alt="Fachada do Hotel"
                  className="rounded-2xl w-full h-56 object-cover shadow-lg"
                />
                <img
                  src="https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FArea-Externa-Dos-Quartos.jpg"
                  alt="Área externa"
                  className="rounded-2xl w-full h-56 object-cover shadow-lg mt-8"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gold text-navy font-bold rounded-2xl p-4 shadow-xl">
                <div className="text-3xl font-serif">10+</div>
                <div className="text-xs font-semibold uppercase tracking-wider">Anos Ativos</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {values.map((v, i) => (
            <div
              key={i}
              className={`bg-navy rounded-2xl p-6 group hover:bg-navy-light transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/20 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms`, transitionProperty: 'all' }}
            >
              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors">
                <v.icon size={22} className="text-gold" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{v.title}</h3>
              <p className="text-white/65 text-sm leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

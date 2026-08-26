import { Users, Heart, Shield, LucideIcon } from 'lucide-react';

interface Vantagem {
  num: string;
  bg: string;
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
}

const vantagens: Vantagem[] = [
  {
    num: '01',
    bg: 'https://storage.lucasmendes.dev/site-sp/sorrisoimperatriz%2Fimg%2FAtendimento%20Personalizado.webp',
    Icon: Users,
    iconClass: 'lucide lucide-users',
    title: 'Atendimento Personalizado',
    text: 'Cada paciente é único. Criamos planos de tratamento individualizados para suas necessidades específicas.',
  },
  {
    num: '02',
    bg: 'https://storage.lucasmendes.dev/site-sp/sorrisoimperatriz%2Fimg%2FAmbiente%20Conforta%CC%81vel.webp',
    Icon: Heart,
    iconClass: 'lucide lucide-heart',
    title: 'Ambiente Confortável',
    text: 'Espaço moderno e acolhedor, projetado para proporcionar tranquilidade e bem-estar durante sua visita.',
  },
  {
    num: '03',
    bg: 'https://storage.lucasmendes.dev/site-sp/sorrisoimperatriz%2Fimg%2FEquipe%20Multidisciplinar.webp',
    Icon: Shield,
    iconClass: 'lucide lucide-shield',
    title: 'Equipe Multidisciplinar',
    text: 'Profissionais especializados em diversas áreas trabalhando em conjunto para cuidar do seu sorriso.',
  },
];

export default function Vantagens() {
  return (
    <section
      id="vantagens"
      className="py-16 sm:py-24 bg-[rgb(13,51,98)] relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255, 255, 255, 0.05) 35px, rgba(255, 255, 255, 0.05) 70px)',
        }}
      ></div>
      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Por Que Escolher a Clínica Sorriso Imperatriz
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Diferenciais que fazem toda a diferença na sua experiência
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vantagens.map((v) => (
            <div
              key={v.num}
              className="glassmorphism rounded-2xl p-8 backdrop-blur-md hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                style={{ backgroundImage: `url("${v.bg}")` }}
              ></div>
              <div className="relative z-10">
                <div className="text-6xl font-bold text-white/20 mb-4">
                  {v.num}
                </div>
                <v.Icon
                  className={`${v.iconClass} w-12 h-12 text-[rgb(212,175,55)] mb-6`}
                />
                <h3 className="text-2xl font-bold text-white mb-4">{v.title}</h3>
                <p className="text-white/80 leading-relaxed">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

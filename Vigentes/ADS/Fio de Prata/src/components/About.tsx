import { Shield, Heart, Star } from 'lucide-react';
import { StarIcon } from './icons';

const features = [
  {
    icon: Shield,
    title: 'Qualidade Garantida',
    text: 'Ingredientes selecionados e manipulados com rigor para que cada espeto chegue perfeito à sua mesa.',
  },
  {
    icon: Heart,
    title: 'Atendimento Acolhedor',
    text: 'Nossa equipe cuida de cada detalhe para que você se sinta em casa desde o momento que chega.',
  },
  {
    icon: Star,
    title: 'Experiência Completa',
    text: 'Espaço com ambiente familiar e área para as crianças, ideal para reunir quem você ama.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="bg-[#111111] py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="https://storage.lucasmendes.dev/site-sp/espetaria%20fio%20de%20prata/img/pessoas-jantando-ao-ar-livre-a-noite_4032x3024.webp"
                alt="Pessoas jantando na Fio de Prata Espetaria"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-amber-500 rounded-2xl p-5 shadow-2xl shadow-amber-900/50">
              <p className="text-[#1a1a1a] font-black text-3xl leading-none">+2</p>
              <p className="text-[#1a1a1a]/75 font-semibold text-xs mt-1">
                Anos de<br />história
              </p>
            </div>
            <div className="absolute -top-4 -left-4 sm:-left-6 bg-[#1e1e1e] border border-white/8 rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="w-3.5 h-3.5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-[rgb(230,232,234)] font-bold text-sm">5.0 no Google</p>
              <p className="text-[rgb(230,232,234)]/45 text-xs">Avaliações reais</p>
            </div>
          </div>
          <div>
            <span className="inline-block text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">Nossa História</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[rgb(230,232,234)] leading-tight mb-6">
              Quase 2 anos de <span className="text-amber-400">sabor</span> e carinho
            </h2>
            <p className="text-[rgb(230,232,234)]/60 text-base leading-relaxed mb-5">
              A Fio de Prata Espetaria nasceu da paixão por espetinhos feitos do jeito certo — com ingredientes frescos, tempero no ponto e um cuidado especial que só quem ama o que faz consegue entregar.
            </p>
            <p className="text-[rgb(230,232,234)]/60 text-base leading-relaxed mb-10">
              Desde a abertura, nos tornamos um destino favorito no Centro de Sinop para quem busca uma boa jantinha, um ambiente tranquilo e um atendimento que vai além do esperado. Cada espeto que sai da nossa grelha carrega a nossa identidade:{' '}
              <span className="text-[rgb(230,232,234)]/85 font-medium">qualidade, organização e acolhimento.</span>
            </p>
            <div className="space-y-5">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/20 flex items-center justify-center mt-0.5">
                      <Icon size={18} className="text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-[rgb(230,232,234)] font-semibold text-sm mb-1">{f.title}</h3>
                      <p className="text-[rgb(230,232,234)]/50 text-sm leading-relaxed">{f.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Heart, Star, Award } from 'lucide-react';

const ABOUT_IMG =
  'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=900';

const values = [
  'Responsabilidade',
  'Compromisso',
  'Integridade',
  'Honestidade',
  'Respeito',
  'Confiança',
  'Empatia',
  'Foco',
  'Paixão pelo trabalho',
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-brand-black-soft">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src={ABOUT_IMG}
                alt="JR Veículos — Equipe"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-brand-red rounded-2xl p-5 shadow-2xl shadow-brand-red/30">
              <div className="text-3xl font-black text-white">+5</div>
              <div className="text-xs text-white/80 uppercase tracking-wide mt-1">Anos de<br />experiência</div>
            </div>
            <div className="absolute -top-4 -left-4 md:-left-6 bg-brand-black border border-white/15 rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="text-xs text-[#C0C0C0] mt-1">Clientes satisfeitos</div>
            </div>
          </div>

          <div>
            <span className="text-brand-red text-sm font-bold tracking-[0.2em] uppercase">
              Nossa história
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black text-white leading-tight">
              Uma história de{' '}
              <span className="text-brand-red">Pai e Filho</span>
            </h2>

            <div className="mt-6 space-y-4 text-[#C0C0C0] leading-relaxed">
              <p>
                A <strong className="text-white">JR Veículos</strong> foi fundada em março de 2020, nascida de
                um sonho compartilhado entre pai e filho. O Senhor Ademilson, recém aposentado, e
                Alexsandro, com experiência e paixão por carros, decidiram construir juntos algo especial.
              </p>
              <p>
                Com muito trabalho, sacrifício e dedicação, transformaram um sonho em realidade. Hoje,
                mais de 5 anos depois, a JR Veículos é referência em Rondonópolis e região por seu
                atendimento diferenciado e pela qualidade dos veículos seminovos.
              </p>
              <p className="italic text-white font-medium">
                "Temos mais que clientes, temos clientes amigos."
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: Heart, label: 'Missão', desc: 'Ser a loja mais lembrada do estado por melhor atender.' },
                { icon: Star, label: 'Visão', desc: 'Empresa de referência em compra, troca e consignação.' },
                { icon: Award, label: 'Valores', desc: 'Honestidade, confiança e compromisso em tudo que fazemos.' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="p-4 bg-brand-black rounded-2xl border border-white/10">
                  <Icon size={20} className="text-brand-red mb-2" />
                  <div className="text-white font-bold text-sm">{label}</div>
                  <div className="text-[#9CA3AF] text-xs mt-1 leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="text-xs text-[#9CA3AF] uppercase tracking-widest mb-3">Nossos valores</div>
              <div className="flex flex-wrap gap-2">
                {values.map((v) => (
                  <span
                    key={v}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-[#C0C0C0] hover:border-brand-red/40 hover:text-white transition-colors"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

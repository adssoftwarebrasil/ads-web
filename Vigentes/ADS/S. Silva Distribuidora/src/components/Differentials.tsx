import { Medal, Boxes, Users, Truck, HeartHandshake, MapPinned, LucideIcon } from 'lucide-react';

interface Diff {
  icon: LucideIcon;
  iconCls: string;
  title: string;
  desc: string;
  delay: string;
}

const items: Diff[] = [
  { icon: Medal, iconCls: 'lucide-medal', title: 'Tradição no mercado', desc: 'Mais de 25 anos consolidando parcerias e gerando confiança.', delay: '0ms' },
  { icon: Boxes, iconCls: 'lucide-boxes', title: 'Amplo estoque', desc: 'Mais de 40.000 itens para linhas leves e pesadas.', delay: '70ms' },
  { icon: Users, iconCls: 'lucide-users', title: 'Equipe qualificada', desc: 'Vendedores capacitados e atendimento consultivo.', delay: '140ms' },
  { icon: Truck, iconCls: 'lucide-truck', title: 'Logística eficiente', desc: 'Entregas rápidas e representantes em todo o Nordeste.', delay: '210ms' },
  { icon: HeartHandshake, iconCls: 'lucide-heart-handshake', title: 'Atendimento personalizado', desc: 'Relacionamento próximo com oficinas, revendas e consumidor final.', delay: '280ms' },
  { icon: MapPinned, iconCls: 'lucide-map-pinned', title: 'Presença regional', desc: 'Referência em Feira de Santana e cobertura em toda BA.', delay: '350ms' },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative py-20 md:py-28 bg-brand-navy text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("https://storage.lucasmendes.dev/site-sp/s-silva-distribuidora/img/interno-loja-ssilva.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-navy/80"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mb-14">
          <span className="reveal inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-bold uppercase tracking-[0.2em] mb-5">Por que a S. Silva?</span>
          <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-[1.05]">
            Performance de verdade começa com <span className="text-brand-red">quem entende do assunto.</span>
          </h2>
          <p className="reveal text-base md:text-lg text-white/70 max-w-2xl">
            Somos mais do que uma distribuidora — somos um parceiro comprometido com a eficiência e a lucratividade do seu negócio.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="reveal group relative p-6 md:p-7 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-brand-red/40 hover:bg-white/[0.07] transition-all"
                style={{ transitionDelay: item.delay }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-red/15 text-brand-red flex items-center justify-center mb-4 group-hover:bg-brand-red group-hover:text-white transition-all">
                  <Icon className={`lucide ${item.iconCls} w-6 h-6`} />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

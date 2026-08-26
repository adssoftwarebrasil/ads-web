import { BadgeCheck, Zap, Package, HeartHandshake } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Diferencial {
  num: string;
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  desc: string;
}

const diferenciais: Diferencial[] = [
  {
    num: '01',
    Icon: BadgeCheck,
    iconClass: 'lucide lucide-badge-check w-6 h-6',
    title: 'Procedência e qualidade',
    desc: 'Cada peça do nosso portfólio é selecionada para atender às exigências do campo e da estrada.',
  },
  {
    num: '02',
    Icon: Zap,
    iconClass: 'lucide lucide-zap w-6 h-6',
    title: 'Agilidade no atendimento',
    desc: 'Respostas rápidas, diagnóstico correto e pronta entrega para reduzir o tempo parado.',
  },
  {
    num: '03',
    Icon: Package,
    iconClass: 'lucide lucide-package w-6 h-6',
    title: 'Envio para todo o Brasil',
    desc: 'Despachamos para Mato Grosso e demais estados com logística otimizada.',
  },
  {
    num: '04',
    Icon: HeartHandshake,
    iconClass: 'lucide lucide-heart-handshake w-6 h-6',
    title: 'Parceria que rende',
    desc: 'Condições especiais para frotistas, oficinas, produtores rurais e transportadoras.',
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-brand-navy" aria-hidden="true"></div>
      <div
        className="absolute inset-0 opacity-[0.07]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/plato-lider/img/hero-background.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      ></div>
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(rgba(0, 18, 92, 0.85) 0%, rgba(0, 18, 92, 0.95) 100%)',
        }}
      ></div>
      <div className="container-x relative text-white">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-red-light">
            <span className="w-8 h-px bg-brand-red-light"></span>Por que a Platô Líder?
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold leading-[1.05] text-balance">
            Um parceiro que entende o que mantém sua operação girando.
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {diferenciais.map((d) => (
            <div
              key={d.num}
              className="group relative p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="text-brand-red-light font-display text-5xl font-black opacity-20 absolute top-4 right-5">
                {d.num}
              </div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-red-light text-white">
                <d.Icon className={d.iconClass} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{d.title}</h3>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

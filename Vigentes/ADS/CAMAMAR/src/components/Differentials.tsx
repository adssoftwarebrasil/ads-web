import { Users, Calendar, Package, Award } from 'lucide-react';

interface Stat {
  Icon: typeof Users;
  value: string;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { Icon: Users, value: '0mil', suffix: '+', label: 'Clientes' },
  { Icon: Calendar, value: '0', suffix: '+', label: 'Anos de mercado' },
  { Icon: Package, value: '0', suffix: '+', label: 'Produtos' },
  { Icon: Award, value: '0mil', suffix: '+', label: 'Obras atendidas' },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative py-24 bg-camamar-dark overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0px)',
          backgroundSize: '32px 32px',
        }}
      ></div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-primary font-bold tracking-[0.3em] text-sm mb-3 uppercase">Por que escolher</p>
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase text-white leading-none">
            A escolha certa para <br />
            <span className="text-primary">sua construção</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto mt-6 text-base md:text-lg">
            Mais de três décadas atendendo profissionais e construtoras com qualidade, agilidade e o melhor
            custo-benefício do mercado.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 reveal">
          {stats.map(({ Icon, value, suffix, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <Icon className="w-10 h-10 text-primary mb-4" width={24} height={24} strokeWidth={1.5} />
              <p className="font-display font-black text-5xl md:text-6xl text-white leading-none">
                <span>{value}</span>
                <span className="text-primary">{suffix}</span>
              </p>
              <p className="text-white/70 text-sm uppercase tracking-[0.2em] mt-3 font-semibold">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

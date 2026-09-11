import { CheckCircle2 } from 'lucide-react';

const bullets = [
  { text: 'Fundada em 1995, com atuação desde 1996', delay: '0ms' },
  { text: 'Portfólio com mais de 40.000 itens', delay: '60ms' },
  { text: 'Peças nacionais e importadas', delay: '120ms' },
  { text: 'Equipe interna e representantes no Nordeste', delay: '180ms' },
  { text: 'Logística eficiente e estoque diversificado', delay: '240ms' },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-20 md:py-28 bg-brand-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative reveal order-2 lg:order-1">
            <div className="absolute -top-6 -left-6 w-28 h-28 rounded-2xl border-4 border-brand-red/80 z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-brand-blue/10 z-0"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-navy/20 z-10">
              <img
                src="https://storage.lucasmendes.dev/site-sp/s-silva-distribuidora/img/sobre-nos.webp"
                alt="Fachada da S. Silva Distribuidora"
                className="w-full h-[380px] md:h-[480px] object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-brand-navy/95 to-transparent">
                <p className="text-white/80 text-xs uppercase tracking-[0.2em] font-semibold mb-1">Matriz</p>
                <p className="text-white font-display text-2xl font-bold">Feira de Santana, Bahia</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="reveal inline-block px-4 py-1.5 rounded-full bg-brand-red/10 text-brand-wine text-xs font-bold uppercase tracking-[0.2em] mb-5">Sobre a S. Silva</span>
            <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy mb-6 leading-[1.05]">
              Quase 3 décadas movendo <span className="text-gradient-brand">o setor automotivo</span> do Nordeste.
            </h2>
            <p className="reveal text-base md:text-lg text-slate-600 leading-relaxed mb-5">
              A S. Silva Distribuidora nasceu em <strong>dezembro de 1995</strong> e iniciou suas atividades em setembro de 1996, na cidade de Feira de Santana – BA. Ao longo de mais de 25 anos de jornada, cresceu de forma sólida e constante, construindo um relacionamento de honestidade, respeito e carisma com cada parceiro.
            </p>
            <p className="reveal text-base md:text-lg text-slate-600 leading-relaxed mb-8">
              Hoje, contamos com mais de <strong>60 colaboradores</strong>, uma equipe externa atuando em todo o Nordeste e um portfólio com mais de <strong>40.000 itens</strong> entre linhas leves e pesadas, nacionais e importadas. Investimos continuamente em produtos de qualidade e excelência no atendimento.
            </p>
            <ul className="space-y-3">
              {bullets.map((b, i) => (
                <li key={i} className="reveal flex items-start gap-3" style={{ transitionDelay: b.delay }}>
                  <CheckCircle2 className="lucide lucide-check-circle2 w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{b.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

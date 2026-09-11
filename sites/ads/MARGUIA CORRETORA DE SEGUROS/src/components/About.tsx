import { CheckCircle2, Award, Heart, Handshake } from 'lucide-react';

const pillars = [
  { icon: Award, title: 'Experiência', desc: 'Mais de 17 anos no mercado de seguros em Cuiabá e todo o Brasil.' },
  { icon: Heart, title: 'Cuidado', desc: 'Atendimento próximo e personalizado, entendendo as reais necessidades de cada cliente.' },
  { icon: Handshake, title: 'Confiança', desc: 'Transparência e compromisso para construir relacionamentos duradouros.' },
];

const highlights = [
  'Atendimento personalizado e humanizado',
  'Parceria com as melhores seguradoras do país',
  'Suporte ágil na hora que você mais precisa',
  'Soluções para pessoa física e jurídica',
  'Cobertura em todo o Brasil',
  'Mais de 5.000 clientes satisfeitos',
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[rgb(252,255,254)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-[rgb(77,175,215)]/10 rounded-full blur-3xl" />
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/marguia%20corretora%20de%20seguros/img/dono-sorrindo-ao-lado-da-logo.webp"
                alt="Dono da Marguia Corretora de Seguros"
                className="w-full rounded-2xl shadow-2xl object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -right-6 bg-[rgb(52,82,108)] text-white rounded-2xl px-6 py-4 shadow-xl">
                <div className="text-4xl font-bold text-[rgb(77,175,215)]">17+</div>
                <div className="text-sm text-white/80 mt-0.5">anos de mercado</div>
              </div>
              <div className="absolute top-6 -right-6 bg-white rounded-2xl px-4 py-3 shadow-xl border border-[rgb(77,175,215)]/20">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[rgb(52,82,108)] text-sm font-semibold">Atendimento Online</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 text-[rgb(61,119,189)] text-sm font-semibold uppercase tracking-widest mb-4">
              <span className="w-8 h-0.5 bg-[rgb(61,119,189)]" />
              Sobre a Marguia
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[rgb(2,2,2)] mb-6 leading-tight">
              Cuidando do seu presente,{' '}
              <span className="text-[rgb(61,119,189)]">planejando o seu futuro</span>
            </h2>

            <p className="text-[rgb(52,82,108)] text-lg mb-6 leading-relaxed">
              A Marguia Corretora de Seguros é referência em soluções inteligentes de proteção e
              planejamento financeiro. Especializada em seguros de vida, previdência privada e
              consórcios, entregamos segurança, estabilidade e tranquilidade para você, sua família
              e seu patrimônio.
            </p>

            <p className="text-[rgb(52,82,108)]/80 mb-8 leading-relaxed">
              Com transparência, confiança e compromisso, a corretora constrói relacionamentos
              duradouros e entrega muito mais do que serviços: entrega proteção com excelência.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-[rgb(77,175,215)] mt-0.5 shrink-0" />
                  <span className="text-[rgb(52,82,108)] text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
              {pillars.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-gradient-to-br from-[rgb(43,85,126)]/5 to-[rgb(77,175,215)]/10 rounded-xl p-4 border border-[rgb(61,119,189)]/10 hover:border-[rgb(77,175,215)]/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon size={24} className="text-[rgb(61,119,189)] mb-2" />
                  <div className="font-semibold text-[rgb(2,2,2)] text-sm mb-1">{title}</div>
                  <div className="text-[rgb(52,82,108)]/70 text-xs leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

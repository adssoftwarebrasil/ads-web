import { Shield, Users, Zap, Award } from 'lucide-react';

const features = [
  {
    Icon: Shield,
    title: 'Segurança na Negociação',
    desc: 'Transparência e honestidade em cada etapa da compra, venda ou troca.',
    delay: '0ms',
  },
  {
    Icon: Users,
    title: 'Atendimento Direto',
    desc: 'Fale diretamente com quem decide. Sem intermediários, sem burocracia.',
    delay: '100ms',
  },
  {
    Icon: Zap,
    title: 'Agilidade no Processo',
    desc: 'Do primeiro contato à entrega das chaves, garantimos rapidez e eficiência.',
    delay: '200ms',
  },
  {
    Icon: Award,
    title: 'Experiência Comprovada',
    desc: 'Anos de atuação no mercado de veículos pesados em Manaus e região.',
    delay: '300ms',
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-[#600202]/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#af0201]/5 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#af0201]/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#af0201]/30 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 animate-on-scroll-left">
            <span className="inline-block bg-[#af0201]/15 border border-[#af0201]/30 text-[#af0201] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Sobre a Empresa
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#fefefe] leading-tight mb-6">
              A Referência em Caminhões <span className="text-[#af0201]">em Manaus</span>
            </h2>
            <p className="text-[#fefefe]/65 text-base sm:text-lg leading-relaxed mb-6">
              Na <strong className="text-[#fefefe]">Truck Veículos</strong>, entendemos a
              importância de encontrar o veículo certo para as suas necessidades — seja
              para trabalho pesado, transporte logístico ou uso pessoal.
            </p>
            <p className="text-[#fefefe]/65 text-base sm:text-lg leading-relaxed mb-8">
              Com anos de experiência no mercado de revenda, somos especializados em
              oferecer uma ampla gama de caminhões e veículos de alta qualidade. Nosso
              pátio coberto e estruturado garante a você a melhor experiência de compra em
              Manaus e região.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="http://wa.me/559292834895?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Truck%20Ve%C3%ADculos."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#af0201] hover:bg-[#600202] text-[#fefefe] font-bold px-6 py-3 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-red-900/40 hover:-translate-y-0.5 text-sm"
              >
                Falar com a Equipe
              </a>
              <a
                href="https://www.instagram.com/truck_veiculos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/5 border border-white/15 hover:border-[#af0201]/40 text-[#fefefe] font-semibold px-6 py-3 rounded-md transition-all duration-300 hover:-translate-y-0.5 text-sm"
              >
                Seguir no Instagram
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 animate-on-scroll-right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map(({ Icon, title, desc, delay }) => (
                <div
                  key={title}
                  className="animate-on-scroll bg-[#010101]/60 border border-white/10 hover:border-[#af0201]/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group"
                  style={{ transitionDelay: delay }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#af0201]/15 border border-[#af0201]/20 flex items-center justify-center mb-4 group-hover:bg-[#af0201]/25 transition-colors">
                    <Icon width={18} height={18} className="text-[#af0201]" />
                  </div>
                  <h3 className="text-[#fefefe] font-bold text-base mb-2">{title}</h3>
                  <p className="text-[#fefefe]/50 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-[#af0201]/10 border border-[#af0201]/20 rounded-2xl p-6 flex items-center gap-4">
              <div className="flex -space-x-2 flex-shrink-0">
                {['T', 'V', '+'].map((c) => (
                  <div
                    key={c}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-[#af0201] to-[#600202] border-2 border-[#010101] flex items-center justify-center text-xs font-bold text-white"
                  >
                    {c}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[#fefefe] font-bold text-sm">Horário de Atendimento</p>
                <p className="text-[#fefefe]/55 text-sm">Segunda a Sábado · 08h às 17h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

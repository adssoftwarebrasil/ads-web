import { CheckCircle2, MapPin, Clock, Mail } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const highlights = [
  'Mais de 30 anos no mercado de eventos',
  'Atendimento em todo o Mato Grosso',
  'Sonorização importada e equipamentos de última geração',
  'Equipe técnica especializada',
  'Shows nacionais e eventos corporativos',
  'Piso modular IRMARFER (estrado português)',
  'Estrutura completa em um único fornecedor',
];

export default function About() {
  const { ref: leftRef, inView: leftIn } = useInView();
  const { ref: rightRef, inView: rightIn } = useInView();

  return (
    <section id="sobre" className="py-24 bg-[rgb(39,41,45)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            ref={leftRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-700 ${
              leftIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="text-[#C9962F] text-xs font-bold tracking-widest uppercase mb-3 block">
              Nossa História
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[rgb(245,244,249)] mb-6 leading-tight">
              Criando Experiências{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9962F] to-[#F0C060]">
                Desde 1995
              </span>
            </h2>
            <p className="text-[rgb(245,244,249)]/65 text-base leading-relaxed mb-5">
              Há mais de 30 anos, a Roberto Guimarães Eventos é referência em locação de estruturas completas para eventos em Sorriso e toda a região do Mato Grosso. Nossa missão é transformar cada evento em uma experiência única e inesquecível.
            </p>
            <p className="text-[rgb(245,244,249)]/65 text-base leading-relaxed mb-8">
              Atuamos em eventos corporativos, shows nacionais, lives, dias de campo, casamentos, aniversários de 15 anos, formaturas e feiras — integrando tecnologias de ponta em iluminação, sonorização, painel de LED e efeitos especiais para garantir sempre um resultado extraordinário.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#C9962F] shrink-0 mt-0.5" />
                  <span className="text-[rgb(245,244,249)]/75 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="http://wa.me/556699022313"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#C9962F] hover:bg-[#b8841f] text-[rgb(3,7,8)] font-bold text-sm rounded-full transition-all uppercase tracking-wider hover:scale-105"
              >
                Fale Conosco
              </a>
              <a
                href="mailto:comercial@robertoguimaraeseventos.com.br"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 hover:border-[#C9962F]/50 text-[rgb(245,244,249)] hover:text-[#C9962F] font-semibold text-sm rounded-full transition-all uppercase tracking-wider"
              >
                <Mail size={16} />
                Enviar E-mail
              </a>
            </div>
          </div>

          <div
            ref={rightRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-700 delay-200 ${
              rightIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/rg%20eventos/img/noivos-elevando-noiva-em-festa-com-fumaca_1280x1920.webp"
                  alt="Casamento com efeitos especiais"
                  className="w-full h-64 sm:h-80 object-cover rounded-2xl"
                />
                <div className="flex flex-col gap-4">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/rg%20eventos/img/casal-dancando-vestido-azul-palco-iluminado_853x1280.webp"
                    alt="Casal dançando em evento iluminado"
                    className="w-full h-[46%] object-cover rounded-2xl"
                  />
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/rg%20eventos/img/multidao-festa-noite-luzes-palco_1280x852.webp"
                    alt="Show noturno"
                    className="w-full h-[50%] object-cover rounded-2xl"
                  />
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 bg-[#C9962F] text-[rgb(3,7,8)] rounded-2xl px-6 py-4 shadow-2xl">
                <div className="text-3xl font-black">+30</div>
                <div className="text-xs font-bold uppercase tracking-wide">Anos no Mercado</div>
              </div>

              <div className="absolute -top-5 -right-5 bg-[rgb(3,7,8)] border border-white/10 rounded-2xl px-5 py-3 shadow-2xl">
                <div className="text-2xl font-black text-[rgb(245,244,249)]">4.7 ★</div>
                <div className="text-xs text-[rgb(245,244,249)]/60 mt-0.5">Google Reviews</div>
              </div>
            </div>

            <div className="mt-10 space-y-3">
              {[
                { icon: MapPin, text: 'Av. Adolino Bedin, 799 - Jardim das Américas, Sorriso - MT' },
                { icon: Clock, text: 'Seg - Sex: 07:30 às 11:30 · 13:30 às 17:30' },
                { icon: Mail, text: 'comercial@robertoguimaraeseventos.com.br' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3 text-[rgb(245,244,249)]/60 text-sm">
                  <Icon size={16} className="text-[#C9962F] shrink-0 mt-0.5" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Check, CreditCard, Lock, ShieldCheck } from 'lucide-react';
import CTAButton from './CTAButton';
import Reveal from './Reveal';

const included = [
  'Espaço para tirar dúvidas ao longo do processo',
  'Material de apoio em PDF em todas as aulas',
  'Acesso ao curso por 1 ano',
  'Receba qualquer atualização que tiver no curso durante o período de acesso',
  'Conteúdo com foco em aplicação prática',
  'Certificado de conclusão ao final do curso',
];

export default function Offer() {
  return (
    <section id="offer" className="bg-brand-brown text-white py-20 md:py-28 relative overflow-hidden grain">
      <Reveal className="max-w-5xl mx-auto px-4 md:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.05]">
            Acesso ao<span className="italic font-normal text-white/70"> TRC</span>
          </h2>
        </div>
        <div className="relative bg-white/[0.05] border border-white/12 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-[1.15fr_1fr]">
            <div className="p-7 md:p-10 md:border-r border-white/10">
              <p className="text-xs uppercase tracking-[0.2em] text-white/55 font-semibold mb-6">
                O que está incluso
              </p>
              <ul className="space-y-3.5">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      size={19}
                      strokeWidth={2.5}
                      className="lucide lucide-check text-white/45 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-white/90 text-[15px] md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-7 md:p-10 bg-white/[0.03] flex flex-col justify-center border-t md:border-t-0 border-white/10">
              <div className="flex items-baseline gap-2">
                <span className="text-white/55 text-xl">R$</span>
                <span className="font-display text-6xl md:text-7xl font-bold text-white leading-none tabular-nums">
                  427
                </span>
                <span className="text-white/55 text-2xl">,00</span>
              </div>
              <div className="flex items-center gap-2 mt-3 text-sm text-white/70">
                <CreditCard size={15} className="lucide lucide-credit-card " />
                <span>Pix à vista ou cartão em até 12x</span>
              </div>
              <div className="mt-8">
                <CTAButton label="Quero me inscrever" extraClasses="w-full" />
                <div className="flex items-center justify-center gap-1.5 text-white/45 text-xs mt-4">
                  <Lock size={11} className="lucide lucide-lock " /> Pagamento 100% seguro via Kiwify
                </div>
                <p className="text-center text-white/35 text-[11px] mt-1">
                  Acesso liberado após a confirmação do pagamento
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-5 bg-white/[0.05] border border-white/12 rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6 p-7 md:p-9">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/[0.06] flex items-center justify-center">
              <ShieldCheck size={28} strokeWidth={1.75} className="lucide lucide-shield-check text-white/75" />
            </div>
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight">Garantia de 7 dias</h3>
              <p className="text-base text-white/70 mt-3 leading-relaxed">
                Você pode testar o curso dentro do prazo de garantia e solicitar reembolso caso não esteja
                satisfeito.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

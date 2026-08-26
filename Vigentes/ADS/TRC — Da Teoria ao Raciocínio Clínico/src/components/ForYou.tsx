import { Check, X } from 'lucide-react';
import Reveal from './Reveal';

const forYou = [
  'É psicólogo recém-formado e ainda não tem segurança na clínica',
  'Está iniciando na clínica e sente dificuldade de estruturar sessões',
  'Domina a teoria, mas trava na aplicação prática',
  'Sente que fica perdido durante as sessões',
  'Se sente inseguro na condução das sessões',
  'Quer desenvolver raciocínio clínico',
];

const notForYou = [
  'Já é experiente e se sente seguro na condução de sessões',
  'Busca apenas conteúdo teórico',
  'Não pretende atuar na clínica',
  'Não quer colocar o conteúdo em prática',
];

export default function ForYou() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Reveal className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl text-brand-brown font-bold leading-[1.1]">
            Este curso<span className="italic font-normal text-brand-brown/70"> é para você?</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 mt-14">
          <div className="relative rounded-2xl bg-brand-beige border border-brand-brown/15 p-7 md:p-9">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-brown text-white flex items-center justify-center">
                <Check size={20} strokeWidth={3} className="lucide lucide-check " />
              </div>
              <h3 className="font-display text-xl md:text-2xl text-brand-brown font-semibold">É pra você se…</h3>
            </div>
            <ul className="space-y-3.5">
              {forYou.map((item) => (
                <li key={item} className="flex items-start gap-3 text-brand-brown">
                  <Check
                    size={18}
                    strokeWidth={2.5}
                    className="lucide lucide-check text-brand-brown/55 flex-shrink-0 mt-1"
                  />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl bg-brand-beige/40 border border-brand-brown/10 p-7 md:p-9">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-gray/30 text-white flex items-center justify-center">
                <X size={20} strokeWidth={3} className="lucide lucide-x " />
              </div>
              <h3 className="font-display text-xl md:text-2xl text-brand-gray font-semibold">Não é pra você se…</h3>
            </div>
            <ul className="space-y-3.5">
              {notForYou.map((item) => (
                <li key={item} className="flex items-start gap-3 text-brand-brown/75">
                  <X
                    size={18}
                    strokeWidth={2.5}
                    className="lucide lucide-x text-brand-gray flex-shrink-0 mt-1"
                  />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

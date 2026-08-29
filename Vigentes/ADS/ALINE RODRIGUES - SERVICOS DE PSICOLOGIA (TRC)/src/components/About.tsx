import Reveal from './Reveal';

export default function About() {
  return (
    <section id="sobre" className="bg-white py-20 md:py-28 relative overflow-hidden">
      <Reveal className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-brand-brown/10 shadow-xl shadow-brand-brown/10 bg-white">
              <img
                src="https://storage.lucasmendes.dev/caroba/curso-aline-rodrigues/alteracoes/AlineComprimido4.jpeg"
                alt="Aline Rodrigues, psicóloga clínica"
                loading="lazy"
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-3xl md:text-5xl text-brand-brown font-bold leading-[1.1]">
              Quem é<span className="italic font-normal text-brand-brown/70"> Aline Rodrigues?</span>
            </h2>
            <div className="space-y-4 text-brand-gray leading-relaxed mt-7 text-[15px] md:text-base">
              <p>
                Psicóloga formada pela Pontifícia Universidade Católica de Goiás (PUC-GO), com pós-graduação em
                Neurociências e Comportamento pela PUC-RS, em Terapia Comportamental Dialética (DBT) pelo Instituto
                VilaElo e em Psicoterapias Baseadas em Evidências pelo FLNC. Conta também com formações em Terapia
                Cognitivo-Comportamental (TCC) pelo <strong className="text-brand-brown">Beck Institute (EUA)</strong>.
              </p>
              <p>
                Possui mais de <strong className="text-brand-brown">7 anos de experiência</strong> clínica atendendo
                pacientes com diferentes demandas e{' '}
                <strong className="text-brand-brown">atua há mais de 3 anos como supervisora de psicólogos</strong>.
              </p>
            </div>
            <p className="flex items-start gap-2 text-base md:text-lg text-brand-brown font-medium mt-6">
              <span className="text-brand-accent mt-0.5">→</span>E agora criadora do TRC — Da Teoria ao Raciocínio
              Clínico.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

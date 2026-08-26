import { Shield, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-black relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://storage.lucasmendes.dev/site-sp/lima%20advocacia/img/fundo-preto-marmoreado-logo-lima-advocacia_1080x1920.webp')",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll-left">
            <div className="relative">
              <div className="absolute -inset-4 border border-[#A1825A]/20 rounded-sm" />
              <img
                src="https://storage.lucasmendes.dev/site-sp/lima%20advocacia/img/fachada-escritorio-advocacia-lima-casa-cinza_960x1280.webp"
                alt="Fachada do Escritório Lima Advocacia"
                className="w-full h-[480px] object-cover rounded-sm"
              />
              <div className="absolute bottom-6 -right-6 bg-[#A1825A] text-white p-6 rounded-sm shadow-xl hidden sm:block">
                <p className="font-serif text-3xl font-bold">3+</p>
                <p className="font-sans text-xs tracking-widest uppercase mt-1 text-white/80">
                  Anos de Atuação
                </p>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll-right">
            <p className="font-sans text-xs tracking-[0.4em] text-[#A1825A] uppercase mb-3">
              Sobre o Escritório
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-6 leading-tight">
              Fundada sobre Princípios de{' '}
              <span className="gold-text-gradient">Ética e Excelência</span>
            </h2>
            <div className="section-divider mb-8" style={{ margin: '0 0 2rem' }} />

            <p className="font-sans text-[#BBB39D] leading-relaxed mb-5 text-base">
              A Lima Advocacia foi fundada em janeiro de 2022, em Crixás/GO, pelos advogados{' '}
              <strong className="text-white">Gabriel Henrique de Lima Rodrigues</strong> e{' '}
              <strong className="text-white">Alexandre Santana Xavier de Lima</strong> — especialistas em
              Direito do Trabalho e Direito Previdenciário.
            </p>
            <p className="font-sans text-[#BBB39D] leading-relaxed mb-8 text-base">
              Nascemos com o propósito de oferecer assessoria jurídica séria e técnica, com análise
              individualizada de cada caso. Nosso compromisso é apresentar ao cliente uma visão
              realista da demanda, com orientação responsável e dedicação total à entrega de
              resultados concretos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {[
                {
                  Icon: Shield,
                  title: 'Ética & Transparência',
                  desc: 'Clareza desde o primeiro contato',
                },
                {
                  Icon: Award,
                  title: 'Especialização',
                  desc: 'Pós-graduados em Direito do Trabalho e Previdenciário',
                },
                {
                  Icon: Users,
                  title: 'Atendimento Humanizado',
                  desc: 'Você é mais que um processo',
                },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-sm gold-gradient flex items-center justify-center mb-1">
                    <Icon size={18} className="text-white" />
                  </div>
                  <p className="font-serif text-sm text-white">{title}</p>
                  <p className="font-sans text-xs text-[#BBB39D] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <a
              href="#contato"
              className="inline-block gold-gradient text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-sm tracking-wider uppercase hover:opacity-90 transition-opacity duration-300"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

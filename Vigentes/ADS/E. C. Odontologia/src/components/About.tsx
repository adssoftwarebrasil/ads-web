const IMG_BASE = 'https://storage.lucasmendes.dev/site-sp/e%20c%20odontologia/img/';

export default function About() {
  return (
    <section id="sobre" className="bg-black text-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-white/40" />
              <span className="text-white/50 text-xs tracking-[0.25em] uppercase font-medium">
                Nossa História
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8">
              Referência em
              <br />
              <span className="italic font-light text-gray-400">equipamentos</span>
              <br />
              odontológicos em Belém
            </h2>

            <div className="space-y-5 text-gray-400 text-base leading-relaxed">
              <p>
                A <strong className="text-white">E.C. Odontologia Representações</strong> nasceu
                da visão de levar ao mercado paraense equipamentos odontológicos de alta qualidade,
                unindo tecnologia de ponta ao atendimento próximo e especializado.
              </p>
              <p>
                Atuamos na comercialização de equipamentos completos para clínicas e
                consultórios — cadeiras odontológicas, compressores, autoclaves, aparelhos de
                raio-X e sensores digitais — sempre com foco em <strong className="text-white">
                qualidade, confiabilidade e suporte técnico</strong>.
              </p>
              <p>
                Nosso compromisso vai além da venda: acompanhamos cada profissional na escolha
                do equipamento ideal, garantindo que o investimento traga resultado real no
                dia a dia da clínica.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { label: 'Sede', value: 'Belém, Pará' },
                { label: 'Atendimento', value: 'Seg–Sex\n08h às 18h' },
                { label: 'Especialidade', value: 'Equipamentos Odontológicos' },
                { label: 'Foco', value: 'Clínicas & Consultórios' },
              ].map((item) => (
                <div key={item.label} className="border-l border-white/20 pl-4">
                  <div className="text-white/40 text-xs tracking-widest uppercase mb-1">
                    {item.label}
                  </div>
                  <div className="text-white text-sm font-medium whitespace-pre-line">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={`${IMG_BASE}dois-homens-sorrindo-feira-negocios-olsen_4284x5712.webp`}
                    alt="Equipe E.C. Odontologia em feira de negócios"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={`${IMG_BASE}pessoas-equipamento-odontologico-feira-stand_4000x6000.webp`}
                    alt="Stand E.C. Odontologia em evento"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="space-y-3 mt-8">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={`${IMG_BASE}equipe-tres-pessoas-sorrindo-em-consultorio-odontologico_864x1080.webp`}
                    alt="Equipe em consultório odontológico"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={`${IMG_BASE}homem-de-oculos-tirando-selfie-em-evento_2062x3664.webp`}
                    alt="Representante E.C. Odontologia em evento"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
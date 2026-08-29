import { CheckCircle2 } from 'lucide-react';

const values = [
  'Ética e transparência em cada etapa do processo',
  'Atendimento humanizado e próximo ao cliente',
  'Equipe jovem, dinâmica e altamente qualificada',
  'Expertise em áreas complexas do Direito',
  'Atuação em todo o estado de Goiás',
  'Resultados sólidos para pessoas e empresas',
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Araripe Chagas Advogados"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003F5C]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://storage.lucasmendes.dev/site-sp/araripe%20chagas/img/logo-sem-fundo.webp"
                      alt="Logo"
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <p className="text-[#003F5C] font-bold text-base">Araripe Chagas</p>
                      <p className="text-[#003F5C]/60 text-sm">Advogados Associados</p>
                    </div>
                    <div className="ml-auto text-right">
                      <p className="text-[#C9A84C] font-bold text-2xl">5.0</p>
                      <p className="text-[#003F5C]/50 text-xs">Google Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#EAE6AE] rounded-2xl -z-10 opacity-60" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#003F5C]/10 rounded-2xl -z-10" />

            <div className="absolute top-8 -right-4 bg-[#C9A84C] text-[#003F5C] rounded-xl p-4 shadow-xl z-20">
              <p className="text-3xl font-bold">+9</p>
              <p className="text-xs font-semibold">Anos de Experiência</p>
            </div>
          </div>

          <div>
            <span className="inline-block text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">
              Quem somos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#003F5C] mb-6 leading-tight">
              Advocacia com propósito,{' '}
              <span className="text-[#C9A84C]">resultados reais.</span>
            </h2>
            <p className="text-[#003F5C]/65 text-lg leading-relaxed mb-6">
              A <strong className="text-[#003F5C]">Araripe Chagas</strong> é um escritório de advocacia fundado em 2016, com atuação nas áreas cível, trabalhista, empresarial e de propriedade industrial. Carregamos no cerne do nosso modelo de trabalho a cultura de valores humanos e o profissionalismo.
            </p>
            <p className="text-[#003F5C]/65 leading-relaxed mb-8">
              Nossa equipe é vocacionada para a prestação de serviços jurídicos de qualidade, com sócios que possuem anos de experiência em consultoria e advocacia empresarial, direito do trabalho, direito bancário, direito do consumidor e processos de recuperação judicial e falências.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {values.map((value) => (
                <div key={value} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#C9A84C] flex-shrink-0 mt-0.5" />
                  <span className="text-[#003F5C]/75 text-sm leading-snug">{value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="http://wa.me/556281124626"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#003F5C] hover:bg-[#004f70] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                Falar Conosco
              </a>
              <a
                href="tel:+556281124626"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#003F5C]/30 hover:border-[#003F5C] text-[#003F5C] font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                (62) 98112-4626
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

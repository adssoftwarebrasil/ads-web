import { ShieldCheck, Users, Star, Clock } from 'lucide-react';

const DIFERENCIAIS = [
  {
    icon: ShieldCheck,
    title: 'Qualidade Garantida',
    description: 'Trabalhamos com fornecedores de confiança para garantir produtos de alta qualidade.',
  },
  {
    icon: Users,
    title: 'Atendimento Personalizado',
    description: 'Nossa equipe conhece as necessidades reais do produtor rural e do construtor.',
  },
  {
    icon: Star,
    title: 'Experiência no Campo',
    description: 'Construída com base na experiência prática de quem vive e conhece o campo.',
  },
  {
    icon: Clock,
    title: 'Comodidade e Praticidade',
    description: 'Horários convenientes e localização estratégica na Vila Mineira para atender você.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="inline-block text-[#006633] font-semibold text-sm uppercase tracking-widest mb-3">
              Nossa História
            </span>
            <h2 className="font-heading font-black text-3xl md:text-5xl text-[#663300] mb-6 leading-tight">
              Agro, Campo e<br />
              <span className="text-[#006633]">Construção</span> em um<br />
              Só Lugar
            </h2>
            <div className="w-16 h-1 bg-[#663300] rounded-full mb-8" />

            <div className="space-y-5 text-gray-600 leading-relaxed text-base md:text-lg">
              <p>
                A <strong className="text-[#663300]">Polizel Agroferragens e Materiais de Construção</strong> nasce
                com um propósito claro: oferecer qualidade, confiança e praticidade para quem vive e trabalha
                no campo e na cidade.
              </p>
              <p>
                Localizada em uma região de forte tradição agropecuária, nossa empresa foi construída com base
                na experiência real do produtor rural, entendendo na prática as necessidades do dia a dia —
                seja na fazenda, na obra ou no comércio.
              </p>
              <p>
                Com um mix completo de <strong className="text-[#006633]">materiais de construção</strong> e{' '}
                <strong className="text-[#006633]">insumos pecuários</strong>, somos o parceiro ideal para
                quem precisa de agilidade, variedade e atendimento de qualidade em Rondonópolis e região.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5566999996760"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#006633] hover:bg-[#005a2d] text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 shadow-md justify-center sm:justify-start"
              >
                Entre em Contato
              </a>
              <a
                href="https://www.instagram.com/polizelagroferragensematerias"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-[#663300] text-[#663300] hover:bg-[#663300] hover:text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 justify-center sm:justify-start"
              >
                Ver no Instagram
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://images.pexels.com/photos/5025678/pexels-photo-5025678.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Loja de materiais de construção e agropecuários"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3a1c00]/40 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
              <p className="font-heading font-black text-3xl text-[#663300]">+500</p>
              <p className="text-gray-500 text-sm font-medium">Clientes Satisfeitos</p>
            </div>

            <div className="absolute -top-6 -right-6 bg-[#006633] rounded-2xl shadow-xl p-5">
              <p className="font-heading font-black text-3xl text-white">7h–17h</p>
              <p className="text-green-100 text-sm font-medium">Seg a Sábado</p>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFERENCIAIS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-start gap-4 p-6 rounded-2xl bg-[#fdf6f0] border border-[#e8c9a0] hover:border-[#663300]/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#663300] flex items-center justify-center">
                  <Icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[#663300] mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

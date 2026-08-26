import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: '"Excelente atendimento! Os produtos são de ótima qualidade e a entrega foi rápida. Recomendo!"',
    initial: 'M',
    name: 'Maria Souza',
    role: 'Gerente de Compras',
  },
  {
    text: '"Fiquei muito satisfeito com o serviço. A equipe é muito atenciosa e sempre pronta para ajudar."',
    initial: 'J',
    name: 'João Pereira',
    role: 'Engenheiro Industrial',
  },
  {
    text: '"Os produtos atendem perfeitamente nossas necessidades. Sempre que precisamos, contamos com eles."',
    initial: 'C',
    name: 'Carla Mendes',
    role: 'Supervisora de Manutenção',
  },
  {
    text: '"Comprei diversas conexões e válvulas, e não me arrependo. Super recomendo a RA Loja das Conexões!"',
    initial: 'F',
    name: 'Fernando Lima',
    role: 'Proprietário',
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="py-20 lg:py-32 bg-gradient-to-br from-[rgb(45,48,145)] via-blue-900 to-[rgb(45,48,145)] relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[rgb(248,232,48)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-[rgb(248,232,48)] font-bold tracking-widest uppercase text-sm mb-4 block">
            O que dizem sobre nós
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Depoimentos dos Nossos <span className="text-[rgb(248,232,48)]">Clientes</span>
          </h2>
          <div className="w-24 h-1.5 bg-[rgb(248,232,48)] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A satisfação dos nossos clientes é a nossa maior conquista
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-white/20"
            >
              <div className="absolute -top-4 -right-4 bg-[rgb(248,232,48)] rounded-full p-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Quote size={28} className="text-[rgb(45,48,145)]" />
              </div>
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className="text-[rgb(248,232,48)] fill-[rgb(248,232,48)]" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed font-medium italic">{t.text}</p>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="w-14 h-14 bg-gradient-to-br from-[rgb(45,48,145)] to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {t.initial}
                </div>
                <div>
                  <p className="font-bold text-[rgb(45,48,145)] text-lg">{t.name}</p>
                  <p className="text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-md rounded-3xl px-8 py-6 border border-white/20">
            <p className="text-white text-lg font-semibold">
              Mais de <span className="text-[rgb(248,232,48)] font-bold text-2xl">100+ clientes</span> confiam em nossos serviços
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

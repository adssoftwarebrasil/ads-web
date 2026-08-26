import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: '"A Prime Têxtil é minha fornecedora preferida! A qualidade dos tecidos é excepcional e o atendimento é sempre atencioso. Encontro tudo que preciso para meus projetos de decoração."',
    name: 'Ana Paula Silva',
    role: 'Decoradora de Interiores',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana',
  },
  {
    text: '"Trabalho com a Prime há mais de 5 anos. A variedade de tecidos para tapeçaria automotiva é impressionante e a entrega é sempre rápida. Recomendo para todos os colegas do setor!"',
    name: 'Roberto Mendes',
    role: 'Proprietário de Tapeçaria Automotiva',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Roberto',
  },
  {
    text: '"As cortinas motorizadas que adquiri na Prime Têxtil superaram todas as minhas expectativas. Produto de primeira linha e equipe muito profissional. Voltarei com certeza!"',
    name: 'Carla Rodrigues',
    role: 'Arquiteta',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carla',
  },
];

const avatars = [
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Roberto',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Carla',
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold tracking-wide uppercase text-sm">
            Depoimentos
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            O Que Nossos{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Clientes Dizem
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação de quem confia na Prime Têxtil
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100 relative"
            >
              <div className="absolute -top-4 -left-4 bg-gradient-to-br from-emerald-500 to-teal-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="lucide lucide-quote text-white" size={24} />
              </div>
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="lucide lucide-star text-yellow-400 fill-yellow-400"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">{t.text}</p>
              <div className="flex items-center space-x-4 pt-6 border-t border-gray-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 p-0.5"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 px-6 py-3 rounded-full">
            <div className="flex -space-x-2">
              {avatars.map((a, i) => (
                <img
                  key={i}
                  src={a}
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <p className="text-gray-700 font-semibold">
              +500 clientes satisfeitos em todo Mato Grosso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

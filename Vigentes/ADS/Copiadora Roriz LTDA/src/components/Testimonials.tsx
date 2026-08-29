import { Star } from 'lucide-react';

interface Testimonial {
  initials: string;
  avatarBg: string;
  name: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    initials: 'JS',
    avatarBg: 'bg-blue-600',
    name: 'João Silva',
    text: '"Só Cópias sempre entrega no prazo e com qualidade excepcional. Recomendo para empresas que buscam profissionalismo!"',
  },
  {
    initials: 'MO',
    avatarBg: 'bg-orange-600',
    name: 'Maria Oliveira',
    text: '"Os brindes personalizados fizeram sucesso no nosso evento corporativo. Excelente serviço e atendimento impecável!"',
  },
  {
    initials: 'CS',
    avatarBg: 'bg-green-600',
    name: 'Carlos Santos',
    text: '"Ótimo atendimento e produtos de primeira linha. Sem dúvida a melhor opção em Porto Velho para produtos personalizados!"',
  },
  {
    initials: 'AC',
    avatarBg: 'bg-purple-600',
    name: 'Ana Costa',
    text: '"A equipe da Só Cópias é super atenciosa e os produtos são incríveis! Sempre que preciso de algo personalizado, é minha primeira escolha."',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O Que Nossos <span className="text-blue-800">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depoimentos reais de quem confia no nosso trabalho
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`${t.avatarBg} w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold`}
                >
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{t.name}</h4>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed text-lg">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

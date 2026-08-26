import { Quote, Star } from 'lucide-react';

interface Testimonial {
  initial: string;
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    initial: 'G',
    name: 'Guilherme Polito Espósito',
    role: 'Cliente',
    text: '"Produtos TOP! Vendedor Thiago muito atencioso."',
  },
  {
    initial: 'M',
    name: 'Maria Silva Santos',
    role: 'Proprietária - Mercado Central',
    text: '"A Veranita é nossa parceira há mais de 15 anos. Produtos de qualidade excepcional e entrega sempre pontual. Nossos clientes adoram!"',
  },
  {
    initial: 'J',
    name: 'João Carlos Oliveira',
    role: 'Gerente de Compras - Rede SuperBom',
    text: '"Excelente custo-benefício e variedade de produtos. O atendimento é diferenciado, sempre prontos para atender nossas necessidades."',
  },
  {
    initial: 'A',
    name: 'Ana Paula Ferreira',
    role: 'Chef de Cozinha',
    text: '"Uso os temperos e especiarias Veranita no meu restaurante há anos. A qualidade é incomparável e meus clientes sempre elogiam o sabor dos pratos."',
  },
  {
    initial: 'R',
    name: 'Roberto Mendes',
    role: 'Proprietário - Empório Sabor & Cia',
    text: '"Produtos tradicionais com qualidade garantida. A Veranita nunca decepciona! Recomendo de olhos fechados."',
  },
  {
    initial: 'C',
    name: 'Carla Rodrigues',
    role: 'Gerente - Supermercado São José',
    text: '"Parceria de confiança! Os produtos Veranita têm alta rotatividade nas nossas prateleiras. Nossos consumidores já conhecem e confiam na marca."',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            O que Dizem Nossos <span className="text-[rgb(238,29,35)]">Clientes</span>
          </h2>
          <p className="text-lg text-gray-600">
            A confiança de quem trabalha conosco é o nosso maior reconhecimento
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <Quote className="lucide lucide-quote absolute top-6 right-6 w-12 h-12 text-[rgb(0,173,239)]/10" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[rgb(0,173,239)] to-[rgb(46,49,146)] flex items-center justify-center text-white font-bold text-xl">
                  {t.initial}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="lucide lucide-star w-5 h-5 fill-[rgb(253,241,0)] text-[rgb(253,241,0)]"
                  />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed italic">{t.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Junte-se aos centenas de clientes satisfeitos</p>
          <a
            href="http://wa.me/5516997516375"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[rgb(238,29,35)] to-[rgb(238,29,35)]/90 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Faça seu Pedido Agora
          </a>
        </div>
      </div>
    </section>
  );
}

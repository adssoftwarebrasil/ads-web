import { Quote, Star } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
  city: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"Procura um lugar com produtos de alta qualidade, beleza, conforto e um ótimo atendimento? É na Anjos Colchões e Sofás."',
    name: 'Gelian Viana',
    city: 'Itupiranga/PA',
  },
  {
    text: '"Condições de pagamento bons e o prazo de entrega exatamente como eu precisava."',
    name: 'Daniel Fernandes',
    city: 'Nova Ipixuna/PA',
  },
  {
    text: '"O produto chegou antes do prazo e é exatamente como eu esperava."',
    name: 'Ana Caixeiro',
    city: 'São Domingos do Araguaia/PA',
  },
  {
    text: '"Ótimo atendimento e com muitas opções de produtos."',
    name: 'Nathália Figueiredo',
    city: 'São João do Araguaia/PA',
  },
  {
    text: '"A melhor loja do gênero de Marabá."',
    name: 'Marcelo Martins',
    city: 'Marabá/PA',
  },
  {
    text: '"Preço justo e de qualidade."',
    name: 'Ricardo Silva',
    city: 'Itupiranga/PA',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#D1AD6E] to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#004A69] mb-4">
            Depoimentos
          </h2>
          <p className="text-xl text-gray-600">Colecionando boas experiências</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative"
            >
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-[#D1AD6E]" />
              </div>
              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#D1AD6E] text-[#D1AD6E]"
                    />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  {item.text}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold text-[#004A69]">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#004A69] to-[#003D5C] text-white px-8 py-4 rounded-full shadow-lg">
            <Star className="w-5 h-5 fill-[#D1AD6E] text-[#D1AD6E]" />
            <span className="font-bold text-lg">Avaliação Média:</span>
            <span className="text-2xl font-bold text-[#D1AD6E]">5.0</span>
            <span className="text-sm text-gray-300">/ 5.0</span>
          </div>
        </div>
      </div>
    </section>
  );
}

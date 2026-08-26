import { MapPin } from 'lucide-react';

const regions = ['Grande Goiânia', 'Goiás', 'Todo o Brasil'];

const offerings = [
  'Locação de tendas',
  'Venda de tendas',
  'Reforma de tendas',
  'Troca de lona de tenda',
  'Toldos',
  'Aluguel de tendas',
  'Tendas vendas e locações',
];

export default function Coverage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-[rgb(211,14,9)] rounded-full flex items-center justify-center">
              <MapPin className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">Onde Atendemos</h2>
          <div className="w-24 h-1 bg-[rgb(211,14,9)] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Atuamos em todo o Brasil, com foco especial na Grande Goiânia e região. Nossos produtos de
            pronta entrega garantem agilidade na entrega para qualquer localidade.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {regions.map((region) => (
              <span
                key={region}
                className="bg-[rgb(211,14,9)] text-white px-6 py-3 rounded-full font-semibold text-lg"
              >
                {region}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-gray-50 rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl font-bold text-black text-center mb-8">Nossos Serviços e Produtos</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {offerings.map((item) => (
              <span
                key={item}
                className="bg-white border-2 border-[rgb(211,14,9)] text-black px-5 py-2 rounded-lg font-medium hover:bg-[rgb(211,14,9)] hover:text-white transition-all"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

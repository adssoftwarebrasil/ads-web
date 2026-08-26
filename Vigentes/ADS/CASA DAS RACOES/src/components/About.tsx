import { Award, Heart, Users, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Award, value: '10+', label: 'Anos de experiência' },
  { icon: Users, value: '3', label: 'Unidades em PVA' },
  { icon: Heart, value: '24h', label: 'Atendimento na Filial Buritis' },
  { icon: TrendingUp, value: '100%', label: 'Compromisso com seu pet' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://storage.lucasmendes.dev/site-sp/casa%20das%20racoes/img/loja-de-animais-sacos-racao-empilhados_4032x3024.webp"
                alt="Loja Casa das Rações"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-green-600 text-white rounded-2xl p-5 shadow-xl">
              <p className="text-3xl font-extrabold leading-none">10</p>
              <p className="text-green-100 text-sm font-medium mt-1">Anos no mercado</p>
            </div>

            <div className="absolute -top-4 -left-4 sm:-left-6 bg-orange-500 text-white rounded-2xl p-4 shadow-xl">
              <p className="text-2xl font-extrabold leading-none">+3k</p>
              <p className="text-orange-100 text-xs font-medium mt-0.5">Clientes satisfeitos</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Nossa História
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
              Fundados com amor por
              <span className="text-green-600"> todos os animais</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Há mais de 10 anos, a Casa das Rações nasceu com um propósito simples e poderoso:
              oferecer o melhor cuidado para os animais de Primavera do Leste — do filhote curioso
              ao veterano cheio de história.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Hoje somos referência na cidade com 3 unidades completas, oferecendo rações de alta
              qualidade, acessórios, farmácia veterinária, vacinas, cirurgias e clínica
              especializada.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Na Filial Buritis, contamos com amplo Pet Shop, 3 consultórios veterinários e em
              breve um Hospital Veterinário com salas cirúrgicas e internação 24h. Delivery
              disponível em toda Primavera do Leste.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 hover:bg-green-50 transition-colors"
                >
                  <div className="bg-green-100 rounded-lg p-2 shrink-0">
                    <Icon size={18} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xl font-extrabold text-gray-900 leading-none">{value}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

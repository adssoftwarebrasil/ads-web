import { Award, Users, Heart, TrendingUp } from 'lucide-react';

const stats: { icon: typeof Award; value: string; label: string }[] = [
  { icon: Award, value: '6+', label: 'Anos de Tradição' },
  { icon: Users, value: '1000+', label: 'Clientes Satisfeitos' },
  { icon: Heart, value: '5★', label: 'Avaliação' },
  { icon: TrendingUp, value: '100%', label: 'Crescimento' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://storage.lucasmendes.dev/site-sp/hiper%20neto%2Fimg%2Fsupermercado-caixas-pessoas.webp"
                alt="Atendimento Hiper Neto"
                className="rounded-2xl shadow-xl w-full h-64 object-cover"
              />
              <img
                src="https://storage.lucasmendes.dev/site-sp/hiper%20neto%2Fimg%2Fsupermercado-rua.webp"
                alt="Fachada Hiper Neto"
                className="rounded-2xl shadow-xl w-full h-64 object-cover mt-8"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[rgb(238,27,34)] text-white p-6 rounded-2xl shadow-2xl hidden sm:block">
              <p className="text-4xl font-bold">6+</p>
              <p className="text-sm">Anos de experiência</p>
            </div>
          </div>
          <div>
            <div className="inline-block bg-red-50 text-[rgb(238,27,34)] px-4 py-2 rounded-full mb-4 font-semibold text-sm">
              SOBRE NÓS
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Tradição e qualidade em <span className="text-[rgb(238,27,34)]">Campinorte</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Seja bem-vindo ao Hiper Neto Supermercado, a sua escolha número um em Campinorte e
              região! Desde 2018, somos a definição de conveniência, oferecendo uma gama completa de
              serviços para suas compras.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Com um açougue que oferece cortes frescos e de qualidade, um hortifrúti diversificado e
              cheio de opções saudáveis, e uma padaria repleta de delícias recém-saídas do forno.
              Venha nos fazer uma visita e experimente a excelência do Hiper Neto Supermercado, onde a
              praticidade e a qualidade se encontram.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    <Icon size={32} className="text-[rgb(238,27,34)] mb-3" />
                    <p className="text-3xl font-bold text-gray-900 mb-1">{s.value}</p>
                    <p className="text-gray-600 text-sm">{s.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

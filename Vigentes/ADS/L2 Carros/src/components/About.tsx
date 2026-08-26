import { History, Users, Target, TrendingUp } from 'lucide-react';

const stats = [
  { icon: History, value: '20+', label: 'Anos de Experiência' },
  { icon: Users, value: '1000+', label: 'Clientes Satisfeitos' },
  { icon: Target, value: '100%', label: 'Transparência' },
  { icon: TrendingUp, value: 'Top', label: 'Em Divinópolis' },
];

const diferenciais = [
  { title: 'Ética e Transparência', text: 'Negociações claras, sem letras miúdas ou surpresas desagradáveis' },
  { title: 'Atendimento Humanizado', text: 'Nossa equipe pensa primeiro no seu conforto e nas suas condições' },
  { title: 'Pós-Venda Excepcional', text: 'Continuamos cuidando de você mesmo após a compra' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Nossa História
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Transformando Sonhos em Realidade Desde 2021
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              A <strong>L2 Carros</strong> foi fundada em 2021 por <strong>Lincoln Leonardo</strong>, CEO com mais de 20 anos de experiência no setor automotivo. Nascemos com um propósito claro: trazer <strong>ética e transparência</strong> para cada negociação, proporcionando a melhor experiência na realização do sonho do carro próprio.
            </p>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Somos especialistas em vendas de veículos novos e seminovos, oferecendo também serviços de trocas, consignação, financiamentos e consórcios. Nosso compromisso é com você, cliente, garantindo que cada etapa do processo seja transparente, justa e focada nas suas necessidades.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <s.icon className="w-8 h-8 text-red-600 mb-3" />
                  <h3 className="font-bold text-2xl text-black mb-1">{s.value}</h3>
                  <p className="text-gray-600 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-red-600 rounded-3xl transform rotate-3"></div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/l2%20carros%2Fimg%2Fhero-fachada-loja-background-paralax.webp"
                alt="Equipe L2 Carros"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-20 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Nossos Diferenciais</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {diferenciais.map((d) => (
              <div key={d.title}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{d.title}</h4>
                  <p className="text-gray-100">{d.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

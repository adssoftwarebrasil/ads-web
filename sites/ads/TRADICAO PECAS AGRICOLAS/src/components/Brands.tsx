import { CheckCircle2 } from 'lucide-react';

const brands = [
  {
    name: 'Case IH',
    items: ['Plantadeiras', 'Colheitadeiras', 'Pulverizadores', 'Tratores'],
  },
  {
    name: 'New Holland',
    items: [
      'Plantadeiras',
      'Colheitadeiras',
      'Pulverizadores',
      'Máquinas Agrícolas',
    ],
  },
  {
    name: 'CNH Industrial',
    items: ['Plataformas', 'Peças Originais', 'Componentes', 'Acessórios'],
  },
  {
    name: 'Momentum',
    items: ['Plantadeiras', 'Semeadoras', 'Tecnologia', 'Inovação'],
  },
  {
    name: 'Horsch',
    items: ['Plantadeiras', 'Pulverizadores', 'Cultivadores', 'Semeadoras'],
  },
  {
    name: 'Macdon',
    items: ['Plataformas', 'Segadoras', 'Enfardadeiras', 'Colheitadeiras'],
  },
];

const perks = [
  { title: 'Peças Originais', text: 'Garantia de qualidade e procedência' },
  { title: 'Estoque Completo', text: 'Ampla variedade de peças disponíveis' },
  { title: 'Entrega Rápida', text: 'Agilidade para não parar sua produção' },
];

export default function Brands() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[rgb(173,132,84)] font-semibold text-sm uppercase tracking-widest mb-4 block">
            Marcas Atendidas
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[rgb(1,52,47)] mb-6">
            Trabalhamos com as Principais Marcas do Mercado
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Peças originais e de reposição certificadas para garantir o melhor
            desempenho das suas máquinas agrícolas
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {brands.map((b) => (
            <div
              key={b.name}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[rgb(221,183,120)]"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-[rgb(1,52,47)] group-hover:text-[rgb(173,132,84)] transition-colors">
                  {b.name}
                </h3>
                <CheckCircle2 className="w-6 h-6 text-[rgb(221,183,120)]" />
              </div>
              <div className="space-y-3">
                {b.items.map((item) => (
                  <div key={item} className="flex items-center text-gray-600">
                    <div className="w-1.5 h-1.5 bg-[rgb(173,132,84)] rounded-full mr-3"></div>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[rgb(1,52,47)] to-[rgb(1,52,47)]/90 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-[rgb(221,183,120)] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[rgb(173,132,84)] rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Não encontrou a marca que procura?
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco! Trabalhamos com diversas outras marcas e
              temos uma ampla rede de fornecedores.
            </p>
            <a
              href="https://wa.me/557736281005?text=Olá! Gostaria de saber sobre peças para outras marcas."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[rgb(221,183,120)] hover:bg-[rgb(173,132,84)] text-[rgb(1,52,47)] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Fale com Nossos Especialistas
            </a>
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {perks.map((p) => (
            <div key={p.title} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[rgb(221,183,120)] to-[rgb(173,132,84)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10 text-[rgb(1,52,47)]" />
              </div>
              <h4 className="text-xl font-bold text-[rgb(1,52,47)] mb-2">
                {p.title}
              </h4>
              <p className="text-gray-600">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

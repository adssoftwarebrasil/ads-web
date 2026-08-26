interface Differential {
  image: string;
  title: string;
  description: string;
  highlighted?: boolean;
  badge?: string;
}

const differentials: Differential[] = [
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/mundo%20das%20baterias%2Fimg%2FNossos%20contatos.jpeg',
    title: 'Plantão de Vendas',
    description: 'Plantão disponível para emergências',
    highlighted: true,
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/mundo%20das%20baterias%2Fimg%2Fbateria-moura-carro.webp',
    title: 'Moura Fácil',
    description: 'Atendimento via app Moura Fácil - horário comercial',
    badge: 'Parceiro Oficial',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/mundo%20das%20baterias%2Fimg%2Fservico-delivery-moto.webp',
    title: 'Atendimento Rural',
    description: 'Eletricista para fazendas com agendamento prévio',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/mundo%20das%20baterias%2Fimg%2Ftermo-garantia-bateria.webp',
    title: 'Garantia',
    description: 'Termos de garantia claros e transparentes',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="bg-[rgb(32,29,30)] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-white">
          Por que escolher o Mundo das Baterias?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {differentials.map((item) => (
            <div
              key={item.title}
              className={
                'bg-white rounded-xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-300 ' +
                (item.highlighted ? 'border-4 border-[rgb(234,29,34)]' : '')
              }
            >
              <div className="relative w-full h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10"></div>
                {item.badge && (
                  <div className="absolute top-4 right-4 bg-[rgb(246,234,9)] text-black px-4 py-2 rounded-full font-bold text-sm shadow-md z-10">
                    {item.badge}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[rgb(32,29,30)] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const WHATSAPP_NUMBER = '556231239052';

const vehicles = [
  {
    title: 'Carros e Veículos de Passeio',
    description: 'Sedans, SUVs, hatchbacks e demais veículos de passeio. Vistoria completa para transferência e seguro.',
    image: 'https://storage.lucasmendes.dev/site-sp/max-vision%2Fcarro-laranja-anuncio.webp',
    msg: 'Olá!%20Preciso%20de%20vistoria%20para%20meu%20carro.',
  },
  {
    title: 'Motocicletas',
    description: 'Motos de todos os modelos e cilindradas. Laudo específico para transferência e regularização.',
    image: 'https://storage.lucasmendes.dev/site-sp/max-vision%2Fmotocicleta-cinza-amarela-anuncio.webp',
    msg: 'Olá!%20Preciso%20de%20vistoria%20para%20minha%20motocicleta.',
  },
  {
    title: 'Caminhões e Utilitários',
    description: 'Caminhões, vans, pickups e veículos utilitários. Atendemos frotas e veículos de carga.',
    image: 'https://storage.lucasmendes.dev/site-sp/max-vision%2Fcaminhao-carro-moto-anuncio.webp',
    msg: 'Olá!%20Preciso%20de%20vistoria%20para%20meu%20caminhão%2Futilitário.',
  },
  {
    title: 'Jet Ski e Embarcações',
    description: 'Vistoria para jet ski e embarcações em reboque. Documentação e laudo para regularização.',
    image: 'https://storage.lucasmendes.dev/site-sp/max-vision%2Fjet-ski-reboque.webp',
    msg: 'Olá!%20Preciso%20de%20vistoria%20para%20jet%20ski%2Fembarcação.',
  },
];

export default function VehicleTypes() {
  return (
    <section id="veiculos" className="py-20 lg:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#e6282f]/10 text-[#e6282f] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Tipos de Veículos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Vistoriamos todo tipo de{' '}
            <span className="text-[#efcf05]">veículo</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Nossa estrutura está preparada para atender qualquer tipo de veículo, do carro popular ao caminhão.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden border border-gray-800 hover:border-[#efcf05]/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-black text-base mb-2 leading-tight">{vehicle.title}</h3>
                <p className="text-gray-300 text-xs leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                  {vehicle.description}
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${vehicle.msg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#efcf05] text-black font-bold px-4 py-2 rounded-lg text-xs hover:bg-yellow-400 transition-all duration-200 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                >
                  Agendar Vistoria
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

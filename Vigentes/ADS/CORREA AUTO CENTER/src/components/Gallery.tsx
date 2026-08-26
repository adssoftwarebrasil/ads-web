interface GalleryItem {
  src: string;
  title: string;
}

const items: GalleryItem[] = [
  { src: 'https://storage.lucasmendes.dev/site-sp/correa%20auto%20center%2Fimg%2Foficina-carros-elevador.webp', title: 'Oficina Moderna' },
  { src: 'https://storage.lucasmendes.dev/site-sp/correa%20auto%20center%2Fimg%2Fcaminhonete-prateada-elevador.webp', title: 'Atendimento Profissional' },
  { src: 'https://storage.lucasmendes.dev/site-sp/correa%20auto%20center%2Fimg%2Fcarro-oficina-elevador-lubrax.webp', title: 'Equipamentos de Qualidade' },
  { src: 'https://storage.lucasmendes.dev/site-sp/correa%20auto%20center%2Fimg%2Fvolante-scanner-carro-ford.webp', title: 'Diagnóstico com Scanner' },
  { src: 'https://storage.lucasmendes.dev/site-sp/correa%20auto%20center%2Fimg%2Fcarro-motor-pecas.webp', title: 'Manutenção de Motor' },
  { src: 'https://storage.lucasmendes.dev/site-sp/correa%20auto%20center%2Fimg%2Fcarro-prata-alinhamento.webp', title: 'Alinhamento de Precisão' },
  { src: 'https://storage.lucasmendes.dev/site-sp/correa%20auto%20center%2Fimg%2Fmotor-correia-dentada.webp', title: 'Troca de Correia Dentada' },
  { src: 'https://storage.lucasmendes.dev/site-sp/correa%20auto%20center%2Fimg%2Fcaminhonetes-elevadas-oficina.webp', title: 'Serviços para Picapes' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossa <span className="text-[rgb(207,30,37)]">Estrutura</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça nossa oficina equipada com tecnologia de ponta para atender seu veículo com
            excelência.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <img src={item.src} alt={item.title} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-[rgb(207,30,37)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

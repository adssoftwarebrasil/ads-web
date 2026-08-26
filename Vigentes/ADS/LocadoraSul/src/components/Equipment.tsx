import { ArrowRight } from 'lucide-react';

export default function Equipment() {
  const equipment = [
    {
      name: 'Alisadora de Concreto',
      image: 'https://storage.lucasmendes.dev/site-sp/locadorasul%2Falisadora%20de%20concreto.jpeg'
    },
    {
      name: 'Alisadora de Concreto 36',
      image: 'https://storage.lucasmendes.dev/site-sp/locadorasul%2Falisadora-de-concreto-36.jpg'
    },
    {
      name: 'Andaimes',
      image: 'https://storage.lucasmendes.dev/site-sp/locadorasul%2Fandaimes.jpeg'
    },
    {
      name: 'Compactador de Solo',
      image: 'https://storage.lucasmendes.dev/site-sp/locadorasul%2Fcompactador-de-solo.jpg'
    },
    {
      name: 'Cortadores de Piso FS400',
      image: 'https://storage.lucasmendes.dev/site-sp/locadorasul%2Fcortadores%20de%20pisofs400.jpeg'
    },
    {
      name: 'Compressor de Ar XAS 420',
      image: 'https://storage.lucasmendes.dev/site-sp/locadorasul%2Fcompressor-de-ar-xas-420.jpg'
    },
    
    
    {
      name: 'Gerador de Energia 5KVA à 260KVA',
      image: 'https://storage.lucasmendes.dev/site-sp/locadorasul%2Fgeradores.jpeg'
    },
    {
      name: 'Plataforma Elevatória',
      image: 'https://storage.lucasmendes.dev/site-sp/locadorasul%2Fplataforma%20elevatoria.jpeg'
    },
    {
      name: 'Lavadora de Piso',
      image: 'https://storage.lucasmendes.dev/site-sp/locadorasul%2Flavadora-de-piso-1.jpeg'
    },
    {
      name: 'Lixadeira Roto',
      image: 'https://storage.lucasmendes.dev/site-sp/locadorasul%2Flixadeira%20roto.jpeg'
    },
    {
      name: 'Guincho de Coluna 200Kg',
      image: 'https://storage.lucasmendes.dev/site-sp/locadorasul%2Fguincho-de-coluna-200kg.jpg'
    },
    
    
    {
      name: 'Politriz de Piso',
      image: 'https://storage.lucasmendes.dev/site-sp/locadorasul%2Fpolitriz%20de%20piso.jpeg'
    },
    {
      name: 'Serra Tico-Tico',
      image: 'https://storage.lucasmendes.dev/site-sp/locadorasul%2Fserra%20tico-tico.jpeg'
    }
  ];

  return (
    <section id="equipamentos" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="inline-block text-[#0072BA] font-bold text-sm tracking-widest uppercase mb-4">Nosso Catálogo</span>
          <h2 className="text-5xl md:text-7xl font-black text-[#004688] mb-6">
            Nossos Equipamentos
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#0072BA] to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Diversidade em máquinas e equipamentos para sua obra.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {equipment.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="absolute top-4 right-4 z-10">
                <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <ArrowRight className="text-[#0072BA]" size={20} />
                </div>
              </div>

              <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                <h3 className="text-lg font-black text-[#004688] leading-tight group-hover:text-[#0072BA] transition-colors">
                  {item.name}
                </h3>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#0072BA] rounded-2xl transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contato"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#0072BA] to-[#004E9C] text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105"
          >
            Ver Todos os Equipamentos
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}

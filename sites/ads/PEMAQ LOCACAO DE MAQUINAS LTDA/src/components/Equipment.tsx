import { WHATSAPP_URL } from '../constants';

type Product = { name: string; image: string };

const PRODUCTS: Product[] = [
  { name: 'Máquina de Solda MigFlex', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FMa%CC%81quina%20de%20Solda%20MigFlex.png' },
  { name: 'Roçadeira', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FRoc%CC%A7adeira.png' },
  { name: 'Cortador de Piso', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FCortador%20de%20Piso.png' },
  { name: 'Perfurador de Solo', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FPerfurador%20de%20Solo.png' },
  { name: 'Martelo Demolidor 14.6 kg', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FMartelo%20Demolidor.png' },
  { name: 'Guincho Elevatório', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FGuincho%20Elevato%CC%81rio.webp' },
  { name: 'Misturador', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FMisturador.webp' },
  { name: 'Compactador de Solo', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FCompactador%20de%20Solo.png' },
  { name: 'Placa Vibratória', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FPlaca%20Vibratoria.png' },
  { name: 'Martelete 5 kg', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FMartelete%205%20kg.png' },
  { name: 'Martelo Demolidor 10 kg', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FMartelo%20Demolidor%2010%20kg.png' },
  { name: 'Martelo Demolidor 21 kg', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FMartelo%20Demolidor%2021%20kg.png' },
  { name: 'Serra Circular 7 e 1/4"', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FSerra%20Circular%207%20e%201%3A4.png' },
  { name: 'Martelete 6.2 kg', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FMartelete%206.2%20kg.png' },
  { name: 'Serra Circular 9"', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FSerra%20Circular%209%E2%80%B3%20.png' },
  { name: 'Serra Mármore', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FSerra%20Ma%CC%81rmore.png' },
  { name: 'Esmerilhadeira 9"', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FEsmerilhadeira%209.png' },
  { name: 'Esmerilhadeira 4 e 1/4"', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FEsmerilhadeira%204%20e%201%3A4.png' },
  { name: 'Furadeira de Impacto', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FFuradeira%20de%20Impacto.png' },
  { name: 'Betoneira 400 Lts', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FBetoneira%20400%20Lts.png' },
  { name: 'Alisadora de Concreto', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FAlisadora%20de%20Concreto.png' },
  { name: 'Cortadora de Pisos', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FCortadora%20de%20Pisos.png' },
  { name: 'Lavadora de Alta Pressão', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FLavadora%20de%20Alta%20Pressa%CC%83o.jpg' },
  { name: 'Compressor de Ar', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FCompressor%20de%20Ar.png' },
  { name: 'Vibrador de Concreto', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FVibrador%20de%20Concreto.png' },
  { name: 'Motor Vibrador de Imersão', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FMotor%20Vibrador%20de%20Imersa%CC%83o.png' },
  { name: 'Andaime de 1.00 X 1.50 M', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FAndaime%20de%201.00%20X%201.50' },
  { name: 'Plataforma de 1.50 M', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FPlataforma%20de%201.50%20M.png' },
  { name: 'Andaime de 1.00 x 1.00 m', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FAndaime%20de%201.00%20x%201.00%20m.png' },
  { name: 'Sapata Ajustável', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FSapata%20Ajusta%CC%81vel.png' },
  { name: 'Plataforma de 1.00 M', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FPlataforma%20de%201.00%20M.png' },
  { name: 'Roda (Rodízio)', image: 'https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FRoda%20%28Rodizio%29.png' },
];

export default function Equipment() {
  return (
    <section id="equipamentos" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#FFA500] font-semibold text-sm uppercase tracking-wider">
            Nossos Equipamentos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Confira Nossas <span className="text-[#B87333]">Soluções</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Uma ampla gama de máquinas e equipamentos para locação, com manutenção e assistência
            técnica
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105"
            >
              <div className="aspect-square bg-white overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 border-t-2 border-[#FFA500]/20">
                <h3 className="text-center font-semibold text-gray-800 text-sm leading-tight">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FFA500] hover:bg-[#FF8C00] text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}

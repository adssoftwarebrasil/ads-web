import { MapPin, ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = '5585989253428';

const areas = [
  {
    name: 'Meireles',
    desc: 'O coração nobre de Fortaleza. Orla sofisticada, alta valorização e infraestrutura de excelência.',
    tag: 'Mais Valorizado',
    image: 'https://images.pexels.com/photos/2507016/pexels-photo-2507016.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Porto das Dunas',
    desc: 'Condomínios de luxo, Resort Beach Park e as famosas dunas. Destino premium para investidores.',
    tag: 'Alto Luxo',
    image: 'https://images.pexels.com/photos/1021073/pexels-photo-1021073.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Praia do Futuro',
    desc: 'Grande extensão litorânea com crescente valorização, barracas famosas e potencial de expansão.',
    tag: 'Em Crescimento',
    image: 'https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Aldeota',
    desc: 'Bairro nobre com proximidade à orla. Excelente para quem busca urbano com acesso rápido ao mar.',
    tag: 'Central',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Mucuripe',
    desc: 'Ponto estratégico entre Meireles e Praia do Futuro. Área de forte expansão imobiliária.',
    tag: 'Estratégico',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Papicu',
    desc: 'Região consolidada com infraestrutura completa, próxima à Praia do Futuro e ao centro financeiro.',
    tag: 'Consolidado',
    image: 'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const tagColors: Record<string, string> = {
  'Mais Valorizado': 'bg-white/20 text-white border-white/30',
  'Alto Luxo': 'bg-white/15 text-white border-white/25',
  'Em Crescimento': 'bg-white/15 text-white border-white/25',
  'Central': 'bg-white/15 text-white border-white/25',
  'Estratégico': 'bg-white/15 text-white border-white/25',
  'Consolidado': 'bg-white/15 text-white border-white/25',
};

export default function Areas() {
  return (
    <section id="regioes" className="bg-[#003438] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-white/60 text-xs font-bold tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-white/30" />
              Áreas de Atuação
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Regiões Onde
              <br />
              <span className="text-white/70 font-light italic">
                Atuamos
              </span>
            </h2>
          </div>
          <p className="text-white/45 text-sm max-w-xs md:text-right">
            Presença estratégica nas regiões mais valorizadas do litoral cearense.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((area) => (
            <a
              key={area.name}
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Tenho%20interesse%20em%20imóveis%20na%20região%20do%20${encodeURIComponent(area.name)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer block"
            >
              <img
                src={area.image}
                alt={area.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002e33]/95 via-[#002e33]/40 to-transparent" />

              <div className="absolute top-4 left-4">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border backdrop-blur-sm ${tagColors[area.tag]}`}>
                  {area.tag}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <MapPin size={13} className="text-white/70" />
                      <h3 className="text-white font-bold text-lg">{area.name}</h3>
                    </div>
                    <p className="text-white/60 text-xs leading-relaxed">{area.desc}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-[#00484e] transition-colors duration-300">
                    <ArrowRight size={15} className="text-white group-hover:text-[#00484e] transition-colors" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

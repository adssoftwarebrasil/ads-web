import { Instagram } from 'lucide-react';

interface GalleryItem {
  label: string;
  image: string;
  span?: boolean;
  delay: number;
}

const items: GalleryItem[] = [
  {
    label: 'Costelinha BBQ',
    image:
      'https://storage.lucasmendes.dev/site-sp/in%20brasa%20chopp%20e%20grill/img/costelas-de-porco-com-molho-barbecue-empilhadas_1440x1911.webp',
    span: true,
    delay: 0,
  },
  {
    label: 'Filé de Pirarucu',
    image:
      'https://storage.lucasmendes.dev/site-sp/in%20brasa%20chopp%20e%20grill/img/espetinho-de-carne-grelhado-em-madeira_1440x1911.webp',
    delay: 60,
  },
  {
    label: 'Drink especial da casa',
    image:
      'https://storage.lucasmendes.dev/site-sp/in%20brasa%20chopp%20e%20grill/img/drink-torresmo-restaurante-in-brasa-madeira_1440x1911.webp',
    delay: 120,
  },
  {
    label: 'Torresmo crocante',
    image:
      'https://storage.lucasmendes.dev/site-sp/in%20brasa%20chopp%20e%20grill/img/torresmo-com-cebola-roxa-lima-frigideira_1440x1487.webp',
    delay: 180,
  },
  {
    label: 'Whisky Sour',
    image:
      'https://storage.lucasmendes.dev/site-sp/in%20brasa%20chopp%20e%20grill/img/coquetel-amarelo-com-favos-de-mel-e-hortela_1440x1911.webp',
    span: true,
    delay: 240,
  },
  {
    label: 'Petit Gateau',
    image:
      'https://storage.lucasmendes.dev/site-sp/in%20brasa%20chopp%20e%20grill/img/brownie-com-sorvete-e-morango-no-prato_1440x1440.webp',
    delay: 300,
  },
  {
    label: 'Aperol Spritz',
    image:
      'https://storage.lucasmendes.dev/site-sp/in%20brasa%20chopp%20e%20grill/img/dois-drinks-aperol-gelo-laranja-bandeiras-fundo_1440x1911.webp',
    delay: 360,
  },
  {
    label: 'Pastel de carne',
    image:
      'https://storage.lucasmendes.dev/site-sp/in%20brasa%20chopp%20e%20grill/img/pastel-aberto-recheio-carne-e-molhos_1440x1911.webp',
    delay: 420,
  },
  {
    label: 'Bolinho de Carne Seca e Queijo Coalho',
    image:
      'https://storage.lucasmendes.dev/site-sp/in%20brasa%20chopp%20e%20grill%2Falteracoes%2FBolinho%20de%20carne%20seca%20e%20queijo%20coalho_1_11zon.jpeg',
    delay: 0,
  },
  {
    label: 'Bolinho de Costela',
    image:
      'https://storage.lucasmendes.dev/site-sp/in%20brasa%20chopp%20e%20grill%2Falteracoes%2FBolinho%20de%20costela_2_11zon.jpeg',
    delay: 60,
  },
  {
    label: 'Caipirinha de Limão',
    image:
      'https://storage.lucasmendes.dev/site-sp/in%20brasa%20chopp%20e%20grill%2Falteracoes%2FCaipirinha%20de%20lim%C3%A3o.jpeg',
    delay: 120,
  },
  {
    label: 'Caipirinha de Maracujá',
    image:
      'https://storage.lucasmendes.dev/site-sp/in%20brasa%20chopp%20e%20grill%2Falteracoes%2FCaipirinha%20de%20maracuj%C3%A1.jpeg',
    delay: 180,
  },
  {
    label: 'Caipirosca de Kiwi',
    image:
      'https://storage.lucasmendes.dev/site-sp/in%20brasa%20chopp%20e%20grill%2Falteracoes%2FCaipirosca%20de%20kiwi_5_11zon.jpeg',
    delay: 240,
  },
  {
    label: 'Combo de Acompanhamentos',
    image:
      'https://storage.lucasmendes.dev/site-sp/in%20brasa%20chopp%20e%20grill%2Falteracoes%2FCombo%20de%20acompanhamentos_6_11zon.jpeg',
    delay: 300,
  },
  {
    label: 'Combo Família InBrasa',
    image:
      'https://storage.lucasmendes.dev/site-sp/in%20brasa%20chopp%20e%20grill%2Falteracoes%2FCombo%20fam%C3%ADlia%20InBrasa_7.jpeg',
    delay: 360,
  },
  {
    label: 'Gin Tropical',
    image:
      'https://storage.lucasmendes.dev/site-sp/in%20brasa%20chopp%20e%20grill%2Falteracoes%2FGin%20tropical.jpeg',
    delay: 420,
  },
  {
    label: 'Medalhão de Frango',
    image:
      'https://storage.lucasmendes.dev/site-sp/in%20brasa%20chopp%20e%20grill%2Falteracoes%2FMedalh%C3%A3o%20de%20frango_9.jpeg',
    delay: 0,
  },
  {
    label: 'Medalhão de Queijo Coalho com Goiabada',
    image:
      'https://storage.lucasmendes.dev/site-sp/in%20brasa%20chopp%20e%20grill%2Falteracoes%2FMedalh%C3%A3o%20de%20queijo%20coalho%20com%20goiabada_10.jpeg',
    delay: 60,
  },
  {
    label: 'Negroni',
    image:
      'https://storage.lucasmendes.dev/site-sp/in%20brasa%20chopp%20e%20grill%2Falteracoes%2FNegroni.jpeg',
    delay: 120,
  },
  {
    label: 'Pastelzinho de Brisket',
    image:
      'https://storage.lucasmendes.dev/site-sp/in%20brasa%20chopp%20e%20grill%2Falteracoes%2FPastelzinho%20de%20brisket_12_11zon.jpeg',
    delay: 180,
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand/4 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-subheading animate-reveal">Galeria</p>
          <h2 className="section-heading mt-3 animate-reveal">
            Cada Prato, Uma <span className="text-gradient">Obra de Arte</span>
          </h2>
          <div className="divider mx-auto mt-6 animate-reveal"></div>
          <p className="text-white/60 mt-4 max-w-xl mx-auto animate-reveal">
            Veja de perto os pratos que fazem o In Brasa ser o destino favorito em Sinop.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]">
          {items.map((item) => (
            <div
              key={item.label}
              className={`animate-reveal relative overflow-hidden rounded-2xl group cursor-pointer ${
                item.span ? 'row-span-2' : ''
              }`}
              style={{ transitionDelay: `${item.delay}ms` }}
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-end justify-start p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center animate-reveal">
          <a
            href="https://www.instagram.com/inbrasaespetaria_"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Instagram className="lucide lucide-instagram" width={18} height={18} />
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

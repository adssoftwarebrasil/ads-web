interface GalleryItem {
  image: string;
  caption: string;
  span: string;
}

const ITEMS: GalleryItem[] = [
  {
    image: 'https://storage.lucasmendes.dev/site-sp/jf%20jefao%20diesel/img/oficina-mecanica-com-carros-e-caminhao_3024x4032.webp',
    caption: 'Oficina com carros e caminhão',
    span: 'col-span-1 row-span-2',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/jf%20jefao%20diesel/img/tecnico-limpando-bomba-diesel-maquina-teste_3024x4032.webp',
    caption: 'Técnico limpando bomba diesel',
    span: 'col-span-1 row-span-1',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/jf%20jefao%20diesel/img/almoxarifado-prateleiras-metal-caixas-pecas-estocadas_3024x4032.webp',
    caption: 'Almoxarifado com peças estocadas',
    span: 'col-span-1 row-span-1',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/jf%20jefao%20diesel/img/caixas-master-power-turbo-estante-metalica_3024x4032.webp',
    caption: 'Estoque de turbinas e peças',
    span: 'col-span-1 row-span-1',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/jf%20jefao%20diesel/img/picape-branca-em-frente-a-jefao-diesel_3024x4032.webp',
    caption: 'Picape em frente à Jefão Diesel',
    span: 'col-span-1 row-span-1',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/jf%20jefao%20diesel/img/predio-preto-bandeira-brasil-haste-metalica_900x1600.webp',
    caption: 'Fachada da Jefão Diesel',
    span: 'col-span-1 row-span-2',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-[rgb(255,198,45)] text-xs font-bold uppercase tracking-widest mb-3">Nossa Estrutura</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Conheça a<span className="text-[rgb(255,198,45)]"> JF Diesel</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            Estrutura profissional, equipamentos modernos e um time comprometido com a qualidade do seu serviço.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {ITEMS.map((item) => (
            <div key={item.caption} className={`${item.span} relative overflow-hidden rounded-2xl group`}>
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-medium">{item.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const produtos = [
  {
    nome: 'Cortador Giro Zero Husqvarna MZ54 ROPS',
    img: 'https://storage.lucasmendes.dev/site-sp/MAXXIMUS%2FCortador%20de%20Grama%20Giro%20Zero%20Husqvarna%20MZ54%20ROPS.jpg',
    delay: '0ms',
  },
  {
    nome: 'Cortador Giro Zero Husqvarna Z248F',
    img: 'https://storage.lucasmendes.dev/site-sp/MAXXIMUS%2FCortador%20de%20Grama%20Giro%20Zero%20Husqvarna%20Z248F.jpg',
    delay: '100ms',
  },
  {
    nome: 'Cortador de Grama Husqvarna GX 560',
    img: 'https://storage.lucasmendes.dev/site-sp/MAXXIMUS%2FCortador%20de%20Grama%20Husqvarna%20GX%20560.jpg',
    delay: '200ms',
  },
  {
    nome: 'Cortador de Grama Husqvarna LC 151S',
    img: 'https://storage.lucasmendes.dev/site-sp/MAXXIMUS%2FCortador%20de%20Grama%20Husqvarna%20LC%20151S.jpg',
    delay: '300ms',
  },
  {
    nome: 'Roçadeira Husqvarna 143RS',
    img: 'https://storage.lucasmendes.dev/site-sp/MAXXIMUS%2FRoc%CC%A7adeira%20Husqvarna%20143RS.jpg',
    delay: '400ms',
  },
  {
    nome: 'Motosserra Husqvarna 272 XP®',
    img: 'https://storage.lucasmendes.dev/site-sp/MAXXIMUS%2FMotosserra%20Husqvarna%20272%20XP%C2%AE.jpg',
    delay: '500ms',
  },
  {
    nome: 'Trator Cortador de Grama Husqvarna TS 219TFm',
    img: 'https://storage.lucasmendes.dev/site-sp/MAXXIMUS%2FTrator%20Cortador%20de%20Grama%20Husqvarna%20TS%20219TFm.jpg',
    delay: '600ms',
  },
  {
    nome: 'Gerador Husqvarna G8500P',
    img: 'https://storage.lucasmendes.dev/site-sp/MAXXIMUS%2FGerador%20Husqvarna%20G8500P.jpg',
    delay: '700ms',
  },
];

const CONSULTA_URL =
  'https://wa.me/5516993268596?text=Olá! Gostaria de consultar o preço deste produto - Araraquara.';

export default function Produtos() {
  return (
    <section id="produtos" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-5">
        <h2 className="text-[rgb(19,57,94)] text-3xl md:text-5xl font-bold text-center mb-5">
          Produtos em Destaque
        </h2>
        <p className="text-[rgb(173,173,175)] text-lg text-center mb-16">
          Roçadeiras, motosserras, tratores, giro zero e muito mais
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {produtos.map((p) => (
            <div
              key={p.nome}
              className="bg-white rounded-2xl shadow-lg p-5 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 opacity-0"
              style={{ animationDelay: p.delay }}
            >
              <div className="aspect-square mb-4 overflow-hidden rounded-xl">
                <img
                  src={p.img}
                  alt={p.nome}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-[rgb(19,57,94)] text-base font-semibold mb-4 min-h-[3rem]">
                {p.nome}
              </h3>
              <a
                href={CONSULTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[rgb(244,95,38)] text-white text-center py-3 rounded-xl font-medium hover:bg-[rgb(220,85,34)] transition-colors duration-300"
              >
                Consultar Preço
              </a>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="https://wa.me/5516993268596?text=Olá! Gostaria de conhecer todos os produtos disponíveis - Araraquara."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent border-2 border-[rgb(19,57,94)] text-[rgb(19,57,94)] px-12 py-4 rounded-full font-medium hover:bg-[rgb(19,57,94)] hover:text-white transition-all duration-300"
          >
            Ver Todos os Produtos
          </a>
        </div>
      </div>
    </section>
  );
}

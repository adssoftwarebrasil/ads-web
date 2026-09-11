const brands = [
  { name: 'Ray-Ban', img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/marcas/logotipo-rayban-preto-branco-fundo-branco_1179x830.webp' },
  { name: 'Prada', img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/marcas/logotipo-prada-preto-fundo-branco_1179x654.webp' },
  { name: 'Tom Ford', img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/marcas/texto-tom-ford-em-fundo-branco_1179x668.webp' },
  { name: 'Oakley', img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/marcas/logo-oakley-preto-e-branco_1179x957.webp' },
  { name: 'Versace', img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/marcas/logotipo-versace-medusa-preto-e-branco_1179x822.webp' },
  { name: 'Miu Miu', img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/marcas/logotipo-miu-miu-preto-fundo-branco_1179x638.webp' },
  { name: 'Michael Kors', img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/marcas/logo-michael-kors-preto-e-branco_1179x908.webp' },
  { name: 'Dolce & Gabbana', img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/marcas/logotipo-dolce-e-gabbana-preto-sobre-branco_1179x551.webp' },
  { name: 'Emporio Armani', img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/marcas/logotipo-preto-e-branco-emporio-armani_1179x573.webp' },
  { name: 'Armani Exchange', img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/marcas/logotipo-armani-exchange-preto-e-branco_1179x927.webp' },
  { name: 'Tiffany & Co.', img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/marcas/logo-tiffany-e-companhia-preto-branco_1179x743.webp' },
  { name: 'Lacoste', img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/marcas/logo-lacoste-nome-crocodilo-verde-boca-vermelha_1179x492.webp' },
  { name: 'Max Mara', img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/marcas/logotipo-max-mara-preto-fundo-branco_1179x663.webp' },
  { name: 'Persol', img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/marcas/logotipo-persol-preto-e-branco_1179x943.webp' },
  { name: 'Swarovski', img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/marcas/logotipo-cisne-preto-swarovski-fundo-branco_1179x827.webp' },
  { name: 'Ralph Lauren', img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/marcas/logotipo-ralph-lauren-cavaleiro-polo-preto-branco_1179x694.webp' },
  { name: 'Vogue', img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/marcas/logotipo-vogue-preto-fundo-branco_1179x590.webp' },
  { name: 'Zeiss', img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/marcas/logo-zeiss-azul-e-branco_1179x935.webp' },
  { name: 'Varilux', img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/marcas/logotipo-varilux-preto-sobre-fundo-branco_1179x370.webp' },
  { name: 'Hoya', img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/marcas/logotipo-hoya-azul-fundo-branco_1179x634.webp' },
  { name: 'Zegna', img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/marcas/logo-texto-zegna-preto-fundo-cinza_1179x663.webp' },
  { name: 'Aramis', img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/marcas/logotipo-aramis-texto-preto-risco-vermelho_1179x718.webp' },
  { name: 'Reserva', img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/marcas/logotipo-reserva-texto-preto-passaro-vermelho_1179x604.webp' },
  { name: 'Kipling', img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/marcas/logotipo-kipling-macaco-silhueta-preta-branca_1179x768.webp' },
];

export default function Brands() {
  const loop = [...brands, ...brands];
  return (
    <section id="marcas" className="py-24 lg:py-28" style={{ backgroundColor: 'rgb(223, 209, 162)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="section-reveal text-center">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ backgroundColor: 'rgba(80, 4, 4, 0.12)', color: 'rgb(80, 4, 4)' }}
          >
            Marcas Parceiras
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ color: 'rgb(53, 59, 59)' }}
          >
            As melhores marcas do <span style={{ color: 'rgb(80, 4, 4)' }}>mundo</span> reunidas
          </h2>
          <p
            className="text-base lg:text-lg max-w-xl mx-auto"
            style={{ color: 'rgb(99, 99, 97)', lineHeight: 1.7 }}
          >
            Trabalhamos com marcas reconhecidas mundialmente para garantir qualidade, estilo e
            segurança em cada produto.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
          {loop.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="brand-logo-item shrink-0 flex items-center justify-center"
              style={{ width: '120px', height: '64px' }}
            >
              <img
                src={brand.img}
                alt={brand.name}
                className="max-h-10 max-w-[110px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

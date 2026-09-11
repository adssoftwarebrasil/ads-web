const publications = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/dr%20sillas%20mourao/publi/sangue-nas-fezes-mensagem-dr-sillas_1024x1280.webp',
    alt: 'Alerta sobre sangue nas fezes',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/dr%20sillas%20mourao/publi/medico-microbiota-intestinal-o-que-e-cuidar_1024x1280.webp',
    alt: 'O que é e como cuidar da microbiota intestinal',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/dr%20sillas%20mourao/publi/alimentos-vilao-intestino-constipacao-doce-guloseimas_1024x1280.webp',
    alt: 'Alimentos vilões do intestino e constipação',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/dr%20sillas%20mourao/publi/imagem-colonoscopia-tubo-intestino-prevencao-medica_1024x1280.webp',
    alt: 'Prevenção médica e colonoscopia',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/dr%20sillas%20mourao/publi/campanha-maio-roxo-doencas-inflamatorias-intestinais_1024x1280.webp',
    alt: 'Campanha Maio Roxo - Doenças Inflamatórias Intestinais',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/dr%20sillas%20mourao/publi/ilustracao-doenca-diverticular-prevencao-crises_1024x1280.webp',
    alt: 'Prevenção de crises da doença diverticular',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/dr%20sillas%20mourao/publi/imagem-coceira-anal-nao-e-normal-alerta_1024x1280.webp',
    alt: 'Alerta médico: coceira anal não é normal',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/dr%20sillas%20mourao/publi/cisto-pilonidal-tratamento-laser-medico-coloproctologia_1024x1280.webp',
    alt: 'Tratamento a laser para cisto pilonidal',
  },
];

export default function Publications() {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="informacoes">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Informação que Salva Vidas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Acompanhe nossas publicações informativas sobre prevenção, diagnóstico e tratamentos em coloproctologia.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {publications.map((pub) => (
            <div
              key={pub.src}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={pub.src}
                alt={pub.alt}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

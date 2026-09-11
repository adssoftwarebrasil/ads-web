interface SpaceImage {
  src: string;
  alt: string;
  span: string;
  minHeight: string;
}

const images: SpaceImage[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/dr%20sillas%20mourao/consultorio/recepcao-moderna-balcao-branco-iluminado_1280x719.webp',
    alt: 'Recepção moderna e iluminada do consultório',
    span: 'lg:col-span-2 lg:row-span-2',
    minHeight: '400px',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/dr%20sillas%20mourao/consultorio/sala-de-espera-cadeiras-cinzas-iluminacao-moderna_1280x719.webp',
    alt: 'Sala de espera com ambiente confortável',
    span: '',
    minHeight: '200px',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/dr%20sillas%20mourao/consultorio/medico-recepcionando-paciente-na-clinica_1280x719.webp',
    alt: 'Dr. Sillas recepcionando paciente na clínica',
    span: '',
    minHeight: '200px',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/dr%20sillas%20mourao/consultorio/corredor-iluminado-com-prateleira-de-madeira_1280x719.webp',
    alt: 'Corredor de acesso aos consultórios',
    span: '',
    minHeight: '200px',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/dr%20sillas%20mourao/consultorio/medico-branco-mesa-computador-consultorio_1280x719.webp',
    alt: 'Dr. Sillas em atendimento na mesa do consultório',
    span: 'lg:col-span-2 lg:row-span-2',
    minHeight: '400px',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/dr%20sillas%20mourao/consultorio/medico-branco-consultorio-braco-cruzado-sorrindo_1280x719.webp',
    alt: 'Dr. Sillas sorrindo no consultório',
    span: '',
    minHeight: '200px',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/dr%20sillas%20mourao/consultorio/medico-mar-o-azul-cancer-intestino-banner_1280x719.webp',
    alt: 'Banner de conscientização no consultório',
    span: '',
    minHeight: '200px',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/dr%20sillas%20mourao/consultorio/placa-preta-dr-sillas-mourao-pinto_1280x719.webp',
    alt: 'Placa de identificação do Dr. Sillas Mourão',
    span: '',
    minHeight: '200px',
  },
];

export default function Space() {
  return (
    <section className="py-16 md:py-24 bg-white" id="consultorio">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Conheça Nosso Espaço</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Preparamos um ambiente moderno, acolhedor e com tecnologia de ponta para garantir o seu conforto e
            bem-estar durante todo o atendimento.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img) => (
            <div
              key={img.src}
              className={`group relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                loading="lazy"
                style={{ minHeight: img.minHeight }}
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

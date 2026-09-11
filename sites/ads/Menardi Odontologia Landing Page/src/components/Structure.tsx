const images = [
  {
    src: 'https://storage.lucasmendes.dev/agenciaeua/clinicamenardi%2Fbalcaoinicio.jpeg',
    alt: 'Recepção Menardi Odontologia',
    wrapperClass: 'col-span-2 row-span-2 relative overflow-hidden rounded-2xl group cursor-pointer',
    imgClass: 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-105',
  },
  {
    src: 'https://storage.lucasmendes.dev/agenciaeua/clinicamenardi%2Fbalcaoinicio2.jpeg',
    alt: 'Área de Atendimento',
    wrapperClass: 'relative overflow-hidden rounded-2xl group cursor-pointer aspect-square',
    imgClass: 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-105',
  },
  {
    src: 'https://storage.lucasmendes.dev/agenciaeua/clinicamenardi%2Fconsultorio.jpeg',
    alt: 'Consultório',
    wrapperClass: 'relative overflow-hidden rounded-2xl group cursor-pointer aspect-square',
    imgClass: 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-105',
  },
  {
    src: 'https://storage.lucasmendes.dev/agenciaeua/clinicamenardi%2Fconsultorio1.jpeg',
    alt: 'Consultório Moderno',
    wrapperClass: 'relative overflow-hidden rounded-2xl group cursor-pointer aspect-square',
    imgClass: 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-105',
  },
  {
    src: 'https://storage.lucasmendes.dev/agenciaeua/clinicamenardi%2Fconsultorio3.jpeg',
    alt: 'Equipamentos de Ponta',
    wrapperClass: 'relative overflow-hidden rounded-2xl group cursor-pointer aspect-square',
    imgClass: 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-105',
  },
];

export default function Structure() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(0,87,101)] mb-4">
            Conheça Nossa Estrutura
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Ambiente moderno, confortável e equipado com tecnologia de ponta para seu melhor
            atendimento
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {images.map((img) => (
            <div key={img.alt} className={img.wrapperClass}>
              <img src={img.src} alt={img.alt} className={img.imgClass} />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Palette, Music, Coffee, Heart } from 'lucide-react';

const features = [
  {
    Icon: Palette,
    title: 'Vasta Gama de Cursos',
    text: 'Oferecemos cursos de artes, música, corpo e mente, e idiomas',
  },
  {
    Icon: Music,
    title: 'Eventos Culturais',
    text: 'Instalações adaptadas para exposições e eventos culturais',
  },
  {
    Icon: Coffee,
    title: 'Café no Local',
    text: 'Experiências gastronômicas artísticas no Café Milagre',
  },
  {
    Icon: Heart,
    title: 'Ambiente Inspirador',
    text: 'Espaço vibrante com peças artesanais exclusivas',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Espaço Cultural
              <br />
              <span className="text-[#ED1B24]">Milagre dos Peixes</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Fundado em 2006, o Espaço Cultural Milagre dos Peixes é um centro
              de arte dedicado a promover a expressão cultural e o bem-estar em
              Goiânia. Aqui, a arte transcende as barreiras, unindo técnicas
              variadas e pessoas de todas as idades em um ambiente vibrante e
              acolhedor.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {features.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#ED1B24] rounded-lg flex items-center justify-center">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">{title}</h3>
                    <p className="text-sm text-gray-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://storage.lucasmendes.dev/site-sp/espacomilagredospeixes%2FQuem%20somos.png"
                alt="Espaço Cultural"
                className="rounded-2xl shadow-2xl w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://storage.lucasmendes.dev/site-sp/espacomilagredospeixes%2FQuem%20somos2.png"
                alt="Ambiente Cultural"
                className="rounded-2xl shadow-2xl w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300 mt-8"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#B1D044] rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#ED1B24] rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

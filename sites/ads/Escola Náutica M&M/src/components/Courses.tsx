import { Waves, Ship, Anchor, Wind } from 'lucide-react';

export default function Courses() {
  const courses = [
 
    {
      icon: Waves,
      title: 'Arrais Amador',
      description: 'Condução de embarcações de esporte e recreio em águas abrigadas. Primeiro passo para navegação.',
      image: 'https://storage.lucasmendes.dev/site-sp/escola%20nautica%2Flancha-vermelha-branca.webp',
    },
    {
      icon: Wind,
      title: 'Motonauta',
      description: 'Habilitação para conduzir jet skis e motos aquáticas. Ideal para quem busca adrenalina nas águas.',
      image: 'https://storage.lucasmendes.dev/site-sp/escola%20nautica%2Fjet-ski-reboque.webp',
    },

    {
      icon: Anchor,
      title: 'Mestre Amador',
      description: 'Categoria avançada para navegação oceânica sem limites de distância.',
      image: 'https://storage.lucasmendes.dev/site-sp/escola%20nautica%2Fveiculo-barco-trailer.webp',
    },
    
    {
      icon: Ship,
      title: 'Capitão Amador',
      description: 'Navegação em águas nacionais e internacionais. Para quem quer ir além dos limites.',
      image: 'https://storage.lucasmendes.dev/site-sp/escola%20nautica%2Fbarco-vermelho-estacionamento.webp',
    },

  ];

  return (
    <section id="cursos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#26367e] mb-4">
            Cursos e Habilitações
          </h2>
          <p className="text-lg text-[#6b7280]">
            Escolha o curso ideal para você e navegue com segurança e responsabilidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#e0f4fd] rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-[#0caff0] transition-all duration-300 group"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#26367e] to-[#0caff0] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <course.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#26367e] mb-3 text-center">
                {course.title}
              </h3>
              <p className="text-[#6b7280] text-center mb-6 leading-relaxed">
                {course.description}
              </p>
              <button
                onClick={() => window.open('https://wa.me/5545999207671', '_blank')}
                className="w-full bg-[#c6272f] hover:bg-[#0caff0] text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Saiba Mais
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

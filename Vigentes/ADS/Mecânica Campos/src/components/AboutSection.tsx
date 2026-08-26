export default function AboutSection() {
  const images = [
    { src: 'https://storage.lucasmendes.dev/site-sp/MECANICA-CAMPOS%2Foficina-mecanica-pessoas.webp', alt: 'Equipe Mecânica Campos', fallback: '👥' },
    { src: 'https://storage.lucasmendes.dev/site-sp/MECANICA-CAMPOS%2Flavagem-farol-carro.webp', alt: 'Serviço de manutenção', fallback: '🚗' },
    { src: 'https://storage.lucasmendes.dev/site-sp/MECANICA-CAMPOS%2Ffarol-carro-limpeza.webp', alt: 'Detalhamento automotivo', fallback: '✨' },
    { src: 'https://storage.lucasmendes.dev/site-sp/MECANICA-CAMPOS%2Fpolimento-carro-preto.webp', alt: 'Polimento profissional', fallback: '💎' }
  ];

  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 animate-fade-in">
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div key={index} className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full bg-[#e1eff5] flex items-center justify-center text-5xl">${image.fallback}</div>`;
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#152755] mb-6">
              Experiência e Comprometimento desde 2017
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Fundada pelo diretor Anilton C. F. de Campos, que possui 27 anos de experiência
                na área de linha pesada, a Mecânica Campos iniciou suas atividades em janeiro de
                2017 com o objetivo de oferecer serviços especializados e auto peças de qualidade
                para Água Boa e região.
              </p>

              <p>
                Atendemos clientes de pequeno, médio e grande porte com uma estrutura física moderna
                que permite executar manutenções com eficiência e segurança. Nossa equipe é formada
                por técnicos treinados e especializados, comprometidos em entregar serviços de alta
                performance.
              </p>

              <div className="bg-[#e1eff5] border-l-4 border-[#FF6B35] p-6 rounded-r-lg mt-8">
                <p className="font-semibold text-[#152755]">
                  Seguimos rigorosos padrões de qualidade e oferecemos garantia em todos os
                  serviços prestados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

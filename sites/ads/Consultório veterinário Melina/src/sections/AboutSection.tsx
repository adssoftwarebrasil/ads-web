import { useEffect, useRef, useState } from 'react';
import { Award, Heart, Star, MapPin } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const badges = [
    { icon: Award, text: 'Desde 2014' },
    { icon: Heart, text: 'Atendimento Humanizado' },
    { icon: MapPin, text: 'Referência no Guará I' },
  ];

  const images = [
    {
      src: 'https://storage.lucasmendes.dev/site-sp/Consult%C3%B3rio%20veterin%C3%A1rio%20Melina%2FMedica-Atendendo-Cachorro.jpeg',
      alt: 'Atendimento veterinário',
    },
    {
      src: 'https://storage.lucasmendes.dev/site-sp/Consult%C3%B3rio%20veterin%C3%A1rio%20Melina%2FMedica-Atendendo-Gatinho.jpeg',
      alt: 'Cuidado com gatos',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-6 border-l-4 border-primary pl-6">
              Nossa História
            </h2>

            <div className="space-y-4 text-secondary-dark/80 leading-relaxed">
              <p>
                O Consultório Veterinário Melina, localizado no Guará I, em
                Brasília/DF, nasceu de um sonho de colocar em prática toda a sua
                paixão pelos animais, transformando anos de estudos e dedicação em
                uma trajetória voltada ao cuidado, à saúde e ao bem-estar dos pets.
              </p>

              <p>
                Desde a sua fundação, em 2014, o consultório tem como missão oferecer
                um atendimento humanizado, ético e de excelência, compreendendo o
                papel essencial que os animais desempenham na vida de seus tutores.
                Aqui, cada pet é tratado com respeito, carinho e atenção individualizada.
              </p>

              <p>
                A clínica se destaca pela expertise no atendimento de animais
                exóticos, incluindo aves, répteis e pequenos mamíferos, além de cães
                e gatos. Com uma abordagem baseada em atualização constante e
                compromisso com a qualidade, o Consultório Veterinário Melina é
                referência confiável na região.
              </p>

              <p>
                Ao longo dos anos, construímos uma relação de confiança com nossos
                clientes, sempre priorizando o bem-estar animal e a satisfação de
                quem nos procura. Nosso compromisso é seguir fazendo a diferença na
                vida de cada pet que passa por nossas mãos.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <badge.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-secondary">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                  style={{
                    gridRow: index === 0 ? 'span 2' : 'auto',
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
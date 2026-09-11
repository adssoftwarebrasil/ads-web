import React, { useState, useEffect, useCallback } from 'react';

import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';



interface Project {

  image: string;

  title: string;

}



// Dados sem a localização

const projects: Project[] = [

  {

    image: 'https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Fpaineis-solares-estrutura.webp',

    title: 'Estrutura Carport Solar'

  },

  {

    image: 'https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Fsubestacao-eletrica-ceu.webp',

    title: 'Subestação'

  },

  {

    image: 'https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Ftrabalhador-campo-eletricidade.webp',

    title: 'Rede de Distribuição'

  },

  {

    image: 'https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Fequipamento-estacao-eletrica.webp',

    title: 'Estação Transformadora'

  },

  {

    image: 'https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Fpaineis-solares-campo.webp',

    title: 'Usina Solar Rural'

  },

  {

    image: 'https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Finspecao-transformador-ceu.webp',

    title: 'Manutenção Preventiva'

  },

  {

    image: 'https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Fpainel-eletrico-cinza.webp',

    title: 'Quadro de Comando'

  },

  {

    image: 'https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Fcarros-paineis-solares.webp',

    title: 'Carport Solar'

  },

  {

    image: 'https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Fposte-eletrico-transformador.webp',

    title: 'Infraestrutura Urbana'

  },

  {

    image: 'https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Fequipamento-tecnico-ferramentas.webp',

    title: 'Calibração de Medidor de Energia'

  },

  {

    image: 'https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Fpaineis-solares-construcao.webp',

    title: 'Carport Solar'

  },

  {

    image: 'https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Fteste-isolacao-transformador.webp',

    title: 'Testes e Comissionamento'

  }

];



const Gallery: React.FC = () => {

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);



  const closeModal = () => setSelectedIndex(null);



  const showNext = useCallback((e?: React.MouseEvent) => {

    e?.stopPropagation();

    setSelectedIndex((prev) => (prev === null || prev === projects.length - 1 ? 0 : prev + 1));

  }, []);



  const showPrev = useCallback((e?: React.MouseEvent) => {

    e?.stopPropagation();

    setSelectedIndex((prev) => (prev === null || prev === 0 ? projects.length - 1 : prev - 1));

  }, []);



  useEffect(() => {

    const handleKeyDown = (e: KeyboardEvent) => {

      if (selectedIndex === null) return;

      

      if (e.key === 'Escape') closeModal();

      if (e.key === 'ArrowRight') showNext();

      if (e.key === 'ArrowLeft') showPrev();

    };



    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);

  }, [selectedIndex, showNext, showPrev]);



  useEffect(() => {

    if (selectedIndex !== null) {

      document.body.style.overflow = 'hidden';

    } else {

      document.body.style.overflow = 'unset';

    }

    return () => { document.body.style.overflow = 'unset'; };

  }, [selectedIndex]);



  return (

    <section id="gallery" className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">

          <span className="text-blue-900 font-bold tracking-wider uppercase text-sm mb-2 block">

            Portfólio

          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">

            Projetos Executados com Excelência

          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">

            Confira algumas de nossas obras recentes em infraestrutura elétrica e energia solar.

          </p>

        </div>



        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

          {projects.map((project, index) => (

            <div

              key={index}

              onClick={() => setSelectedIndex(index)}

              className="break-inside-avoid group relative overflow-hidden rounded-xl bg-gray-900 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"

            >

              <img

                src={project.image}

                alt={project.title}

                className="w-full h-auto transform group-hover:scale-110 group-hover:opacity-60 transition-all duration-500 ease-in-out"

                loading="lazy"

              />



              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100 z-20">

                <div className="bg-yellow-400 p-3 rounded-full shadow-lg">

                    <ZoomIn className="w-6 h-6 text-blue-900" />

                </div>

              </div>



              {/* Overlay apenas com Título */}

              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">

                <h3 className="text-white text-xl font-bold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">

                  {project.title}

                </h3>

                <div className="w-12 h-1 bg-yellow-400 mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75" />

              </div>

            </div>

          ))}

        </div>

      </div>



      {/* Lightbox Modal */}

      {selectedIndex !== null && (

        <div 

          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-fade-in"

          onClick={closeModal}

        >

          <button 

            onClick={closeModal}

            className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all z-50"

          >

            <X className="w-8 h-8" />

          </button>



          <button 

            onClick={showPrev}

            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-yellow-400 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-50 hidden sm:block"

          >

            <ChevronLeft className="w-8 h-8" />

          </button>



          <div 

            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"

            onClick={(e) => e.stopPropagation()}

          >

            <img 

              src={projects[selectedIndex].image} 

              alt={projects[selectedIndex].title}

              className="w-auto h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"

            />

            

            <div className="mt-4 text-center">

              <h3 className="text-2xl font-bold text-white tracking-wide">{projects[selectedIndex].title}</h3>

            </div>

          </div>



          <button 

            onClick={showNext}

            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-yellow-400 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-50 hidden sm:block"

          >

            <ChevronRight className="w-8 h-8" />

          </button>

        </div>

      )}

    </section>

  );

};



export default Gallery;
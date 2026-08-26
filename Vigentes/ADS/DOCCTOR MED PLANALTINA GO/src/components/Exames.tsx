import { Check, Sparkles } from 'lucide-react';

const exames = [
  'Exames Laboratoriais Completos (Análises Clínicas)',
  'Ultrassonografia Geral e Obstétrica 3D',
  'Exames Cardiológicos (MAPA, Holter e Eletrocardiograma)',
];

export default function Exames() {
  return (
    <section id="exames" className="bg-[#fefefe] py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Imagem - Desktop à esquerda */}
          <div className="flex-1 order-2 lg:order-1 hidden lg:block">
            <img
              src="https://storage.lucasmendes.dev/site-sp/docctormedplanaltina%2Fdocctormedplanaltina%2Fultrassom-3d.webp"
              alt="Ultrassom 3D"
              className="rounded-[20px] shadow-2xl w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Conteúdo */}
          <div className="flex-1 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d4a3e] mb-6">
              Exames Completos no Mesmo Local
            </h2>
            <p className="text-lg text-[#a6a9a5] mb-8">
              Praticidade e eficiência para o seu diagnóstico. Todos os exames que você precisa em um só lugar.
            </p>
            <div className="space-y-4 mb-8">
              {exames.map((exame, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-[#f37f1a] rounded-full p-1 flex-shrink-0 mt-1">
                    <Check size={20} className="text-white" />
                  </div>
                  <p className="text-lg text-[#2d4a3e]">{exame}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-[#f37f1a]/10 to-[#ff9142]/10 border-l-4 border-[#f37f1a] p-6 rounded-lg mb-8">
              <div className="flex items-start gap-3">
                <Sparkles size={24} className="text-[#f37f1a] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#2d4a3e] mb-2">
                    Ultrassom 3D
                  </h3>
                  <p className="text-[#2d4a3e]">
                    Tecnologia de última geração para acompanhamento gestacional com imagens nítidas e detalhadas do seu bebê.
                  </p>
                </div>
              </div>
            </div>

            {/* Imagem - Mobile acima do botão */}
            <div className="lg:hidden mb-6">
              <img
                src="https://storage.lucasmendes.dev/site-sp/docctormedplanaltina%2Fdocctormedplanaltina%2Fultrassom-3d.webp"
                alt="Ultrassom 3D"
                className="rounded-[20px] shadow-2xl w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            
              <a href="https://wa.me/5561982400076?text=Olá! Gostaria de agendar um exame."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#f37f1a] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#d97015] transition-all duration-300 hover:scale-105"
            >
              Agendar Exame
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
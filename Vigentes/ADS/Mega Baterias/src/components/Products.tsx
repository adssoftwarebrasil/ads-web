import { Car, Truck, Zap } from 'lucide-react';

export default function Products() {
  return (
    <section id="produtos" className="bg-[#0b0d10] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Baterias para Todas as Necessidades
        </h2>
        <p className="text-xl text-[#ffef1d] text-center mb-12">
          Linha completa para veículos leves, pesados e aplicações especiais
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 hover:from-white/15 hover:to-white/10 transition-all duration-500 hover:scale-105 border border-[#ffef1d]/30 hover:border-[#ffef1d]/60 relative overflow-hidden group shadow-2xl hover:shadow-[#ffef1d]/20">
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <img
                src="https://storage.lucasmendes.dev/site-sp/megabaterias/tipos-de-carros_11zon.jpg"
                alt="Linha Leve"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="relative z-10">
              <div className="bg-gradient-to-br from-[#ffef1d] to-[#ffd700] w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Car className="text-[#0b0d10]" size={36} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#ffef1d] transition-colors duration-300">LINHA LEVE</h3>

              <ul className="space-y-3 text-white/90 mb-8">
                <li className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-200">
                  <span className="text-[#ffef1d] text-lg">▸</span> 
                  <span className="text-base">Carros</span>
                </li>
                <li className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-200">
                  <span className="text-[#ffef1d] text-lg">▸</span> 
                  <span className="text-base">Motos</span>
                </li>
                <li className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-200">
                  <span className="text-[#ffef1d] text-lg">▸</span> 
                  <span className="text-base">Embarcações</span>
                </li>
                <li className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-200">
                  <span className="text-[#ffef1d] text-lg">▸</span> 
                  <span className="text-base">Quadriciclos</span>
                </li>
                <li className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-200">
                  <span className="text-[#ffef1d] text-lg">▸</span> 
                  <span className="text-base">Jet-Ski</span>
                </li>
              </ul>

              <button
                onClick={() => window.open('https://wa.me/5577999036565?text=Olá!%20Preciso%20de%20uma%20bateria%20linha%20leve.', '_blank')}
                className="w-full bg-gradient-to-r from-[#ffef1d] to-[#ffd700] text-[#0b0d10] py-3.5 rounded-full font-bold hover:from-[#d7282d] hover:to-[#ff4444] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                CONSULTAR
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 hover:from-white/15 hover:to-white/10 transition-all duration-500 hover:scale-105 border border-[#d7282d]/30 hover:border-[#d7282d]/60 relative overflow-hidden group shadow-2xl hover:shadow-[#d7282d]/20">
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <img
                src="https://storage.lucasmendes.dev/site-sp/megabaterias/Caminhoes.jpg"
                alt="Linha Pesada"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="relative z-10">
              <div className="bg-gradient-to-br from-[#d7282d] to-[#ff4444] w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Truck className="text-white" size={36} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#d7282d] transition-colors duration-300">LINHA PESADA</h3>

              <ul className="space-y-3 text-white/90 mb-8">
                <li className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-200">
                  <span className="text-[#d7282d] text-lg">▸</span> 
                  <span className="text-base">Ônibus</span>
                </li>
                <li className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-200">
                  <span className="text-[#d7282d] text-lg">▸</span> 
                  <span className="text-base">Caminhões</span>
                </li>
                <li className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-200">
                  <span className="text-[#d7282d] text-lg">▸</span> 
                  <span className="text-base">Tratores</span>
                </li>
                <li className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-200">
                  <span className="text-[#d7282d] text-lg">▸</span> 
                  <span className="text-base">Máquinas Agrícolas</span>
                </li>
              </ul>

              <button
                onClick={() => window.open('https://wa.me/5577999036565?text=Olá!%20Preciso%20de%20uma%20bateria%20linha%20pesada.', '_blank')}
                className="w-full bg-gradient-to-r from-[#ffef1d] to-[#ffd700] text-[#0b0d10] py-3.5 rounded-full font-bold hover:from-[#d7282d] hover:to-[#ff4444] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                CONSULTAR
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 hover:from-white/15 hover:to-white/10 transition-all duration-500 hover:scale-105 border border-[#ffef1d]/30 hover:border-[#ffef1d]/60 relative overflow-hidden group shadow-2xl hover:shadow-[#ffef1d]/20">
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <img
                src="https://storage.lucasmendes.dev/site-sp/megabaterias/bg-mov-estacionarias.webp"
                alt="Outros Produtos"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="relative z-10">
              <div className="bg-gradient-to-br from-[#ffef1d] to-[#ffd700] w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Zap className="text-[#0b0d10]" size={36} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#ffef1d] transition-colors duration-300">OUTROS PRODUTOS</h3>

              <ul className="space-y-3 text-white/90 mb-8">
                <li className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-200">
                  <span className="text-[#ffef1d] text-lg">▸</span> 
                  <span className="text-base">Estacionárias</span>
                </li>
                <li className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-200">
                  <span className="text-[#ffef1d] text-lg">▸</span> 
                  <span className="text-base">Start-Stop</span>
                </li>
                <li className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-200">
                  <span className="text-[#ffef1d] text-lg">▸</span> 
                  <span className="text-base">Bicicleta Elétrica</span>
                </li>
                <li className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-200">
                  <span className="text-[#ffef1d] text-lg">▸</span> 
                  <span className="text-base">Nobreak</span>
                </li>
              </ul>

              <button
                onClick={() => window.open('https://wa.me/5577999036565?text=Olá!%20Preciso%20de%20informações%20sobre%20produtos%20especiais.', '_blank')}
                className="w-full bg-gradient-to-r from-[#ffef1d] to-[#ffd700] text-[#0b0d10] py-3.5 rounded-full font-bold hover:from-[#d7282d] hover:to-[#ff4444] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                CONSULTAR
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-white text-lg mb-10 font-medium">Trabalhamos com as Melhores Marcas:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="group transition-all duration-300 hover:scale-110">
              <div className="bg-white rounded-2xl p-6 shadow-2xl w-36 h-36 md:w-44 md:h-44 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 hover:shadow-[#ffef1d]/30 border-2 border-transparent hover:border-[#ffef1d]/20">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/megabaterias/moura-logo.png"
                  alt="Moura"
                  className="w-full h-full object-contain p-2"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="group transition-all duration-300 hover:scale-110">
              <div className="bg-white rounded-2xl p-6 shadow-2xl w-36 h-36 md:w-44 md:h-44 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 hover:shadow-[#ffef1d]/30 border-2 border-transparent hover:border-[#ffef1d]/20">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/megabaterias/zetta.png"
                  alt="Zetta"
                  className="w-full h-full object-contain p-2"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="group transition-all duration-300 hover:scale-110">
              <div className="bg-white rounded-2xl p-6 shadow-2xl w-36 h-36 md:w-44 md:h-44 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 hover:shadow-[#ffef1d]/30 border-2 border-transparent hover:border-[#ffef1d]/20">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/megabaterias/Cral.png"
                  alt="Cral"
                  className="w-full h-full object-contain p-2"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
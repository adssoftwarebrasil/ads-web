import { useState } from 'react';
import { Flame, Droplet, Truck, ArrowRight } from 'lucide-react';

const productImages = [
  'https://storage.lucasmendes.dev/site-sp/Imperio%20Gas%2Fimg2%2Fbotijao-original.webp',
  'https://storage.lucasmendes.dev/site-sp/Imperio%20Gas%2Fimg%2Fbotijao-prateado-anuncio.webp',
  'https://storage.lucasmendes.dev/site-sp/Imperio%20Gas%2Fimg%2Fcilindros-de-gas.webp',
  'https://storage.lucasmendes.dev/site-sp/Imperio%20Gas%2Fimg%2Fcilindros-gas-prateados.webp',
];

export default function Products() {
  const [activeTab, setActiveTab] = useState<'gas' | 'agua'>('gas');

  return (
    <section id="produtos" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in animate-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">Nossos Produtos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A <strong>Império Gás</strong> garante qualidade e entrega rápida para sua residência ou comércio.
          </p>
        </div>
        <div className="flex justify-center mb-16">
          <div className="bg-white p-2 rounded-full inline-flex shadow-md border border-gray-100">
            <button
              onClick={() => setActiveTab('gas')}
              className={
                activeTab === 'gas'
                  ? 'flex items-center gap-3 px-6 sm:px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 bg-[#DEAC6C] text-black shadow-sm'
                  : 'flex items-center gap-3 px-6 sm:px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 text-gray-500 hover:text-gray-900 hover:bg-gray-50'
              }
            >
              <Flame className={activeTab === 'gas' ? 'w-6 h-6 fill-black' : 'w-6 h-6 fill-transparent'} />
              Gás de Cozinha
            </button>
            <button
              onClick={() => setActiveTab('agua')}
              className={
                activeTab === 'agua'
                  ? 'flex items-center gap-3 px-6 sm:px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 bg-[#DEAC6C] text-black shadow-sm'
                  : 'flex items-center gap-3 px-6 sm:px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 text-gray-500 hover:text-gray-900 hover:bg-gray-50'
              }
            >
              <Droplet className={activeTab === 'agua' ? 'w-6 h-6 fill-black' : 'w-6 h-6 fill-transparent'} />
              Água Mineral
            </button>
          </div>
        </div>
        <div className="min-h-[500px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center animate-fade-in-up">
            <div className="order-2 lg:order-1 space-y-8">
              <div>
                <span className="inline-block bg-[#DEAC6C]/20 text-[#966b36] font-bold px-4 py-1.5 rounded-full text-sm mb-4">
                  Revenda Autorizada
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Energia e Segurança com a <span className="text-[#DEAC6C]">Império Gás</span>
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  A Império Gás traz até você a tradição da <strong>Nacional Gás</strong>. Confiança, peso certo e a
                  chama azul que sua cozinha merece, com a entrega mais rápida da região.
                </p>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-[#DEAC6C]/30 transition-colors">
                  <div className="bg-[#DEAC6C]/20 p-2.5 rounded-xl flex-shrink-0 mt-1">
                    <Flame className="w-6 h-6 text-[#DEAC6C]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Gás P13 (Residencial)</h4>
                    <p className="text-gray-600">
                      O botijão ideal para sua casa. Disponível no modelo tradicional e na{' '}
                      <span className="font-bold text-[#966b36]">Pratinha Original</span>.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-[#DEAC6C]/30 transition-colors">
                  <div className="bg-[#DEAC6C]/20 p-2.5 rounded-xl flex-shrink-0 mt-1">
                    <Truck className="w-6 h-6 text-[#DEAC6C]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Gás P45 (Comercial)</h4>
                    <p className="text-gray-600">
                      Solução de alta performance para condomínios, restaurantes e indústrias.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="pt-4">
                <a
                  href="https://wa.me/556281556605?text=Ol%C3%A1%2C%20Imp%C3%A9rio%20G%C3%A1s!%20Gostaria%20de%20pedir%20um%20G%C3%A1s%20de%20Cozinha."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#DEAC6C] text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#c99656] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto group"
                >
                  Pedir Gás Agora
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 sm:gap-6">
              {productImages.map((src, i) => (
                <div
                  key={i}
                  className="group relative rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 aspect-[3/4] bg-white border border-gray-100"
                >
                  <img
                    src={src}
                    alt="Botijão de Gás - Império Gás"
                    loading="lazy"
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 ring-1 ring-black/5 rounded-[2rem] pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

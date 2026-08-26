import { Leaf } from 'lucide-react';

export default function Responsibility() {
  return (
    <section className="relative h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/agroplantec%2FProduzindo%20com%20responsabilidade-paralax.jpeg"
          alt="Responsabilidade"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      </div>
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-[rgb(138,154,39)]/20 backdrop-blur-md border-2 border-[rgb(138,154,39)]/40 rounded-full mb-8">
          <Leaf className="lucide lucide-leaf w-10 h-10 text-[rgb(138,154,39)]" />
        </div>
        <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Produzindo com<span className="block text-[rgb(138,154,39)] mt-2">Responsabilidade</span>
        </h2>
        <p className="text-gray-200 text-lg lg:text-xl mb-10 max-w-2xl mx-auto">
          Comprometidos com práticas sustentáveis que respeitam a natureza e garantem um futuro melhor.
        </p>
        <button className="inline-flex items-center justify-center px-10 py-5 bg-[rgb(138,154,39)] text-white text-lg font-bold rounded-xl hover:bg-[rgb(118,134,29)] transition-all duration-300 shadow-2xl shadow-[rgb(138,154,39)]/40 hover:shadow-[rgb(138,154,39)]/60 hover:-translate-y-1">
          Saiba Mais
        </button>
      </div>
    </section>
  );
}

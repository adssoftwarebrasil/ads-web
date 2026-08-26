import { ShieldCheck } from 'lucide-react';

const insurers = ['Porto Seguro', 'Itaú Seguros', 'Azul Seguros', 'Suhai'];

export default function Credentials() {
  return (
    <section id="credentials" className="py-20 md:py-28 bg-[#0d1f3c]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <span className="text-[#f39c12] font-bold text-sm uppercase tracking-widest">
            Parcerias oficiais
          </span>
          <h2 className="mt-2 text-3xl md:text-5xl font-black text-white leading-tight">
            Seguradoras Credenciadas
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Trabalhamos diretamente com as maiores seguradoras do Brasil. Traga sua apólice e cuide do seu carro sem complicações.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {insurers.map((name) => (
            <div
              key={name}
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#f39c12]/40 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 transition-all duration-300 group"
            >
              <ShieldCheck className="lucide lucide-shield-check w-10 h-10 text-[#f39c12] group-hover:scale-110 transition-transform duration-300" />
              <span className="text-white font-bold text-center text-base">{name}</span>
              <span className="text-gray-500 text-xs uppercase tracking-wider">Credenciado</span>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
          <ShieldCheck className="lucide lucide-shield-check w-12 h-12 text-[#f39c12] mx-auto mb-4" />
          <h3 className="text-white text-xl font-bold mb-2">Seu seguro aceito aqui</h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            Se você possui seguro nas seguradoras acima, podemos atender diretamente pelo seu plano. Entre em contato e saiba como funciona.
          </p>
          <a
            href="https://wa.me/5581996457782"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-[#f39c12] hover:bg-[#e08e0b] text-[#0d1f3c] font-black px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-105"
          >
            Consultar meu seguro
          </a>
        </div>
      </div>
    </section>
  );
}

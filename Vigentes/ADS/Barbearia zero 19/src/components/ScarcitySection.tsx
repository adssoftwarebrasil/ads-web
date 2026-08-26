import { WHATSAPP_URL } from '../constants';

export default function ScarcitySection() {
  return (
    <section className="py-32 relative overflow-hidden bg-black text-center">
      <div className="absolute inset-0 opacity-20 bg-[url('/barber_shop_interior_luxury_1771677240118.webp')] bg-cover bg-center bg-scroll"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl font-outfit font-bold mb-6 animate-fade-in-scale">
          Agenda limitada <span className="text-premium-red">diariamente.</span>
        </h2>
        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light">Garanta seu horário agora e evite filas. Nossa qualidade exige exclusividade.</p>
        <a
          href={WHATSAPP_URL}
          className="btn-whatsapp inline-block bg-premium-red text-white text-2xl px-12 py-6 rounded-xl font-outfit font-bold shadow-2xl shadow-premium-red/30 animate-pulse-slow hover:scale-105 active:scale-90 transition-transform"
        >
          QUERO MEU HORÁRIO AGORA
        </a>
      </div>
    </section>
  );
}

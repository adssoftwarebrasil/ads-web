import { Phone, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-white via-[#FFFEF0] to-[#FFD700]/20"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-[#333333]">
              Sua bateria arriou em Niquelândia?
              <br />
              <span className="text-[#FFD700]">A gente resolve agora!</span>
            </h2>
            <p className="text-xl md:text-2xl mb-4 leading-relaxed text-gray-700">
              A Impacto Baterias leva até você a energia que seu carro precisa com a agilidade que você merece.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-8">
              Ligou, chegou e instalou!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+5562985296219"
                className="bg-[#FFD700] text-[#333333] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FFC700] transition flex items-center justify-center gap-2 shadow-lg"
              >
                <Phone className="w-6 h-6" />
                LIGAR AGORA
              </a>
              <a
                href="https://wa.me/5562996175592"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#333333] border-2 border-[#FFD700] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                WHATSAPP
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://storage.lucasmendes.dev/site-sp/impactobaterias%2Fimpactobaterias.jpeg"
              alt="Impacto Baterias Niquelândia"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

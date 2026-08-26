import { useInView } from '../hooks/useInView';

const WHATSAPP_URL =
  'https://wa.me/5599991458080?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações';

export default function PorqueContratar() {
  const header = useInView<HTMLDivElement>();
  const images = useInView<HTMLDivElement>();
  const cta = useInView<HTMLDivElement>();

  return (
    <section className="bg-[rgb(245,245,245)] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div
          ref={header.ref}
          className={`text-center mb-12 transition-all duration-700 ${
            header.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-[rgb(227,17,35)] uppercase tracking-wider text-sm font-semibold mb-3">
            Porque Contratar
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(3,3,4)] mb-4">
            Confiança e Qualidade Comprovada
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Escolha a excelência e segurança para seu carro.
          </p>
        </div>
        <div
          ref={images.ref}
          className={`grid md:grid-cols-2 gap-8 mb-12 transition-all duration-700 delay-200 ${
            images.inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src="https://storage.lucasmendes.dev/site-sp/PNEU%20ZERO%2Fimg%2FPorque%20Contratar.png"
              alt="Porque Contratar"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src="https://storage.lucasmendes.dev/site-sp/PNEU%20ZERO%2Fimg%2FPorque%20Contratar%2002.webp"
              alt="Porque Contratar 02"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        <div
          ref={cta.ref}
          className={`text-center transition-all duration-700 delay-300 ${
            cta.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-gray-800 text-xl md:text-2xl font-semibold mb-8">
            Expertise Comprovada - Décadas de experiência no mercado
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(227,17,35)] text-white px-10 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Enviar WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

import { Award, Package } from 'lucide-react';
import { WHATSAPP_URL } from '../data';

export default function WhyChoose() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/belezaporfernanda%2FPor%20que%20contratar-paralax.webp")',
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Por Que Escolher o Nosso Salão?
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            Aqui você encontra inovação, qualidade e um atendimento especial que vão transformar sua
            experiência de beleza.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-black rounded-2xl mb-4">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Excelência no Atendimento</h3>
            <p className="text-gray-200 text-lg">Nosso compromisso é com a sua satisfação.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-black rounded-2xl mb-4">
              <Package className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Variedade de Serviços</h3>
            <p className="text-gray-200 text-lg">Oferecemos tudo o que você precisa em um só lugar.</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Agendar um horário
          </a>
        </div>
      </div>
    </section>
  );
}

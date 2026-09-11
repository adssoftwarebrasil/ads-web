import { Star, ExternalLink } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(0,87,101)] mb-4">
            O Que Nossos Pacientes Dizem
          </h2>
          <p className="text-lg md:text-xl text-[rgb(42,42,42)] max-w-3xl mx-auto">
            Confira avaliações reais no Google
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-12 rounded-3xl shadow-xl text-center border-t-8 border-[rgb(107,218,229)]">
            <div className="flex justify-center mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={36}
                  className="lucide lucide-star text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <p className="text-2xl text-[rgb(42,42,42)] mb-8 italic">
              "Atendimento excepcional e resultados incríveis!"
            </p>
            <a
              href="https://share.google/zHJTZYgRvCd55ND9b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[rgb(107,218,229)] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[rgb(0,182,204)] transition-all shadow-lg transform hover:scale-105"
            >
              VER TODAS AS AVALIAÇÕES NO GOOGLE
              <ExternalLink size={24} className="lucide lucide-external-link " />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

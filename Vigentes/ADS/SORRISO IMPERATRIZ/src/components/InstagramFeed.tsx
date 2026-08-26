import { Instagram } from 'lucide-react';

interface Reel {
  id: string;
  title: string;
  text: string;
}

const reels: Reel[] = [
  {
    id: 'DMseAaduhTq',
    title: 'Invisalign - Tecnologia e Praticidade',
    text: 'Alinhar o sorriso sem mudar seu estilo de vida? É possível com Invisalign®! Com conforto, discrição e resultados incríveis.',
  },
  {
    id: 'DJRl39RuuwB',
    title: 'Implantes Dentários - Guia Completo',
    text: 'Pensando em fazer implantes dentários? Entenda o procedimento, cuidados necessários e se você está apto.',
  },
  {
    id: 'DFcyNQFJDb5',
    title: 'Dentes Que Não Nascem',
    text: 'Você sabia que alguns dentes podem não nascer na sua boca? Entenda mais sobre esse assunto!',
  },
];

export default function InstagramFeed() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Instagram className="lucide lucide-instagram w-4 h-4" />
            Siga no Instagram
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(13,51,98)] mb-4">
            Dicas e Novidades
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Acompanhe nosso Instagram para receber dicas, informações sobre
            tratamentos e novidades da clínica
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="group bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/5] bg-gradient-to-br from-purple-100 to-pink-100">
                <iframe
                  src={`https://www.instagram.com/reel/${reel.id}/embed`}
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allow="encrypted-media"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[rgb(13,51,98)] mb-2 group-hover:text-[rgb(212,175,55)] transition-colors">
                  {reel.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {reel.text}
                </p>
                <a
                  href={`https://www.instagram.com/reel/${reel.id}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[rgb(13,51,98)] hover:text-[rgb(212,175,55)] font-semibold text-sm transition-colors"
                >
                  <Instagram className="lucide lucide-instagram w-4 h-4" />
                  Ver no Instagram
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/dr.maykonroberto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
          >
            <Instagram className="lucide lucide-instagram w-5 h-5" />
            Seguir @dr.maykonroberto
          </a>
        </div>
      </div>
    </section>
  );
}

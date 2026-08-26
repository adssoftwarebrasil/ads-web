import { Instagram } from 'lucide-react';

export default function InstagramSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D587A] mb-4">Siga-nos no Instagram</h2>
          <p className="text-lg text-gray-600">@reidoternoriopreto - Inspire-se com nossos looks</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <iframe
            src="https://www.instagram.com/reel/DQPPq6WAMvH/embed"
            className="w-full rounded-lg shadow-lg"
            allowFullScreen
            scrolling="no"
            style={{ minHeight: '600px', borderStyle: 'none' }}
          ></iframe>
        </div>
        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/reidoternoriopreto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-105 font-semibold"
          >
            <Instagram size={20} />
            Ver Mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

import { MapPin, Navigation } from 'lucide-react';

const mapsSearchUrl =
  'https://www.google.com/maps/search/?api=1&query=Av.+T-1,+917+-+Sala+05+-+St.+Bueno,+Goiânia+-+GO';

export default function Localizacao() {
  return (
    <section className="py-20 md:py-32 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Visite Nossa Loja</h2>
          <p className="text-lg text-gray-400">Estamos localizados no coração de Goiânia, prontos para receber você</p>
        </div>
        <div className="w-full rounded-2xl overflow-hidden border-4 border-slate-700 shadow-2xl h-96 md:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.0158715744864!2d-49.26453932456787!3d-16.72005798411958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef6f5df7f6d0b%3A0x9c8c5c5c5c5c5c5c!2sAv.%20T-1%2C%20917%20-%20St.%20Bueno%2C%20Goi%C3%A2nia%20-%20GO%2C%2074210-098!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização 4K Iluminação"
            style={{ border: '0px' }}
          ></iframe>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
          <a
            href={mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
          >
            <MapPin size={20} className="text-yellow-400" />
            <span>Av. T-1, 917 - Sala 05 - St. Bueno</span>
          </a>
          <div className="flex items-center gap-2 text-gray-300">
            <Navigation size={20} className="text-yellow-400" />
            <span>Goiânia - GO, 74210-098</span>
          </div>
        </div>
      </div>
    </section>
  );
}

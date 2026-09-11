import { Star, ExternalLink, MapPin } from 'lucide-react';

interface Review {
  text: string;
  name: string;
  time: string;
}

const reviews: Review[] = [
  {
    text: 'Internet de qualidade, serviço fora do comum, funcionários ótimos e bem educados!',
    name: 'Souzax7',
    time: '4 meses atrás',
  },
  {
    text: 'Foi a melhor experiência, internet ótima 100% boa!!!!',
    name: 'Maria Eduarda',
    time: '4 meses atrás',
  },
  {
    text: 'Vem pra Melhor q está tendo You Connect...',
    name: 'Larissa Santos',
    time: '4 meses atrás',
  },
  {
    text: 'Empresa com um excelente atendimento.',
    name: 'MAGALY SILVA',
    time: '4 meses atrás',
  },
];

const GOOGLE_REVIEW_URL =
  'https://www.google.com/maps/place/You+Connect/@-8.2184291,-34.92884,17z/data=!4m18!1m9!3m8!1s0x7aae1bd6bfde9d7:0x8fb57adde20bd12f!2sYou+Connect!8m2!3d-8.2184397!4d-34.92884!9m1!1b1!16s%2Fg%2F11t0tjhqqs!3m7!1s0x7aae1bd6bfde9d7:0x8fb57adde20bd12f!8m2!3d-8.2184397!4d-34.92884!9m1!1b1!16s%2Fg%2F11t0tjhqqs?hl=pt&entry=ttu&g_ep=EgoyMDI1MTAwNy4wIKXMDSoASAFQAw%3D%3D';

const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.8440967729025!2d-34.92884000019196!3d-8.21842906495776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aae1bd6bfde9d7%3A0x8fb57adde20bd12f!2sYou%20Connect!5e0!3m2!1spt-BR!2sbr!4v1760055015418!5m2!1spt-BR!2sbr';

export default function Testimonials() {
  return (
    <section id="testimonials">
      <section id="avaliacoes" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-4">O que nossos clientes</h2>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#FA6F2C] mb-16">estão dizendo</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{r.text}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900">{r.name}</p>
                    <p className="text-sm text-gray-500">{r.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#FA6F2C] mb-12">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Avalie nossa empresa no Google</h3>
              <p className="text-gray-600">Sua opinião é muito importante para nós!</p>
            </div>
            <div className="flex justify-center">
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FA6F2C] hover:bg-[#E85E1B] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Star className="w-5 h-5" />
                AVALIAR NO GOOGLE
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-[#FA6F2C]" />
              <h3 className="text-2xl font-bold text-white">Encontre-nos no Mapa</h3>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src={MAP_EMBED}
                width="100%"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização You Connect"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

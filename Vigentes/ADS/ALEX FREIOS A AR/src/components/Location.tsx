import { MapPin, Navigation, Clock, Instagram, ExternalLink } from 'lucide-react';

const gallery = [
  { src: 'https://storage.lucasmendes.dev/site-sp/aeafreios%2Fimg%2FWhatsApp%20Image%202025-12-05%20at%2014.33.22.jpeg', alt: 'Oficina 1' },
  { src: 'https://storage.lucasmendes.dev/site-sp/aeafreios%2Fimg%2FWhatsApp%20Image%202025-12-05%20at%2014.33.29.jpeg', alt: 'Oficina 2' },
  { src: 'https://storage.lucasmendes.dev/site-sp/aeafreios%2Fimg%2FWhatsApp%20Image%202025-12-05%20at%2014.33.31.jpeg', alt: 'Oficina 3' },
  { src: 'https://storage.lucasmendes.dev/site-sp/aeafreios%2Fimg%2FWhatsApp%20Image%202025-12-05%20at%2014.33.32.jpeg', alt: 'Oficina 4' },
  { src: 'https://storage.lucasmendes.dev/site-sp/aeafreios%2Fimg%2FWhatsApp%20Image%202025-12-05%20at%2014.33.45.jpeg', alt: 'Oficina 5' },
  { src: 'https://storage.lucasmendes.dev/site-sp/aeafreios%2Fimg%2FWhatsApp%20Image%202025-12-05%20at%2014.33.49.jpeg', alt: 'Oficina 6' },
  { src: 'https://storage.lucasmendes.dev/site-sp/aeafreios%2Fimg%2FWhatsApp%20Image%202025-12-05%20at%2014.33.52.jpeg', alt: 'Oficina 7' },
  { src: 'https://storage.lucasmendes.dev/site-sp/aeafreios%2Fimg%2FWhatsApp%20Image%202025-12-05%20at%2014.34.03.jpeg', alt: 'Oficina 8' },
  { src: 'https://storage.lucasmendes.dev/site-sp/aeafreios%2Fimg%2FWhatsApp%20Image%202025-12-05%20at%2014.34.21.jpeg', alt: 'Oficina 9' },
];

export default function Location() {
  return (
    <div id="location">
      <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-100/50 skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-3 gap-4 mb-20">
            {gallery.map((g) => (
              <div
                key={g.alt}
                className="aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <img src={g.src} alt={g.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[rgb(230,10,12)] text-xs font-bold uppercase tracking-wider mb-6">
                <MapPin className="lucide lucide-map-pin" width={14} height={14} />
                Base Operacional
              </div>
              <h2 className="text-4xl font-extrabold text-[rgb(8,36,75)] mb-6 leading-tight">
                Sediados no Ceará, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(230,10,12)] to-red-600">
                  Atendendo o Brasil.
                </span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Nossa oficina em Fortaleza é o ponto central de inteligência. Recebemos componentes de todo o país via
                transportadora para reparo especializado.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-blue-100 transition-colors group">
                  <div className="bg-blue-50 p-3 rounded-lg text-[rgb(8,36,75)] group-hover:bg-[rgb(8,36,75)] group-hover:text-white transition-colors">
                    <Navigation width={24} height={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Endereço Físico</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      Rua Generoso de França - Paupina<br />
                      Fortaleza - CE, 60.874-350
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Rua%20Generoso%20de%20Fran%C3%A7a%2C%20Paupina%2C%20Fortaleza%20-%20CE%2C%2060874-350"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-xs font-bold text-[rgb(230,10,12)] mt-2 hover:underline"
                    >
                      Abrir no Waze/Maps <ExternalLink className="lucide lucide-external-link ml-1" width={12} height={12} />
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-blue-100 transition-colors group">
                  <div className="bg-blue-50 p-3 rounded-lg text-[rgb(8,36,75)] group-hover:bg-[rgb(8,36,75)] group-hover:text-white transition-colors">
                    <Clock width={24} height={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Horário de Funcionamento</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      Segunda a Sexta: 08h às 17h<br />
                      <span className="text-xs text-gray-400">Sábado e Domingo: Fechado</span>
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="https://www.instagram.com/alexfreiosaar"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transform hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Instagram width={24} height={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium opacity-90">Siga nosso dia a dia</span>
                    <span className="font-bold">@alexfreiosaar</span>
                  </div>
                </div>
                <ExternalLink className="lucide lucide-external-link opacity-80 group-hover:translate-x-1 transition-transform" width={20} height={20} />
              </a>
            </div>
            <div className="h-full min-h-[450px] relative">
              <div className="absolute inset-0 bg-white p-2 rounded-3xl shadow-2xl border border-gray-200 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <iframe
                  src="https://maps.google.com/maps?q=Rua%20Generoso%20de%20Fran%C3%A7a%2C%20Paupina%2C%20Fortaleza%20-%20CE%2C%2060874-350&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa da Oficina Alex Freios a Ar"
                  className="filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                  style={{ border: '0px', borderRadius: '1rem' }}
                ></iframe>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[rgb(8,36,75)] text-white p-6 rounded-xl shadow-xl hidden md:block max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold">Base Ativa</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Ponto de recebimento para peças enviadas de todo o território nacional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { ArrowRight, Play } from 'lucide-react';
import { scrollToSection } from '../lib/whatsapp';

const SERVICES = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/atelienoivaecia%2FVestidos%20de%20Noiva.webp',
    title: 'Vestidos de Noiva',
    desc: 'Modelos exclusivos e personalizados para cada noiva',
  },
  {
    img: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=atelienoivaecia%2Fimage%2075.png&version_id=null',
    title: 'Trajes para Noivo',
    desc: 'Aluguel de ternos e smokings sofisticados',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/atelienoivaecia%2FModa%20Festa.webp',
    title: 'Moda Festa',
    desc: 'Vestidos para madrinhas, formandas e eventos especiais',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/atelienoivaecia%2FMadrinhas.webp',
    title: 'Madrinhas',
    desc: 'Sofisticação e charme para acompanhar a noiva',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/atelienoivaecia%2FDebutantes.webp',
    title: 'Debutantes',
    desc: 'Vestidos de 15 anos para uma festa inesquecível',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/atelienoivaecia%2FDaminhas%20e%20Pajens.webp',
    title: 'Daminhas e Pajens',
    desc: 'Modelos delicados para os pequenos da cerimônia',
  },
];

const VIDEOS = [
  'https://storage.lucasmendes.dev/site-sp/atelienoivaecia%2Fgaleria%2FWhatsApp%20Video%202026-01-19%20at%2015.54.53%20%281%29.mp4',
  'https://storage.lucasmendes.dev/site-sp/atelienoivaecia%2Fgaleria%2FWhatsApp%20Video%202026-01-19%20at%2015.54.53%20%282%29.mp4',
  'https://storage.lucasmendes.dev/site-sp/atelienoivaecia%2Fgaleria%2FWhatsApp%20Video%202026-01-19%20at%2015.54.53.mp4',
];

const GALLERY = [
  'https://storage.lucasmendes.dev/site-sp/atelienoivaecia%2Fgaleria%2FIMG_4622%20%281%29.jpeg',
  'https://storage.lucasmendes.dev/site-sp/atelienoivaecia%2Fgaleria%2FIMG_9283.jpeg',
  'https://storage.lucasmendes.dev/site-sp/atelienoivaecia%2Fgaleria%2Fpedro12312-13%20%281%29.JPG',
  'https://storage.lucasmendes.dev/site-sp/atelienoivaecia%2Fgaleria%2Fpedro12312-14%20%281%29.JPG',
  'https://storage.lucasmendes.dev/site-sp/atelienoivaecia%2Fgaleria%2Fpedrofutt-32%20%281%29.JPG',
  'https://storage.lucasmendes.dev/site-sp/atelienoivaecia%2Fgaleria%2Fpedrofutt-43%20%281%29.JPG',
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 uppercase tracking-tight">Nossos serviços</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Vestidos e trajes para ocasiões inesquecíveis</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {SERVICES.map((s) => (
            <div key={s.title} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-[28rem] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-gray-200 mb-4">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-32">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 italic">Momento Ateliê</h2>
            <div className="w-24 h-1 bg-[#721515] mx-auto rounded-full"></div>
          </div>
          <div className="mb-8">
            <p className="text-gray-500 mb-6 text-center uppercase tracking-widest text-sm">Vídeos em destaque</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {VIDEOS.map((src) => (
                <div key={src} className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                  <video src={src} loop playsInline autoPlay muted className="w-full h-full object-cover" preload="metadata"></video>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <Play className="w-4 h-4 text-white fill-current" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-gray-500 mb-6 mt-12 text-center uppercase tracking-widest text-sm">Nossa Galeria</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {GALLERY.map((src) => (
                <div key={src} className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md group">
                  <img src={src} alt="Galeria Ateliê" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-20">
          <button
            onClick={() => scrollToSection('contact')}
            className="group inline-flex items-center gap-3 bg-[#721515] hover:bg-[#8b1a1a] text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Agende sua Visita
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

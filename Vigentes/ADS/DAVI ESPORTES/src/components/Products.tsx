import { CircleDot, Dumbbell, Target, Sparkles, Trophy, Backpack, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface GalleryItem {
  img: string;
  caption: string;
}

const gallery: GalleryItem[] = [
  { img: 'https://storage.lucasmendes.dev/site-sp/daviesportes%2Fimg%2FIMG-20251209-WA0160.jpg', caption: 'Qualidade e durabilidade' },
  { img: 'https://storage.lucasmendes.dev/site-sp/daviesportes%2Fimg%2FIMG-20251209-WA0161.jpg', caption: 'Tudo que você precisa' },
  { img: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=daviesportes%2FTrionda_28cropped29.png&version_id=null', caption: 'Produtos certificados' },
  { img: 'https://storage.lucasmendes.dev/site-sp/daviesportes%2Fimg%2Fhero.jpg', caption: 'Performance garantida' },
  { img: 'https://storage.lucasmendes.dev/site-sp/daviesportes%2Fimg%2Fnossa-historia.jpg', caption: 'Para atletas exigentes' },
  { img: 'https://storage.lucasmendes.dev/site-sp/daviesportes%2Fimg%2FIMG-20251209-WA0168.jpg', caption: 'Últimos lançamentos' },
];

interface Specialty {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const specialties: Specialty[] = [
  { icon: CircleDot, title: 'Artigos Esportivos', desc: 'Bolas, redes esportivas, camisas oficiais de times e tudo para seu esporte favorito' },
  { icon: Dumbbell, title: 'Fitness & Academia', desc: 'Roupas de academia, acessórios e equipamentos para seu treino' },
  { icon: Target, title: 'Armas e Munições', desc: 'Equipamentos de fogo, munições e toda documentação necessária' },
  { icon: Sparkles, title: 'Fogos de Artifício', desc: 'Variedade completa para suas celebrações especiais' },
  { icon: Trophy, title: 'Troféus e Medalhas', desc: 'Personalizados para suas conquistas e eventos esportivos' },
  { icon: Backpack, title: 'Artigos de Caça', desc: 'Mochilas, equipamentos e tudo para aventuras ao ar livre' },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#363435] text-sm md:text-base font-bold uppercase tracking-wider px-4 py-2 bg-[#FDF341]/20 rounded-full border border-[#FDF341]/30">
              Nossos Produtos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#363435] mb-4">Confira Nossa Galeria</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Produtos de marcas famosas com qualidade garantida</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {gallery.map((item) => (
            <div
              key={item.img}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white mb-2"></h3>
                  <p className="text-white/90 text-sm">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-[#363435] mb-4">Nossas Especialidades</h3>
          <div className="w-24 h-1 bg-[#FDF341] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Atendemos todas as suas necessidades esportivas com excelência</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((sp) => {
            const Icon = sp.icon;
            return (
              <div
                key={sp.title}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#363435] to-[#2C2C2C] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FDF341]/20 cursor-pointer border border-white/5"
              >
                <div className="relative z-10">
                  <div className="mb-4 text-[#FDF341] transform transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300">
                    <Icon size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FDF341] transition-colors duration-300">{sp.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{sp.desc}</p>
                  <div className="flex items-center gap-2 text-[#FDF341] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FDF341]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-16">
          <a
            href="https://daviesportes.lojavirtualnuvem.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#FDF341] text-[#363435] px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(253,243,65,0.5)] group"
          >
            Ver Todos os Produtos
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

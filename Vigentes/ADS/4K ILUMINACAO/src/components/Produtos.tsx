import { ArrowRight } from 'lucide-react';
import { scrollToId } from '../lib/scroll';

interface Produto {
  nome: string;
  img: string;
}

const produtos: Produto[] = [
  { nome: 'Fitas de LED', img: 'https://storage.lucasmendes.dev/site-sp/4k%20iluminacao/produtos/fitas-de-led.webp' },
  { nome: 'Lâmpadas LED', img: 'https://storage.lucasmendes.dev/site-sp/4k%20iluminacao%2Falteracao%2Flampada-de-led.webp' },
  { nome: 'Downlight LED', img: 'https://storage.lucasmendes.dev/site-sp/4k%20iluminacao/produtos/dowlight-led.webp' },
  { nome: 'Perfis para Fita LED', img: 'https://storage.lucasmendes.dev/site-sp/4k%20iluminacao/produtos/perfis-para-lampada-de-led.webp' },
  { nome: 'Refletores', img: 'https://storage.lucasmendes.dev/site-sp/4k%20iluminacao/produtos/refletores.webp' },
  { nome: 'Arandelas', img: 'https://storage.lucasmendes.dev/site-sp/4k%20iluminacao/produtos/arandelas.webp' },
  { nome: 'Lâmpadas Vintage', img: 'https://storage.lucasmendes.dev/site-sp/4k%20iluminacao/produtos/lampadas-vintage.webp' },
  { nome: 'Iluminação de Jardim', img: 'https://storage.lucasmendes.dev/site-sp/4k%20iluminacao/produtos/ilumina%C3%A7ao-de-jardim.webp' },
  { nome: 'Iluminação de Natal', img: 'https://storage.lucasmendes.dev/site-sp/4k%20iluminacao/produtos/iluminacao-de-natal.webp' },
  { nome: 'Trilhos Eletrificados', img: 'https://storage.lucasmendes.dev/site-sp/4k%20iluminacao%2Falteracao%2Ftrilhos-eletrificados.webp' },
  { nome: 'Placas de LED', img: 'https://storage.lucasmendes.dev/site-sp/4k%20iluminacao/produtos/placas-de-led.webp' },
  { nome: 'Sensores de Iluminação', img: 'https://storage.lucasmendes.dev/site-sp/4k%20iluminacao/produtos/sensores-de-iluminacao.webp' },
  { nome: 'Driver para Fita LED', img: 'https://storage.lucasmendes.dev/site-sp/4k%20iluminacao/produtos/driver-para-fita-de-led.webp' },
  { nome: 'Perfil para Marcenaria', img: 'https://storage.lucasmendes.dev/site-sp/4k%20iluminacao%2Falteracao%2Fperfil-para-marcenaria.webp' },
  { nome: 'Lâmpadas Tubulares', img: 'https://storage.lucasmendes.dev/site-sp/4k%20iluminacao%2Falteracao%2Flampadas-tubulares.webp' },
];

export default function Produtos() {
  return (
    <section id="produtos" className="py-20 md:py-32 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-semibold mb-4">
            Nosso Catálogo
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Soluções Completas em Iluminação LED</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Do básico ao sofisticado, encontre tudo que você precisa para projetos residenciais, comerciais e eventos especiais
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {produtos.map((produto) => (
            <button
              key={produto.nome}
              onClick={() => scrollToId('contato')}
              className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-700 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-yellow-400/10 hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-yellow-400/50"
              aria-label={`Saber mais sobre ${produto.nome}`}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={produto.img}
                  alt={produto.nome}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">
                  {produto.nome}
                  <ArrowRight
                    size={24}
                    className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity inline-block ml-2"
                  />
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

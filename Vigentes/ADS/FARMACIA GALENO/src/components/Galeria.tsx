import { Camera } from 'lucide-react';

const BASE = 'https://storage.lucasmendes.dev/site-sp/farmacia%20galeno/galeria%20e%20funcionarios/';

const items = [
  { img: 'mulheres-uniformizadas-escritorio.webp', title: 'Família Galeno', span: 'col-span-2 row-span-2 ', height: 400 },
  { img: 'mulher-jaleco-rosa.webp', title: 'Nossa Equipe', span: '  ', height: 200 },
  { img: 'capsulas-amarelas-laboratorio.webp', title: 'Laboratório', span: '  ', height: 200 },
  { img: 'farmaceutico-lendo-livro.webp', title: 'Atualização Constante', span: '  ', height: 200 },
  { img: 'luvas-brancas-laboratorio.webp', title: 'Precisão', span: '  ', height: 200 },
  { img: 'mulher-computador-farmacia.webp', title: 'Atendimento', span: '  md:col-span-2', height: 200 },
  { img: 'luvas-capsulas-brancas.webp', title: 'Manipulação', span: '  ', height: 200 },
  { img: 'mulher-oculos-jaleco.webp', title: 'Profissionalismo', span: '  ', height: 200 },
  { img: 'mulher-computador-oculos.webp', title: 'Tecnologia', span: '  ', height: 200 },
  { img: 'mulher-segurando-pote.webp', title: 'Qualidade', span: '  ', height: 200 },
  { img: 'pessoas-farmacia-conversa.webp', title: 'Atendimento Personalizado', span: '  ', height: 200 },
];

export default function Galeria() {
  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-[rgb(40,84,48)] to-[rgb(95,141,77)]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <Camera size={20} className="text-[rgb(230,217,182)]" />
            <span className="text-white font-semibold">Nossa História</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Conheça Nosso Dia a Dia</h2>
          <p className="text-lg text-white/90 leading-relaxed">
            Cada imagem conta uma história de dedicação, profissionalismo e cuidado. Veja como trabalhamos para garantir sua saúde e bem-estar.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10 ${item.span}`}
              style={{ height: `${item.height}px` }}
            >
              <img
                src={BASE + item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(40,84,48)]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-white/80 text-sm">Clique para ampliar</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera size={20} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Maximize2, Instagram } from 'lucide-react';

const base = 'https://storage.lucasmendes.dev/site-sp/mecrolamentos/';

const imagens = [
  '04f64c3a121828877e15f6929f314690.jpg',
  '0c392aeb6f3143e403f7a33718def8d6.jpg',
  '1138445a67790875bf5d6f1642915de0.jpg',
  '231edcdf1e6c1087074bb359d57e96ca.jpg',
  '2e17d964c243b02976ae46aafb7e6339.jpg',
  '312018b8d8f8e0fc5b2e2e690e6c3f10.jpg',
  '317102da8b332847d37e899065b5e98f.jpg',
  '36f28afbbab615e4943933d146011f4d.jpg',
  '4069a61e4549bdb1d82baa3053d3b7ae.jpg',
  '41f9f13269520c278fcc3cf855bf0e30.jpg',
  '467e27177f8c053b62d8da43f563da7e.jpg',
  '52460b46cc9d44a33fac102305dfde3b.jpg',
  '62e7d5aa4984b16224d3c55655ca603b.jpg',
  '6d1cbf050cdc945fc310549a6b8221f1.jpg',
  '6ddd034409849692f398eb29e995d25f.jpg',
  '7656720ad25e5b77b7e0403ffea28cf3.jpg',
  '77d9e91f7cf820ab6827b0c2ff0b5f81.jpg',
  '8fa69e12bf921a2ed21adc56d4003474.jpg',
  '9f3328da6dafd6053e588c6b8ac718c5.jpg',
  'a051caac5affe1501e07563d4e90aa4a.jpg',
  'a98dde1f8fec949ebcba9a3db0c9866b.jpg',
  'bc1b6b69bd00ee4681927c560b8c9c67.jpg',
  'c685f342d45316d2607787761cd7913d.jpg',
  'fc088605378d6a52075fd38b8c7f30a5.jpg',
  'fc6e631559225255a38d6a2addd510d8.jpg',
];

export default function Galeria() {
  return (
    <section id="galeria" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#EC3132]/10 text-[#EC3132] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Catálogo Visual
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Nossos <span className="text-[#2B559F]">Produtos</span> em Destaque
          </h2>
          <div className="w-20 h-1.5 bg-[#EC3132] mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto">
            Peças de alta precisão e durabilidade. Confira nosso estoque e siga-nos para
            atualizações diárias.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {imagens.map((img, i) => (
            <div
              key={img}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <img
                src={base + img}
                alt={`Produto MEC Rolamentos ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/40 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2
                    width={20}
                    height={20}
                    className="lucide lucide-maximize2 text-white"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a
            href="https://www.instagram.com/MEC.ROLAMENTOS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#2B559F] hover:bg-[#1e3d73] text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-[#2B559F]/30 hover:-translate-y-1 transition-all duration-300"
          >
            <Instagram width={22} height={22} className="lucide lucide-instagram" />
            Siga @MEC.ROLAMENTOS
          </a>
        </div>
      </div>
    </section>
  );
}

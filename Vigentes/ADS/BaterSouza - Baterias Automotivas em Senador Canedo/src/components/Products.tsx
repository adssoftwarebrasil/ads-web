import { Car, Bike, Truck, Music, Sun, Battery, LucideIcon } from 'lucide-react';

interface Category {
  Icon: LucideIcon;
  iconName: string;
  title: string;
  text: string;
}

const categories: Category[] = [
  { Icon: Car, iconName: 'lucide-car', title: 'Carros', text: 'Baterias de alta performance para todos os modelos' },
  { Icon: Bike, iconName: 'lucide-bike', title: 'Motos', text: 'Baterias compactas e potentes para motocicletas' },
  { Icon: Truck, iconName: 'lucide-truck', title: 'Caminhões', text: 'Soluções robustas para veículos pesados' },
  { Icon: Music, iconName: 'lucide-music', title: 'Som Automotivo', text: 'Baterias para sistemas de áudio potentes' },
  { Icon: Sun, iconName: 'lucide-sun', title: 'Energia Solar', text: 'Baterias estacionárias para sistemas solares' },
  { Icon: Battery, iconName: 'lucide-battery', title: 'Nobreaks', text: 'Baterias para sistemas de energia ininterrupta' },
];

const brands = [
  { img: 'moura.webp', alt: 'Bateria Moura', name: 'Moura', featured: true },
  { img: 'bateria-automotiva-kf.webp', alt: 'Bateria KF', name: 'KF', featured: false },
  { img: 'bateria-carro-zetta.webp', alt: 'Bateria Zetta', name: 'Zetta', featured: false },
  { img: 'bateria-erbs.webp', alt: 'Bateria ERBS', name: 'ERBS', featured: false },
  { img: 'bateria-extranger.webp', alt: 'Bateria Extranger', name: 'Extranger', featured: false },
  { img: 'bateria-pioneiro.webp', alt: 'Bateria Pioneiro', name: 'Pioneiro', featured: false },
  { img: 'bater-life-bater-forte.webp', alt: 'Bateria BaterLife - BaterForte', name: 'BaterLife - BaterForte', featured: false },
];

const IMG_BASE = 'https://storage.lucasmendes.dev/site-sp/batersouza%2Fimg%2F';

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
            Soluções para <span className="text-yellow-500">Todo Tipo de Veículo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabalhamos com todas as linhas de baterias automotivas e estacionárias das melhores
            marcas do mercado
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {categories.map(({ Icon, iconName, title, text }) => (
            <div
              key={title}
              className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-6 hover:shadow-lg transition-all group hover:-translate-y-1"
            >
              <div className="text-blue-600 mb-4 group-hover:text-yellow-500 transition-colors">
                <Icon className={`lucide ${iconName} w-8 h-8`} width={24} height={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600">{text}</p>
            </div>
          ))}
        </div>
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img
                src={`${IMG_BASE}carro-branco-publicidade-bateria-10x-sem-juros.webp`}
                alt="Promoção"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">Condições Especiais de Pagamento</h3>
              <p className="text-xl mb-6 max-w-2xl mx-auto">
                Parcelamento facilitado para você trocar sua bateria sem pesar no bolso
              </p>
              <a
                href="http://wa.me/556292766466?text=Olá! Gostaria de saber sobre as condições de pagamento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors font-bold text-lg"
              >
                Consultar Condições
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Trabalhamos com as <span className="text-yellow-500">Melhores Marcas</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className={`
                  bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all border-2
                  flex flex-col items-center justify-between
                  w-[calc(50%-12px)] sm:w-[calc(33.33%-16px)] lg:w-[calc(25%-18px)]
                  ${brand.featured ? 'border-yellow-400' : 'border-gray-200'}
                  hover:border-blue-600 group
                `}
              >
                <img
                  src={`${IMG_BASE}${brand.img}`}
                  alt={brand.alt}
                  className="w-full h-32 object-contain mb-3 group-hover:scale-105 transition-transform"
                />
                <p className="text-center font-semibold text-gray-800">{brand.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Não encontrou o que procura? Entre em contato conosco!
          </p>
          <a
            href="http://wa.me/556292766466?text=Olá! Procuro uma bateria específica."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-bold text-lg"
          >
            Solicitar Orçamento Personalizado
          </a>
        </div>
      </div>
    </section>
  );
}

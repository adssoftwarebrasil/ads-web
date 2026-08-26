import {
  Sparkles,
  Heart,
  Truck,
  Droplet,
  ShoppingBag,
  Scissors,
  type LucideIcon,
} from 'lucide-react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=5511947279099&text&type=phone_number&app_absent=0';

interface Service {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  overlay: string;
}

const services: Service[] = [
  {
    title: 'Cromoterapia',
    description:
      'É uma prática integrativa que utiliza a projeção de luzes coloridas para estimular respostas físicas e emocionais nos animais. Principais benefícios: redução do estresse e da ansiedade, alívio da dor e inflamação, estimulação de energia e vitalidade, equilíbrio emocional e suporte na cicatrização.',
    image: 'https://storage.lucasmendes.dev/site-sp/animalyp%2FCromoterapia.jpg',
    icon: Sparkles,
    overlay: 'from-[#b900ba] to-purple-600',
  },
  {
    title: 'Ozonioterapia',
    description:
      'É uma terapia complementar que utiliza uma mistura de oxigênio e ozônio medicinal. Ela tem sido cada vez mais utilizada principalmente por seus efeitos anti-inflamatórios, antimicrobianos e de estímulos imunológicos.',
    image:
      'https://storage.lucasmendes.dev/site-sp/animalyp%2Fnovo%2FOzonioterapia.jpeg',
    icon: Heart,
    overlay: 'from-[#38d060] to-green-600',
  },
  {
    title: 'Serviço de Transporte',
    description:
      'Transporte seguro para levar seu pet até nós. Oferecemos um serviço confiável e confortável para que seu animal chegue com segurança ao nosso estabelecimento.',
    image:
      'https://storage.lucasmendes.dev/site-sp/animalyp%2FServic%CC%A7o%20de%20Transporte.jpg',
    icon: Truck,
    overlay: 'from-[#b900ba] to-pink-600',
  },
  {
    title: 'Hidratação de Pelagem',
    description:
      'Tratamento especial para pelagens secas. Utilizamos produtos de alta qualidade para deixar o pelo do seu pet macio, brilhante e saudável.',
    image:
      'https://storage.lucasmendes.dev/site-sp/animalyp%2Fnovo%2FHidratacao_de_Pelagem.jpeg',
    icon: Droplet,
    overlay: 'from-[#38d060] to-teal-600',
  },
  {
    title: 'Produtos Veterinários',
    description:
      'Medicamentos e produtos de higiene. Trabalhamos com as melhores marcas do mercado para garantir a saúde e bem-estar do seu pet.',
    image:
      'https://storage.lucasmendes.dev/site-sp/animalyp%2Fnovo%2FProdutos_veterinarios.jpg',
    icon: ShoppingBag,
    overlay: 'from-[#b900ba] to-purple-600',
  },
  {
    title: 'Banho e Tosa',
    description:
      'Serviço completo de banho e tosa com profissionais qualificados. Cuidamos da higiene e beleza do seu pet com todo carinho e atenção.',
    image:
      'https://storage.lucasmendes.dev/site-sp/animalyp%2Fnovo%2FBanho_e_tosa.jpg',
    icon: Scissors,
    overlay: 'from-[#38d060] to-green-600',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-[#b900ba] to-[#38d060] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            Nossos Serviços
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conheça nossos serviços de cuidado para seu pet
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma variedade de tratamentos pensados para a higiene e
            embelezamento de animais domésticos.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${service.overlay} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}
                  >
                    <Icon className="text-white" size={64} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#b900ba] font-semibold hover:text-[#38d060] transition-colors"
                  >
                    Fale Conosco
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#b900ba] to-[#38d060] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Agende Seu Horário
          </a>
        </div>
      </div>
    </section>
  );
}

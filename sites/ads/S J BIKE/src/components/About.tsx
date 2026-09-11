import { Users, Award, Wrench, LucideIcon } from 'lucide-react';

const paragraphs = [
  'A SJ Bike nasceu da paixão por duas rodas e do desejo de transformar o ciclismo em um estilo de vida acessível a todos. Desde o início, nossa missão tem sido oferecer qualidade, confiança e atendimento personalizado a cada cliente, seja ele um ciclista iniciante ou um apaixonado por trilhas e velocidade.',
  'Com anos de experiência no mercado, a SJ Bike se consolidou como uma loja completa, especializada em venda de bicicletas, peças, acessórios e serviços de manutenção. Trabalhamos com bicicletas novas e usadas, modelos urbanos, de trilha, elétricos e infantis — sempre prezando por produtos de alto desempenho e durabilidade.',
  'Nosso diferencial está na atenção e no cuidado com cada cliente. Aqui, você não encontra apenas produtos, mas orientação técnica, suporte pós-venda e um time que realmente entende de bike. Cada serviço é feito com dedicação e foco na segurança e satisfação de quem pedala.',
];

interface Feature {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    Icon: Users,
    iconClass: 'lucide lucide-users w-12 h-12 text-[rgb(253,88,34)]',
    title: 'Atendimento Especializado',
    description: 'Equipe técnica qualificada que entende suas necessidades',
  },
  {
    Icon: Award,
    iconClass: 'lucide lucide-award w-12 h-12 text-[rgb(253,88,34)]',
    title: 'Produtos de Qualidade',
    description: 'Marcas reconhecidas e produtos de alto desempenho',
  },
  {
    Icon: Wrench,
    iconClass: 'lucide lucide-wrench w-12 h-12 text-[rgb(253,88,34)]',
    title: 'Suporte Completo',
    description: 'Da escolha da bike até a manutenção periódica',
  },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="py-20 bg-gradient-to-b from-white to-[rgb(245,245,245)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-[rgb(253,88,34)]/10 text-[rgb(253,88,34)] px-4 py-2 rounded-full text-sm font-semibold">
              Conheça Nossa História
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Sobre a SJ Bike
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mais do que uma loja, um ponto de encontro para ciclistas
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-20">
          <div className="lg:col-span-3 space-y-6">
            {paragraphs.map((text, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[rgb(253,88,34)]"
              >
                <p className="text-gray-700 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2 order-first lg:order-last">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[rgb(253,88,34)] to-orange-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=sj0bike%2Fimage%2043.png&version_id=null"
                alt="Sobre a SJ Bike"
                className="relative w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ Icon, iconClass, title, description }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-transparent hover:border-[rgb(253,88,34)]"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-[rgb(253,88,34)]/10 p-4 rounded-full group-hover:bg-[rgb(253,88,34)]/20 transition-colors duration-300">
                  <Icon className={iconClass} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[rgb(253,88,34)] transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

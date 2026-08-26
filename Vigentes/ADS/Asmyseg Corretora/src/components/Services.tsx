import {
  Car,
  Building2,
  Wallet,
  Users,
  Home,
  Heart,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';

interface Service {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  waText: string;
}

const services: Service[] = [
  {
    title: 'Seguro Auto',
    description:
      'Proteção completa para o seu veículo contra roubo, furto e colisões.',
    image:
      'https://storage.lucasmendes.dev/site-sp/asmysegcorretora/Seguro%20Auto.webp',
    icon: Car,
    waText:
      'Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Seguro%20Auto',
  },
  {
    title: 'Seguro Empresarial',
    description:
      'Garanta a continuidade do seu negócio com coberturas sob medida.',
    image:
      'https://storage.lucasmendes.dev/site-sp/asmysegcorretora/Seguro%20Empresarial.webp',
    icon: Building2,
    waText:
      'Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Seguro%20Empresarial',
  },
  {
    title: 'Financiamentos',
    description: 'As melhores taxas do mercado para realizar suas conquistas.',
    image:
      'https://storage.lucasmendes.dev/site-sp/asmysegcorretora/Financiamentos.webp',
    icon: Wallet,
    waText:
      'Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Financiamentos',
  },
  {
    title: 'Consórcio',
    description: 'Planeje a compra do seu imóvel ou veículo sem pagar juros.',
    image:
      'https://storage.lucasmendes.dev/site-sp/asmysegcorretora/Conso%CC%81rcio.webp',
    icon: Users,
    waText: 'Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Consórcio',
  },
  {
    title: 'Seguro Residencial',
    description:
      'Sua casa protegida 24h com assistência completa para imprevistos.',
    image:
      'https://storage.lucasmendes.dev/site-sp/asmysegcorretora/Seguro%20Residencial.webp',
    icon: Home,
    waText:
      'Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Seguro%20Residencial',
  },
  {
    title: 'Seguro de Vida',
    description: 'A certeza de que quem você ama estará sempre amparado.',
    image:
      'https://storage.lucasmendes.dev/site-sp/asmysegcorretora/Seguro%20de%20Vida.webp',
    icon: Heart,
    waText:
      'Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Seguro%20de%20Vida',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-[#256C8F] uppercase bg-blue-50 rounded-full border border-blue-100">
            Nossas Soluções
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Tudo o que você precisa em{' '}
            <span className="text-[#256C8F]">um só lugar</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Trabalhamos com as melhores seguradoras do país para garantir as
            condições ideais para seu perfil e bolso.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 bg-white p-3 rounded-2xl shadow-lg">
                    <Icon className="w-6 h-6 text-[#256C8F]" />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#256C8F] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href={`https://api.whatsapp.com/send?phone=553186610041&text=${service.waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full bg-gray-50 text-gray-700 px-6 py-4 rounded-2xl font-bold transition-all duration-300 group-hover:bg-[#256C8F] group-hover:text-white"
                  >
                    Cotar Agora
                    <ArrowRight className="transform group-hover:translate-x-1 transition-transform" size={20} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-20 text-center bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">
            Não encontrou o que procurava?
          </h4>
          <p className="text-gray-600 mb-8">
            Fale com um de nossos consultores e montamos um plano exclusivo para
            você.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=553186610041&text=Ol%C3%A1%2C%20preciso%20de%20um%20atendimento%20personalizado."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FA0000] text-white px-10 py-4 rounded-full font-bold hover:bg-red-700 transition-all duration-300 shadow-xl hover:shadow-red-500/30 hover:scale-105"
          >
            Atendimento Personalizado
          </a>
        </div>
      </div>
    </section>
  );
}

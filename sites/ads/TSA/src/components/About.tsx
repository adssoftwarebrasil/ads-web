import { Award, Users, Target, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Award,
    title: 'Qualidade Certificada',
    description: 'Parceiro autorizado Bosch com garantia de excelência em cada serviço',
  },
  {
    icon: Users,
    title: 'Equipe Especializada',
    description: 'Técnicos qualificados com anos de experiência em veículos pesados',
  },
  {
    icon: Target,
    title: 'Atendimento Personalizado',
    description: 'Soluções sob medida para concessionárias, frotistas e autônomos',
  },
  {
    icon: Wrench,
    title: 'Tecnologia Avançada',
    description:
      'Equipamentos modernos para diagnóstico preciso e reparos de alta qualidade',
  },
];

const stats = [
  { value: '1000+', label: 'Serviços Realizados' },
  { value: '100%', label: 'Clientes Satisfeitos' },
  { value: '1', label: 'Ano de Experiência' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div className="text-left">
            <div className="inline-block px-4 py-2 bg-[rgb(163,24,23)]/10 rounded-full mb-6">
              <p className="text-[rgb(163,24,23)] font-semibold text-sm">QUEM SOMOS</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(4,26,58)] mb-6 leading-tight">
              Sua Oficina de Confiança em Goiânia
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              A TSA é sua oficina multimarcas especializada na recuperação de turbinas
              e direção hidráulica para veículos a diesel. Com a visão de proporcionar
              serviços excepcionais a concessionárias, frotistas, transportadoras e
              autônomos.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nossa equipe se dedica a oferecer um atendimento diferenciado, tanto
              interno quanto externo. Nossos produtos e serviços são reconhecidos pela
              excelência e eficiência, sempre com o compromisso de superar as
              expectativas dos clientes.
            </p>
            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="font-bold text-[rgb(4,26,58)]">
                TSA - CENTRO DE DIREÇÕES BOSCH
              </p>
              <p className="text-sm text-gray-500">Excelência em Diesel e Turbinas</p>
            </div>
          </div>
          <div className="relative lg:h-[600px] flex items-center justify-center lg:justify-end">
            <div className="relative z-10 w-full max-w-[400px]">
              <div className="absolute inset-0 bg-[rgb(163,24,23)] rounded-2xl transform rotate-3 translate-x-2 translate-y-2 opacity-20"></div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/tsa%20bosh%2Fatualizadas%2Fquem-somos-mulher-segurando-peca-bosh.webp"
                alt="Especialista TSA com peça Bosch"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover border border-gray-100"
              />
            </div>
            <div className="absolute bottom-[-20px] left-0 lg:bottom-10 lg:-left-10 z-20 w-[240px] md:w-[280px]">
              <img
                src="https://storage.lucasmendes.dev/site-sp/tsa%20bosh%2Fatualizadas%2Fquem-somos-fachada-loja.webp"
                alt="Fachada TSA Bosch Service"
                className="rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-white w-full h-auto"
              />
              <div className="absolute -top-4 -right-4 bg-[rgb(4,26,58)] text-white p-3 rounded-full shadow-lg">
                <Award width={20} height={20} />
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-[rgb(163,24,23)]/30 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[rgb(163,24,23)] to-[rgb(143,20,20)] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon width={28} height={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[rgb(4,26,58)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-16 bg-gradient-to-r from-[rgb(4,26,58)] to-[rgb(4,26,58)]/90 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="group">
                <div className="text-4xl md:text-5xl font-bold text-[rgb(163,24,23)] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <p className="text-gray-200 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Shield, Award, Headphones } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
}

const features: Feature[] = [
  {
    Icon: Shield,
    iconClass: 'lucide lucide-shield text-white',
    title: 'Compromisso e Credibilidade',
    text: 'Empresa consolidada no mercado com certificações e parcerias estratégicas.',
  },
  {
    Icon: Award,
    iconClass: 'lucide lucide-award text-white',
    title: 'Qualidade e Alta Tecnologia',
    text: 'Equipamentos de última geração e equipe técnica altamente qualificada.',
  },
  {
    Icon: Headphones,
    iconClass: 'lucide lucide-headphones text-white',
    title: 'Pós-Venda Eficiente',
    text: 'Suporte contínuo e monitoramento para garantir máxima performance.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-[#F3F4F6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[rgb(20,85,200)] mb-4">Quem Somos</h2>
          <div className="w-20 h-1 bg-[rgb(255,100,30)] mx-auto"></div>
        </div>
        <div className="max-w-3xl space-y-6 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Desde 2020, a Sollar Soluções Energéticas transforma luz solar em economia real para residências e
            empresas em todo o Nordeste. Nossa missão é democratizar o acesso à energia limpa e sustentável,
            oferecendo soluções personalizadas com tecnologia de ponta.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Com mais de 1.000 projetos instalados, combinamos expertise técnica, equipamentos de alta qualidade e um
            compromisso inabalável com a satisfação do cliente.
          </p>
        </div>
        <div className="w-full max-w-4xl mb-16">
          <img
            src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=sollarsolucoes%2Fc9fe46edbae8f52b18095559b57bbf03.jpg&version_id=null"
            alt="Escritório Sollar Soluções Energéticas"
            className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            loading="lazy"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm">
              <div className="flex-shrink-0 mb-4">
                <div className="w-14 h-14 bg-[rgb(255,100,30)] rounded-lg flex items-center justify-center">
                  <f.Icon width={28} height={28} className={f.iconClass} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[rgb(20,85,200)] mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

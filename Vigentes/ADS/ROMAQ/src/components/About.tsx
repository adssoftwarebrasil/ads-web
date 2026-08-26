import { Shield, Clock, MapPin, Award, LucideIcon } from 'lucide-react';

interface Highlight {
  title: string;
  description: string;
  Icon: LucideIcon;
  iconClass: string;
}

const highlights: Highlight[] = [
  {
    title: 'Equipamentos Certificados',
    description:
      'Todos os equipamentos passam por rigorosa inspeção de segurança antes da locação ou venda.',
    Icon: Shield,
    iconClass: 'lucide lucide-shield text-[rgb(66,66,66)]',
  },
  {
    title: 'Atendimento Ágil',
    description: 'Segunda a sexta das 08:00 às 18:00h. Resposta rápida para suas necessidades.',
    Icon: Clock,
    iconClass: 'lucide lucide-clock text-[rgb(66,66,66)]',
  },
  {
    title: 'Cobertura Regional',
    description: 'Atendimento em Uberlândia e região com raio de até 600km de alcance.',
    Icon: MapPin,
    iconClass: 'lucide lucide-map-pin text-[rgb(66,66,66)]',
  },
  {
    title: 'Representantes Autorizados',
    description:
      'Parceiros oficiais Trelleborg e Rodagás, garantindo produtos originais e qualidade superior.',
    Icon: Award,
    iconClass: 'lucide lucide-award text-[rgb(66,66,66)]',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[rgb(66,66,66)] mb-6">
              Sobre a <span className="text-[rgb(240,186,25)]">Romaq Empilhadeiras</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A Romaq Empilhadeiras é uma empresa especializada na locação e venda de empilhadeiras, oferecendo também uma ampla gama de peças, pneus e paleteiras.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Atendendo tanto empresas quanto consumidores finais (B2B e B2C), a Romaq busca proporcionar equipamentos em excelentes condições de operação e segurança, assegurando que cada parceria seja marcada pela confiança e qualidade.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Oferecemos o equipamento que você precisa, em boas condições de operação e segurança, orientando e trabalhando para que nossa parceria seja excelente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="http://wa.me/553432321300?text=Gostaria de saber mais sobre a Romaq!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[rgb(240,186,25)] text-[rgb(66,66,66)] px-8 py-4 rounded-lg font-bold hover:bg-[rgb(220,166,5)] transition-colors"
              >
                Fale Conosco
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://storage.lucasmendes.dev/site-sp/romaq%2Fimg%2Fhero-background-fachada-da-loja.webp"
              alt="Romaq Empilhadeiras"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item) => {
            const { Icon } = item;
            return (
              <div
                key={item.title}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="bg-[rgb(240,186,25)] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className={item.iconClass} width={28} height={28} />
                </div>
                <h3 className="text-xl font-bold text-[rgb(66,66,66)] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

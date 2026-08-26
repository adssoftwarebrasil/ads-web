import { Wrench, Clock, Shield, Zap, Award, CheckCircle, LucideIcon } from 'lucide-react';

interface Feature {
  Icon: LucideIcon;
  iconName: string;
  title: string;
  text: string;
}

const features: Feature[] = [
  {
    Icon: Wrench,
    iconName: 'lucide-wrench',
    title: 'Testes Completos Gratuitos',
    text: 'Teste de alternador, motor de partida e laudo técnico de baterias em uso sem custo.',
  },
  {
    Icon: Clock,
    iconName: 'lucide-clock',
    title: 'Atendimento Estendido',
    text: 'Serviço de plantão até 22h para emergências. Estamos aqui quando você precisa.',
  },
  {
    Icon: Shield,
    iconName: 'lucide-shield',
    title: 'Garantia e Qualidade',
    text: 'Trabalhamos apenas com as melhores marcas do mercado com garantia total.',
  },
  {
    Icon: Zap,
    iconName: 'lucide-zap',
    title: 'Atendimento Rápido',
    text: 'Solução ágil para o seu problema. Não perca tempo com bateria descarregada.',
  },
  {
    Icon: Award,
    iconName: 'lucide-award',
    title: 'Experiência Local',
    text: 'Empresa nascida em Senador Canedo, conhecemos as necessidades da região.',
  },
  {
    Icon: CheckCircle,
    iconName: 'lucide-check-circle',
    title: 'Orientação Técnica',
    text: 'Atendimento especializado com orientação técnica profissional.',
  },
];

const storeItems = [
  'Amplo estoque de baterias para carros, motos, caminhões e mais',
  'Equipamentos modernos para testes e diagnósticos',
  'Equipe especializada e treinada',
  'Atendimento de segunda a sábado',
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
            Por que escolher a <span className="text-yellow-500">BaterSouza?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos uma empresa nascida em Senador Canedo, especializada em baterias automotivas e
            estacionárias das melhores marcas do mercado.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map(({ Icon, iconName, title, text }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600 group hover:-translate-y-1 transition-transform"
            >
              <div className="text-blue-600 mb-4 group-hover:text-yellow-500 transition-colors">
                <Icon className={`lucide ${iconName} w-8 h-8`} width={24} height={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="order-2 md:order-1 p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-6">Conheça Nossa Loja</h3>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Localizada estrategicamente em Senador Canedo, nossa loja oferece um ambiente completo
              para atender todas as suas necessidades em baterias automotivas e estacionárias.
            </p>
            <ul className="space-y-4 mb-8">
              {storeItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="lucide lucide-check-circle w-6 h-6 text-green-500 flex-shrink-0 mt-1" width={24} height={24} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="http://wa.me/556292766466?text=Olá! Gostaria de visitar a loja."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-bold text-lg"
            >
              Agende sua Visita
            </a>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://storage.lucasmendes.dev/site-sp/batersouza%2Fimg%2Floja-baterias-fachada-equipe-de-frente.webp"
              alt="Fachada da loja BaterSouza"
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

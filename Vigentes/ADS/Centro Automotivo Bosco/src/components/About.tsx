import { Shield, Users, Wrench, Star } from 'lucide-react';

const compromissos = [
  'Atendimento profissional e personalizado',
  'Diagnóstico preciso com equipamentos de última geração',
  'Garantia em todos os serviços realizados',
  'Transparência e honestidade em cada orçamento',
];

const features = [
  {
    icon: Shield,
    title: 'Confiança e Segurança',
    text: 'Mais de 20 anos cuidando do seu veículo com honestidade e transparência em cada serviço.',
  },
  {
    icon: Users,
    title: 'Equipe Qualificada',
    text: 'Profissionais especializados e em constante atualização para oferecer o melhor atendimento.',
  },
  {
    icon: Wrench,
    title: 'Equipamentos Modernos',
    text: 'Tecnologia de ponta para diagnóstico preciso e manutenção de qualidade superior.',
  },
  {
    icon: Star,
    title: 'Excelência Comprovada',
    text: 'Referência em Fortaleza com milhares de clientes satisfeitos e avaliações 5 estrelas.',
  },
];

function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-[rgb(204,53,49)]/10 text-[rgb(204,53,49)] px-4 py-2 rounded-full text-sm font-semibold">
                Sobre Nós
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[rgb(10,33,75)] leading-tight">
              Referência em Manutenção Automotiva em Fortaleza
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              O Centro Automotivo Bosco é referência em manutenção veicular em Fortaleza. Com mais de
              20 anos de experiência, oferecemos serviços de alta qualidade para garantir a segurança
              e o funcionamento pleno do seu carro.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Contamos com equipamentos modernos e uma equipe altamente qualificada para atender
              todas as necessidades automotivas, desde revisões até reparos especializados. Nossa
              missão é proporcionar um atendimento de excelência, com soluções rápidas e eficientes
              para nossos clientes.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="h-px flex-1 bg-[rgb(204,53,49)]/20"></div>
              <span className="text-[rgb(204,53,49)] font-semibold">Nosso Compromisso</span>
              <div className="h-px flex-1 bg-[rgb(204,53,49)]/20"></div>
            </div>
            <ul className="space-y-3">
              {compromissos.map((item) => (
                <li key={item} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[rgb(204,53,49)] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://storage.lucasmendes.dev/site-sp/centro%20automotivo%20bosco%2Fimg%2Fhomem-sorrindo-oficina-carros.webp"
                alt="Profissional sorridente na oficina"
                className="rounded-xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://storage.lucasmendes.dev/site-sp/centro%20automotivo%20bosco%2Fimg%2Foficina-carros-manutencao.webp"
                alt="Oficina com carros em manutenção"
                className="rounded-xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://storage.lucasmendes.dev/site-sp/centro%20automotivo%20bosco%2Fimg%2Foficina-automotiva-movimentada.webp"
                alt="Oficina automotiva movimentada"
                className="rounded-xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://storage.lucasmendes.dev/site-sp/centro%20automotivo%20bosco%2Fimg%2Fmecanico-consertando-motor.webp"
                alt="Mecânico consertando motor"
                className="rounded-xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[rgb(204,53,49)]/20"
              >
                <div className="w-14 h-14 bg-[rgb(204,53,49)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[rgb(204,53,49)] transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[rgb(204,53,49)] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[rgb(10,33,75)] mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;

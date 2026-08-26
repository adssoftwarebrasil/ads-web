import { ShoppingBag, Stethoscope, Syringe, Scissors, Pill, Truck } from 'lucide-react';

const services = [
  {
    icon: ShoppingBag,
    title: 'Rações & Acessórios',
    description:
      'Grande variedade de rações premium para cães, gatos, aves, coelhos, peixes e muito mais. Acessórios e brinquedos para toda necessidade.',
    color: 'green',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20racoes/img/loja-de-animais-sacos-racao-empilhados_4032x3024.webp',
  },
  {
    icon: Stethoscope,
    title: 'Clínica Veterinária',
    description:
      'Equipe especializada pronta para cuidar da saúde do seu pet com consultas, diagnósticos e acompanhamento especializado.',
    color: 'blue',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20racoes/img/camiseta-clinica-veterinaria-cao-gato-desenho_1280x720.webp',
  },
  {
    icon: Syringe,
    title: 'Vacinas',
    description:
      'Programa completo de vacinação para manter seu animal protegido. Vacinas essenciais e opcionais disponíveis.',
    color: 'orange',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20racoes/img/clinica-veterinaria-cachorro-gato-horario-atendimento_1024x1280.webp',
  },
  {
    icon: Scissors,
    title: 'Cirurgias',
    description:
      'Procedimentos cirúrgicos realizados por profissionais experientes com todo o suporte necessário para a recuperação do seu pet.',
    color: 'teal',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20racoes/img/clinica-veterinaria-cachorro-gato-horario-atendimento_1024x1280.webp',
  },
  {
    icon: Pill,
    title: 'Farmácia Veterinária',
    description:
      'Medicamentos, antiparasitários, antipulgas, suplementos e produtos de higiene veterinária das melhores marcas.',
    color: 'red',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20racoes/img/anuncio-produtos-veterinarios-remedios-antipulgas-petshop_950x1280.webp',
  },
  {
    icon: Truck,
    title: 'Delivery em PVA',
    description:
      'Entregamos em toda Primavera do Leste. Praticidade para você sem abrir mão da qualidade para o seu animal.',
    color: 'amber',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20racoes/img/loja-de-animais-sacos-racao-empilhados_4032x3024.webp',
  },
];

const colorMap: Record<string, { bg: string; icon: string; tag: string }> = {
  green: { bg: 'bg-green-50 hover:bg-green-100', icon: 'bg-green-100 text-green-600', tag: 'bg-green-100 text-green-700' },
  blue: { bg: 'bg-blue-50 hover:bg-blue-100', icon: 'bg-blue-100 text-blue-600', tag: 'bg-blue-100 text-blue-700' },
  orange: { bg: 'bg-orange-50 hover:bg-orange-100', icon: 'bg-orange-100 text-orange-600', tag: 'bg-orange-100 text-orange-700' },
  teal: { bg: 'bg-teal-50 hover:bg-teal-100', icon: 'bg-teal-100 text-teal-600', tag: 'bg-teal-100 text-teal-700' },
  red: { bg: 'bg-red-50 hover:bg-red-100', icon: 'bg-red-100 text-red-600', tag: 'bg-red-100 text-red-700' },
  amber: { bg: 'bg-amber-50 hover:bg-amber-100', icon: 'bg-amber-100 text-amber-600', tag: 'bg-amber-100 text-amber-700' },
};

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
            O que oferecemos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Serviços completos para o seu Pet
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Do alimento ao cuidado médico — temos tudo para garantir uma vida longa e feliz
            para o seu companheiro.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description, color }) => {
            const c = colorMap[color];
            return (
              <div
                key={title}
                className={`${c.bg} rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-default`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${c.icon} mb-4`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-green-700 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Atendemos muito além dos pets tradicionais
              </h3>
              <p className="text-green-100 leading-relaxed mb-0">
                Galinhas, coelhos, codornas, canários, periquitos e peixes também encontram
                aqui tudo o que precisam para uma vida saudável.
              </p>
            </div>
            <div className="h-48 md:h-full">
              <img
                src="https://storage.lucasmendes.dev/site-sp/casa%20das%20racoes/atualizacao/propaganda.webp"
                alt="Diversidade de produtos"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

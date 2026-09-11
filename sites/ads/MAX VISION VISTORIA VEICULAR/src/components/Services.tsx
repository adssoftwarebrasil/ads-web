import { FileCheck, Car, Shield, Zap } from 'lucide-react';

const WHATSAPP_NUMBER = '556231239052';

const services = [
  {
    icon: <FileCheck size={36} />,
    title: 'Vistoria para Transferência',
    description:
      'Realize a transferência do seu veículo com segurança. Emitimos o laudo necessário para o processo de transferência junto ao Detran-GO.',
    badge: 'Mais Solicitado',
    badgeColor: 'bg-[#e6282f]',
    image: 'https://storage.lucasmendes.dev/site-sp/max-vision%2Fchecklist-vistoria-cautelar-anuncio.webp',
    msg: 'Olá!%20Preciso%20de%20uma%20vistoria%20para%20transferência%20do%20meu%20veículo.',
  },
  {
    icon: <Shield size={36} />,
    title: 'Vistoria para Seguradoras',
    description:
      'Vistoria veicular completa para fins de seguro. Garantimos um laudo preciso e detalhado para sua seguradora.',
    badge: 'Autorizado',
    badgeColor: 'bg-[#efcf05] text-black',
    image: 'https://storage.lucasmendes.dev/site-sp/max-vision%2Fcarro-estrutura-vistoria-anuncio.webp',
    msg: 'Olá!%20Preciso%20de%20uma%20vistoria%20para%20seguradora.',
  },
  {
    icon: <Car size={36} />,
    title: 'Identificação Veicular',
    description:
      'Verificação de chassi, motor e autenticidade de documentos. Processo seguro e credenciado pelo Detran-GO.',
    badge: 'Detran-GO',
    badgeColor: 'bg-black border border-[#efcf05] text-[#efcf05]',
    image: 'https://storage.lucasmendes.dev/site-sp/max-vision%2Fcarro-lupa-amarelo-anuncio.webp',
    msg: 'Olá!%20Preciso%20de%20identificação%20veicular.',
  },
  {
    icon: <Zap size={36} />,
    title: 'Regularização Veicular',
    description:
      'Resolva pendências e regularize seu veículo de forma rápida. Nossa equipe orienta você em cada etapa do processo.',
    badge: 'Ágil',
    badgeColor: 'bg-gray-700 text-white',
    image: 'https://storage.lucasmendes.dev/site-sp/max-vision%2Fcarro-laranja-anuncio.webp',
    msg: 'Olá!%20Preciso%20de%20regularização%20veicular.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#efcf05]/10 text-[#efcf05] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Tudo que você precisa para{' '}
            <span className="text-[#efcf05]">regularizar seu veículo</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Somos credenciados pelo Detran-GO e oferecemos laudos precisos para qualquer necessidade veicular.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#efcf05]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#efcf05]/10 flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
                <span
                  className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full ${service.badgeColor}`}
                >
                  {service.badge}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="text-[#efcf05] mb-3">{service.icon}</div>
                <h3 className="text-white font-black text-lg mb-3 leading-tight">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{service.description}</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${service.msg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-center gap-2 bg-[#efcf05] text-black font-bold py-2.5 rounded-xl text-sm hover:bg-yellow-400 transition-all duration-200"
                >
                  Solicitar Serviço
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

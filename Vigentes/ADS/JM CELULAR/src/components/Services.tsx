import {
  Smartphone,
  Battery,
  Cpu,
  Droplets,
  Volume2,
  Camera,
  Package,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

const WHATSAPP_ORCAMENTO =
  'http://wa.me/557192534118?text=Ol%C3%A1%21+Gostaria+de+um+or%C3%A7amento+para+reparo+do+meu+celular.';

interface Service {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  desc: string;
  highlighted?: boolean;
}

const services: Service[] = [
  {
    icon: Smartphone,
    iconClass: 'text-white',
    title: 'Troca de Tela',
    desc: 'Tela rachada ou sem imagem? Substituímos com peças de alta qualidade, devolvendo vida ao seu aparelho.',
    highlighted: true,
  },
  {
    icon: Battery,
    iconClass: 'text-[#004AAC] group-hover:text-white transition-colors',
    title: 'Troca de Bateria',
    desc: 'Bateria viciada ou que não carrega? Restauramos a autonomia original do seu celular com peças confiáveis.',
  },
  {
    icon: Cpu,
    iconClass: 'text-[#004AAC] group-hover:text-white transition-colors',
    title: 'Reparo de Placa-Mãe',
    desc: 'Microssoldagem e diagnóstico avançado para falhas elétricas, curtos e danos por queda.',
  },
  {
    icon: Droplets,
    iconClass: 'text-[#004AAC] group-hover:text-white transition-colors',
    title: 'Dano por Água',
    desc: 'Celular caiu na água? Limpamos e recuperamos componentes internos antes que o dano se torne irreversível.',
  },
  {
    icon: Volume2,
    iconClass: 'text-[#004AAC] group-hover:text-white transition-colors',
    title: 'Alto-falante e Microfone',
    desc: 'Áudio com chiado ou sem som? Diagnóstico e substituição de auto-falantes e microfones.',
  },
  {
    icon: Camera,
    iconClass: 'text-[#004AAC] group-hover:text-white transition-colors',
    title: 'Câmera e Flash',
    desc: 'Foto embaçada ou flash que não funciona? Reparamos e substituímos os módulos de câmera.',
  },
  {
    icon: Package,
    iconClass: 'text-[#004AAC] group-hover:text-white transition-colors',
    title: 'Acessórios e Peças',
    desc: 'Carregadores, cabos, capas, power banks, baterias e fones de ouvido para todas as marcas.',
  },
  {
    icon: Wrench,
    iconClass: 'text-[#004AAC] group-hover:text-white transition-colors',
    title: 'Manutenção Preventiva',
    desc: 'Limpeza interna, atualização de software e verificação geral para prolongar a vida do seu aparelho.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#004AAC] font-semibold text-sm tracking-widest uppercase mb-3">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Serviços Especializados
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Atendemos todas as marcas e modelos. Diagnóstico gratuito e orçamento sem compromisso.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  service.highlighted
                    ? 'bg-[#004AAC] border-[#004AAC] text-white shadow-lg shadow-blue-500/20'
                    : 'bg-white border-gray-100 hover:border-blue-200'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    service.highlighted
                      ? 'bg-white/20'
                      : 'bg-blue-50 group-hover:bg-[#004AAC] group-hover:text-white'
                  }`}
                >
                  <Icon width={22} height={22} className={service.iconClass} />
                </div>
                <h3
                  className={`font-bold text-base mb-2 ${
                    service.highlighted ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    service.highlighted ? 'text-blue-100' : 'text-gray-500'
                  }`}
                >
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_ORCAMENTO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#004AAC] hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-xl active:scale-95"
          >
            Pedir Orçamento Agora
          </a>
        </div>
      </div>
    </section>
  );
}

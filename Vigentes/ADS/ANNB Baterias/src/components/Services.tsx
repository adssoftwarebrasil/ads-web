import { Zap, DollarSign, Shield, Clock, Wrench, MapPin, type LucideIcon } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';

interface Service {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  desc: string;
}

const services: Service[] = [
  {
    icon: Zap,
    iconClass: 'lucide lucide-zap',
    title: 'Instalação Express',
    desc: 'Nosso técnico vai até você, instala e testa a bateria no local. Sem precisar ir à oficina.',
  },
  {
    icon: DollarSign,
    iconClass: 'lucide lucide-dollar-sign',
    title: 'Melhor Preço do DF',
    desc: 'As melhores marcas de baterias com preços imbatíveis.',
  },
  {
    icon: Shield,
    iconClass: 'lucide lucide-shield',
    title: 'Até 2 Anos de Garantia',
    desc: 'Todas as nossas baterias possuem garantia de fábrica. Sua tranquilidade em primeiro lugar.',
  },
  {
    icon: Clock,
    iconClass: 'lucide lucide-clock',
    title: 'Atendimento Estendido',
    desc: 'Funcionamos todos os dias das 08h às 22h. Inclusive finais de semana e feriados.',
  },
  {
    icon: Wrench,
    iconClass: 'lucide lucide-wrench',
    title: 'Profissionais Especializados',
    desc: 'Equipe treinada e experiente para o serviço certo na primeira vez, com honestidade e qualidade.',
  },
  {
    icon: MapPin,
    iconClass: 'lucide lucide-map-pin',
    title: 'Atendemos Toda Brasília',
    desc: 'Asa Norte, Asa Sul, Lago, Sudoeste, Taguatinga, Ceilândia e mais de 15 regiões do DF.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14 transition-all duration-700 opacity-100 translate-y-0">
          <span className="inline-block text-brand-green font-bold text-sm uppercase tracking-widest mb-3">
            Por que escolher a ANNB?
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">
            Serviço rápido, confiável e no seu endereço
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Mais de 5 anos levando excelência no fornecimento e instalação de baterias automotivas em
            Brasília e DF.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative bg-brand-light border border-green-100 rounded-2xl p-7 hover:bg-brand-dark hover:border-brand-dark transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default
                transition-all duration-700 opacity-100 translate-y-0"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-brand-green/10 group-hover:bg-brand-red/20 text-brand-green group-hover:text-white transition-colors duration-300 mb-5">
                  <Icon width={28} height={28} className={s.iconClass} />
                </div>
                <h3 className="text-brand-dark group-hover:text-white font-bold text-lg mb-2 transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-14 rounded-2xl overflow-hidden bg-brand-dark grid md:grid-cols-2 items-center transition-all duration-700 delay-500 opacity-100 translate-y-0">
          <div className="p-8 md:p-12">
            <span className="inline-block text-brand-muted font-semibold text-sm uppercase tracking-widest mb-3">
              Instalação Gratuita
            </span>
            <h3 className="text-white text-2xl md:text-3xl font-black mb-4 leading-tight">
              Bateria que não funciona?
              <br />
              <span className="text-brand-red">A gente resolve agora.</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Ligue ou mande mensagem no WhatsApp. Nosso técnico leva, instala e testa sua nova
              bateria gratuitamente onde você estiver — sem cobranças extras de visita.
            </p>
            <a
              href="http://wa.me/5561992574282?text=Olá!%20Minha%20bateria%20não%20está%20funcionando.%20Vocês%20podem%20me%20atender%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-red text-white font-bold px-6 py-3 rounded-xl hover:brightness-110 transition-all duration-200"
            >
              <WhatsappIcon className="w-5 h-5" />
              Chamar no WhatsApp
            </a>
          </div>
          <div className="h-64 md:h-full overflow-hidden">
            <img
              src="https://storage.lucasmendes.dev/caroba/annb%20baterias/img/mecanico-verificando-bateria-carro-multimetro_700x496.webp"
              alt="Técnico verificando bateria"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

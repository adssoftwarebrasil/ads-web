import { MapPin, ShieldCheck, Truck, Camera, UserCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

interface Service {
  icon: LucideIcon;
  iconCls: string;
  img: string;
  title: string;
  desc: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: MapPin,
    iconCls: 'lucide lucide-map-pin',
    img: 'https://storage.lucasmendes.dev/site-sp/fas%20rastreamento%20veicular/img/anuncio-rastreamento-veicular-frota-carros-moto_1080x1350.webp',
    title: 'Rastreamento Veicular',
    desc: 'Localização GPS em tempo real com precisão máxima. Acompanhe seu veículo de qualquer lugar, a qualquer hora, pelo celular ou computador.',
    features: ['Localização em tempo real', 'Histórico de rotas', 'Alertas instantâneos'],
  },
  {
    icon: ShieldCheck,
    iconCls: 'lucide lucide-shield-check',
    img: 'https://storage.lucasmendes.dev/site-sp/fas%20rastreamento%20veicular/img/protecao-veicular.webp',
    title: 'PROTEÇÃO VEICULAR PARA SEU VEÍCULO',
    desc: 'Cobertura contra roubo, furto, colisão, incêndio e fenômenos naturais. Conta com assistência 24h, guincho em emergências e proteção a terceiros.',
    features: ['Roubo, Furto e Colisão', 'Fenômenos Naturais', 'Assistência 24h'],
  },
  {
    icon: Truck,
    iconCls: 'lucide lucide-truck',
    img: 'https://storage.lucasmendes.dev/site-sp/fas%20rastreamento%20veicular/img/anuncio-fas-carro-roubado-moto-ladrao_1080x1350.webp',
    title: 'Gestão de Frotas',
    desc: 'Controle completo da sua frota comercial. Reduza custos, otimize rotas e melhore a produtividade com relatórios detalhados.',
    features: ['Controle de gastos', 'Relatórios de desempenho', 'Identificador de motorista'],
  },
  {
    icon: Camera,
    iconCls: 'lucide lucide-camera',
    img: 'https://storage.lucasmendes.dev/site-sp/fas%20rastreamento%20veicular/img/furg-o-branco-dentro-de-um-celular-rastreamento_1080x1350.webp',
    title: 'Câmera Veicular',
    desc: 'Monitoramento visual interno e externo com câmeras de alta resolução. Registre tudo o que acontece dentro e fora do seu veículo.',
    features: ['Alta resolução', 'Gravação contínua', 'Armazenamento em nuvem'],
  },
  {
    icon: UserCheck,
    iconCls: 'lucide lucide-user-check',
    img: 'https://storage.lucasmendes.dev/site-sp/fas%20rastreamento%20veicular/img/identificador-de-motorista.webp',
    title: 'Identificador de Motoristas (iButton)',
    desc: 'Otimiza a gestão de frotas ao automatizar o registro de condutores. Permite monitorar comportamentos, controlar jornadas e evitar o uso não autorizado.',
    features: ['Registro automatizado', 'Controle de jornada', 'Dados em tempo real'],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28" style={{ backgroundColor: 'rgb(222, 231, 232)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 intersection-animate">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: 'rgb(203, 219, 233)', color: 'rgb(27, 53, 74)' }}
          >
            Nossos Serviços
          </span>
          <h2 className="section-title mb-4">
            Soluções Completas em <span style={{ color: 'rgb(70, 96, 117)' }}>Rastreamento Veicular</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Tecnologia de ponta para proteger o que é mais importante. Do rastreamento individual à gestão de frotas, cobrimos todas as suas necessidades.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="intersection-animate card-hover bg-white rounded-2xl overflow-hidden"
                style={{ transitionDelay: `${i * 100}ms`, boxShadow: 'rgba(5, 31, 52, 0.08) 0px 4px 20px' }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(transparent 40%, rgba(5, 31, 52, 0.6) 100%)' }}
                  ></div>
                  <div className="absolute bottom-3 left-3 p-2 rounded-xl" style={{ backgroundColor: 'rgb(70, 96, 117)' }}>
                    <span style={{ color: 'rgb(203, 219, 233)' }}>
                      <Icon className={s.iconCls} width={28} height={28} />
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2" style={{ color: 'rgb(5, 31, 52)' }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgb(112, 136, 160)' }}>
                    {s.desc}
                  </p>
                  <ul className="space-y-1.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: 'rgb(70, 96, 117)' }}
                        ></span>
                        <span style={{ color: 'rgb(70, 96, 117)' }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12 intersection-animate">
          <a
            href="http://wa.me/556592264219?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20FAS%20Rastreamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-base transition-all duration-300 hover:-translate-y-1"
            style={{ backgroundColor: 'rgb(37, 211, 102)', boxShadow: 'rgba(37, 211, 102, 0.4) 0px 4px 20px' }}
          >
            <WhatsAppIcon className="w-5 h-5" />
            Solicitar Orçamento Gratuito
          </a>
        </div>
      </div>
    </section>
  );
}

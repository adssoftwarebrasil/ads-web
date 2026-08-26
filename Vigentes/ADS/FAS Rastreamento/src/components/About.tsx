import { Zap, Award, Users, CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  iconCls: string;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    iconCls: 'lucide lucide-zap',
    title: 'Rastreamento em Minutos',
    desc: 'Clientes rastreiam veículos em 5 minutos após acionamento.',
  },
  {
    icon: Award,
    iconCls: 'lucide lucide-award',
    title: 'Mais de 10 Anos de Experiência',
    desc: 'Desde 2013, consolidados como referência em MT e MS.',
  },
  {
    icon: Users,
    iconCls: 'lucide lucide-users',
    title: 'Suporte Personalizado',
    desc: 'Equipe dedicada disponível 24h para qualquer emergência.',
  },
  {
    icon: CheckCircle2,
    iconCls: 'lucide lucide-check-circle2',
    title: 'Tecnologia Certificada',
    desc: 'Equipamentos homologados com rastreadores de última geração.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 overflow-hidden" style={{ backgroundColor: 'white' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="intersection-animate-left">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
              style={{ backgroundColor: 'rgb(203, 219, 233)', color: 'rgb(27, 53, 74)' }}
            >
              Sobre a FAS Rastreamento
            </span>
            <h2 className="section-title mb-6">
              Uma Empresa que Você Pode <span style={{ color: 'rgb(70, 96, 117)' }}>Confiar</span>
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: 'rgb(112, 136, 160)' }}>
              Fundada em 2013, a FAS Consultoria, Projetos e Tecnologia LTDA nasceu com um propósito claro: oferecer segurança real para veículos em Mato Grosso e Mato Grosso do Sul. Mais de uma década de atuação consolidou nossa reputação como a empresa de rastreamento mais confiável da região.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'rgb(112, 136, 160)' }}>
              Com sede em Cuiabá, nossa central opera 24 horas por dia, 7 dias por semana, com tecnologia GPS de ponta e uma equipe de especialistas prontos para agir em qualquer situação. Rastreadores com identificador de motorista, monitoramento em tempo real e suporte personalizado são apenas alguns dos nossos diferenciais.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="flex gap-3 p-4 rounded-xl intersection-animate"
                    style={{ backgroundColor: 'rgb(222, 231, 232)', transitionDelay: `${i * 80}ms` }}
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'rgb(70, 96, 117)' }}
                    >
                      <span style={{ color: 'rgb(203, 219, 233)' }}>
                        <Icon className={f.iconCls} width={20} height={20} />
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold mb-0.5" style={{ color: 'rgb(5, 31, 52)' }}>
                        {f.title}
                      </h4>
                      <p className="text-xs leading-relaxed" style={{ color: 'rgb(112, 136, 160)' }}>
                        {f.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="intersection-animate-right">
            <div className="relative">
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
                style={{ backgroundColor: 'rgb(203, 219, 233)' }}
              ></div>
              <div className="relative grid grid-cols-2 gap-3">
                <div className="col-span-2 rounded-2xl overflow-hidden" style={{ height: '260px' }}>
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/fas%20rastreamento%20veicular/img/anuncio-protecao-veicular-rastreamento-fas-azul_1024x1280.webp"
                    alt="Proteção veicular FAS"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden" style={{ height: '180px' }}>
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/fas%20rastreamento%20veicular/img/anuncio-fas-carro-roubado-moto-ladrao_1080x1350.webp"
                    alt="Segurança contra roubo"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div
                  className="rounded-2xl flex flex-col items-center justify-center p-6 text-center"
                  style={{ backgroundColor: 'rgb(5, 31, 52)', height: '180px' }}
                >
                  <div className="text-4xl font-extrabold mb-1" style={{ color: 'rgb(203, 219, 233)' }}>
                    4.4★
                  </div>
                  <p className="text-xs font-medium" style={{ color: 'rgb(112, 136, 160)' }}>
                    Avaliação no Google
                  </p>
                  <p className="text-xs mt-2 leading-tight" style={{ color: 'rgb(203, 219, 233)' }}>
                    Clientes satisfeitos em toda a região
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

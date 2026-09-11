import { ShieldCheck, Clock, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const badges = [
  { icon: ShieldCheck, cls: 'lucide lucide-shield-check', label: 'Rastreamento Rápido' },
  { icon: Clock, cls: 'lucide lucide-clock', label: 'Suporte 24h' },
  { icon: MapPin, cls: 'lucide lucide-map-pin', label: 'MT e MS' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/fas%20rastreamento%20veicular/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 hero-overlay"></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              backgroundColor: 'rgba(70, 96, 117, 0.4)',
              color: 'rgb(203, 219, 233)',
              border: '1px solid rgba(112, 136, 160, 0.4)',
            }}
          >
            <ShieldCheck className="lucide lucide-shield-check" width={15} height={15} />
            <span>Monitoramento 24 horas por dia</span>
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 text-shadow-lg"
          >
            Seu Veículo <span style={{ color: 'rgb(203, 219, 233)' }}>Protegido</span>
            <br />
            em Tempo Real
          </h1>
          <p
            className="text-lg sm:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            style={{ color: 'rgb(203, 219, 233)' }}
          >
            Rastreamento veicular avançado com tecnologia GPS de ponta. Monitoramento contínuo e suporte especializado para sua tranquilidade em MT e MS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="http://wa.me/556592264219?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20rastreamento%20veicular."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-white text-base transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: 'rgb(37, 211, 102)', boxShadow: 'rgba(37, 211, 102, 0.5) 0px 4px 20px' }}
            >
              <WhatsAppIcon className="w-5 h-5" />
              Fale Conosco Agora
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-base transition-all duration-300 border-2 hover:-translate-y-1"
              style={{ borderColor: 'rgb(203, 219, 233)', color: 'rgb(203, 219, 233)' }}
            >
              Conhecer Serviços
            </a>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
            {badges.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm"
                  style={{
                    backgroundColor: 'rgba(27, 53, 74, 0.6)',
                    color: 'rgb(203, 219, 233)',
                    border: '1px solid rgba(112, 136, 160, 0.3)',
                  }}
                >
                  <Icon className={b.cls} width={16} height={16} />
                  <span>{b.label}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex-1 hidden lg:flex justify-center items-center">
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{ border: '2px solid rgba(112, 136, 160, 0.3)', maxWidth: '420px' }}
          >
            <img
              src="https://storage.lucasmendes.dev/site-sp/fas%20rastreamento%20veicular/img/furg-o-branco-dentro-de-um-celular-rastreamento_1080x1350.webp"
              alt="Rastreamento veicular em tempo real pelo celular"
              className="w-full h-auto object-cover"
              style={{ maxHeight: '520px' }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-4 text-center"
              style={{ background: 'linear-gradient(to top, rgba(5, 31, 52, 0.9) 0%, transparent 100%)' }}
            >
              <p className="text-white font-semibold text-sm">Monitore seu veículo pelo smartphone</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

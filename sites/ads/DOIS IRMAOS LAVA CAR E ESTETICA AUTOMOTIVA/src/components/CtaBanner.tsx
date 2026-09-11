import WhatsAppIcon from './WhatsAppIcon';

const BG =
  'https://storage.lucasmendes.dev/site-sp/dois%20irmaos%20lava%20car%20e%20estetica%20automotiva/img/fortuner-prata-estacionada-concessionaria-outro-carro-preto_640x1136.webp';
const WHATSAPP_AGENDAR =
  'https://wa.me/5566996156031?text=Olá!%20Gostaria%20de%20agendar%20uma%20lavagem.';

export default function CtaBanner() {
  return (
    <section className="py-24 bg-brand-black relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("${BG}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.12,
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(9, 9, 9, 0.97) 0%, rgba(9, 9, 9, 0.85) 50%, rgba(9, 9, 9, 0.95) 100%)',
        }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: 'rgb(169, 199, 209)' }}
      ></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 opacity-100 translate-y-0">
        <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-4 block">
          Atendimento em Sinop-MT
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          Agende Sua Lavagem{' '}
          <span
            style={{
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundImage: 'linear-gradient(135deg, rgb(169, 199, 209), rgb(221, 245, 250))',
            }}
          >
            Hoje Mesmo
          </span>
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Carros, caminhões, tratores e máquinas pesadas — atendemos todos no Distrito Industrial de
          Sinop. Qualidade garantida, preço justo.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_AGENDAR}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-10 py-4 shadow-xl shadow-brand-blue/25 hover:shadow-brand-blue/45"
          >
            <WhatsAppIcon width={20} height={20} />
            Agendar pelo WhatsApp
          </a>
          <a href="tel:+5566996156031" className="btn-outline text-base px-10 py-4">
            Ligar Agora
          </a>
        </div>
      </div>
    </section>
  );
}

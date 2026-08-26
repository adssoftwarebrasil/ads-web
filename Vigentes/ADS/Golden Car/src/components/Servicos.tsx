import { Car, CreditCard, RefreshCcw, FileText, Search, Headphones, LucideIcon } from 'lucide-react';
import { WHATSAPP } from '../data';

interface Service {
  Icon: LucideIcon;
  cls: string;
  title: string;
  desc: string;
}

const services: Service[] = [
  {
    Icon: Car,
    cls: 'lucide lucide-car',
    title: 'Venda de Veículos',
    desc: 'Amplo estoque de seminovos e usados selecionados com qualidade e procedência garantida para você.',
  },
  {
    Icon: CreditCard,
    cls: 'lucide lucide-credit-card',
    title: 'Financiamento Facilitado',
    desc: 'Parceria com as principais financeiras do mercado. Parcelas que cabem no seu bolso com aprovação rápida.',
  },
  {
    Icon: RefreshCcw,
    cls: 'lucide lucide-refresh-ccw',
    title: 'Aceite de Usados',
    desc: 'Avaliação justa e transparente do seu veículo atual. Use como entrada e saia com o carro que quer.',
  },
  {
    Icon: FileText,
    cls: 'lucide lucide-file-text',
    title: 'Carta de Crédito',
    desc: 'Trabalhamos com consórcio e carta de crédito como forma de pagamento. Mais opções para você.',
  },
  {
    Icon: Search,
    cls: 'lucide lucide-search',
    title: 'Consultoria Gratuita',
    desc: 'Nossa equipe te ajuda a encontrar o veículo ideal para o seu perfil de uso e orçamento disponível.',
  },
  {
    Icon: Headphones,
    cls: 'lucide lucide-headphones',
    title: 'Pós-Venda',
    desc: 'Nosso compromisso não termina na compra. Estamos aqui para garantir sua satisfação total.',
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="bg-brand-black py-20 md:py-28 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-px opacity-30"
        style={{ background: 'linear-gradient(90deg, transparent, rgb(245, 223, 108), transparent)' }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-full h-px opacity-30"
        style={{ background: 'linear-gradient(90deg, transparent, rgb(245, 223, 108), transparent)' }}
      ></div>
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(at 70% 30%, rgb(218, 158, 12) 0%, transparent 60%)' }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'rgb(245, 223, 108)' }}>
            O que Oferecemos
          </span>
          <h2 className="section-title text-white mt-3">
            Soluções Completas para
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, rgb(245, 223, 108) 0%, rgb(218, 158, 12) 100%)' }}
            >
              Você Realizar seu Sonho
            </span>
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto text-base">
            Da busca pelo veículo ideal até a entrega das chaves, cuidamos de tudo com transparência e excelência.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ Icon, cls, title, desc }) => (
            <div
              key={title}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 card-hover hover:border-golden/40 overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: 'radial-gradient(at 50% 0%, rgba(245, 223, 108, 0.06) 0%, transparent 70%)' }}
              ></div>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(245, 223, 108, 0.15), rgba(218, 158, 12, 0.15))',
                  border: '1px solid rgba(245, 223, 108, 0.2)',
                }}
              >
                <Icon size={22} className={cls} style={{ color: 'rgb(245, 223, 108)' }} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: 'linear-gradient(90deg, rgb(245, 223, 108), rgb(218, 158, 12))' }}
              ></div>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a
            href={`${WHATSAPP}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Golden Car.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-golden rounded-xl px-10 py-4 font-bold text-base"
          >
            Quero Saber Mais
          </a>
        </div>
      </div>
    </section>
  );
}

import type { LucideIcon } from 'lucide-react';
import { Award, Users, Truck, Wrench, CreditCard, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { WhatsAppIcon } from './icons';
import { WHATSAPP_URL } from '../constants';

const CARDS: { icon: LucideIcon; title: string; desc: string; delay: string }[] = [
  { icon: Award, title: 'Baterias de Alta Performance', desc: 'Trabalhamos apenas com as melhores marcas do mercado.', delay: '400ms' },
  { icon: Users, title: 'Atendimento Especializado', desc: 'Equipe capacitada para ajudar na escolha certa.', delay: '500ms' },
  { icon: Truck, title: 'Entrega Rápida', desc: 'Receba sua bateria no mesmo dia em Natal.', delay: '600ms' },
  { icon: Wrench, title: 'Instalação Imediata', desc: 'Profissionais prontos para instalar na hora.', delay: '700ms' },
  { icon: CreditCard, title: 'Parcelamento Facilitado', desc: 'Até 10x sem juros para sua comodidade.', delay: '800ms' },
  { icon: CheckCircle, title: 'Garantia de Fábrica', desc: 'Todas as baterias com garantia oficial.', delay: '900ms' },
];

export default function Advantages() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const reveal = (extra: string) => (inView ? 'opacity-100 translate-y-0' : `opacity-0 ${extra}`);

  return (
    <section id="vantagens" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 rounded-full opacity-5 blur-3xl" style={{ background: 'rgb(254, 186, 0)' }}></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl" style={{ background: 'rgb(4, 51, 140)' }}></div>
      <div ref={ref} className="container mx-auto px-4 max-w-[1200px] relative z-10">
        <div className="text-center mb-14">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
            style={{ backgroundColor: 'rgba(254, 186, 0, 0.15)', color: 'rgb(4, 51, 140)' }}
          >
            <Award className="w-4 h-4" />
            Vantagens
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 transition-all duration-700 delay-100 ${reveal('translate-y-4')}`} style={{ color: 'rgb(4, 51, 140)' }}>
            Por Que Escolher a{' '}
            <span className="relative inline-block">
              JD Baterias?
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C50 2 150 2 198 8" stroke="rgb(254, 186, 0)" strokeWidth="4" strokeLinecap="round"></path>
              </svg>
            </span>
          </h2>
          <p className={`text-[#555] text-lg md:text-xl max-w-[600px] mx-auto leading-relaxed transition-all duration-700 delay-200 ${reveal('translate-y-4')}`}>
            Oferecemos benefícios exclusivos que garantem a melhor experiência ao adquirir sua bateria.
          </p>
        </div>

        <div className={`flex justify-center mb-14 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl opacity-20" style={{ background: 'linear-gradient(135deg, rgb(254, 186, 0) 0%, rgb(4, 51, 140) 100%)' }}></div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/jd-baterias%2Fimg%2FVantagens.jpg"
              alt="Vantagens JD Baterias"
              className="relative w-full max-w-[700px] h-auto rounded-2xl shadow-2xl object-cover"
            />
            <div className="absolute -bottom-5 -right-5 md:bottom-6 md:right-6 px-5 py-3 rounded-xl shadow-lg" style={{ backgroundColor: 'rgb(4, 51, 140)' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgb(254, 186, 0)' }}>
                  <CheckCircle className="w-5 h-5" style={{ color: 'rgb(4, 51, 140)' }} />
                </div>
                <div className="text-white">
                  <p className="text-xs opacity-80">Mais de</p>
                  <p className="font-bold text-lg">10 Anos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CARDS.map(({ icon: Icon, title, desc, delay }) => (
            <div
              key={title}
              className={`group bg-[#f8f9fa] hover:bg-white rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${reveal('translate-y-8')}`}
              style={{ transitionDelay: delay }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: 'rgb(254, 186, 0)' }}
                >
                  <Icon size={26} strokeWidth={2.5} style={{ color: 'rgb(4, 51, 140)' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1.5 transition-colors duration-300" style={{ color: 'rgb(4, 51, 140)' }}>
                    {title}
                  </h3>
                  <p className="text-[#666] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-14 text-center transition-all duration-700 delay-1000 ${reveal('translate-y-4')}`}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: 'rgb(254, 186, 0)', color: 'rgb(4, 51, 140)' }}
          >
            <WhatsAppIcon className="w-6 h-6" />
            Fale com um Especialista
          </a>
        </div>
      </div>
    </section>
  );
}

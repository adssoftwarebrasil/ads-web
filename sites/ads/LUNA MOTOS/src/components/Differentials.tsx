import { Award, Shield, Clock, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Item = {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
};

const items: Item[] = [
  {
    icon: Award,
    iconClass: 'lucide lucide-award w-8 h-8 text-[#F97316] flex-shrink-0 mt-1',
    title: 'Experiência Comprovada',
    text: 'Equipe técnica certificada com anos de experiência em motocicletas nacionais e importadas.',
  },
  {
    icon: Shield,
    iconClass: 'lucide lucide-shield w-8 h-8 text-[#F97316] flex-shrink-0 mt-1',
    title: 'Garantia Real',
    text: 'Todos os nossos serviços possuem garantia. Sua segurança e satisfação são prioridade.',
  },
  {
    icon: Clock,
    iconClass: 'lucide lucide-clock w-8 h-8 text-[#F97316] flex-shrink-0 mt-1',
    title: 'Agilidade na Entrega',
    text: 'Respeitamos seu tempo. Prazos cumpridos e comunicação transparente durante todo o processo.',
  },
  {
    icon: Heart,
    iconClass: 'lucide lucide-heart w-8 h-8 text-[#F97316] flex-shrink-0 mt-1',
    title: 'Atendimento Humanizado',
    text: 'Tratamos cada cliente como único. Orçamento claro, sem surpresas, com foco na sua necessidade.',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative w-full">
      <div className="bg-gradient-to-br from-[#020202] to-[#141414] py-16 md:py-20 lg:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[#F97316] text-sm font-bold uppercase tracking-wider">
            NOSSOS DIFERENCIAIS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6 leading-tight">
            Por Que a Luna Motos é a Escolha Certa?
          </h2>
          <p className="text-lg text-[#D3D6D5] leading-relaxed mb-12 mx-auto max-w-2xl">
            Não somos apenas mais uma oficina. Somos especialistas apaixonados por motos,
            comprometidos em entregar excelência em cada serviço.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-black/40 border-l-4 border-[#F97316] rounded-lg p-5 hover:bg-black/60 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <Icon className={item.iconClass} />
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-[#D3D6D5] text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <a
            href="https://wa.me/559591772210?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-[#020202] font-semibold text-sm uppercase rounded-lg hover:bg-gradient-to-r hover:from-[#F97316] hover:to-[#DC2626] hover:text-white transition-all duration-200"
          >
            SOLICITE SEU ORÇAMENTO
          </a>
        </div>
      </div>
    </section>
  );
}

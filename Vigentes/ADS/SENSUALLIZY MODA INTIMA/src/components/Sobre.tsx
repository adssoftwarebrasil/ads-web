import { Heart, Award, Users, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const SOBRE_IMG = 'https://storage.lucasmendes.dev/site-sp/sensuallizy%20moda%20intima%2Fimg2%2Fsobre-nos.webp';

interface Feature {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
}

const features: Feature[] = [
  { Icon: Heart, iconClass: 'lucide lucide-heart w-6 h-6 text-[#E24244]', title: 'Atendimento Humanizado', text: 'Cada cliente é única e especial' },
  { Icon: Award, iconClass: 'lucide lucide-award w-6 h-6 text-[#E24244]', title: 'Qualidade Premium', text: 'Marcas reconhecidas no mercado' },
  { Icon: Users, iconClass: 'lucide lucide-users w-6 h-6 text-[#E24244]', title: '9 Anos de Experiência', text: 'Desde 2015 no mercado' },
  { Icon: Sparkles, iconClass: 'lucide lucide-sparkles w-6 h-6 text-[#E24244]', title: 'Variedade Exclusiva', text: 'Para todos os estilos' },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-last md:order-none">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-[#E24244]/10 rounded-full blur-3xl"></div>
            <img
              src={SOBRE_IMG}
              alt="Fachada da Sensuallizy Moda Íntima"
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-[#E24244] font-semibold text-sm tracking-wider uppercase">Nossa História</span>
              <div className="h-1 w-16 bg-[#E24244] mt-2"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#212423] leading-tight">
              Mais Que Moda Íntima,<span className="block text-[#E24244]">Uma Experiência Única</span>
            </h2>
            <p className="text-[#212423]/70 text-lg leading-relaxed">
              A <strong>Sensuallizy Moda Íntima</strong> nasceu em março de 2015, a partir de um atendimento próximo e personalizado, inicialmente realizado de forma porta a porta. Esse contato direto com as clientes construiu a base da nossa marca e fortaleceu nossa essência.
            </p>
            <p className="text-[#212423]/70 text-lg leading-relaxed">
              Em maio de 2023, esse sonho ganhou forma com a inauguração da nossa loja física, consolidando uma trajetória pautada em <strong>confiança, cuidado e relacionamento verdadeiro</strong>.
            </p>
            <p className="text-[#212423]/70 text-lg leading-relaxed">
              Hoje, somos especializadas em lingerie de diversas marcas renomadas, incluindo <strong>Liz, Nayane e Plié</strong>, além de pijamas femininos, masculinos e infantis, moda praia e modeladores. Aqui, o cuidado vai muito além da peça.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              {features.map((f) => (
                <div key={f.title} className="space-y-2">
                  <div className="w-12 h-12 rounded-xl bg-[#E24244]/10 flex items-center justify-center">
                    <f.Icon className={f.iconClass} />
                  </div>
                  <h3 className="font-semibold text-[#212423]">{f.title}</h3>
                  <p className="text-sm text-[#212423]/60">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

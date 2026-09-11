import {
  Sprout, GraduationCap, Droplets, Trees, Bug, Heart, UtensilsCrossed,
  Users, Target, MessageCircle, LucideIcon,
} from 'lucide-react';
import { waLink } from '../lib/site';

interface Initiative {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
  delay: number;
}

const INITIATIVES: Initiative[] = [
  { Icon: Sprout, iconClass: 'lucide-sprout', title: 'Viveiro de Mudas', description: 'Produção, distribuição e plantio de mudas nativas.', delay: 0 },
  { Icon: GraduationCap, iconClass: 'lucide-graduation-cap', title: 'Educação Ambiental', description: 'Palestras e workshops sobre gestão de resíduos.', delay: 50 },
  { Icon: Droplets, iconClass: 'lucide-droplets', title: 'Recuperação de Nascentes', description: 'Preservação e recuperação de mananciais locais.', delay: 100 },
  { Icon: Trees, iconClass: 'lucide-trees', title: 'Área de Lazer Verde', description: 'Criação de espaços arborizados para a comunidade.', delay: 150 },
  { Icon: Bug, iconClass: 'lucide-bug', title: 'Conservação de Abelhas', description: 'Projetos de preservação de polinizadores naturais.', delay: 200 },
  { Icon: Heart, iconClass: 'lucide-heart', title: 'Ações Sociais', description: 'Confecção e doação de roupas e itens essenciais.', delay: 250 },
  { Icon: UtensilsCrossed, iconClass: 'lucide-utensils-crossed', title: 'Combate à Fome', description: 'Apoio alimentar para pessoas em vulnerabilidade.', delay: 300 },
  { Icon: Users, iconClass: 'lucide-users', title: 'Inclusão Social', description: 'Iniciativas de desenvolvimento e inclusão no trabalho.', delay: 350 },
  { Icon: Target, iconClass: 'lucide-target', title: 'Economia Circular', description: 'Ciclo completo de reaproveitamento de materiais.', delay: 400 },
];

export default function Sustainability() {
  return (
    <section
      id="sustentabilidade"
      className="relative py-20 md:py-32 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          'linear-gradient(rgba(30, 90, 60, 0.9), rgba(20, 50, 35, 0.95)), url("https://storage.lucasmendes.dev/site-sp/indcom/img/responsibilidade-social-e-sustentabilidade.webp")',
      }}
    >
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-8 text-center">
        <div className="transition-all duration-700 opacity-0 translate-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 text-[rgb(130,196,92)] rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
            <Sprout className="lucide lucide-sprout w-3 h-3" /> ESG &amp; Social
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Compromisso com o Futuro
          </h2>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-white/80 leading-relaxed mb-12">
            No Grupo Indcom, sustentabilidade não é apenas uma palavra, é a base da nossa operação. Conheça as iniciativas que transformam o meio ambiente e a sociedade ao nosso redor.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {INITIATIVES.map((item) => (
            <div
              key={item.title}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[rgb(130,196,92)]/50 transition-all duration-300 hover:-translate-y-1 opacity-0 translate-y-8"
              style={{ transitionDelay: `${item.delay}ms` }}
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-12 h-12 rounded-xl bg-[rgb(130,196,92)]/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[rgb(130,196,92)] transition-all duration-300">
                  <item.Icon className={`lucide ${item.iconClass} w-6 h-6 text-[rgb(130,196,92)] group-hover:text-[rgb(20,80,50)] transition-colors`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <a
          href={waLink('Olá! Gostaria de saber mais sobre as iniciativas de Sustentabilidade e ESG do Grupo Indcom.')}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[rgb(130,196,92)] text-[rgb(20,80,50)] rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(130,196,92,0.4)] opacity-0 translate-y-8"
          style={{ transitionDelay: '600ms' }}
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <span className="relative">Falar com Especialista</span>
          <MessageCircle className="lucide lucide-message-circle relative w-5 h-5 group-hover:rotate-12 transition-transform" />
        </a>
      </div>
    </section>
  );
}

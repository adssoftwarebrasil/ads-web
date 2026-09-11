import type { ReactNode } from 'react';
import { Search, TrendingUp, MessagesSquare, Lightbulb, Palette, Code2, LayoutPanelTop } from 'lucide-react';
import { ArrowRight, Drone } from './icons';

type Service = {
  href: string;
  num: string;
  title: ReactNode;
  tagline: string;
  desc: string;
  icon: ReactNode;
};

const services: Service[] = [
  {
    href: '/servicos/especialistas-google',
    num: '01',
    title: 'Especialistas Google',
    tagline: 'Domínio da maior fonte de demanda do mundo.',
    desc: 'Gestão de elite em Google Ads e Google Meu Negócio. Estruturamos campanhas, lances e presença local para capturar intenção de compra no momento exato.',
    icon: <Search className="size-5" />,
  },
  {
    href: '/servicos/especialistas-meta',
    num: '02',
    title: 'Especialistas Meta',
    tagline: 'Demanda, desejo e escala no ecossistema Meta.',
    desc: 'Campanhas no Facebook e Instagram construídas para gerar receita previsível — da prospecção à retenção, com criativos que performam.',
    icon: <TrendingUp className="size-5" />,
  },
  {
    href: '/servicos/gestao-de-redes-sociais',
    num: '03',
    title: 'Gestão de Redes Sociais',
    tagline: 'Presença que constrói marca e relacionamento.',
    desc: 'Estratégia, criação de conteúdo e gestão das suas redes — posts, reels, stories e comunidade — com consistência e identidade de marca.',
    icon: <MessagesSquare className="size-5" />,
  },
  {
    href: '/servicos/consultoria-de-marketing',
    num: '04',
    title: 'Consultoria de Marketing',
    tagline: 'Direção antes da execução.',
    desc: 'Diagnóstico, posicionamento e plano de marketing para empresas que querem crescer com método — não no improviso.',
    icon: <Lightbulb className="size-5" />,
  },
  {
    href: '/servicos/identidade-visual-e-branding',
    num: '05',
    title: <>Identidade Visual &amp; Branding</>,
    tagline: 'Uma marca à altura da sua ambição.',
    desc: 'Criação e recriação de identidade visual — logotipo, sistema visual e manual da marca — que comunica valor e gera reconhecimento.',
    icon: <Palette className="size-5" />,
  },
  {
    href: '/servicos/software-sob-medida',
    num: '06',
    title: 'Software sob medida',
    tagline: 'Tecnologia construída para a sua operação.',
    desc: 'Sistemas, aplicativos e integrações desenvolvidos sob medida — escaláveis, seguros e desenhados a partir da realidade do seu negócio.',
    icon: <Code2 className="size-5" />,
  },
  {
    href: '/servicos/sites-e-plataformas',
    num: '07',
    title: <>Sites &amp; Plataformas</>,
    tagline: 'Plataformas web que vendem e representam.',
    desc: 'Sites e plataformas de alto desempenho — rápidos, otimizados para conversão e SEO, com identidade à altura da sua marca.',
    icon: <LayoutPanelTop className="size-5" />,
  },
  {
    href: '/servicos/acompanhamento-de-obras-com-drones',
    num: '08',
    title: 'Acompanhamento por Drones',
    tagline: 'A sua obra vista do alto, com dados que decidem.',
    desc: 'Voos de drone para acompanhar o avanço físico, gerar ortofotos e modelos 3D, medir volumes e inspecionar áreas de risco — em obras de todo o Brasil.',
    icon: <Drone className="size-5" />,
  },
];

export default function Services() {
  return (
    <section className="bg-paper py-20 text-ink md:py-32">
      <div className="container-page">
        <div data-reveal className="max-w-2xl is-in">
          <p className="eyebrow">O que fazemos</p>
          <h2 className="mt-4 font-serif text-3xl leading-[1.08] tracking-tight md:text-4xl lg:text-[2.7rem]">
            Uma agência completa, um só padrão.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone">
            De performance e conteúdo a software, marca e obras — tudo sob o mesmo teto, com o mesmo rigor. As frentes que movem os números da diretoria, integradas.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <a
              key={s.href}
              href={s.href}
              data-reveal
              className="group relative flex flex-col rounded-lg border border-line bg-ivory p-7 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] is-in hover:bg-sand md:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex size-11 items-center justify-center rounded-md bg-paper text-ink ring-1 ring-line transition-colors duration-300 group-hover:bg-lime group-hover:text-ink group-hover:ring-lime">
                  {s.icon}
                </span>
                <span className="font-mono text-xs tracking-[0.2em] text-mist">{s.num}</span>
              </div>
              <h3 className="mt-6 font-serif text-2xl tracking-tight">{s.title}</h3>
              <p className="mt-1.5 text-sm font-medium text-moss">{s.tagline}</p>
              <p className="mt-4 flex-1 text-[0.97rem] leading-relaxed text-stone">{s.desc}</p>
              <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                Conhecer
                <ArrowRight className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

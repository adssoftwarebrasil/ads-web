import { CheckCircle2, Store, Smartphone, ShoppingBag } from 'lucide-react';

const highlights = [
  'Peças de alta qualidade para todas as marcas',
  'Atendimento especializado no balcão',
  'Venda ágil pelo WhatsApp',
  'Disponível também no Mercado Livre',
  'Atendemos consumidores finais, oficinas e frotas',
  'Reposição rápida de peças por encomenda',
];

const channels = [
  {
    icon: Store,
    title: 'Loja Física',
    desc: 'Atendimento presencial com equipe especializada',
    href: 'https://www.google.com/maps/dir/?api=1&destination=Tavares+Auto+pe%C3%A7as,+Ribeir%C3%A3o+Preto',
  },
  {
    icon: Smartphone,
    title: 'WhatsApp',
    desc: 'Consultas e pedidos com praticidade e agilidade',
    href: 'http://wa.me/551633236646',
  },
  {
    icon: ShoppingBag,
    title: 'Mercado Livre',
    desc: 'Compra online com segurança e comodidade',
    href: 'https://lista.mercadolivre.com.br/pagina/autotavaresdistribuidoradep/#component=menu_corridors&tracking_id=f51ada0928773687adc1335548a7cf27&label=Todos+os+produtos&global_position=1',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative transition-all duration-700 opacity-100 translate-x-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/tavares%20autopecas/img/alteracoes/sobre-nos-quadrado.webp"
                alt="Sobre a Tavares Auto Peças"
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-red text-white p-6 rounded-2xl shadow-xl hidden sm:block">
              <div className="text-4xl font-black leading-none">30+</div>
              <div className="text-sm font-medium mt-1 text-white/90">
                Anos de<br />Tradição
              </div>
            </div>
            <div className="absolute -top-4 -left-4 bg-brand-navy text-white px-5 py-3 rounded-xl shadow-lg hidden sm:flex items-center gap-2 text-sm font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
              Fundada em 1993
            </div>
          </div>
          <div className="transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">Sobre Nós</p>
            <h2 className="section-title mb-2">
              Mais de <span className="text-brand-red">30 anos</span> sendo referência em Ribeirão Preto
            </h2>
            <div className="section-divider mt-5 mb-6"></div>
            <p className="text-brand-gray-text leading-relaxed mb-4">
              Desde 1993, a <strong className="text-brand-black">Tavares Auto Peças</strong> é sinônimo de confiança e
              qualidade no mercado automotivo de Ribeirão Preto e região. Com mais de três décadas de experiência,
              construímos nossa reputação sobre um pilar sólido: oferecer a peça certa, pelo preço justo, com
              atendimento especializado.
            </p>
            <p className="text-brand-gray-text leading-relaxed mb-6">
              Mantemos um estoque amplo e diversificado para carros, caminhonetes e veículos utilitários de todas as
              marcas. Atendemos consumidores finais, mecânicos, oficinas, autocenters e frotistas, sempre com agilidade
              e expertise.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-brand-gray-text">
                  <CheckCircle2 size={16} className="text-brand-red flex-shrink-0 mt-0.5" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {channels.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.title}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-gray rounded-xl p-4 text-center border border-brand-gray-mid hover:border-brand-red transition-colors block cursor-pointer hover:shadow-md"
                  >
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-brand-red/10 text-brand-red rounded-lg mb-2">
                      <Icon size={22} />
                    </div>
                    <div className="font-semibold text-brand-black text-xs">{c.title}</div>
                    <div className="text-brand-gray-text text-xs mt-1 leading-tight">{c.desc}</div>
                  </a>
                );
              })}
            </div>
            <a
              href="http://wa.me/551633236646"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Fale com a Gente
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

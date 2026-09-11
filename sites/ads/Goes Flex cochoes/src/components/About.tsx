import { Quote, Calendar, Users, MapPin, CheckCircle2 } from 'lucide-react';

const stats = [
  {
    icon: Calendar,
    iconClass: 'lucide lucide-calendar text-[rgb(26,91,178)]',
    bg: 'bg-blue-100',
    title: '15+ Anos',
    sub: 'de História',
  },
  {
    icon: Users,
    iconClass: 'lucide lucide-users text-[rgb(240,53,41)]',
    bg: 'bg-red-100',
    title: 'Expertise',
    sub: 'Terapêutica',
  },
  {
    icon: MapPin,
    iconClass: 'lucide lucide-map-pin text-green-600',
    bg: 'bg-green-100',
    title: 'Sergipe',
    sub: 'Entrega Rápida',
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative bg-white py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[rgb(240,53,41)]/10 rounded-full blur-3xl"></div>
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/goes%20flex%2Fimg%2Finterior-loja-colchoes.webp"
                alt="Interior da loja Goes Flex com variedade de colchões"
                className="w-full lg:w-[85%] h-[300px] lg:h-[500px] object-cover rounded-3xl shadow-xl z-10 relative"
              />
              <div className="mt-4 lg:mt-0 lg:absolute lg:-bottom-12 lg:right-0 w-full lg:w-[55%] z-20">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/goes%20flex%2Fimg%2Ffachada-loja-distante.webp"
                  alt="Fachada da loja física"
                  className="w-full h-[200px] lg:h-[300px] object-cover rounded-3xl shadow-2xl border-4 lg:border-8 border-white"
                />
                <div className="absolute -bottom-4 -right-2 lg:bottom-8 lg:-right-8 bg-[rgb(26,91,178)] text-white p-4 lg:p-6 rounded-2xl shadow-lg">
                  <p className="text-xs font-medium uppercase tracking-wider opacity-80">Fundada em</p>
                  <p className="text-2xl lg:text-3xl font-bold">2009</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-[rgb(26,91,178)] text-sm font-bold tracking-wide uppercase mb-4">
                Quem Somos
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Muito Mais que uma <br />
                <span className="text-[rgb(240,53,41)]">Loja de Colchões.</span>
              </h2>
            </div>
            <div className="relative pl-6 border-l-4 border-[rgb(26,91,178)] bg-slate-50 p-6 rounded-r-xl">
              <Quote
                className="lucide lucide-quote absolute top-4 left-4 text-[rgb(26,91,178)]/20 transform -scale-x-100"
                width={40}
                height={40}
              />
              <p className="text-slate-700 italic relative z-10 font-medium">
                "A Góes Flex nasceu de uma necessidade: o mercado estava cheio de vendedores, mas vazio de
                especialistas."
              </p>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">
              Nossa missão é puramente terapêutica. Diferente das lojas comuns, nós não empurramos produtos. Analisamos
              sua necessidade de <strong>saúde, postura e conforto</strong> para indicar a solução perfeita que vai
              transformar suas noites de sono.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="flex flex-col items-center sm:items-start p-4 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <div className={`w-12 h-12 ${s.bg} rounded-full flex items-center justify-center mb-3`}>
                      <Icon className={s.iconClass} width={24} height={24} />
                    </div>
                    <div className="text-2xl font-bold text-slate-900">{s.title}</div>
                    <div className="text-sm text-slate-500">{s.sub}</div>
                  </div>
                );
              })}
            </div>
            <div className="pt-4 flex justify-center sm:justify-start">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                <CheckCircle2 className="lucide lucide-check-circle2 text-[rgb(26,91,178)]" width={18} height={18} />
                <span>Empresa com CNPJ e Sede Própria</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

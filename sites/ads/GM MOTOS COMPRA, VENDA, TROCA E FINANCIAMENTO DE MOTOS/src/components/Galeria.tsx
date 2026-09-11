import { ArrowUpRight } from 'lucide-react';

export default function Galeria() {
  return (
    <section id="galeria" className="relative py-24 sm:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-brand-red mb-4">
              Conheça nossa loja
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05]">
              Um showroom feito para{' '}
              <span className="text-brand-red">apaixonados por motos</span>.
            </h2>
          </div>
          <a
            href="https://wa.me/5566999980270?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita%20%C3%A0%20loja."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-brand-red font-semibold transition-colors group"
          >
            Agendar visita
            <ArrowUpRight
              className="lucide lucide-arrow-up-right group-hover:rotate-45 transition-transform"
              width={18}
              height={18}
            />
          </a>
        </div>
        <div className="grid grid-cols-12 gap-4 sm:gap-5">
          <div className="col-span-12 md:col-span-8 group relative rounded-3xl overflow-hidden aspect-[16/10] md:aspect-[16/11]">
            <img
              src="https://storage.lucasmendes.dev/site-sp/gm-motos/img/loja-gm-motos-varias-motos-estacionadas_5712x4284.webp"
              alt="Loja GM Motos - showroom"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-brand-red text-xs font-bold uppercase tracking-[0.3em] mb-2">
                Showroom
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
                Variedade para todos os perfis
              </h3>
              <p className="text-white/75 mt-2 max-w-md">
                Motos de diferentes marcas e modelos, todas inspecionadas e prontas para o novo
                dono.
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 group relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-auto">
            <img
              src="https://storage.lucasmendes.dev/site-sp/gm-motos/img/loja-motos-gm-honda-vermelhas-pretas_4284x5712.webp"
              alt="Motos Honda"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-brand-red text-xs font-bold uppercase tracking-[0.3em] mb-2">
                Destaques
              </p>
              <h3 className="font-display text-xl font-black text-white">Honda vermelhas e pretas</h3>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 group relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-[4/5]">
            <img
              src="https://storage.lucasmendes.dev/site-sp/gm-motos/img/fachada-com-varias-motos-na-frente-hero-background.webp"
              alt="Fachada da loja"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-brand-red text-xs font-bold uppercase tracking-[0.3em] mb-2">
                Fachada
              </p>
              <h3 className="font-display text-xl font-black text-white">
                Nos encontre em Rondonópolis
              </h3>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 group relative rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[16/10] bg-gradient-to-br from-brand-red to-brand-red-dark p-8 sm:p-12 flex flex-col justify-between">
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/10 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-black/20 blur-2xl"></div>
            <div className="relative">
              <p className="text-white/80 text-xs font-bold uppercase tracking-[0.3em] mb-3">
                Pronto para pilotar?
              </p>
              <h3 className="font-display text-3xl sm:text-5xl font-black text-white leading-tight max-w-lg">
                Venha escolher sua próxima moto pessoalmente.
              </h3>
            </div>
            <div className="relative flex flex-wrap gap-3 mt-6">
              <a
                href="https://wa.me/5566999980270?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20motos%20dispon%C3%ADveis."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-black hover:text-white transition-all"
              >
                Falar agora
                <ArrowUpRight className="lucide lucide-arrow-up-right" width={18} height={18} />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md text-white px-6 py-3 rounded-full font-semibold border border-white/20 hover:bg-black/50 transition-all"
              >
                Ver localização
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

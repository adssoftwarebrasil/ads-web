export default function SEOContent() {
  return (
    <section className="py-24 bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-left">
            <h2 className="text-3xl md:text-5xl font-outfit font-bold text-white mb-8 leading-tight">
              A Melhor <span className="text-premium-red">Barbearia no Jardim Aurélia</span> em Campinas
            </h2>
            <div className="space-y-6 text-zinc-400 font-light leading-relaxed">
              <p>
                Se você procura a <strong className="text-zinc-200">melhor barbearia em Campinas</strong> que combine estilo moderno com técnica tradicional, a Barbearia Zero19 é o seu destino. Localizada no coração do Jardim Aurélia, somos especializados em transformar o visual masculino com excelência.
              </p>
              <p>
                Nosso foco é o <strong className="text-zinc-200">corte masculino premium em Campinas</strong>, oferecendo desde o degradê perfeito até o design de barba profissional. Como <strong className="text-zinc-200">referência em barbearia no Jardim Aurélia</strong>, garantimos um ambiente com sinuca, fliperama e climatização total.
              </p>
              <p>
                Estamos estrategicamente posicionados próximos ao <strong className="text-zinc-200">Unimart Shopping Campinas</strong> e à Rodovia Anhanguera, sendo a escolha ideal para quem busca <strong className="text-zinc-200">barbeiro profissional em Campinas</strong> com agendamento prático pelo WhatsApp e zero espera.
              </p>
            </div>
          </div>
          <div className="relative animate-fade-in-right">
            <div className="aspect-square bg-zinc-900 rounded-2xl overflow-hidden border border-white/5">
              <img
                src="/barber_shop_interior_luxury_1771677240118.webp"
                alt="Ambiente da melhor barbearia em Campinas"
                width="600"
                height="600"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-premium-red font-outfit font-bold text-lg">Jardim Aurélia, Campinas</p>
                <p className="text-white text-sm font-light">Sua melhor versão começa aqui.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

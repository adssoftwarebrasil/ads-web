export default function About() {
  return (
    <section id="sobre" className="bg-stone-900 py-20 md:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, currentcolor 2px, currentcolor 4px)',
          color: 'rgb(217, 119, 6)',
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <p className="text-amber-400 font-semibold text-sm md:text-base uppercase tracking-wider">
              NOSSA HISTÓRIA
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-50 leading-tight">
              Art &amp; madeiras: Tradição que Transforma
            </h2>
            <div className="text-stone-300 text-lg leading-relaxed space-y-4">
              <p>
                Há mais de 10 anos, a Art &amp; madeiras vem transformando espaços em Goiás e região,
                levando a beleza natural da madeira para residências, empresas e áreas de lazer.
              </p>
              <p>
                Nossa jornada começou com uma paixão genuína pelo trabalho artesanal em madeira e a
                vontade de entregar projetos que fossem além do esperado. Ao longo desta década,
                aprimoramos técnicas, investimos em qualificação e, principalmente, construímos uma{' '}
                <span className="text-amber-400 font-semibold">reputação sólida</span> baseada em
                qualidade, pontualidade e compromisso.
              </p>
              <p>
                Cada projeto que executamos — seja um deck aconchegante, um pergolado elegante, um
                playground seguro ou uma cerca robusta — recebe a mesma dedicação e atenção aos detalhes.
                Acreditamos que a madeira, quando trabalhada com técnica e cuidado, tem o poder de
                transformar ambientes comuns em{' '}
                <span className="text-amber-400 font-semibold">espaços extraordinários</span>.
              </p>
              <p>
                Nosso propósito é claro: entregar projetos que unem beleza, resistência e
                funcionalidade, elevando o valor de cada espaço e, principalmente, a satisfação de cada
                cliente.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-stone-700 mt-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-400">10+</div>
                <div className="text-stone-400 text-sm mt-2">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-400">500+</div>
                <div className="text-stone-400 text-sm mt-2">Projetos Realizados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-400">100%</div>
                <div className="text-stone-400 text-sm mt-2">Compromisso com Qualidade</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://storage.lucasmendes.dev/site-sp/art%20e%20madeiras%2Fimg%2Fhomem-deques-ferramentas-construindo.webp"
              alt="Artesão trabalhando em deck de madeira"
              className="rounded-2xl shadow-2xl border-4 border-amber-600/30 w-full h-auto"
              loading="lazy"
            />
            <img
              src="https://storage.lucasmendes.dev/site-sp/art%20e%20madeiras%2Fimg%2Fpergolado-madeira-palmeira.webp"
              alt="Pergolado elegante com palmeira"
              className="absolute bottom-0 right-0 w-1/2 rounded-xl shadow-xl border-2 border-amber-600/30 transform translate-x-8 translate-y-8 hidden lg:block"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

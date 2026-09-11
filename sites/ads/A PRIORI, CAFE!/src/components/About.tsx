import { Quote } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative animate-on-scroll-left">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/a%20priori%20cafe/img/interior-cafeteria-balcao-vitrines-doces_1600x1059.webp"
                alt="Interior da A Priori Café com vitrines de doces"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-40 h-40 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
              <img
                src="https://storage.lucasmendes.dev/site-sp/a%20priori%20cafe/img/parede-logo-aprioricafecps-planta-prateleira_1536x1024.webp"
                alt="Logo A Priori Café na parede"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 bg-burgundy text-white rounded-xl p-4 shadow-lg hidden sm:flex flex-col items-center justify-center w-28 h-28">
              <p className="font-serif text-3xl font-bold leading-none">7h30</p>
              <p className="font-sans text-xs font-medium mt-1 text-center leading-tight">às 19h · Seg a Sex</p>
            </div>
          </div>

          <div className="animate-on-scroll-right">
            <span className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-burgundy mb-4 block">
              Nossa História
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Qualidade e Sofisticação
              <br />
              <em className="text-burgundy font-medium">no Centro de Campinas</em>
            </h2>

            <div className="relative bg-cream-light rounded-xl p-5 mb-7 border-l-4 border-burgundy">
              <Quote size={20} className="text-burgundy/50 mb-2" />
              <p className="font-serif text-base italic text-gray-700 leading-relaxed">
                "Um lugar criado para você que é de Campinas, que adora o Centro,
                ou para você que está de passagem e procura qualidade em meio ao
                convencional, sofisticação em meio ao comum."
              </p>
            </div>

            <p className="font-sans text-gray-600 leading-relaxed mb-5 text-base">
              A <strong className="text-gray-900">A Priori, Café!</strong> nasceu com um propósito claro:
              ser o ponto de partida para suas melhores ideias. No coração do centro de Campinas,
              criamos um espaço aconchegante onde cada detalhe foi pensado para oferecer uma
              experiência acima do comum.
            </p>
            <p className="font-sans text-gray-600 leading-relaxed mb-8 text-base">
              Do nosso café especial preparado com cuidado, às quiches artesanais, croissants
              franceses, tortas irresistíveis e doces delicados — cada produto é selecionado
              com rigor para garantir a mais alta qualidade em cada visita.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { number: '100%', label: 'Ingredientes Selecionados' },
                { number: 'Wi-Fi', label: 'Espaço para Trabalhar' },
                { number: 'Entrega', label: 'Rápida e Cuidadosa' },
                { number: 'Cestas', label: 'Presentes Especiais' },
              ].map(({ number, label }) => (
                <div key={label} className="bg-cream-light rounded-xl p-4 text-center border border-cream">
                  <p className="font-serif text-xl font-bold text-burgundy">{number}</p>
                  <p className="font-sans text-xs text-gray-600 mt-1">{label}</p>
                </div>
              ))}
            </div>

            <a
              href="http://wa.me/5519996561976"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-burgundy text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-burgundy-dark hover:shadow-lg hover:-translate-y-0.5"
            >
              Venha nos Conhecer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

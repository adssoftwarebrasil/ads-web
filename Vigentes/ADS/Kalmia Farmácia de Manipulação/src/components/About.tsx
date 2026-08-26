import { Clock, Users, Award, Leaf } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <span className="inline-block text-sm font-semibold text-brand-green uppercase tracking-widest mb-4">
              Quem somos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Uma farmácia feita <span className="text-primary">com propósito</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Desde 2004, a <strong className="text-primary">Kalmia Farmácia de Manipulação</strong> transforma a
              saúde de milhares de pessoas em São Carlos e em todo o Brasil. Com uma equipe de farmacêuticas
              altamente qualificadas, desenvolvemos fórmulas 100% personalizadas — para humanos e animais.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Nosso portfólio abrange dermocosméticos, fitoterápicos, suplementos, homeopatias e florais. E com
              nosso produto próprio, o <strong className="text-primary">Kalmia Hair</strong>, ajudamos você a
              recuperar a vitalidade dos cabelos, unhas, pele e imunidade de forma natural e eficaz.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              Acreditamos que cuidar da sua saúde e do planeta andam juntos. Por isso, usamos{' '}
              <strong>energia fotovoltaica</strong>, <strong>embalagens biodegradáveis</strong> e{' '}
              <strong>sacolas de papel</strong> — inovação com responsabilidade ambiental.
            </p>
            <a
              href="http://wa.me/5516991594153"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full hover:bg-primary-dark transition-colors shadow-lg hover:shadow-primary/30"
            >
              Conheça nossos produtos
            </a>
          </div>
          <div className="animate-on-scroll">
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-brand-cream rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300 hover:border-primary/20">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4">
                  <Clock size={22} className="lucide lucide-clock text-primary" />
                </div>
                <p className="text-3xl font-bold mb-1 text-primary">+20</p>
                <p className="text-gray-500 text-sm leading-snug">Anos de experiência</p>
              </div>
              <div className="bg-brand-cream rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300 hover:border-primary/20">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4">
                  <Users size={22} className="lucide lucide-users text-brand-green" />
                </div>
                <p className="text-3xl font-bold mb-1 text-brand-green">+5mil</p>
                <p className="text-gray-500 text-sm leading-snug">Clientes satisfeitos</p>
              </div>
              <div className="bg-brand-cream rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300 hover:border-primary/20">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4">
                  <Award size={22} className="lucide lucide-award text-primary" />
                </div>
                <p className="text-3xl font-bold mb-1 text-primary">5.0★</p>
                <p className="text-gray-500 text-sm leading-snug">Avaliação no Google</p>
              </div>
              <div className="bg-brand-cream rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300 hover:border-primary/20">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4">
                  <Leaf size={22} className="lucide lucide-leaf text-brand-green" />
                </div>
                <p className="text-3xl font-bold mb-1 text-brand-green">100%</p>
                <p className="text-gray-500 text-sm leading-snug">Compromisso sustentável</p>
              </div>
            </div>
            <div className="mt-5 bg-gradient-to-br from-primary to-brand-green rounded-2xl p-6 text-white">
              <blockquote className="text-base italic leading-relaxed mb-3">
                "Como estabelecimento de saúde, é nosso dever oferecer o melhor do mundo magistral — qualidade,
                ética e cuidado em cada fórmula."
              </blockquote>
              <p className="text-white/70 text-sm font-medium">— Equipe Kalmia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

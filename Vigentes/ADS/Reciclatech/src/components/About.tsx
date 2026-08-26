import { Leaf, MessageCircle, Award, Users, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Award, slug: 'award', value: '+12 Anos', label: 'De experiência' },
  { icon: Users, slug: 'users', value: '+2.000', label: 'Clientes atendidos' },
  { icon: Leaf, slug: 'leaf', value: '100%', label: 'Sustentável' },
  { icon: TrendingUp, slug: 'trending-up', value: '+100t', label: 'Recicladas' },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-72 h-72 bg-[rgb(26,157,39)]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgb(18,132,27)]/5 rounded-full blur-3xl -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 lg:mb-16 transition-all duration-1000 opacity-100 translate-y-0">
          <span className="inline-block px-4 py-2 bg-[rgb(26,157,39)]/10 text-[rgb(18,132,27)] text-sm font-semibold rounded-full mb-4">
            Sobre Nós
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(53,64,66)] mb-4">
            Reciclatech Gestão de Resíduos Eletrônicos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[rgb(26,157,39)] to-[rgb(18,132,27)] mx-auto rounded-full"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-16">
          <div
            className="space-y-6 transition-all duration-1000 opacity-100 translate-x-0"
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="space-y-4">
              <p className="text-base sm:text-lg lg:text-xl text-[rgb(64,77,79)] leading-relaxed">
                A{' '}
                <span className="font-semibold text-[rgb(18,132,27)]">
                  Reciclatech Comercio e Serviços Ltda.
                </span>{' '}
                foi fundada em <span className="font-semibold">2011</span> e atua em{' '}
                <span className="font-semibold">Curitiba e Região Metropolitana</span>.
              </p>
              <p className="text-base sm:text-lg text-[rgb(64,77,79)] leading-relaxed">
                <span className="font-semibold text-[rgb(18,132,27)]">Missão</span> - Promover
                sustentabilidade e a preservação do meio ambiente através dos serviços oferecidos:
                Gestão de Resíduos Eletroeletrônicos, Comércio de Salvados e Manutenção em
                Informática, contribuindo para o desenvolvimento do país e a qualidade de vida de
                todos nós.
              </p>
            </div>
            <div className="relative bg-gradient-to-r from-[rgb(26,157,39)]/10 to-[rgb(18,132,27)]/10 border-l-4 border-[rgb(26,157,39)] p-6 rounded-r-xl">
              <Leaf className="lucide lucide-leaf absolute top-4 right-4 w-12 h-12 text-[rgb(26,157,39)]/20" />
              <p className="text-lg sm:text-xl font-semibold text-[rgb(18,132,27)] leading-relaxed relative z-10">
                "Nosso time se dedica a entender e atender suas necessidades."
              </p>
            </div>
            <div className="pt-4">
              <a
                href="https://wa.me/5541999600458"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-[rgb(26,157,39)] hover:bg-[rgb(18,132,27)] text-white px-8 py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg shadow-[rgb(26,157,39)]/30 hover:shadow-xl hover:shadow-[rgb(26,157,39)]/50 hover:scale-105"
              >
                <MessageCircle className="lucide lucide-message-circle w-5 h-5 transition-transform group-hover:rotate-12" />
                <span>Fale Conosco</span>
              </a>
            </div>
          </div>
          <div
            className="relative transition-all duration-1000 opacity-100 translate-x-0"
            style={{ transitionDelay: '0.4s' }}
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[rgb(26,157,39)] to-[rgb(18,132,27)] rounded-2xl opacity-20 blur-xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/reciclatechbrasil%2FQuem%20somos.jpeg"
                alt="Equipe Reciclatech - Reciclagem de Eletroeletrônicos"
                className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[rgb(26,157,39)] rounded-full animate-pulse"></div>
                  <p className="text-sm sm:text-base font-semibold text-[rgb(53,64,66)]">
                    Comprometidos com a Sustentabilidade
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[rgb(26,157,39)]/10 rounded-full flex items-center justify-center">
                  <Award className="lucide lucide-award w-6 h-6 text-[rgb(26,157,39)]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[rgb(53,64,66)]">12+</p>
                  <p className="text-sm text-[rgb(64,77,79)]">Anos de Atuação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 transition-all duration-1000 opacity-100 translate-y-0"
          style={{ transitionDelay: '0.6s' }}
        >
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="group relative bg-white hover:bg-gradient-to-br hover:from-[rgb(26,157,39)]/5 hover:to-[rgb(18,132,27)]/5 border border-gray-200 hover:border-[rgb(26,157,39)]/30 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[rgb(26,157,39)]/10 group-hover:bg-[rgb(26,157,39)]/20 rounded-full mb-4 transition-all duration-300">
                  <Icon
                    className={`lucide lucide-${s.slug} w-7 h-7 text-[rgb(26,157,39)]`}
                  />
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-[rgb(53,64,66)] mb-1">{s.value}</p>
                <p className="text-sm sm:text-base text-[rgb(64,77,79)]">{s.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

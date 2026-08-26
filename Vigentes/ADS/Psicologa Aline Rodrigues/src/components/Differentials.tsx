import { Video, Users, ArrowRight } from 'lucide-react';

export default function Differentials() {
  return (
    <section id="services-new" className="py-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-beige-dark mb-4">
            O que ofereço
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main">
            Serviços
          </h2>
        </div>

        {/* Grid de 2 Colunas */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* CAIXA 1: Atendimento Online */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-t-8 border-brown-dark hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col">
            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-brown-dark/10 rounded-full">
              <Video className="w-7 h-7 text-brown-dark" />
            </div>

            <h3 className="text-3xl font-bold text-text-main mb-6">
              Atendimento online
            </h3>

            <div className="text-beige-dark space-y-4 flex-grow text-lg leading-relaxed">
              <p className="font-semibold text-text-main">
                Sessões online para adultos:
              </p>
              <p>
                Tratamento para diversos transtornos como: ansiedade, depressão, fobia, TOC, TDAH, entre outros.
              </p>
              <p>
                Tratamento para outras demandas do cotidiano, como: procrastinação, autoestima, problemas no relacionamento, tomadas de decisões, entre outros.
              </p>
            </div>

            <div className="pt-8 mt-auto">
              <a
                href="https://wa.me/556282702366?text=Olá, gostaria de saber mais sobre como funciona a terapia."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-brown-dark text-white px-6 py-4 rounded-lg font-bold hover:shadow-lg transition-all"
              >
                Agendar consulta
              </a>
            </div>
          </div>

          {/* CAIXA 2: Supervisão */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-t-8 border-terracota hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col">
            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-terracota/10 rounded-full">
              <Users className="w-7 h-7 text-terracota" />
            </div>

            <h3 className="text-3xl font-bold text-text-main mb-6">
              Supervisão para psicólogos
            </h3>

            <div className="text-beige-dark space-y-4 flex-grow text-lg leading-relaxed">
              <p>
                Orientação profissional para psicólogos em início de carreira, com foco em:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-terracota font-bold">–</span>
                  Desenvolvimento de prática clínica ética
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terracota font-bold">–</span>
                  Desenvolvimento de competências
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terracota font-bold">–</span>
                  Casos clínicos: formulação de caso, plano de tratamento…
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-auto">
              <a
                href="https://api.whatsapp.com/send?phone=556282702366&text=Oii,+Aline!+Gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+a+supervis%C3%A3o+cl%C3%ADnica+para+Psic%C3%B3logos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full border-2 border-terracota text-terracota px-6 py-4 rounded-lg font-bold hover:bg-terracota hover:text-white transition-all group"
              >
                Saiba mais
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Definição de Cores Locais para garantir o estilo */}
      <style>{`
        :root {
          --color-brown-dark: #6B4E3D;
          --color-terracota: #C4A896;
        }
      `}</style>
    </section>
  );
}
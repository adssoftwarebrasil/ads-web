import { Loader2, Gamepad2, Video } from 'lucide-react';

interface Problem {
  Icon: typeof Loader2;
  title: string;
  text: string;
}

const problems: Problem[] = [
  {
    Icon: Loader2,
    title: 'Filmes e Séries Travando?',
    text: 'Com a nossa fibra óptica, você assiste a tudo em 4K sem interrupções.',
  },
  {
    Icon: Gamepad2,
    title: 'Lag Atrapalha seu Jogo?',
    text: 'Tenha a menor latência e a estabilidade que você precisa para vencer.',
  },
  {
    Icon: Video,
    title: 'Home Office Impossível?',
    text: 'Faça videochamadas e envie arquivos pesados com velocidade máxima.',
  },
];

export default function Problems() {
  return (
    <section id="problems">
      <section id="problemas" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Sua Internet Atual Te Deixa na Mão?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((p) => {
              const { Icon } = p;
              return (
                <div
                  key={p.title}
                  className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="w-20 h-20 bg-[#FA6F2C] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-[#FA6F2C]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{p.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{p.text}</p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-xl text-gray-700 mt-16 font-medium">
            Na Youconnect, a melhor tecnologia está a serviço da sua rotina.
          </p>
        </div>
      </section>
    </section>
  );
}

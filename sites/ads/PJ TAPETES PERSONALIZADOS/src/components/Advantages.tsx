import { CheckCircle } from 'lucide-react';

const advantages = [
  {
    title: 'Personalização Total',
    text: 'Criamos tapetes exclusivos conforme suas especificações, cores, tamanhos e designs únicos.',
  },
  {
    title: 'Qualidade Garantida',
    text: 'Utilizamos apenas materiais premium com garantia de durabilidade e acabamento impecável.',
  },
  {
    title: 'Entrega Rápida',
    text: 'Processo de produção otimizado que garante entrega no prazo sem comprometer a qualidade.',
  },
  {
    title: 'Atendimento Especializado',
    text: 'Equipe experiente pronta para orientar na escolha perfeita para cada ambiente e necessidade.',
  },
];

export default function Advantages() {
  return (
    <section id="vantagens" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[rgb(183,40,26)] text-center mb-16">
          Vantagens de Escolher Nossos Tapetes
        </h2>
        <div className="grid md:grid-cols-5 gap-8 items-center max-w-6xl mx-auto">
          <div className="md:col-span-2">
            <img
              src="https://storage.lucasmendes.dev/site-sp/pjtapete%2FVantagens.jpg"
              alt="Vantagens PJ Tapetes"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
          <div className="md:col-span-3 space-y-6">
            {advantages.map((adv) => (
              <div key={adv.title} className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle
                    className="lucide lucide-check-circle text-[rgb(183,40,26)]"
                    width={28}
                    height={28}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[rgb(15,15,13)] mb-2">
                    {adv.title}
                  </h3>
                  <p className="text-[rgb(15,15,13)] opacity-70 leading-relaxed">
                    {adv.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

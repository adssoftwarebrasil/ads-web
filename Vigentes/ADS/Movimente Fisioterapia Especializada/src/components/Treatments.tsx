import Reveal from './Reveal';

interface TreatmentGroup {
  title: string;
  cardBg: string;
  badgeBg: string;
  dot: string;
  items: string[];
  delay: string;
}

const groups: TreatmentGroup[] = [
  {
    title: 'Coluna Vertebral',
    cardBg: 'linear-gradient(135deg, rgb(253, 240, 241), rgb(255, 255, 255))',
    badgeBg: 'linear-gradient(135deg, rgb(219, 67, 43), rgb(181, 51, 28))',
    dot: 'rgb(219, 67, 43)',
    delay: '0ms',
    items: [
      'Dor nas Costas / Lombalgia',
      'Hérnia de Disco',
      'Lombociatalgia / Ciática',
      'Degeneração Discal',
      'Dor no Pescoço / Cervicalgia',
      'Cervicobraquialgia',
    ],
  },
  {
    title: 'Membros Inferiores',
    cardBg: 'linear-gradient(135deg, rgb(245, 240, 255), rgb(255, 255, 255))',
    badgeBg: 'linear-gradient(135deg, rgb(62, 48, 123), rgb(74, 15, 214))',
    dot: 'rgb(62, 48, 123)',
    delay: '150ms',
    items: [
      'Dor no Joelho',
      'Pós-operatório de Prótese de Joelho',
      'Esporão de Calcâneo',
      'Fascite Plantar / Dor no Pé',
      'Entorse de Tornozelo',
      'Fratura de Quadril',
    ],
  },
  {
    title: 'Membros Superiores & Outros',
    cardBg: 'linear-gradient(135deg, rgb(253, 240, 241), rgb(255, 255, 255))',
    badgeBg: 'linear-gradient(135deg, rgb(219, 67, 43), rgb(181, 51, 28))',
    dot: 'rgb(219, 67, 43)',
    delay: '300ms',
    items: [
      'Dor no Ombro / Calcificação',
      'Pós-op de Ombro / Coluna',
      'Formigamento nas Mãos e Pés',
      'Bruxismo / Disfunção da ATM',
      'Fisioterapia Respiratória',
      'Postura e Fortalecimento',
    ],
  },
];

export default function Treatments() {
  return (
    <section id="tratamentos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 bg-brand-primary/10 text-brand-primary">
            Tratamos sua Condição
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark mb-4">
            Está com{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, rgb(62, 48, 123), rgb(219, 67, 43)) text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Dor?
            </span>{' '}
            Temos a Solução
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Nossos especialistas estão preparados para tratar as condições mais comuns que afetam sua mobilidade e
            qualidade de vida.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {groups.map((group) => (
            <Reveal key={group.title} delay={group.delay}>
              <div className="rounded-2xl p-6 h-full border border-gray-100" style={{ background: group.cardBg }}>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold text-white mb-5"
                  style={{ background: group.badgeBg }}
                >
                  {group.title}
                </div>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: group.dot }}
                      ></span>
                      <span className="text-sm text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <div
          className="mt-12 rounded-3xl p-8 sm:p-10 text-center"
          style={{ background: 'linear-gradient(135deg, rgb(62, 48, 123) 0%, rgb(219, 67, 43) 100%)' }}
        >
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">Não encontrou sua condição?</h3>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            Entre em contato conosco. Nossa equipe está pronta para avaliar seu caso e indicar o melhor tratamento para
            você.
          </p>
          <a
            href="https://wa.me/556699102233?text=Ol%C3%A1!%20Preciso%20de%20uma%20avalia%C3%A7%C3%A3o.%20Gostaria%20de%20marcar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold bg-white text-brand-primary hover:bg-brand-pink transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Falar com um Especialista
          </a>
        </div>
      </div>
    </section>
  );
}

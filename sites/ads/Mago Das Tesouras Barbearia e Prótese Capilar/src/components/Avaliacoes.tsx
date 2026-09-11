import { Star, Quote } from 'lucide-react';
import { GoogleIcon, WhatsAppIcon } from './Icons';

const avaliacoes = [
  {
    initials: 'LS',
    avatarClass: 'bg-[rgb(254,197,52)] text-[rgb(32,29,30)]',
    name: 'Lucca S.',
    time: 'um mês atrás',
    text: '"Cortei com eles por cerca de 1 ano inteiro, especialmente com o profissional Marcos. Acredito que seja a barbearia onde oferece a maior qualidade de serviço e atendimento dentre todas que frequentei, não só em Uberlândia mas também nas outras 4 cidades que morei. Recomendo muito pra quem quer um serviço de qualidade, agradável e minucioso."',
  },
  {
    initials: 'VC',
    avatarClass: 'bg-[rgb(245,133,79)] text-white',
    name: 'Veridiana dos S. Cavalcante',
    time: '5 meses atrás',
    text: '"Meu agradecimento ao espaço, e em especial ao Flávio Augusto! Profissional capacitado, atencioso, cuidadoso, acolhedor e muito competente. O agendamento foi fácil, com atendimento de qualidade e pontualidade exemplar. O espaço é lindo, acolhedor, com profissionais de alto nível, e as crianças amaram. Estou super agradecida e satisfeita — com certeza a primeira de muitas vezes aqui!"',
  },
  {
    initials: 'JB',
    avatarClass: 'bg-[rgb(32,29,30)] text-[rgb(254,197,52)]',
    name: 'Junio Beraldo',
    time: 'um mês atrás',
    text: '"Além de ter bons profissionais e agenda flexível, o ambiente é climatizado e organizado. Excelente experiência do início ao fim. Recomendo a todos que buscam qualidade e conforto."',
  },
];

export default function Avaliacoes() {
  return (
    <section id="avaliacoes" className="py-24 bg-[rgb(32,29,30)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[rgb(245,133,79)] font-semibold uppercase tracking-widest text-sm mb-3">
            Opinião dos clientes
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-[rgb(247,246,247)] leading-tight mb-4">
            Quem Veio, Voltou
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="lucide lucide-star text-[rgb(254,197,52)]"
                  width={20}
                  height={20}
                  fill="rgb(254,197,52)"
                />
              ))}
            </div>
            <span className="font-display text-3xl font-black text-[rgb(254,197,52)]">4.8</span>
            <span className="text-white/40 text-sm">no Google</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {avaliacoes.map((a) => (
            <div
              key={a.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col gap-5 hover:bg-white/8 transition-colors duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${a.avatarClass}`}
                  >
                    {a.initials}
                  </div>
                  <div>
                    <p className="text-[rgb(247,246,247)] font-semibold text-sm">{a.name}</p>
                    <p className="text-white/40 text-xs mt-0.5">{a.time}</p>
                  </div>
                </div>
                <Quote
                  className="lucide lucide-quote text-[rgb(254,197,52)]/40 flex-shrink-0"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="lucide lucide-star text-[rgb(254,197,52)]"
                    width={14}
                    height={14}
                    fill="rgb(254,197,52)"
                  />
                ))}
              </div>
              <p className="text-white/65 text-sm leading-relaxed flex-1">{a.text}</p>
              <div className="flex items-center gap-1.5 pt-1 border-t border-white/10">
                <GoogleIcon className="w-4 h-4" />
                <span className="text-white/30 text-xs">Avaliação no Google</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gradient-to-r from-[rgb(254,197,52)]/10 via-[rgb(254,197,52)]/5 to-[rgb(245,133,79)]/10 border border-[rgb(254,197,52)]/20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className="flex-1">
            <h3 className="font-display text-3xl font-black text-[rgb(247,246,247)] mb-2">
              Pronto para sua transformação?
            </h3>
            <p className="text-white/55">
              Junte-se aos centenas de clientes que já confiaram em nós. Agende agora mesmo pelo
              WhatsApp.
            </p>
          </div>
          <a
            href="http://wa.me/553488238723"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-3 bg-[rgb(254,197,52)] text-[rgb(32,29,30)] font-bold px-8 py-4 rounded-full hover:bg-[rgb(245,133,79)] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[rgb(254,197,52)]/20 hover:scale-105"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current flex-shrink-0" />
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

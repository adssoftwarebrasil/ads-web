import { ShieldCheck, Award, Handshake, MapPin } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_DEFAULT_MSG } from '../constants';

const features = [
  {
    icon: <ShieldCheck size={22} />,
    title: 'Procedência Verificada',
    desc: 'Cada moto passa por rigorosa inspeção antes de ser disponibilizada para venda.',
  },
  {
    icon: <Award size={22} />,
    title: 'Mais de 10 Anos no Mercado',
    desc: 'Uma trajetória sólida construída sobre a satisfação real dos nossos clientes.',
  },
  {
    icon: <Handshake size={22} />,
    title: 'Negociação Transparente',
    desc: 'Sem letras miúdas. Você sabe exatamente o que está comprando e em que condições.',
  },
  {
    icon: <MapPin size={22} />,
    title: 'Atendemos Toda a Região',
    desc: 'Sinop e todas as cidades vizinhas. Facilitamos para que você saia de moto nova.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[rgb(219,55,51)] text-xs font-bold uppercase tracking-widest">
              Nossa História
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-black mt-3 mb-6 leading-tight">
              Uma década de confiança
              <br />
              <span className="text-[rgb(93,92,97)]">em Sinop e região.</span>
            </h2>
            <div className="space-y-4 text-[rgb(93,92,97)] text-base leading-relaxed">
              <p>
                Desde 2014 a <strong className="text-black">Herivan Motos</strong> constrói uma trajetória baseada
                em confiança, transparência e compromisso genuíno com cada cliente. Ao longo desses anos, nos
                tornamos referência em Sinop e em toda a região na comercialização de motos novas e seminovas.
              </p>
              <p>
                Sabemos que comprar uma moto é uma decisão importante — e é por isso que tratamos cada negociação
                com seriedade, clareza e respeito. Aqui você não encontrará promessas vazias: apenas motos de
                qualidade, com procedência verificada e condições reais de pagamento.
              </p>
              <p>
                Seja você quem usa a moto para trabalhar, para o dia a dia ou por paixão, temos o modelo certo
                para o seu perfil e para o seu bolso.
              </p>
            </div>
            <a
              href={`${WHATSAPP_LINK}?text=${WHATSAPP_DEFAULT_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-black text-white px-7 py-3.5 rounded font-bold uppercase tracking-wider text-sm hover:bg-[rgb(219,55,51)] transition-colors duration-200"
            >
              Falar com um Especialista
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-[rgb(187,189,191)]/10 border border-[rgb(187,189,191)]/30 rounded-xl p-6 hover:border-[rgb(219,55,51)] hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-[rgb(219,55,51)] mb-3 group-hover:scale-110 transition-transform duration-200">
                  {f.icon}
                </div>
                <h3 className="text-black font-bold text-base mb-2">{f.title}</h3>
                <p className="text-[rgb(93,92,97)] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[rgb(187,189,191)]/30 pt-12">
          {[
            { value: '2014', label: 'Fundação da empresa' },
            { value: '+10', label: 'Anos de experiência' },
            { value: '100%', label: 'Motos com procedência' },
            { value: '5★', label: 'Avaliação dos clientes' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[rgb(219,55,51)]">{s.value}</div>
              <div className="text-[rgb(93,92,97)] text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

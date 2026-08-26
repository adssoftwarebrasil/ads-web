import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Mais de 50 anos de tradição e confiança em Uberaba',
  'Atendimento 24h, todos os dias do ano',
  'Serviços para associados e não associados',
  'Do serviço simples ao cerimônias de alto padrão',
  'Sede própria com estacionamento para sua comodidade',
  'Equipe treinada para acolher com empatia e respeito',
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-[rgb(29,29,29)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
              <img
                src="https://storage.lucasmendes.dev/site-sp/funeraria-uberaba/img/fachada-funeraria-uberaba-dia-ensolarado_960x1280.webp"
                alt="Fachada Funerária Uberaba"
                className="rounded-2xl object-cover w-full h-64 sm:h-[26rem] sm:col-span-3 ring-1 ring-[rgb(247,246,249)]/10"
              />
              <img
                src="https://storage.lucasmendes.dev/site-sp/funeraria-uberaba/img/patio-externo-cadeiras-plantas-torres_1280x960.webp"
                alt="Pátio externo"
                className="rounded-2xl object-cover w-full h-48 sm:h-[26rem] sm:col-span-2 ring-1 ring-[rgb(247,246,249)]/10"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[rgb(249,240,69)] text-[rgb(29,29,29)] rounded-2xl px-6 py-4 shadow-xl">
              <p className="text-3xl font-bold leading-none">+50</p>
              <p className="text-xs font-semibold mt-1">Anos de Tradição</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[rgb(65,150,229)] mb-3">
              Nossa história
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[rgb(247,246,249)] mb-5 leading-tight">
              Referência em Serviços Fúnebres{' '}
              <span className="text-[rgb(249,240,69)]">em Uberaba</span>
            </h2>
            <p className="text-[rgb(247,246,249)]/65 text-base leading-relaxed mb-6">
              A Funerária Uberaba atua há mais de 50 anos oferecendo serviços fúnebres completos com
              atendimento humanizado, respeitoso e acolhedor em todos os momentos. Atendemos tanto
              associados quanto clientes sem plano, com diversas opções que vão desde serviços mais
              simples até cerimônias de alto padrão.
            </p>
            <p className="text-[rgb(247,246,249)]/65 text-base leading-relaxed mb-8">
              Contamos com sede própria em Uberaba, com estacionamento para maior comodidade, além de
              uma equipe preparada para atendimento 24 horas por dia, 7 dias por semana. Nosso
              compromisso é oferecer suporte completo às famílias com dignidade, cuidado e respeito
              em cada detalhe.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-[rgb(249,240,69)] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-[rgb(247,246,249)]/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="http://wa.me/553498615889"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[rgb(249,240,69)] text-[rgb(29,29,29)] font-bold px-7 py-3.5 rounded-full hover:bg-[rgb(65,150,229)] hover:text-white transition-all duration-200"
            >
              Solicitar Atendimento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

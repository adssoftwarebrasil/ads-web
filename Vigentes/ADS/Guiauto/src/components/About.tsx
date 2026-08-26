import { Award, Heart, TrendingUp, Target, Eye, ShieldCheck } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const badges = [
  { Icon: Award, color: 'text-[#D7282A]', label: 'Qualidade' },
  { Icon: Heart, color: 'text-[#2BA2CC]', label: 'Tradição' },
  { Icon: TrendingUp, color: 'text-[#D7282A]', label: 'Excelência' },
];

const pillars = [
  {
    Icon: Target,
    border: 'border-[#D7282A]',
    color: 'text-[#D7282A]',
    title: 'Missão',
    text: 'Prestação de serviços em mecânica e reboque com foco na excelência, respeito e compromisso sócio-ambiental.',
    textClass: 'text-gray-600',
  },
  {
    Icon: Eye,
    border: 'border-[#2BA2CC]',
    color: 'text-[#2BA2CC]',
    title: 'Visão',
    text: 'Ser líder em serviços de reboque em Sobral e referência em mecânica, funilaria e pintura em geral.',
    textClass: 'text-gray-600',
  },
  {
    Icon: ShieldCheck,
    border: 'border-[#00335F]',
    color: 'text-[#00335F]',
    title: 'Valores',
    text: 'Ética, Transparência, Competência, Responsabilidade Social, Eficácia e Tradição.',
    textClass: 'text-sm text-gray-600 leading-relaxed',
  },
];

const timeline = [
  { year: '1980', title: 'O Início', text: 'A GUIAUTO inicia como uma pequena oficina no quintal do Sr. José de Oliveira Aguiar.' },
  { year: '1983', title: 'Sociedade', text: 'Registro oficial como GUIAUTO SERVIÇOS E PEÇAS LTDA, sob gestão de Sávio e Dilce Aguiar.' },
  { year: '2002', title: 'Expansão', text: 'Inauguração da GRANREB em Umirim-CE, focada em assistência e reboque 24h.' },
  { year: '2020', title: 'Consolidação', text: 'Grupo consolidado com unidades em Sobral (Guiauto), Umirim (Granreb) e Marco (Relpi).' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-[#D7282A] font-bold text-sm uppercase tracking-wider border-b-2 border-[#D7282A] pb-2">
                Quem Somos
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00335F] leading-tight">
              Guiauto Serviços e Peças Ltda
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Com mais de 44 anos de história, a Guiauto evoluiu de uma oficina familiar para um grupo empresarial
              referência no Ceará. Nossa trajetória é marcada pela passagem de pai para filho, hoje sob gestão do Sr.
              Sávio Santos Aguiar, mantendo a essência da confiança e a busca constante pela inovação tecnológica.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6">
              {badges.map((b) => (
                <div key={b.label} className="text-center p-4 bg-white rounded-xl shadow-md">
                  <b.Icon className={`w-8 h-8 ${b.color} mx-auto mb-2`} />
                  <p className="text-sm font-semibold text-[#00335F]">{b.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/guiautos/Tecnologia%20Avanc%CC%A7ada.webp"
                alt="Oficina Guiauto"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00335F]/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#D7282A] text-white p-8 rounded-3xl shadow-2xl">
              <p className="text-4xl font-bold">44+</p>
              <p className="text-sm font-semibold">Anos de História</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pillars.map((p) => (
            <div key={p.title} className={`bg-white p-8 rounded-2xl shadow-sm border-t-4 ${p.border}`}>
              <p.Icon className={`w-10 h-10 ${p.color} mb-4`} />
              <h3 className="text-xl font-bold text-[#00335F] mb-3">{p.title}</h3>
              <p className={p.textClass}>{p.text}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-[#00335F] text-center mb-10">Nossa Trajetória</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((t) => (
              <div key={t.year} className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                <span className="text-[#D7282A] font-black text-2xl block mb-2">{t.year}</span>
                <h4 className="font-bold text-[#00335F] mb-2">{t.title}</h4>
                <p className="text-sm text-gray-600">{t.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#D7282A] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#b82228] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Fale com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}

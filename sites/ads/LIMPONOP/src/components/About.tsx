import { Award, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import { WHATSAPP } from '../data';

const highlights = [
  { Icon: Award, color: 'text-brand-pink', text: 'Representante autorizado MM Química' },
  { Icon: TrendingUp, color: 'text-brand-blue', text: 'MM Química presente em 7 estados do Brasil' },
  { Icon: Users, color: 'text-brand-pink', text: 'Atendimento a empresas e consumidores domésticos' },
  { Icon: CheckCircle2, color: 'text-brand-blue', text: 'Produtos para áreas específicas e profissionais' },
];

const stats = [
  { value: '2020', label: 'Fundação' },
  { value: '6+', label: 'Anos de exp.' },
  { value: '15+', label: 'Anos MM Química' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Nossa História
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight mb-5">
              Nascemos para transformar a forma como você cuida da{' '}
              <span className="text-brand-pink">sua limpeza</span>
            </h2>
            <p className="text-brand-gray leading-relaxed mb-5">
              A <strong className="text-brand-dark">Limponop Soluções em Limpeza</strong> iniciou
              suas atividades em Sinop, Mato Grosso, no ano de 2020 — trazendo consigo mais de 6 anos
              de experiência e um sólido relacionamento no setor de limpeza e higiene.
            </p>
            <p className="text-brand-gray leading-relaxed mb-8">
              Somos representantes autorizados da{' '}
              <strong className="text-brand-dark">MM Química</strong>, indústria com mais de 15 anos
              de atuação e presença em 7 estados brasileiros. Isso garante ao nosso cliente acesso a
              produtos de qualidade comprovada, com a praticidade de uma empresa local, próxima e
              comprometida.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map(({ Icon, color, text }) => (
                <div
                  key={text}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <Icon width={20} height={20} className={`mt-0.5 flex-shrink-0 ${color}`} />
                  <span className="text-sm text-brand-dark font-medium leading-snug">{text}</span>
                </div>
              ))}
            </div>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-pink text-white px-7 py-3.5 rounded-full font-bold hover:bg-pink-600 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Fale com nossa equipe
            </a>
          </div>
          <div className="order-1 lg:order-2 flex flex-col items-center gap-8">
            <div className="relative w-full max-w-sm mx-auto">
              <div className="absolute -inset-4 rounded-3xl gradient-pink-blue opacity-20 blur-xl"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl flex items-center justify-center border border-gray-100">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/limponop/img/logo-sem-fundo.webp"
                  alt="Limponop"
                  className="w-64 h-64 object-contain animate-float"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="text-center p-4 rounded-2xl bg-gray-50 border border-gray-100"
                >
                  <p className="text-2xl font-extrabold text-brand-pink">{s.value}</p>
                  <p className="text-xs text-brand-gray mt-1 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

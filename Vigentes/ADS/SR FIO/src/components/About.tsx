import { CheckCircle } from 'lucide-react';

const highlights = [
  'Pós-graduação em Tricologia e Cosmetologia pelo Claretiano',
  'Especialização pela ABT — Academia Brasileira de Tricologia',
  'Interpretação de exames laboratoriais',
  'Atendimento personalizado com ética e transparência',
  'Sem promessas de resultados milagrosos — apenas ciência e dedicação',
  'Experiência própria com tratamento capilar e alopecia',
];

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/sr-fio/mulher-terapeuta-silvia-ruivo-bracos-cruzados_720x875.webp"
                alt="Silvia Ruivo — Terapeuta Capilar"
                className="w-full h-[500px] md:h-[600px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-slate-dark/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-heading text-white text-xl">Silvia Ruivo</p>
                <p className="font-body text-brand-gold text-sm mt-1">
                  Terapeuta Capilar — Especialista em Tricologia
                </p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 gold-gradient rounded-2xl opacity-20 -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-brand-slate/10 rounded-full -z-10"></div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-brand-gold font-body text-sm font-semibold tracking-[0.2em] uppercase">
              Nossa História
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-brand-slate-dark mt-3 mb-6 leading-tight">
              Uma jornada pessoal que <span className="italic text-brand-gold">transformou vidas</span>
            </h2>
            <div className="font-body text-gray-500 text-base leading-relaxed space-y-4 mb-8">
              <p>
                Após se aposentar como Delegada de Polícia, Silvia Ruivo enfrentou queda capilar decorrente
                de cirurgia bariátrica, enquanto seu marido lidava com alopecia. Foi nessa busca por
                tratamentos eficazes que nasceu a SR FIO.
              </p>
              <p>
                Em plena pandemia, em 2020, realizou sua formação em terapia capilar pela ABT e,
                posteriormente, obteve pós-graduação em Tricologia e Cosmetologia pelo Claretiano. A clínica
                foi fundada com um propósito claro: oferecer tratamentos reais, com ética e respeito a cada
                paciente.
              </p>
              <p className="font-medium text-brand-slate-dark">
                Nossa missão é levar saúde capilar de forma ética — sem promessas vazias, apenas resultados
                baseados em ciência e dedicação genuína.
              </p>
            </div>
            <div className="w-14 h-0.5 gold-gradient mb-8"></div>
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-brand-gold mt-0.5 shrink-0" />
                  <span className="font-body text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/5516991998208?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 gold-gradient text-white font-body font-semibold px-8 py-4 rounded-full text-base hover:shadow-xl hover:shadow-brand-gold/30 transition-all duration-300 hover:scale-105"
            >
              Agendar Minha Avaliação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

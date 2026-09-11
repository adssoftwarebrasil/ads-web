import { CalendarDays, Award, Users, CheckCircle2 } from 'lucide-react';

const features = [
  'Mais de 17 anos de experiência em motores',
  'Atendimento personalizado e de confiança',
  'Motores linha leve e pesada',
  'Parceiros especializados para serviços complementares',
  'Formalizada em outubro de 2019',
  'Expansão para retífica de motores em 2024',
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-brand-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-on-scroll-left order-2 lg:order-1 visible">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/retigrilo/img/oficina-mecanica-carros-elevados-reparacao-capo-aberto_1848x4000.webp"
                    alt="Oficina mecânica Retigrilo"
                    className="w-full h-56 sm:h-72 object-cover rounded-2xl shadow-xl"
                  />
                </div>
                <div>
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/retigrilo/img/motor-cinza-pendurado-corrente-oficina-mecanica_1600x1200.webp"
                    alt="Motor sendo preparado"
                    className="w-full h-40 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/retigrilo/img/trator-vermelho-manutencao-oficina-massey-ferguson_899x1599.webp"
                    alt="Manutenção trator"
                    className="w-full h-40 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 hidden sm:flex items-center gap-4 bg-brand-dark rounded-2xl p-5 shadow-xl">
                <div className="text-center">
                  <CalendarDays
                    className="lucide lucide-calendar-days text-primary mx-auto mb-1"
                    width={18}
                    height={18}
                  />
                  <div className="text-brand-white text-xs font-medium">Fundada em</div>
                  <div className="text-primary font-bold text-sm">2019</div>
                </div>
                <div className="text-center">
                  <Award className="lucide lucide-award text-primary mx-auto mb-1" width={18} height={18} />
                  <div className="text-brand-white text-xs font-medium">Experiência</div>
                  <div className="text-primary font-bold text-sm">17+ anos</div>
                </div>
                <div className="text-center">
                  <Users className="lucide lucide-users text-primary mx-auto mb-1" width={18} height={18} />
                  <div className="text-brand-white text-xs font-medium">Avaliação</div>
                  <div className="text-primary font-bold text-sm">⭐ 5.0</div>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-on-scroll-right order-1 lg:order-2 visible">
            <span className="inline-block bg-primary/15 text-secondary font-semibold text-sm px-4 py-1.5 rounded-full mb-5">
              Nossa História
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark leading-tight mb-6">
              A Retigrilo nasceu da
              <span className="block" style={{ color: 'rgb(76, 181, 73)' }}>
                experiência e paixão
              </span>
            </h2>
            <p className="text-brand-slate leading-relaxed mb-5 text-base">
              A Retigrilo nasceu da experiência e dedicação de{' '}
              <strong className="text-brand-dark">Edimar Trevizoli de Barros Souza</strong>, conhecido como{' '}
              <strong className="text-secondary">Grilo</strong> — profissional que atua há mais de 17 anos na
              área de montagem de motores da linha leve à pesada. Ao longo dessa trajetória, conquistou a
              confiança de seus clientes pela qualidade, responsabilidade e conhecimento técnico.
            </p>
            <p className="text-brand-slate leading-relaxed mb-5 text-base">
              Formalizada em <strong className="text-brand-dark">14 de outubro de 2019</strong>, a empresa
              consolidou um trabalho construído com muito esforço e compromisso. Em 2024, a Retigrilo ampliou
              seus serviços, passando a atuar também na área de retífica de motores — oferecendo ainda mais
              soluções completas.
            </p>
            <p className="text-brand-slate leading-relaxed mb-8 text-base">
              Hoje, a Retigrilo trabalha com retífica e montagem de motores linha leve à pesada, suspensão,
              balanceamento, freios e troca de pneus. Quando necessário, conta com parceiros especializados para
              garantir um atendimento completo e eficiente.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-brand-slate">
                  <CheckCircle2
                    className="lucide lucide-check-circle2 text-primary flex-shrink-0 mt-0.5"
                    width={17}
                    height={17}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/5566999585577?text=Olá! Vim pelo site e gostaria de saber mais sobre a Retigrilo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-brand-dark font-bold px-7 py-3.5 rounded-full text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              Fale com o Grilo<span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

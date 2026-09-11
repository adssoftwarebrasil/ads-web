import { Award, Users, Building, CheckCircle } from 'lucide-react';

const features = [
  { Icon: Award, text: 'Advogados especialistas desde 2015' },
  { Icon: Users, text: 'Atendimento exclusivo e personalizado' },
  { Icon: Building, text: 'Atuação em todo o Estado do Amapá' },
  { Icon: CheckCircle, text: 'Advocacia preventiva, consultiva e contenciosa' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-fade-left">
            <div className="relative">
              <div className="absolute -inset-3 bg-brand-gold/10 rounded-2xl -rotate-3"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/silvia%20moreira%2Fimg%2Fadvogadas-juntas-foto.webp"
                  alt="Equipe Silvia Moreira Advogados"
                  className="w-full h-[400px] lg:h-[520px] object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-brand-red text-white rounded-xl p-5 shadow-xl">
                <p className="text-3xl font-bold font-heading">10+</p>
                <p className="text-sm text-white/80">Anos de atuação</p>
              </div>
            </div>
          </div>
          <div className="animate-fade-right">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] gold-gradient"></div>
              <span className="text-brand-gold-dark text-sm font-semibold tracking-[0.15em] uppercase">
                Sobre o Escritório
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Credibilidade, Seriedade e <span className="text-brand-red">Transparência</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              O escritório <strong className="text-gray-800">Silvia Moreira Advogados Associados</strong> foi
              pensado e desenvolvido para atuar na área especializada do serviço público, com abrangência nos
              municípios do Estado do Amapá, atendendo servidores estaduais, federais, pensionistas, além das
              áreas previdenciária e trabalhista.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Fundado pela advogada Silvia Moreira em fevereiro de 2015, o escritório vem construindo uma
              história de credibilidade e excelência em todo o território amapaense. Nossa estrutura é
              inteiramente dedicada a oferecer um atendimento exclusivo e dinâmico, seja por telefone, WhatsApp,
              presencial ou virtual.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map(({ Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center mt-0.5">
                    <Icon className="w-4 h-4 text-brand-gold-dark" />
                  </div>
                  <span className="text-sm text-gray-700 leading-snug">{text}</span>
                </div>
              ))}
            </div>
            <a
              href="http://wa.me/559691327966"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-red text-white font-semibold rounded-lg shadow-lg shadow-brand-red/20 hover:bg-brand-red-dark hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Conheça Nossa Equipe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

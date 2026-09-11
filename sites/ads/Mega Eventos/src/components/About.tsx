import { CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const features = [
  'Casting completo de profissionais competentes e comprometidos',
  'Atendimento personalizado com minimização de custos',
  'Maximização de resultados e alcance de expectativas',
  'Experiência em grandes redes varejistas e marcas nacionais',
  'Cobertura em toda região de Mato Grosso',
  'Planejamento estratégico de ponta a ponta',
];

export default function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal-left">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[rgb(234,50,56)] mb-3">
              Nossa história
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[rgb(53,53,53)] mb-6 leading-tight">
              Quase 30 Anos
              <br />
              <span className="text-[rgb(234,50,56)]">Fazendo História</span>
              <br />
              em Mato Grosso
            </h2>
            <p className="text-[rgb(53,53,53)]/70 text-base sm:text-lg leading-relaxed mb-6">
              Há quase 30 anos no mercado, a{' '}
              <strong className="text-[rgb(53,53,53)]">Mega Eventos</strong> promove, gerencia,
              operacionaliza e desenvolve projetos estratégicos em marketing promocional no estado de
              Mato Grosso.
            </p>
            <p className="text-[rgb(53,53,53)]/70 text-base sm:text-lg leading-relaxed mb-8">
              Atuamos com abordagem, degustação, recepção, panfletagem, positivação, armazenamento e
              manuseio de material de merchandising, logística, contratação de mão de obra e
              terceirização de serviços nos mais diversos segmentos — através de um casting completo de
              colaboradores competentes e comprometidos, alcançando as expectativas dos clientes,
              minimizando custos e maximizando resultados.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2
                    width={18}
                    height={18}
                    className="text-[rgb(234,50,56)] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-[rgb(53,53,53)]/75">{feature}</span>
                </div>
              ))}
            </div>
            <a
              href="http://wa.me/5565996292448"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 bg-[rgb(53,53,53)] hover:bg-[rgb(234,50,56)] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              <WhatsAppIcon />
              Fale com um especialista
            </a>
          </div>
          <div className="reveal-right grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden h-48 sm:h-56">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/banda-musical-comper-uniforme-azul-supermercado_960x1280.webp"
                  alt="Equipe em ação"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-3xl overflow-hidden h-36 sm:h-44">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/mesa-refeicoes-bolo-salgados-evento-cro-mt_1280x720.webp"
                  alt="Evento corporativo"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-3xl overflow-hidden h-36 sm:h-44">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/evento-smartfit-amigo-fit-varzea-grande_736x1280.webp"
                  alt="Evento SmartFit"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-3xl overflow-hidden h-48 sm:h-56">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/pessoas-em-agro-caixa-azul-e-verde_960x1280.webp"
                  alt="Evento agro"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

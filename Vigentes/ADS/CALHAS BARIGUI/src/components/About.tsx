import { CheckCircle2, ArrowRight } from 'lucide-react';

const WA_URL = 'https://api.whatsapp.com/send?phone=5541998468028&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20poderia%20me%20falar%20um%20pouco%20mais%20sobre%20seus%20servi%C3%A7os%3F';

const highlights = [
  'Materiais de primeira linha selecionados com rigor',
  'Equipe técnica altamente capacitada',
  'Tecnologia de ponta e técnicas inovadoras',
  'Atendimento personalizado para cada cliente',
  'Entrega pontual dentro do prazo acordado',
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <img
                src="https://storage.lucasmendes.dev/site-sp/Calhas%20Barigui/fachada-empresa-bariqui-distribuidora-calhas_1280x960.webp"
                alt="Fachada Calhas Barigui"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary rounded-2xl p-6 shadow-xl hidden md:block">
              <p className="font-heading font-black text-4xl text-dark-900">10+</p>
              <p className="font-body text-dark-800 text-sm font-medium mt-1">Anos de<br />experiência</p>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-dark-900 rounded-2xl overflow-hidden hidden md:block">
              <img
                src="https://storage.lucasmendes.dev/site-sp/Calhas%20Barigui/logo.webp"
                alt="Logo Calhas Barigui"
                className="w-full h-full object-contain p-3"
              />
            </div>
          </div>

          <div>
            <span className="inline-block text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-4">
              Quem somos
            </span>
            <h2 className="font-heading font-black text-dark-900 text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
              Calhas Barigui —<br />
              <span className="text-primary">Tradição e</span> Qualidade
            </h2>
            <p className="text-dark-500 font-body text-base leading-relaxed mb-6">
              Na Calhas Barigui, atuamos com dedicação e expertise no fornecimento de calhas e sistemas de drenagem. Fundada há mais de uma década, nossa missão é oferecer soluções que garantam a durabilidade e a eficiência do seu espaço.
            </p>
            <p className="text-dark-500 font-body text-base leading-relaxed mb-8">
              Com uma equipe qualificada, investimos continuamente em tecnologia e inovação, além de priorizar materiais de excelente qualidade, sempre visando a total satisfação dos nossos clientes em Curitiba e Região Metropolitana.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-dark-600 font-body text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-dark-900 font-heading font-bold px-7 py-4 rounded-xl hover:bg-primary-400 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
            >
              Falar Conosco
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

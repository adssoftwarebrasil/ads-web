import { Truck, ShieldCheck, FileText, BadgeCheck, Users, BarChart3 } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const items = [
  {
    Icon: Truck,
    iconClass: 'text-primary-500',
    cardBg: 'bg-primary-50 border-primary-100',
    boxBg: 'bg-primary-50 border-primary-100',
    title: 'Frota 100% Própria',
    text: 'Veículos próprios, licenciados e adequados a cada tipo de resíduo. Controle total da cadeia logística, sem dependência de terceiros.',
    delay: '0ms',
  },
  {
    Icon: ShieldCheck,
    iconClass: 'text-eco-600',
    cardBg: 'bg-eco-50 border-eco-100',
    boxBg: 'bg-eco-50 border-eco-100',
    title: 'Zero Terceirização',
    text: 'Todos os processos são executados internamente — da coleta à destinação final. Isso garante rastreabilidade e segurança em cada etapa.',
    delay: '80ms',
  },
  {
    Icon: FileText,
    iconClass: 'text-accent-600',
    cardBg: 'bg-accent-50 border-accent-100',
    boxBg: 'bg-accent-50 border-accent-100',
    title: 'Documentação e Rastreabilidade',
    text: 'Emitimos toda a documentação legal exigida, comprovando o correto tratamento dos resíduos e blindando sua empresa de passivos ambientais.',
    delay: '160ms',
  },
  {
    Icon: BadgeCheck,
    iconClass: 'text-primary-500',
    cardBg: 'bg-primary-50 border-primary-100',
    boxBg: 'bg-primary-50 border-primary-100',
    title: 'Conformidade Legal Garantida',
    text: 'Seguimos rigorosamente a legislação ambiental vigente. Você pode focar no seu negócio enquanto nós gerenciamos os riscos regulatórios.',
    delay: '240ms',
  },
  {
    Icon: Users,
    iconClass: 'text-eco-600',
    cardBg: 'bg-eco-50 border-eco-100',
    boxBg: 'bg-eco-50 border-eco-100',
    title: 'Contratos Diretos',
    text: 'Trabalhamos com contratos diretos, proporcionando transparência, previsibilidade e uma relação de confiança duradoura com nossos clientes.',
    delay: '320ms',
  },
  {
    Icon: BarChart3,
    iconClass: 'text-accent-600',
    cardBg: 'bg-accent-50 border-accent-100',
    boxBg: 'bg-accent-50 border-accent-100',
    title: 'Gestão in Loco',
    text: 'Nossa equipe atua diretamente na unidade do cliente, integrando-se aos processos internos e entregando relatórios gerenciais completos.',
    delay: '400ms',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <span className="inline-block text-primary-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Por que nos escolher
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Diferenciais que <span className="text-eco-500">Protegem</span> sua Empresa
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Mais do que um fornecedor, somos um parceiro estratégico. Nosso modelo de operação garante que cada resíduo
            seja gerenciado com máxima responsabilidade e eficiência.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ Icon, iconClass, cardBg, boxBg, title, text, delay }) => (
            <div
              key={title}
              className={`${cardBg} border rounded-2xl p-7 card-hover transition-all duration-700 opacity-100 translate-y-0`}
              style={{ transitionDelay: delay }}
            >
              <div
                className={`w-12 h-12 rounded-xl ${boxBg} border flex items-center justify-center mb-5 shadow-sm`}
              >
                <Icon width={24} height={24} className={iconClass} />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 rounded-3xl overflow-hidden relative transition-all duration-700 delay-500 opacity-100 translate-y-0">
          <div className="bg-gradient-to-r from-primary-700 via-primary-500 to-eco-500 p-10 md:p-14">
            <div className="max-w-3xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
                Pronto para garantir a conformidade ambiental da sua empresa?
              </h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Entre em contato agora e descubra como a Goias Eco Ambiental pode simplificar a gestão de resíduos do seu
                negócio com segurança, eficiência e total respaldo legal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="http://wa.me/5562994920239"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:scale-105"
                >
                  <WhatsAppIcon width={18} height={18} />
                  Falar no WhatsApp
                </a>
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200"
                >
                  Enviar mensagem
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

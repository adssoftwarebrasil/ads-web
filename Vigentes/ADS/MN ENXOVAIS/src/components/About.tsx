import { Award, Factory, TrendingUp, Calendar, ShoppingCart, Users } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL } from '../lib/scroll';

const stats = [
  { value: '10+', label: 'Anos de Mercado' },
  { value: '1000+', label: 'Clientes Satisfeitos' },
  { value: '50+', label: 'Produtos Diferentes' },
];

const origins = [
  {
    Icon: Award,
    title: 'Nossa Origem',
    text: 'Fundada em 2013, a MN Enxovais nasceu com o propósito de tornar cada lar mais aconchegante e bonito. Somos especializados em enxoval completo para cama, mesa e banho, oferecendo qualidade e variedade que fazem a diferença no seu dia a dia.',
  },
  {
    Icon: Factory,
    title: 'Fabricação Própria',
    text: 'Trabalhamos com Atacado e Varejo, sendo fabricantes próprios de lençóis, capas de colchão e capas de sofá. Nossa experiência de mais de 10 anos no mercado nos permite oferecer produtos de alta qualidade com preços competitivos.',
  },
  {
    Icon: TrendingUp,
    title: 'Variedade de Produtos',
    text: 'Além da nossa linha de fabricação própria, disponibilizamos uma ampla variedade de produtos como redes, tapetes, toalhas, panos de prato, cortinas, mantas e muito mais!',
  },
];

const features = [
  { Icon: Factory, title: 'Fabricação Própria', text: 'Fabricamos lençóis, capas de colchão e capas de sofá com qualidade garantida' },
  { Icon: Calendar, title: 'Desde 2013', text: 'Mais de 10 anos levando conforto e qualidade para lares brasileiros' },
  { Icon: ShoppingCart, title: 'Atacado e Varejo', text: 'Atendemos empresas e consumidores finais com preços competitivos' },
];

const whyChoose = [
  { Icon: Award, title: 'Qualidade Garantida', text: 'Produtos selecionados e testados' },
  { Icon: ShoppingCart, title: 'Preços Competitivos', text: 'Melhor custo-benefício' },
  { Icon: Users, title: 'Atendimento Dedicado', text: 'Equipe pronta para ajudar' },
  { Icon: TrendingUp, title: 'Ampla Variedade', text: 'Produtos para todas as necessidades' },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[rgba(155,39,40,0.03)] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgba(155,39,40,0.03)] rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="transition-all duration-1000 opacity-100 translate-y-0">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-[rgb(155,39,40)] bg-[rgba(155,39,40,0.1)] px-4 py-2 rounded-full">Conheça Nossa História</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>Tradição em Enxovais</h2>
            <div className="w-24 h-1 bg-[rgb(155,39,40)] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Desde 2013 transformando casas em lares aconchegantes com produtos de qualidade excepcional</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            <div className="relative">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                  <img src="https://storage.lucasmendes.dev/site-sp/mn%2F271178787_1840742152778478_4779711173954073962_n.jpg" alt="MN Enxovais - Produtos de qualidade" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl z-0" style={{ backgroundColor: 'rgb(155, 39, 40)' }}></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl z-0 opacity-20" style={{ backgroundColor: 'rgb(155, 39, 40)' }}></div>
                <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-4 shadow-xl z-20">
                  <div className="flex items-center justify-around">
                    {stats.map((s) => (
                      <div key={s.label} className="text-center">
                        <div className="text-2xl lg:text-3xl font-bold mb-1" style={{ color: 'rgb(155, 39, 40)' }}>{s.value}</div>
                        <div className="text-xs text-gray-600 font-medium">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                {origins.map(({ Icon, title, text }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(155, 39, 40, 0.1)' }}>
                      <Icon size={24} className="text-[rgb(155,39,40)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                      <p className="text-gray-700 leading-relaxed">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-[rgb(155,39,40)] text-white rounded-lg font-semibold hover:bg-[rgb(120,30,31)] transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <WhatsAppIcon className="w-5 h-5" />Solicite um Orçamento
                </a>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {features.map(({ Icon, title, text }) => (
              <div key={title} className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" style={{ backgroundColor: 'rgb(155, 39, 40)' }}></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" style={{ backgroundColor: 'rgb(155, 39, 40)' }}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{text}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ backgroundColor: 'rgb(155, 39, 40)' }}></div>
              </div>
            ))}
          </div>
          <div className="mt-16 lg:mt-20">
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-gray-800" style={{ fontFamily: '"Playfair Display", serif' }}>Por que escolher a MN Enxovais?</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {whyChoose.map(({ Icon, title, text }) => (
                  <div key={title} className="text-center">
                    <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: 'rgba(155, 39, 40, 0.1)' }}>
                      <Icon size={32} className="text-[rgb(155,39,40)]" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
                    <p className="text-sm text-gray-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

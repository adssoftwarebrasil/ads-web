import { Store, Calendar, Building2, Award, Heart, MapPin } from 'lucide-react';

const features = [
  {
    icon: Building2,
    iconWrap: 'bg-blue-100 text-blue-600',
    title: 'Estrutura Completa',
    text: 'Duas unidades amplas em São Leopoldo e Ivoti.',
  },
  {
    icon: Award,
    iconWrap: 'bg-orange-100 text-orange-600',
    title: 'Tradição',
    text: 'Desde 2009 oferecendo qualidade e confiança.',
  },
  {
    icon: Heart,
    iconWrap: 'bg-blue-100 text-blue-600',
    title: 'Amor por Pets',
    text: 'Equipe que trata seu animal como parte da família.',
  },
  {
    icon: MapPin,
    iconWrap: 'bg-orange-100 text-orange-600',
    title: 'Conveniência',
    text: 'Estacionamento fácil e localização acessível.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-orange-50 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#FD7500] font-bold tracking-wider uppercase text-sm">
            Nossa História
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#005098] mt-2 mb-6">
            Sobre a Agropet Imperatriz
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fundada em <span className="font-semibold text-[#005098]">15 de junho de 2009</span>,
            construímos uma trajetória de respeito e carinho, tornando-nos referência em produtos e
            serviços para pets na região.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          <div className="relative group bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-6 right-6 text-gray-100 group-hover:text-orange-50 transition-colors duration-300">
              <Store width={120} height={120} strokeWidth={0.5} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-1 bg-[#FD7500] mb-6 rounded-full"></div>
              <h3 className="text-2xl font-bold text-[#005098] mb-4 flex items-center gap-2">
                Unidade Ivoti
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-justify">
                Localizada em Ivoti, somos especializados no bem-estar dos pets. Nossa estrutura
                conta com um Pet Shop completo, oferecendo desde rações Premium (como Primus e
                Golden) até uma farmácia veterinária abastecida.
              </p>
              <p className="text-gray-600 leading-relaxed text-justify">
                Aqui você encontra tudo em um só lugar, com a garantia de ser atendido por quem
                realmente entende das necessidades específicas do seu animal.
              </p>
            </div>
          </div>
          <div className="relative group bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-6 right-6 text-gray-100 group-hover:text-blue-50 transition-colors duration-300">
              <Calendar width={120} height={120} strokeWidth={0.5} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-1 bg-[#005098] mb-6 rounded-full"></div>
              <h3 className="text-2xl font-bold text-[#005098] mb-4 flex items-center gap-2">
                Unidade São Leopoldo
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-justify">
                Nossa matriz e berço da nossa história. Referência em farmácia veterinária, a
                unidade de São Leopoldo reflete nosso compromisso com a saúde animal através de uma
                linha completa de medicamentos e produtos essenciais.
              </p>
              <p className="text-gray-600 leading-relaxed text-justify">
                Além do foco veterinário, atendemos os amantes da natureza com mudas de hortaliças,
                plantas frutíferas e produtos para jardinagem, promovendo um cultivo sustentável.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100 group"
              >
                <div
                  className={`w-14 h-14 ${f.iconWrap} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon width={28} height={28} />
                </div>
                <h4 className="text-lg font-bold text-[#005098] mb-2">{f.title}</h4>
                <p className="text-sm text-gray-600">{f.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

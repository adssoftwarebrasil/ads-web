import { Shield, Truck, Clock, Award, LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  lucideName: string;
  title: string;
  text: string;
}

const features: Feature[] = [
  {
    icon: Shield,
    lucideName: 'lucide lucide-shield',
    title: 'Revenda Autorizada',
    text: 'Parceria oficial com Nacional Gás, garantindo qualidade e procedência dos produtos.',
  },
  {
    icon: Truck,
    lucideName: 'lucide lucide-truck',
    title: 'Entrega Rápida',
    text: 'Entregadores experientes e atenciosos com horários intensivos nos picos de demanda.',
  },
  {
    icon: Clock,
    lucideName: 'lucide lucide-clock',
    title: 'Aberto 7 Dias',
    text: 'Horário de funcionamento: Segunda a sábado das 07:30 as 21hs e aos domingos das 07:30 as 17:00hs',
  },
  {
    icon: Award,
    lucideName: 'lucide lucide-award',
    title: 'Desde 2019',
    text: 'Anos de experiência atendendo clientes residenciais e comerciais com excelência.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(28,59,126)] mb-4">
            Sobre o Depósito de Gás Moura
          </h2>
          <div className="w-24 h-1 bg-[rgb(228,29,32)] mx-auto mb-6"></div>
          <p className="text-lg text-[rgb(162,173,190)] max-w-3xl mx-auto">
            Referência em qualidade e agilidade desde 2019
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/deposito%20de%20gas%20moura%2Fimg%2Fdeposito-gas-agua.webp"
              alt="Depósito de Gás Moura"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[rgb(28,59,126)] mb-6">
              Compromisso com Excelência
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              O Depósito de Gás Moura atua desde 2019 no segmento de gás GLP, oferecendo produtos de
              qualidade e atendimento especializado. Nossa missão é garantir entrega rápida e segura
              para nossos clientes, mantendo sempre o foco no atendimento de excelência.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Como revenda autorizada pela Nacional Gás, uma empresa séria e de tradição,
              trabalhamos todos os dias da semana, intensificando as entregas nos horários de maior
              demanda com aumento de colaboradores, sempre pensando na comodidade e satisfação dos
              nossos clientes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Localizada no Setor Faiçalville em Goiânia-GO, nos destacamos pela rapidez e eficiência
              no atendimento, sendo referência na distribuição de gás e água mineral na região.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-[rgb(228,29,32)]"
              >
                <div className="bg-[rgb(228,29,32)]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon
                    className={`${f.lucideName} text-[rgb(228,29,32)]`}
                    width={32}
                    height={32}
                  />
                </div>
                <h4 className="text-xl font-bold text-[rgb(28,59,126)] mb-3">{f.title}</h4>
                <p className="text-gray-600">{f.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Heart, Award, Shield } from 'lucide-react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=5511947279099&text&type=phone_number&app_absent=0';

const features = [
  {
    icon: Heart,
    iconBg: 'bg-[#b900ba]/10',
    iconColor: 'text-[#b900ba]',
    title: 'Amor',
    subtitle: 'Por cada pet',
  },
  {
    icon: Award,
    iconBg: 'bg-[#38d060]/10',
    iconColor: 'text-[#38d060]',
    title: 'Experiência',
    subtitle: '15+ anos',
  },
  {
    icon: Shield,
    iconBg: 'bg-[#b900ba]/10',
    iconColor: 'text-[#b900ba]',
    title: 'Segurança',
    subtitle: 'Garantida',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block bg-gradient-to-r from-[#b900ba] to-[#38d060] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Desde 2010
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Animaly Pet Shop
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Desde 2010, a Animaly Pet Shop é reconhecida em Cotia pela
              qualidade em higiene e embelezamento de pets. Localizada no Jardim
              dos Ipês, oferecemos serviços de banho e tosa com profissionais
              experientes, sempre priorizando o bem-estar e a saúde dos animais.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Nosso espaço é aconchegante e seguro, e garantimos que cada
              atendimento seja personalizado. A equipe apaixonada por pets se
              dedica ao máximo para que cada visita seja uma experiência
              agradável para os clientes e seus melhores amigos.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex items-start space-x-3">
                    <div className={`${f.iconBg} p-3 rounded-xl`}>
                      <Icon className={f.iconColor} size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{f.title}</div>
                      <div className="text-sm text-gray-600">{f.subtitle}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#b900ba] to-[#38d060] text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Enviar WhatsApp
            </a>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/animalyp%2FQuem%20somos.jpg"
                alt="Quem somos"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="text-3xl font-bold text-[#b900ba] mb-1">
                  +2.000
                </div>
                <div className="text-gray-600">Pets felizes atendidos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

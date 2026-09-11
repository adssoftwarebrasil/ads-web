import { CheckCircle2, Calendar, Star, Users } from 'lucide-react';

const features = [
  'Atendimento rápido e humanizado',
  'Veículos adequados e bem equipados',
  'Transparência e preço justo',
  'Cobertura em Arcos e toda a região',
  'Disponível 24h, 7 dias por semana',
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="section-reveal">
            <span className="text-brand-blue font-semibold text-sm uppercase tracking-widest">Quem somos</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-6 leading-tight">
              Nascemos para Cuidar do<span className="gradient-text"> Seu Veículo</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              A <strong className="text-gray-900">Transportes SS Moura</strong> nasceu da necessidade de oferecer um
              serviço de reboque e transporte veicular confiável, rápido e disponível 24 horas na cidade de Arcos e
              região.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Fundada em fevereiro de 2023, a empresa cresceu alicerçada na experiência prática e no compromisso de
              atender clientes com agilidade, responsabilidade e total segurança. O objetivo sempre foi claro: cuidar do
              transporte do seu veículo <strong className="text-gray-900">como se fosse nosso</strong>.
            </p>
            <ul className="space-y-3 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2
                    width={20}
                    height={20}
                    strokeWidth={2}
                    className="lucide lucide-check-circle2 text-brand-blue flex-shrink-0"
                  />
                  <span className="text-sm font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm">
                <Calendar
                  width={22}
                  height={22}
                  strokeWidth={1.8}
                  className="lucide lucide-calendar text-brand-blue mx-auto mb-2"
                />
                <span className="block text-2xl font-extrabold text-gray-900 leading-none">2023</span>
                <span className="block text-xs text-gray-500 mt-1 leading-tight">Fundada em fevereiro</span>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm">
                <Star
                  width={22}
                  height={22}
                  strokeWidth={1.8}
                  className="lucide lucide-star text-brand-blue mx-auto mb-2"
                />
                <span className="block text-2xl font-extrabold text-gray-900 leading-none">5.0</span>
                <span className="block text-xs text-gray-500 mt-1 leading-tight">Nota no Google</span>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm">
                <Users
                  width={22}
                  height={22}
                  strokeWidth={1.8}
                  className="lucide lucide-users text-brand-blue mx-auto mb-2"
                />
                <span className="block text-2xl font-extrabold text-gray-900 leading-none">100%</span>
                <span className="block text-xs text-gray-500 mt-1 leading-tight">Clientes satisfeitos</span>
              </div>
            </div>
          </div>
          <div className="relative section-reveal" style={{ transitionDelay: '150ms' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://storage.lucasmendes.dev/site-sp/ss%20moura%20transportes/img/guincho-branco-transportando-carro-preto_1600x1200.webp"
                alt="Guincho SS Moura transportando veículo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-6 py-4 border border-gray-100 max-w-[200px]">
              <div className="flex items-center gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    width={14}
                    height={14}
                    fill="#f59e0b"
                    strokeWidth={2}
                    className="lucide lucide-star text-amber-400"
                  />
                ))}
              </div>
              <p className="text-xs font-semibold text-gray-800">Avaliação média 5.0</p>
              <p className="text-xs text-gray-500">Google Reviews</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-brand-blue rounded-2xl shadow-xl px-5 py-4 text-white">
              <span className="text-3xl font-extrabold block leading-none">24h</span>
              <span className="text-xs font-medium opacity-80">Atendimento</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

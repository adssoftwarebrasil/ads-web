import { CalendarCheck, Award, Users, Clock } from 'lucide-react';

const LOGO_URL = 'https://storage.lucasmendes.dev/site-sp/master%20diagnosticos%20(master%20truck)/img/logo.webp';

const STATS = [
  { icon: CalendarCheck, value: '2019', label: 'Fundada em' },
  { icon: Award, value: '4.8★', label: 'Avaliação Google' },
  { icon: Users, value: '100+', label: 'Clientes Atendidos' },
  { icon: Clock, value: '6+', label: 'Anos de Mercado' },
];

export default function About() {
  return (
    <section id="sobre" className="bg-[#010101] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#F07013] text-sm font-semibold tracking-widest uppercase">Nossa História</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#FFFFFD] mb-6 leading-tight">
              A Referência em Mecatrônica de Caminhões em Rondonópolis
            </h2>
            <p className="text-[#FFFFFD]/60 text-base leading-relaxed mb-5">
              A Master Truck surgiu em 2019 com uma missão clara: oferecer soluções especializadas e de alta qualidade para o setor de transporte e logística. Nascemos da necessidade do mercado por um serviço técnico confiável, ágil e transparente em eletrônica de veículos pesados.
            </p>
            <p className="text-[#FFFFFD]/60 text-base leading-relaxed mb-5">
              Em mais de 6 anos de atuação, conquistamos a confiança de caminhoneiros e empresas de todo o estado do Mato Grosso, tornando-nos referência em reparo de módulos eletrônicos, manutenção do sistema Arla 32, diagnóstico computadorizado e muito mais.
            </p>
            <p className="text-[#FFFFFD]/60 text-base leading-relaxed mb-8">
              Nosso diferencial está na combinação de tecnologia de ponta, equipe altamente capacitada e um atendimento honesto que coloca o cliente no centro de tudo. Seu caminhão é o seu negócio — e nós sabemos disso.
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-[#FFFFFD]/50 text-sm">
                <span className="w-2 h-2 bg-[#F07013] rounded-full" />
                Diagnóstico computadorizado
              </div>
              <div className="flex items-center gap-2 text-[#FFFFFD]/50 text-sm">
                <span className="w-2 h-2 bg-[#F07013] rounded-full" />
                Equipe especializada
              </div>
              <div className="flex items-center gap-2 text-[#FFFFFD]/50 text-sm">
                <span className="w-2 h-2 bg-[#F07013] rounded-full" />
                Atendimento transparente
              </div>
              <div className="flex items-center gap-2 text-[#FFFFFD]/50 text-sm">
                <span className="w-2 h-2 bg-[#F07013] rounded-full" />
                Garantia nos serviços
              </div>
            </div>
          </div>

          <div>
            <div className="relative bg-[#FFFFFD]/[0.03] border border-[#FFFFFD]/10 rounded-2xl p-8 mb-6">
              <img
                src={LOGO_URL}
                alt="Master Truck Mecatrônica"
                className="w-40 mx-auto mb-6 object-contain"
              />
              <p className="text-[#FFFFFD]/50 text-center text-sm italic leading-relaxed">
                "Nosso compromisso com a qualidade, tecnologia avançada e uma equipe capacitada nos torna referência no mercado."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {STATS.map(({ icon: Icon, value, label }) => (
                <div key={label} className="bg-[#FFFFFD]/[0.03] border border-[#FFFFFD]/10 rounded-xl p-5 flex flex-col items-center text-center hover:border-[#F07013]/30 transition-colors duration-200">
                  <Icon size={20} className="text-[#F07013] mb-2" />
                  <span className="text-[#FFFFFD] font-extrabold text-2xl">{value}</span>
                  <span className="text-[#FFFFFD]/40 text-xs mt-1">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

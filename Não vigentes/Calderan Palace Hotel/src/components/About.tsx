import { Check } from 'lucide-react';

const bullets = [
  'Atendimento que faz você se sentir em casa',
  'Mais de duas décadas de excelência em hotelaria',
  'Estrutura moderna e constantemente atualizada',
  'Equipe treinada para atender todas as suas necessidades',
];

export default function About() {
  return (
    <section id="sobre" className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-[1200px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute top-8 -left-8 w-32 h-32 bg-[#F09100] rounded-2xl -z-10 hidden lg:block"></div>
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/calderan-palace%2FQuem%20somos-1-imagemdecima.webp"
                alt="Hotel"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <img
                src="https://storage.lucasmendes.dev/site-sp/calderan-palace%2FQuem%20somos2-imagemdebaixo.webp"
                alt="Interior"
                className="hidden lg:block absolute -right-12 -bottom-16 w-64 h-80 object-cover rounded-2xl border-8 border-white shadow-2xl"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-[#F09100] text-xs uppercase tracking-[2px] font-semibold mb-3">
              TRADIÇÃO E QUALIDADE
            </p>
            <h2 className="text-[#1A1A1A] text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Calderan Palace Hotel
            </h2>
            <div className="space-y-4 text-[#4A4A4A] text-base leading-relaxed mb-6">
              <p>
                Localizado no coração de Jardim, Mato Grosso do Sul, o Calderan Palace Hotel oferece
                hospedagem de alta qualidade desde 1999. Com uma estrutura planejada para atender
                turistas, viajantes a negócios e famílias, destacamo-nos pela excelência no
                atendimento, conforto das acomodações e localização estratégica próxima aos
                atrativos naturais da região.
              </p>
              <p>
                Priorizamos sua experiência disponibilizando Wi-Fi gratuito, café da manhã variado,
                estacionamento seguro e um ambiente acolhedor que garante a melhor estadia possível.
              </p>
            </div>
            <div className="space-y-3 mb-8">
              {bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#F09100]/10 rounded-full flex items-center justify-center mt-0.5">
                    <Check size={16} strokeWidth={3} className="text-[#F09100]" />
                  </div>
                  <p className="text-[#333333] text-sm lg:text-base">{b}</p>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/5567996712871?text=Olá!%20Gostaria%20de%20mais%20informações."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#F09100] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-[#D98200] hover:scale-105 hover:shadow-xl"
            >
              Fale Conosco pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

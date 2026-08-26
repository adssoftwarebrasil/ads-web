import { MessageCircle, Calendar, Award, Ruler, MapPin } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    { icon: Calendar, text: 'Fundada em 2025' },
    { icon: Award, text: 'Evolução da Uber Espumas' },
    { icon: Award, text: 'Marcas Premium: Ortobom e Luckspuma' },
    { icon: Ruler, text: 'Produtos Sob Medida' },
  ];

  const stats = [
    { value: '+10', label: 'Anos de Experiência' },
    { value: '+1.000', label: 'Clientes Satisfeitos' },
    { value: '+5', label: 'Marcas de Destaque' },
    { value: '+200', label: 'Produtos Disponíveis' },
  ];

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-accent-offwhite relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q 25 30, 50 50 T 100 50" fill="none" stroke="#020C7B" strokeWidth="2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=udicolch%C3%B5es%2FWhatsApp%20Image%202025-11-17%20at%2014.02.30.jpeg&version_id=null"
                alt="UDI Colchões Showroom"
                className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
                loading="lazy"
              />
            </div>
            <div className="col-span-2">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=udicolch%C3%B5es%2FWhatsApp%20Image%202025-11-17%20at%2014.02.31%20(2).jpeg&version_id=null"
                alt="Variedade de Colchões"
                className="w-full h-[280px] object-cover rounded-3xl shadow-xl"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-primary-vibrant text-lg font-bold uppercase tracking-wider mb-2">
                Quem Somos
              </h3>
              <h2 className="text-4xl lg:text-5xl font-black text-primary mb-6">
                UDI Colchões
              </h2>
            </div>

            <div className="space-y-4 text-primary-medium leading-relaxed">
              <p className="text-lg">
                A Udi Colchões nasceu com a missão de oferecer qualidade de vida através de boas
                noites de sono. Fundada em 2025 em Uberlândia, nossa loja é a evolução da Uber
                Espumas, unindo vasta experiência e atendimento personalizado para seus clientes.
              </p>
              <p className="text-lg">
                Trabalhamos com as principais marcas do setor, como Ortobom e Luckspuma,
                disponibilizando colchões de espuma, de molas, camas box e produtos sob medida. Com
                um showroom amplo, garantimos variedade e a melhor experiência na escolha do seu
                colchão.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 py-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-accent-pastel"
                  >
                    <Icon size={18} className="text-primary-vibrant" />
                    <span className="text-sm font-semibold text-primary">{item.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="pt-6 space-y-4">
              <a
                href="https://wa.me/5534996610265"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white text-lg font-bold rounded-xl hover:bg-[#20ba59] transition-all hover:scale-105 shadow-xl"
              >
                <MessageCircle size={24} />
                WhatsApp: (34) 99661-0265
              </a>
              <p className="flex items-start gap-2 text-primary-medium">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                Pagamento em até 12x sem juros para sua conveniência
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-12 border-t border-accent-soft">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm lg:text-base text-primary-medium font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

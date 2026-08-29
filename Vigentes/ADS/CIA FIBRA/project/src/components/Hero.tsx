import { Truck, CreditCard, ShieldCheck } from 'lucide-react';

const Hero = () => {
  const benefits = [
    { icon: Truck, text: 'Entrega Rápida' },
    { icon: CreditCard, text: 'Pagamento Facilitado' },
    { icon: ShieldCheck, text: 'Qualidade Garantida' },
  ];

  return (
    <>
      <section id="inicio" className="relative bg-[#DCDCDC] pt-20 pb-0 min-h-[600px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-end">
            <div className="order-2 lg:order-1 -mb-1">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=ciafibra%2Flogo-hero%2Fciafibra_img3_hero_1_11zon-Photoroom.png&version_id=null"
                alt="Equipe Cia Fibra"
                className="w-full h-auto object-cover block leading-[0]"
                loading="eager"
                fetchpriority="high"
                width="2000"
                height="1823"
                
              />
            </div>

            <div className="order-1 lg:order-2 px-6 sm:px-10 lg:px-16 py-8 sm:py-12 lg:py-16 lg:pb-24">
              <h1 className="text-[36px] sm:text-[44px] lg:text-[54px] xl:text-[60px] leading-[1.15] font-bold text-[#012E60] mb-6">
                Uniformes que Unem{' '}
                <span className="text-[#D7B46A]">Padronização</span> e Excelência
              </h1>

              <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-8 max-w-lg">
                Um uniforme bem feito transmite <span className="font-bold text-[#012E60]">profissionalismo, credibilidade e segurança</span> — reforçando a confiança da sua equipe e valorizando a imagem da sua empresa.
              </p>

              <button
                onClick={() => window.open('https://wa.me/5519991007977?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20uniformes%20da%20Cia%20Fibra.', '_blank')}
                className="bg-[#D7B46A] hover:bg-[#c19e56] text-[#012E60] font-bold text-lg px-10 py-3.5 rounded-lg transition-colors duration-300 shadow-lg"
              >
                Mínimo 30 Unidades
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#012E60] py-10 min-h-[120px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
              {benefits.map(({ icon: Icon, text }, i) => (
                <div key={i} className="relative flex items-center justify-center py-6 sm:py-0">
                  {i > 0 && (
                    <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 h-12 w-px bg-[#D7B46A]/30" />
                  )}

                  <div className="flex items-center gap-4">
                    <Icon size={40} className="text-[#D7B46A] flex-shrink-0" strokeWidth={2} />
                    <span className="text-[#D7B46A] font-bold text-xl">
                      {text}
                    </span>
                  </div>

                  {i < benefits.length - 1 && (
                    <div className="sm:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-[#D7B46A]/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

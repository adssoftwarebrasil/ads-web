import { MessageCircle, ArrowRight } from 'lucide-react';

const benefits = [
  'Consulta inicial gratuita',
  'Estratégia personalizada para seu negócio',
  'Atendimento por especialistas certificados',
];

export default function FinalCTA() {
  return (
    <section className="py-20 bg-[#EBFFF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#19355E] to-[#1264C6] rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="p-8 sm:p-12 lg:p-16 text-white">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Pronto para Destacar sua Empresa?</h2>
              <p className="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed">
                Vamos juntos criar estratégias que transformam visibilidade em resultados reais. Entre em contato agora e descubra como podemos impulsionar seu negócio.
              </p>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#33a753] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-gray-100">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/558007800040"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 bg-[#33a753] hover:bg-[#2d9249] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:08007800040"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-white/30"
                >
                  0800-780-0040
                </a>
              </div>
            </div>
            <div className="relative h-full min-h-[400px] lg:min-h-[600px] hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f9bb04]/20 to-[#4286f5]/20"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#f9bb04] rounded-full opacity-30 blur-2xl animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#4286f5] rounded-full opacity-30 blur-2xl animate-pulse delay-700"></div>
                  <img
                    src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=ads-site%2FlogoADS.png&version_id=null"
                    alt="Logo ADS Software"
                    loading="lazy"
                    width="400"
                    height="145"
                    className="relative z-10 max-w-sm w-full drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

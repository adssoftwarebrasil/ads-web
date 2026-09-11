import { MessageCircle, ArrowDown, ShieldCheck, Users, Award } from 'lucide-react';

export default function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#cfa165]/15 via-white to-white pt-24 lg:pt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-[#cfa165] to-[#b88a4d] bg-clip-text text-transparent animate-fadeInUp delay-200">
              Segurança e Expertise em Cada Transação Imobiliária
            </h1>

            <div className="relative aspect-square flex items-center justify-center animate-float lg:hidden">
              <div className="absolute inset-0 bg-gradient-radial from-[#cfa165]/10 via-transparent to-transparent rounded-full blur-3xl"></div>
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=golden-house%2FWhatsApp%20Image%202026-02-03%20at%2023.24.19.jpeg&version_id=null"
                alt="Imóveis de luxo em Salvador"
                className="relative z-10 rounded-3xl shadow-2xl w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#cfa165]/20 to-transparent rounded-3xl"></div>
            </div>

            <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-gray-700 animate-fadeInUp delay-400">
              Atendimento personalizado que transforma sonhos em realidade. Inteligência e expertise cuidando do seu patrimônio com segurança e profissionalismo em todo o Brasil.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp delay-600">
              <a
                href="https://wa.me/557193469993?text=Olá! Gostaria de conhecer os serviços da Golden House 873"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#cfa165] hover:bg-[#b88a4d] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com Especialista
              </a>

              <button
                onClick={scrollToServices}
                className="group border-2 border-[#cfa165] text-[#cfa165] hover:bg-[#cfa165] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
                Nossos Serviços
              </button>
            </div>

            <div className="flex flex-wrap gap-6 items-center opacity-70 animate-fadeInUp delay-800">
              <div className="flex items-center gap-2 text-sm md:text-base text-gray-600">
                <ShieldCheck className="w-5 h-5 text-[#cfa165]" />
                <span>Transações Seguras</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base text-gray-600">
                <Users className="w-5 h-5 text-[#cfa165]" />
                <span>Atendimento Personalizado</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base text-gray-600">
                <Award className="w-5 h-5 text-[#cfa165]" />
                <span>Expertise Comprovada</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-square hidden lg:flex items-center justify-center animate-float">
            <div className="absolute inset-0 bg-gradient-radial from-[#cfa165]/10 via-transparent to-transparent rounded-full blur-3xl"></div>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=golden-house%2FWhatsApp%20Image%202026-02-03%20at%2023.24.19.jpeg&version_id=null"
              alt="Imóveis de luxo em Salvador"
              className="relative z-10 rounded-3xl shadow-2xl w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#cfa165]/20 to-transparent rounded-3xl"></div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 right-10 w-20 h-20 bg-[#cfa165]/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-[#cfa165]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
}

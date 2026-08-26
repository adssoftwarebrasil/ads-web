import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#19355E] via-[#1264C6] to-[#19355E] text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=ads-site%2Fimagemmain.webp&version_id=null"
          alt="Background"
          loading="eager"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#19355E]/70 via-[#1264C6]/60 to-[#19355E]/70"></div>
      </div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Destaque sua Empresa no <span className="text-[#f9bb04]">Google</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-100 font-medium drop-shadow-md">
              Somos a maior empresa da América Latina em impulsionamento digital
            </p>
            <p className="text-base sm:text-lg mb-10 text-gray-200 max-w-2xl mx-auto lg:mx-0 drop-shadow-md">
              8 anos transformando negócios através de estratégias comprovadas em
              Google Ads e Meta Business com resultados reais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/558007800040"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com especialista pelo WhatsApp"
                className="group inline-flex items-center justify-center gap-2 bg-[#33a753] hover:bg-[#2d9249] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Falar com Especialista
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-white/30"
              >
                Nossos Serviços
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block"></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

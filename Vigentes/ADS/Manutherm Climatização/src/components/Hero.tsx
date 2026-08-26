import { MessageSquare } from 'lucide-react';

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

const heroImg =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=manutherm%2Fimgi_45_01-produto.jpg&version_id=null';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-[70px] lg:pt-[80px] bg-gradient-to-br from-[rgba(9,74,104,0.02)] to-[rgba(28,123,179,0.05)] overflow-hidden"
    >
      <div className="absolute top-20 right-10 w-72 h-72 bg-[rgba(28,123,179,0.08)] rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[rgba(9,74,104,0.05)] rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[rgba(28,123,179,0.03)] rounded-full blur-3xl"></div>
      <div className="max-w-[1200px] mx-auto px-5 lg:px-20 py-16 lg:py-0 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <h1 className="text-[32px] lg:text-[52px] font-bold leading-tight mb-8">
              <span className="text-[rgb(9,74,104)]">Soluções Completas em </span>
              <span className="bg-gradient-to-r from-[rgb(9,74,104)] to-[rgb(28,123,179)] bg-clip-text text-transparent">
                Climatização
              </span>
              <span className="text-[rgb(9,74,104)]"> para sua Empresa</span>
            </h1>
            <div className="lg:hidden mb-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[rgb(9,74,104)] to-[rgb(28,123,179)] rounded-2xl opacity-10 blur-xl"></div>
                <div className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={heroImg}
                    alt="Sistemas de climatização Manutherm"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(9,74,104,0.4)] via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
            <p className="text-[18px] lg:text-[22px] text-gray-600 mb-10 leading-relaxed">
              17 anos de expertise em sistemas de climatização de grande porte na Bahia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollToSection('contato')}
                className="bg-gradient-to-r from-[rgb(9,74,104)] to-[rgb(28,123,179)] text-white px-10 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-[rgba(28,123,179,0.3)] transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
              >
                Solicitar Orçamento
              </button>
              <a
                href="https://wa.me/5571999313609"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-[rgb(28,123,179)] text-[rgb(28,123,179)] px-10 py-4 rounded-xl font-semibold hover:bg-[rgb(28,123,179)] hover:text-white transition-all duration-300 hover:-translate-y-1 text-center w-full sm:w-auto flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare
                  width={20}
                  height={20}
                  strokeWidth={2}
                  className="lucide lucide-message-square "
                />
                WhatsApp
              </a>
            </div>
          </div>
          <div className="hidden lg:block animate-fadeInUp">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[rgb(9,74,104)] to-[rgb(28,123,179)] rounded-2xl opacity-10 blur-xl"></div>
              <div className="relative w-full h-[550px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImg}
                  alt="Sistemas de climatização Manutherm"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(9,74,104,0.4)] via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

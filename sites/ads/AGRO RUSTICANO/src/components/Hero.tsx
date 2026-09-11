import { Award, Clock, ArrowRight, MapPin } from 'lucide-react';

const WHATSAPP = 'http://wa.me/551235122848';

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(54,59,27)]/95 via-[rgb(54,59,27)]/85 to-[rgb(54,59,27)]/75"></div>
      </div>
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-[rgb(186,213,51)]/20 backdrop-blur-sm px-4 py-2 rounded-full border border-[rgb(186,213,51)]/30">
              <Award width={20} height={20} className="text-[rgb(186,213,51)]" />
              <span className="text-sm font-medium text-[rgb(186,213,51)]">5 anos de excelência</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Tudo para o Bem-Estar dos Seus <span className="text-[rgb(186,213,51)]">Animais</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Da fazenda ao lar, oferecemos rações premium, medicamentos, acessórios e produtos country
              com atendimento diferenciado e preços que cabem no seu bolso.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3">
                <div className="bg-[rgb(186,213,51)] p-2 rounded-lg flex-shrink-0">
                  <Award width={20} height={20} className="text-[rgb(54,59,27)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Qualidade Garantida</h3>
                  <p className="text-sm text-gray-300">Produtos selecionados e marcas confiáveis</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-[rgb(186,213,51)] p-2 rounded-lg flex-shrink-0">
                  <Clock width={20} height={20} className="text-[rgb(54,59,27)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Atendimento Ágil</h3>
                  <p className="text-sm text-gray-300">Equipe pronta para te atender</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[rgb(186,213,51)] text-[rgb(54,59,27)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[rgb(166,193,31)] transition-all hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Fale Conosco no WhatsApp</span>
                <ArrowRight width={20} height={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => scrollTo('localizacao')}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[rgb(54,59,27)] transition-all flex items-center justify-center space-x-2"
              >
                <MapPin width={20} height={20} />
                <span>Visite Nossa Loja</span>
              </button>
            </div>
            <div className="flex items-center space-x-6 pt-6 border-t border-white/20">
              <div>
                <p className="text-3xl font-bold text-[rgb(186,213,51)]">5.0</p>
                <p className="text-sm text-gray-300">Avaliação</p>
              </div>
              <div className="h-12 w-px bg-white/20"></div>
              <div>
                <p className="text-3xl font-bold text-[rgb(186,213,51)]">5+</p>
                <p className="text-sm text-gray-300">Anos de Mercado</p>
              </div>
              <div className="h-12 w-px bg-white/20"></div>
              <div>
                <p className="text-3xl font-bold text-[rgb(186,213,51)]">1000+</p>
                <p className="text-sm text-gray-300">Clientes Satisfeitos</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-[rgb(186,213,51)]/20 rounded-3xl blur-2xl"></div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/agro%20rusticano/img/agrorust-01.webp"
                alt="Pet feliz"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}

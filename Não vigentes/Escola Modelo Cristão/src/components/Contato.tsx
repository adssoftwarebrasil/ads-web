import { MapPin, Phone, MessageCircle, Mail, Clock } from 'lucide-react';

const WA_URL =
  'https://wa.me/5511989742323?text=Olá!%20Gostaria%20de%20conhecer%20mais%20sobre%20a%20Escola%20Modelo%20Cristão';

export default function Contato() {
  return (
    <section id="contato" className="py-16 md:py-24 bg-gradient-to-br from-[#024977] via-[#035a93] to-[#024977] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Venha Conhecer a Escola Modelo Cristão</h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'rgb(246, 174, 9)' }}></div>
          <p className="text-base md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Agende uma visita e descubra como podemos fazer parte da formação do seu filho
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-4 md:space-y-5">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 md:p-6 hover:bg-white/15 transition-all duration-300 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg" style={{ backgroundColor: 'rgb(246, 174, 9)' }}>
                  <MapPin className="lucide lucide-map-pin text-white w-6 h-6 md:w-7 md:h-7" width={24} height={24} />
                </div>
                <div className="text-white flex-1">
                  <h3 className="font-bold text-lg md:text-xl mb-2">Endereço</h3>
                  <p className="text-sm md:text-base text-gray-100 leading-relaxed">Rua João Pereira, 74 - Lapa<br />São Paulo - SP</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 md:p-6 hover:bg-white/15 transition-all duration-300 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg" style={{ backgroundColor: 'rgb(246, 174, 9)' }}>
                  <Phone className="lucide lucide-phone text-white w-6 h-6 md:w-7 md:h-7" width={24} height={24} />
                </div>
                <div className="text-white flex-1">
                  <h3 className="font-bold text-lg md:text-xl mb-2">Telefone</h3>
                  <a href="tel:+551138530493" className="text-sm md:text-base text-gray-100 hover:text-[#F6AE09] transition-colors">(11) 3853-0493</a>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 md:p-6 hover:bg-white/15 transition-all duration-300 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg" style={{ backgroundColor: 'rgb(246, 174, 9)' }}>
                  <MessageCircle className="lucide lucide-message-circle text-white w-6 h-6 md:w-7 md:h-7" width={24} height={24} />
                </div>
                <div className="text-white flex-1">
                  <h3 className="font-bold text-lg md:text-xl mb-2">WhatsApp</h3>
                  <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-gray-100 hover:text-[#F6AE09] transition-colors">(11) 98974-2323</a>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 md:p-6 hover:bg-white/15 transition-all duration-300 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg" style={{ backgroundColor: 'rgb(246, 174, 9)' }}>
                  <Mail className="lucide lucide-mail text-white w-6 h-6 md:w-7 md:h-7" width={24} height={24} />
                </div>
                <div className="text-white flex-1">
                  <h3 className="font-bold text-lg md:text-xl mb-2">E-mail</h3>
                  <a href="mailto:emc@escolamodelocristao.com" className="text-sm md:text-base text-gray-100 hover:text-[#F6AE09] transition-colors break-all">emc@escolamodelocristao.com</a>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 md:p-6 hover:bg-white/15 transition-all duration-300 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg" style={{ backgroundColor: 'rgb(246, 174, 9)' }}>
                  <Clock className="lucide lucide-clock text-white w-6 h-6 md:w-7 md:h-7" width={24} height={24} />
                </div>
                <div className="text-white flex-1">
                  <h3 className="font-bold text-lg md:text-xl mb-2">Horário de Atendimento</h3>
                  <p className="text-sm md:text-base text-gray-100">Segunda a Sexta<br />6h50 às 18h</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 lg:sticky lg:top-24">
            <div className="text-center mb-8">
              <img src="https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2FLogo%20EMC%20.avif" alt="Logo Escola Modelo Cristão" className="h-20 md:h-28 mx-auto mb-6 object-contain" loading="lazy" />
              <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: 'rgb(2, 73, 119)' }}>Entre em Contato</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">Estamos prontos para receber você e sua família com todo carinho</p>
            </div>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full py-4 md:py-5 px-6 rounded-xl text-white font-bold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg mb-6" style={{ backgroundColor: 'rgb(246, 174, 9)' }}>
              <MessageCircle className="lucide lucide-message-circle mr-3 w-6 h-6" width={24} height={24} />
              Falar no WhatsApp
            </a>
            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm md:text-base text-gray-600 text-center leading-relaxed">
                Nossa equipe está pronta para apresentar toda a estrutura da escola, nossa metodologia cristã e esclarecer todas as suas dúvidas.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold" style={{ color: 'rgb(246, 174, 9)' }}>+25</p>
                <p className="text-xs md:text-sm text-gray-600 mt-1">Anos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold" style={{ color: 'rgb(2, 73, 119)' }}>100%</p>
                <p className="text-xs md:text-sm text-gray-600 mt-1">Cristã</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold" style={{ color: 'rgb(246, 174, 9)' }}>★★★★★</p>
                <p className="text-xs md:text-sm text-gray-600 mt-1">Excelência</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 text-center border border-white/20">
          <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed max-w-4xl mx-auto">
            <strong className="text-[#F6AE09]">Venha conhecer pessoalmente!</strong> Agende sua visita e veja como preparamos um ambiente especial para o desenvolvimento integral do seu filho com valores cristãos sólidos e educação de excelência.
          </p>
        </div>
      </div>
    </section>
  );
}

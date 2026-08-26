import { Star, ArrowRight, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url("https://storage.lucasmendes.dev/site-sp/mt%20autopecas/img/hero-background.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
        }}
      ></div>
      <div className="container mx-auto px-4 z-10 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[rgb(4,152,134)] text-white px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-medium">19 Anos de Experiência | Avaliação 4.5 ⭐</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Peças Automotivas de <span className="text-[rgb(4,152,134)]">Qualidade</span> para Seu Veículo
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            A MT Auto Peças oferece a mais completa linha de peças, baterias, pneus e óleos lubrificantes para motos,
            carros, caminhões, ônibus e carretas. Atendimento especializado e preços competitivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://wa.me/559191706760?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[rgb(4,152,134)] text-white px-8 py-4 rounded-full hover:bg-[rgb(3,122,107)] transition-all font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
            >
              Solicitar Orçamento
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://www.instagram.com/grupomtautopecas/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Conheça Nossa Loja
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all">
              <Clock size={32} className="text-[rgb(4,152,134)] mb-3 mx-auto" />
              <h3 className="text-white font-semibold text-lg mb-2">Horário de Atendimento</h3>
              <p className="text-gray-200">
                Segunda a Sábado
                <br />
                7:30 às 18:00
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all">
              <MapPin size={32} className="text-[rgb(4,152,134)] mb-3 mx-auto" />
              <h3 className="text-white font-semibold text-lg mb-2">Nossa Localização</h3>
              <p className="text-gray-200">
                BR-316, Centro
                <br />
                Marituba - PA
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all">
              <Star size={32} className="text-[rgb(4,152,134)] mb-3 mx-auto" />
              <h3 className="text-white font-semibold text-lg mb-2">Atendimento Premium</h3>
              <p className="text-gray-200">
                WhatsApp, Telefone
                <br />
                ou Direto na Loja
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

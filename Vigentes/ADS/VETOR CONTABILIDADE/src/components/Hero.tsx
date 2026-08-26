import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="pt-20 relative min-h-screen flex items-center"
      style={{
        backgroundImage: 'url(https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=Vetorcontabil%2F4b591843-08cb-4073-a511-20ff67c49105.jpeg&version_id=null)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay escuro para melhorar legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2e3094]/95 via-[#2e3094]/90 to-[#1a1d5c]/95"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Soluções Contábeis Personalizadas
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-blue-100 leading-relaxed font-semibold">
            Referência em contabilidade para pequenas, médias e grandes empresas
          </p>
          <p className="text-lg md:text-xl mb-12 text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Simplifique sua gestão contábil com atendimento personalizado, equipe qualificada e tecnologia de ponta
          </p>
          <button
            onClick={scrollToContact}
            className="bg-[#f0851a] hover:bg-[#d97616] text-white px-10 py-5 rounded-lg text-xl font-semibold transition-all transform hover:scale-105 shadow-2xl inline-flex items-center space-x-2"
          >
            <span>Entre em Contato</span>
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 bg-[#f0851a] py-4 z-10">
        <div className="container mx-auto px-4">
          <p className="text-center text-white font-semibold text-lg">
            Deixe quem tem experiência no mercado cuidar da sua empresa!
          </p>
        </div>
      </div>
    </section>
  );
}
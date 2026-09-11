import { ArrowRight, Truck, Clock, MapPin } from 'lucide-react';

const features = [
  { Icon: Truck, title: 'Entrega Rápida', desc: 'Campinas e região' },
  { Icon: Clock, title: 'Atendimento Ágil', desc: 'Segunda a Sábado' },
  { Icon: MapPin, title: 'Centro de Campinas', desc: 'Fácil acesso' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="pt-32 pb-20 bg-gradient-to-br from-[rgb(61,61,147)] via-[rgb(71,71,167)] to-[rgb(81,81,187)] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[rgb(237,48,54)] rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-[rgb(237,48,54)] text-white px-4 py-2 rounded-full text-sm font-semibold">
                Desde 1940
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Sua Papelaria de Confiança no Centro de Campinas
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
              Materiais escolares, suprimentos de escritório e produtos de papelaria com qualidade,
              preço justo e atendimento que conquista há mais de 85 anos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5519982880081?text=Olá! Gostaria de fazer um pedido."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgb(237,48,54)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(217,28,34)] transition-all duration-300 font-semibold shadow-2xl hover:shadow-[rgb(237,48,54)]/50 flex items-center justify-center space-x-2 text-lg group"
              >
                <span>Faça seu Pedido no WhatsApp</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:1937399090"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold flex items-center justify-center text-lg"
              >
                (19) 3739-9090
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {features.map(({ Icon, title, desc }) => (
                <div key={title} className="flex items-start space-x-3">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{title}</h3>
                    <p className="text-blue-100 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/papelaria%20paulino%2Fimg%2Ffachada-hero.webp"
                alt="Materiais de papelaria"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[rgb(237,48,54)] text-white p-6 rounded-2xl shadow-2xl">
              <p className="text-4xl font-bold">85+</p>
              <p className="text-sm">Anos de Tradição</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

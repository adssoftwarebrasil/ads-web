import { MessageCircle, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-[rgb(253,88,34)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Pronto Para Encontrar Sua Bike Ideal?
        </h2>
        <p className="text-xl text-white mb-12">
          Entre em contato e receba atendimento especializado
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="https://wa.me/5571982803566"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[rgb(253,88,34)] rounded-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="lucide lucide-message-circle w-12 h-12 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Falar no WhatsApp</h3>
            <p className="text-sm">(71) 98280-3566</p>
          </a>
          <a
            href="mailto:sjbikeoficial@gmail.com"
            className="bg-white text-[rgb(253,88,34)] rounded-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Mail className="lucide lucide-mail w-12 h-12 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Enviar E-mail</h3>
            <p className="text-sm">sjbikeoficial@gmail.com</p>
          </a>
          <div className="bg-white text-[rgb(253,88,34)] rounded-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <MapPin className="lucide lucide-map-pin w-12 h-12 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Visitar Nossa Loja</h3>
            <p className="text-sm">Portão, Lauro de Freitas - BA</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contato() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contato</h2>
          <p className="text-xl text-gray-600">
            Entre em contato conosco. Estamos à disposição para atender suas dúvidas.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a
            href="tel:16991729461"
            className="group p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-[rgb(0,123,0)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Phone size={28} className="text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Telefone</h3>
            <p className="text-gray-600">16-99172-9461</p>
          </a>
          <a
            href="mailto:contato@sporthorse.com.br"
            className="group p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-[rgb(0,123,0)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail size={28} className="text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">E-mail</h3>
            <p className="text-gray-600 break-all">contato@sporthorse.com.br</p>
          </a>
          <div className="group p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg text-center">
            <div className="w-16 h-16 bg-[rgb(0,123,0)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MapPin size={28} className="text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Endereço</h3>
            <p className="text-gray-600">
              Av. Itatiaia, 865
              <br />
              Jardim Sumaré
              <br />
              Ribeirão Preto - SP
            </p>
          </div>
        </div>
        <div className="text-center">
          <a
            href="https://wa.me/5516991729461"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(0,123,0)] hover:bg-[rgb(0,140,0)] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Enviar WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

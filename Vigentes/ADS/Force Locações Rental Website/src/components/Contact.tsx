import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-force-blue text-center mb-16">
          Fale Conosco
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
            <Phone className="w-16 h-16 text-force-yellow mx-auto mb-4" />
            <h3 className="text-xl font-bold text-force-blue mb-4">Central de Atendimento</h3>
            <a href="tel:+5591985785150" className="text-2xl font-bold text-force-blue hover:text-force-yellow transition-colors block mb-2">
              (91) 98578-5150
            </a>
            <p className="text-gray-600 mb-4">WhatsApp - Atendimento rápido</p>
            <a href="https://wa.me/5591985785150" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold transition-colors">
              CHAMAR NO WHATSAPP
            </a>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
            <Mail className="w-16 h-16 text-force-yellow mx-auto mb-4" />
            <h3 className="text-xl font-bold text-force-blue mb-4">E-mail</h3>
            <a href="mailto:aureliopassosrodrigues@gmail.com" className="text-lg font-bold text-force-blue hover:text-force-yellow transition-colors break-all block mb-2">
              aureliopassosrodrigues@gmail.com
            </a>
            <p className="text-gray-600">Resposta em até 24 horas</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
            <MapPin className="w-16 h-16 text-force-yellow mx-auto mb-4" />
            <h3 className="text-xl font-bold text-force-blue mb-4">Nossa Sede</h3>
            <p className="text-force-gray mb-2">
              Tv. Francisco Caldeira Castelo Branco, 27<br />
              Guamá, Belém - PA<br />
              CEP: 66918-380
            </p>
            <a href="https://www.google.com/maps/search/?api=1&query=Tv.+Francisco+Caldeira+Castelo+Branco+27+Guamá+Belém+PA" target="_blank" rel="noopener noreferrer" className="inline-block bg-force-blue hover:bg-force-dark-blue text-white px-6 py-3 rounded-lg font-bold transition-colors">
              VER NO MAPA
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto text-center">
          <Clock className="w-12 h-12 text-force-yellow mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-force-blue mb-4">Horários de Funcionamento</h3>
          <div className="space-y-2 text-lg text-force-gray">
            <p><strong>Operação dos Equipamentos:</strong> Segunda a Segunda (7 dias por semana)</p>
            <p><strong>Escritório:</strong> Segunda a Sexta, 08:00 às 18:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}

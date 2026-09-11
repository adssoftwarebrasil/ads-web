import { MapPin, ExternalLink, Phone, Clock, Smartphone, MessageCircle, Mail, Instagram } from 'lucide-react';
import { openWhatsApp } from '../lib/site';

export default function Contact() {
  return (
    <section id="contato">
      <section id="contato" className="bg-white py-20 sm:py-28 px-4 sm:px-6 w-full">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-[800px] mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-md bg-blue-50 text-primary-blue text-sm font-bold uppercase tracking-wider mb-4">
              Nossa Localização
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-gray-900 leading-tight mb-4">
              Venha Nos Visitar
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Estamos de portas abertas para receber você. Conheça nossa estrutura completa ou entre em contato pelos nossos canais de atendimento.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="relative w-full min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden shadow-md border border-gray-200 group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.3197387318187!2d-49.330408399999996!3d-16.6608759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef5ae7e0bf6e3%3A0x1e2fa11219772d31!2zQ09ORVjDg08gTkVHw5NDSU9T!5e0!3m2!1spt-BR!2sbr!4v1777269560557!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                title="Mapa da Conexão Negócios"
                style={{ border: '0px', minHeight: '400px' }}
              ></iframe>
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary-blue border border-gray-100 shrink-0">
                    <MapPin size={24} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Endereço</h3>
                </div>
                <address className="not-italic text-gray-600 font-medium leading-relaxed mb-6">
                  Av. Bandeirantes, 505<br />
                  Jardim Petropolis, Goiânia - GO<br />
                  CEP: 74453-010
                </address>
                <a
                  href="https://maps.google.com/?q=Av.+Bandeirantes,+505+-+Jardim+Petropolis,+Goiânia+-+GO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-blue font-bold text-sm hover:underline"
                >
                  Traçar Rota no GPS
                  <ExternalLink size={16} strokeWidth={2} />
                </a>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary-blue border border-gray-100 shrink-0">
                    <Phone size={24} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Fale Conosco</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                    <Clock size={18} strokeWidth={2} className="text-red-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">Principal</p>
                      <a href="tel:6299607694" className="text-sm font-bold text-gray-900 hover:text-primary-blue transition-colors">
                        (62) 9 9607-6949
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                    <Smartphone size={18} strokeWidth={2} className="text-primary-blue mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">Celular</p>
                      <a href="tel:6298592505" className="text-sm font-bold text-gray-900 hover:text-primary-blue transition-colors">
                        (62) 9 8592-5050
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm sm:col-span-2">
                    <Phone size={18} strokeWidth={2} className="text-primary-blue mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">Fixo Comercial</p>
                      <a href="tel:6232802600" className="text-sm font-bold text-gray-900 hover:text-primary-blue transition-colors">
                        (62) 3280-2600
                      </a>
                    </div>
                  </div>
                </div>
                <button
                  onClick={openWhatsApp}
                  className="w-full bg-green-600 text-white text-sm font-bold py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 hover:bg-green-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <MessageCircle size={20} strokeWidth={2} />
                  Chamar no WhatsApp
                </button>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary-blue border border-gray-100 shrink-0">
                    <Mail size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">E-mail</p>
                    <a href="mailto:atendimentoconexaonegocios@gmail.com" className="text-sm font-bold text-primary-blue hover:underline">
                      Enviar e-mail
                    </a>
                  </div>
                </div>
                <div className="hidden sm:block w-px h-10 bg-gray-200"></div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-gray-900">Siga-nos:</span>
                  <a
                    href="https://www.instagram.com/conexaonegociosturbina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm"
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Instagram size={18} strokeWidth={2} className="relative z-10" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

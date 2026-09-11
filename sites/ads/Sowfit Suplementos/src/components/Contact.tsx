import { MapPin, Clock, Phone, Mail, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Visite Nossa Loja</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Estamos prontos para atender você pessoalmente
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Endereço</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Av. Santos Dumont, 250 - Santos Dumont
                    <br />
                    Uberaba - MG, 38010-370
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Horário de Funcionamento</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Segunda a Sexta: 08h às 19h
                    <br />
                    Sábado: 09h às 13h
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl font-bold text-gray-900">Contatos</h3>
                  <div className="space-y-2">
                    <a
                      href="https://wa.me/553497228602"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                    >
                      <span className="font-medium">WhatsApp:</span>
                      <span>(34) 9722-8602</span>
                    </a>
                    <a
                      href="tel:3434807593"
                      className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                    >
                      <span className="font-medium">Telefone:</span>
                      <span>(34) 3480-7593</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-4 flex-1">
                  <h3 className="text-xl font-bold text-gray-900">E-mail e Redes Sociais</h3>
                  <a
                    href="mailto:sowfitsuplementos@hotmail.com"
                    className="block text-gray-600 hover:text-primary transition-colors"
                  >
                    sowfitsuplementos@hotmail.com
                  </a>
                  <a
                    href="https://instagram.com/sowfitsuplementos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>@sowfitsuplementos</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4620.625385478103!2d-47.94233892477756!3d-19.747721681600172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bad15d7d4c76f3%3A0x5369f4659b72fc36!2sSowFit%20Suplementos!5e1!3m2!1spt-BR!2sbr!4v1765817953000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              title="Localização SowFit Suplementos"
              style={{ border: '0px', minHeight: '600px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

import { MapPin, Clock, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const regions = ['São Carlos', 'Araraquara', 'Descalvado', 'Matão', 'Itirapina'];

const socials = [
  { icon: Facebook, iconClass: 'lucide-facebook', href: 'https://www.facebook.com/pisosmagonsc' },
  { icon: Instagram, iconClass: 'lucide-instagram', href: 'https://www.instagram.com/comercialmagon/' },
  { icon: Twitter, iconClass: 'lucide-twitter', href: 'https://x.com/pisosmagon' },
];

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block bg-[rgb(254,238,171)] text-[rgb(66,66,152)] px-6 py-2 rounded-full text-sm font-bold tracking-wide">
            Contato
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Venha Nos Visitar ou<span className="block text-[rgb(66,66,152)]">Entre em Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender você em São Carlos e região.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[rgb(66,66,152)] to-[rgb(113,147,204)] rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-xl p-3 flex-shrink-0">
                    <MapPin size={24} className="lucide lucide-map-pin text-[rgb(252,205,59)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Endereço</h4>
                    <p className="text-gray-100">
                      R. Miguel João, 1053<br />Jardim Bandeirantes<br />São Carlos - SP, 13562-180
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-xl p-3 flex-shrink-0">
                    <Clock size={24} className="lucide lucide-clock text-[rgb(252,205,59)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Horário de Funcionamento</h4>
                    <p className="text-gray-100">
                      Segunda a Sexta: 8:30h às 17:30h<br />Sábados: 9:00h às 12:00h<br />Domingos: Fechado
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-xl p-3 flex-shrink-0">
                    <Phone size={24} className="lucide lucide-phone text-[rgb(252,205,59)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Telefone / WhatsApp</h4>
                    <a
                      href="https://wa.me/5516991541924"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-100 hover:text-[rgb(252,205,59)] transition-colors"
                    >
                      (16) 99154-1924
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-xl p-3 flex-shrink-0">
                    <Mail size={24} className="lucide lucide-mail text-[rgb(252,205,59)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">E-mail</h4>
                    <a
                      href="mailto:comercialmagon.sc@gmail.com"
                      className="text-gray-100 hover:text-[rgb(252,205,59)] transition-colors break-all"
                    >
                      comercialmagon.sc@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Atendemos as Regiões</h3>
              <div className="grid grid-cols-2 gap-4">
                {regions.map((region) => (
                  <div
                    key={region}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
                  >
                    <div className="w-2 h-2 bg-[rgb(252,205,59)] rounded-full flex-shrink-0"></div>
                    <span className="font-semibold text-gray-700">{region}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Nossas Redes Sociais</h3>
              <div className="flex gap-4">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[rgb(66,66,152)] text-white p-4 rounded-xl hover:bg-[rgb(113,147,204)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                    >
                      <Icon size={28} className={`lucide ${social.iconClass}`} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="h-full min-h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.2890856668!2d-47.91158312471614!3d-22.000231679903457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b876dcf7d18a89%3A0x3d86d4b27d34b44!2sComercial%20Magon!5e0!3m2!1spt-BR!2sbr!4v1768998830307!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Comercial Magon"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[rgb(252,205,59)] to-[rgb(254,238,171)] rounded-3xl p-12 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-[rgb(66,66,152)] mb-4">
            Pronto para Transformar Seu Ambiente?
          </h3>
          <p className="text-xl text-gray-800 mb-8">
            Entre em contato agora e solicite um orçamento personalizado sem compromisso.
          </p>
          <a
            href="https://wa.me/5516991541924"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(66,66,152)] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[rgb(113,147,204)] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Solicitar Orçamento Agora
          </a>
        </div>
      </div>
    </section>
  );
}

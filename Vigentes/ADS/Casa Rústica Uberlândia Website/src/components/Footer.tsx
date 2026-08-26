import { Heart, ArrowRight, MapPin, Phone, Mail, Clock, Instagram, Facebook, Award } from 'lucide-react';
import { WHATSAPP_SEND, INSTAGRAM, FACEBOOK, LOGO, WhatsAppIcon, scrollToSection } from '../shared';

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Como Funciona', id: 'como-funciona' },
  { label: 'Contato', id: 'contato' },
];

const patternStyle = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
  backgroundSize: '30px 30px',
};

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[rgb(5,86,77)] via-[rgb(4,70,63)] to-[rgb(5,86,77)] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={patternStyle}></div>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[rgb(248,177,1)]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgb(184,11,41)]/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="py-12 border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <Heart className="w-4 h-4 text-[rgb(248,177,1)]" />
              <span className="text-sm font-medium">Feito com amor e dedicação</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Pronto para transformar seu espaço?</h3>
            <p className="text-white/80 text-lg mb-6">
              Entre em contato e descubra como nossos móveis podem deixar sua casa ainda mais aconchegante
            </p>
            <a
              href={WHATSAPP_SEND}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[rgb(248,177,1)] to-[rgb(255,197,51)] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[rgb(248,177,1)]/50 transform hover:scale-105 transition-all duration-300"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Fale Conosco no WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
            <div>
              <div className="mb-6">
                <img src={LOGO} alt="Casa Rústica Uberlândia" className="h-16 w-auto" />
              </div>
              <h3 className="text-xl font-bold mb-3">Casa Rústica Uberlândia</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Móveis de Madeira de Demolição Peroba Rosa. Sofisticação, durabilidade e sustentabilidade.
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs">
                  <Award className="w-3 h-3 text-[rgb(248,177,1)]" />
                  <span>100% Sustentável</span>
                </div>
                <div className="flex items-center gap-1 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs">
                  <Award className="w-3 h-3 text-[rgb(248,177,1)]" />
                  <span>Sob Medida</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-[rgb(248,177,1)] rounded-full"></div>
                Links Rápidos
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="group flex items-center gap-2 text-white/70 hover:text-[rgb(248,177,1)] transition-all duration-300"
                    >
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      <span>{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-[rgb(248,177,1)] rounded-full"></div>
                Contato
              </h3>
              <ul className="space-y-4">
                <li>
                  <div className="group flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[rgb(248,177,1)] transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="text-white/70 text-sm leading-relaxed">
                      <p className="font-medium text-white mb-1">Endereço</p>
                      Av. Rondon Pacheco, 1915 - Lídice, Uberlândia - MG, 38400-242
                    </div>
                  </div>
                </li>
                <li>
                  <div className="group flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[rgb(248,177,1)] transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="text-sm">
                      <p className="font-medium text-white mb-1">Telefone</p>
                      <a href={WHATSAPP_SEND} className="text-white/70 hover:text-[rgb(248,177,1)] transition-colors">
                        (34) 99726-4665
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="group flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[rgb(248,177,1)] transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="text-sm">
                      <p className="font-medium text-white mb-1">Email</p>
                      <a href="mailto:alessandrapsduraes@hotmail.com" className="text-white/70 hover:text-[rgb(248,177,1)] transition-colors break-all">
                        alessandrapsduraes@hotmail.com
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-[rgb(248,177,1)] rounded-full"></div>
                Horário
              </h3>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 mb-6">
                <div className="flex items-start gap-3 mb-3">
                  <Clock className="w-5 h-5 text-[rgb(248,177,1)] flex-shrink-0 mt-1" />
                  <div className="text-sm space-y-1">
                    <p className="flex justify-between gap-4">
                      <span className="text-white/70">Seg - Sex:</span>
                      <span className="font-medium">9h às 18h</span>
                    </p>
                    <p className="flex justify-between gap-4">
                      <span className="text-white/70">Sábado:</span>
                      <span className="font-medium">9h às 15h</span>
                    </p>
                    <p className="flex justify-between gap-4">
                      <span className="text-white/70">Domingo:</span>
                      <span className="font-medium text-red-300">Fechado</span>
                    </p>
                  </div>
                </div>
              </div>
              <h4 className="font-bold mb-3">Redes Sociais</h4>
              <p className="text-white/70 text-sm mb-4">Acompanhe nossas novidades</p>
              <div className="flex gap-3 mb-4">
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center overflow-hidden transition-all duration-300 hover:bg-[rgb(248,177,1)] hover:scale-110"
                >
                  <Instagram className="w-6 h-6 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </a>
                <a
                  href={FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center overflow-hidden transition-all duration-300 hover:bg-[rgb(248,177,1)] hover:scale-110"
                >
                  <Facebook className="w-6 h-6 relative z-10" />
                  <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </a>
              </div>
              <p className="text-sm">
                <span className="text-white/70">Instagram: </span>
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-[rgb(248,177,1)] hover:underline">
                  @casarusticauberlandia
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/60 text-sm text-center md:text-left">
                © 2025 Casa Rústica Uberlândia - Todos os direitos reservados
              </p>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <span>Desenvolvido com</span>
                <Heart className="w-4 h-4 text-[rgb(248,177,1)] animate-pulse" />
                <span>em Uberlândia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

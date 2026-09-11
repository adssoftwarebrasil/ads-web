import { MapPin, Clock, Phone, Mail, ExternalLink } from 'lucide-react';

export default function Contato() {
  return (
    <section id="contato" className="py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#d9b33c] font-bold tracking-[0.2em] text-sm uppercase">
            Canais de Atendimento
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-4">
            Entre em <span className="text-[#d9b33c]">Contato</span>
          </h2>
          <div className="h-1 w-24 bg-[#d9b33c] mx-auto mb-6"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#111111] border border-white/5 p-6 rounded-2xl hover:border-[#d9b33c]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#d9b33c]/10 p-3 rounded-lg text-[#d9b33c]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-[#d9b33c] font-bold uppercase text-xs tracking-widest mb-2">Sede</h3>
                  <p className="text-white font-bold text-lg mb-1">Aracaju - SE</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Rua dos Crisântemos, 62<br />
                    Bairro Inácio Barbosa<br />
                    CEP 49040-160
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#111111] border border-white/5 p-6 rounded-2xl hover:border-[#d9b33c]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#d9b33c]/10 p-3 rounded-lg text-[#d9b33c]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-[#d9b33c] font-bold uppercase text-xs tracking-widest mb-2">Filial</h3>
                  <p className="text-white font-bold text-lg mb-1">Pirambu - SE</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Rua José Cupertino Bispo, 290<br />
                    Bairro Centro<br />
                    CEP 49190-000
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#d9b33c]/5 border border-[#d9b33c]/20 p-6 rounded-2xl">
              <div className="flex items-center gap-4 text-[#d9b33c]">
                <Clock size={20} />
                <span className="text-sm font-medium">Segunda a Sexta: 08h às 18h</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="tel:+557939670400"
                className="group bg-[#111111] p-6 rounded-2xl border border-white/5 hover:border-[#d9b33c]/30 transition-all flex items-center gap-5"
              >
                <div className="bg-[#d9b33c] p-3 rounded-full text-black group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase font-bold tracking-tighter">Telefone Fixo</p>
                  <p className="text-white font-bold group-hover:text-[#d9b33c] transition-colors">
                    (79) 3967-0400
                  </p>
                </div>
              </a>
              <a
                href="mailto:ricardorodrigues.adv@outlook.com"
                className="group bg-[#111111] p-6 rounded-2xl border border-white/5 hover:border-[#d9b33c]/30 transition-all flex items-center gap-5"
              >
                <div className="bg-[#d9b33c] p-3 rounded-full text-black group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-gray-500 text-xs uppercase font-bold tracking-tighter">E-mail</p>
                  <p className="text-white font-bold group-hover:text-[#d9b33c] transition-colors truncate">
                    ricardorodrigues.adv@outlook.com
                  </p>
                </div>
              </a>
            </div>
            <div className="relative w-full h-[350px] rounded-2xl overflow-hidden grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 border border-white/10 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.147287736636!2d-37.0673413!3d-10.9522198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab3d3600000001%3A0x7770000000000000!2sRua%20dos%20Cris%C3%A2ntemos%2C%2062%20-%20In%C3%A1cio%20Barbosa%2C%20Aracaju%20-%20SE!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Ricardo Rodrigues Advocacia"
                style={{ border: '0px' }}
              ></iframe>
              <div className="absolute top-4 right-4">
                <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Como chegar
                  <ExternalLink size={12} className="text-[#d9b33c]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

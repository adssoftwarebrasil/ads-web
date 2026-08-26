import { MapPin, Clock, MessageCircle, Mail, Instagram, Facebook, ExternalLink, Phone, Navigation } from 'lucide-react';

export default function LocationContact() {
  return (
    <section id="contato" className="relative bg-gradient-to-br from-[#f0f9ff] via-white to-[#fef3c7] py-16 lg:py-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#145bcc]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f8cd21]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#145bcc]/10 text-[#145bcc] px-4 py-2 rounded-full text-xs lg:text-sm font-bold uppercase tracking-wider mb-4 border border-[#145bcc]/20">
            <MapPin size={14} className="lg:w-4 lg:h-4" />
            Visite-nos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
            Estamos Esperando por Você em{' '}
            <span className="bg-gradient-to-r from-[#145bcc] to-[#0d4a99] bg-clip-text text-transparent">
              Barreiras
            </span>
          </h2>
          <p className="text-base lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Venha conhecer nossa estrutura completa e receba atendimento especializado
          </p>
        </div>

        <div className="grid lg:grid-cols-[55%_45%] gap-8 lg:gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-5">
            {/* Address Card */}
            <div className="group relative bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border-l-[6px] border-[#e3130c] shadow-lg hover:shadow-2xl transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#e3130c] to-[#b91c1c] p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <MapPin size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase font-bold text-[#e3130c] mb-2 tracking-wider">ENDEREÇO</div>
                  <div className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">
                    Rua Princesa Isabel, nº 448
                  </div>
                  <div className="text-base text-gray-600 mb-4">Centro, Barreiras - BA • CEP: 47800-166</div>
                  
                    <a href="https://www.google.com/maps/search/?api=1&query=Rua+Princesa+Isabel+448+Centro+Barreiras+BA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#e3130c] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#b91c1c] transition-all hover:scale-105 shadow-md"
                  >
                    <Navigation size={16} />
                    Abrir no Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="group relative bg-gradient-to-br from-white to-[#fef3c7]/30 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-[#f8cd21]/30 shadow-lg hover:shadow-2xl transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#f8cd21] to-[#d4a800] p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <Clock size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase font-bold text-[#d4a800] mb-2 tracking-wider">
                    HORÁRIO DE ATENDIMENTO
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="text-lg font-semibold text-gray-900">Segunda a Sexta-feira</div>
                  </div>
                  <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-[#145bcc] to-[#0d4a99] bg-clip-text text-transparent">
                    08:00 - 18:30
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* WhatsApp */}
              
                <a href="https://wa.me/5577999948600?text=Olá! Vim do site e gostaria de mais informações"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-md border-t-4 border-[#25D366] hover:shadow-xl hover:-translate-y-2 transition-all"
              >
                <div className="bg-[#25D366]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} className="text-[#25D366]" />
                </div>
                <div className="text-[10px] uppercase font-bold text-[#25D366] mb-1 tracking-wider">WHATSAPP</div>
                <div className="text-lg font-black text-gray-900 mb-2">(77) 99994-8600</div>
                <span className="inline-flex items-center gap-1 text-xs bg-[#25D366]/10 text-[#25D366] px-2.5 py-1 rounded-full font-semibold">
                  <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse"></span>
                  Online agora
                </span>
              </a>

              {/* Phone */}
              
                <a href="tel:+5577999948600"
                className="group bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-md border-t-4 border-[#145bcc] hover:shadow-xl hover:-translate-y-2 transition-all"
              >
                <div className="bg-[#145bcc]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Phone size={24} className="text-[#145bcc]" />
                </div>
                <div className="text-[10px] uppercase font-bold text-[#145bcc] mb-1 tracking-wider">TELEFONE</div>
                <div className="text-lg font-black text-gray-900">Ligar Agora</div>
              </a>

              {/* Email */}
              
                <a href="mailto:televendas@grupobi.com.br"
                className="group bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-md border-t-4 border-[#69bfd6] hover:shadow-xl hover:-translate-y-2 transition-all"
              >
                <div className="bg-[#69bfd6]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Mail size={24} className="text-[#69bfd6]" />
                </div>
                <div className="text-[10px] uppercase font-bold text-[#69bfd6] mb-1 tracking-wider">E-MAIL</div>
                <div className="text-sm font-bold text-gray-900 break-all leading-tight">
                  televendas@grupobi.com.br
                </div>
              </a>

              {/* Instagram */}
              
                <a href="https://www.instagram.com/barreirasinformatica_?utm_source=qr&igsh=MXFjbXk3OGVvcWU5eA=="
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-md border-t-4 border-[#E1306C] hover:shadow-xl hover:-translate-y-2 transition-all"
              >
                <div className="bg-gradient-to-br from-[#E1306C] to-[#FD1D1D] w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Instagram size={24} className="text-white" />
                </div>
                <div className="text-[10px] uppercase font-bold text-[#E1306C] mb-1 tracking-wider">INSTAGRAM</div>
                <div className="text-base font-black text-gray-900">@barreirasinformatica_</div>
              </a>
            </div>

            {/* Facebook - Full Width */}
            
              <a href="https://www.facebook.com/share/1AEvH8m3eX/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-md border-l-4 border-[#1877F2] hover:shadow-xl hover:-translate-x-1 transition-all"
            >
              <div className="bg-[#1877F2]/10 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Facebook size={28} className="text-[#1877F2]" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] uppercase font-bold text-[#1877F2] mb-1 tracking-wider">FACEBOOK</div>
                <div className="text-lg font-black text-gray-900">Barreiras Informática</div>
              </div>
              <ExternalLink size={20} className="text-gray-400 group-hover:text-[#1877F2] transition-colors" />
            </a>
          </div>

          {/* Right Column - Image & Map */}
          <div className="space-y-5 lg:space-y-6">
            {/* Store Image */}
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/barreirasinformatica%2Floja-material-papelaria.webp"
                alt="Seção de papelaria dentro da loja"
                className="w-full h-[220px] lg:h-[280px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl">
                  <p className="text-sm font-bold text-gray-900">📦 Venha conhecer nossa loja!</p>
                  <p className="text-xs text-gray-600">Variedade em papelaria, informática e móveis</p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.8!2d-44.99!3d-12.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA5JzAwLjAiUyA0NMKwNTknMjQuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                className="w-full h-[320px] lg:h-[380px] border-0"
                loading="lazy"
                title="Localização da Barreiras Informática"
              ></iframe>
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
                <p className="text-xs font-bold text-[#145bcc] flex items-center gap-1">
                  <MapPin size={14} />
                  Centro de Barreiras
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-brand-blue font-semibold text-sm tracking-widest uppercase">Onde Estamos</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2 mb-4">Entre em Contato</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg">
            Estamos prontos para atender você com um orçamento personalizado e sem compromisso.
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-blue/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 text-brand-blue" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Endereço</h4>
                <p className="text-gray-600 text-sm">
                  Rua das Videiras, 655, Centro
                  <br />
                  Sorriso - MT
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-red/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Phone className="w-5 h-5 text-brand-red" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Telefone / WhatsApp</h4>
                <a
                  href="https://wa.me/5566992236989"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-red font-semibold text-sm hover:underline"
                >
                  (66) 9 9223-6989
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-gold/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Mail className="w-5 h-5 text-yellow-700" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">E-mail</h4>
                <a
                  href="mailto:rolimcleo3544@gmail.com"
                  className="text-gray-600 text-sm hover:text-brand-red transition-colors block"
                >
                  rolimcleo3544@gmail.com
                </a>
                <a
                  href="mailto:rolingmalhas@hotmail.com"
                  className="text-gray-600 text-sm hover:text-brand-red transition-colors block"
                >
                  rolingmalhas@hotmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock className="w-5 h-5 text-brand-blue" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-3">Horários de Funcionamento</h4>
                <div className="space-y-2">
                  <div className="flex justify-between gap-4 text-sm">
                    <span className="text-gray-600 font-medium">Segunda a Quinta</span>
                    <span className="font-semibold text-gray-800">07:00 - 11:30 | 13:30 - 18:00</span>
                  </div>
                  <div className="flex justify-between gap-4 text-sm">
                    <span className="text-gray-600 font-medium">Sexta-feira</span>
                    <span className="font-semibold text-gray-800">07:30 - 11:30 | 13:30 - 17:30</span>
                  </div>
                  <div className="flex justify-between gap-4 text-sm">
                    <span className="text-gray-600 font-medium">Sábado e Domingo</span>
                    <span className="font-semibold text-gray-400">Fechado</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/malhariarolim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-100 hover:bg-brand-red hover:text-white text-gray-700 font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 flex-1 justify-center"
              >
                <Instagram className="w-4 h-4" />
                @malhariarolim
              </a>
              <a
                href="https://www.facebook.com/malhariarolim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-100 hover:bg-brand-blue hover:text-white text-gray-700 font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 flex-1 justify-center"
              >
                <Facebook className="w-4 h-4" />
                malharia rolim
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-brand-red to-brand-red-dark rounded-3xl p-8 md:p-10 text-white flex flex-col justify-between shadow-2xl shadow-brand-red/30">
            <div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight">Pronto para equipar sua equipe?</h3>
              <p className="text-red-100 text-base leading-relaxed mb-8">
                Entre em contato agora pelo WhatsApp e receba um orçamento personalizado sem compromisso. Atendemos
                escolas, empresas e profissionais de Sorriso e região.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Uniformes escolares e empresariais',
                  'Jalecos, scrubs e pijamas cirúrgicos',
                  'Conjuntos esportivos e operacionais',
                  'Bordados e sublimação personalizados',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span className="text-red-100 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="https://wa.me/5566992236989?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento+de+uniformes!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 bg-white text-brand-red font-black text-base py-4 rounded-2xl hover:bg-red-50 transition-all duration-200 hover:shadow-xl hover:scale-[1.02]"
            >
              Solicitar Orçamento pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

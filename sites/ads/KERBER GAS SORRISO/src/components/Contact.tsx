import { Phone, MapPin, Clock, Mail, ChevronRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[rgb(248,130,31)] font-semibold text-sm tracking-widest uppercase mb-3">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Entre em <span className="text-[rgb(248,130,31)]">Contato</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Estamos prontos para atender voce com agilidade e qualidade
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="group bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[rgb(248,130,31)]/30 text-center hover:-translate-y-1">
            <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Phone className="lucide lucide-phone w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">WhatsApp</h3>
            <div className="space-y-1 mb-4">
              <p className="text-gray-500 text-sm">(66) 99966-8040</p>
            </div>
            <a
              href="https://wa.me/5566999668040?text=Ola!%20Gostaria%20de%20fazer%20um%20pedido%20de%20gas%20ou%20agua."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[rgb(248,130,31)] hover:text-orange-600 font-semibold text-sm transition-colors group/link"
            >
              <span>Enviar mensagem</span>
              <ChevronRight className="lucide lucide-chevron-right w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="group bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[rgb(248,130,31)]/30 text-center hover:-translate-y-1">
            <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <MapPin className="lucide lucide-map-pin w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Endereco</h3>
            <div className="space-y-1 mb-4">
              <p className="text-gray-500 text-sm">Rua Lajeado, 210</p>
              <p className="text-gray-500 text-sm">Setor Industrial 2a Etapa</p>
              <p className="text-gray-500 text-sm">Sorriso - MT</p>
            </div>
          </div>
          <div className="group bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[rgb(248,130,31)]/30 text-center hover:-translate-y-1">
            <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Clock className="lucide lucide-clock w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Horario</h3>
            <div className="space-y-1 mb-4">
              <p className="text-gray-500 text-sm">Seg a Sab: 07h as 19h</p>
              <p className="text-gray-500 text-sm">Dom e Feriados: 07h as 12h</p>
            </div>
          </div>
          <div className="group bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[rgb(248,130,31)]/30 text-center hover:-translate-y-1">
            <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-[rgb(248,130,31)] to-red-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Mail className="lucide lucide-mail w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">E-mail</h3>
            <div className="space-y-1 mb-4">
              <p className="text-gray-500 text-sm">kerbergassorriso@gmail.com</p>
            </div>
            <a
              href="mailto:kerbergassorriso@gmail.com"
              className="inline-flex items-center text-[rgb(248,130,31)] hover:text-orange-600 font-semibold text-sm transition-colors group/link"
            >
              <span>Enviar e-mail</span>
              <ChevronRight className="lucide lucide-chevron-right w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-24 bg-[#fefefe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#ffaf24]/15 text-[#ec8f2b] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Onde estamos
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#343434] mb-4">
            Nossa localização
          </h2>
          <p className="text-[#343434]/60 text-base max-w-xl mx-auto">
            Atendemos Uberlândia e região. Venha nos visitar ou entre em contato pelos canais
            abaixo.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5">
              <div className="w-10 h-10 bg-[#ffaf24]/20 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="lucide lucide-map-pin text-[#ec8f2b]" width={18} height={18} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#343434]/40 mb-1">
                  Endereço
                </div>
                <p className="text-[#343434] font-semibold text-sm whitespace-pre-line">
                  {'R. do Fazendeiro, 978 - Jardim das Palmeiras\nUberlândia - MG, 38412-288'}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5">
              <div className="w-10 h-10 bg-[#ffaf24]/20 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="lucide lucide-clock text-[#ec8f2b]" width={18} height={18} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#343434]/40 mb-1">
                  Horário de atendimento
                </div>
                <p className="text-[#343434] font-semibold text-sm whitespace-pre-line">
                  Segunda a Sexta: 07h às 17h
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5">
              <div className="w-10 h-10 bg-[#ffaf24]/20 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="lucide lucide-phone text-[#ec8f2b]" width={18} height={18} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#343434]/40 mb-1">
                  Telefone / WhatsApp
                </div>
                <a
                  href="tel:+553491233322"
                  className="text-[#343434] font-semibold text-sm hover:text-[#ec8f2b] transition-colors whitespace-pre-line"
                >
                  (34) 9 9123-3322
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5">
              <div className="w-10 h-10 bg-[#ffaf24]/20 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                <Mail className="lucide lucide-mail text-[#ec8f2b]" width={18} height={18} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#343434]/40 mb-1">
                  E-mail
                </div>
                <a
                  href="mailto:alocacambasudi@gmail.com"
                  className="text-[#343434] font-semibold text-sm hover:text-[#ec8f2b] transition-colors whitespace-pre-line"
                >
                  alocacambasudi@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-lg border border-gray-100 min-h-[380px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4417.625437922998!2d-48.32046221111646!3d-18.94253189837464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a44584b454c409%3A0xacef1107d7e163d5!2zQWzDtCBDYcOnYW1iYXMgVWJlcmzDom5kaWE!5e0!3m2!1spt-BR!2sbr!4v1776451879073!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Alô Caçambas"
              style={{ border: '0px', minHeight: '380px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

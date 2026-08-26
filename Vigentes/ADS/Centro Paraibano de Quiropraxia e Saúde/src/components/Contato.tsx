import { Phone, MessageCircle, Mail, MapPin, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';
import { WHATSAPP_URL, PHONE_TEL } from '../constants';

export default function Contato() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-cyan-brand text-sm font-semibold tracking-widest uppercase mb-3">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy leading-tight">
            Não espere seu <span className="text-cyan-brand">problema piorar</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Agende agora mesmo a sua consulta e dê o primeiro passo para uma vida sem dor.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-5">
            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center shrink-0">
                <Phone width={18} height={18} className="lucide lucide-phone text-white" />
              </div>
              <div>
                <p className="text-navy font-semibold text-sm mb-0.5">Telefone</p>
                <a
                  href={PHONE_TEL}
                  className="text-gray-600 hover:text-cyan-brand transition-colors text-sm"
                >
                  (83) 3021-8790
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center shrink-0">
                <MessageCircle
                  width={18}
                  height={18}
                  className="lucide lucide-message-circle text-white"
                />
              </div>
              <div>
                <p className="text-navy font-semibold text-sm mb-0.5">WhatsApp</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#25D366] transition-colors text-sm"
                >
                  (83) 99616-1566
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center shrink-0">
                <Mail width={18} height={18} className="lucide lucide-mail text-white" />
              </div>
              <div>
                <p className="text-navy font-semibold text-sm mb-0.5">E-mail</p>
                <a
                  href="mailto:centropbdequiropraxia@gmail.com"
                  className="text-gray-600 hover:text-cyan-brand transition-colors text-sm break-all"
                >
                  centropbdequiropraxia@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center shrink-0">
                <MapPin width={18} height={18} className="lucide lucide-map-pin text-white" />
              </div>
              <div>
                <p className="text-navy font-semibold text-sm mb-0.5">Endereço</p>
                <p className="text-gray-600 text-sm">Av. São Paulo, 843, Estados</p>
                <p className="text-gray-600 text-sm">João Pessoa - PB</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center shrink-0">
                <Clock width={18} height={18} className="lucide lucide-clock text-white" />
              </div>
              <div>
                <p className="text-navy font-semibold text-sm mb-1">Horário de Atendimento</p>
                <p className="text-gray-600 text-sm">Segunda a Sexta: 07:00 — 19:00</p>
                <p className="text-gray-600 text-sm">Sábado: 08:00 — 12:00</p>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/quiropraxiapb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-cyan-brand flex items-center justify-center text-gray-500 hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram width={18} height={18} className="lucide lucide-instagram " />
              </a>
              <a
                href="https://www.facebook.com/share/17AC2kxf4R/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-cyan-brand flex items-center justify-center text-gray-500 hover:text-white transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook width={18} height={18} className="lucide lucide-facebook " />
              </a>
              <a
                href="https://www.linkedin.com/company/quiropraxiapb/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-cyan-brand flex items-center justify-center text-gray-500 hover:text-white transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin width={18} height={18} className="lucide lucide-linkedin " />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-5 py-2.5 rounded-xl transition-all duration-200 text-sm"
              >
                <MessageCircle
                  width={16}
                  height={16}
                  className="lucide lucide-message-circle "
                />
                Falar no WhatsApp
              </a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-[450px] md:h-[560px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31672.585113619178!2d-34.85934!3d-7.117523!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd56c32e7e1f%3A0xf91c71d4c5d2cb26!2sCentro%20Paraibano%20de%20Quiropraxia%20e%20Sa%C3%BAde%20H%C3%A9rnia%20de%20Disco%20%7C%20Dor%20Lombar%20Cervical%20%7C%20Pilates%20-%20Estados!5e0!3m2!1spt-BR!2sbr!4v1775504288517!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Centro Paraibano de Quiropraxia"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

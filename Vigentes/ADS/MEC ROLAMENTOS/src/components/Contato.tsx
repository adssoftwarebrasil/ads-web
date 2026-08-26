import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';

const horarios = [
  { dia: 'Segunda-feira', hora: '07:30–11:30 / 13:00–17:30', fechado: false },
  { dia: 'Terça-feira', hora: '07:30–11:30 / 13:00–17:30', fechado: false },
  { dia: 'Quarta-feira', hora: '07:30–11:30 / 13:00–17:30', fechado: false },
  { dia: 'Quinta-feira', hora: '07:30–11:30 / 13:00–17:30', fechado: false },
  { dia: 'Sexta-feira', hora: '07:30–11:30 / 13:00–17:30', fechado: false },
  { dia: 'Sábado', hora: '07:30–11:00', fechado: false },
  { dia: 'Domingo', hora: 'Fechado', fechado: true },
];

export default function Contato() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#EC3132]/20 text-[#EC3132] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Fale com a <span className="text-[#EC3132]">MEC Rolamentos</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            Estamos prontos para te atender. Entre em contato pelo WhatsApp, telefone ou visite
            nossa loja.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#EC3132]/20 rounded-xl flex items-center justify-center text-[#EC3132] flex-shrink-0">
                  <MapPin width={18} height={18} className="lucide lucide-map-pin" />
                </div>
                <div className="text-white font-bold text-base">Unidade Sinop</div>
              </div>
              <a
                href="https://wa.me/5566999952065"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 mb-3 group"
              >
                <div className="w-9 h-9 bg-[#25D366]/20 group-hover:bg-[#25D366] rounded-lg flex items-center justify-center text-[#25D366] group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <WhatsappIcon width={18} height={18} />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold group-hover:text-[#25D366] transition-colors">
                    WhatsApp
                  </div>
                  <div className="text-gray-400 text-xs mt-0.5">(66) 9 9995-2065</div>
                </div>
              </a>
              <div className="text-gray-400 text-xs leading-relaxed">
                R. Colonizador Ênio Pipino, 4131 - St. Industrial Norte, Sinop - MT, 78550-514
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#EC3132]/20 rounded-xl flex items-center justify-center text-[#EC3132] flex-shrink-0">
                  <MapPin width={18} height={18} className="lucide lucide-map-pin" />
                </div>
                <div className="text-white font-bold text-base">Unidade Matupá</div>
              </div>
              <a
                href="https://wa.me/5566996599374"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 mb-3 group"
              >
                <div className="w-9 h-9 bg-[#25D366]/20 group-hover:bg-[#25D366] rounded-lg flex items-center justify-center text-[#25D366] group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <WhatsappIcon width={18} height={18} />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold group-hover:text-[#25D366] transition-colors">
                    WhatsApp
                  </div>
                  <div className="text-gray-400 text-xs mt-0.5">(66) 9 9659-9374</div>
                </div>
              </a>
              <div className="text-gray-400 text-xs leading-relaxed">
                Av. Sebastião Alves Júnior, 516, Matupá - MT, 78525-000
              </div>
            </div>
            <a
              href="tel:6635315352"
              className="flex items-center gap-4 bg-white/5 hover:bg-[#2B559F]/20 border border-white/10 hover:border-[#2B559F]/50 rounded-2xl p-5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[#2B559F]/20 group-hover:bg-[#2B559F] rounded-xl flex items-center justify-center text-[#2B559F] group-hover:text-white transition-all duration-300 flex-shrink-0">
                <Phone width={20} height={20} className="lucide lucide-phone" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Telefone</div>
                <div className="text-gray-400 text-xs mt-0.5">(66) 3531-5352</div>
              </div>
            </a>
            <a
              href="mailto:mec@mecrolamentos.com.br"
              className="flex items-center gap-4 bg-white/5 hover:bg-[#2B559F]/20 border border-white/10 hover:border-[#2B559F]/50 rounded-2xl p-5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[#2B559F]/20 group-hover:bg-[#2B559F] rounded-xl flex items-center justify-center text-[#2B559F] group-hover:text-white transition-all duration-300 flex-shrink-0">
                <Mail width={20} height={20} className="lucide lucide-mail" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">E-mail</div>
                <div className="text-gray-400 text-xs mt-0.5">mec@mecrolamentos.com.br</div>
              </div>
            </a>
            <a
              href="https://www.instagram.com/MEC.ROLAMENTOS"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/5 hover:bg-pink-900/30 border border-white/10 hover:border-pink-500/50 rounded-2xl p-5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-pink-500/20 group-hover:bg-pink-500 rounded-xl flex items-center justify-center text-pink-400 group-hover:text-white transition-all duration-300 flex-shrink-0">
                <Instagram width={20} height={20} className="lucide lucide-instagram" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Instagram</div>
                <div className="text-gray-400 text-xs mt-0.5">@MEC.ROLAMENTOS</div>
              </div>
            </a>
          </div>
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#EC3132]/20 rounded-xl flex items-center justify-center text-[#EC3132]">
                  <Clock width={18} height={18} className="lucide lucide-clock" />
                </div>
                <h3 className="text-white font-bold text-base">Horário de Funcionamento</h3>
              </div>
              <div className="space-y-2">
                {horarios.map((h) => (
                  <div
                    key={h.dia}
                    className={
                      h.fechado
                        ? 'flex justify-between items-center py-2 px-3 rounded-lg bg-red-900/20 transition-colors'
                        : 'flex justify-between items-center py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors'
                    }
                  >
                    <span className="text-gray-300 text-sm font-medium">{h.dia}</span>
                    <span
                      className={
                        h.fechado
                          ? 'text-sm font-bold text-[#EC3132]'
                          : 'text-sm font-bold text-white'
                      }
                    >
                      {h.hora}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="rounded-2xl overflow-hidden border border-white/10"
              style={{ height: '320px' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5043.64701899095!2d-55.493474799999994!3d-11.8521371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a77fe6cc1f3b0f%3A0x5b3e54f62581c066!2sMEC%20Rolamentos!5e1!3m2!1spt-BR!2sbr!4v1771712549103!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MEC Rolamentos - Localização"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <a
            href="https://wa.me/5566999952065"
            className="inline-flex items-center gap-3 bg-[#EC3132] hover:bg-[#c82828] text-white font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#EC3132]/30 hover:scale-105"
          >
            Solicitar Orçamento Agora
          </a>
        </div>
      </div>
    </section>
  );
}

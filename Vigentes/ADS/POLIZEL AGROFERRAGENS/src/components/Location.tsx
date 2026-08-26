import { MapPin, Clock, Phone, Mail, Instagram } from 'lucide-react';

export default function Location() {
  return (
    <section id="localizacao" className="py-20 md:py-28 bg-[#fdf6f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-[#006633] font-semibold text-sm uppercase tracking-widest mb-3">
            Onde Estamos
          </span>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-[#663300] mb-4">
            Localização e Contato
          </h2>
          <div className="w-16 h-1 bg-[#006633] mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg">
            Estamos no coração da Vila Mineira, prontos para te atender com toda atenção que você merece.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          <div className="lg:col-span-3 rounded-3xl overflow-hidden shadow-2xl border border-[#e8c9a0]" style={{ minHeight: '400px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.0199629737363!2d-54.624440899999996!3d-16.4238125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9379c900367b0119%3A0xbd6f68ad6cd94618!2sPolizel%20Agroferragens!5e0!3m2!1spt-BR!2sbr!4v1775670999471!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px', display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Polizel Agroferragens"
            />
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#f5e6d3] flex items-center justify-center shrink-0">
                  <MapPin size={20} style={{ color: '#663300' }} />
                </div>
                <div>
                  <p className="font-heading font-bold text-[#663300] mb-1">Endereço</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Rua Exuperio Alves Pereira, nº 482<br />
                    Vila Mineira — Rondonópolis, MT
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#d5f0e3] flex items-center justify-center shrink-0">
                  <Clock size={20} style={{ color: '#006633' }} />
                </div>
                <div>
                  <p className="font-heading font-bold text-[#663300] mb-1">Horário de Funcionamento</p>
                  <p className="text-gray-500 text-sm">Segunda a Sábado</p>
                  <p className="text-[#006633] font-bold text-xl">7h00 às 17h00</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#f5e6d3] flex items-center justify-center shrink-0">
                  <Phone size={20} style={{ color: '#663300' }} />
                </div>
                <div>
                  <p className="font-heading font-bold text-[#663300] mb-1">Telefone / WhatsApp</p>
                  <a
                    href="https://wa.me/5566999996760"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#006633] font-bold text-xl hover:text-[#008844] transition-colors"
                  >
                    (66) 99999-6760
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#d5f0e3] flex items-center justify-center shrink-0">
                  <Mail size={20} style={{ color: '#006633' }} />
                </div>
                <div>
                  <p className="font-heading font-bold text-[#663300] mb-1">E-mail</p>
                  <a
                    href="mailto:polizel.2025pj@gmail.com"
                    className="text-gray-600 text-sm hover:text-[#006633] transition-colors break-all"
                  >
                    polizel.2025pj@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#f5e6d3] flex items-center justify-center shrink-0">
                  <Instagram size={20} style={{ color: '#663300' }} />
                </div>
                <div>
                  <p className="font-heading font-bold text-[#663300] mb-1">Instagram</p>
                  <a
                    href="https://www.instagram.com/polizelagroferragensematerias?igsh=MXBsMTkwczRjeHA1eQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 text-sm hover:text-[#663300] transition-colors"
                  >
                    @polizelagroferragensematerias
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export default function Contact() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-brand-red text-sm font-semibold uppercase tracking-widest">
            Fale conosco
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mt-3 mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
            Atendemos clientes de todo o Brasil. Entre em contato e solicite um
            orçamento sem compromisso.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-5">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+5566996340695"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-red/10 p-2.5 rounded-xl shrink-0">
                      <Phone
                        width={16}
                        height={16}
                        className="lucide lucide-phone text-brand-red"
                      />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                        Telefone / WhatsApp
                      </div>
                      <div className="text-gray-800 text-sm font-medium mt-0.5">
                        (66) 9 9634-0695
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="tel:+556630150071"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-red/10 p-2.5 rounded-xl shrink-0">
                      <Phone
                        width={16}
                        height={16}
                        className="lucide lucide-phone text-brand-red"
                      />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                        Telefone Fixo
                      </div>
                      <div className="text-gray-800 text-sm font-medium mt-0.5">
                        (66) 3015-0071
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="mailto:estofaria.js.soares@hotmail.com"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-red/10 p-2.5 rounded-xl shrink-0">
                      <Mail
                        width={16}
                        height={16}
                        className="lucide lucide-mail text-brand-red"
                      />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                        E-mail
                      </div>
                      <div className="text-gray-800 text-sm font-medium mt-0.5">
                        estofaria.js.soares@hotmail.com
                      </div>
                    </div>
                  </div>
                </a>
                <div>
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-red/10 p-2.5 rounded-xl shrink-0">
                      <MapPin
                        width={16}
                        height={16}
                        className="lucide lucide-map-pin text-brand-red"
                      />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                        Endereço
                      </div>
                      <div className="text-gray-800 text-sm font-medium mt-0.5">
                        Rua Colonizador Enio Pipino km 828, Área Rural, Anexo ao
                        Posto Buffalo
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-red/10 p-2.5 rounded-xl shrink-0">
                      <Clock
                        width={16}
                        height={16}
                        className="lucide lucide-clock text-brand-red"
                      />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                        Horário de Atendimento
                      </div>
                      <div className="text-gray-800 text-sm font-medium mt-0.5">
                        <div className="flex flex-col">
                          <span>Seg–Sex: 7:30 às 11:30 | 13:00 às 17:30</span>
                          <span className="text-brand-red font-semibold">
                            Sáb: 7:30 às 11:30
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-4">
                <a
                  href="https://www.instagram.com/estofariajs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-500 hover:text-brand-red transition-colors text-sm"
                >
                  <Instagram
                    width={18}
                    height={18}
                    className="lucide lucide-instagram "
                  />
                  @estofariajs
                </a>
                <a
                  href="https://www.facebook.com/ESTOFARIAJS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-500 hover:text-brand-blue transition-colors text-sm"
                >
                  <Facebook
                    width={18}
                    height={18}
                    className="lucide lucide-facebook "
                  />
                  Estofaria JS Soares
                </a>
              </div>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105 w-full"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.104 1.514 5.837L0 24l6.352-1.488A11.928 11.928 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.804 9.804 0 01-5.001-1.365l-.358-.213-3.73.874.906-3.62-.234-.372A9.762 9.762 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"></path>
              </svg>
              Falar pelo WhatsApp
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.4243642398573!2d-55.5133333!3d-11.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDUxJzAwLjAiUyA1NcKwMzAnNDguMCJX!5e0!3m2!1spt-BR!2sbr!4v1625123456789"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Estofaria JS Soares"
              style={{ border: '0px', minHeight: '400px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

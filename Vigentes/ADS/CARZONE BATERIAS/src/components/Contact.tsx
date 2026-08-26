import { useState, type FormEvent } from 'react';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';
import { WhatsAppIcon } from './icons';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    let text = `Olá! Meu nome é ${name}.`;
    if (vehicle) text += ` Preciso de uma bateria para: ${vehicle}.`;
    if (phone) text += ` Telefone: ${phone}.`;
    if (message) text += ` ${message}`;
    const url = `https://wa.me/556593448962?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <section id="contato" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 section-enter">
          <span className="inline-block text-[#1003AD] font-bold text-sm uppercase tracking-widest mb-3">
            Fale Conosco
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#000E27] mb-4">
            Solicite seu Orçamento Agora
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Preencha o formulário e entraremos em contato via WhatsApp em instantes. Rápido, fácil e sem compromisso.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="section-enter">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-[#000E27] mb-1.5">
                  Seu nome <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Digite seu nome completo"
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-[#F6FBFC] text-[#000E27] placeholder-gray-400 focus:outline-none focus:border-[#1003AD] transition-colors text-sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#000E27] mb-1.5">WhatsApp / Telefone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(65) 9 9999-9999"
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-[#F6FBFC] text-[#000E27] placeholder-gray-400 focus:outline-none focus:border-[#1003AD] transition-colors text-sm"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#000E27] mb-1.5">
                  Tipo de veículo <span className="text-red-500">*</span>
                </label>
                <select
                  name="vehicle"
                  required
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-[#F6FBFC] text-[#000E27] focus:outline-none focus:border-[#1003AD] transition-colors text-sm appearance-none"
                >
                  <option value="">Selecione o tipo de veículo</option>
                  <option value="Carro (passeio)">Carro (passeio)</option>
                  <option value="Carro (Start-Stop)">Carro (Start-Stop)</option>
                  <option value="Moto">Moto</option>
                  <option value="Caminhão">Caminhão</option>
                  <option value="Trator / Máquina Agrícola">Trator / Máquina Agrícola</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#000E27] mb-1.5">Mensagem (opcional)</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Modelo do carro, dúvida ou observação..."
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-[#F6FBFC] text-[#000E27] placeholder-gray-400 focus:outline-none focus:border-[#1003AD] transition-colors text-sm resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#F7EE30] text-[#000E27] px-6 py-4 rounded-xl font-black text-base hover:bg-yellow-300 transition-all duration-200 hover:scale-[1.02] shadow-xl shadow-yellow-400/20 mt-2"
              >
                <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                Enviar pelo WhatsApp
                <Send className="lucide lucide-send" width={16} height={16} />
              </button>
              <p className="text-center text-xs text-gray-400 mt-2">
                Você será redirecionado ao WhatsApp com os dados preenchidos.
              </p>
            </form>
          </div>
          <div className="section-enter space-y-5">
            <div className="bg-[#000E27] rounded-2xl p-6 md:p-8">
              <h3 className="text-white font-bold text-lg mb-6">Informações de Contato</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F7EE30]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="lucide lucide-phone text-[#F7EE30]" width={18} height={18} />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs font-medium uppercase tracking-wider mb-0.5">
                      Telefone / WhatsApp
                    </p>
                    <a
                      href="https://wa.me/556593448962"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm font-medium hover:text-[#F7EE30] transition-colors"
                    >
                      (65) 9 9344-8962
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F7EE30]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="lucide lucide-mail text-[#F7EE30]" width={18} height={18} />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs font-medium uppercase tracking-wider mb-0.5">E-mail</p>
                    <a
                      href="mailto:carzonebateriascba@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm font-medium hover:text-[#F7EE30] transition-colors"
                    >
                      carzonebateriascba@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F7EE30]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="lucide lucide-clock text-[#F7EE30]" width={18} height={18} />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs font-medium uppercase tracking-wider mb-0.5">
                      Horário de Atendimento
                    </p>
                    <p className="text-white text-sm font-medium whitespace-pre-line">
                      Seg-Sex: 7h30 às 21h | Sáb: 7h30 às 17h
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F7EE30]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="lucide lucide-map-pin text-[#F7EE30]" width={18} height={18} />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs font-medium uppercase tracking-wider mb-0.5">Endereço</p>
                    <a
                      href="https://goo.gl/maps/carzone"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm font-medium hover:text-[#F7EE30] transition-colors"
                    >
                      R. Carlos Alberto Feitosa Macedo, 20 – Nova Esperança, Cuiabá – MT
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1003AD] rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <WhatsAppIcon className="w-5 h-5" fill="white" />
                </div>
                <div>
                  <p className="font-bold">Atendimento Rápido</p>
                  <p className="text-white/70 text-xs">Respondemos em minutos</p>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Prefere falar diretamente? Clique abaixo e fale com nossa equipe agora mesmo no WhatsApp.
              </p>
              <a
                href="https://wa.me/556593448962"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-full text-center bg-white text-[#1003AD] py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors"
              >
                Abrir WhatsApp
              </a>
            </div>
            <div className="bg-[#F7EE30] rounded-2xl p-5 flex items-center gap-4">
              <div className="text-4xl">📸</div>
              <div>
                <p className="font-bold text-[#000E27]">Siga no Instagram</p>
                <p className="text-[#000E27]/70 text-sm">Acompanhe nossas ofertas e novidades</p>
                <a
                  href="https://www.instagram.com/carzonebateriascba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1003AD] font-bold text-sm hover:underline"
                >
                  @carzonebateriascba
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

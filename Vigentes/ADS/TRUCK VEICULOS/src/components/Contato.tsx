import { useState, FormEvent } from 'react';
import { MapPin, Clock, Phone, Mail, Instagram } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Contato() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let text = `Olá! Meu nome é ${name}.`;
    if (interest) text += ` Interesse: ${interest}.`;
    if (phone) text += ` Meu contato: ${phone}.`;
    if (message) text += ` ${message}`;
    const url = `https://wa.me/559292834895?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 sm:py-28 bg-[#010101]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="inline-block bg-[#af0201]/15 border border-[#af0201]/30 text-[#af0201] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Entre em Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#fefefe] leading-tight">
            Pronto para Fechar <span className="text-[#af0201]">Negócio?</span>
          </h2>
          <p className="mt-4 text-[#fefefe]/60 max-w-xl mx-auto text-base sm:text-lg">
            Preencha o formulário e fale diretamente com nossa equipe pelo WhatsApp.
            Respondemos rapidamente!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 animate-on-scroll-left space-y-4">
            <div className="bg-white/[0.04] border border-white/10 hover:border-[#af0201]/30 rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#af0201]/15 border border-[#af0201]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin width={16} height={16} className="text-[#af0201]" />
                </div>
                <div>
                  <p className="text-[#fefefe]/40 text-xs font-semibold uppercase tracking-wider mb-0.5">
                    Endereço
                  </p>
                  <p className="text-[#fefefe]/85 text-sm leading-snug">
                    Rua Professor Abílio Alencar, Alvorada, Manaus – AM, CEP: 69043-130
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/[0.04] border border-white/10 hover:border-[#af0201]/30 rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#af0201]/15 border border-[#af0201]/20 flex items-center justify-center flex-shrink-0">
                  <Clock width={16} height={16} className="text-[#af0201]" />
                </div>
                <div>
                  <p className="text-[#fefefe]/40 text-xs font-semibold uppercase tracking-wider mb-0.5">
                    Horário
                  </p>
                  <p className="text-[#fefefe]/85 text-sm leading-snug">
                    Seg. a Sáb. · 08h00 às 17h00
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/[0.04] border border-white/10 hover:border-[#af0201]/30 rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5">
              <a href="tel:+559292834895" rel="noopener noreferrer">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#af0201]/15 border border-[#af0201]/20 flex items-center justify-center flex-shrink-0">
                    <Phone width={16} height={16} className="text-[#af0201]" />
                  </div>
                  <div>
                    <p className="text-[#fefefe]/40 text-xs font-semibold uppercase tracking-wider mb-0.5">
                      Telefone / WhatsApp
                    </p>
                    <p className="text-[#fefefe]/85 text-sm leading-snug">(92) 9 9283-4895</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="bg-white/[0.04] border border-white/10 hover:border-[#af0201]/30 rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5">
              <a href="mailto:trabalhotruck.veiculoss@gmail.com" rel="noopener noreferrer">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#af0201]/15 border border-[#af0201]/20 flex items-center justify-center flex-shrink-0">
                    <Mail width={16} height={16} className="text-[#af0201]" />
                  </div>
                  <div>
                    <p className="text-[#fefefe]/40 text-xs font-semibold uppercase tracking-wider mb-0.5">
                      E-mail
                    </p>
                    <p className="text-[#fefefe]/85 text-sm leading-snug">
                      trabalhotruck.veiculoss@gmail.com
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="bg-white/[0.04] border border-white/10 hover:border-[#af0201]/30 rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5">
              <a
                href="https://www.instagram.com/truck_veiculos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#af0201]/15 border border-[#af0201]/20 flex items-center justify-center flex-shrink-0">
                    <Instagram width={16} height={16} className="text-[#af0201]" />
                  </div>
                  <div>
                    <p className="text-[#fefefe]/40 text-xs font-semibold uppercase tracking-wider mb-0.5">
                      Instagram
                    </p>
                    <p className="text-[#fefefe]/85 text-sm leading-snug">@truck_veiculos</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0616411272845!2d-60.0437873!3d-3.0782176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c11fef38ebb25%3A0xf989a2d4afe211bc!2sTruck%20Ve%C3%ADculos!5e0!3m2!1spt-BR!2sbr!4v1776369794205!5m2!1spt-BR!2sbr"
                width="100%"
                height="220"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Truck Veículos"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="lg:col-span-3 animate-on-scroll-right">
            <form
              onSubmit={handleSubmit}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#fefefe]/50 uppercase tracking-wider mb-2">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Ex: João Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 focus:border-[#af0201] focus:ring-0 focus:outline-none rounded-lg px-4 py-3 text-[#fefefe] placeholder-[#fefefe]/30 text-sm transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#fefefe]/50 uppercase tracking-wider mb-2">
                    WhatsApp / Telefone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(92) 9 ..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 focus:border-[#af0201] focus:ring-0 focus:outline-none rounded-lg px-4 py-3 text-[#fefefe] placeholder-[#fefefe]/30 text-sm transition-colors duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#fefefe]/50 uppercase tracking-wider mb-2">
                  Interesse
                </label>
                <select
                  name="interest"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 focus:border-[#af0201] focus:ring-0 focus:outline-none rounded-lg px-4 py-3 text-[#fefefe] placeholder-[#fefefe]/30 text-sm transition-colors duration-200 cursor-pointer"
                >
                  <option value="" className="bg-[#1a0000]">
                    Selecione uma opção
                  </option>
                  <option value="Comprar Caminhão" className="bg-[#1a0000]">
                    Comprar Caminhão
                  </option>
                  <option value="Comprar Veículo Leve" className="bg-[#1a0000]">
                    Comprar Veículo Leve
                  </option>
                  <option value="Vender Meu Veículo" className="bg-[#1a0000]">
                    Vender Meu Veículo
                  </option>
                  <option value="Fazer uma Troca" className="bg-[#1a0000]">
                    Fazer uma Troca
                  </option>
                  <option value="Outro" className="bg-[#1a0000]">
                    Outro
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#fefefe]/50 uppercase tracking-wider mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Descreva o que você está buscando..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 focus:border-[#af0201] focus:ring-0 focus:outline-none rounded-lg px-4 py-3 text-[#fefefe] placeholder-[#fefefe]/30 text-sm transition-colors duration-200 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#af0201] hover:bg-[#600202] text-[#fefefe] font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/40 hover:-translate-y-1 text-base"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current flex-shrink-0" />
                Enviar Mensagem via WhatsApp
              </button>
              <p className="text-center text-xs text-[#fefefe]/30">
                Ao enviar, você será redirecionado ao WhatsApp com sua mensagem preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

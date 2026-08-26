import { useState } from 'react';
import type { FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const linhas = [
      `*Nome:* ${nome}`,
      telefone ? `*Telefone:* ${telefone}` : '',
      email ? `*E-mail:* ${email}` : '',
      `*Mensagem:* ${mensagem}`,
    ].filter(Boolean);
    const texto = encodeURIComponent(linhas.join('\n'));
    window.open(
      `https://api.whatsapp.com/send/?phone=556699231818&text=${texto}&type=phone_number&app_absent=0`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="contato" className="bg-black py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#d5a222] text-xs md:text-sm tracking-[0.4em] uppercase font-medium">
            Fale Conosco
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white mt-4 leading-tight text-balance">
            Vamos encontrar o imóvel ideal para você
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 flex gap-4 hover:border-[#d5a222] transition-colors duration-300">
              <div className="shrink-0 w-11 h-11 rounded-lg bg-[#d5a222]/10 flex items-center justify-center">
                <MapPin size={20} className="text-[#d5a222]" />
              </div>
              <div>
                <div className="text-[#d5a222] text-xs tracking-widest uppercase font-semibold mb-1">
                  Endereço
                </div>
                <div className="text-neutral-200 text-sm md:text-base leading-relaxed">
                  R. das Nogueiras, 819 — Setor Comercial
                  <br />
                  Sinop — MT, CEP 78550-226
                </div>
              </div>
            </div>
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 flex gap-4 hover:border-[#d5a222] transition-colors duration-300">
              <div className="shrink-0 w-11 h-11 rounded-lg bg-[#d5a222]/10 flex items-center justify-center">
                <Phone size={20} className="text-[#d5a222]" />
              </div>
              <div>
                <div className="text-[#d5a222] text-xs tracking-widest uppercase font-semibold mb-1">
                  Telefone / WhatsApp
                </div>
                <div className="text-neutral-200 text-sm md:text-base leading-relaxed">
                  <a href="tel:+556699231818" className="hover:text-[#d5a222]">
                    (66) 99923-1818
                  </a>
                  <br />
                  <a href="tel:+556630291818" className="hover:text-[#d5a222]">
                    (66) 3029-1818
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 flex gap-4 hover:border-[#d5a222] transition-colors duration-300">
              <div className="shrink-0 w-11 h-11 rounded-lg bg-[#d5a222]/10 flex items-center justify-center">
                <Mail size={20} className="text-[#d5a222]" />
              </div>
              <div>
                <div className="text-[#d5a222] text-xs tracking-widest uppercase font-semibold mb-1">
                  E-mail
                </div>
                <div className="text-neutral-200 text-sm md:text-base leading-relaxed">
                  <a
                    href="mailto:supercasasinop@gmail.com"
                    className="hover:text-[#d5a222] break-all"
                  >
                    supercasasinop@gmail.com
                  </a>
                  <br />
                  <a
                    href="mailto:adm@supercasaimoveis.com.br"
                    className="hover:text-[#d5a222] break-all"
                  >
                    adm@supercasaimoveis.com.br
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 flex gap-4 hover:border-[#d5a222] transition-colors duration-300">
              <div className="shrink-0 w-11 h-11 rounded-lg bg-[#d5a222]/10 flex items-center justify-center">
                <Clock size={20} className="text-[#d5a222]" />
              </div>
              <div>
                <div className="text-[#d5a222] text-xs tracking-widest uppercase font-semibold mb-1">
                  Horário
                </div>
                <div className="text-neutral-200 text-sm md:text-base leading-relaxed">
                  Seg. à Sex. — 08h às 11h30
                  <br />
                  13h às 17h30
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-neutral-950 border border-neutral-800 rounded-3xl p-6 md:p-10 shadow-2xl"
            >
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">Envie sua mensagem</h3>
              <p className="text-neutral-400 text-sm mb-8">
                Preencha o formulário e você será redirecionado ao WhatsApp.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <label className="block">
                  <span className="text-xs text-neutral-400 tracking-wider uppercase font-medium mb-2 block">
                    Nome completo <span className="text-[#d5a222]">*</span>
                  </span>
                  <input
                    type="text"
                    required
                    className="input-field"
                    placeholder="Seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </label>
                <label className="block">
                  <span className="text-xs text-neutral-400 tracking-wider uppercase font-medium mb-2 block">
                    Telefone{' '}
                  </span>
                  <input
                    type="tel"
                    className="input-field"
                    placeholder="(00) 00000-0000"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                  />
                </label>
                <div className="md:col-span-2">
                  <label className="block">
                    <span className="text-xs text-neutral-400 tracking-wider uppercase font-medium mb-2 block">
                      E-mail{' '}
                    </span>
                    <input
                      type="email"
                      className="input-field"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                </div>
                <div className="md:col-span-2">
                  <label className="block">
                    <span className="text-xs text-neutral-400 tracking-wider uppercase font-medium mb-2 block">
                      Mensagem <span className="text-[#d5a222]">*</span>
                    </span>
                    <textarea
                      required
                      rows={4}
                      className="input-field resize-none"
                      placeholder="Conte-nos o que você procura..."
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                    ></textarea>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-[#d5a222] text-black px-6 py-4 rounded-full font-semibold hover:bg-white transition-all duration-300"
              >
                Enviar pelo WhatsApp
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
        <div className="mt-20 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl">
          <iframe
            title="Localização Super Casa Imóveis"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.693973820064!2d-55.5055495!3d-11.8566816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a77fd01fa62df7%3A0x7856ff3a582ad4a2!2sSuper%20Casa%20Im%C3%B3veis!5e0!3m2!1spt-BR!2sbr!4v1776776475987!5m2!1spt-BR!2sbr"
            width="100%"
            height="420"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: '0px', filter: 'grayscale(1) contrast(1.1)' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}

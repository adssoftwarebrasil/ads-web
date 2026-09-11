import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Send } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [equipamento, setEquipamento] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const texto =
      `Olá, Platô Líder! Gostaria de um orçamento.\n\n` +
      `Nome: ${nome}\n` +
      `Telefone: ${telefone}\n` +
      `Equipamento/Veículo: ${equipamento}\n` +
      `Mensagem: ${mensagem}`;
    const url = `https://wa.me/556696775369?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-[rgb(248,248,249)]">
      <div className="container-x grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">
            <span className="w-8 h-px bg-brand-red"></span>Fale com a Platô Líder
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold text-brand-navy leading-[1.05] text-balance">
            Peça seu orçamento e receba atendimento técnico especializado.
          </h2>
          <p className="mt-5 text-brand-ink/75 leading-relaxed">
            Informe seu equipamento ou veículo e nossa equipe identifica a peça ideal. Atendimento
            direto pelo WhatsApp para agilizar a sua compra.
          </p>
          <div className="mt-8 space-y-4">
            <a
              href="tel:+556696775369"
              className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-black/5 hover:border-brand-navy/20 hover:shadow-lg transition-all duration-300"
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-navy text-white">
                <Phone className="lucide lucide-phone w-5 h-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-brand-ink/60 font-semibold">
                  Telefone / WhatsApp
                </p>
                <p className="text-brand-navy font-bold text-lg">(66) 9 9677-5369</p>
              </div>
            </a>
            <a
              href="mailto:adm@platoliderembreagens.com.br"
              className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-black/5 hover:border-brand-navy/20 hover:shadow-lg transition-all duration-300"
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-navy text-white">
                <Mail className="lucide lucide-mail w-5 h-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-brand-ink/60 font-semibold">
                  E-mail
                </p>
                <p className="text-brand-navy font-bold break-all">adm@platoliderembreagens.com.br</p>
              </div>
            </a>
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-black/5">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-navy text-white">
                <MapPin className="lucide lucide-map-pin w-5 h-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-brand-ink/60 font-semibold">
                  Endereço
                </p>
                <p className="text-brand-navy font-semibold">
                  Rua Piauí, 2925 - Jardim Belo Horizonte, Rondonópolis - MT, 78705-609
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-black/5">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-navy text-white">
                <Clock className="lucide lucide-clock w-5 h-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-brand-ink/60 font-semibold">
                  Funcionamento
                </p>
                <p className="text-brand-navy font-semibold">
                  Seg. a Sex. 07:30 - 11:00 | 13:00 - 17:30
                </p>
              </div>
            </div>
            <a
              href="https://www.instagram.com/platolider_embreagens"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-black/5 hover:border-brand-navy/20 hover:shadow-lg transition-all duration-300"
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-navy text-white">
                <Instagram className="lucide lucide-instagram w-5 h-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-brand-ink/60 font-semibold">
                  Instagram
                </p>
                <p className="text-brand-navy font-bold">@platolider_embreagens</p>
              </div>
            </a>
          </div>
        </div>
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="relative p-6 sm:p-10 rounded-3xl bg-white shadow-xl border border-black/5"
          >
            <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 bg-brand-red text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold">
              <WhatsAppIcon className="w-4 h-4" />
              Resposta rápida
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-navy">
              Solicite seu orçamento
            </h3>
            <p className="mt-2 text-sm text-brand-ink/70">
              Preencha os dados e seja direcionado ao nosso WhatsApp.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-brand-ink/70">
                  Nome
                </label>
                <input
                  required
                  type="text"
                  placeholder="Seu nome completo"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="mt-1.5 w-full px-4 py-3 rounded-xl border border-black/10 bg-white focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/20 outline-none transition"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-brand-ink/70">
                  Telefone
                </label>
                <input
                  required
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="mt-1.5 w-full px-4 py-3 rounded-xl border border-black/10 bg-white focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/20 outline-none transition"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-brand-ink/70">
                  Equipamento / Veículo
                </label>
                <input
                  type="text"
                  placeholder="Ex.: Trator John Deere 6110J, Volvo FH 440..."
                  value={equipamento}
                  onChange={(e) => setEquipamento(e.target.value)}
                  className="mt-1.5 w-full px-4 py-3 rounded-xl border border-black/10 bg-white focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/20 outline-none transition"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-brand-ink/70">
                  Mensagem
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Descreva a peça que precisa ou a sua dúvida..."
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="mt-1.5 w-full px-4 py-3 rounded-xl border border-black/10 bg-white focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/20 outline-none transition resize-none"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-[rgb(120,8,1)] text-white font-semibold px-7 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-brand-red/20"
            >
              Enviar pelo WhatsApp
              <Send className="lucide lucide-send w-4 h-4" />
            </button>
            <p className="mt-3 text-xs text-brand-ink/60">
              Ao enviar, você será redirecionado ao WhatsApp com a mensagem pronta.
            </p>
          </form>
          <div className="mt-6 overflow-hidden rounded-3xl shadow-xl border border-black/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.4751930150696!2d-54.658622924855926!3d-16.45145898428479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9379c94a99edc625%3A0x5268e4ea3a585b35!2zUGxhdMO0IEzDrWRlcg!5e0!3m2!1spt-BR!2sbr!4v1776707134201!5m2!1spt-BR!2sbr"
              width="100%"
              height="320"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Platô Líder Embreagens"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, FormEvent } from 'react';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP } from '../data';

const iconBoxStyle = {
  background: 'linear-gradient(135deg, rgba(245, 223, 108, 0.15), rgba(218, 158, 12, 0.15))',
  border: '1px solid rgba(245, 223, 108, 0.2)',
};

export default function Contato() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [veiculo, setVeiculo] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let msg = `Olá! Meu nome é ${nome}.`;
    if (telefone) msg += ` Telefone: ${telefone}.`;
    if (veiculo) msg += ` Tenho interesse no veículo: ${veiculo}.`;
    if (mensagem) msg += ` ${mensagem}`;
    window.open(`${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="bg-brand-black py-20 md:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(at 80% 20%, rgb(245, 223, 108) 0%, transparent 60%)' }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'rgb(245, 223, 108)' }}>
            Fale Conosco
          </span>
          <h2 className="section-title text-white mt-3">
            Pronto para Encontrar
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, rgb(245, 223, 108) 0%, rgb(218, 158, 12) 100%)' }}
            >
              Seu Próximo Veículo?
            </span>
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto text-base">
            Preencha o formulário e entraremos em contato pelo WhatsApp. Atendimento rápido e sem enrolação.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-5">
            <div className="flex items-start gap-4 group">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={iconBoxStyle}>
                <MapPin size={18} className="lucide lucide-map-pin" style={{ color: 'rgb(245, 223, 108)' }} />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">Endereço</p>
                <a
                  href="https://maps.google.com/?q=Golden+Car+Rondon%C3%B3polis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold text-sm hover:text-golden transition-colors duration-200"
                >
                  R. Fernando Corrêa da Costa, 3111 - Jardim Belo Horizonte
                </a>
                <p className="text-white/50 text-xs mt-0.5">Rondonópolis - MT, 78705-600</p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={iconBoxStyle}>
                <Phone size={18} className="lucide lucide-phone" style={{ color: 'rgb(245, 223, 108)' }} />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">Telefone / WhatsApp</p>
                <a
                  href="tel:+556697218384"
                  rel="noopener noreferrer"
                  className="text-white font-semibold text-sm hover:text-golden transition-colors duration-200"
                >
                  (66) 9 9721-8384
                </a>
                <p className="text-white/50 text-xs mt-0.5">Clique para ligar ou chamar no WhatsApp</p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={iconBoxStyle}>
                <Clock size={18} className="lucide lucide-clock" style={{ color: 'rgb(245, 223, 108)' }} />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">Horário de Atendimento</p>
                <p className="text-white font-semibold text-sm">Segunda a Sábado</p>
                <p className="text-white/50 text-xs mt-0.5">07:30 às 18:00</p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={iconBoxStyle}>
                <Instagram size={18} className="lucide lucide-instagram" style={{ color: 'rgb(245, 223, 108)' }} />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">Instagram</p>
                <a
                  href="https://www.instagram.com/goldencar.roo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold text-sm hover:text-golden transition-colors duration-200"
                >
                  @goldencar.roo
                </a>
                <p className="text-white/50 text-xs mt-0.5">Siga-nos para novidades e lançamentos</p>
              </div>
            </div>
            <div className="mt-8 rounded-2xl overflow-hidden border border-white/10" style={{ height: '280px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.4165298115404!2d-54.652088124855794!3d-16.454433384282297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9379c8516a578521%3A0xc64224d710c968ac!2sGolden%20Car%20RONDON%C3%93POLIS!5e0!3m2!1spt-BR!2sbr!4v1776461870404!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Golden Car Rondonópolis"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 space-y-5">
              <div>
                <label className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">Seu Nome *</label>
                <input
                  type="text"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Digite seu nome completo"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-golden/60 transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">
                  WhatsApp / Telefone *
                </label>
                <input
                  type="tel"
                  required
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  placeholder="(66) 9 0000-0000"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-golden/60 transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">
                  Veículo de Interesse
                </label>
                <input
                  type="text"
                  value={veiculo}
                  onChange={(e) => setVeiculo(e.target.value)}
                  placeholder="Ex: HB20 2023, Gol, Saveiro..."
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-golden/60 transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">Mensagem</label>
                <textarea
                  rows={4}
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  placeholder="Conte-nos mais sobre o que você precisa..."
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-golden/60 transition-colors duration-200 resize-none"
                ></textarea>
              </div>
              <button type="submit" className="btn-golden w-full rounded-xl py-4 font-bold text-base">
                <WhatsAppIcon className="w-5 h-5" />
                Enviar pelo WhatsApp
              </button>
              <p className="text-white/30 text-xs text-center">
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pré-preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

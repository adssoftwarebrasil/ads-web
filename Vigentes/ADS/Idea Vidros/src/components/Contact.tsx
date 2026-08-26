import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const servicos = [
  'Esquadrias de Alumínio',
  'Vidro Temperado',
  'Box para Banheiro',
  'Espelhos',
  'Portas e Janelas',
  'Pele de Vidro / Fachada',
  'Guarda Corpo',
  'Outro',
];

export default function Contact() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [servico, setServico] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let texto = `Olá! Meu nome é ${nome}.`;
    texto += `\nTelefone: ${telefone}`;
    if (servico) texto += `\nServiço de interesse: ${servico}`;
    if (mensagem) texto += `\nMensagem: ${mensagem}`;
    const url = `http://wa.me/556699856445?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#F60301] text-xs font-bold uppercase tracking-widest mb-3">Fale Conosco</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#020202] mb-4">
            Solicite Seu <span className="text-[#234E72]">Orçamento Gratuito</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Preencha o formulário e entraremos em contato pelo WhatsApp para entender seu projeto e oferecer a melhor solução.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-[#020202] rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold text-[#EACD68] mb-5">Informações de Contato</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone width={16} height={16} className="text-[#EACD68]" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wide mb-0.5">WhatsApp / Telefone</div>
                    <a
                      href="http://wa.me/556699856445"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-semibold hover:text-[#EACD68] transition-colors"
                    >
                      (66) 9 9985-6445
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail width={16} height={16} className="text-[#EACD68]" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wide mb-0.5">E-mail</div>
                    <a
                      href="mailto:ideavidroseesquadrias@hotmail.com"
                      className="text-white font-semibold hover:text-[#EACD68] transition-colors text-sm"
                    >
                      ideavidroseesquadrias@hotmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin width={16} height={16} className="text-[#EACD68]" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wide mb-0.5">Endereço</div>
                    <span className="text-white font-medium text-sm leading-relaxed">
                      Av. Perimetral Sudoeste, 3835<br />
                      Flor do Cerrado, Sorriso/MT<br />
                      CEP: 78893-029
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock width={16} height={16} className="text-[#EACD68]" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wide mb-0.5">Horário de Funcionamento</div>
                    <div className="text-white font-medium text-sm leading-relaxed">
                      Seg–Sex: 07:30–11:00 / 13:00–17:30<br />
                      Sábado: 07:30–11:30
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1104.4369738044322!2d-55.74885252582116!3d-12.539479826386994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a0b365feae8433%3A0x211373f3cfdb3f8!2sIDEA%20Vidros%20%26%20Esquadrias!5e0!3m2!1spt-BR!2sbr!4v1774380695691!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IDEA Vidros no Mapa"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="lg:col-span-3 bg-[#f8f8f8] rounded-2xl p-6 sm:p-8 border border-gray-100">
            <h3 className="text-lg font-bold text-[#020202] mb-6">Enviar Mensagem pelo WhatsApp</h3>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Seu Nome *</label>
                  <input
                    type="text"
                    required
                    placeholder="Digite seu nome completo"
                    className="w-full bg-white border border-gray-200 text-[#020202] text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#234E72] focus:ring-1 focus:ring-[#234E72] transition-all placeholder-gray-400"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Telefone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(66) 9 9000-0000"
                    className="w-full bg-white border border-gray-200 text-[#020202] text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#234E72] focus:ring-1 focus:ring-[#234E72] transition-all placeholder-gray-400"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Serviço de Interesse *</label>
                <select
                  required
                  className="w-full bg-white border border-gray-200 text-[#020202] text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#234E72] focus:ring-1 focus:ring-[#234E72] transition-all"
                  value={servico}
                  onChange={(e) => setServico(e.target.value)}
                >
                  <option value="">Selecione um serviço...</option>
                  {servicos.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Mensagem</label>
                <textarea
                  rows={4}
                  placeholder="Descreva seu projeto ou tire suas dúvidas..."
                  className="w-full bg-white border border-gray-200 text-[#020202] text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#234E72] focus:ring-1 focus:ring-[#234E72] transition-all placeholder-gray-400 resize-none"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-green-400/30 hover:scale-[1.02] mt-2"
              >
                <WhatsAppIcon width={20} height={20} />
                Enviar Mensagem no WhatsApp
                <Send width={16} height={16} />
              </button>
              <p className="text-center text-gray-400 text-xs">
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pré-preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

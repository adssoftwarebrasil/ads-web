import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Send } from 'lucide-react';
import { WhatsAppIcon } from './icons';
import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  const header = useReveal();
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [produto, setProduto] = useState('Gás 13kg (P13)');
  const [observacoes, setObservacoes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let message = `Olá! Gostaria de solicitar um pedido.\n\n`;
    message += `*Nome:* ${nome}\n`;
    message += `*Telefone:* ${telefone}\n`;
    message += `*Endereço:* ${endereco}\n`;
    message += `*Produto:* ${produto}`;
    if (observacoes.trim()) {
      message += `\n*Observações:* ${observacoes}`;
    }
    window.open(
      `https://wa.me/556282381551?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={header.ref}
          className={`text-center mb-16 transition-all duration-700 ${
            header.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Faça seu pedido <span className="text-orange-500">agora mesmo</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Preencha o formulário e entraremos em contato pelo WhatsApp em
            instantes.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-900 rounded-3xl p-7 text-white">
              <h3 className="font-bold text-xl mb-5">Canais de Atendimento</h3>
              <div className="space-y-5">
                <a
                  href="https://wa.me/556282381551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">WhatsApp</div>
                    <div className="font-semibold group-hover:text-green-400 transition-colors">
                      (62) 98238-1551
                    </div>
                  </div>
                </a>
                <a href="tel:6232598600" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Telefone</div>
                    <div className="font-semibold group-hover:text-orange-400 transition-colors">
                      (62) 3259-8600
                    </div>
                  </div>
                </a>
                <a href="tel:6232599755" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Telefone 2</div>
                    <div className="font-semibold group-hover:text-orange-400 transition-colors">
                      (62) 3259-9755
                    </div>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-gray-700 rounded-xl flex items-center justify-center text-gray-400 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Endereço</div>
                    <div className="font-semibold text-sm leading-relaxed">
                      R. C-149, 1591 - Jardim América
                      <br />
                      Goiânia - GO, 74275-080
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-gray-700 rounded-xl flex items-center justify-center text-gray-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Atendimento</div>
                    <div className="font-semibold text-sm">
                      Seg a Sáb · 7h às 18h
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-52">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.1904008211063!2d-49.28489562485002!3d-16.717348984060067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef12b5c2d3267%3A0x75801385bb850d3!2sImperial%20G%C3%A1s!5e0!3m2!1spt-BR!2sbr!4v1772628426136!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Imperial Gás"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100"
            >
              <h3 className="font-bold text-gray-900 text-xl mb-6">
                Solicite seu pedido
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Nome completo *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Telefone *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="(62) 9 0000-0000"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Endereço de entrega *
                </label>
                <input
                  required
                  type="text"
                  placeholder="Rua, número, bairro, complemento"
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Produto desejado *
                </label>
                <select
                  value={produto}
                  onChange={(e) => setProduto(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all appearance-none"
                >
                  <option value="Gás 13kg (P13)">Gás 13kg (P13)</option>
                  <option value="Gás 20kg (P20)">Gás 20kg (P20)</option>
                  <option value="Gás 45kg (P45)">Gás 45kg (P45)</option>
                  <option value="Tenho dúvidas">Tenho dúvidas</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Observações (opcional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Andar, ponto de referência, quantidade, etc."
                  value={observacoes}
                  onChange={(e) => setObservacoes(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-bold text-base py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-green-500/30 hover:shadow-green-400/40 hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Enviar Pedido pelo WhatsApp
                <Send className="w-4 h-4" />
              </button>
              <p className="text-gray-400 text-xs text-center mt-3">
                Ao enviar, você será redirecionado ao WhatsApp com sua mensagem
                pré-preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

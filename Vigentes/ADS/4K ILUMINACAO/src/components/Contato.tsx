import { useState, type FormEvent } from 'react';
import { MessageCircle, Phone, MapPin, Send } from 'lucide-react';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const texto =
      `Olá! Meu nome é ${nome}.` +
      `\nTelefone: ${telefone}` +
      (mensagem ? `\nMensagem: ${mensagem}` : '');
    const url = `https://wa.me/5562981611111?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <section id="contato" className="py-20 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-semibold mb-6">
              Fale Conosco
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pronto para Iluminar seu Projeto?</h2>
            <p className="text-xl text-gray-400 mb-12">
              Entre em contato agora e receba atendimento especializado. Estamos prontos para ajudar você a encontrar a solução perfeita.
            </p>
            <div className="space-y-6">
              <a
                href="https://wa.me/5562981611111"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 rounded-xl bg-slate-800 border border-slate-700 hover:border-yellow-400/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-yellow-400/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={24} className="text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">WhatsApp</p>
                  <p className="text-white font-semibold text-lg hover:text-yellow-400 transition-colors">(62) 98161-1111</p>
                </div>
              </a>
              <a
                href="tel:+556241410490"
                className="flex items-start gap-4 p-6 rounded-xl bg-slate-800 border border-slate-700 hover:border-yellow-400/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-yellow-400/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Telefone</p>
                  <p className="text-white font-semibold text-lg hover:text-yellow-400 transition-colors">(62) 4141-0490</p>
                </div>
              </a>
              <div className="flex items-start gap-4 p-6 rounded-xl bg-slate-800 border border-slate-700">
                <div className="w-12 h-12 rounded-lg bg-yellow-400/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Endereço</p>
                  <p className="text-white font-semibold text-lg">Av. T-1, 917 - Sala 05 - St. Bueno, Goiânia - GO</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-2">Solicite uma Consultoria</h3>
            <p className="text-gray-400 mb-8">Preencha seus dados e entraremos em contato rapidamente</p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold text-gray-300 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Seu nome"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="telefone" className="block text-sm font-semibold text-gray-300 mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  placeholder="(00) 00000-0000"
                  required
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  placeholder="Conte mais sobre seu projeto ou necessidade..."
                  rows={4}
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold text-lg uppercase tracking-wide rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/30 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 "
              >
                <Send size={20} />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, type FormEvent } from 'react';
import { Check, Phone, MessageCircle, MapPin, Send } from 'lucide-react';

const beneficios = [
  'Entrega em Goiânia e Aparecida de Goiânia',
  'Atendimento de segunda a sexta, 8h às 19h',
  'Sábado das 8h às 12h',
  'Pedidos pelo WhatsApp, Instagram ou presencialmente',
  'Embalagem a vácuo para máxima conservação',
];

export default function Contato() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [tipoPedido, setTipoPedido] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let texto = `Olá! Gostaria de fazer um pedido.\n\n*Nome:* ${nome}\n*Telefone:* ${telefone}\n*Tipo de Pedido:* ${tipoPedido}`;
    if (mensagem.trim()) {
      texto += `\n*Detalhes:* ${mensagem}`;
    }
    window.open(`https://wa.me/556293474673?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <section id="contato" className="bg-black py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-8">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 leading-tight">
              Faça Seu Pedido Personalizado
            </h2>
            <div className="space-y-4 mb-8">
              {beneficios.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[rgb(242,51,52)] flex-shrink-0 mt-1" />
                  <span className="text-gray-300 text-base lg:text-lg">{b}</span>
                </div>
              ))}
            </div>
            <div className="bg-slate-900 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[rgb(242,51,52)]" />
                <span className="text-gray-300 text-sm">(62) 99218-4220</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[rgb(242,51,52)]" />
                <span className="text-gray-300 text-sm">(62) 93474-673</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[rgb(242,51,52)]" />
                <span className="text-gray-300 text-sm">
                  Av. Ismerino Soares de Carvalho, 707 - Faiçalville, Goiânia/GO
                </span>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 rounded-2xl p-8 lg:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Envie Seu Pedido</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="nome" className="text-sm font-semibold text-gray-300 mb-2 block">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Ex: João da Silva"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full bg-slate-800 border-2 border-slate-700 focus:border-[rgb(242,51,52)] px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label htmlFor="telefone" className="text-sm font-semibold text-gray-300 mb-2 block">
                  Seu Telefone/WhatsApp
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  placeholder="(62) 99999-9999"
                  required
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="w-full bg-slate-800 border-2 border-slate-700 focus:border-[rgb(242,51,52)] px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label htmlFor="tipoPedido" className="text-sm font-semibold text-gray-300 mb-2 block">
                  Tipo de Pedido
                </label>
                <select
                  id="tipoPedido"
                  name="tipoPedido"
                  required
                  value={tipoPedido}
                  onChange={(e) => setTipoPedido(e.target.value)}
                  className="w-full bg-slate-800 border-2 border-slate-700 focus:border-[rgb(242,51,52)] px-4 py-3 rounded-lg text-white focus:outline-none transition-colors duration-300 appearance-none"
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option value="Linguiça Personalizada (Monte a Sua)">
                    Linguiça Personalizada (Monte a Sua)
                  </option>
                  <option value="Linguiça Pronta (Sabor Específico)">
                    Linguiça Pronta (Sabor Específico)
                  </option>
                  <option value="Pedido para Evento/Grande Quantidade">
                    Pedido para Evento/Grande Quantidade
                  </option>
                  <option value="Dúvidas sobre Produtos">Dúvidas sobre Produtos</option>
                </select>
              </div>
              <div>
                <label htmlFor="mensagem" className="text-sm font-semibold text-gray-300 mb-2 block">
                  Detalhes do Pedido (Opcional)
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  placeholder="Descreva os sabores, quantidades ou dúvidas..."
                  rows={4}
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="w-full bg-slate-800 border-2 border-slate-700 focus:border-[rgb(242,51,52)] px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors duration-300 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(242,51,52)] hover:bg-red-700 py-4 rounded-lg text-white font-bold text-lg shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                Enviar para WhatsApp
              </button>
              <p className="text-xs text-gray-500 text-center mt-4">
                Seus dados serão usados apenas para processamento do pedido e não serão compartilhados.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

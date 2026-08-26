import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function Contact() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [produto, setProduto] = useState('');
  const [endereco, setEndereco] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto =
      `Olá, Império Gás! Gostaria de fazer um pedido.\n\n` +
      `Nome: ${nome}\n` +
      `Telefone: ${telefone}\n` +
      `Produto: ${produto}\n` +
      `Endereço: ${endereco}` +
      (mensagem ? `\nObservações: ${mensagem}` : '');
    window.open(`https://wa.me/556281556605?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 lg:py-32 bg-gradient-to-b from-black to-[#1A2335]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Faça Seu Pedido Agora</h2>
          <p className="text-lg text-white/80">Preencha o formulário e receba atendimento imediato via WhatsApp</p>
        </div>
        <form className="space-y-6 slide-up" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              required
              placeholder="Nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full bg-white/10 border border-[#DEAC6C] rounded-lg px-4 py-4 text-white placeholder-white/60 focus:outline-none focus:border-[#DEAC6C] focus:ring-2 focus:ring-[#DEAC6C]/50 transition-all"
            />
          </div>
          <div>
            <input
              type="tel"
              required
              placeholder="Telefone com DDD"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="w-full bg-white/10 border border-[#DEAC6C] rounded-lg px-4 py-4 text-white placeholder-white/60 focus:outline-none focus:border-[#DEAC6C] focus:ring-2 focus:ring-[#DEAC6C]/50 transition-all"
            />
          </div>
          <div>
            <select
              required
              value={produto}
              onChange={(e) => setProduto(e.target.value)}
              className="w-full bg-white/10 border border-[#DEAC6C] rounded-lg px-4 py-4 text-white focus:outline-none focus:border-[#DEAC6C] focus:ring-2 focus:ring-[#DEAC6C]/50 transition-all"
            >
              <option value="" className="text-gray-900">Selecione o produto</option>
              <option value="Gás de Cozinha 13kg" className="text-gray-900">Gás de Cozinha 13kg</option>
              <option value="Água Mineral 20L" className="text-gray-900">Água Mineral 20L</option>
              <option value="Gás + Água" className="text-gray-900">Gás + Água</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              required
              placeholder="Endereço completo para entrega"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              className="w-full bg-white/10 border border-[#DEAC6C] rounded-lg px-4 py-4 text-white placeholder-white/60 focus:outline-none focus:border-[#DEAC6C] focus:ring-2 focus:ring-[#DEAC6C]/50 transition-all"
            />
          </div>
          <div>
            <textarea
              placeholder="Mensagem ou observações (opcional)"
              rows={4}
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              className="w-full bg-white/10 border border-[#DEAC6C] rounded-lg px-4 py-4 text-white placeholder-white/60 focus:outline-none focus:border-[#DEAC6C] focus:ring-2 focus:ring-[#DEAC6C]/50 transition-all resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#DEAC6C] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F2DFBF] transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
          >
            <MessageCircle className="h-6 w-6" />
            Enviar Pedido pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

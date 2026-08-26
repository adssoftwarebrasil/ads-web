import { useState, FormEvent } from 'react';
import { User, Phone, MapPin, Package, MessageSquare, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const productLabels: Record<string, string> = {
  gas: 'Gás 13kg',
  agua: 'Água 20L',
  combo: 'Gás + Água',
};

export default function ContactForm() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [produto, setProduto] = useState('gas');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let text = `Olá! Gostaria de fazer um pedido.\n\n`;
    text += `*Nome:* ${nome}\n`;
    text += `*Telefone:* ${telefone}\n`;
    text += `*Endereço:* ${endereco}\n`;
    text += `*Produto:* ${productLabels[produto] || produto}`;
    if (mensagem.trim()) {
      text += `\n*Mensagem:* ${mensagem}`;
    }
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 lg:py-24 bg-[#021C3F]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#DBCC5E] text-center mb-4">
            Faça Seu Pedido Agora
          </h2>
          <p className="text-white text-center mb-12 text-lg">
            Preencha o formulário e envie seu pedido diretamente pelo WhatsApp
          </p>
          <form className="space-y-6 animate-fade-in" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-white font-semibold mb-2">
                <User className="lucide lucide-user w-5 h-5 text-[#DBCC5E]" />
                Nome Completo *
              </label>
              <input
                type="text"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#DBCC5E] focus:outline-none transition-colors"
                placeholder="Seu nome"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-white font-semibold mb-2">
                <Phone className="lucide lucide-phone w-5 h-5 text-[#DBCC5E]" />
                Telefone *
              </label>
              <input
                type="tel"
                required
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#DBCC5E] focus:outline-none transition-colors"
                placeholder="(66) 99999-9999"
                maxLength={15}
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-white font-semibold mb-2">
                <MapPin className="lucide lucide-map-pin w-5 h-5 text-[#DBCC5E]" />
                Endereço de Entrega *
              </label>
              <input
                type="text"
                required
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#DBCC5E] focus:outline-none transition-colors"
                placeholder="Rua, número, bairro"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-white font-semibold mb-2">
                <Package className="lucide lucide-package w-5 h-5 text-[#DBCC5E]" />
                Produto *
              </label>
              <select
                value={produto}
                onChange={(e) => setProduto(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#DBCC5E] focus:outline-none transition-colors"
              >
                <option value="gas">Gás 13kg</option>
                <option value="agua">Água 20L</option>
                <option value="combo">Gás + Água</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-white font-semibold mb-2">
                <MessageSquare className="lucide lucide-message-square w-5 h-5 text-[#DBCC5E]" />
                Mensagem (opcional)
              </label>
              <textarea
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#DBCC5E] focus:outline-none transition-colors resize-none"
                rows={4}
                placeholder="Informações adicionais sobre seu pedido"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-[#DBCC5E] text-[#021C3F] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#c9ba4d] transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle className="lucide lucide-message-circle w-6 h-6" />
              Enviar Pedido via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

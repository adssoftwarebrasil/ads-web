import { useState } from 'react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}.\nTelefone: ${phone}\n\n${message}`;
    window.open(`https://wa.me/553899492159?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(1,0,104)] mb-4">Entre em Contato</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Estamos prontos para atender sua necessidade. Fale conosco!</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[rgb(1,0,104)] mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-400 p-3 rounded-full flex-shrink-0">
                    <MapPin width={24} height={24} className="text-[rgb(1,0,104)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg text-[rgb(1,0,104)] mb-1">Endereço</div>
                    <div className="text-gray-600">Av. Gov. Valadares, 1964 - Barroca<br />Unaí - MG, 38616-058</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-400 p-3 rounded-full flex-shrink-0">
                    <Phone width={24} height={24} className="text-[rgb(1,0,104)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg text-[rgb(1,0,104)] mb-1">Telefones</div>
                    <div className="text-gray-600 space-y-1">
                      <a href="tel:3836762159" className="block hover:text-[rgb(1,0,104)] transition-colors">(38) 3676-2159</a>
                      <a href="https://wa.me/553899492159" className="block hover:text-[rgb(1,0,104)] transition-colors">(38) 9 9949-2159</a>
                      <a href="https://wa.me/5538988237829" className="block hover:text-[rgb(1,0,104)] transition-colors">(38) 9 8823-7829</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-400 p-3 rounded-full flex-shrink-0">
                    <Clock width={24} height={24} className="text-[rgb(1,0,104)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg text-[rgb(1,0,104)] mb-1">Horário de Atendimento</div>
                    <div className="text-gray-600">Segunda a Sexta: 8h às 18h<br />Sábado: 8h às 12h</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[rgb(1,0,104)] to-[rgb(15,23,138)] p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Faça sua Obra com Qualidade</h3>
              <p className="text-gray-200 mb-6">Entre em contato agora e receba um atendimento personalizado para suas necessidades.</p>
              <a href="https://wa.me/553899492159" target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-400 text-[rgb(1,0,104)] px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all">Chamar no WhatsApp</a>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-[rgb(1,0,104)] mb-6">Envie uma Mensagem</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo *</label>
                <input type="text" id="name" required value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(1,0,104)] focus:outline-none transition-colors" placeholder="Digite seu nome" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Telefone *</label>
                <input type="tel" id="phone" required value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(1,0,104)] focus:outline-none transition-colors" placeholder="(00) 00000-0000" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Mensagem *</label>
                <textarea id="message" required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(1,0,104)] focus:outline-none transition-colors resize-none" placeholder="Descreva o que você precisa..."></textarea>
              </div>
              <button type="submit" className="w-full bg-[rgb(1,0,104)] text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">Enviar Mensagem<Send width={20} height={20} className="group-hover:translate-x-1 transition-transform" /></button>
            </form>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.0954169061315!2d-46.900621824857645!3d-16.36910108435465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9357a97e5cab988b%3A0x33a1a7f9d6ebf4!2sCentral%20Ferragens%20Materiais%20de%20Constru%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1766076870445!5m2!1spt-BR!2sbr" width="100%" height={450} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização Central Ferragens" style={{ border: '0px' }}></iframe>
        </div>
      </div>
    </section>
  );
}

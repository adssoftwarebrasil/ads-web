import { useState } from 'react';
import { CheckCircle, MapPin, Phone, Mail } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const highlights = [
  'Mais de 30 anos de experiência',
  'Equipamentos de última geração',
  'Profissionais qualificados',
  'Atendimento personalizado',
];

export default function Contact() {
  const [form, setForm] = useState({ nome: '', whatsapp: '', email: '', assunto: '', mensagem: '' });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Nome: ${form.nome}%0AWhatsApp: ${form.whatsapp}%0AE-mail: ${form.email}%0AAssunto: ${form.assunto}%0AMensagem: ${form.mensagem}`;
    window.open(`https://wa.me/556198423838?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 md:py-28 lg:py-32 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 transition-all duration-800 opacity-0 translate-y-8">
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">Contato</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">Dúvidas ou Sugestões</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="transition-all duration-800 opacity-0 -translate-x-8" style={{ transitionDelay: '0.2s' }}>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Nome"
                  required
                  value={form.nome}
                  onChange={(e) => handleChange('nome', e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg px-6 py-4 text-gray-900 placeholder-gray-500 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="WhatsApp"
                  required
                  value={form.whatsapp}
                  onChange={(e) => handleChange('whatsapp', e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg px-6 py-4 text-gray-900 placeholder-gray-500 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="E-mail"
                  required
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg px-6 py-4 text-gray-900 placeholder-gray-500 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Assunto"
                  required
                  value={form.assunto}
                  onChange={(e) => handleChange('assunto', e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg px-6 py-4 text-gray-900 placeholder-gray-500 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                />
              </div>
              <div>
                <textarea
                  placeholder="Mensagem"
                  required
                  rows={5}
                  value={form.mensagem}
                  onChange={(e) => handleChange('mensagem', e.target.value)}
                  className="w-full bg-transparent border border-gold/30 rounded-lg px-6 py-4 text-white placeholder-white/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full gold-gradient text-white font-semibold text-lg px-8 py-4 rounded-lg hover:scale-[1.02] transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
              >
                <WhatsAppIcon width={24} height={24} fill="white" />
                Enviar Mensagem
              </button>
            </form>
          </div>
          <div className="transition-all duration-800 opacity-0 translate-x-8" style={{ transitionDelay: '0.4s' }}>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h3 className="text-gray-900 text-2xl font-bold mb-6">Box 40</h3>
              <p className="text-gray-700 text-base leading-relaxed mb-8">
                Especialistas em lavagem automotiva, polimento, troca de óleo e manutenção preventiva. Oferecemos serviços de qualidade com profissionais experientes.
              </p>
              <div className="space-y-6 mb-8">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <CheckCircle size={22} className="lucide lucide-check-circle text-gold flex-shrink-0" />
                    <span className="text-gray-900">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4 pt-6 border-t border-gold/20">
                <div className="flex items-start space-x-3">
                  <MapPin size={22} className="lucide lucide-map-pin text-gold flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Quadra SHS Quadra 2, S/N, Asa Sul - Brasília/DF</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={22} className="lucide lucide-phone text-gold flex-shrink-0" />
                  <a href="tel:+556198323838" className="text-gray-700 hover:text-gold transition-colors">(61) 98432-3838</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={22} className="lucide lucide-mail text-gold flex-shrink-0" />
                  <a href="mailto:contato@box40.com.br" className="text-gray-700 hover:text-gold transition-colors">contato@box40.com.br</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

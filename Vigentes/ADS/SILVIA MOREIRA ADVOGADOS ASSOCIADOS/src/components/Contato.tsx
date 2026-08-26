import { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';

export default function Contato() {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    email: '',
    assunto: '',
    mensagem: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const linhas = [
      'Olá! Gostaria de agendar uma consulta.',
      '',
      `*Nome:* ${form.nome}`,
      `*Telefone:* ${form.telefone}`,
    ];
    if (form.email) linhas.push(`*E-mail:* ${form.email}`);
    if (form.assunto) linhas.push(`*Assunto:* ${form.assunto}`);
    if (form.mensagem) linhas.push(`*Mensagem:* ${form.mensagem}`);
    const texto = encodeURIComponent(linhas.join('\n'));
    window.open(`https://wa.me/559691327966?text=${texto}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 lg:py-32 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] gold-gradient"></div>
            <span className="text-brand-gold-dark text-sm font-semibold tracking-[0.15em] uppercase">
              Contato
            </span>
            <div className="w-10 h-[2px] gold-gradient"></div>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Entre em <span className="text-brand-red">Contato</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Agende uma consulta e conte com nossa equipe para defender seus interesses com excelência e
            dedicação.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3 animate-fade-left">
            <form
              onSubmit={handleSubmit}
              className="bg-brand-cream rounded-2xl p-6 sm:p-8 border border-brand-cream-dark/50"
            >
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-6">Envie sua Mensagem</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Nome Completo *</label>
                  <input
                    type="text"
                    name="nome"
                    required
                    value={form.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Telefone *</label>
                  <input
                    type="tel"
                    name="telefone"
                    required
                    value={form.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors"
                    placeholder="(96) 99999-9999"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Assunto</label>
                  <input
                    type="text"
                    name="assunto"
                    value={form.assunto}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors"
                    placeholder="Área de interesse"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Mensagem</label>
                <textarea
                  rows={4}
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors resize-none"
                  placeholder="Descreva brevemente sua necessidade jurídica..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 gold-gradient text-white font-semibold rounded-lg shadow-lg shadow-brand-gold-dark/20 hover:shadow-xl hover:shadow-brand-gold-dark/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                Enviar via WhatsApp
              </button>
            </form>
          </div>
          <div className="lg:col-span-2 animate-fade-right">
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-brand-red/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">Endereço</p>
                  <p className="text-gray-600 text-sm">R. Jovino Dinoa, 1489 - B</p>
                  <p className="text-gray-600 text-sm">Centro, Macapá - AP, 68900-075</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-brand-red/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">Telefone / WhatsApp</p>
                  <p className="text-gray-600 text-sm">(96) 3223-0853</p>
                  <p className="text-gray-600 text-sm">(96) 99132-7966</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-brand-red/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">Horário de Funcionamento</p>
                  <p className="text-gray-600 text-sm">Segunda a Sexta: 08h às 17h</p>
                  <p className="text-gray-600 text-sm">Não fechamos para o almoço</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-brand-red/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">Canais de Atendimento</p>
                  <p className="text-gray-600 text-sm">Presencial, Telefone</p>
                  <p className="text-gray-600 text-sm">WhatsApp, Virtual</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8174038270095!2d-51.06242482503547!3d0.0388356999607855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d61e1a4ca110e5d%3A0x3fc10ba127d7e7da!2sSILVIA%20MOREIRA%20ADVOGADOS%20ASSOCIADOS!5e0!3m2!1spt-BR!2sbr!4v1770341291475!5m2!1spt-BR!2sbr"
                width="100%"
                height="260"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Silvia Moreira Advogados"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

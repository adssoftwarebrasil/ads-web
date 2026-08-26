import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { WhatsAppIcon } from './icons';

const serviceAreas = ['Sorriso', 'Sinop', 'Lucas do Rio Verde', 'Nova Ubiratã', 'Vera', 'Ipiranga do Norte', 'Santiago do Norte'];

const serviceOptions = ['Drywall', 'Steel Frame', 'Gesso', 'Forro de Gesso', 'Mão de Obra', 'Materiais', 'Outros'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let text = `Olá! Meu nome é ${form.name}.`;
    if (form.service) text += `\nServiço de interesse: ${form.service}.`;
    if (form.phone) text += `\nWhatsApp/Telefone: ${form.phone}.`;
    if (form.email) text += `\nE-mail: ${form.email}.`;
    if (form.message) text += `\n\n${form.message}`;
    const url = `https://wa.me/5566992474531?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 px-4 py-2 rounded-full mb-4">
            <span className="text-brand-orange text-sm font-semibold uppercase tracking-wider">Fale Conosco</span>
          </div>
          <h2 className="section-title mb-4">
            Solicite seu <span className="text-brand-orange">Orçamento Gratuito</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Preencha o formulário e entraremos em contato pelo WhatsApp em até 1 hora útil. Atendemos Sorriso e toda a região.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-brand-dark rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-5">Informações de Contato</h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/5566992474531"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="bg-brand-orange/20 rounded-xl p-2.5 flex-shrink-0 group-hover:bg-brand-orange transition-colors duration-200">
                    <Phone className="lucide lucide-phone text-brand-orange group-hover:text-white transition-colors" width={16} height={16} />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wide mb-0.5">WhatsApp</div>
                    <div className="text-white font-medium text-sm">(66) 9 9247-4531</div>
                  </div>
                </a>
                <a href="mailto:financeiro@sorrimac.com.br" className="flex items-start gap-3 group">
                  <div className="bg-brand-orange/20 rounded-xl p-2.5 flex-shrink-0 group-hover:bg-brand-orange transition-colors duration-200">
                    <Mail className="lucide lucide-mail text-brand-orange group-hover:text-white transition-colors" width={16} height={16} />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wide mb-0.5">E-mail</div>
                    <div className="text-white font-medium text-sm">financeiro@sorrimac.com.br</div>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <div className="bg-brand-orange/20 rounded-xl p-2.5 flex-shrink-0">
                    <MapPin className="lucide lucide-map-pin text-brand-orange" width={16} height={16} />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wide mb-0.5">Endereço</div>
                    <div className="text-white font-medium text-sm">R. Caracas, 416 - Santa Mônica</div>
                    <div className="text-white/60 text-sm">Sorriso - MT, 78894-118</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-brand-orange/20 rounded-xl p-2.5 flex-shrink-0">
                    <Clock className="lucide lucide-clock text-brand-orange" width={16} height={16} />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wide mb-0.5">Horário</div>
                    <div className="text-white font-medium text-sm">Seg-Sex: 07h às 11h</div>
                    <div className="text-white/60 text-sm">13h às 17h</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-white/50 text-xs mb-3 uppercase tracking-wide">Área de Atendimento</p>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span key={area} className="text-xs bg-white/10 text-white/80 px-2.5 py-1 rounded-full">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-52 border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.377644882633!2d-55.724689824930515!3d-12.55733198772132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a0b32bf82f47e5%3A0xd8446b7ca2d1bb76!2sSorrimac%20Gesso%20-%20Drywall%20e%20Steel%20Frame!5e0!3m2!1spt-BR!2sbr!4v1771524257475!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Sorrimac"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-brand-dark mb-6">Enviar Mensagem via WhatsApp</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1.5">
                    Seu Nome <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Ex: João Silva"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1.5">
                    WhatsApp / Telefone <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(66) 9 9999-9999"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all duration-200"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1.5">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1.5">
                    Serviço de Interesse <span className="text-brand-orange">*</span>
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all duration-200 bg-white"
                  >
                    <option value="">Selecione...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-brand-dark mb-1.5">Mensagem</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Descreva seu projeto, quantidade de metros, cidade, etc..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all duration-200 resize-none"
                ></textarea>
              </div>
              <button type="submit" className="w-full btn-primary justify-center py-4 text-base shadow-lg shadow-brand-orange/20">
                <WhatsAppIcon className="w-5 h-5" />
                Enviar pelo WhatsApp
                <Send className="lucide lucide-send" width={16} height={16} />
              </button>
              <p className="text-center text-xs text-brand-gray-mid mt-3">
                Você será redirecionado para o WhatsApp com sua mensagem pré-preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

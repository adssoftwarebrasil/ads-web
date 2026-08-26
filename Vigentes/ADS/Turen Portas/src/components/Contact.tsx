import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    product: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      `Olá! Meu nome é ${form.name}.`,
      `Telefone: ${form.phone}`,
    ];
    if (form.email) lines.push(`E-mail: ${form.email}`);
    if (form.product) lines.push(`Produto de interesse: ${form.product}`);
    if (form.message) lines.push(`Mensagem: ${form.message}`);
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/556699118484?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 bg-[#f8f5f1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#DE8F52] font-semibold text-sm uppercase tracking-widest">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#005143] mt-3 mb-4">
            Solicite Seu Orçamento Sem Compromisso
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Nossa equipe está pronta para te ajudar a encontrar a porta ideal para o seu projeto.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#005143] mb-6">Informações de Contato</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#005143] flex items-center justify-center shrink-0">
                    <MapPin width={18} height={18} className="text-[#ECC4A4]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#005143] text-sm">Endereço</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      R. das Nogueiras, 1150 – Sala A<br />
                      St. Comercial, Sinop – MT, 78550-240
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#005143] flex items-center justify-center shrink-0">
                    <Phone width={18} height={18} className="text-[#ECC4A4]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#005143] text-sm">Telefone / WhatsApp</p>
                    <a
                      href="tel:+556699118484"
                      className="text-[#DE8F52] hover:text-[#c47a40] text-sm font-medium transition-colors"
                    >
                      (66) 9 9911-8484
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#005143] flex items-center justify-center shrink-0">
                    <Clock width={18} height={18} className="text-[#ECC4A4]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#005143] text-sm">Horário de Atendimento</p>
                    <p className="text-gray-600 text-sm">
                      Segunda a Sexta<br />
                      07:30 – 11:30 | 13:30 – 17:30
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.7089991764406!2d-55.51096842494199!3d-11.855631388366485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a77f9961b114d1%3A0x8c471a6d1aa2d8b4!2sTuren%20Portas!5e0!3m2!1spt-BR!2sbr!4v1772813494572!5m2!1spt-BR!2sbr"
                width="100%"
                height="220"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Turen Portas"
                style={{ border: '0px', display: 'block' }}
              ></iframe>
            </div>
          </div>
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#005143] mb-2">
                    Nome completo <span className="text-[#DE8F52]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005143]/40 focus:border-[#005143] transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#005143] mb-2">
                    Telefone / WhatsApp <span className="text-[#DE8F52]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(66) 9 0000-0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005143]/40 focus:border-[#005143] transition-all duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#005143] mb-2">E-mail</label>
                <input
                  type="email"
                  name="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005143]/40 focus:border-[#005143] transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#005143] mb-2">
                  Produto de interesse
                </label>
                <select
                  name="product"
                  value={form.product}
                  onChange={(e) => setForm({ ...form, product: e.target.value })}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005143]/40 focus:border-[#005143] transition-all duration-200"
                >
                  <option value="">Selecione um produto</option>
                  <option value="Portas WPC Premium">Portas WPC Premium</option>
                  <option value="Portas PVC Premium">Portas PVC Premium</option>
                  <option value="Linha Moderna Interior">Linha Moderna Interior</option>
                  <option value="Outro / Não sei ainda">Outro / Não sei ainda</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#005143] mb-2">Mensagem</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Descreva seu projeto ou dúvida..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005143]/40 focus:border-[#005143] transition-all duration-200 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#DE8F52] hover:bg-[#c47a40] text-white py-4 rounded-xl font-bold text-base transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 shadow-md"
              >
                <Send width={18} height={18} />
                Enviar pelo WhatsApp
              </button>
              <p className="text-center text-xs text-gray-400">
                Você será redirecionado para o WhatsApp com seus dados preenchidos.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

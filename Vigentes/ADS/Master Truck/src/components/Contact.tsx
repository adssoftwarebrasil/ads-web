import { useState } from 'react';
import { Send, Phone, Mail, Clock } from 'lucide-react';

const WHATSAPP_NUMBER = '556596363222';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá! Meu nome é ${form.name}.\nTelefone: ${form.phone}\nServiço desejado: ${form.service}\nMensagem: ${form.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const inputClass =
    'w-full bg-[#FFFFFD]/[0.04] border border-[#FFFFFD]/10 text-[#FFFFFD] placeholder-[#FFFFFD]/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#F07013]/60 transition-colors duration-200';

  return (
    <section id="contato" className="bg-[#0a0a0a] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <span className="text-[#F07013] text-sm font-semibold tracking-widest uppercase">Fale Conosco</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#FFFFFD] mb-6 leading-tight">
              Pronto para Resolver o Problema do Seu Caminhão?
            </h2>
            <p className="text-[#FFFFFD]/60 text-base leading-relaxed mb-10">
              Preencha o formulário e entraremos em contato pelo WhatsApp. Orçamento rápido, atendimento transparente e solução garantida.
            </p>

            <div className="space-y-5">
              <a href="tel:+556596363222" className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-[#F07013]/10 group-hover:bg-[#F07013]/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                  <Phone size={18} className="text-[#F07013]" />
                </div>
                <div>
                  <p className="text-[#FFFFFD]/40 text-xs uppercase tracking-wide">Telefone / WhatsApp</p>
                  <p className="text-[#FFFFFD] font-semibold">(65) 9 9636-3222</p>
                </div>
              </a>
              <a href="mailto:master_diagnostico@outlook.com" className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-[#F07013]/10 group-hover:bg-[#F07013]/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                  <Mail size={18} className="text-[#F07013]" />
                </div>
                <div>
                  <p className="text-[#FFFFFD]/40 text-xs uppercase tracking-wide">E-mail</p>
                  <p className="text-[#FFFFFD] font-semibold">master_diagnostico@outlook.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-[#F07013]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-[#F07013]" />
                </div>
                <div>
                  <p className="text-[#FFFFFD]/40 text-xs uppercase tracking-wide">Horário de Atendimento</p>
                  <p className="text-[#FFFFFD] font-semibold">Seg–Sex: 07h30 às 18h00</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-[#FFFFFD]/[0.03] border border-[#FFFFFD]/10 rounded-2xl p-8 space-y-5">
              <div>
                <label className="text-[#FFFFFD]/50 text-xs uppercase tracking-wide mb-2 block">Nome completo</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-[#FFFFFD]/50 text-xs uppercase tracking-wide mb-2 block">Telefone / WhatsApp</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(65) 9 9999-9999"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-[#FFFFFD]/50 text-xs uppercase tracking-wide mb-2 block">Serviço desejado</label>
                <select
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" disabled>Selecione um serviço</option>
                  <option>Reparo de Módulo Eletrônico</option>
                  <option>Reparo de ECA / Cervo ECA</option>
                  <option>Reparo de Bomba do Arla</option>
                  <option>Reparo de Chicote</option>
                  <option>Limpeza de Catalisador</option>
                  <option>Diagnóstico Eletrônico</option>
                  <option>Compra de Peças</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label className="text-[#FFFFFD]/50 text-xs uppercase tracking-wide mb-2 block">Mensagem (opcional)</label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Descreva o problema ou dúvida..."
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#F07013] hover:bg-[#d4600f] text-[#FFFFFD] font-bold text-base py-4 rounded-lg transition-colors duration-200 shadow-lg shadow-[#F07013]/20"
              >
                <Send size={16} />
                Enviar via WhatsApp
              </button>
              <p className="text-[#FFFFFD]/30 text-xs text-center">
                Você será redirecionado para o WhatsApp com os dados preenchidos.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

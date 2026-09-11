import { useState, useEffect, useRef } from 'react';
import { Send, User, Phone, BookOpen, MessageSquare } from 'lucide-react';

const courseOptions = [
  'Técnico em Enfermagem',
  'Técnico em Estética',
  'Técnico em Radiologia',
  'Técnico em Segurança do Trabalho',
  'Técnico em Agropecuária',
  'Técnico em Próteses Dentárias',
  'Instrumentação Cirúrgica',
  'Sala de Vacinas',
  'Atendimento Pré-Hospitalar',
  'Aplicação de Injetáveis',
  'Socorrista e Resgatista',
  'Enfermagem do Trabalho',
  'Outro / Tenho dúvidas',
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', course: '', message: '' });
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá! Gostaria de mais informações sobre o Cientec.\n\n` +
      `*Nome:* ${form.name}\n` +
      `*Telefone:* ${form.phone}\n` +
      `*Curso de interesse:* ${form.course}\n` +
      (form.message ? `*Mensagem:* ${form.message}` : '')
    );
    window.open(`https://wa.me/556699893074?text=${text}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contato"
      ref={ref}
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgb(62,64,150) 0%, rgb(56,73,156) 60%, rgb(5,145,211) 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div
            className={`flex-1 text-white transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 bg-white/20 text-white">
              Fale Conosco
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6">
              Dê o Primeiro Passo para Sua Nova Carreira
            </h2>

            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Preencha o formulário e nossa equipe entrará em contato pelo WhatsApp com todas as informações sobre matrículas, valores e datas de início.
            </p>

            <div className="space-y-5">
              {[
                { icon: '📍', text: 'R. das Azaléias, 2095 - St. Comercial, Sinop - MT' },
                { icon: '🕐', text: 'Presencial: 13h às 22h | WhatsApp: Horário Integral' },
                { icon: '📧', text: 'cientec_sinop@hotmail.com' },
                { icon: '📱', text: '(66) 9 9989-3074' },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3 text-white/85">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <span className="text-sm font-medium leading-snug">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`flex-1 w-full max-w-xl transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-7 sm:p-10">
              <h3 className="text-2xl font-black text-gray-900 mb-2">Solicite Informações</h3>
              <p className="text-sm text-gray-500 mb-7">Responderemos pelo WhatsApp em instantes.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                    Nome Completo *
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={{ '--tw-ring-color': 'rgb(62,64,150)' } as React.CSSProperties}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                    WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(66) 9 0000-0000"
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={{ '--tw-ring-color': 'rgb(62,64,150)' } as React.CSSProperties}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                    Curso de Interesse *
                  </label>
                  <div className="relative">
                    <BookOpen size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <select
                      name="course"
                      required
                      value={form.course}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all appearance-none bg-white"
                      style={{ '--tw-ring-color': 'rgb(62,64,150)' } as React.CSSProperties}
                    >
                      <option value="">Selecione um curso...</option>
                      {courseOptions.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                    Mensagem (opcional)
                  </label>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Alguma dúvida ou informação adicional?"
                      rows={3}
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none"
                      style={{ '--tw-ring-color': 'rgb(62,64,150)' } as React.CSSProperties}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-white font-bold flex items-center justify-center gap-2.5 shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl text-base"
                  style={{ backgroundColor: 'rgb(188, 51, 54)' }}
                >
                  <Send size={18} />
                  Enviar pelo WhatsApp
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Ao enviar, você será redirecionado para o WhatsApp do Cientec.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

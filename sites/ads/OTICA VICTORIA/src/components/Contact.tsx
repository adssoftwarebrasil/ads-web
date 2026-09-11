import { useEffect, useRef, useState, FormEvent } from 'react';
import { MessageCircle, Send, User, Phone, FileText, Glasses } from 'lucide-react';

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Estado inicial do formulário
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'Óculos de Grau', // Valor padrão
    message: ''
  });

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Construção da mensagem para o WhatsApp
    // Como não é obrigatório, verificamos se tem valor antes de adicionar à mensagem
    let message = `Olá! Tenho interesse em: *${formData.subject}*.%0A`;

    if (formData.name.trim()) {
      message += `%0AMeu nome é: ${formData.name}`;
    }
    
    if (formData.phone.trim()) {
      message += `%0Ameu telefone: ${formData.phone}`;
    }

    if (formData.message.trim()) {
      message += `%0A%0AMensagem: ${formData.message}`;
    }

    const whatsappUrl = `https://wa.me/5527998695803?text=${message}`;

    window.open(whatsappUrl, '_blank');

    // Limpar formulário (opcional)
    setFormData({
      name: '',
      phone: '',
      subject: 'Óculos de Grau',
      message: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[#fcfcfa]"
    >
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#3b2720]/5 text-[#3b2720] text-sm font-semibold tracking-wider mb-4 border border-[#3b2720]/10">
            FALE CONOSCO
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#3b2720] mb-4">
            Como podemos ajudar?
          </h2>
          <p className="text-lg md:text-xl text-[#3b2720]/70 max-w-2xl mx-auto">
            Tem dúvida sobre algum modelo ou precisa de um orçamento? 
            Envie uma mensagem direto para nosso WhatsApp.
          </p>
        </div>

        {/* Card do Formulário */}
        <div
          className={`max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-[#3b2720]/5">
            
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-[#3b2720]/10">
              <div className="bg-[#3b2720]/10 text-[#3b2720] p-4 rounded-2xl">
                <MessageCircle size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-[#3b2720]">
                  Mensagem Rápida
                </h3>
                <p className="text-[#3b2720]/60 text-sm">
                  Preencha apenas o que desejar
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Campo Seleção de Interesse */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-[#3b2720] font-semibold mb-2 text-sm"
                >
                  Tenho interesse em:
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3b2720]/40 group-focus-within:text-[#3b2720] transition-colors">
                    <Glasses size={20} />
                  </div>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#fcfcfa] border border-[#3b2720]/10 focus:border-[#3b2720]/50 focus:outline-none focus:ring-4 focus:ring-[#3b2720]/5 transition-all appearance-none cursor-pointer text-[#3b2720]"
                  >
                    <option value="Óculos de Grau">Óculos de Grau</option>
                    <option value="Óculos Solar">Óculos Solar</option>
                    <option value="Lentes de Contato">Lentes de Contato</option>
                    <option value="Infantil">Linha Infantil</option>
                    <option value="Outros">Outros Assuntos</option>
                  </select>
                  {/* Seta customizada do select */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#3b2720]/40">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              {/* Campo Nome (Opcional) */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#3b2720] font-semibold mb-2 text-sm"
                >
                  Nome <span className="text-[#3b2720]/40 font-normal">(Opcional)</span>
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3b2720]/40 group-focus-within:text-[#3b2720] transition-colors">
                    <User size={20} />
                  </div>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#fcfcfa] border border-[#3b2720]/10 focus:border-[#3b2720]/50 focus:outline-none focus:ring-4 focus:ring-[#3b2720]/5 transition-all placeholder:text-[#3b2720]/30"
                    placeholder="Seu nome"
                  />
                </div>
              </div>

              {/* Campo Telefone (Opcional) */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-[#3b2720] font-semibold mb-2 text-sm"
                >
                  Telefone <span className="text-[#3b2720]/40 font-normal">(Opcional)</span>
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3b2720]/40 group-focus-within:text-[#3b2720] transition-colors">
                    <Phone size={20} />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#fcfcfa] border border-[#3b2720]/10 focus:border-[#3b2720]/50 focus:outline-none focus:ring-4 focus:ring-[#3b2720]/5 transition-all placeholder:text-[#3b2720]/30"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              {/* Campo Mensagem (Opcional) */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[#3b2720] font-semibold mb-2 text-sm"
                >
                  Mensagem <span className="text-[#3b2720]/40 font-normal">(Opcional)</span>
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-5 text-[#3b2720]/40 group-focus-within:text-[#3b2720] transition-colors">
                    <FileText size={20} />
                  </div>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={3}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#fcfcfa] border border-[#3b2720]/10 focus:border-[#3b2720]/50 focus:outline-none focus:ring-4 focus:ring-[#3b2720]/5 transition-all placeholder:text-[#3b2720]/30 resize-none"
                    placeholder="Escreva sua dúvida aqui..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                // Botão agora usa a cor da marca (#3b2720) em vez do verde do WhatsApp
                className="w-full bg-[#3b2720] text-[#fffffa] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#5a3e32] transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-3 active:scale-95 duration-200"
              >
                <Send size={20} />
                Enviar Mensagem
              </button>

              <p className="text-center text-[#3b2720]/40 text-xs mt-4">
                Você será redirecionado para o WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
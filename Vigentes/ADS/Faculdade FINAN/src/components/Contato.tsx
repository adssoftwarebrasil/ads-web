import { useState, FormEvent, useEffect, useRef } from 'react';
import { Send, User, Mail, Phone, BookOpen, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    curso: '',
    mensagem: ''
  });

  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular um pequeno delay para melhor UX
    await new Promise(resolve => setTimeout(resolve, 500));

    const message = `*Nova solicitação de contato - FINAN*\n\n` +
      `👤 *Nome:* ${formData.nome}\n` +
      `📧 *E-mail:* ${formData.email}\n` +
      `📱 *Telefone:* ${formData.telefone}\n` +
      `🎓 *Curso de Interesse:* ${formData.curso || 'Não especificado'}\n\n` +
      `💬 *Mensagem:*\n${formData.mensagem}`;

    const whatsappUrl = `https://wa.me/5567999780073?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);

    // Reset form after submission
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      curso: '',
      mensagem: ''
    });
  };

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 10) {
      return cleaned.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    }
    return cleaned.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
  };

  const inputFields = [
    {
      id: 'nome',
      label: 'Nome Completo',
      type: 'text',
      icon: User,
      placeholder: 'Digite seu nome completo',
      required: true
    },
    {
      id: 'email',
      label: 'E-mail',
      type: 'email',
      icon: Mail,
      placeholder: 'seu.email@exemplo.com',
      required: true
    },
    {
      id: 'telefone',
      label: 'Telefone',
      type: 'tel',
      icon: Phone,
      placeholder: '(67) 99999-9999',
      required: true
    }
  ];

  return (
    <section 
      id="formulario"
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden bg-white"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-red-100 to-orange-100 rounded-full filter blur-3xl opacity-30"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-red-50 shadow-sm mb-6 text-sm font-semibold" style={{ color: '#074785' }}>
              <Sparkles size={18} />
              Fale Conosco
            </span>
          </div>

          <h2 
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ color: '#074785' }}
          >
            Transforme Seu{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Futuro</span>
              <span
                className="absolute bottom-2 left-0 w-full h-3 -z-0"
                style={{ backgroundColor: '#e4100f', opacity: 0.3 }}
              ></span>
            </span>
            {' '}Hoje
          </h2>

          <p 
            className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Preencha o formulário abaixo e nossa equipe entrará em contato com você em breve
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Informações laterais */}
          <div className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Card de benefícios */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle size={28} />
                Por que escolher a FINAN?
              </h3>
              <ul className="space-y-4">
                {[
                  'Curso de Direito reconhecido pelo MEC',
                  'Núcleo de Prática Jurídica (NPJ) ativo',
                  'Preparação focada para OAB',
                  'Corpo docente especializado',
                  'Localização central em Nova Andradina',
                  'Infraestrutura completa'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card de atendimento rápido */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2" style={{ borderColor: '#e4100f' }}>
              <h4 className="text-xl font-bold mb-3" style={{ color: '#074785' }}>
                Precisa de Atendimento Rápido?
              </h4>
              <p className="text-gray-600 mb-4">
                Fale diretamente com nossa equipe pelo WhatsApp
              </p>
              
                <a href="https://wa.me/5567999780073?text=Olá! Preciso de atendimento urgente."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl text-white font-semibold transition-all hover:scale-105 shadow-md"
                style={{ backgroundColor: '#25D366' }}
              >
                <Phone size={20} />
                <span>WhatsApp Direto</span>
              </a>
            </div>

            {/* Horário de atendimento */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
              <h4 className="text-lg font-bold mb-4" style={{ color: '#074785' }}>
                📞 Horário de Atendimento
              </h4>
              <div className="space-y-2 text-gray-700">
                <p className="flex justify-between">
                  <span className="font-semibold">Segunda a Sexta:</span>
                  <span>12h às 22h</span>
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  *Resposta por formulário em até 24h
                </p>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Campos de texto */}
                {inputFields.map((field) => {
                  const Icon = field.icon;
                  const isFocused = focusedField === field.id;

                  return (
                    <div key={field.id}>
                      <label 
                        htmlFor={field.id} 
                        className="block text-sm font-bold mb-2 flex items-center gap-2"
                        style={{ color: '#074785' }}
                      >
                        <Icon size={18} />
                        {field.label} {field.required && <span style={{ color: '#e4100f' }}>*</span>}
                      </label>
                      <div className="relative">
                        <input
                          type={field.type}
                          id={field.id}
                          required={field.required}
                          value={formData[field.id as keyof typeof formData]}
                          onChange={(e) => {
                            const value = field.id === 'telefone' 
                              ? formatPhone(e.target.value)
                              : e.target.value;
                            setFormData({ ...formData, [field.id]: value });
                          }}
                          onFocus={() => setFocusedField(field.id)}
                          onBlur={() => setFocusedField(null)}
                          placeholder={field.placeholder}
                          className="w-full px-4 py-4 rounded-xl border-2 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                          style={{ 
                            borderColor: isFocused ? '#074785' : '#e5e7eb',
                            transform: isFocused ? 'scale(1.02)' : 'scale(1)'
                          }}
                        />
                        {isFocused && (
                          <div 
                            className="absolute -bottom-1 left-0 h-1 rounded-full transition-all duration-300"
                            style={{ 
                              backgroundColor: '#e4100f',
                              width: '100%'
                            }}
                          />
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* Select de curso */}
                <div>
                  <label
                    htmlFor="curso"
                    className="block text-sm font-bold mb-2 flex items-center gap-2"
                    style={{ color: '#074785' }}
                  >
                    <BookOpen size={18} />
                    Tenho Interesse Em
                  </label>
                  <div className="relative">
                    <select
                      id="curso"
                      value={formData.curso}
                      onChange={(e) => setFormData({ ...formData, curso: e.target.value })}
                      onFocus={() => setFocusedField('curso')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-4 rounded-xl border-2 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                      style={{
                        borderColor: focusedField === 'curso' ? '#074785' : '#e5e7eb'
                      }}
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="Bacharelado em Direito">⚖️ Bacharelado em Direito</option>
                      <option value="Pós-Graduação em Direito">🎓 Pós-Graduação em Direito</option>
                      <option value="Informações Gerais">ℹ️ Informações Gerais</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1L6 6L11 1" stroke="#074785" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Textarea */}
                <div>
                  <label 
                    htmlFor="mensagem" 
                    className="block text-sm font-bold mb-2 flex items-center gap-2"
                    style={{ color: '#074785' }}
                  >
                    <MessageSquare size={18} />
                    Mensagem <span style={{ color: '#e4100f' }}>*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="mensagem"
                      required
                      rows={5}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      onFocus={() => setFocusedField('mensagem')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Conte-nos mais sobre seus objetivos e como podemos ajudá-lo..."
                      className="w-full px-4 py-4 rounded-xl border-2 focus:outline-none transition-all duration-300 resize-none bg-gray-50 focus:bg-white"
                      style={{ 
                        borderColor: focusedField === 'mensagem' ? '#074785' : '#e5e7eb'
                      }}
                    />
                    {focusedField === 'mensagem' && (
                      <div 
                        className="absolute -bottom-1 left-0 h-1 rounded-full transition-all duration-300"
                        style={{ 
                          backgroundColor: '#e4100f',
                          width: '100%'
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Botão de submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full py-5 rounded-xl text-white font-bold text-lg transition-all hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden shadow-lg hover:shadow-2xl"
                  style={{ backgroundColor: '#e4100f' }}
                >
                  {/* Efeito de brilho */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 group-hover:animate-shimmer"></div>
                  
                  <span className="relative flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={22} />
                        Enviar Mensagem
                      </>
                    )}
                  </span>
                </button>

                <p className="text-center text-sm text-gray-500">
                  Ao enviar, você será redirecionado para o WhatsApp para confirmar sua mensagem
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}
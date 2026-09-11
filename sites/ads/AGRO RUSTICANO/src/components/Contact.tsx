import { useState, type FormEvent } from 'react';
import { User, MessageSquare, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${name}.\n` +
      `E-mail: ${email}\n` +
      `Telefone: ${phone}\n\n` +
      `${message}`;
    window.open(`https://wa.me/551235122848?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(54,59,27)] mb-4">
            Entre em <span className="text-[rgb(186,213,51)]">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tem alguma dúvida ou precisa de um orçamento? Estamos prontos para atender você!
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-gradient-to-br from-[rgb(54,59,27)] to-[rgb(74,79,37)] p-8 md:p-12 text-white">
                <h3 className="text-3xl font-bold mb-6">Fale Conosco</h3>
                <p className="text-gray-200 leading-relaxed mb-8">
                  Preencha o formulário ao lado e entraremos em contato via WhatsApp com todas as
                  informações que você precisa.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[rgb(186,213,51)] p-3 rounded-lg flex-shrink-0">
                      <User width={24} height={24} className="text-[rgb(54,59,27)]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Atendimento Personalizado</h4>
                      <p className="text-gray-300 text-sm">
                        Nossa equipe está pronta para ajudar você a encontrar o produto ideal
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[rgb(186,213,51)] p-3 rounded-lg flex-shrink-0">
                      <MessageSquare width={24} height={24} className="text-[rgb(54,59,27)]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Resposta Rápida</h4>
                      <p className="text-gray-300 text-sm">
                        Respondemos suas mensagens rapidamente pelo WhatsApp
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[rgb(186,213,51)] p-3 rounded-lg flex-shrink-0">
                      <Mail width={24} height={24} className="text-[rgb(54,59,27)]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Orçamento Sem Compromisso</h4>
                      <p className="text-gray-300 text-sm">
                        Solicite orçamentos e tire suas dúvidas sem compromisso
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-sm text-gray-300">
                    Ao enviar este formulário, você será redirecionado para o WhatsApp com sua mensagem
                    pré-preenchida.
                  </p>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[rgb(54,59,27)] mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[rgb(186,213,51)] focus:outline-none transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[rgb(54,59,27)] mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[rgb(186,213,51)] focus:outline-none transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[rgb(54,59,27)] mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[rgb(186,213,51)] focus:outline-none transition-colors"
                      placeholder="(12) 98765-4321"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[rgb(54,59,27)] mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[rgb(186,213,51)] focus:outline-none transition-colors resize-none"
                      placeholder="Como podemos ajudar você?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[rgb(186,213,51)] text-[rgb(54,59,27)] py-4 rounded-lg font-bold text-lg hover:bg-[rgb(166,193,31)] transition-all hover:shadow-xl flex items-center justify-center space-x-2 group"
                  >
                    <span>Enviar Mensagem pelo WhatsApp</span>
                    <Send width={20} height={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-xs text-gray-500 text-center">* Campos obrigatórios</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

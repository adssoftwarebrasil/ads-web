import { useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const subjects = [
  'Peças para Moto',
  'Revisão Completa',
  'Manutenção de Motor',
  'Elétrica',
  'Freios e Suspensão',
  'Customização',
  'Outro',
];

function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits.replace(/(\d{0,2})/, '($1');
  if (digits.length <= 7) return digits.replace(/(\d{2})(\d{0,5})/, '($1) $2');
  return digits.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
}

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Olá! Meu nome é ${name}.\nTelefone: ${phone}\nAssunto: ${subject}${
      message ? `\nMensagem: ${message}` : ''
    }`;
    const url = `https://wa.me/559591772210?text=${encodeURIComponent(body)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contato"
      className="bg-gradient-to-br from-[#F97316] via-[#F97316] to-[#DC2626] py-20 md:py-28 lg:py-32"
    >
      <div className="max-w-[640px] mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Pronto para Transformar Sua Moto?
          </h2>
          <p className="text-lg text-white/90">
            Entre em contato agora e receba atendimento personalizado. Estamos prontos para ajudar!
          </p>
        </div>
        <form className="space-y-4 mb-10" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Digite seu nome"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3.5 rounded-lg border-0 focus:outline-none focus:ring-4 focus:ring-white/30 transition-shadow"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="(95) 99999-9999"
              required
              maxLength={15}
              value={phone}
              onChange={(e) => setPhone(maskPhone(e.target.value))}
              className="w-full px-4 py-3.5 rounded-lg border-0 focus:outline-none focus:ring-4 focus:ring-white/30 transition-shadow"
            />
          </div>
          <div>
            <select
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-3.5 rounded-lg border-0 focus:outline-none focus:ring-4 focus:ring-white/30 transition-shadow text-gray-700"
            >
              <option value="">Selecione...</option>
              {subjects.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <textarea
              placeholder="Conte-nos mais sobre o que você precisa..."
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3.5 rounded-lg border-0 focus:outline-none focus:ring-4 focus:ring-white/30 transition-shadow resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-12 py-4 bg-white text-[#F97316] font-bold text-base uppercase rounded-lg hover:bg-gray-100 hover:scale-102 hover:shadow-2xl transition-all duration-200"
          >
            ENVIAR MENSAGEM
          </button>
        </form>
        <div className="text-center">
          <p className="text-white mb-4">Ou se preferir, fale conosco diretamente:</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/559591772210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 border-2 border-white text-white font-semibold text-sm uppercase rounded-lg hover:bg-white hover:text-[#F97316] transition-all"
            >
              <MessageCircle className="lucide lucide-message-circle w-5 h-5" />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+559591772210"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 border-2 border-white text-white font-semibold text-sm uppercase rounded-lg hover:bg-white hover:text-[#F97316] transition-all"
            >
              <Phone className="lucide lucide-phone w-5 h-5" />
              <span>Telefone</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

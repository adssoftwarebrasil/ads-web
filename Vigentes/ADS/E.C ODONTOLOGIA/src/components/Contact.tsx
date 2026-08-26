import { useState, FormEvent } from 'react';
import { MapPin, Clock, Instagram, ArrowRight } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  clinic: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    clinic: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Me chamo *${form.name}*%0A` +
      `Clínica/Consultório: *${form.clinic || 'Não informado'}*%0A` +
      `Telefone: *${form.phone}*%0A` +
      `Mensagem: ${form.message || 'Gostaria de solicitar um orçamento.'}`;
    window.open(`http://wa.me/559181685427?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-black" />
              <span className="text-black/50 text-xs tracking-[0.25em] uppercase font-medium">
                Entre em Contato
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
              Solicite seu
              <br />
              <span className="italic font-light">orçamento</span>
            </h2>

            <p className="text-gray-500 text-base leading-relaxed mb-10">
              Preencha o formulário e entraremos em contato via WhatsApp com uma
              proposta personalizada para as necessidades da sua clínica.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-black flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-black/40 tracking-widest uppercase mb-1">Endereço</div>
                  <div className="text-black text-sm font-medium">Av. João Paulo II, 1503 - Marco</div>
                  <div className="text-gray-500 text-sm">Belém - PA, 66075-000</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-black flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-black/40 tracking-widest uppercase mb-1">Horário</div>
                  <div className="text-black text-sm font-medium">Segunda a Sexta</div>
                  <div className="text-gray-500 text-sm">08:00 às 18:00</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-black flex items-center justify-center flex-shrink-0">
                  <Instagram size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-black/40 tracking-widest uppercase mb-1">Instagram</div>
                  <a
                    href="https://www.instagram.com/ec.odontologiarep/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black text-sm font-medium hover:underline"
                  >
                    @ec.odontologiarep
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3988.5653681824188!2d-48.4572271!3d-1.4359512!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48d0f52253257%3A0xedefd44f87339b5b!2sE.%20C.%20Odontologia%20Representa%C3%A7%C3%B5es!5e0!3m2!1spt-BR!2sbr!4v1774876573094!5m2!1spt-BR!2sbr"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização E.C. Odontologia"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-8 sm:p-10 border border-gray-100">
            <h3 className="text-xl font-bold text-black mb-2">Fale Conosco</h3>
            <p className="text-gray-500 text-sm mb-8">
              Seu orçamento será enviado via WhatsApp em instantes.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-black/60 tracking-widest uppercase mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Dr. João Silva"
                  className="w-full bg-white border border-gray-200 text-black px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors duration-200 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-black/60 tracking-widest uppercase mb-2">
                  WhatsApp / Telefone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(91) 9 9999-9999"
                  className="w-full bg-white border border-gray-200 text-black px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors duration-200 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-black/60 tracking-widest uppercase mb-2">
                  Nome da Clínica / Consultório
                </label>
                <input
                  type="text"
                  name="clinic"
                  value={form.clinic}
                  onChange={handleChange}
                  placeholder="Clínica Odontológica XYZ"
                  className="w-full bg-white border border-gray-200 text-black px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors duration-200 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-black/60 tracking-widest uppercase mb-2">
                  O que você precisa?
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Ex: Preciso de uma cadeira odontológica e um compressor silencioso..."
                  className="w-full bg-white border border-gray-200 text-black px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors duration-200 placeholder-gray-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="group w-full bg-black text-white py-4 text-sm font-semibold tracking-wider hover:bg-gray-900 transition-colors duration-200 flex items-center justify-center gap-3"
              >
                ENVIAR VIA WHATSAPP
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

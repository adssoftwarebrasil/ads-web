import { useState, FormEvent } from 'react';
import { MapPin, Clock, Phone, Send } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'Av. João Pinheiro, 807 - Centro, Uberlândia - MG, 38400-126',
  },
  {
    icon: Clock,
    label: 'Horário de Funcionamento',
    value: 'Segunda a Sexta, 06:00 às 17:30',
  },
  {
    icon: Phone,
    label: 'Telefone Principal',
    value: '(34) 3236-7444',
  },
];

export default function Contact() {
  const { ref, isInView } = useInView();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}.\nTelefone: ${form.phone}\nEmpresa: ${form.company}\nMensagem: ${form.message}`;
    const encoded = encodeURIComponent(text);
    window.open(
      `https://wa.me/553497621254?text=${encoded}`,
      '_blank'
    );
  };

  return (
    <section id="contato" className="py-24 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-brand-500 font-semibold text-sm tracking-wider uppercase">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mt-3 mb-4">
            Entre em Contato Conosco
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Estamos prontos para atender sua empresa. Preencha o formulário ou
            entre em contato diretamente.
          </p>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-700 delay-200 ${
              isInView
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                    placeholder="(34) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-500 hover:bg-brand-600 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/25 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>

          <div
            className={`transition-all duration-700 delay-400 ${
              isInView
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="space-y-6 mb-8">
              {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-brand-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900 text-sm">
                      {label}
                    </div>
                    <div className="text-neutral-500 text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.341342608975!2d-48.28075332479867!3d-18.916279482255703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445ad77bd1b71%3A0x1207e93a604fac88!2sAdvice%20Medicina%20e%20Engenharia%20do%20Trabalho!5e0!3m2!1spt-BR!2sbr!4v1770404386290!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Advice"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

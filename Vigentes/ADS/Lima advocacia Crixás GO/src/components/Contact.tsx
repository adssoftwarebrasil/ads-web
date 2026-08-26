import { useState, FormEvent } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

const WA_NUMBER = '5562981442263';

type FormData = {
  name: string;
  phone: string;
  email: string;
  area: string;
  message: string;
};

const AREAS = [
  'Direito Previdenciário',
  'Direito do Trabalho',
  'Aposentadoria / Benefício INSS',
  'Recurso de Benefício Negado',
  'Ação Trabalhista',
  'Consultoria Jurídica',
  'Outro',
];

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    area: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá! Me chamo *${form.name}*.\n\n` +
        `📞 Telefone: ${form.phone}\n` +
        `📧 E-mail: ${form.email}\n` +
        `⚖️ Assunto: ${form.area}\n\n` +
        `💬 Mensagem: ${form.message}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank');
  };

  const inputClass =
    'w-full bg-white/5 border border-white/10 focus:border-[#A1825A] text-white placeholder-white/30 font-sans text-sm px-4 py-3 rounded-sm outline-none transition-colors duration-300';

  return (
    <section id="contato" className="py-24 bg-black relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-8 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('')",
        }}
      />
      <div className="absolute inset-0 bg-black/85" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="font-sans text-xs tracking-[0.4em] text-[#A1825A] uppercase mb-3">
            Fale Conosco
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-5">
            Solicite sua Consulta Gratuita
          </h2>
          <div className="section-divider mb-5" />
          <p className="font-sans text-[#BBB39D] max-w-xl mx-auto leading-relaxed">
            Preencha o formulário e entraremos em contato via WhatsApp para entender seu caso e
            apresentar a melhor solução jurídica.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 animate-on-scroll-left space-y-6">
            <div className="relative rounded-sm overflow-hidden mb-6">
              <img
                src="https://storage.lucasmendes.dev/site-sp/lima%20advocacia/img/fachada-escritorio-advocacia-lima-preto-branco_960x1280.webp"
                alt="Escritório Lima Advocacia"
                className="w-full h-48 object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            {[
              {
                Icon: MapPin,
                label: 'Endereço',
                value: 'Rua Domingos Marques, nº 15, Sala 1\nCentro — Crixás/GO\nCEP: 76.510-000',
              },
              {
                Icon: Phone,
                label: 'Telefone / WhatsApp',
                value: '(62) 9 8144-2263',
              },
              {
                Icon: Mail,
                label: 'E-mail',
                value: 'gabrielhlrodrigues@gmail.com',
              },
              {
                Icon: Clock,
                label: 'Horário de Atendimento',
                value: 'Segunda a Sexta\n08:00 às 17:00',
              },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#A1825A]/20 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-[#A1825A]" />
                </div>
                <div>
                  <p className="font-sans text-xs text-[#A1825A] tracking-wider uppercase mb-1">
                    {label}
                  </p>
                  <p className="font-sans text-sm text-[#BBB39D] whitespace-pre-line leading-relaxed">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 animate-on-scroll-right space-y-4 bg-white/[0.02] border border-white/10 rounded-sm p-8"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="font-sans text-xs text-[#BBB39D] tracking-wider uppercase block mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="font-sans text-xs text-[#BBB39D] tracking-wider uppercase block mb-2">
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="(62) 9 0000-0000"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="font-sans text-xs text-[#BBB39D] tracking-wider uppercase block mb-2">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                placeholder="seu@email.com"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label className="font-sans text-xs text-[#BBB39D] tracking-wider uppercase block mb-2">
                Área de Interesse *
              </label>
              <select
                name="area"
                required
                value={form.area}
                onChange={handleChange}
                className={`${inputClass} appearance-none cursor-pointer`}
              >
                <option value="" disabled className="bg-black">
                  Selecione a área
                </option>
                {AREAS.map((a) => (
                  <option key={a} value={a} className="bg-black">
                    {a}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-sans text-xs text-[#BBB39D] tracking-wider uppercase block mb-2">
                Descreva seu Caso
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Conte brevemente sua situação para que possamos te orientar melhor..."
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full gold-gradient text-white font-sans font-semibold text-sm px-6 py-4 rounded-sm tracking-wider uppercase hover:opacity-90 active:opacity-80 transition-opacity duration-300 flex items-center justify-center gap-2"
            >
              <Send size={16} />
              Enviar pelo WhatsApp
            </button>

            <p className="font-sans text-xs text-[#BBB39D]/40 text-center">
              Ao enviar, você será redirecionado para o WhatsApp com sua mensagem já preenchida.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

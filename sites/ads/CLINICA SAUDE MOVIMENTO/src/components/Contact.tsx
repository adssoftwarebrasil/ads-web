import { useState, type FormEvent } from 'react';
import { Phone, MapPin, Instagram, Send } from 'lucide-react';
import { WHATSAPP_NUMBER, PHONE_LINK } from '../lib/constants';
import WhatsAppIcon from './WhatsAppIcon';

const serviceOptions = [
  'Fisioterapia Ortopédica',
  'Pilates Clínico',
  'Terapia Manual',
  'Drenagem Linfática',
  'Treino Gestual de Corrida',
  'Neo Pilates',
  'Dry Needling',
  'Pilates Avançado',
  'Outro',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const lines = [
      'Olá! Gostaria de agendar uma avaliação na Clínica Saúde Movimento.',
      `Nome: ${name}`,
      `Telefone: ${phone}`,
    ];
    if (service) lines.push(`Serviço de interesse: ${service}`);
    if (message) lines.push(`Mensagem: ${message}`);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <section id="contato" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 transition-all duration-700 opacity-100 translate-y-0">
          <span className="inline-block text-clinic-gold font-semibold text-sm tracking-widest uppercase mb-3">
            Fale conosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-clinic-teal leading-tight">
            Agende sua Avaliação
            <br />
            <span className="text-clinic-gold">Gratuita Hoje Mesmo</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Nossa equipe está pronta para entender seu caso e montar o protocolo ideal para você.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-clinic-teal rounded-2xl p-7 text-white">
              <h3 className="text-xl font-bold mb-5">Informações de Contato</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone
                      className="lucide lucide-phone text-clinic-gold"
                      width={18}
                      height={18}
                    />
                  </div>
                  <div>
                    <div className="text-white/60 text-xs mb-0.5">WhatsApp / Telefone</div>
                    <a
                      href={PHONE_LINK}
                      className="text-white font-semibold hover:text-clinic-gold transition-colors"
                    >
                      (66) 9 9920-2262
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin
                      className="lucide lucide-map-pin text-clinic-gold"
                      width={18}
                      height={18}
                    />
                  </div>
                  <div>
                    <div className="text-white/60 text-xs mb-0.5">Endereço</div>
                    <div className="text-white font-medium text-sm leading-snug">
                      Av. Mal. Rondon, 2339
                      <br />
                      Jardim dos Pioneiros
                      <br />
                      Rondonópolis - MT, 78700-552
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Instagram
                      className="lucide lucide-instagram text-clinic-gold"
                      width={18}
                      height={18}
                    />
                  </div>
                  <div>
                    <div className="text-white/60 text-xs mb-0.5">Instagram</div>
                    <a
                      href="https://www.instagram.com/clinica_saude_movimento/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-semibold hover:text-clinic-gold transition-colors text-sm"
                    >
                      @clinica_saude_movimento
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-white/60 text-xs mb-3">Horário de Atendimento</div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/80">Segunda a Sexta</span>
                    <span className="text-clinic-gold font-semibold">08:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Sábado</span>
                    <span className="text-clinic-gold font-semibold">08:00 – 12:00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-56 lg:flex-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.254335843404!2d-54.62242672485561!3d-16.46265438427535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9379c9c6d3d11293%3A0x58567297acca9a28!2sClinica%20Sa%C3%BAde%20Movimento!5e0!3m2!1spt-BR!2sbr!4v1775156958244!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Clínica Saúde Movimento"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="bg-clinic-teal-50 rounded-2xl p-8 border border-clinic-teal/10">
              <h3 className="text-xl font-bold text-clinic-teal mb-6">
                Envie sua mensagem via WhatsApp
              </h3>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Nome completo <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Seu nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-clinic-teal focus:ring-2 focus:ring-clinic-teal/20 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Telefone / WhatsApp <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="(66) 9 0000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-clinic-teal focus:ring-2 focus:ring-clinic-teal/20 transition-all duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Serviço de interesse
                  </label>
                  <select
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-clinic-teal focus:ring-2 focus:ring-clinic-teal/20 transition-all duration-200"
                  >
                    <option value="">Selecione um serviço</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Conte um pouco sobre sua situação
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Ex: Tenho dor na coluna há 3 meses e gostaria de agendar uma avaliação..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-clinic-teal focus:ring-2 focus:ring-clinic-teal/20 transition-all duration-200 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-clinic-teal hover:bg-clinic-teal-light text-white font-semibold text-base py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-clinic-teal/30 hover:scale-[1.01]"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Enviar pelo WhatsApp
                  <Send className="lucide lucide-send" width={18} height={18} />
                </button>
                <p className="text-center text-gray-400 text-xs">
                  Ao clicar, você será redirecionado ao WhatsApp com sua mensagem pré-preenchida.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

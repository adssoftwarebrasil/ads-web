import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá, Funerária Uberaba! Me chamo *${form.name}*.\n` +
        (form.phone ? `Telefone: ${form.phone}\n` : '') +
        (form.service ? `Serviço de interesse: ${form.service}\n` : '') +
        (form.message ? `Mensagem: ${form.message}` : '')
    );
    window.open(`http://wa.me/553498615889?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-[rgb(29,29,29)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[rgb(65,150,229)] mb-3">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[rgb(247,246,249)] mb-4">
            Estamos Aqui para Ajudar
          </h2>
          <p className="text-[rgb(247,246,249)]/60 max-w-xl mx-auto text-base">
            Entre em contato conosco a qualquer hora. Nossa equipe está sempre pronta para atender
            com cuidado e respeito.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-[rgb(249,240,69)]/10 border border-[rgb(249,240,69)]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-[rgb(249,240,69)]" />
              </div>
              <div>
                <p className="text-[rgb(247,246,249)] font-semibold text-sm mb-0.5">
                  Telefone / WhatsApp
                </p>
                <a
                  href="http://wa.me/553498615889"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[rgb(247,246,249)]/60 text-sm hover:text-[rgb(249,240,69)] transition-colors"
                >
                  (34) 9 9861-5889
                </a>
                <a
                  href="tel:+553433215889"
                  className="block text-[rgb(247,246,249)]/60 text-sm hover:text-[rgb(249,240,69)] transition-colors"
                >
                  (34) 3321-5889
                </a>
                <a
                  href="tel:+553433216116"
                  className="block text-[rgb(247,246,249)]/60 text-sm hover:text-[rgb(249,240,69)] transition-colors"
                >
                  (34) 3321-6116
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-[rgb(249,240,69)]/10 border border-[rgb(249,240,69)]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-[rgb(249,240,69)]" />
              </div>
              <div>
                <p className="text-[rgb(247,246,249)] font-semibold text-sm mb-0.5">E-mail</p>
                <a
                  href="mailto:funerariauberaba@gmail.com"
                  className="text-[rgb(247,246,249)]/60 text-sm hover:text-[rgb(249,240,69)] transition-colors"
                >
                  funerariauberaba@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-[rgb(249,240,69)]/10 border border-[rgb(249,240,69)]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-[rgb(249,240,69)]" />
              </div>
              <div>
                <p className="text-[rgb(247,246,249)] font-semibold text-sm mb-0.5">Endereço</p>
                <p className="text-[rgb(247,246,249)]/60 text-sm">
                  Av. Leopoldino de Oliveira, 1731 — Frei Eugênio,
                  <br />
                  Uberaba - MG, 38015-000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-[rgb(249,240,69)]/10 border border-[rgb(249,240,69)]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock size={18} className="text-[rgb(249,240,69)]" />
              </div>
              <div>
                <p className="text-[rgb(247,246,249)] font-semibold text-sm mb-0.5">
                  Horário de Atendimento
                </p>
                <p className="text-[rgb(247,246,249)]/60 text-sm">24 horas — 7 dias por semana</p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-white/10 mt-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3755.016812847293!2d-47.92202822477744!3d-19.75444028159489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bacfc297b3b65f%3A0x4e47ce4408023284!2sFuner%C3%A1ria%20Uberaba!5e0!3m2!1spt-BR!2sbr!4v1777316391948!5m2!1spt-BR!2sbr"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Funerária Uberaba"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-[rgb(247,246,249)] font-bold text-xl mb-6">
              Envie sua Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[rgb(247,246,249)]/70 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                  Seu nome *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Como podemos te chamar?"
                  className="w-full bg-white/5 border border-white/15 text-[rgb(247,246,249)] placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[rgb(249,240,69)]/60 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[rgb(247,246,249)]/70 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(34) 9 0000-0000"
                  className="w-full bg-white/5 border border-white/15 text-[rgb(247,246,249)] placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[rgb(249,240,69)]/60 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[rgb(247,246,249)]/70 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                  Serviço de interesse
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-[rgb(29,29,29)] border border-white/15 text-[rgb(247,246,249)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[rgb(249,240,69)]/60 transition-colors"
                >
                  <option value="">Selecione um serviço</option>
                  <option>Planos Funerários</option>
                  <option>Atendimento Fúnebre</option>
                  <option>Cremação</option>
                  <option>Coroa de Flores</option>
                  <option>Velório em Uberaba</option>
                  <option>Translado / Remoção</option>
                  <option>Outros</option>
                </select>
              </div>
              <div>
                <label className="block text-[rgb(247,246,249)]/70 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Como podemos ajudar?"
                  className="w-full bg-white/5 border border-white/15 text-[rgb(247,246,249)] placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[rgb(249,240,69)]/60 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[rgb(249,240,69)] text-[rgb(29,29,29)] font-bold py-4 rounded-xl hover:bg-[rgb(65,150,229)] hover:text-white transition-all duration-200 mt-2"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

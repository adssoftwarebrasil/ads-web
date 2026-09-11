import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Instagram, Clock, Send } from 'lucide-react';

interface FormData {
  name: string;
  childName: string;
  childAge: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormData>({
    name: '',
    childName: '',
    childAge: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Olá Dr. Renner! Me chamo *${form.name}*.\n\n` +
      `Gostaria de agendar uma consulta para *${form.childName}* (${form.childAge} anos).\n\n` +
      `Meu telefone: ${form.phone}\n\n` +
      (form.message ? `Observação: ${form.message}` : '');
    window.open(
      `https://wa.me/553799766089?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  const inputClass =
    'w-full bg-white border border-gray-200 text-gray-800 placeholder-gray-400 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all duration-200';

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="section-observe text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-blue-pale text-brand-blue text-xs font-semibold px-4 py-2 rounded-full mb-5 uppercase tracking-wide">
            <Phone size={13} />
            Contato
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Agende a consulta do seu filho
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Entre em contato pelo formulário abaixo e fale diretamente com nossa equipe pelo WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <InfoCard
              icon={Phone}
              title="Telefone Fixo"
              lines={['(37) 3242-1965']}
              href="tel:+553732421965"
              linkLabel="Ligar agora"
            />
            <InfoCard
              icon={({ size }: { size: number }) => (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.124 1.531 5.862L.057 23.166a.5.5 0 0 0 .613.635l5.457-1.432A11.937 11.937 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.802 9.802 0 0 1-5.045-1.394l-.361-.214-3.24.851.866-3.164-.235-.375A9.803 9.803 0 0 1 2.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z" />
                </svg>
              )}
              title="WhatsApp"
              lines={['(37) 9 9976-6089']}
              href="http://wa.me/553799766089"
              linkLabel="Enviar mensagem"
              iconBg="bg-green-500"
            />
            <InfoCard
              icon={MapPin}
              title="Endereço"
              lines={[
                'R. Zezé Lima, 57 – Sala 10',
                'Centro, Itaúna – MG',
                'CEP: 35680-045',
              ]}
              href="https://maps.google.com/?q=Dr.+Renner+Amaral+Pediatra"
              linkLabel="Ver no mapa"
            />
            <InfoCard
              icon={Clock}
              title="Horário de Atendimento"
              lines={['Segunda a Sexta: 8h às 18h', 'Sábado: 8h às 12h']}
            />
            <InfoCard
              icon={Instagram}
              title="Instagram"
              lines={['@rennerpediatra']}
              href="https://www.instagram.com/rennerpediatra/"
              linkLabel="Seguir no Instagram"
            />

            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-52">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747.5326240794902!2d-44.580439324769095!3d-20.070010081350084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa7335a940ba3ef%3A0xf94e22da2e5cc9c9!2sDr.%20Renner%20Amaral%20Pediatra!5e0!3m2!1spt-BR!2sbr!4v1775609453362!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Dr. Renner Amaral"
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Agendar consulta</h3>
            <p className="text-gray-500 text-sm mb-6">
              Preencha o formulário e enviaremos uma mensagem pré-preenchida para o WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1.5 block">
                    Seu nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Maria da Silva"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1.5 block">
                    Nome da criança *
                  </label>
                  <input
                    type="text"
                    name="childName"
                    value={form.childName}
                    onChange={handleChange}
                    placeholder="João da Silva"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1.5 block">
                    Idade da criança *
                  </label>
                  <input
                    type="text"
                    name="childAge"
                    value={form.childAge}
                    onChange={handleChange}
                    placeholder="3 anos / 8 meses"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1.5 block">
                    Seu WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(37) 9 9999-9999"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 mb-1.5 block">
                  Observações (opcional)
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Descreva brevemente o motivo da consulta..."
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-base py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <Send size={18} />
                Enviar pelo WhatsApp
              </button>

              <p className="text-center text-xs text-gray-400">
                Ao enviar, você será redirecionado para o WhatsApp com a mensagem pré-preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  lines,
  href,
  linkLabel,
  iconBg = 'bg-brand-blue',
}: {
  icon: React.ComponentType<{ size: number; className?: string }>;
  title: string;
  lines: string[];
  href?: string;
  linkLabel?: string;
  iconBg?: string;
}) {
  return (
    <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className={`w-10 h-10 ${iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
        <Icon size={18} className="text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-0.5">{title}</p>
        {lines.map((line) => (
          <p key={line} className="text-sm text-gray-800 font-medium">
            {line}
          </p>
        ))}
        {href && linkLabel && (
          <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="text-xs text-brand-blue font-semibold mt-1 inline-flex items-center gap-1 hover:underline"
          >
            {linkLabel}
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

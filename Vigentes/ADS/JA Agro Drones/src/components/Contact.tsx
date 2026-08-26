import { useState, type FormEvent } from 'react';
import { Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const services = [
  'Pulverização Aérea',
  'Mapeamento Aéreo',
  'Adubação Aérea',
  'Vídeos Comerciais',
  'Fotos Aéreas',
  'Chá Revelação',
  'Outro',
];

const inputClass =
  'w-full bg-white/[0.05] border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4a8427] focus:ring-1 focus:ring-[#4a8427]/50 transition-all duration-200';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: '',
    area: '',
    service: '',
    message: '',
  });

  const update = (field: keyof typeof form, value: string) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      'Olá! Gostaria de solicitar um orçamento.',
      '',
      `*Nome:* ${form.name}`,
      `*WhatsApp:* ${form.phone}`,
      `*Cidade/Estado:* ${form.city}`,
    ];
    if (form.area) lines.push(`*Área:* ${form.area}`);
    lines.push(`*Serviço:* ${form.service}`);
    if (form.message) lines.push(`*Mensagem:* ${form.message}`);
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`http://wa.me/556295016058?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#6ab534] text-sm font-bold tracking-widest uppercase mb-3">Contato</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Solicite seu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a8427] to-[#8fd44e]">
              Orçamento
            </span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base">
            Preencha o formulário abaixo e entraremos em contato pelo WhatsApp com a proposta ideal para sua
            necessidade.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-3">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Seu nome"
                    className={inputClass}
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-1.5">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(00) 00000-0000"
                    className={inputClass}
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Cidade / Estado *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    placeholder="Ex: Goiânia, GO"
                    className={inputClass}
                    value={form.city}
                    onChange={(e) => update('city', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Área (hectares)
                  </label>
                  <input
                    type="text"
                    name="area"
                    placeholder="Ex: 50 ha"
                    className={inputClass}
                    value={form.area}
                    onChange={(e) => update('area', e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-1.5">
                  Serviço desejado *
                </label>
                <select
                  name="service"
                  required
                  value={form.service}
                  onChange={(e) => update('service', e.target.value)}
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="" disabled className="bg-[#111]">
                    Selecione um serviço
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-[#111]">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-1.5">
                  Mensagem adicional
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Descreva sua necessidade com mais detalhes..."
                  className={`${inputClass} resize-none`}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#4a8427] hover:bg-[#3d6d20] text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:shadow-xl hover:shadow-[#4a8427]/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-5">Informações de Contato</h3>
              <div className="space-y-4">
                <a
                  href="http://wa.me/556295016058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[#4a8427]/20 rounded-xl flex items-center justify-center group-hover:bg-[#4a8427]/30 transition-colors">
                    <Phone className="lucide lucide-phone text-[#6ab534]" width={18} height={18} />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs mb-0.5">WhatsApp / Telefone</div>
                    <div className="text-white font-semibold group-hover:text-[#6ab534] transition-colors">
                      (62) 99501-6058
                    </div>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/[0.06] rounded-xl flex items-center justify-center">
                    <MapPin className="lucide lucide-map-pin text-[#6ab534]" width={18} height={18} />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs mb-0.5">Sede</div>
                    <div className="text-white font-semibold">Goiânia, GO</div>
                    <div className="text-white/50 text-xs mt-0.5">Av. Milão, 771 – Jardim Europa</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold text-base mb-4">Redes Sociais</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.instagram.com/j.a.agrodrones/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743] flex items-center justify-center">
                    <Instagram className="lucide lucide-instagram text-white" width={18} height={18} />
                  </div>
                  <span className="font-medium text-sm group-hover:text-[#6ab534]">@j.a.agrodrones</span>
                </a>
                <a
                  href="https://www.facebook.com/p/JA-Agro-Drones-Pulveriza%C3%A7%C3%A3o-Inteligente-61559199698181/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1877f2] flex items-center justify-center">
                    <Facebook className="lucide lucide-facebook text-white" width={18} height={18} />
                  </div>
                  <span className="font-medium text-sm group-hover:text-[#6ab534]">JA Agro Drones</span>
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1a3a0a] to-[#0f1f06] border border-[#4a8427]/30 rounded-2xl p-6">
              <div className="text-[#8fd44e] font-bold text-sm mb-2">Atendimento Nacional</div>
              <p className="text-white/60 text-sm leading-relaxed">
                Estamos prontos para atender produtores e clientes em todos os estados do Brasil. Entre em contato e veja
                como podemos levar nossa tecnologia até você.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

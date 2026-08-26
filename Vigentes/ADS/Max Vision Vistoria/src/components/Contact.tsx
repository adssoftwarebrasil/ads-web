import { useState, FormEvent } from 'react';
import { MapPin, Clock, Phone, Instagram } from 'lucide-react';

const WHATSAPP_NUMBER = '556231239052';

const schedule = [
  { day: 'Segunda a Sexta', hours: '08:00 às 17:00' },
  { day: 'Sábado', hours: '08:00 às 12:00' },
  { day: 'Domingo', hours: 'Fechado' },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    vehicle: '',
    service: '',
    message: '',
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const text = encodeURIComponent(
      `Olá! Gostaria de agendar uma vistoria.\n\n` +
      `*Nome:* ${form.name}\n` +
      `*Telefone:* ${form.phone}\n` +
      `*Veículo:* ${form.vehicle}\n` +
      `*Serviço:* ${form.service}\n` +
      `*Mensagem:* ${form.message || 'Não informado'}`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  }

  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#efcf05]/10 text-[#efcf05] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Agende sua vistoria{' '}
            <span className="text-[#efcf05]">agora mesmo</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Preencha o formulário abaixo e entraremos em contato pelo WhatsApp para confirmar seu agendamento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800">
              <h3 className="text-white font-black text-xl mb-6 flex items-center gap-3">
                <Clock size={22} className="text-[#efcf05]" />
                Horário de Funcionamento
              </h3>
              <div className="space-y-3">
                {schedule.map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-gray-800 last:border-0">
                    <span className="text-gray-300 text-sm font-medium">{item.day}</span>
                    <span className={`text-sm font-bold ${item.hours === 'Fechado' ? 'text-[#e6282f]' : 'text-[#efcf05]'}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 space-y-4">
              <h3 className="text-white font-black text-xl mb-4">Informações de Contato</h3>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#efcf05] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-semibold">Endereço</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Av. Euclídes da Cunha, Qd. 03 Lt. 09<br />
                    Conj. Residencial Storil<br />
                    Aparecida de Goiânia - GO, 74921-545
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-[#efcf05] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-semibold">WhatsApp</p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm hover:text-[#efcf05] transition-colors"
                  >
                    (62) 3123-9052
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Instagram size={20} className="text-[#efcf05] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-semibold">Instagram</p>
                  <a
                    href="https://www.instagram.com/maxvision_vistoria_veicular/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm hover:text-[#efcf05] transition-colors"
                  >
                    @maxvision_vistoria_veicular
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-800 h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5710.486110316939!2d-49.273657500000006!3d-16.763958499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935efb8a04b108ab%3A0xa5f80eb3de2f01af!2sMax%20V%C3%ADsion%20Vistoria%20Veicular!5e1!3m2!1spt-BR!2sbr!4v1772712754519!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Max Vision"
              />
            </div>
          </div>

          <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800">
            <h3 className="text-white font-black text-2xl mb-2">Solicite seu Agendamento</h3>
            <p className="text-gray-400 text-sm mb-8">
              Preencha os dados abaixo. Você será redirecionado para o WhatsApp com as informações pré-preenchidas.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Nome Completo <span className="text-[#e6282f]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Seu nome"
                    className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#efcf05] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Telefone / WhatsApp <span className="text-[#e6282f]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(62) 3123-9052"
                    className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#efcf05] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Veículo (Marca, Modelo e Ano) <span className="text-[#e6282f]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.vehicle}
                  onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                  placeholder="Ex: Honda Civic 2020"
                  className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#efcf05] transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Tipo de Serviço <span className="text-[#e6282f]">*</span>
                </label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#efcf05] transition-colors appearance-none"
                >
                  <option value="" disabled className="text-gray-600">Selecione o serviço</option>
                  <option value="Vistoria para Transferência">Vistoria para Transferência</option>
                  <option value="Vistoria para Seguradora">Vistoria para Seguradora</option>
                  <option value="Identificação Veicular">Identificação Veicular</option>
                  <option value="Regularização Veicular">Regularização Veicular</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">Mensagem (opcional)</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Informações adicionais sobre seu veículo ou serviço..."
                  rows={4}
                  className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#efcf05] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#efcf05] text-black font-black py-4 rounded-xl text-lg hover:bg-yellow-400 transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-yellow-500/20 flex items-center justify-center gap-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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

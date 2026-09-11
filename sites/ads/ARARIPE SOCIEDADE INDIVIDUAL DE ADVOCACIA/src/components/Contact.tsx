import { useState } from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é *${form.name}*.\n\n*Telefone:* ${form.phone}\n*Assunto:* ${form.subject}\n\n*Mensagem:*\n${form.message}\n\nGostaria de agendar uma consulta.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/556281124626?text=${encoded}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">
            Entre em contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003F5C] mb-5">
            Fale com nossos Advogados
          </h2>
          <p className="text-[#003F5C]/60 text-lg max-w-xl mx-auto">
            Atendemos de segunda a sexta, das 08h às 18h. Preencha o formulário e entraremos em contato via WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <h3 className="text-[#003F5C] font-bold text-xl mb-6">Informações de Contato</h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#003F5C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-[#003F5C]" />
                  </div>
                  <div>
                    <p className="text-[#003F5C] font-semibold text-sm mb-0.5">Endereço</p>
                    <p className="text-[#003F5C]/65 text-sm leading-snug">
                      R. 115, Quadra F36 Lote 102<br />
                      St. Sul, Goiânia - GO<br />
                      CEP: 74085-325
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#003F5C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-[#003F5C]" />
                  </div>
                  <div>
                    <p className="text-[#003F5C] font-semibold text-sm mb-0.5">Telefone / WhatsApp</p>
                    <a href="tel:+556281124626" className="text-[#003F5C]/65 text-sm hover:text-[#C9A84C] transition-colors">
                      (62) 98112-4626
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#003F5C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-[#003F5C]" />
                  </div>
                  <div>
                    <p className="text-[#003F5C] font-semibold text-sm mb-0.5">Horário de Atendimento</p>
                    <p className="text-[#003F5C]/65 text-sm">Segunda a Sexta: 08h às 18h</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[#003F5C] font-semibold text-sm mb-4">Redes Sociais</p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/araripechagasadvogados/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-[#003F5C] hover:bg-[#C9A84C] rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.facebook.com/AraripeChagasAdvogadosAssociados/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-[#003F5C] hover:bg-[#C9A84C] rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="http://wa.me/556281124626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-[#25D366] hover:bg-[#1fba59] rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#003F5C]/10 flex-1 min-h-[220px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.6737862648024!2d-49.24754352485064!3d-16.69319978408031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef10d6a9e3435%3A0xd678a1fd8306319e!2sAraripe%20Chagas!5e0!3m2!1spt-BR!2sbr!4v1775162615460!5m2!1spt-BR!2sbr"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Araripe Chagas"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-[#F5F3E8] rounded-2xl p-8 lg:p-10">
              <h3 className="text-[#003F5C] font-bold text-xl mb-2">Envie sua mensagem</h3>
              <p className="text-[#003F5C]/55 text-sm mb-8">Preencha abaixo e você será redirecionado para o WhatsApp.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#003F5C] text-sm font-semibold mb-2">
                      Seu Nome <span className="text-[#C9A84C]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ex: João Silva"
                      className="w-full bg-white border border-[#003F5C]/20 focus:border-[#003F5C] rounded-xl px-4 py-3 text-[#003F5C] placeholder-[#003F5C]/30 text-sm outline-none transition-all duration-200 focus:shadow-md"
                    />
                  </div>
                  <div>
                    <label className="block text-[#003F5C] text-sm font-semibold mb-2">
                      Telefone / WhatsApp <span className="text-[#C9A84C]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(62) 9 0000-0000"
                      className="w-full bg-white border border-[#003F5C]/20 focus:border-[#003F5C] rounded-xl px-4 py-3 text-[#003F5C] placeholder-[#003F5C]/30 text-sm outline-none transition-all duration-200 focus:shadow-md"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#003F5C] text-sm font-semibold mb-2">
                    Área de Interesse <span className="text-[#C9A84C]">*</span>
                  </label>
                  <select
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#003F5C]/20 focus:border-[#003F5C] rounded-xl px-4 py-3 text-[#003F5C] text-sm outline-none transition-all duration-200 focus:shadow-md appearance-none cursor-pointer"
                  >
                    <option value="">Selecione uma área...</option>
                    <option>Direito Trabalhista</option>
                    <option>Propriedade Industrial</option>
                    <option>Serviços Extrajudiciais</option>
                    <option>Direito Empresarial</option>
                    <option>Direito Civil</option>
                    <option>Direito do Consumidor</option>
                    <option>Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#003F5C] text-sm font-semibold mb-2">
                    Descreva seu Caso <span className="text-[#C9A84C]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Descreva brevemente sua situação jurídica para que possamos te orientar da melhor forma..."
                    className="w-full bg-white border border-[#003F5C]/20 focus:border-[#003F5C] rounded-xl px-4 py-3 text-[#003F5C] placeholder-[#003F5C]/30 text-sm outline-none transition-all duration-200 focus:shadow-md resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-[#003F5C] hover:bg-[#004f70] text-white font-bold text-base py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 group"
                >
                  <Send size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                  Enviar pelo WhatsApp
                </button>

                <p className="text-[#003F5C]/40 text-xs text-center">
                  Ao enviar, você será redirecionado para o WhatsApp com os dados preenchidos.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

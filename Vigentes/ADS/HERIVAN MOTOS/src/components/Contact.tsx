import { useState, FormEvent } from 'react';
import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { WHATSAPP_NUMBER, INSTAGRAM_LINK, FACEBOOK_LINK } from '../constants';

interface FormData {
  name: string;
  phone: string;
  interest: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    interest: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é *${form.name}* e tenho interesse em: *${form.interest || 'motos'}*.${
      form.phone ? `\nMeu telefone: ${form.phone}.` : ''
    }${form.message ? `\nMensagem: ${form.message}` : ''}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const inputClass =
    'w-full bg-white border border-[rgb(187,189,191)]/40 rounded-lg px-4 py-3 text-black placeholder-[rgb(187,189,191)] focus:outline-none focus:border-[rgb(219,55,51)] transition-colors duration-200 text-sm';

  return (
    <section id="contato" className="bg-[rgb(187,189,191)]/8 py-20 md:py-28" style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[rgb(219,55,51)] text-xs font-bold uppercase tracking-widest">
            Fale Conosco
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-black mt-3 mb-4">
            Pronto para sair de moto?
          </h2>
          <p className="text-[rgb(93,92,97)] text-base max-w-xl mx-auto">
            Preencha o formulário abaixo e entraremos em contato pelo WhatsApp com as melhores opções para
            você.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-[rgb(187,189,191)]/20 flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-black font-semibold text-sm mb-2">Seu nome *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="João Silva"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-black font-semibold text-sm mb-2">Seu WhatsApp</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(66) 9 0000-0000"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label className="block text-black font-semibold text-sm mb-2">Tenho interesse em</label>
              <select
                name="interest"
                value={form.interest}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Selecione uma opção...</option>
                <option value="moto seminova">Moto Seminova</option>
                <option value="moto nova">Moto Nova</option>
                <option value="financiamento de moto">Financiamento de Moto</option>
                <option value="consultar estoque disponível">Consultar Estoque</option>
                <option value="uma moto específica">Modelo Específico</option>
              </select>
            </div>
            <div>
              <label className="block text-black font-semibold text-sm mb-2">Mensagem (opcional)</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Descreva o que está procurando, modelo desejado, faixa de valor..."
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[rgb(219,55,51)] text-white py-4 rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-red-700 transition-colors duration-200 flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.555 4.107 1.523 5.83L.057 23.886a.5.5 0 00.612.612l6.056-1.466A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6a9.543 9.543 0 01-4.888-1.344l-.35-.208-3.625.878.892-3.515-.228-.362A9.543 9.543 0 012.4 12C2.4 6.699 6.699 2.4 12 2.4S21.6 6.699 21.6 12 17.301 21.6 12 21.6z"/>
              </svg>
              Enviar pelo WhatsApp
            </button>
            <p className="text-[rgb(93,92,97)] text-xs text-center">
              Ao clicar, você será redirecionado para o WhatsApp com os dados preenchidos.
            </p>
          </form>

          <div className="flex flex-col gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[rgb(187,189,191)]/20">
              <h3 className="text-black font-black text-xl mb-6">Informações de Contato</h3>
              <div className="flex flex-col gap-5">
                <a
                  href="https://wa.me/556699951333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-[rgb(219,55,51)]/10 flex items-center justify-center text-[rgb(219,55,51)] flex-shrink-0 group-hover:bg-[rgb(219,55,51)] group-hover:text-white transition-colors duration-200">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-black font-semibold text-sm">WhatsApp / Telefone</div>
                    <div className="text-[rgb(93,92,97)] text-sm">(66) 9 9995-1333</div>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[rgb(219,55,51)]/10 flex items-center justify-center text-[rgb(219,55,51)] flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-black font-semibold text-sm">Endereço</div>
                    <div className="text-[rgb(93,92,97)] text-sm">
                      Av. das Palmeiras, 1570 - Jardim das Palmeiras
                      <br />
                      Sinop – MT, 78552-063
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[rgb(219,55,51)]/10 flex items-center justify-center text-[rgb(219,55,51)] flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="text-black font-semibold text-sm">Horário de Funcionamento</div>
                    <div className="text-[rgb(93,92,97)] text-sm">
                      Segunda a Sexta: 7h às 17h30
                      <br />
                      Sábado: 7h às 12h
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 pt-2 border-t border-[rgb(187,189,191)]/20">
                  <a
                    href={INSTAGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[rgb(219,55,51)]/10 flex items-center justify-center text-[rgb(219,55,51)] hover:bg-[rgb(219,55,51)] hover:text-white transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href={FACEBOOK_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[rgb(219,55,51)]/10 flex items-center justify-center text-[rgb(219,55,51)] hover:bg-[rgb(219,55,51)] hover:text-white transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-sm border border-[rgb(187,189,191)]/20 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.842038295955!2d-55.50935562494213!3d-11.846328488375065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a781f2d80a067f%3A0xda97424534f46e0!2sHerivan%20Motos!5e0!3m2!1spt-BR!2sbr!4v1776402985446!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Herivan Motos"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

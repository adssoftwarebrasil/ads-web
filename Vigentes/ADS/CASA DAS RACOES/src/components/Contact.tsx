import { useRef, useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { stores } from '../data/stores';
import { buildWhatsAppUrl, trackWhatsAppClick, whatsappLink } from '../lib/tracking';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', subject: '', message: '' });
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formMessage = `Olá! Meu nome é *${form.name}*.\n📞 Telefone: ${form.phone}\n📋 Assunto: ${form.subject}\n\n${form.message}`;
  const formCta = whatsappLink('formulario_contato', formMessage);

  // O botão é um link (para o GTM ler o Click URL), então a validação
  // dos campos obrigatórios precisa ser disparada na mão.
  const handleFormClick = (e: React.MouseEvent) => {
    if (!formRef.current?.reportValidity()) {
      e.preventDefault();
      return;
    }
    formCta.onClick();
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Fale com a gente
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Tire dúvidas, faça pedidos ou agende consultas — estamos sempre prontos para ajudar.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-lg p-2 shrink-0">
                    <Phone size={16} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium mb-0.5">Matriz</p>
                    <a href="tel:+5566999836995" className="text-gray-800 font-semibold text-sm hover:text-green-600 transition-colors">
                      (66) 9 9983-6995
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-lg p-2 shrink-0">
                    <Mail size={16} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium mb-0.5">E-mail</p>
                    <a href="mailto:casadasracoespva@gmail.com" className="text-gray-800 font-semibold text-sm hover:text-green-600 transition-colors break-all">
                      casadasracoespva@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-lg p-2 shrink-0">
                    <MapPin size={16} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium mb-0.5">Endereço Matriz</p>
                    <p className="text-gray-800 font-semibold text-sm">
                      R. Alcídes Lazareti, 89<br />São Cristovao, Primavera do Leste - MT
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-4 text-lg">Nossas Unidades no WhatsApp</h3>
              <div className="space-y-3">
                {stores.map((store) => (
                  <a
                    key={store.id}
                    href={buildWhatsAppUrl(store.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackWhatsAppClick({
                        storeName: store.name,
                        phone: store.phone,
                        url: buildWhatsAppUrl(store.whatsapp),
                        location: 'secao_contato',
                      })
                    }
                    data-gtm="whatsapp"
                    data-gtm-location="secao_contato"
                    data-gtm-store={store.name}
                    aria-label={`Falar no WhatsApp com ${store.name}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <div>
                      <p className="font-semibold text-sm">{store.name}</p>
                      <p className="text-gray-300 text-xs">{store.phone}</p>
                    </div>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-400">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form ref={formRef} onSubmit={(e) => e.preventDefault()} className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <h3 className="font-bold text-gray-900 text-xl mb-6">Envie uma mensagem</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="name">
                    Seu nome *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ex: João Silva"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none text-gray-800 bg-white transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="phone">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(66) 9 9999-9999"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none text-gray-800 bg-white transition-all text-sm"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="subject">
                  Assunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none text-gray-800 bg-white transition-all text-sm"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="Pedido de Ração">Pedido de Ração</option>
                  <option value="Consulta Veterinária">Consulta Veterinária</option>
                  <option value="Vacinas">Vacinas</option>
                  <option value="Cirurgia">Cirurgia</option>
                  <option value="Farmácia Veterinária">Farmácia Veterinária</option>
                  <option value="Delivery">Delivery</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="message">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Escreva sua mensagem aqui..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none text-gray-800 bg-white transition-all text-sm resize-none"
                />
              </div>
              <a
                {...formCta}
                onClick={handleFormClick}
                className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-colors shadow-sm text-base"
              >
                <Send size={18} />
                Enviar pelo WhatsApp
              </a>
              <p className="text-center text-xs text-gray-400 mt-3">
                Ao clicar, você será redirecionado ao WhatsApp com seus dados preenchidos.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, type FormEvent } from 'react';
import { User, Phone, MessageSquare, Send } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-green-500" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-pink-500" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
  </svg>
);

const products = ['Metalons', 'Perfil Enrijecido', 'Tubos Redondos', 'Cantoneiras', 'Perfil U (Calha)', 'Outros'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', product: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let text = `Olá! Meu nome é ${form.name}.`;
    if (form.phone) text += ` Telefone: ${form.phone}.`;
    if (form.product) text += ` Tenho interesse em: ${form.product}.`;
    if (form.message) text += ` ${form.message}`;
    window.open(`http://wa.me/556295226886?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-on-scroll">
            <span className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-3 block">
              Fale Conosco
            </span>
            <h2 className="section-title text-white mb-5">
              Solicite seu Orçamento
              <br />
              <span className="text-brand-orange">Sem Compromisso</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Preencha o formulário ao lado com seus dados e o produto de interesse. Ao enviar, você será redirecionado
              para o nosso WhatsApp com a mensagem já preparada — rápido, fácil e sem complicação.
            </p>
            <div className="space-y-3">
              <a
                href="http://wa.me/556295226886"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-green-500/40 hover:bg-zinc-900/80 transition-all duration-300 group"
              >
                <div className="w-11 h-11 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <WhatsAppIcon />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">WhatsApp</p>
                  <p className="text-gray-400 text-xs">(62) 9 9522-6886</p>
                </div>
              </a>
              <a
                href="https://www.instagram.com/ferroeacodovale/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-pink-500/40 hover:bg-zinc-900/80 transition-all duration-300 group"
              >
                <div className="w-11 h-11 bg-pink-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500/20 transition-colors">
                  <InstagramIcon />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Instagram</p>
                  <p className="text-gray-400 text-xs">@ferroeacodovale</p>
                </div>
              </a>
            </div>
          </div>
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 space-y-5">
              <div>
                <label className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wide">
                  Nome completo *
                </label>
                <div className="relative">
                  <User className="lucide lucide-user absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors duration-200 pl-10"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wide">
                  Telefone / WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="lucide lucide-phone absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(62) 9 0000-0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors duration-200 pl-10"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wide">
                  Produto de interesse
                </label>
                <select
                  name="product"
                  value={form.product}
                  onChange={(e) => setForm({ ...form, product: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors duration-200 cursor-pointer"
                >
                  <option value="">Selecione um produto</option>
                  {products.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wide">Mensagem</label>
                <div className="relative">
                  <MessageSquare className="lucide lucide-message-square absolute left-3 top-3 w-4 h-4 text-gray-500" />
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Descreva o que você precisa, quantidade, etc."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors duration-200 pl-10 resize-none"
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="w-full btn-primary justify-center text-base py-3.5">
                Enviar pelo WhatsApp
                <Send className="lucide lucide-send w-4 h-4" />
              </button>
              <p className="text-center text-gray-600 text-xs">
                Ao enviar, você será redirecionado para o WhatsApp com os dados preenchidos.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

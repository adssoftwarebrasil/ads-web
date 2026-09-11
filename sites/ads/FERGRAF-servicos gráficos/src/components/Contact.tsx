import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Send } from 'lucide-react';

const SERVICES_LIST = [
  'Impressão Gráfica',
  'Gráfica Rápida',
  'Impressão Digital',
  'Fardamentos',
  'Carimbos',
  'Brindes Personalizados',
  'Cópias',
  'Encadernação',
  'Plotagem',
  'Fachadas',
  'Outro',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá, Fergraf! Meu nome é ${form.name}.%0A%0AServiço desejado: ${form.service}%0AE-mail: ${form.email}%0ATelefone: ${form.phone}%0A%0AMensagem: ${form.message}%0A%0AAguardo o contato, obrigado!`;
    window.open(`https://wa.me/557988448494?text=${msg}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-[rgb(252,254,255)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-[rgb(122,200,160)]/20 text-[rgb(53,80,155)] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[rgb(53,80,155)] mb-4">
            Vamos Criar Algo{' '}
            <span className="text-[rgb(0,180,215)]">Incrivel Juntos</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Entre em contato e receba um orcamento personalizado sem compromisso.
            Nossa equipe esta pronta para atender voce!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="bg-[rgb(53,80,155)] rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-5">Informacoes de Contato</h3>

              <div className="flex flex-col gap-4">
                <a href="tel:+557988448494" className="flex items-start gap-3 group">
                  <div className="w-9 h-9 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[rgb(0,180,215)] transition-colors">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs mb-0.5">Telefone / WhatsApp</p>
                    <p className="font-semibold">(79) 9 8844-8494</p>
                  </div>
                </a>

                <a href="mailto:fergrafgrafica@gmail.com" className="flex items-start gap-3 group">
                  <div className="w-9 h-9 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[rgb(0,180,215)] transition-colors">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs mb-0.5">E-mail</p>
                    <p className="font-semibold text-sm">fergrafgrafica@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs mb-0.5">Endereco</p>
                    <p className="font-semibold text-sm">R. Bahia, 1374 - Siqueira Campos</p>
                    <p className="text-white/70 text-sm">Aracaju - SE, 49075-000</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={16} />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs mb-0.5">Horario de Funcionamento</p>
                    <p className="font-semibold text-sm">Seg - Sex: 7h30 as 12h00</p>
                    <p className="text-white/70 text-sm">13h30 as 18h00</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/20 mt-5 pt-5 flex gap-3">
                <a
                  href="https://www.instagram.com/fergrafe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/15 hover:bg-[rgb(236,71,137)] rounded-xl flex items-center justify-center transition-colors"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="http://wa.me/557988448494"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[rgb(255,240,1)] text-[rgb(53,80,155)] font-bold rounded-xl flex items-center justify-center gap-2 text-sm hover:bg-yellow-300 transition-colors py-2"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chamar no WhatsApp
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.6142606732838!2d-37.07369112495622!3d-10.916892089240529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab30818dde221%3A0x7797ed0861cc4472!2sFergrafe%20-%20Gr%C3%A1fica%20e%20Editora!5e0!3m2!1spt-BR!2sbr!4v1774556654932!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Fergraf"
              />
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-black text-[rgb(53,80,155)] mb-2">Solicite seu Orcamento</h3>
            <p className="text-gray-400 text-sm mb-6">Preencha o formulario e enviaremos direto para o WhatsApp.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1.5">Seu Nome *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Ex: Joao Silva"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[rgb(0,180,215)] focus:ring-2 focus:ring-[rgb(0,180,215)]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1.5">Telefone / WhatsApp *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="(79) 9 0000-0000"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[rgb(0,180,215)] focus:ring-2 focus:ring-[rgb(0,180,215)]/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1.5">E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[rgb(0,180,215)] focus:ring-2 focus:ring-[rgb(0,180,215)]/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1.5">Servico Desejado *</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[rgb(0,180,215)] focus:ring-2 focus:ring-[rgb(0,180,215)]/20 transition-all bg-white"
                >
                  <option value="">Selecione o servico...</option>
                  {SERVICES_LIST.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1.5">Descreva seu Projeto</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Conte um pouco sobre o que voce precisa: quantidade, tamanho, prazo..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[rgb(0,180,215)] focus:ring-2 focus:ring-[rgb(0,180,215)]/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[rgb(53,80,155)] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[rgb(0,180,215)] transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-blue-800/20 text-base"
              >
                <Send size={18} />
                Enviar pelo WhatsApp
              </button>

              <p className="text-center text-gray-400 text-xs">
                Ao enviar, voce sera redirecionado para o WhatsApp com os dados preenchidos.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

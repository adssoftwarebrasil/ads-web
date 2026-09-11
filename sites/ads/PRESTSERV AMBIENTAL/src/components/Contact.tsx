import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const services = [
  'Coleta de Resíduos',
  'Destinação Final',
  'Gerenciamento de Planta',
  'Armazenagem',
  'Proteção da Marca',
  'Assessoria Fiscal',
  'Outros',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let msg = `Olá! Gostaria de solicitar um orçamento.%0A%0A`;
    msg += `*Nome:* ${form.name}%0A`;
    if (form.company) msg += `*Empresa:* ${form.company}%0A`;
    msg += `*Telefone:* ${form.phone}%0A`;
    if (form.email) msg += `*E-mail:* ${form.email}%0A`;
    if (form.service) msg += `*Serviço de interesse:* ${form.service}%0A`;
    if (form.message) msg += `*Mensagem:* ${form.message}%0A`;
    window.open(`http://wa.me/5562994920239?text=${msg}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <span className="inline-block text-eco-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Solicite um <span className="text-primary-500">Orçamento Gratuito</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Preencha o formulário e nossa equipe entrará em contato pelo WhatsApp para entender a necessidade da sua
            empresa e apresentar a melhor solução.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-6 transition-all duration-700 delay-100 opacity-100 translate-x-0">
            <div className="bg-primary-50 rounded-2xl p-5 flex gap-4 items-start border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                <Phone width={20} height={20} className="lucide lucide-phone text-primary-500" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm mb-1">Telefones</div>
                <div className="text-gray-600 text-sm break-all leading-relaxed">(62) 9 9492-0239</div>
                <div className="text-gray-600 text-sm break-all leading-relaxed">(62) 9 9135-9310</div>
                <div className="text-gray-600 text-sm break-all leading-relaxed">(62) 3099-1964</div>
              </div>
            </div>
            <div className="bg-eco-50 rounded-2xl p-5 flex gap-4 items-start border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                <Mail width={20} height={20} className="lucide lucide-mail text-eco-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm mb-1">E-mails</div>
                <div className="text-gray-600 text-sm break-all leading-relaxed">
                  meioambiente@prestservambiental.com.br
                </div>
                <div className="text-gray-600 text-sm break-all leading-relaxed">
                  marilia.boaventura@prestservambiental.com.br
                </div>
              </div>
            </div>
            <div className="bg-accent-50 rounded-2xl p-5 flex gap-4 items-start border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                <MapPin width={20} height={20} className="lucide lucide-map-pin text-accent-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm mb-1">Endereço</div>
                <div className="text-gray-600 text-sm break-all leading-relaxed">
                  Av. Dinah de Freitas Castro, Gleba 4C
                </div>
                <div className="text-gray-600 text-sm break-all leading-relaxed">Distrito Agroindustrial</div>
                <div className="text-gray-600 text-sm break-all leading-relaxed">Sen. Canedo - GO, 75250-000</div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7405.219622881338!2d-49.15513772860751!3d-16.72067418848944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935eef6301c135f1%3A0x36f3bd8155d2a9ec!2sPrestServ%20Ambiental!5e0!3m2!1spt-BR!2sbr!4v1776845420837!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Goias Eco Ambiental"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="lg:col-span-3 transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg flex flex-col gap-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Seu nome completo"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Nome da empresa"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(62) 9 9999-9999"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                  Serviço de interesse
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Selecione um serviço</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Descreva sua necessidade ou dúvida..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] text-sm mt-1"
              >
                <Send width={17} height={17} className="lucide lucide-send " />
                Enviar via WhatsApp
              </button>
              <p className="text-center text-xs text-gray-400">
                Ao enviar, você será redirecionado para o WhatsApp com a mensagem preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

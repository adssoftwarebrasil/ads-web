import { useState } from 'react';
import { MessageCircle, User, Mail, Phone, Building, Send, AlertCircle, Check } from 'lucide-react';

const WHATSAPP_NUMBER = '554933613600';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    lgpd: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      '*Solicitação de Orçamento - Sati Telecom*',
      `Nome: ${form.name}`,
      `E-mail: ${form.email}`,
      `Telefone: ${form.phone}`,
      `Empresa: ${form.company}`,
      `Serviço de Interesse: ${form.service}`,
    ];
    if (form.message) lines.push(`Mensagem: ${form.message}`);
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-28 bg-gradient-to-br from-[#3d009e] via-[#5a1abd] to-[#3d009e] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#bc0000] rounded-full blur-3xl"></div>
      </div>
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <MessageCircle className="lucide lucide-message-circle w-5 h-5 text-white mr-2" />
            <span className="text-sm font-semibold text-white">Atendimento Rápido</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Solicite seu Orçamento Gratuito
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Preencha o formulário e receba atendimento personalizado via WhatsApp
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 sm:px-8 py-6 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div className="text-white">
                <h3 className="font-bold text-lg">WhatsApp</h3>
                <p className="text-sm text-white/90">Resposta rápida garantida</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Check className="lucide lucide-check w-5 h-5 text-white mr-2" />
              <span className="text-white text-sm font-medium">Online</span>
            </div>
          </div>
          <form className="p-6 sm:p-8 lg:p-10 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Nome Completo *
              </label>
              <div className="relative">
                <User className="lucide lucide-user absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#3d009e] focus:ring-2 focus:ring-[#3d009e]/20 focus:outline-none transition-all"
                  placeholder="Seu nome completo"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail Corporativo *
                </label>
                <div className="relative">
                  <Mail className="lucide lucide-mail absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#3d009e] focus:ring-2 focus:ring-[#3d009e]/20 focus:outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefone/WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="lucide lucide-phone absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#3d009e] focus:ring-2 focus:ring-[#3d009e]/20 focus:outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                Empresa *
              </label>
              <div className="relative">
                <Building className="lucide lucide-building absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#3d009e] focus:ring-2 focus:ring-[#3d009e]/20 focus:outline-none transition-all"
                  placeholder="Nome da sua empresa"
                />
              </div>
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                Serviço de Interesse *
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#3d009e] focus:ring-2 focus:ring-[#3d009e]/20 focus:outline-none transition-all bg-white appearance-none cursor-pointer"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="PABX IP em Nuvem">PABX IP em Nuvem</option>
                  <option value="Telefonia Fixa/Móvel">Telefonia Fixa/Móvel</option>
                  <option value="Portabilidade">Portabilidade</option>
                  <option value="Combinação de serviços">Combinação de serviços</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Mensagem (Opcional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#3d009e] focus:ring-2 focus:ring-[#3d009e]/20 focus:outline-none transition-all resize-none"
                placeholder="Conte-nos mais sobre suas necessidades..."
              ></textarea>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-5">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="lgpd"
                  name="lgpd"
                  required
                  checked={form.lgpd}
                  onChange={(e) => setForm({ ...form, lgpd: e.target.checked })}
                  className="mt-1 w-5 h-5 text-[#3d009e] border-gray-300 rounded focus:ring-[#3d009e] cursor-pointer"
                />
                <label htmlFor="lgpd" className="ml-3 text-sm text-gray-700 cursor-pointer">
                  <span className="font-semibold">Aceito a política de privacidade</span> e autorizo o uso dos meus dados para contato conforme a LGPD *
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="group w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                ENVIAR PARA WHATSAPP
                <Send className="lucide lucide-send w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <div className="flex items-center justify-center text-sm text-gray-500 pt-2">
              <AlertCircle className="lucide lucide-alert-circle w-4 h-4 mr-2" />
              <span>Você será redirecionado para o WhatsApp após enviar</span>
            </div>
          </form>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
            <div className="flex items-center text-white mb-2">
              <Phone className="lucide lucide-phone w-5 h-5 mr-2" />
              <span className="font-semibold">Telefone</span>
            </div>
            <a href="tel:4933613600" className="text-white/90 hover:text-white transition-colors">
              (49) 3361-3600
            </a>
            <br />
            <a href="tel:08003636036" className="text-white/90 hover:text-white transition-colors">
              0800 363-6036
            </a>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
            <div className="flex items-center text-white mb-2">
              <Mail className="lucide lucide-mail w-5 h-5 mr-2" />
              <span className="font-semibold">E-mail</span>
            </div>
            <a
              href="mailto:sati@satitelecom.com.br"
              className="text-white/90 hover:text-white transition-colors block"
            >
              sati@satitelecom.com.br
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

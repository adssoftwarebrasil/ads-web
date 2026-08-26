import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contato" className="py-12 sm:py-16 lg:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div>
            <div className="inline-block bg-[#FFD700]/10 text-[#1A1A2E] px-4 py-2 rounded-full font-semibold text-sm mb-4">FALE CONOSCO</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-4 sm:mb-6 leading-tight">Solicite um <span className="text-[#FFD700]">Orçamento Grátis</span></h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">Preencha o formulário que entraremos em contato rapidamente! Atendimento 24 Horas.</p>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#FFD700]/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Telefone / WhatsApp</div>
                    <a href="tel:+556198449664" className="text-[#1A1A2E] font-bold text-lg hover:text-[#FFD700] transition-colors">(61) 98449-6648</a>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#FFD700]/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">E-mail</div>
                    <a href="mailto:contato@grupthecc.com.br" className="text-[#1A1A2E] font-bold text-lg hover:text-[#FFD700] transition-colors">contato@grupthecc.com.br</a>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#FFD700]/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Atendimento 24 Horas</div>
                    <div className="text-[#1A1A2E] font-bold text-lg"></div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#FFD700]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Endereço</div>
                    <div className="text-[#1A1A2E] font-bold">Rua 10 Chácara 179 LOJA 04 Nº 6A<br />Vicente Pires - Brasília/DF<br />CEP: 72007-395</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-[#1A1A2E] font-semibold mb-2">Nome Completo *</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors border-gray-300 focus:border-[#FFD700]" placeholder="Seu nome completo" value={form.name} onChange={handleChange} />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-[#1A1A2E] font-semibold mb-2">E-mail *</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors border-gray-300 focus:border-[#FFD700]" placeholder="seu@email.com" value={form.email} onChange={handleChange} />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-[#1A1A2E] font-semibold mb-2">Telefone/WhatsApp *</label>
                <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors border-gray-300 focus:border-[#FFD700]" placeholder="(61) 98449-6648" value={form.phone} onChange={handleChange} />
              </div>
              <div className="mb-6">
                <label htmlFor="service" className="block text-[#1A1A2E] font-semibold mb-2">Selecione o Serviço *</label>
                <select id="service" name="service" className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors border-gray-300 focus:border-[#FFD700]" value={form.service} onChange={handleChange}>
                  <option value="">Escolha uma opção</option>
                  <option value="Segurança Eletrônica">Segurança Eletrônica</option>
                  <option value="Chaveiro">Chaveiro</option>
                  <option value="Serralheria">Serralheria</option>
                  <option value="Elétrica Residencial">Elétrica Residencial</option>
                  <option value="Automação Residencial">Automação Residencial</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-[#1A1A2E] font-semibold mb-2">Descreva sua necessidade</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#FFD700] transition-colors resize-none" placeholder="Conte-nos mais detalhes sobre o que você precisa..." value={form.message} onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="w-full bg-[#FFD700] text-[#1A1A2E] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFC700] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-5 h-5 mr-2" fill="currentColor"><path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.247 1.408 1.408-5.247-0.292-0.507c-1.224-2.162-1.87-4.588-1.87-7.07 0-7.51 6.11-13.62 13.62-13.62s13.62 6.11 13.62 13.62c0 7.51-6.11 13.62-13.62 13.62z"></path><path d="M23.305 19.61c-0.329-0.165-1.947-0.961-2.248-1.071s-0.521-0.165-0.741 0.165c-0.22 0.329-0.851 1.071-1.043 1.291s-0.384 0.247-0.713 0.082c-0.329-0.165-1.388-0.512-2.644-1.631-0.977-0.871-1.637-1.947-1.829-2.276s-0.021-0.507 0.144-0.671c0.148-0.148 0.329-0.384 0.493-0.576s0.22-0.329 0.329-0.549c0.11-0.22 0.055-0.412-0.027-0.576s-0.741-1.785-1.016-2.445c-0.267-0.644-0.539-0.556-0.741-0.567-0.192-0.010-0.412-0.012-0.632-0.012s-0.576 0.082-0.877 0.412c-0.302 0.329-1.153 1.128-1.153 2.751s1.181 3.191 1.345 3.411c0.165 0.22 2.324 3.548 5.631 4.976 0.787 0.339 1.4 0.542 1.879 0.693 0.79 0.251 1.509 0.216 2.077 0.131 0.634-0.095 1.947-0.796 2.22-1.565s0.274-1.428 0.192-1.565c-0.082-0.137-0.302-0.22-0.632-0.384z"></path></svg>ENVIAR SOLICITAÇÃO
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

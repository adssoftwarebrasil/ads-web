import { useState, FormEvent } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: '',
    consumption: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      `*Novo contato pelo site*%0A%0A` +
      `*Nome:* ${form.name}%0A` +
      `*Telefone:* ${form.phone}%0A` +
      `*Cidade:* ${form.city}%0A` +
      `*Média de Consumo:* ${form.consumption} kWh/mês%0A` +
      `*Mensagem:* ${form.message}`;
    window.open(`https://wa.me/5584992026504?text=${text}`, '_blank');
  };

  return (
    <section
      id="contato"
      className="py-24 bg-gradient-to-br from-[#00108a] via-[#001570] to-[#00108a] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#facc22]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f88c00]/10 rounded-full blur-3xl"></div>
      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-1000 opacity-0 translate-y-8">
            Fale Conosco
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-[#facc22] to-[#f88c00] rounded-full transition-all duration-1000 delay-200 opacity-0 scale-x-0"></div>
          </div>
          <p className="text-xl text-white/90 transition-all duration-1000 delay-300 opacity-0 translate-y-8">
            Envie sua mensagem direto para nosso WhatsApp
          </p>
        </div>
        <div className="max-w-2xl mx-auto transition-all duration-1000 delay-400 opacity-0 translate-y-8">
          <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-[#00108a] font-semibold mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Seu nome completo"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-[#facc22] focus:outline-none transition-all text-gray-800"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[#00108a] font-semibold mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="(84) 9 9999-9999"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-[#facc22] focus:outline-none transition-all text-gray-800"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-[#00108a] font-semibold mb-2">
                  Cidade
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  placeholder="Ex: São Miguel/RN"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-[#facc22] focus:outline-none transition-all text-gray-800"
                  value={form.city}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="consumption" className="block text-[#00108a] font-semibold mb-2">
                  Média de Consumo Atual (kWh/mês)
                </label>
                <input
                  type="number"
                  id="consumption"
                  name="consumption"
                  required
                  placeholder="Ex: 350"
                  min="0"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-[#facc22] focus:outline-none transition-all text-gray-800"
                  value={form.consumption}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#00108a] font-semibold mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Como podemos ajudar você?"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-[#facc22] focus:outline-none transition-all resize-none text-gray-800"
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-[#facc22] to-[#f88c00] text-white px-8 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                </svg>
                Enviar via WhatsApp
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </button>
            </form>
            <div className="mt-8 pt-8 border-t-2 border-gray-200 grid md:grid-cols-2 gap-6">
              <a
                href="tel:+5584992026504"
                className="flex items-center gap-3 text-[#00108a] hover:text-[#facc22] transition-colors group"
              >
                <div className="w-12 h-12 bg-[#facc22]/10 rounded-full flex items-center justify-center group-hover:bg-[#facc22]/20 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Telefone</p>
                  <p className="font-semibold">(84) 9 9202-6504</p>
                </div>
              </a>
              <a
                href="mailto:calcsolucoes1@gmail.com"
                className="flex items-center gap-3 text-[#00108a] hover:text-[#facc22] transition-colors group"
              >
                <div className="w-12 h-12 bg-[#facc22]/10 rounded-full flex items-center justify-center group-hover:bg-[#facc22]/20 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">E-mail</p>
                  <p className="font-semibold text-sm">calcsolucoes1@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

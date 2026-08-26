import { useState } from 'react';
import { Instagram, Facebook, Linkedin, Send } from 'lucide-react';

const whatsappNumbers: Record<string, string> = {
  matriz: '5579998036999',
  filial: '5582982102088',
};

const unitLabels: Record<string, string> = {
  matriz: 'Matriz - Aracaju/SE',
  filial: 'Filial - Maceió/AL',
};

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    unit: 'matriz',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const number = whatsappNumbers[form.unit];
    const text =
      `Olá! Meu nome é ${form.name}.\n` +
      `E-mail: ${form.email}\n` +
      `Telefone: ${form.phone}\n` +
      `Unidade de interesse: ${unitLabels[form.unit]}\n\n` +
      `Mensagem: ${form.message}`;
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[rgb(216,32,38)]/10 text-[rgb(216,32,38)] rounded-full text-sm font-semibold">
            Entre em Contato
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(28,58,122)] mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-gray-700">
            Preencha o formulário abaixo e nossa equipe entrará em contato com você o
            mais breve possível.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-gradient-to-br from-[rgb(28,58,122)] to-[rgb(26,21,92)] rounded-2xl p-8 md:p-12 text-white mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Estamos Prontos Para Atendê-lo
              </h3>
              <p className="text-lg text-gray-100 mb-8 leading-relaxed">
                Nossa equipe especializada está à disposição para ajudá-lo a encontrar
                as peças certas para seu veículo. Entre em contato conosco por qualquer
                um dos canais abaixo.
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-3">Matriz - Aracaju/SE</h4>
                  <p className="text-gray-200 mb-2">Av. Chanceler Osvaldo Aranha, 161</p>
                  <p className="text-gray-200 mb-2">Telefone: (79) 3241-1388</p>
                  <p className="text-gray-200">WhatsApp: (79) 99803-6999</p>
                </div>
                <div className="border-t border-white/20 pt-6">
                  <h4 className="font-bold text-lg mb-3">Filial - Maceió/AL</h4>
                  <p className="text-gray-200 mb-2">Av. Menino Marcelo, 1040</p>
                  <p className="text-gray-200 mb-2">Telefone: (82) 2121-2750</p>
                  <p className="text-gray-200">WhatsApp: (82) 98210-2088</p>
                </div>
                <div className="border-t border-white/20 pt-6">
                  <h4 className="font-bold text-lg mb-3">E-mail</h4>
                  <a
                    href="mailto:meggaautopecas@gmail.com"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    meggaautopecas@gmail.com
                  </a>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-bold text-lg mb-4">Siga-nos nas Redes Sociais</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/megga_autopecas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.facebook.com/p/Megga-Auto-Pe%C3%A7as-100064029551019"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://br.linkedin.com/company/megga-auto-pecas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-64">
              <img
                src="https://storage.lucasmendes.dev/site-sp/megga%20auto%20pecas/img/atendimento-balcao-loja.webp"
                alt="Atendimento Megga Auto Peças"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(216,32,38)] focus:border-transparent outline-none transition-all"
                  placeholder="Digite seu nome"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(216,32,38)] focus:border-transparent outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(216,32,38)] focus:border-transparent outline-none transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label
                  htmlFor="unit"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Unidade de Interesse *
                </label>
                <select
                  id="unit"
                  name="unit"
                  required
                  value={form.unit}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(216,32,38)] focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="matriz">Matriz - Aracaju/SE</option>
                  <option value="filial">Filial - Maceió/AL</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(216,32,38)] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Descreva suas necessidades..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(216,32,38)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(196,22,28)] transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
              >
                Enviar Mensagem
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-gray-500 text-center">
                Ao enviar o formulário, você será redirecionado para o WhatsApp da
                unidade selecionada.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

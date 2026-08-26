import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    data: '',
    hospedes: '',
    mensagem: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const mensagemWhatsApp = `Olá! Gostaria de fazer uma reserva na Pousada Eco Garden.

Nome: ${formData.nome}
Telefone: ${formData.telefone}
Data: ${formData.data}
Hóspedes: ${formData.hospedes}

Mensagem: ${formData.mensagem || 'Aguardo retorno para confirmar disponibilidade.'}`;

    const encodedMessage = encodeURIComponent(mensagemWhatsApp);
    const whatsappUrl = `https://wa.me/5537998044453?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contato" className="py-20 bg-[#cbd01c]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a2d1a] mb-4">
              Reserve Sua Estadia
            </h2>
            <p className="text-[#2a2d1a]/80 text-lg">
              Preencha o formulário e entraremos em contato pelo WhatsApp
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-[#fbfcf2] rounded-xl p-8 shadow-2xl"
          >
            <div className="mb-6">
              <label
                htmlFor="nome"
                className="block text-[#2a2d1a] font-semibold mb-2"
              >
                Nome Completo *
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                value={formData.nome}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#fbfcf2] border-2 border-[#2a2d1a]/20 focus:border-[#2a2d1a] focus:outline-none transition-colors"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="telefone"
                className="block text-[#2a2d1a] font-semibold mb-2"
              >
                Telefone/WhatsApp *
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                required
                value={formData.telefone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
                className="w-full px-4 py-3 rounded-lg bg-[#fbfcf2] border-2 border-[#2a2d1a]/20 focus:border-[#2a2d1a] focus:outline-none transition-colors"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="data"
                  className="block text-[#2a2d1a] font-semibold mb-2"
                >
                  Data Desejada *
                </label>
                <input
                  type="date"
                  id="data"
                  name="data"
                  required
                  value={formData.data}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#fbfcf2] border-2 border-[#2a2d1a]/20 focus:border-[#2a2d1a] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="hospedes"
                  className="block text-[#2a2d1a] font-semibold mb-2"
                >
                  Número de Hóspedes *
                </label>
                <input
                  type="number"
                  id="hospedes"
                  name="hospedes"
                  required
                  min="1"
                  value={formData.hospedes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#fbfcf2] border-2 border-[#2a2d1a]/20 focus:border-[#2a2d1a] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="mensagem"
                className="block text-[#2a2d1a] font-semibold mb-2"
              >
                Mensagem (Opcional)
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={4}
                value={formData.mensagem}
                onChange={handleChange}
                placeholder="Informações adicionais sobre sua reserva..."
                className="w-full px-4 py-3 rounded-lg bg-[#fbfcf2] border-2 border-[#2a2d1a]/20 focus:border-[#2a2d1a] focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2a2d1a] text-[#fbfcf2] py-4 rounded-lg font-bold text-lg hover:bg-[#1a1d0f] transition-all transform hover:scale-105 shadow-lg"
            >
              Enviar Solicitação via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

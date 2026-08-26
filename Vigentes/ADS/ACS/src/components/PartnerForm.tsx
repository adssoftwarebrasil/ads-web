import { useState } from 'react';
import { Users, Send } from 'lucide-react';

export default function PartnerForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    cep: '',
    type: 'indicador',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const typeLabel = formData.type === 'indicador' ? 'Indicador de Negócios' : 'Representante Comercial';
    const mailtoLink = `mailto:acesar@acsbrasilbahia.com.br?subject=Seja Parceiro - ${typeLabel}&body=Nome: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATelefone: ${formData.phone}%0D%0AEndereço: ${formData.address}%0D%0ACEP: ${formData.cep}%0D%0ATipo: ${typeLabel}%0D%0A%0D%0AMensagem:%0D%0A${formData.message}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        cep: '',
        type: 'indicador',
        message: ''
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="parceiro" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-[rgb(87,168,45)] to-[rgb(253,192,20)] rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-white" size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[rgb(87,168,45)]">
              Seja nosso Parceiro Comercial
            </h2>
            <div className="w-24 h-1 bg-[rgb(253,192,20)] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700">
              Ganhe uma renda extra divulgando nossos consórcios!
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome e Sobrenome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(87,168,45)] focus:border-transparent outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(87,168,45)] focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    DDD + Telefone WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(87,168,45)] focus:border-transparent outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="cep" className="block text-sm font-medium text-gray-700 mb-2">
                    CEP *
                  </label>
                  <input
                    type="text"
                    id="cep"
                    name="cep"
                    required
                    value={formData.cep}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(87,168,45)] focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Endereço Completo *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(87,168,45)] focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Parceria *
                </label>
                <select
                  id="type"
                  name="type"
                  required
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(87,168,45)] focus:border-transparent outline-none transition"
                >
                  <option value="indicador">Indicador de Negócios</option>
                  <option value="representante">Representante Comercial</option>
                </select>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                {formData.type === 'indicador' ? (
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Indicador de Negócios</h4>
                    <p className="text-sm text-blue-800">
                      Aproveite para aumentar sua renda SEM fazer força! Divulgue em suas redes sociais, fale com seus amigos, grupos de Facebook, WhatsApp e outros. Consiga clientes interessados em comprar imóveis pelo consórcio e nos indique! Se o negócio for concretizado, ganhará um BÔNUS prêmio entre R$ 200,00 e R$ 1.000,00 por negócio fechado, dependendo do valor do crédito vendido.
                    </p>
                    <p className="text-xs text-blue-700 mt-2 italic">
                      * A premiação somente será paga por indicação com negócio fechado e confirmação do pagamento da 1ª mensalidade pelo cliente indicado.
                    </p>
                  </div>
                ) : (
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Representante Comercial</h4>
                    <p className="text-sm text-blue-800">
                      Seja dono de seu próprio negócio! Inicie com excelentes condições de comissionamento e contrato firmado para venda de consórcios. Será necessária a constituição de pessoa jurídica Ltda., pode ser unipessoal. Ganhos estimados acima de R$ 10.000,00 (dez mil reais).
                    </p>
                    <p className="text-xs text-blue-700 mt-2 italic">
                      * Cadastro sujeito a aprovação. É necessário já possuir experiência com vendas.
                    </p>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(87,168,45)] focus:border-transparent outline-none transition resize-none"
                  placeholder="Conte-nos mais sobre seu interesse em ser nosso parceiro..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[rgb(87,168,45)] to-[rgb(253,192,20)] text-white px-6 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <Send className="mr-2" size={20} />
                {isSubmitting ? 'Enviando...' : 'Enviar Pré-Cadastro'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const productOptions = [
  { value: 'P13', label: 'Botijão P13 (13kg)' },
  { value: 'P20', label: 'Botijão P20 (20kg)' },
  { value: 'P45', label: 'Botijão P45 (45kg)' },
  { value: 'Acessórios', label: 'Acessórios' },
];

function Contact() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [produto, setProduto] = useState('P13');
  const [observacoes, setObservacoes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message =
      `Olá! Gostaria de fazer um pedido:\n\n` +
      `*Nome:* ${nome}\n` +
      `*Telefone:* ${telefone}\n` +
      `*Endereço:* ${endereco}\n` +
      `*Produto:* ${produto}` +
      (observacoes ? `\n*Observações:* ${observacoes}` : '');
    const url = `https://wa.me/5516992821647?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-br from-[rgb(219,138,69)] to-[rgb(199,118,49)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-700 opacity-0 translate-y-10">
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Faça Seu Pedido Agora!
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Preencha o formulário ou clique para falar no WhatsApp
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="lucide lucide-phone w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">WhatsApp</div>
                  <a
                    href="https://wa.me/5516992821647"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (16) 99282-1647
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="lucide lucide-mail w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a
                    href="mailto:moreno3939@gmail.com"
                    className="hover:underline"
                  >
                    moreno3939@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="lucide lucide-clock w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">
                    Horários de Atendimento
                  </div>
                  <div className="space-y-1 text-white/90">
                    <div>Segunda a Sábado: 8h às 21h30</div>
                    <div>Domingos e Feriados: 8h às 15h</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Solicite Seu Botijão
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(219,138,69)] focus:outline-none transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label
                  htmlFor="telefone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  required
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(219,138,69)] focus:outline-none transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label
                  htmlFor="endereco"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Endereço Completo *
                </label>
                <input
                  type="text"
                  id="endereco"
                  required
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(219,138,69)] focus:outline-none transition-colors"
                  placeholder="Rua, número, bairro, cidade"
                />
              </div>
              <div>
                <label
                  htmlFor="produto"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Produto Desejado *
                </label>
                <select
                  id="produto"
                  required
                  value={produto}
                  onChange={(e) => setProduto(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(219,138,69)] focus:outline-none transition-colors"
                >
                  {productOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="observacoes"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Observações
                </label>
                <textarea
                  id="observacoes"
                  rows={3}
                  value={observacoes}
                  onChange={(e) => setObservacoes(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(219,138,69)] focus:outline-none transition-colors resize-none"
                  placeholder="Alguma informação adicional?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(219,138,69)] text-white py-4 rounded-full font-bold text-lg hover:bg-[rgb(199,118,49)] transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                </svg>
                <span>Enviar Pedido via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

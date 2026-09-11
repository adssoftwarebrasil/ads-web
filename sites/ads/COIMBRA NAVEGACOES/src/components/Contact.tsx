import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/scroll';

const locais = [
  'Manaus',
  'Nova Olinda do Norte',
  'Borba',
  'Novo Aripuanã',
  'Manicoré',
];

export default function Contact() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: '',
    mensagem: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message =
      `*Solicitação de Orçamento*%0A%0A` +
      `*Nome:* ${form.nome}%0A` +
      `*Email:* ${form.email}%0A` +
      `*Telefone:* ${form.telefone}%0A` +
      `*Serviço:* ${form.servico}%0A` +
      `*Mensagem:* ${form.mensagem}`;
    window.open(`${WHATSAPP_URL}?text=${message}`, '_blank');
  };

  return (
    <section
      id="contato"
      className="py-12 lg:py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(41,41,41)] mb-4">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-[rgb(253,133,17)] mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-[rgb(160,180,187)] max-w-3xl mx-auto">
            Estamos prontos para atender você. Solicite um orçamento ou tire suas
            dúvidas.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6 lg:space-y-8">
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
              <h3 className="text-xl lg:text-2xl font-bold text-[rgb(41,41,41)] mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[rgb(6,172,50)] p-3 rounded-lg flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    {' '}
                    <h4 className="font-semibold text-[rgb(41,41,41)] mb-1">
                      Endereço
                    </h4>
                    <p className="text-[rgb(160,180,187)] text-sm sm:text-base">
                      Rua Lauro Bittencourt, nº 118
                      <br />
                      Santo Antonio, Manaus/AM
                      <br />
                      CEP 69029-060
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[rgb(253,133,17)] p-3 rounded-lg flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[rgb(41,41,41)] mb-1">
                      Telefone/WhatsApp
                    </h4>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgb(6,172,50)] hover:underline text-sm sm:text-base"
                    >
                      (92) 99983-7943
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[rgb(41,41,41)] p-3 rounded-lg flex-shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-[rgb(41,41,41)] mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:grupocoimbra.financeiro@gmail.com"
                      className="text-[rgb(6,172,50)] hover:underline break-all text-sm sm:text-base"
                    >
                      grupocoimbra.financeiro@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[rgb(160,180,187)] p-3 rounded-lg flex-shrink-0">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[rgb(41,41,41)] mb-2">
                      Horário de Funcionamento
                    </h4>
                    <div className="text-[rgb(160,180,187)] space-y-1 text-sm">
                      <p>Segunda a Quinta: 07:00 - 17:00</p>
                      <p>Sexta-feira: 08:00 - 17:00</p>
                      <p>Sábado e Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[rgb(6,172,50)] to-[rgb(5,150,43)] rounded-2xl p-6 lg:p-8 text-white">
              <h3 className="text-xl lg:text-2xl font-bold mb-4">
                Locais Atendidos
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {locais.map((local) => (
                  <div key={local} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">{local}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg h-fit">
            <h3 className="text-xl lg:text-2xl font-bold text-[rgb(41,41,41)] mb-6">
              Solicite um Orçamento
            </h3>
            <form className="space-y-4 lg:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-semibold text-[rgb(41,41,41)] mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(6,172,50)] focus:outline-none transition-colors text-sm sm:text-base"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[rgb(41,41,41)] mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(6,172,50)] focus:outline-none transition-colors text-sm sm:text-base"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="telefone"
                  className="block text-sm font-semibold text-[rgb(41,41,41)] mb-2"
                >
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  required
                  value={form.telefone}
                  onChange={(e) =>
                    setForm({ ...form, telefone: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(6,172,50)] focus:outline-none transition-colors text-sm sm:text-base"
                  placeholder="(92) 99999-9999"
                />
              </div>
              <div>
                <label
                  htmlFor="servico"
                  className="block text-sm font-semibold text-[rgb(41,41,41)] mb-2"
                >
                  Serviço de Interesse *
                </label>
                <select
                  id="servico"
                  name="servico"
                  required
                  value={form.servico}
                  onChange={(e) =>
                    setForm({ ...form, servico: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(6,172,50)] focus:outline-none transition-colors text-sm sm:text-base bg-white"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Transporte de Passageiros">
                    Transporte de Passageiros
                  </option>
                  <option value="Transporte de Encomendas">
                    Transporte de Encomendas
                  </option>
                  <option value="Transporte de Cargas">
                    Transporte de Cargas
                  </option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="mensagem"
                  className="block text-sm font-semibold text-[rgb(41,41,41)] mb-2"
                >
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={4}
                  value={form.mensagem}
                  onChange={(e) =>
                    setForm({ ...form, mensagem: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(6,172,50)] focus:outline-none transition-colors resize-none text-sm sm:text-base"
                  placeholder="Descreva suas necessidades..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(6,172,50)] text-white py-3 lg:py-4 rounded-lg font-bold text-base lg:text-lg hover:bg-[rgb(5,150,43)] transition-all hover:shadow-xl hover:scale-105"
              >
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

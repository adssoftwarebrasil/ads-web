import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { sendEmail } from '../lib/form';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  // Novos estados para controle do envio (Loading, Sucesso e Erro)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Envia os dados com as chaves exatas que a nossa API (Netlify) está esperando
      await sendEmail({
        full_name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service_type: formData.service,
        message: formData.message,
      });

      setSubmitted(true);
      
      // Limpa o formulário após o sucesso
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });

      // Esconde a mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);

    } catch (err) {
      setError('Falha ao enviar o orçamento. Por favor, tente novamente ou nos chame no WhatsApp.');
      console.error('Erro ao enviar email:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Limpa o erro assim que o usuário começa a digitar novamente
    if (error) setError(null);
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#01904B] to-[#0379CB] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender você. Solicite um orçamento sem compromisso
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Coluna de Informações (Mantida intacta) */}
          <div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-8">Informações de Contato</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-[#01904B] to-[#0379CB] p-3 rounded-xl flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Telefones</h4>
                    <a href="tel:7536263728" className="text-gray-300 hover:text-white transition-colors block">
                      (75) 3626-3728
                    </a>
                    <a href="tel:75991231578" className="text-gray-300 hover:text-white transition-colors block">
                      (75) 99123-1578
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-[#01904B] to-[#0379CB] p-3 rounded-xl flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Endereço</h4>
                    <p className="text-gray-300">
                      R. Rio de Contas, 255<br />
                      Brasília, Feira de Santana - BA<br />
                      CEP: 44088-396
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-[#01904B] to-[#0379CB] p-3 rounded-xl flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Horário de Atendimento</h4>
                    <p className="text-gray-300">
                      Segunda a Quinta: 07:00 às 18:00<br />
                      Sexta-feira: 07:00 às 17:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-[#01904B] to-[#0379CB] p-3 rounded-xl flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">E-mail</h4>
                    <p className="text-gray-300">
                      feirafios@yahoo.com.br
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/feira%20fios%2Fimg%2Flogo-sem-texto-sem-fundo.webp"
                  alt="Feira Fios"
                  className="h-20 w-auto opacity-50"
                />
              </div>
            </div>
          </div>

          {/* Coluna do Formulário */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Solicite um Orçamento
              </h3>

              {/* Mensagem de Sucesso */}
              {submitted && (
                <div className="bg-green-50 border-l-4 border-[#01904B] text-green-800 p-4 mb-6 rounded-r-xl transition-all" role="alert">
                  <strong className="font-bold block">Sucesso!</strong>
                  <span className="block sm:inline">Seu pedido foi enviado. Entraremos em contato em breve.</span>
                </div>
              )}

              {/* Mensagem de Erro */}
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-r-xl transition-all" role="alert">
                  <strong className="font-bold block">Erro!</strong>
                  <span className="block sm:inline">{error}</span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#01904B] focus:ring-2 focus:ring-[#01904B]/20 outline-none transition-all disabled:bg-gray-100 disabled:opacity-60"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#01904B] focus:ring-2 focus:ring-[#01904B]/20 outline-none transition-all disabled:bg-gray-100 disabled:opacity-60"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#01904B] focus:ring-2 focus:ring-[#01904B]/20 outline-none transition-all disabled:bg-gray-100 disabled:opacity-60"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Serviço de Interesse *
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#01904B] focus:ring-2 focus:ring-[#01904B]/20 outline-none transition-all disabled:bg-gray-100 disabled:opacity-60"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="Rebobinagem de Motores">Rebobinagem de Motores</option>
                    <option value="Manutenção Preventiva">Manutenção Preventiva</option>
                    <option value="Manutenção Corretiva">Manutenção Corretiva</option>
                    <option value="Soluções Personalizadas">Soluções Personalizadas</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#01904B] focus:ring-2 focus:ring-[#01904B]/20 outline-none transition-all resize-none disabled:bg-gray-100 disabled:opacity-60"
                    placeholder="Conte-nos mais sobre sua necessidade"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#01904B] to-[#0379CB] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
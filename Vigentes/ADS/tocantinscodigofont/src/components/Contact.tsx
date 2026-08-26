import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Olá! Vim do site e gostaria de mais informações.%0A%0A` +
      `Nome: ${formData.name}%0A` +
      `Telefone: ${formData.phone}%0A` +
      `Email: ${formData.email}%0A` +
      `Produto de Interesse: ${formData.product}%0A` +
      `Mensagem: ${formData.message}`;

    window.open(`https://wa.me/556392280772?text=${whatsappMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[rgb(78,128,196)]/10 rounded-full px-6 py-2 mb-6">
            <p className="text-[rgb(51,71,144)] font-semibold">Entre em Contato</p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(45,62,84)] mb-6">
            Fale Conosco
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender você. Entre em contato e solicite seu orçamento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[rgb(45,62,84)] mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(78,128,196)] focus:ring-2 focus:ring-[rgb(78,128,196)]/20 outline-none transition-all duration-200"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[rgb(45,62,84)] mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(78,128,196)] focus:ring-2 focus:ring-[rgb(78,128,196)]/20 outline-none transition-all duration-200"
                  placeholder="(63) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[rgb(45,62,84)] mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(78,128,196)] focus:ring-2 focus:ring-[rgb(78,128,196)]/20 outline-none transition-all duration-200"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="product" className="block text-sm font-semibold text-[rgb(45,62,84)] mb-2">
                  Produto de Interesse
                </label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(78,128,196)] focus:ring-2 focus:ring-[rgb(78,128,196)]/20 outline-none transition-all duration-200"
                >
                  <option value="">Selecione um produto</option>
                  <option value="Tambores/Bombonas 200L">Tambores/Bombonas 200L</option>
                  <option value="Container IBC 1000L">Container IBC 1000L</option>
                  <option value="Cochos para Gado">Cochos para Gado</option>
                  <option value="Bebedouros">Bebedouros</option>
                  <option value="Chapas de Polietileno (Tecnil)">Chapas de Polietileno (Tecnil)</option>
                  <option value="Arame Farpado">Arame Farpado</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[rgb(45,62,84)] mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(78,128,196)] focus:ring-2 focus:ring-[rgb(78,128,196)]/20 outline-none transition-all duration-200 resize-none"
                  placeholder="Como podemos ajudar você?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[rgb(51,71,144)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(78,128,196)] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
              >
                Enviar pelo WhatsApp
              </button>

              <p className="text-sm text-gray-500 text-center">
                Ao enviar, você será redirecionado para o WhatsApp com suas informações pré-preenchidas.
              </p>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-[rgb(45,62,84)] mb-6">
                Informações de Contato
              </h3>

              <div className="flex items-start space-x-4">
                <div className="bg-[rgb(78,128,196)]/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[rgb(51,71,144)]" />
                </div>
                <div>
                  <p className="font-semibold text-[rgb(45,62,84)] mb-1">Endereço</p>
                  <p className="text-gray-600">
                    Av. Transbrasiliana, S/N - Qd. 85 Lotes 11/12<br />
                    Vila Milena, Paraíso do Tocantins - TO<br />
                    CEP: 77600-000
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[rgb(78,128,196)]/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[rgb(51,71,144)]" />
                </div>
                <div>
                  <p className="font-semibold text-[rgb(45,62,84)] mb-1">Telefones</p>
                  <p className="text-gray-600">
                    <a href="tel:6336023333" className="hover:text-[rgb(78,128,196)] transition-colors">
                      (63) 3602-3333
                    </a>
                    <br />
                    <a href="https://wa.me/556392280772" target="_blank" rel="noopener noreferrer" className="hover:text-[rgb(78,128,196)] transition-colors">
                      (63) 99228-0772 (WhatsApp)
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[rgb(78,128,196)]/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[rgb(51,71,144)]" />
                </div>
                <div>
                  <p className="font-semibold text-[rgb(45,62,84)] mb-1">Site</p>
                  <p className="text-gray-600">tamborariatocantins.com.br</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[rgb(78,128,196)]/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[rgb(51,71,144)]" />
                </div>
                <div>
                  <p className="font-semibold text-[rgb(45,62,84)] mb-1">Horário de Atendimento</p>
                  <p className="text-gray-600">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.336423923876!2d-48.885747524966874!3d-10.15328488996009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93234fd7f88f765f%3A0x6e7912c54ddf66ab!2sTamboraria%20Tocantins!5e0!3m2!1spt-BR!2sbr!4v1768316569807!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Tamboraria Tocantins"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

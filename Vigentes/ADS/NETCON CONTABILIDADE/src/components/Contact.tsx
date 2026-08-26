import { useState } from 'react';
import { Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}.%0AE-mail: ${email}%0ATelefone: ${phone}%0AMensagem: ${message}`;
    window.open(`https://wa.me/5595991548154?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[rgb(0,0,87)] text-center mb-4">
          Pronto para Impulsionar seus Resultados?
        </h2>
        <p className="text-gray-700 text-lg text-center mb-12 max-w-2xl mx-auto">
          Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer. Atendemos
          em Boa Vista - RR (todos os bairros).
        </p>
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[rgb(0,0,87)] rounded-full flex items-center justify-center mr-4">
                  <Phone className="lucide lucide-phone text-white" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-[rgb(0,0,87)]">WhatsApp</p>
                  <a href="https://wa.me/5595991548154" className="text-gray-700 hover:text-[rgb(211,0,0)]">
                    +55 95 99154-8154
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[rgb(0,0,87)] rounded-full flex items-center justify-center mr-4">
                  <Mail className="lucide lucide-mail text-white" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-[rgb(0,0,87)]">E-mail</p>
                  <a href="mailto:net.con@outlook.com.br" className="text-gray-700 hover:text-[rgb(211,0,0)]">
                    net.con@outlook.com.br
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[rgb(0,0,87)] rounded-full flex items-center justify-center mr-4">
                  <Clock className="lucide lucide-clock text-white" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-[rgb(0,0,87)]">Horário</p>
                  <p className="text-gray-700">Seg a Sex: 08:00 às 12:00 e 14:00 às 18:00</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.instagram.com/contadorpaulomourao/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[rgb(0,0,87)] rounded-full flex items-center justify-center hover:bg-[rgb(211,0,0)] transition-colors"
              >
                <Instagram className="lucide lucide-instagram text-white" size={24} />
              </a>
              <a
                href="https://www.facebook.com/netcon.contabilidade"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[rgb(0,0,87)] rounded-full flex items-center justify-center hover:bg-[rgb(211,0,0)] transition-colors"
              >
                <Facebook className="lucide lucide-facebook text-white" size={24} />
              </a>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[rgb(0,0,87)] mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,0,87)] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[rgb(0,0,87)] mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,0,87)] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[rgb(0,0,87)] mb-2">
                  Telefone/WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,0,87)] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[rgb(0,0,87)] mb-2">
                  Como podemos ajudar?
                </label>
                <textarea
                  id="message"
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,0,87)] focus:border-transparent outline-none resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(0,0,87)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(0,0,107)] transition-colors font-semibold flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                ENVIAR MENSAGEM
              </button>
            </form>
          </div>
          <div className="bg-gray-50 p-2 rounded-lg shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.06226797021813!2d-60.73953902797318!3d2.8172144088047126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d9305403852b165%3A0x1f4e3eeda4aee1aa!2sNetCon%20Certificados%20Digitais!5e0!3m2!1spt-PT!2sbr!4v1760059173543!5m2!1spt-PT!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização NetCon Contabilidade"
              style={{ border: '0px', minHeight: '400px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

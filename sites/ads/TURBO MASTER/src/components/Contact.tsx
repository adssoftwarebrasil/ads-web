import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';

export default function Contact() {
  const [name, setName] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message =
      `Olá! Gostaria de solicitar um orçamento.\n\n` +
      `*Nome:* ${name}\n` +
      `*Veículo:* ${vehicle}\n` +
      `*Serviço desejado:* ${service}`;
    const url = `https://wa.me/5565992174220?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="bg-gray-950 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="text-primary-500 text-xs font-bold tracking-widest uppercase">
              Fale conosco
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-3 mb-5 leading-tight">
              Entre em<br />
              <span className="text-primary-500">Contato</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10">
              Estamos localizados em Cuiabá - MT para oferecer o melhor serviço em turbinas. Entre em
              contato ou visite nossa oficina.
            </p>
            <div className="flex flex-col gap-5 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-600/10 border border-primary-600/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="lucide lucide-phone text-primary-500" width={18} height={18} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-medium mb-0.5">Telefone / WhatsApp</p>
                  <a
                    href="tel:+5565992174220"
                    className="text-gray-200 hover:text-primary-400 text-sm font-medium transition-colors break-words"
                  >
                    (65) 99217-4220
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-600/10 border border-primary-600/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="lucide lucide-mail text-primary-500" width={18} height={18} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-medium mb-0.5">E-mail Geral</p>
                  <a
                    href="mailto:turbomaster1710@gmail.com"
                    className="text-gray-200 hover:text-primary-400 text-sm font-medium transition-colors break-words"
                  >
                    turbomaster1710@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-600/10 border border-primary-600/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="lucide lucide-mail text-primary-500" width={18} height={18} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-medium mb-0.5">E-mail Orçamentos</p>
                  <a
                    href="mailto:turbomasterorcamentos@gmail.com"
                    className="text-gray-200 hover:text-primary-400 text-sm font-medium transition-colors break-words"
                  >
                    turbomasterorcamentos@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-600/10 border border-primary-600/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="lucide lucide-map-pin text-primary-500" width={18} height={18} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-medium mb-0.5">Endereço</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Av.+Z,+120+-+Distrito+Industrial,+Cuiab%C3%A1+-+MT,+78098-530"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-primary-400 text-sm font-medium transition-colors break-words"
                  >
                    Av. Z, 120 - Distrito Industrial, Cuiabá - MT, 78098-530
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-600/10 border border-primary-600/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="lucide lucide-clock text-primary-500" width={18} height={18} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-medium mb-0.5">Horário de Funcionamento</p>
                  <p className="text-gray-200 text-sm font-medium">07:30 às 11:30 / 13:00 às 17:45</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-600/10 border border-primary-600/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Instagram
                    className="lucide lucide-instagram text-primary-500"
                    width={18}
                    height={18}
                  />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-medium mb-0.5">Instagram</p>
                  <a
                    href="https://instagram.com/turbo_master_mt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-primary-400 text-sm font-medium transition-colors break-words"
                  >
                    @turbo_master_mt
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-800 h-64 w-full grayscale-[0.5] hover:grayscale-0 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps?q=Av.+Z,+120+-+Distrito+Industrial,+Cuiab%C3%A1+-+MT,+78098-530&hl=pt-BR&output=embed"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-10 sticky top-28">
            <h3 className="text-white font-bold text-xl mb-2">Solicite um Orçamento</h3>
            <p className="text-gray-400 text-sm mb-8">
              Preencha abaixo e entraremos em contato pelo WhatsApp em breve.
            </p>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div>
                <label className="text-gray-400 text-xs font-medium mb-1.5 block">Seu nome</label>
                <input
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Digite seu nome"
                  className="w-full bg-gray-800 border border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 text-white placeholder-gray-500 text-sm px-4 py-3 rounded-xl outline-none transition-all"
                />
              </div>
              <div>
                <label className="text-gray-400 text-xs font-medium mb-1.5 block">
                  Veículo (marca, modelo e ano)
                </label>
                <input
                  name="vehicle"
                  type="text"
                  required
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  placeholder="Ex: Ford F-250 2020"
                  className="w-full bg-gray-800 border border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 text-white placeholder-gray-500 text-sm px-4 py-3 rounded-xl outline-none transition-all"
                />
              </div>
              <div>
                <label className="text-gray-400 text-xs font-medium mb-1.5 block">
                  Serviço desejado
                </label>
                <textarea
                  name="service"
                  required
                  rows={3}
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  placeholder="Descreva o problema ou serviço que precisa..."
                  className="w-full bg-gray-800 border border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 text-white placeholder-gray-500 text-sm px-4 py-3 rounded-xl outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary-900/40 text-sm"
              >
                <WhatsappIcon className="w-4 h-4" />
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

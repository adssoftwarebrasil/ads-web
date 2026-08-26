import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { WhatsAppIcon } from './icons';

const productOptions = [
  'Máquina de Solda MIG',
  'Máquina de Solda TIG',
  'Máquina de Solda Eletrodo',
  'Locação de Máquina de Solda',
  'Kit Maçarico para Locação',
  'Consumíveis para Solda',
  'EPIs para Soldagem',
  'Ferramentas Elétricas',
  'Outro',
];

export default function Contato() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [product, setProduct] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      `Olá! Meu nome é ${name}.`,
      `Telefone: ${phone}`,
      product ? `Interesse: ${product}` : '',
      message ? `Mensagem: ${message}` : '',
    ].filter(Boolean);
    const url = `http://wa.me/556198770047?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-brand-orange/10 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Entre em Contato
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark">Fale com a Gente</h2>
        </div>
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-brand-dark text-lg mb-5">Informações de Contato</h3>
              <div className="space-y-4">
                <a href="tel:+556198770047" className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-colors">
                    <Phone
                      className="lucide lucide-phone text-brand-orange group-hover:text-white transition-colors"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Telefone / WhatsApp</div>
                    <div className="text-sm font-semibold text-brand-dark">(61) 9 9877-0047</div>
                    <div className="text-sm font-semibold text-brand-dark">Fixo: (61) 3550-4750</div>
                  </div>
                </a>
                <a
                  href="mailto:matheus.santana@ciadasolda.com.br"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-colors">
                    <Mail
                      className="lucide lucide-mail text-brand-orange group-hover:text-white transition-colors"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">E-mail</div>
                    <div className="text-sm font-semibold text-brand-dark break-all">
                      matheus.santana@ciadasolda.com.br
                    </div>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                    <MapPin
                      className="lucide lucide-map-pin text-brand-orange"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Endereço</div>
                    <div className="text-sm font-semibold text-brand-dark">
                      SIA Trecho 17, Rua 14, Lt 70/90
                    </div>
                    <div className="text-sm text-gray-500">Brasília-DF, 71200-240</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-brand-orange/5 border border-brand-orange/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-sm font-semibold text-brand-dark">Online agora</span>
              </div>
              <p className="text-sm text-gray-600">Seg–Sex das 08h às 18h</p>
              <p className="text-sm text-gray-600">Sáb das 08h às 12h</p>
              <a
                href="http://wa.me/556198770047"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-bold px-5 py-3 rounded-xl transition-all duration-200"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                Iniciar Conversa Agora
              </a>
            </div>
          </div>
          <div className="lg:col-span-3 bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="font-bold text-brand-dark text-lg mb-6">Envie sua Mensagem</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Seu nome <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Ex: João Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Telefone / WhatsApp <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(61) 9 9999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Produto ou serviço de interesse
                </label>
                <select
                  name="product"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all appearance-none bg-white"
                >
                  <option value="">Selecione uma opção</option>
                  {productOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Mensagem</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Descreva sua necessidade ou dúvida..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-6 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-orange/30"
              >
                <Send className="lucide lucide-send" width={18} height={18} />
                Enviar pelo WhatsApp
              </button>
              <p className="text-center text-xs text-gray-400">
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pré-preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

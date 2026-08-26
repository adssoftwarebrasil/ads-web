import { useState } from 'react';
import type { FormEvent } from 'react';
import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';

const WHATSAPP_URL = 'http://wa.me/559491009092';
const WHATSAPP_NUMBER = '559491009092';

export default function Location() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const texto = `Olá! Meu nome é ${nome}.%0ATelefone: ${telefone}%0A%0A${mensagem}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, '_blank');
  };

  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#AA1C1F] font-semibold text-sm uppercase tracking-wide">Localização</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1E55] mt-3 mb-6">
              Venha nos <span className="text-[#AA1C1F]">Visitar</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Estamos localizados em Redenção - PA, prontos para atendê-lo
            </p>
            <div className="w-24 h-1 bg-[#AA1C1F] mx-auto mt-6"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#0A1E55] to-[#0A1E55]/90 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-[#AA1C1F] p-3 rounded-lg group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Endereço</h4>
                      <p className="text-[#E6E6E4]">
                        Av. Araguaia, S/N - Novo Horizonte
                        <br />
                        Redenção - PA, 68551-000
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-[#AA1C1F] p-3 rounded-lg group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Telefone</h4>
                      <a href="tel:+559491009092" className="text-[#E6E6E4] hover:text-white transition-colors">
                        (94) 99100-9092
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-[#AA1C1F] p-3 rounded-lg group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">WhatsApp</h4>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E6E6E4] hover:text-white transition-colors"
                      >
                        (94) 99100-9092
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-[#AA1C1F] p-3 rounded-lg group-hover:scale-110 transition-transform">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Horário de Funcionamento</h4>
                      <p className="text-[#E6E6E4]">
                        Segunda a Sábado
                        <br />
                        07:00 às 18:00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#AA1C1F] text-white text-center px-6 py-4 rounded-full hover:bg-[#8A1619] transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Entre em Contato Agora
                  </a>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.553076074908!2d-50.02132772499228!3d-8.04492569198227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92dffd518e7f8429%3A0x269216a65331e4d8!2sFortmaq!5e0!3m2!1spt-BR!2sbr!4v1768327356699!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização FORTMAQ"
                className="absolute inset-0"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#E6E6E4] to-[#E6E6E4]/50 rounded-2xl p-8 sm:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1E55] mb-4">Precisa de um Orçamento?</h3>
              <p className="text-gray-600 text-lg">
                Entre em contato pelo WhatsApp e nossa equipe retornará com todas as informações
              </p>
            </div>
            <form className="max-w-2xl mx-auto space-y-4" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu Nome"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full px-6 py-4 rounded-full border-2 border-gray-300 focus:border-[#AA1C1F] focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  name="telefone"
                  placeholder="Seu Telefone"
                  required
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="w-full px-6 py-4 rounded-full border-2 border-gray-300 focus:border-[#AA1C1F] focus:outline-none transition-colors"
                />
              </div>
              <textarea
                name="mensagem"
                placeholder="Sua Mensagem"
                rows={4}
                required
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-300 focus:border-[#AA1C1F] focus:outline-none transition-colors resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#AA1C1F] text-white px-8 py-4 rounded-full hover:bg-[#8A1619] transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
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

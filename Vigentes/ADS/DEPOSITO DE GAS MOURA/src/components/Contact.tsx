import { useState, FormEvent } from 'react';
import { Phone, Clock, MapPin } from 'lucide-react';

export default function Contact() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const url = `http://wa.me/5562982672012?text=${encodeURIComponent(
      `Olá! Meu nome é ${nome}.\nTelefone: ${telefone}\n\n${mensagem}`
    )}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(28,59,126)] mb-4">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-[rgb(228,29,32)] mx-auto mb-6"></div>
          <p className="text-lg text-[rgb(162,173,190)] max-w-3xl mx-auto">
            Estamos prontos para atender você. Faça seu pedido agora!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-[rgb(28,59,126)] mb-8">Fale Conosco</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-[rgb(228,29,32)]/10 p-3 rounded-full flex-shrink-0">
                  <Phone className="lucide lucide-phone text-[rgb(228,29,32)]" width={24} height={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[rgb(28,59,126)] mb-2">Telefones</h4>
                  <a
                    href="tel:6232581139"
                    className="text-gray-700 hover:text-[rgb(228,29,32)] transition-colors block"
                  >
                    (62) 3258-1139
                  </a>
                  <a
                    href="http://wa.me/5562982672012"
                    className="text-gray-700 hover:text-[rgb(228,29,32)] transition-colors block"
                  >
                    (62) 98267-2012
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-[rgb(228,29,32)]/10 p-3 rounded-full flex-shrink-0">
                  <Clock className="lucide lucide-clock text-[rgb(228,29,32)]" width={24} height={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[rgb(28,59,126)] mb-2">Horário de Funcionamento</h4>
                  <p className="text-gray-700">Segunda a Sábado: 7:30 às 21:00</p>
                  <p className="text-gray-700">Domingo: 7:30 às 17:00</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-[rgb(228,29,32)]/10 p-3 rounded-full flex-shrink-0">
                  <MapPin className="lucide lucide-map-pin text-[rgb(228,29,32)]" width={24} height={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[rgb(28,59,126)] mb-2">Endereço</h4>
                  <p className="text-gray-700">Av. Olávo Bilac, 759</p>
                  <p className="text-gray-700">Quadra 96 Lote 08</p>
                  <p className="text-gray-700">Setor Faiçalville, Goiânia - GO</p>
                  <p className="text-gray-700">CEP: 74360-105</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[rgb(228,29,32)] to-[rgb(28,59,126)] rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Atendimento Especial</h4>
              <p className="mb-6 leading-relaxed">
                Empresas e restaurantes têm atendimento prioritário com entregas programadas nos
                horários de pico. Entre em contato para condições especiais!
              </p>
              <a
                href="http://wa.me/5562982672012?text=Olá!%20Gostaria%20de%20informações%20sobre%20atendimento%20empresarial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[rgb(28,59,126)] px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all"
              >
                Consultar Condições
              </a>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-[rgb(28,59,126)] mb-6">Envie sua Mensagem</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Nome Completo</label>
                  <input
                    type="text"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[rgb(228,29,32)] focus:outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Telefone/WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[rgb(228,29,32)] focus:outline-none transition-colors"
                    placeholder="(62) 00000-0000"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Mensagem</label>
                  <textarea
                    required
                    rows={5}
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[rgb(228,29,32)] focus:outline-none transition-colors resize-none"
                    placeholder="Como podemos ajudar você?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[rgb(228,29,32)] text-white py-4 rounded-full font-bold text-lg hover:bg-[rgb(200,25,28)] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Enviar pelo WhatsApp
                </button>
                <p className="text-sm text-[rgb(162,173,190)] text-center">
                  Ao enviar, você será redirecionado para o WhatsApp com sua mensagem
                  pré-preenchida
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

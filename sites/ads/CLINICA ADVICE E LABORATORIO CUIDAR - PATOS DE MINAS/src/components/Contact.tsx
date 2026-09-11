import { useState } from 'react';
import { Send, MapPin, Clock, Phone } from 'lucide-react';

export default function Contact() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto =
      `Olá! Meu nome é ${nome}.` +
      (empresa ? ` Empresa: ${empresa}.` : '') +
      (telefone ? ` Telefone: ${telefone}.` : '') +
      (mensagem ? ` ${mensagem}` : '');
    window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <span className="text-brand-500 font-semibold text-sm tracking-wider uppercase">Contato</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mt-3 mb-4">
            Entre em Contato Conosco
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Estamos prontos para atender sua empresa. Preencha o formulário ou entre em contato
            diretamente.
          </p>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full mt-4"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">Nome Completo</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">Telefone</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                    placeholder="(34) 99999-9999"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">Empresa</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                    placeholder="Nome da empresa"
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">Mensagem</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-brand-500 hover:bg-brand-600 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/25 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>
          <div className="transition-all duration-700 delay-400 opacity-100 translate-x-0">
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-brand-500" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 text-sm">Endereço</div>
                  <div className="text-neutral-500 text-sm">
                    R. Ana de Oliveira, 181 - Centro, Patos de Minas - MG, 38700-006
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-brand-500" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 text-sm">Horário de Funcionamento</div>
                  <div className="text-neutral-500 text-sm">Segunda a Sexta, 06:00 às 17:30</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-brand-500" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 text-sm">Telefone Principal</div>
                  <div className="text-neutral-500 text-sm">(34) 3823-1771</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.6772681919515!2d-46.51341062480679!3d-18.588583182518235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ae8ace66be731b%3A0x2249871ecf29753e!2sADVICE%20MEDICINA%20E%20ENGENHARIA%20DO%20TRABALHO!5e0!3m2!1spt-BR!2sbr!4v1770397381582!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Advice"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const produtoOpcoes = [
  'Manilhas para Drenagem',
  'Manilhas para Fossa/Sumidouro',
  'Postes para Barracão',
  'Palanques',
  'Bancos de Concreto',
  'Tanques',
  'Blocos e Canaletas',
  'Caixas Sépticas e de Passagem',
  'Outros',
];

export default function Contato() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [produto, setProduto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let texto = `Olá! Vim pelo site e gostaria de solicitar um orçamento.%0A%0A`;
    texto += `*Nome:* ${nome}%0A`;
    texto += `*Telefone:* ${telefone}%0A`;
    texto += `*Produto de Interesse:* ${produto}`;
    if (mensagem.trim()) {
      texto += `%0A*Detalhes:* ${mensagem}`;
    }
    const url = `http://wa.me/5566996428111?text=${texto}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 lg:py-28" style={{ backgroundColor: 'rgb(245, 243, 240)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 border"
            style={{
              borderColor: 'rgb(120, 53, 35)',
              color: 'rgb(120, 53, 35)',
              backgroundColor: 'rgba(120, 53, 35, 0.06)',
            }}
          >
            Entre em Contato
          </div>
          <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark mb-5">
            Solicite seu Orçamento
          </h2>
          <div className="animate-on-scroll section-divider mx-auto mb-5"></div>
          <p className="animate-on-scroll text-brand-gray2 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Preencha o formulário abaixo e receba atendimento imediato pelo WhatsApp. Estamos prontos
            para te ajudar!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          <div className="animate-on-scroll space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-light">
              <h3 className="text-lg font-bold text-brand-dark mb-5">Informações de Contato</h3>
              <div className="space-y-4">
                <a href="tel:+5566996428111" className="block hover:opacity-80 transition-opacity">
                  <div className="flex gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(120, 53, 35, 0.1)' }}
                    >
                      <Phone
                        width={18}
                        height={18}
                        className="lucide lucide-phone"
                        style={{ color: 'rgb(120, 53, 35)' }}
                      />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-brand-gray1 mb-0.5">
                        Telefone / WhatsApp
                      </div>
                      <div className="text-sm font-medium text-brand-dark leading-snug">
                        (66) 9 9642-8111
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="mailto:tibolapremoldados@gmail.com"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <div className="flex gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(120, 53, 35, 0.1)' }}
                    >
                      <Mail
                        width={18}
                        height={18}
                        className="lucide lucide-mail"
                        style={{ color: 'rgb(120, 53, 35)' }}
                      />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-brand-gray1 mb-0.5">
                        E-mail
                      </div>
                      <div className="text-sm font-medium text-brand-dark leading-snug">
                        tibolapremoldados@gmail.com
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://maps.google.com/?q=TIBOLA+PRE+MOLDADOS+EM+PRIMAVERA+DO+LESTE+MT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <div className="flex gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(120, 53, 35, 0.1)' }}
                    >
                      <MapPin
                        width={18}
                        height={18}
                        className="lucide lucide-map-pin"
                        style={{ color: 'rgb(120, 53, 35)' }}
                      />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-brand-gray1 mb-0.5">
                        Endereço
                      </div>
                      <div className="text-sm font-medium text-brand-dark leading-snug">
                        Av. A, 110 – Distrito Industrial José de Alencar, Primavera do Leste – MT
                      </div>
                    </div>
                  </div>
                </a>
                <div>
                  <div className="flex gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(120, 53, 35, 0.1)' }}
                    >
                      <Clock
                        width={18}
                        height={18}
                        className="lucide lucide-clock"
                        style={{ color: 'rgb(120, 53, 35)' }}
                      />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-brand-gray1 mb-0.5">
                        Horário de Funcionamento
                      </div>
                      <div className="text-sm font-medium text-brand-dark leading-snug">
                        Seg–Sex: 7h–11h e 13h–17h | Sáb: 7h–11h
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="animate-on-scroll rounded-2xl overflow-hidden shadow-sm border border-brand-light"
              style={{ height: '260px' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.675670999857!2d-54.26440802487482!3d-15.555507885052041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x937725f6e36219e7%3A0x109d96990703aad5!2sTIBOLA%20PRE%20MOLDADOS%20EM%20PRIMAVERA%20DO%20LESTE%20MT!5e0!3m2!1spt-BR!2sbr!4v1772216367827!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Tibola Pré Moldados"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="animate-on-scroll animate-on-scroll-delay-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-brand-light"
            >
              <h3 className="text-lg font-bold text-brand-dark mb-6">Enviar Mensagem via WhatsApp</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-gray2 mb-1.5">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: João Silva"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-brand-light text-sm text-brand-dark placeholder:text-brand-gray1 focus:outline-none focus:ring-2 transition-all"
                    style={{ ['--tw-ring-color' as string]: 'rgba(120, 53, 35, 0.3)' }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-gray2 mb-1.5">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: (66) 9 9999-9999"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-brand-light text-sm text-brand-dark placeholder:text-brand-gray1 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-gray2 mb-1.5">
                    Produto de Interesse *
                  </label>
                  <select
                    required
                    value={produto}
                    onChange={(e) => setProduto(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-brand-light text-sm text-brand-dark focus:outline-none transition-all bg-white"
                  >
                    <option value="">Selecione um produto...</option>
                    {produtoOpcoes.map((op) => (
                      <option key={op} value={op}>
                        {op}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-gray2 mb-1.5">
                    Mensagem / Detalhes do Pedido
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Descreva sua necessidade (quantidade, tamanho, local de entrega...)"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-brand-light text-sm text-brand-dark placeholder:text-brand-gray1 focus:outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-sm text-white shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300 active:scale-95"
                  style={{ backgroundColor: 'rgb(120, 53, 35)' }}
                >
                  <Send width={16} height={16} className="lucide lucide-send" />
                  Enviar pelo WhatsApp
                </button>
                <p className="text-center text-xs text-brand-gray1">
                  Ao enviar, você será redirecionado para o WhatsApp com a mensagem pré-preenchida.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

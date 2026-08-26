import { useState, type FormEvent } from 'react';
import { MapPin, Clock, Phone, Send } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';

const serviceOptions = [
  'Retífica de Motor',
  'Montagem de Motor',
  'Suspensão e Balanceamento',
  'Sistema de Freios',
  'Troca de Pneus',
  'Troca de Óleo',
  'Outro',
];

export default function Contact() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [servico, setServico] = useState('');
  const [mensagem, setMensagem] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    let text = 'Olá! Vim pelo site da Retigrilo e gostaria de um orçamento.';
    if (nome) text += `\n\nNome: ${nome}`;
    if (telefone) text += `\nTelefone: ${telefone}`;
    if (servico) text += `\nServiço de interesse: ${servico}`;
    if (mensagem) text += `\nMensagem: ${mensagem}`;
    window.open(`https://wa.me/5566999585577?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <section id="contato" className="py-20 md:py-28 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center mb-14">
          <span className="inline-block bg-primary/15 text-secondary font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark mb-5">
            Solicite seu
            <span className="block" style={{ color: 'rgb(76, 181, 73)' }}>
              Orçamento Agora
            </span>
          </h2>
          <p className="text-brand-slate text-lg max-w-xl mx-auto">
            Preencha o formulário abaixo e entraremos em contato via WhatsApp com as melhores condições para
            você.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="animate-on-scroll-left">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-brand-dark text-sm font-semibold mb-2">
                  Seu nome <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: João da Silva"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 text-brand-dark placeholder-brand-slate/50 bg-brand-cream text-sm"
                />
              </div>
              <div>
                <label className="block text-brand-dark text-sm font-semibold mb-2">
                  Telefone / WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(66) 9 9999-9999"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 text-brand-dark placeholder-brand-slate/50 bg-brand-cream text-sm"
                />
              </div>
              <div>
                <label className="block text-brand-dark text-sm font-semibold mb-2">Serviço de interesse</label>
                <select
                  value={servico}
                  onChange={(e) => setServico(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 text-brand-dark bg-brand-cream text-sm appearance-none"
                >
                  <option value="">Selecione um serviço</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-brand-dark text-sm font-semibold mb-2">Mensagem (opcional)</label>
                <textarea
                  rows={4}
                  placeholder="Descreva o problema ou serviço que precisa..."
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 text-brand-dark placeholder-brand-slate/50 bg-brand-cream text-sm resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 text-brand-dark font-bold py-4 px-8 rounded-xl text-base transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30"
                style={{ background: 'linear-gradient(135deg, rgb(145, 200, 68), rgb(76, 181, 73))' }}
              >
                <WhatsappIcon className="w-5 h-5 fill-current" />
                Enviar via WhatsApp
                <Send className="lucide lucide-send" width={17} height={17} />
              </button>
            </form>
          </div>
          <div className="animate-on-scroll-right flex flex-col gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-brand-cream rounded-2xl border border-gray-100">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, rgba(145, 200, 68, 0.2), rgba(76, 181, 73, 0.2))' }}
                >
                  <MapPin className="lucide lucide-map-pin text-secondary" width={20} height={20} />
                </div>
                <div>
                  <div className="text-brand-slate text-xs font-medium mb-1">Endereço</div>
                  <a
                    href="https://maps.google.com/?q=RETIGRILO+RETIFICA+DE+MOTORES"
                    className="text-brand-dark font-semibold text-sm hover:text-secondary transition-colors duration-200"
                  >
                    Av. Júlio José de Campos, 900 — Alta Floresta - MT, 78580-000
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-brand-cream rounded-2xl border border-gray-100">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, rgba(145, 200, 68, 0.2), rgba(76, 181, 73, 0.2))' }}
                >
                  <Clock className="lucide lucide-clock text-secondary" width={20} height={20} />
                </div>
                <div>
                  <div className="text-brand-slate text-xs font-medium mb-1">Horário</div>
                  <div className="text-brand-dark font-semibold text-sm">
                    Seg–Sex: 07:00–11:00 | 13:00–17:00
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-brand-cream rounded-2xl border border-gray-100">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, rgba(145, 200, 68, 0.2), rgba(76, 181, 73, 0.2))' }}
                >
                  <Phone className="lucide lucide-phone text-secondary" width={20} height={20} />
                </div>
                <div>
                  <div className="text-brand-slate text-xs font-medium mb-1">Telefone / WhatsApp</div>
                  <div className="flex flex-col gap-1">
                    <a
                      href="tel:+5566999585577"
                      className="text-brand-dark font-semibold text-sm hover:text-secondary transition-colors duration-200"
                    >
                      (66) 9 9958-5577
                    </a>
                    <a
                      href="tel:+5566996325577"
                      className="text-brand-dark font-semibold text-sm hover:text-secondary transition-colors duration-200"
                    >
                      (66) 9 9632-5577
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex-1 min-h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.821554049544!2d-56.083592224970666!3d-9.865333790233265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93aa31e3e2a71c9f%3A0x26576b3b4282bf30!2sRETIGRILO%20RETIFICA%20DE%20MOTORES!5e0!3m2!1spt-BR!2sbr!4v1776463377189!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Retigrilo"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, type FormEvent } from 'react';
import { Send, MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import Reveal from './Reveal';

const serviceOptions = [
  'Manutenção Preventiva',
  'Manutenção Corretiva',
  'Diagnóstico Eletrônico',
  'Troca de Óleo',
  'Suspensão e Freios',
  'Peças Automotivas',
  'Outro',
];

export default function Contact() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [veiculo, setVeiculo] = useState('');
  const [servico, setServico] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let text = `Olá! Meu nome é ${nome}.`;
    if (telefone) text += `\nTelefone: ${telefone}`;
    if (veiculo) text += `\nVeículo: ${veiculo}`;
    if (servico) text += `\nServiço desejado: ${servico}`;
    if (mensagem) text += `\nMensagem: ${mensagem}`;
    window.open(`http://wa.me/5566984369336?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-speedcar-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-speedcar-red"></span>
              <span className="text-speedcar-red text-xs font-bold tracking-[0.2em] uppercase">
                Fale Conosco
              </span>
              <span className="h-[2px] w-8 bg-speedcar-red"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-speedcar-black leading-tight">
              Entre em Contato
            </h2>
            <p className="text-gray-500 mt-4 leading-relaxed">
              Preencha o formulário e nossa equipe entrará em contato pelo WhatsApp para agendar seu
              atendimento.
            </p>
          </div>
        </Reveal>
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          <Reveal className="lg:col-span-3">
            <form className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">
                    Nome *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full bg-speedcar-gray border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-speedcar-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-speedcar-red/30 focus:border-speedcar-red transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    placeholder="(66) 99999-9999"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    className="w-full bg-speedcar-gray border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-speedcar-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-speedcar-red/30 focus:border-speedcar-red transition-all"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">
                    Veículo
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Hilux 2020"
                    value={veiculo}
                    onChange={(e) => setVeiculo(e.target.value)}
                    className="w-full bg-speedcar-gray border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-speedcar-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-speedcar-red/30 focus:border-speedcar-red transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">
                    Serviço Desejado
                  </label>
                  <select
                    value={servico}
                    onChange={(e) => setServico(e.target.value)}
                    className="w-full bg-speedcar-gray border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-speedcar-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-speedcar-red/30 focus:border-speedcar-red transition-all"
                  >
                    <option value="">Selecione um serviço</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  placeholder="Descreva o problema ou o serviço que precisa..."
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="w-full bg-speedcar-gray border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-speedcar-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-speedcar-red/30 focus:border-speedcar-red transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-speedcar-red hover:bg-red-700 text-white px-8 py-4 rounded-lg text-sm font-bold tracking-wide uppercase transition-all hover:scale-105 hover:shadow-lg hover:shadow-red-900/30 inline-flex items-center justify-center gap-2"
              >
                <Send className="lucide lucide-send w-4 h-4" />
                Enviar pelo WhatsApp
              </button>
            </form>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-2">
            <div className="space-y-6">
              <a
                href="https://maps.google.com/?q=SpeedCar+Centro+Automotivo+Sinop"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:bg-white/60 p-3 -m-3 rounded-xl transition-colors"
              >
                <div className="flex gap-4 group">
                  <div className="w-11 h-11 rounded-lg bg-speedcar-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-speedcar-red transition-colors duration-300">
                    <MapPin className="lucide lucide-map-pin w-5 h-5 text-speedcar-red group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      Endereço
                    </p>
                    <p className="text-speedcar-black text-sm font-medium whitespace-pre-line leading-relaxed">
                      {'R. Colonizador Ênio Pipino, 5485\nSt. Industrial Norte, Sinop - MT'}
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="http://wa.me/5566984369336"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:bg-white/60 p-3 -m-3 rounded-xl transition-colors"
              >
                <div className="flex gap-4 group">
                  <div className="w-11 h-11 rounded-lg bg-speedcar-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-speedcar-red transition-colors duration-300">
                    <Phone className="lucide lucide-phone w-5 h-5 text-speedcar-red group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      WhatsApp
                    </p>
                    <p className="text-speedcar-black text-sm font-medium whitespace-pre-line leading-relaxed">
                      (66) 98436-9336
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="mailto:speedcarsinop@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:bg-white/60 p-3 -m-3 rounded-xl transition-colors"
              >
                <div className="flex gap-4 group">
                  <div className="w-11 h-11 rounded-lg bg-speedcar-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-speedcar-red transition-colors duration-300">
                    <Mail className="lucide lucide-mail w-5 h-5 text-speedcar-red group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      E-mail
                    </p>
                    <p className="text-speedcar-black text-sm font-medium whitespace-pre-line leading-relaxed">
                      speedcarsinop@gmail.com
                    </p>
                  </div>
                </div>
              </a>
              <div className="p-3 -m-3">
                <div className="flex gap-4 group">
                  <div className="w-11 h-11 rounded-lg bg-speedcar-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-speedcar-red transition-colors duration-300">
                    <Clock className="lucide lucide-clock w-5 h-5 text-speedcar-red group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      Horário
                    </p>
                    <p className="text-speedcar-black text-sm font-medium whitespace-pre-line leading-relaxed">
                      Seg-Sex: 7:15 - 11:30 | 13:15 - 18:00
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="https://www.instagram.com/speedcarsinop"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:bg-white/60 p-3 -m-3 rounded-xl transition-colors"
              >
                <div className="flex gap-4 group">
                  <div className="w-11 h-11 rounded-lg bg-speedcar-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-speedcar-red transition-colors duration-300">
                    <Instagram className="lucide lucide-instagram w-5 h-5 text-speedcar-red group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      Instagram
                    </p>
                    <p className="text-speedcar-black text-sm font-medium whitespace-pre-line leading-relaxed">
                      @speedcarsinop
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

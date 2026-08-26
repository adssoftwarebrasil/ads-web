import { useState, type FormEvent } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Instagram, Clock, Send, Lock } from 'lucide-react';

const WHATSAPP_NUMBER = '5562991511688';

const servicos = [
  'Selecione um serviço...',
  'Deck de Madeira',
  'Pergolado',
  'Piso de Madeira',
  'Cerca em Madeira',
  'Parque Infantil',
  'Forro de Madeira',
  'Outro',
];

function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length === 0) return '';
  let out = '(' + digits.slice(0, 2);
  if (digits.length >= 2) out += ') ';
  if (digits.length > 2) out += digits.slice(2, 3);
  if (digits.length > 3) out += ' ' + digits.slice(3, 7);
  if (digits.length > 7) out += '-' + digits.slice(7, 11);
  return out;
}

export default function Contact() {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [servico, setServico] = useState(servicos[0]);
  const [mensagem, setMensagem] = useState('');

  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const linhas = ['Olá! Gostaria de solicitar um orçamento.'];
    if (nome) linhas.push(`Nome: ${nome}`);
    if (whatsapp) linhas.push(`WhatsApp: ${whatsapp}`);
    if (email) linhas.push(`E-mail: ${email}`);
    if (servico && servico !== servicos[0]) linhas.push(`Serviço de interesse: ${servico}`);
    if (mensagem) linhas.push(`Projeto: ${mensagem}`);
    const texto = encodeURIComponent(linhas.join('\n'));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contato"
      className="bg-gradient-to-br from-stone-100 via-amber-50 to-stone-100 py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
                Vamos Transformar Seu Projeto em Realidade
              </h2>
              <p className="text-xl text-stone-600 mb-8">
                Entre em contato conosco. Estamos prontos para atendê-lo!
              </p>
            </div>
            <div className="space-y-6">
              <button
                onClick={openWhatsApp}
                className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow w-full text-left"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="lucide lucide-message-circle text-white w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="text-stone-500 text-sm font-medium mb-1">WhatsApp</div>
                  <div className="text-stone-900 font-semibold text-lg hover:text-amber-600 transition-colors">
                    (62) 9 9151-1688
                  </div>
                </div>
              </button>
              <a
                href="tel:+5562991511688"
                className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                  <Phone className="lucide lucide-phone text-white w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="text-stone-500 text-sm font-medium mb-1">Telefone</div>
                  <div className="text-stone-900 font-semibold text-lg hover:text-amber-600 transition-colors">
                    (62) 9 9151-1688
                  </div>
                </div>
              </a>
              <a
                href="mailto:rochajocta@gmail.com"
                className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                  <Mail className="lucide lucide-mail text-white w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="text-stone-500 text-sm font-medium mb-1">E-mail</div>
                  <div className="text-stone-900 font-semibold text-lg hover:text-amber-600 transition-colors break-all">
                    rochajocta@gmail.com
                  </div>
                </div>
              </a>
              <a
                href="https://maps.google.com/?q=Rua+Vitória+Régia+Jardim+dos+Girassóis+Aparecida+de+Goiânia+GO"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                  <MapPin className="lucide lucide-map-pin text-white w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="text-stone-500 text-sm font-medium mb-1">Endereço</div>
                  <div className="text-stone-900 font-semibold text-lg hover:text-amber-600 transition-colors">
                    Rua Vitória Régia, Qd 19 Lt 02
                    <br />
                    Jardim dos Girassóis, Aparecida de Goiânia/GO
                  </div>
                </div>
              </a>
              <a
                href="https://www.instagram.com/art_emadeiras_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                  <Instagram className="lucide lucide-instagram text-white w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="text-stone-500 text-sm font-medium mb-1">Instagram</div>
                  <div className="text-stone-900 font-semibold text-lg hover:text-amber-600 transition-colors">
                    @art_emadeiras_
                  </div>
                </div>
              </a>
            </div>
            <div className="bg-amber-600/10 border border-amber-600/20 rounded-lg p-6 mt-8">
              <div className="flex items-center gap-3 text-amber-900 font-bold mb-4">
                <Clock className="lucide lucide-clock w-6 h-6" />
                Horário de Atendimento
              </div>
              <div className="space-y-2 text-stone-700">
                <div>Segunda a Sexta: 08:00 às 18:00</div>
                <div>Sábado: 08:00 às 12:00</div>
                <div>Domingo: Fechado</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-2">Solicite Seu Orçamento</h3>
            <p className="text-stone-600 mb-8">
              Preencha o formulário e entraremos em contato rapidamente.
            </p>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="nome" className="text-sm font-semibold text-stone-700 flex items-center gap-2">
                  Nome Completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nome"
                  placeholder="Digite seu nome completo"
                  className="w-full px-4 py-3 border-2 rounded-lg focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition-all text-stone-900 placeholder-stone-400 border-stone-300"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="whatsapp" className="text-sm font-semibold text-stone-700 flex items-center gap-2">
                  WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  placeholder="(00) 0 0000-0000"
                  maxLength={16}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition-all text-stone-900 placeholder-stone-400 border-stone-300"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(maskPhone(e.target.value))}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-stone-700">
                  E-mail (opcional)
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 border-2 rounded-lg focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition-all text-stone-900 placeholder-stone-400 border-stone-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="servico" className="text-sm font-semibold text-stone-700 flex items-center gap-2">
                  Serviço de Interesse <span className="text-red-500">*</span>
                </label>
                <select
                  id="servico"
                  className="w-full px-4 py-3 border-2 rounded-lg focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition-all text-stone-900 bg-white cursor-pointer appearance-none border-stone-300"
                  value={servico}
                  onChange={(e) => setServico(e.target.value)}
                >
                  {servicos.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="mensagem" className="text-sm font-semibold text-stone-700">
                  Conte mais sobre seu projeto (opcional)
                </label>
                <textarea
                  id="mensagem"
                  placeholder="Descreva brevemente seu projeto, dimensões estimadas, localização, etc."
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition-all text-stone-900 placeholder-stone-400 resize-none"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold text-lg py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-3 mt-8"
              >
                <Send className="lucide lucide-send w-5 h-5" />
                Enviar pelo WhatsApp
              </button>
              <div className="text-center mt-6">
                <p className="text-xs text-stone-500 flex items-center justify-center gap-2">
                  <Lock className="lucide lucide-lock w-4 h-4" />
                  Suas informações estão seguras conosco
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

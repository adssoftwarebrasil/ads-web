import { useState } from 'react';
import { Instagram, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { WhatsAppIcon, ArrowRightLong } from './icons';

const WHATSAPP_NUMBER = '556596603393';

export default function Contato() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipo: '',
    mensagem: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${form.nome}.` +
      `%0AE-mail: ${form.email}` +
      `%0ATelefone: ${form.telefone}` +
      `%0ATipo de Projeto: ${form.tipo}` +
      (form.mensagem ? `%0AMensagem: ${form.mensagem}` : '');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="bg-gradient-to-br from-[#F5F5F5] to-white py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#29456D] text-sm font-semibold tracking-wider uppercase bg-[#29456D]/10 px-4 py-2 rounded-full">
              Fale Conosco
            </span>
          </div>
          <h2 className="text-[#29456D] text-4xl lg:text-5xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-[#666666] text-lg lg:text-xl max-w-2xl mx-auto">
            Nossa equipe está pronta para transformar seu projeto em realidade
          </p>
        </div>
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 ${
            inView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <div>
            <div className="bg-gradient-to-br from-[#29456D] to-[#1f3657] rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3">Atendimento Imediato</h3>
                <p className="text-white/90 mb-6 text-sm leading-relaxed">
                  Prefere falar diretamente conosco? Clique no botão abaixo e seja atendido agora mesmo
                  pelo WhatsApp.
                </p>
                <button
                  onClick={openWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold py-4 rounded-xl transition-all hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3 group"
                >
                  <WhatsAppIcon className="w-6 h-6" />
                  <span>Chamar no WhatsApp</span>
                  <ArrowRightLong className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            <div className="space-y-5">
              <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all border border-gray-100">
                <a
                  href="https://wa.me/556596603393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-[#666666] hover:text-[#25D366] transition-colors group"
                >
                  <div className="w-14 h-14 bg-[#25D366]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] transition-colors">
                    <WhatsAppIcon className="w-7 h-7 text-[#25D366] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-base text-[#333]">(65) 9660-3393</div>
                    <div className="text-sm text-[#666]">Atendimento via WhatsApp</div>
                  </div>
                </a>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all border border-gray-100">
                <a
                  href="https://www.instagram.com/vidralcuiaba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-[#666666] hover:text-[#E1306C] transition-colors group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#F58529] via-[#E1306C] to-[#C13584] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Instagram className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-base text-[#333]">@vidralcuiaba</div>
                    <div className="text-sm text-[#666]">Siga-nos no Instagram</div>
                  </div>
                </a>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all border border-gray-100">
                <a
                  href="https://maps.app.goo.gl/553t61Dt7QQuDGeQ8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-[#666666] hover:text-[#29456D] transition-colors group"
                >
                  <div className="w-14 h-14 bg-[#29456D]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#29456D] transition-colors">
                    <MapPin
                      className="w-7 h-7 text-[#29456D] group-hover:text-white transition-colors"
                      strokeWidth={2}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-base text-[#333]">Cuiabá e Várzea Grande - MT</div>
                    <div className="text-sm text-[#666]">Ver localização no mapa</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-100">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#29456D] mb-2">Envie sua Mensagem</h3>
              <p className="text-[#666] text-sm">Preencha o formulário e entraremos em contato em breve</p>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-[#333] mb-2">Nome Completo *</label>
                <input
                  type="text"
                  name="nome"
                  placeholder="Digite seu nome completo"
                  required
                  value={form.nome}
                  onChange={handleChange}
                  className="w-full bg-[#F5F5F5] border-2 border-transparent rounded-xl px-4 py-3.5 text-[15px] focus:border-[#29456D] focus:bg-white focus:outline-none transition-all"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#333] mb-2">E-mail *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="seu@email.com"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-[#F5F5F5] border-2 border-transparent rounded-xl px-4 py-3.5 text-[15px] focus:border-[#29456D] focus:bg-white focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#333] mb-2">Telefone/WhatsApp *</label>
                  <input
                    type="tel"
                    name="telefone"
                    placeholder="(65) 99999-9999"
                    required
                    value={form.telefone}
                    onChange={handleChange}
                    className="w-full bg-[#F5F5F5] border-2 border-transparent rounded-xl px-4 py-3.5 text-[15px] focus:border-[#29456D] focus:bg-white focus:outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#333] mb-2">Tipo de Projeto *</label>
                <select
                  name="tipo"
                  required
                  value={form.tipo}
                  onChange={handleChange}
                  className="w-full bg-[#F5F5F5] border-2 border-transparent rounded-xl px-4 py-3.5 text-[15px] focus:border-[#29456D] focus:bg-white focus:outline-none transition-all"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="Residencial">Residencial</option>
                  <option value="Comercial">Comercial</option>
                  <option value="Reforma">Reforma</option>
                  <option value="Construção Nova">Construção Nova</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#333] mb-2">Mensagem</label>
                <textarea
                  name="mensagem"
                  placeholder="Conte-nos mais sobre seu projeto..."
                  rows={4}
                  value={form.mensagem}
                  onChange={handleChange}
                  className="w-full bg-[#F5F5F5] border-2 border-transparent rounded-xl px-4 py-3.5 text-[15px] focus:border-[#29456D] focus:bg-white focus:outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#29456D] text-white py-4 rounded-xl font-semibold hover:bg-[#1f3657] transition-all hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                <span>Enviar Mensagem</span>
                <ArrowRightLong className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

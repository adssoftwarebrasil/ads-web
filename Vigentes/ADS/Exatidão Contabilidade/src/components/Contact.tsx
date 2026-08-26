import { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const subjects = [
  'Contabilidade Empresarial',
  'Gestão de MEI',
  'Contabilidade na Área da Saúde',
  'Planejamento Tributário',
  'Abertura/Encerramento de Empresa',
  'Contabilidade para Arquitetos/Designers',
  'Outros',
];

export default function Contact() {
  const [form, setForm] = useState({ nome: '', whatsapp: '', email: '', assunto: '', mensagem: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message =
      `Olá! Meu nome é ${form.nome}.\n` +
      `WhatsApp: ${form.whatsapp}\n` +
      `E-mail: ${form.email}\n` +
      `Assunto: ${form.assunto}\n` +
      `Mensagem: ${form.mensagem}`;
    window.open(`https://wa.me/556232113304?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section
      id="contato"
      className="py-20 relative"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/exatidao%20contabilidade/img/entre-em-contato-paralax-background.webp")',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="absolute inset-0 bg-[rgba(54,55,58,0.95)]"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm uppercase tracking-widest text-[rgb(204,162,74)] font-semibold mb-4">
            FALE CONOSCO
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Entre em Contato</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Estamos prontos para atender você e transformar a gestão contábil do seu negócio.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={form.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-[rgb(202,162,106)]/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[rgb(202,162,106)] focus:ring-2 focus:ring-[rgb(202,162,106)]/50 transition-all"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-2">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  value={form.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-[rgb(202,162,106)]/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[rgb(202,162,106)] focus:ring-2 focus:ring-[rgb(202,162,106)]/50 transition-all"
                  placeholder="(XX) XXXXX-XXXX"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-[rgb(202,162,106)]/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[rgb(202,162,106)] focus:ring-2 focus:ring-[rgb(202,162,106)]/50 transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="assunto" className="block text-sm font-medium text-gray-300 mb-2">
                  Assunto *
                </label>
                <select
                  id="assunto"
                  name="assunto"
                  required
                  value={form.assunto}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-[rgb(202,162,106)]/50 rounded-lg text-white focus:outline-none focus:border-[rgb(202,162,106)] focus:ring-2 focus:ring-[rgb(202,162,106)]/50 transition-all"
                >
                  <option value="" className="bg-[rgb(54,55,58)]">
                    Selecione um assunto
                  </option>
                  {subjects.map((s) => (
                    <option key={s} value={s} className="bg-[rgb(54,55,58)]">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={4}
                  value={form.mensagem}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-[rgb(202,162,106)]/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[rgb(202,162,106)] focus:ring-2 focus:ring-[rgb(202,162,106)]/50 transition-all resize-none"
                  placeholder="Conte-nos como podemos ajudar..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(202,162,106)] hover:bg-[rgb(204,162,74)] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-xl"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <a
                  href="tel:+556232113304"
                  className="flex items-start gap-4 text-gray-300 hover:text-[rgb(202,162,106)] transition-colors group"
                >
                  <div className="text-[rgb(202,162,106)] group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Telefone</div>
                    <div className="text-sm">(62) 3211-3304</div>
                  </div>
                </a>
                <a
                  href="https://wa.me/556232113304"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-gray-300 hover:text-[rgb(202,162,106)] transition-colors group"
                >
                  <div className="text-[rgb(202,162,106)] group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">WhatsApp</div>
                    <div className="text-sm">(62) 3211-3304</div>
                  </div>
                </a>
                <a
                  href="mailto:admexatidao@hotmail.com"
                  className="flex items-start gap-4 text-gray-300 hover:text-[rgb(202,162,106)] transition-colors group"
                >
                  <div className="text-[rgb(202,162,106)] group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">E-mail</div>
                    <div className="text-sm">admexatidao@hotmail.com</div>
                  </div>
                </a>
                <a
                  href="https://maps.google.com/?q=AV+T-2,+2145+Setor+Bueno+Goiânia+GO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-gray-300 hover:text-[rgb(202,162,106)] transition-colors group"
                >
                  <div className="text-[rgb(202,162,106)] group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Endereço</div>
                    <div className="text-sm">AV T-2, 2145 - Setor Bueno, Goiânia - GO</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.4326774829394!2d-49.26635!3d-16.71425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1d8c8f3f3f3%3A0x1234567890!2sAv.%20T-2%2C%202145%20-%20Setor%20Bueno%2C%20Goi%C3%A2nia%20-%20GO!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Exatidão Contabilidade"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

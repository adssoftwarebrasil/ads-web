import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

const services = [
  'Projetos de Engenharia',
  'Projetos de Arquitetura com 3D',
  'Laudos e Vistorias Técnicas',
  'Avaliação de Imóveis',
  'Regularização Imobiliária',
  'Levantamento Topográfico',
  'Construção de Imóvel',
  'Gestão e Fiscalização de Obras',
  'Venda de Imóveis',
  'Outro',
];

const inputClass =
  'w-full bg-white border border-pr-taupe px-4 py-3 text-pr-dark text-sm placeholder:text-pr-muted focus:outline-none focus:border-pr-rose transition-colors duration-200';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', city: '', service: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      'Olá! Gostaria de solicitar um orçamento.',
      '',
      `Nome: ${form.name}`,
      `WhatsApp/Telefone: ${form.phone}`,
      `Cidade: ${form.city}`,
      `Serviço de interesse: ${form.service}`,
    ];
    if (form.message) {
      lines.push(`Mensagem: ${form.message}`);
    }
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/556284826969?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 bg-pr-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="divider-line"></div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">Fale com Nossa Equipe</h2>
            <p className="text-pr-taupe leading-relaxed mb-10">
              Envie seus dados pelo formulário e nossa equipe técnica entrará em contato pelo WhatsApp para entender seu
              projeto e apresentar a melhor solução.
            </p>
            <ul className="space-y-5">
              <li>
                <a href="tel:+556284826969" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity block">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-pr-rose flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone width={16} height={16} strokeWidth={2} className="lucide lucide-phone text-pr-dark" />
                    </div>
                    <div>
                      <p className="text-pr-grey text-xs mb-0.5">Telefone / WhatsApp</p>
                      <p className="text-white text-sm font-medium">(62) 9 8482-6969</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:eng.patriciarv@gmail.com"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity block"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-pr-rose flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail width={16} height={16} strokeWidth={2} className="lucide lucide-mail text-pr-dark" />
                    </div>
                    <div>
                      <p className="text-pr-grey text-xs mb-0.5">E-mail</p>
                      <p className="text-white text-sm font-medium">eng.patriciarv@gmail.com</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=PR+Engenharia+Campinorte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity block"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-pr-rose flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin width={16} height={16} strokeWidth={2} className="lucide lucide-map-pin text-pr-dark" />
                    </div>
                    <div>
                      <p className="text-pr-grey text-xs mb-0.5">Endereço</p>
                      <p className="text-white text-sm font-medium">R. Brasil, 258 - 390, Campinorte - GO</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-pr-rose flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock width={16} height={16} strokeWidth={2} className="lucide lucide-clock text-pr-dark" />
                  </div>
                  <div>
                    <p className="text-pr-grey text-xs mb-0.5">Horário</p>
                    <p className="text-white text-sm font-medium">Seg–Sex: 07:30 às 17:00 (almoço 12:30–13:30)</p>
                  </div>
                </div>
              </li>
            </ul>
            <a
              href="https://www.instagram.com/pr_projetos/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-pr-rose text-sm font-medium hover:text-pr-taupe transition-colors"
            >
              <InstagramIcon width={16} height={16} />
              @pr_projetos
            </a>
          </div>
          <div className="bg-pr-cream p-8 lg:p-10">
            <h3 className="font-serif text-xl font-semibold text-pr-dark mb-6">Solicitar Orçamento</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Seu nome completo"
                  className={inputClass}
                  value={form.name}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="WhatsApp / Telefone"
                  className={inputClass}
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <input
                type="text"
                name="city"
                required
                placeholder="Sua cidade"
                className={inputClass}
                value={form.city}
                onChange={handleChange}
              />
              <select
                name="service"
                required
                className={`${inputClass} ${form.service ? '' : 'text-pr-muted'}`}
                value={form.service}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Selecione o serviço de interesse
                </option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              <textarea
                name="message"
                rows={4}
                placeholder="Descreva brevemente seu projeto ou dúvida..."
                className={`${inputClass} resize-none`}
                value={form.message}
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-pr-dark text-pr-cream py-4 font-medium text-sm tracking-wide transition-all duration-300 hover:bg-pr-rose hover:text-pr-dark active:scale-[0.99]"
              >
                <Send width={15} height={15} strokeWidth={2} className="lucide lucide-send " />
                Enviar pelo WhatsApp
              </button>
              <p className="text-pr-grey text-xs text-center">
                Você será redirecionado para o WhatsApp com seus dados já preenchidos.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

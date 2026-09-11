import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export default function ContatoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${formData.name}. Tenho interesse em ${formData.product}. ${formData.message}. Meu e-mail é ${formData.email}.`;
    const whatsappUrl = `https://wa.me/5577999571092?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div className="animate-on-scroll opacity-0">
              <img
                src="https://storage.lucasmendes.dev/site-sp/central-tintas%2Fcentral-tintas-logo.webp"
                alt="Central Tintas"
                className="h-20 w-auto mb-8"
              />
              <h2 className="text-4xl font-bold text-[#3f4196] mb-6">Entre em Contato</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Estamos prontos para atender você e ajudar a encontrar as melhores soluções em
                tintas para o seu projeto.
              </p>
            </div>

            <div className="space-y-6">
              <div className="animate-on-scroll opacity-0 flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#3f4196] rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#3f4196] mb-1">Endereço</h3>
                  <p className="text-gray-600">Barreiras - BA</p>
                </div>
              </div>

              <div className="animate-on-scroll opacity-0 flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#3f4196] rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#3f4196] mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/5577999571092"
                    className="text-gray-600 hover:text-[#ec3237] transition-colors"
                  >
                    (77) 9.9957-1092
                  </a>
                </div>
              </div>

              <div className="animate-on-scroll opacity-0 flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#3f4196] rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#3f4196] mb-1">E-mail</h3>
                  <a
                    href="mailto:centraltintasbarreiras@gmail.com"
                    className="text-gray-600 hover:text-[#ec3237] transition-colors break-all"
                  >
                    centraltintasbarreiras@gmail.com
                  </a>
                </div>
              </div>

              <div className="animate-on-scroll opacity-0 flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#3f4196] rounded-full flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#3f4196] mb-1">Instagram</h3>
                  <a
                    href="https://instagram.com/centraltintasbarreiras"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#ec3237] transition-colors"
                  >
                    @centraltintasbarreiras
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="animate-on-scroll opacity-0 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-[#3f4196] mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3f4196] focus:border-transparent outline-none transition-all"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-[#3f4196] mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3f4196] focus:border-transparent outline-none transition-all"
                    placeholder="(77) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#3f4196] mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3f4196] focus:border-transparent outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="product" className="block text-sm font-bold text-[#3f4196] mb-2">
                  Produto de Interesse
                </label>
                <select
                  id="product"
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3f4196] focus:border-transparent outline-none transition-all"
                >
                  <option value="">Selecione um produto</option>
                  <option value="Tintas para Parede">Tintas para Parede</option>
                  <option value="Tintas Automotivas">Tintas Automotivas</option>
                  <option value="Pedras Naturais">Pedras Naturais</option>
                  <option value="Ferramentas">Ferramentas</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-[#3f4196] mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3f4196] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Como podemos ajudar você?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#ec3237] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#d32d32] transition-all hover:scale-105 shadow-lg"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

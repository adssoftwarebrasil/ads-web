import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
} from 'lucide-react';

interface ContactProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Contact = ({ onSubmit }: ContactProps) => {
  return (
    <section
      id="contato"
      className="bg-gradient-to-br from-imperio-blue via-imperio-mid-blue to-imperio-light-blue text-white py-20 px-4 lg:px-8"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-imperio-ice/90">
            Dúvidas ou sugestões? Estamos prontos para atender você!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-8">Fale Conosco</h3>

            <div className="space-y-6">
              <a
                href="https://wa.me/5591980252240"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 items-start p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">WhatsApp / Telefone</h4>
                  <p className="text-imperio-ice/90">(91) 98025-2240</p>
                </div>
              </a>

              <a
                href="mailto:repbombasmaq@gmail.com"
                className="flex gap-4 items-start p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-imperio-light-blue rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">E-mail</h4>
                  <p className="text-imperio-ice/90 break-all">
                    repbombasmaq@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex gap-4 items-start p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Endereço</h4>
                  <p className="text-imperio-ice/90">
                    Rua dos Tamoios, 1333
                    <br />
                    Batista Campos - CEP 66033-172
                    <br />
                    Belém, PA
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    Horário de Atendimento
                  </h4>
                  <p className="text-imperio-ice/90">
                    Segunda a Sexta: 8h às 18h
                    <br />
                    Sábado: 8h às 13h
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">
                Siga-nos nas redes sociais
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/imperiodasbombasbelem/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Instagram className="text-white" size={24} />
                </a>
                <a
                  href="https://www.facebook.com/imperiodasbombasbelem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Facebook className="text-white" size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Envie sua Mensagem</h3>

            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-imperio-ice/60 focus:bg-white/20 focus:border-white focus:outline-none transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="(91) 98888-8888"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-imperio-ice/60 focus:bg-white/20 focus:border-white focus:outline-none transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="seu@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-imperio-ice/60 focus:bg-white/20 focus:border-white focus:outline-none transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  name="assunto"
                  placeholder="Sobre o que deseja falar?"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-imperio-ice/60 focus:bg-white/20 focus:border-white focus:outline-none transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Mensagem
                </label>
                <textarea
                  name="mensagem"
                  rows={4}
                  placeholder="Descreva sua necessidade..."
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-imperio-ice/60 focus:bg-white/20 focus:border-white focus:outline-none transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-4 rounded-lg font-bold text-lg shadow-2xl hover:bg-green-600 hover:scale-105 transition-all duration-300"
              >
                <MessageCircle size={20} />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

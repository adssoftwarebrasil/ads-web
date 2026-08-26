import { useState, FormEvent } from 'react';
import { Send, User, Building, Phone, Mail, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    telefone: '',
    email: '',
    solucao: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const message = `
*Novo Contato - Site ARCA*

*Nome:* ${formData.nome}
${formData.empresa ? `*Empresa:* ${formData.empresa}` : ''}
*Telefone:* ${formData.telefone}
*E-mail:* ${formData.email}
*Solução Procurada:* ${formData.solucao}

Aguardo retorno!
    `.trim();

    const whatsappUrl = `http://wa.me/553491008921?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const solutions = [
    'Fachada',
    'Letreiro Luminoso',
    'Totem',
    'Sinalização',
    'Personalização de Frota',
    'Outro'
  ];

  return (
    <section id="contato" className="py-16 md:py-24 bg-gradient-to-b from-[rgb(254,254,254)] to-[rgb(212,212,212)]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(11,9,48)] mb-6">
              Dê o próximo passo para<br />
              <span className="text-[rgb(255,204,44)]">elevar a sua marca!</span>
            </h2>
            <p className="text-lg text-[rgb(30,30,30)] mb-8 leading-relaxed">
              Preencha o formulário e receba uma consulta inicial gratuita. Nossa equipe entrará em contato para entender suas necessidades e apresentar a melhor solução para o seu negócio.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[rgb(255,204,44)] rounded-lg flex items-center justify-center">
                  <Phone className="text-[rgb(11,9,48)]" size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-[rgb(11,9,48)] mb-1">Telefone</h3>
                  <a href="tel:+553491008921" className="text-[rgb(30,30,30)] hover:text-[rgb(255,204,44)] transition-colors">
                    (34) 99100-8921
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[rgb(255,204,44)] rounded-lg flex items-center justify-center">
                  <Mail className="text-[rgb(11,9,48)]" size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-[rgb(11,9,48)] mb-1">E-mail</h3>
                  <a href="mailto:arca.contatocomercial@gmail.com" className="text-[rgb(30,30,30)] hover:text-[rgb(255,204,44)] transition-colors">
                    arca.contatocomercial@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[rgb(255,204,44)] rounded-lg flex items-center justify-center">
                  <Building className="text-[rgb(11,9,48)]" size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-[rgb(11,9,48)] mb-1">Endereço</h3>
                  <p className="text-[rgb(30,30,30)]">
                    R. Ouro Preto, 755 - Santo Antônio<br />
                    Patos de Minas - MG, 38700-368
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-[rgb(255,204,44)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center text-[rgb(11,9,48)] font-semibold mb-2">
                  <User size={20} className="mr-2" />
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-[rgb(212,212,212)] rounded-lg focus:border-[rgb(255,204,44)] focus:outline-none transition-colors"
                  placeholder="Digite seu nome completo"
                />
              </div>

              <div>
                <label className="flex items-center text-[rgb(11,9,48)] font-semibold mb-2">
                  <Building size={20} className="mr-2" />
                  Nome da Empresa
                </label>
                <input
                  type="text"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-[rgb(212,212,212)] rounded-lg focus:border-[rgb(255,204,44)] focus:outline-none transition-colors"
                  placeholder="Digite o nome da sua empresa"
                />
              </div>

              <div>
                <label className="flex items-center text-[rgb(11,9,48)] font-semibold mb-2">
                  <Phone size={20} className="mr-2" />
                  Telefone *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-[rgb(212,212,212)] rounded-lg focus:border-[rgb(255,204,44)] focus:outline-none transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label className="flex items-center text-[rgb(11,9,48)] font-semibold mb-2">
                  <Mail size={20} className="mr-2" />
                  Seu Melhor E-mail *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-[rgb(212,212,212)] rounded-lg focus:border-[rgb(255,204,44)] focus:outline-none transition-colors"
                  placeholder="seuemail@exemplo.com"
                />
              </div>

              <div>
                <label className="flex items-center text-[rgb(11,9,48)] font-semibold mb-2">
                  <MessageSquare size={20} className="mr-2" />
                  Qual Solução Você Procura? *
                </label>
                <select
                  required
                  value={formData.solucao}
                  onChange={(e) => setFormData({ ...formData, solucao: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-[rgb(212,212,212)] rounded-lg focus:border-[rgb(255,204,44)] focus:outline-none transition-colors"
                >
                  <option value="">Selecione uma opção</option>
                  {solutions.map((solution, index) => (
                    <option key={index} value={solution}>{solution}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[rgb(255,204,44)] text-[rgb(11,9,48)] py-4 rounded-lg font-bold text-lg hover:bg-[rgb(210,175,112)] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
              >
               Solicite orçamento do seu projeto
                <Send className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
              </button>

              <p className="text-sm text-[rgb(30,30,30)] text-center">
                Ao enviar, você será redirecionado para o WhatsApp com suas informações
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

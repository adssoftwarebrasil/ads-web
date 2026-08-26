import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    specialty: '',
    message: '',
  });

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers
        .replace(/^(\d{2})(\d)/g, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2');
    }
    return value;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData({ ...formData, phone: formatted });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de agendar uma consulta.%0A%0ANome: ${formData.name}%0ATelefone: ${formData.phone}%0AEspecialidade/Exame: ${formData.specialty}%0AMensagem: ${formData.message}`;
    window.open(`https://wa.me/5561982400076?text=${message}`, '_blank');
  };

  return (
    <section
      id="contato"
      className="py-16 md:py-24"
      style={{ background: '#2d4a3e' }}
    >
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Agende Sua Consulta Agora
            </h2>
            <p className="text-lg md:text-xl text-white text-opacity-85">
              Preencha o formulário e fale diretamente conosco pelo WhatsApp
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Seu nome completo"
                className="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:border-[#f37f1a] focus:outline-none transition-colors duration-300"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                Telefone *
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={handlePhoneChange}
                placeholder="(00) 00000-0000"
                maxLength={15}
                className="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:border-[#f37f1a] focus:outline-none transition-colors duration-300"
              />
            </div>

            <div>
              <label htmlFor="specialty" className="block text-white text-sm font-medium mb-2">
                Especialidade/Exame de Interesse
              </label>
              <select
                id="specialty"
                value={formData.specialty}
                onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:border-[#f37f1a] focus:outline-none transition-colors duration-300 text-[#2d4a3e]"
              >
                <option value="">Selecione uma opção</option>
                <option value="Clínico Geral">Clínico Geral</option>
                <option value="Pediatria">Pediatria</option>
                <option value="Ginecologia">Ginecologia</option>
                <option value="Cardiologia">Cardiologia</option>
                <option value="Dermatologia">Dermatologia</option>
                <option value="Ortopedia">Ortopedia</option>
                <option value="Endocrinologia">Endocrinologia</option>
                <option value="Psiquiatria">Psiquiatria</option>
                <option value="Psicologia">Psicologia</option>
                <option value="Nutrição">Nutrição</option>
                <option value="Exames Laboratoriais">Exames Laboratoriais</option>
                <option value="Ultrassonografia">Ultrassonografia</option>
                <option value="Exames Cardiológicos">Exames Cardiológicos</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Conte-nos um pouco sobre sua necessidade"
                className="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:border-[#f37f1a] focus:outline-none transition-colors duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#f37f1a] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#d97015] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 shadow-lg"
            >
              <MessageCircle size={24} />
              Enviar pelo WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

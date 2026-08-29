import { useEffect, useRef, useState } from 'react'
import { Send } from 'lucide-react'

export default function Contato() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    assunto: 'Joias',
    mensagem: ''
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const mensagem = `Olá! Meu nome é ${formData.nome}.%0A%0ATelefone: ${formData.telefone}%0A${formData.email ? `Email: ${formData.email}%0A` : ''}Assunto: ${formData.assunto}%0A%0AMensagem: ${formData.mensagem}`

    window.open(`https://wa.me/77991245678?text=${mensagem}`, '_blank')
  }

  return (
    <section id="contato" ref={sectionRef} className="py-20 md:py-28 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className={`text-center mb-12 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Fale Conosco
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            Entre em contato pelo formulário abaixo e fale diretamente conosco pelo WhatsApp
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`bg-white rounded-xl shadow-lg p-8 border border-gold/20 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="nome" className="block text-gray-700 font-semibold mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                id="nome"
                required
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
                className="w-full px-4 py-3 border border-gold/30 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                placeholder="Digite seu nome completo"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="telefone" className="block text-gray-700 font-semibold mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  required
                  value={formData.telefone}
                  onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                  className="w-full px-4 py-3 border border-gold/30 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                  placeholder="(77) 99124-5678"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gold/30 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="assunto" className="block text-gray-700 font-semibold mb-2">
                Assunto
              </label>
              <select
                id="assunto"
                value={formData.assunto}
                onChange={(e) => setFormData({...formData, assunto: e.target.value})}
                className="w-full px-4 py-3 border border-gold/30 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all bg-white"
              >
                <option value="Joias">Joias</option>
                <option value="Relógios">Relógios</option>
                <option value="Óculos">Óculos</option>
                <option value="Conserto">Conserto</option>
                <option value="Fabricação">Fabricação</option>
                <option value="Outros">Outros</option>
              </select>
            </div>

            <div>
              <label htmlFor="mensagem" className="block text-gray-700 font-semibold mb-2">
                Mensagem *
              </label>
              <textarea
                id="mensagem"
                required
                rows={6}
                value={formData.mensagem}
                onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                className="w-full px-4 py-3 border border-gold/30 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all resize-none"
                placeholder="Digite sua mensagem aqui..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 gradient-gold-horizontal text-black font-semibold rounded-lg hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-gold/50 flex items-center justify-center space-x-2"
            >
              <Send size={20} />
              <span>Enviar via WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

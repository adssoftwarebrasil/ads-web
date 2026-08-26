import { ChevronRight } from 'lucide-react'

interface ServicesProps {
  handleWhatsApp: (msg: string) => void
}

export const Services = ({ handleWhatsApp }: ServicesProps) => {
  const services = [
    { title: 'Difusores para Escapamento', description: 'Estilo e qualidade em difusores para seu carro.', image: 'https://storage.lucasmendes.dev/site-sp/pro-escape%2Fimg%2FDifusores%20para%20Escapamento.png' },
    { title: 'Protetor de Cárter', description: 'Instalação de protetores de cárter para segurança.', image: 'https://storage.lucasmendes.dev/site-sp/pro-escape%2Fimg%2FProtetor%20de%20Ca%CC%81rter.webp' },
    { title: 'Variedades de Escapamento', description: 'Conheça nossos produtos', image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=pro-escape%2Fescapamento.png' },
    { title: 'Solda', description: 'Serviços de soldagem para diferentes aplicações.', image: 'https://storage.lucasmendes.dev/site-sp/pro-escape%2Fimg%2FSolda.jpeg' },
    { title: 'Catalisadores', description: 'Substituímos catalisadores de forma eficaz.', image: 'https://storage.lucasmendes.dev/site-sp/pro-escape%2Fimg%2FCatalisadores.webp' },
    { title: 'Engates para Reboque', description: 'Instalação de engates com segurança e qualidade.', image: 'https://storage.lucasmendes.dev/site-sp/pro-escape%2Fimg%2FEngates%20para%20Reboque.jpg' },
  ]

  return (
    <section id="produtos" className="bg-white py-24">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 bg-[rgb(254,182,32)]/10 border border-[rgb(254,182,32)] rounded-full text-[rgb(254,182,32)] text-sm font-bold tracking-wider uppercase mb-6">
            Nossos Produtos
          </span>
          <h2 className="text-5xl lg:text-6xl font-extrabold text-black mb-6">
            Descubra nosso portfólio de produtos especializados
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Na Pro Escape, oferecemos uma gama de produtos para atender todas as suas necessidades automotivas com excelência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border border-gray-100 group">
              <div className="h-72 overflow-hidden relative">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-[rgb(254,182,32)] transition-colors">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">{service.description}</p>
                <button
                  onClick={() => handleWhatsApp(`Olá! Tenho interesse no serviço de ${service.title}.`)}
                  className="inline-flex items-center space-x-2 text-[rgb(254,182,32)] font-bold hover:gap-4 transition-all duration-300 text-lg group/btn"
                >
                  <span>Fale Conosco</span>
                  <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

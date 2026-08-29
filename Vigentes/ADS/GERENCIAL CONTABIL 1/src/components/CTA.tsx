import { ArrowRight } from 'lucide-react';

const whatsappSpecialist =
  'https://api.whatsapp.com/send?phone=5561983132002&text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20Gerencial%20Cont%C3%A1bil.';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Transformar a Gestão do seu Negócio?</h2>
        <p className="text-xl text-gray-300 mb-8">Entre em contato agora e descubra como podemos ajudar sua empresa a crescer</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={whatsappSpecialist}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105 shadow-lg"
            style={{ backgroundColor: 'rgb(192, 160, 98)', color: 'white' }}
          >
            Falar pelo WhatsApp
            <ArrowRight className="lucide lucide-arrow-right ml-2" width={20} height={20} />
          </a>
          <a
            href="tel:+5561983132002"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
          >
            Ligar Agora
          </a>
        </div>
      </div>
    </section>
  );
}

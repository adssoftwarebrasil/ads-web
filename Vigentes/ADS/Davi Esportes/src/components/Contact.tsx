import { Smartphone, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20"
      style={{ background: 'linear-gradient(90deg, rgb(253, 243, 65) 0%, rgb(255, 184, 0) 100%)' }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#363435] mb-4">Pronto para encontrar o que você precisa?</h2>
          <p className="text-xl text-[#2C2C2C] mb-10">Fale conosco agora mesmo pelo WhatsApp!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/5549999188763"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#363435] text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-all hover:shadow-xl animate-pulse-gentle"
            >
              <Smartphone size={24} />
              (49) 9 9918-8763
            </a>
            <a
              href="tel:+554933223132"
              className="inline-flex items-center gap-3 bg-white text-[#363435] px-8 py-4 rounded-full text-lg font-bold border-2 border-[#363435] hover:scale-105 transition-all hover:shadow-xl"
            >
              <Phone size={24} />
              (49) 3322-3132
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

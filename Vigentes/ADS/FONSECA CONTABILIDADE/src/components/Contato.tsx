import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contato() {
  return (
    <section id="contato" className="py-20 bg-[#F8F9FA]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <div className="bg-[#164972] w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#164972] mb-3">Endereço</h3>
            <p className="text-[#9f9fa9] leading-relaxed">
              Av. Goiânia, 1564 - Jardim Guanabara
              <br />
              Goiânia - GO, CEP 74675-320
            </p>
          </div>

          <div className="text-center md:text-left">
            <div className="bg-[#164972] w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#164972] mb-3">Contato</h3>
            <p className="text-[#9f9fa9] leading-relaxed mb-2">(62) 99973-2807</p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#9f9fa9]">
              <Mail className="w-5 h-5" />
              <span className="text-sm">wesleypfonseca@gmail.com</span>
            </div>
          </div>

          <div className="text-center md:text-left">
            <div className="bg-[#164972] w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#164972] mb-3">Horário</h3>
            <p className="text-[#9f9fa9] leading-relaxed">
              Segunda a Sexta
              <br />
              08:00 às 18:00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

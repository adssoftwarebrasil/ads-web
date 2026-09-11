import { Phone, Instagram, Clock, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#024074] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Dr. Hugo da Cunha</h3>
            <p className="text-sky-200 mb-4">Cirurgião Vascular</p>
            <p className="text-slate-300 mb-4">CRM-GO 8972 | RQE 5327</p>
            <p className="text-slate-300 leading-relaxed">Especialista em tratamentos vasculares modernos com foco em técnicas minimamente invasivas e tecnologia de ponta para cuidado com suas pernas.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Contato</h4>
            <div className="space-y-4">
              <a href="tel:6232521015" className="flex items-center gap-3 text-slate-300 hover:text-sky-400 transition-colors">
                <Phone className="w-5 h-5" />(62) 3252-1015
              </a>
              <a href="https://wa.me/556285815846" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-sky-400 transition-colors">
                <Phone className="w-5 h-5" />(62) 98581-5846
              </a>
              <a href="https://www.instagram.com/Dr.hugovascular" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-sky-400 transition-colors">
                <Instagram className="w-5 h-5" />@Dr.hugovascular
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Horário</h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">Seg - Sex</p>
                  <p>08:00 - 18:00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">Sáb - Dom</p>
                  <p>Fechado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-sky-800 pt-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-start gap-3 text-slate-300 mb-4">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">AngioPlace</p>
                  <p className="text-sm">Av. T 2, 1299 - Setor Bueno, Goiânia - GO</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">Centro Clínico Amparo</p>
                  <p className="text-sm">Av. T 5, 1T 06, 271 - Setor Bueno, Goiânia - GO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-sky-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">© 2026 Dr. Hugo da Cunha - Cirurgião Vascular. Todos os direitos reservados.</p>
          <p className="text-slate-500 text-sm mt-2">Site desenvolvido com tecnologia moderna para melhor experiência do usuário</p>
        </div>
      </div>
    </footer>
  );
}

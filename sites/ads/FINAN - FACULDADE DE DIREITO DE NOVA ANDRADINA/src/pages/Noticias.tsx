import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Calendar, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Noticias() {
  // URL de uma imagem de placeholder relacionada a Direito/Estudos.
  // Você pode substituir por uma foto real da faculdade depois.
  const bannerImage = "https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=faculdade-finan%2Fimage%2015.png&version_id=null";

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Envolvemos o Header em uma div branca para garantir o fundo sólido ao rolar */}
      <div className="bg-white relative z-50">
        <Header />
      </div>
      
      <main className="flex-grow pt-28 pb-20 px-4">
        <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
          
          {/* Banner e Título Principal */}
          <div className="relative h-[300px] md:h-[450px] w-full">
            <img 
              src={bannerImage} 
              alt="Banner Vestibular de Direito FINAN" 
              className="w-full h-full object-cover"
            />
            {/* Gradiente de sobreposição para o texto ficar legível */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#074785]/90 via-[#074785]/40 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
              <span className="inline-block bg-[#e4100f] text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
                Vestibular
              </span>
              <div className="flex items-center gap-2 text-white/80 mt-4 text-sm">
                <Clock size={16} />
                <span>Publicado em Novembro de 2025</span>
              </div>
            </div>
          </div>

          {/* Corpo do Texto */}
          <div className="p-6 md:p-12 space-y-8 text-gray-700 leading-relaxed text-lg">
            
            <p className="text-xl font-medium text-[#074785]">
              A Faculdade de Nova Andradina – FINAN informa que estão abertas as inscrições para o vestibular do curso de Direito!
            </p>
            
            <p>
              Prepare-se para se tornar um profissional de destaque na área jurídica. Professores qualificados com experiência no mercado, estrutura completa com biblioteca e laboratório, atividades práticas e estágios supervisionados.
            </p>

            {/* Caixa de Informações Importantes */}
            <div className="bg-blue-50 border-l-4 border-[#074785] p-6 md:p-8 rounded-r-xl my-10 shadow-sm">
              <h3 className="text-2xl font-bold text-[#074785] mb-6 flex items-center gap-2">
                <Calendar className="h-7 w-7"/> Detalhes do Vestibular
              </h3>
              
              <ul className="space-y-5">
                <li className="flex flex-col md:flex-row md:items-center gap-2 border-b border-blue-100 pb-4 last:border-0">
                  <div className="flex items-center gap-3 min-w-[200px]">
                     <span className="bg-[#074785] p-2 rounded-full text-white"><Calendar size={20}/></span>
                     <strong className="text-gray-900">Data da Prova:</strong>
                  </div>
                  <span className="text-lg font-semibold text-[#e4100f]">13/12/2025 (Presencial)</span>
                </li>

                <li className="flex flex-col md:flex-row md:items-center gap-2 border-b border-blue-100 pb-4 last:border-0">
                  <div className="flex items-center gap-3 min-w-[200px]">
                     <span className="bg-[#074785] p-2 rounded-full text-white"><Clock size={20}/></span>
                     <strong className="text-gray-900">Período de Inscrições:</strong>
                  </div>
                  <span className="text-lg">De 04/11 a 10/12/2025</span>
                </li>

                 <li className="flex flex-col md:flex-row md:items-start gap-2 pt-2">
                  <div className="flex items-center gap-3 min-w-[200px] mt-1">
                     <span className="bg-[#074785] p-2 rounded-full text-white"><MapPin size={20}/></span>
                     <strong className="text-gray-900">Local de Inscrição:</strong>
                  </div>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2">
                      <Mail size={18} className="text-gray-500"/>
                      Pelo e-mail: <a href="mailto:finan.vestibular@gmail.com" className="text-[#074785] font-medium hover:underline">finan.vestibular@gmail.com</a>
                    </p>
                    <p className="flex items-start gap-2">
                      <MapPin size={18} className="text-gray-500 mt-1 shrink-0"/>
                      <span>Ou na Secretaria da IES: Avenida Antônio Joaquim de Moura Andrade, 910, Centro, Nova Andradina/MS.</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Seção de Contato e CTA Final */}
            <div className="bg-gray-100 p-6 rounded-xl flex items-center gap-4">
               <Phone className="h-8 w-8 text-[#074785]"/>
               <div>
                  <p className="font-bold text-gray-900">Dúvidas?</p>
                  <p>Mais informações pelo telefone/whatsapp: <a href="https://wa.me/5567999290075" className="text-[#074785] font-bold hover:underline">67 99929-0075</a>.</p>
               </div>
            </div>

            <h2 className="text-3xl font-extrabold text-center text-[#e4100f] mt-12 leading-tight">
              Direito é só na FINAN! <br/>
              Seja protagonista da sua história!
            </h2>
          </div>
        </article>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
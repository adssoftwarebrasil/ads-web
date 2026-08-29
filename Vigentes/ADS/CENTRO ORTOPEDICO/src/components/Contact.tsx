import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import {
  EMAIL,
  ENDERECO,
  ENDERECO_COMPLETO,
  TELEFONES,
  WHATSAPP_ROTULO,
  whatsapp,
} from '../lib/contato';

const MAPA_EMBED =
  'https://www.google.com/maps?q=Av.+Her%C3%A1clito+Gra%C3%A7a,+641+-+Centro,+Fortaleza+-+CE,+60140-061&output=embed';

export default function Contact() {
  const [nome, setNome] = useState('');
  const [assunto, setAssunto] = useState('Informações sobre produtos');
  const [mensagem, setMensagem] = useState('');

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    const texto = `Olá! Meu nome é ${nome}.\nAssunto: ${assunto}.\n${mensagem}`;
    window.open(whatsapp(texto), '_blank', 'noopener,noreferrer');
  }

  return (
    <section id="contato" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-[#0e6d8f] font-bold text-sm uppercase tracking-[0.2em]">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b3d5c] mt-3 mb-5 leading-tight">
            Venha nos visitar ou fale conosco
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Estamos no Centro de Fortaleza. Traga sua prescrição e a equipe técnica avalia o seu
            caso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <div className="flex gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <MapPin size={22} className="flex-shrink-0 text-[#0e6d8f] mt-1" />
              <div>
                <h3 className="font-bold text-[#0b3d5c] mb-1">Endereço</h3>
                <p className="text-gray-600 leading-relaxed">
                  {ENDERECO.logradouro}
                  <br />
                  {ENDERECO.bairro}, {ENDERECO.cidade}/{ENDERECO.uf}
                  <br />
                  CEP {ENDERECO.cep}
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <Phone size={22} className="flex-shrink-0 text-[#0e6d8f] mt-1" />
              <div>
                <h3 className="font-bold text-[#0b3d5c] mb-1">Telefones</h3>
                <div className="flex flex-col">
                  {TELEFONES.map(({ rotulo, href }) => (
                    <a
                      key={rotulo}
                      href={href}
                      className="text-gray-600 hover:text-[#0e6d8f] transition-colors"
                    >
                      {rotulo}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <MessageCircle size={22} className="flex-shrink-0 text-[#0e6d8f] mt-1" />
              <div>
                <h3 className="font-bold text-[#0b3d5c] mb-1">WhatsApp</h3>
                <a
                  href={whatsapp('Olá! Vim pelo site do Centro Ortopédico.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#0e6d8f] transition-colors"
                >
                  {WHATSAPP_ROTULO}
                </a>
              </div>
            </div>

            <div className="flex gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <Mail size={22} className="flex-shrink-0 text-[#0e6d8f] mt-1" />
              <div>
                <h3 className="font-bold text-[#0b3d5c] mb-1">E-mail</h3>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-gray-600 hover:text-[#0e6d8f] transition-colors break-all"
                >
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={enviar} className="space-y-4">
              <input
                type="text"
                placeholder="Seu nome"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0e6d8f] transition-colors"
              />
              <select
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0e6d8f] transition-colors bg-white"
              >
                <option>Informações sobre produtos</option>
                <option>Próteses e órteses sob medida</option>
                <option>Coletes 3D</option>
                <option>Palmilhas e baropodometria</option>
                <option>Locação de equipamentos</option>
                <option>Outros assuntos</option>
              </select>
              <textarea
                placeholder="Conte brevemente o que você precisa"
                rows={5}
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0e6d8f] transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#0e6d8f] hover:bg-[#0b3d5c] text-white px-6 py-4 rounded-xl font-bold transition-colors duration-300"
              >
                <MessageCircle size={20} />
                Enviar pelo WhatsApp
              </button>
              <p className="text-sm text-gray-500 text-center">
                O formulário abre uma conversa no WhatsApp com a sua mensagem já preenchida.
              </p>
            </form>
          </div>
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden border border-gray-200">
          <iframe
            src={MAPA_EMBED}
            title={`Mapa – ${ENDERECO_COMPLETO}`}
            width="100%"
            height="380"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

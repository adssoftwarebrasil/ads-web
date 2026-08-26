import { Mail, Phone, Instagram, Clock, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#19355E] to-[#0d1b2f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=ads-site%2FlogoADS.png&version_id=null"
              alt="Logo ADS Software"
              loading="lazy"
              width="150"
              height="48"
              className="h-12 mb-6"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Maior empresa da América Latina em impulsionamento digital. 8 anos transformando negócios.
            </p>
            <div className="flex gap-4">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=ads-marketing%2F000103.png&version_id=null"
                alt="Certificação Google Partner"
                loading="lazy"
                width="80"
                height="32"
                className="h-8 object-contain bg-white rounded px-2 py-1"
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contato@ads.software"
                  className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5 mt-0.5 text-[#1264C6] group-hover:text-[#33a753] transition-colors" />
                  <span>contato@ads.software</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:08007800040"
                  className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <Phone className="w-5 h-5 mt-0.5 text-[#1264C6] group-hover:text-[#33a753] transition-colors" />
                  <span>0800-780-0040</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/ads.software"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <Instagram className="w-5 h-5 mt-0.5 text-[#1264C6] group-hover:text-[#33a753] transition-colors" />
                  <span>@ads.software</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Horário</h3>
            <div className="flex items-start gap-3 text-gray-300 mb-4">
              <Clock className="w-5 h-5 mt-0.5 text-[#1264C6]" />
              <div>
                <p className="font-semibold text-white">Segunda a Sexta</p>
                <p>8h às 18h</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-6">Atendemos todo o Brasil</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Localização</h3>
            <div className="flex items-start gap-3 text-gray-300">
              <MapPin className="w-5 h-5 mt-0.5 text-[#1264C6] flex-shrink-0" />
              <address className="not-italic leading-relaxed">
                Av. C-4, 931, Terra Office<br />Salas 2704A – 2705A<br />2704B – 2705B<br />Jardim América<br />Goiânia - GO, 74265-040
              </address>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.6254523446755!2d-49.2917425!3d-16.695615999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef6b12558ddd7%3A0x136d5f4135a2d41e!2sTerra%20Office!5e0!3m2!1spt-BR!2sbr!4v1764329830321!5m2!1spt-BR!2sbr"
              width="100%"
              height="300"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
              title="Localização ADS Software - Terra Office, Goiânia"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400">© 2026 ADS Software. Todos os direitos reservados.</p>
          <p className="text-sm text-gray-500 mt-2">Parceiro do Programa Google Partner</p>
        </div>
      </div>
    </footer>
  );
}

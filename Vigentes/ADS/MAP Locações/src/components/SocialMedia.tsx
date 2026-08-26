import { Instagram, Facebook, MessageCircle, Mail } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function SocialMedia() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@MapLocacoes Slz',
      url: 'https://instagram.com/maplocacoes.slz',
      color: 'hover:text-pink-600',
    },
    {
      icon: Facebook,
      name: 'Facebook',
      handle: 'MapLocacoes Slz',
      url: 'https://www.facebook.com/profile.php?id=61556488954200',
      color: 'hover:text-blue-600',
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      handle: '(98) 98731-8235',
      url: 'https://wa.me/5598987318235',
      color: 'hover:text-green-600',
    },
    {
      icon: Mail,
      name: 'E-mail',
      handle: 'maplocacaoslz@gmail.com',
      url: 'mailto:maplocacaoslz@gmail.com',
      color: 'hover:text-red-600',
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Conecte-se Conosco</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Estamos sempre disponíveis para você
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-primary hover:shadow-xl transition-all duration-300 hover:scale-110 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors group-hover:rotate-[360deg] transition-transform duration-500">
                <social.icon size={32} className={`text-primary ${social.color} transition-colors`} />
              </div>
              <h3 className="font-bold text-black mb-1">{social.name}</h3>
              <p className="text-sm text-gray-600 break-words">{social.handle}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

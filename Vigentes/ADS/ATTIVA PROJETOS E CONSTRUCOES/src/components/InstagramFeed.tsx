import { useEffect, useRef, useState } from 'react';
import { Instagram } from 'lucide-react';

interface InstagramPostProps {
  url: string;
  delay: number;
}

const InstagramPost = ({ url, delay }: InstagramPostProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const postRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (postRef.current) {
      observer.observe(postRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (isVisible && window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [isVisible]);

  return (
    <div
      ref={postRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: 0,
          borderRadius: '3px',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          maxWidth: '540px',
          minWidth: '326px',
          padding: 0,
          width: 'calc(100% - 2px)',
        }}
      />
    </div>
  );
};

const InstagramFeed = () => {
  const posts = [
    'https://www.instagram.com/p/CHiYGazhYyJ/',
    'https://www.instagram.com/p/CHc6s2hh8p7/',
    'https://www.instagram.com/p/CG4y4-ihjeR/',
  ];

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = '//www.instagram.com/embed.js';
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-background-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full mb-6">
            <Instagram size={32} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-blue-dark mb-6">
            Acompanhe Nossos Projetos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Confira as últimas novidades e projetos no nosso Instagram
          </p>
          <a
            href="https://www.instagram.com/attivaprojetoseconstrucoes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-orange hover:text-primary-orange-light transition-colors font-semibold"
          >
            <Instagram size={20} />
            @attivaprojetoseconstrucoes
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {posts.map((post, index) => (
            <InstagramPost key={post} url={post} delay={index * 200} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/attivaprojetoseconstrucoes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Instagram size={24} />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export default InstagramFeed;

import { useEffect, useRef, useState } from 'react';
import { Instagram } from 'lucide-react';

export default function InstagramSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const script = document.createElement('script');
      script.async = true;
      script.src = '//www.instagram.com/embed.js';
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isVisible]);

  const posts = [
    'https://www.instagram.com/p/DIJ5njUxWC9/',
    'https://www.instagram.com/reel/DJ2HfLkSM5r/',
    'https://www.instagram.com/p/DILwvcoxUXW/',
  ];

  return (
    <section ref={sectionRef} className="bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-3 rounded-full">
              <Instagram className="text-white" size={32} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#000000] mb-4">
            Siga-nos no Instagram
          </h2>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto mb-6">
            Acompanhe nossos trabalhos e novidades
          </p>
          <a
            href="https://instagram.com/balancasnovaera"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            <Instagram size={20} />
            @balancasnovaera
          </a>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((postUrl, index) => (
              <div
                key={index}
                className={`w-full ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="w-full max-w-full overflow-hidden">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-captioned
                    data-instgrm-permalink={`${postUrl}?utm_source=ig_embed&utm_campaign=loading`}
                    data-instgrm-version="14"
                    style={{
                      background: '#FFF',
                      border: 0,
                      borderRadius: '3px',
                      boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                      margin: '0 auto',
                      maxWidth: '540px',
                      minWidth: '280px',
                      padding: 0,
                      width: '100%',
                    }}
                  ></blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from 'react';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="https://wa.me/553488692793?text=Olá! Gostaria de saber mais sobre as autopeças."
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Contato via WhatsApp"
    >
      <div className="group relative">
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
        <div className="relative bg-[#25D366] hover:bg-[#128C7E] w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110">
          <svg viewBox="0 0 32 32" className="w-9 h-9 text-white" fill="currentColor">
            <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.247 1.402 1.411-5.21-0.324-0.537c-1.331-2.217-2.036-4.773-2.036-7.373 0-7.51 6.11-13.62 13.62-13.62s13.62 6.11 13.62 13.62c0 7.51-6.11 13.88-13.467 13.88zM21.907 18.303c-0.359-0.18-2.118-1.046-2.447-1.164-0.329-0.118-0.568-0.18-0.807 0.18s-0.927 1.164-1.138 1.402c-0.211 0.238-0.421 0.268-0.78 0.089-0.359-0.18-1.515-0.559-2.886-1.78-1.067-0.951-1.788-2.125-1.998-2.484s-0.022-0.553 0.158-0.732c0.162-0.161 0.359-0.421 0.539-0.632 0.18-0.211 0.239-0.359 0.359-0.598 0.12-0.239 0.060-0.449-0.030-0.632-0.090-0.183-0.807-1.943-1.106-2.662-0.289-0.699-0.583-0.605-0.807-0.616-0.209-0.010-0.447-0.012-0.686-0.012s-0.628 0.089-0.957 0.449c-0.329 0.359-1.255 1.226-1.255 2.993s1.285 3.471 1.465 3.709c0.18 0.238 2.534 3.881 6.141 5.443 0.859 0.372 1.53 0.595 2.052 0.761 0.863 0.274 1.648 0.236 2.268 0.143 0.692-0.103 2.118-0.866 2.417-1.702s0.299-1.553 0.209-1.702c-0.090-0.149-0.329-0.238-0.688-0.418z"></path>
          </svg>
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          <div className="bg-[#28156F] text-white px-4 py-2 rounded-lg shadow-xl font-semibold text-sm">
            Fale conosco!
          </div>
        </div>
      </div>
    </a>
  );
}

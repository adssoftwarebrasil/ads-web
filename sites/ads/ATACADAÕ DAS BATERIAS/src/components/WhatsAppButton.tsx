import { WHATSAPP_URL } from '../constants';

export default function WhatsAppButton() {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 group">
      <div className="absolute -top-16 right-0 bg-white text-gray-800 px-4 py-3 rounded-lg shadow-2xl whitespace-nowrap transition-all duration-300 opacity-100 translate-y-0">
        <div className="font-semibold">Precisa de ajuda?</div>
        <div className="text-sm text-gray-600">Fale conosco no WhatsApp!</div>
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45"></div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
        <div className="relative bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300">
          <svg viewBox="0 0 32 32" className="w-8 h-8 text-white" fill="currentColor">
            <path d="M16.002 0C7.164 0 0 7.163 0 16c0 2.825.737 5.482 2.023 7.791L.699 29.958l6.379-1.673A15.953 15.953 0 0016.002 32C24.838 32 32 24.837 32 16S24.838 0 16.002 0zm9.38 22.758c-.392 1.103-1.95 2.024-3.188 2.292-.848.184-1.954.332-5.677-1.219-4.773-1.989-7.857-6.807-8.098-7.123-.233-.316-1.949-2.596-1.949-4.95 0-2.354 1.229-3.51 1.671-3.988.44-.478.962-.598 1.285-.598.322 0 .645.003.927.017.297.015.696-.113 1.088.83.392.945 1.338 3.264 1.454 3.503.117.239.195.518.039.833-.156.315-.234.512-.468.79-.234.278-.492.62-.703.832-.234.238-.478.496-.205.973.273.478 1.215 2.003 2.607 3.244 1.793 1.595 3.304 2.092 3.773 2.331.469.239.743.199.994-.119.273-.316 1.168-1.363 1.48-1.832.312-.469.624-.391 1.053-.235.429.156 2.718 1.282 3.187 1.515.469.234.781.351.895.546.117.195.117 1.132-.273 2.234z"></path>
          </svg>
        </div>
      </div>
    </a>
  );
}

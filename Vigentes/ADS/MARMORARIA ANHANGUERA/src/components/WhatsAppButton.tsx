import { buildWhatsAppUrl } from '../lib/whatsapp';

export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl('Olá! Gostaria de solicitar um orçamento.')}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center group"
      aria-label="Fale conosco no WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-9 h-9 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.002 3.154c-7.047 0-12.77 5.72-12.774 12.763 0 2.262.594 4.472 1.725 6.426l-1.832 6.688 6.854-1.797c1.897 1.037 4.03 1.582 6.206 1.583h.005c7.044 0 12.768-5.72 12.774-12.764.003-3.41-1.326-6.617-3.74-9.032-2.415-2.416-5.626-3.746-9.037-3.747zm0 1.95c2.735 0 5.307 1.066 7.242 3.002 1.936 1.936 3.002 4.51 3.001 7.245-.004 5.644-4.594 10.233-10.241 10.233-1.827 0-3.604-.477-5.175-1.379l-.37-.213-3.835 1.006 1.024-3.738-.234-.383c-1.002-1.617-1.532-3.481-1.532-5.4.004-5.644 4.595-10.233 10.24-10.233zm-6.362 4.596c-.249 0-.587.093-.895.47-.308.378-1.176 1.149-1.176 2.8 0 1.653 1.203 3.25 1.37 3.474.167.224 2.308 3.676 5.703 5.011 2.822 1.11 3.395.888 4.009.833.613-.055 1.978-.809 2.257-1.589.278-.78.278-1.45.195-1.589-.083-.14-.306-.224-.64-.391-.333-.168-1.978-.976-2.284-1.087-.307-.112-.53-.167-.753.167-.223.335-.865 1.087-1.06 1.311-.194.223-.389.251-.723.084-.333-.168-1.409-.52-2.684-1.657-1.005-.9-1.68-2.01-1.877-2.344-.195-.334-.02-.514.147-.68.15-.15.334-.391.501-.586.167-.195.223-.334.334-.557.112-.224.056-.418-.028-.586-.083-.167-.741-1.82-1.033-2.49-.269-.617-.547-.616-.753-.624-.194-.007-.418-.008-.641-.008z"></path>
      </svg>
      <div className="absolute -top-12 right-0 bg-gray-900 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
        <p className="text-sm font-semibold">Fale conosco!</p>
        <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
      </div>
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
    </a>
  );
}

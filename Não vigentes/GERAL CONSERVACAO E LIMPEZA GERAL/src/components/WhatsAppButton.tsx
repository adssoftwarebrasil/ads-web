export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5592981671587?text=Olá! Gostaria de solicitar um orçamento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 animate-bounce-slow group"
      aria-label="Fale conosco no WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-9 h-9 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.002 3.2c-7.069 0-12.8 5.731-12.8 12.8 0 2.275.598 4.512 1.733 6.485l-1.835 6.712 6.892-1.807c1.904 1.039 4.053 1.61 6.21 1.61 7.069 0 12.8-5.731 12.8-12.8s-5.731-12.8-12.8-12.8zm0 23.467c-1.968 0-3.883-.544-5.547-1.573l-.398-.237-4.128 1.083 1.101-4.029-.26-.413c-1.099-1.748-1.681-3.774-1.681-5.861 0-5.897 4.803-10.7 10.7-10.7s10.7 4.803 10.7 10.7-4.803 10.7-10.7 10.7zm5.867-8.014c-.322-.161-1.904-.939-2.199-1.047-.295-.108-.51-.161-.725.161-.214.322-.831 1.047-1.019 1.262-.188.214-.376.241-.698.08-.322-.161-1.359-.501-2.589-1.597-.957-.854-1.604-1.908-1.792-2.23-.188-.322-.02-.496.141-.656.145-.144.322-.376.483-.564.161-.188.214-.322.322-.537.108-.214.054-.403-.027-.564-.08-.161-.725-1.748-1.001-2.392-.268-.627-.535-.542-.725-.552-.188-.01-.403-.012-.618-.012s-.564.08-.859.403c-.295.322-1.126 1.1-1.126 2.685s1.153 3.115 1.314 3.329c.161.214 2.275 3.475 5.513 4.873.771.333 1.373.532 1.842.681.774.246 1.479.211 2.037.128.621-.093 1.904-.778 2.172-1.53.268-.752.268-1.397.188-1.53-.08-.134-.295-.214-.618-.376z"></path>
      </svg>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></span>
    </a>
  );
}

const WhatsappButton = () => {
  const href = `https://wa.me/554233230147?text=${encodeURIComponent(
    "Olá! Vim através do site da AgroPG e gostaria de mais informações."
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-6 md:right-6 w-14 h-14 md:w-16 md:h-16 bg-[rgb(45,156,219)] rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 group cursor-pointer"
      style={{ boxShadow: "0 4px 16px rgba(45, 156, 219, 0.4)" }}
      aria-label="Contact via WhatsApp"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="white"
        className="group-hover:scale-110 transition-transform"
      >
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.831.739 5.489 2.032 7.792L0 32l8.408-2.017A15.918 15.918 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm.001 29.097c-2.413 0-4.736-.668-6.72-1.931l-.482-.288-5.003 1.203 1.218-4.914-.316-.501A12.927 12.927 0 013 16C3 8.82 8.82 3 16 3s13 5.82 13 13-5.82 13.097-13 13.097zm7.144-9.763c-.393-.196-2.322-1.145-2.682-1.276-.36-.131-.622-.196-.883.197-.262.393-1.013 1.276-1.242 1.538-.229.262-.458.295-.851.098-.393-.196-1.659-.612-3.159-1.947-1.168-1.042-1.957-2.328-2.186-2.721-.229-.393-.024-.605.172-.801.177-.176.393-.459.589-.688.196-.229.262-.393.393-.655.131-.262.066-.491-.033-.688-.098-.197-.883-2.127-1.21-2.913-.319-.765-.643-.661-.883-.673-.229-.012-.491-.015-.753-.015s-.688.098-1.048.491c-.36.393-1.375 1.342-1.375 3.273s1.407 3.798 1.604 4.06c.196.262 2.771 4.233 6.715 5.935.938.405 1.671.647 2.242.828.943.299 1.802.257 2.481.156.757-.113 2.322-.949 2.649-1.866.327-.916.327-1.702.229-1.866-.098-.164-.36-.262-.753-.459z" />
      </svg>
    </a>
  );
};

export default WhatsappButton;

import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  label: string;
  sizeClasses?: string;
  extraClasses?: string;
  iconSize?: number;
}

const KIWIFY_URL = 'https://pay.kiwify.com.br/CvbiLVk';

export default function CTAButton({
  label,
  sizeClasses = 'px-8 py-4 text-base md:text-lg',
  extraClasses = '',
  iconSize = 20,
}: CTAButtonProps) {
  return (
    <a
      href={KIWIFY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 ${sizeClasses} bg-brand-green hover:bg-brand-greenHover text-white shadow-lg shadow-brand-green/25 hover:shadow-xl hover:shadow-brand-green/30 hover:-translate-y-0.5 cta-pulse ${extraClasses}`}
    >
      <span>{label}</span>
      <ArrowRight
        size={iconSize}
        className="lucide lucide-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"
      />
    </a>
  );
}

import { FileText, ExternalLink } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  pdfUrl?: string;
}

export default function ProductCard({ title, description, icon: Icon, image, pdfUrl }: ProductCardProps) {
  const handleViewCatalog = () => {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    } else {
      const message = `Olá! Gostaria de ver o catálogo de ${title}.`;
      const whatsappUrl = `https://wa.me/5566999029696?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-[#0b77aa] transition-all duration-300">
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Icon size={64} className="text-gray-400 group-hover:text-[#0b77aa] transition-colors" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      <div className="p-6">
        <div className="flex items-start gap-3 mb-3">
          <div className="bg-[#0b77aa] bg-opacity-10 p-2 rounded-lg flex-shrink-0">
            <Icon className="text-[#0b77aa]" size={24} />
          </div>
          <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-[#0b77aa] transition-colors">
            {title}
          </h3>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        <button
          onClick={handleViewCatalog}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#0b77aa] to-[#095f88] text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all font-medium group-hover:gap-3"
        >
          <FileText size={18} />
          <span>Ver Catálogo</span>
          <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </div>
  );
}

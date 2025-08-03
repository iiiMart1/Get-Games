import { Download, Star, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface GameCardProps {
  id: string;
  title: string;
  image: string;
  rating: number;
  downloads: string;
  size: string;
  category: string;
  downloadUrl: string;
}

export function GameCard({ id:_id, title, image, rating, downloads, size, category, downloadUrl }: GameCardProps) {
  const handleDownload = () => {
    // Open the download URL in a new tab
    window.open(downloadUrl, '_blank');
  };

  return (
    <div className="relative group">
      {/* Glass card with backdrop blur */}
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 shadow-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/25">
        {/* Category badge */}
        <div className="absolute top-2 right-2 px-2 py-1 bg-gradient-to-r from-cyan-500/80 to-purple-500/80 backdrop-blur-sm rounded-full text-xs text-white z-10">
          {category}
        </div>

        {/* Game image */}
        <div className="relative mb-3 rounded-xl overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-32 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Game info */}
        <div className="space-y-2">
          <h3 className="text-white truncate">{title}</h3>
          
          {/* Rating and downloads */}
          <div className="flex items-center justify-between text-xs text-white/80">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span>{rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              <span>{downloads}</span>
            </div>
          </div>

          {/* Size info */}
          <div className="text-xs text-white/60">
            Size: {size}
          </div>

          {/* Download button */}
          <button
            onClick={handleDownload}
            className="w-full mt-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white py-2 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <Download className="w-4 h-4" />
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
}
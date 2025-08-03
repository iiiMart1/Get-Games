import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { GameCard } from "./GameCard";

const allGames = [
  // Initial 8 games
  {
    id: "1",
    title: "Cyber Legends",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    rating: 4.8,
    downloads: "1M+",
    size: "2.1GB",
    category: "Action",
    downloadUrl: "https://example.com/download/cyber-legends"
  },
  {
    id: "2",
    title: "Neon Racing",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop",
    rating: 4.6,
    downloads: "500K+",
    size: "1.8GB",
    category: "Racing",
    downloadUrl: "https://example.com/download/neon-racing"
  },
  {
    id: "3",
    title: "Space Odyssey",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop",
    rating: 4.9,
    downloads: "2M+",
    size: "3.2GB",
    category: "Adventure",
    downloadUrl: "https://example.com/download/space-odyssey"
  },
  {
    id: "4",
    title: "Mystic Quest",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    rating: 4.7,
    downloads: "800K+",
    size: "2.5GB",
    category: "RPG",
    downloadUrl: "https://example.com/download/mystic-quest"
  },
  {
    id: "5",
    title: "Battle Royale X",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
    rating: 4.5,
    downloads: "3M+",
    size: "4.1GB",
    category: "Battle",
    downloadUrl: "https://example.com/download/battle-royale-x"
  },
  {
    id: "6",
    title: "Puzzle Matrix",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
    rating: 4.4,
    downloads: "600K+",
    size: "800MB",
    category: "Puzzle",
    downloadUrl: "https://example.com/download/puzzle-matrix"
  },
  {
    id: "7",
    title: "Virtual World",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=300&fit=crop",
    rating: 4.8,
    downloads: "1.5M+",
    size: "5.2GB",
    category: "Simulation",
    downloadUrl: "https://example.com/download/virtual-world"
  },
  {
    id: "8",
    title: "Retro Arcade",
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=400&h=300&fit=crop",
    rating: 4.3,
    downloads: "400K+",
    size: "1.2GB",
    category: "Arcade",
    downloadUrl: "https://example.com/download/retro-arcade"
  },
  // Additional games that will load when "Load More" is clicked
  {
    id: "9",
    title: "Dragon Hunter",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=300&fit=crop",
    rating: 4.6,
    downloads: "900K+",
    size: "3.5GB",
    category: "Fantasy",
    downloadUrl: "https://example.com/download/dragon-hunter"
  },
  {
    id: "10",
    title: "Street Fighter Z",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
    rating: 4.7,
    downloads: "1.2M+",
    size: "2.8GB",
    category: "Fighting",
    downloadUrl: "https://example.com/download/street-fighter-z"
  },
  {
    id: "11",
    title: "Ocean Explorer",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    rating: 4.5,
    downloads: "700K+",
    size: "4.2GB",
    category: "Adventure",
    downloadUrl: "https://example.com/download/ocean-explorer"
  },
  {
    id: "12",
    title: "Mech Warriors",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    rating: 4.8,
    downloads: "1.8M+",
    size: "5.1GB",
    category: "Mech",
    downloadUrl: "https://example.com/download/mech-warriors"
  },
  {
    id: "13",
    title: "Card Master",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
    rating: 4.3,
    downloads: "600K+",
    size: "1.1GB",
    category: "Card",
    downloadUrl: "https://example.com/download/card-master"
  },
  {
    id: "14",
    title: "Zombie Survival",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    rating: 4.4,
    downloads: "950K+",
    size: "3.7GB",
    category: "Horror",
    downloadUrl: "https://example.com/download/zombie-survival"
  },
  {
    id: "15",
    title: "Sky Racers",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop",
    rating: 4.6,
    downloads: "1.1M+",
    size: "2.3GB",
    category: "Racing",
    downloadUrl: "https://example.com/download/sky-racers"
  },
  {
    id: "16",
    title: "Magic Realms",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    rating: 4.9,
    downloads: "2.5M+",
    size: "6.2GB",
    category: "Fantasy",
    downloadUrl: "https://example.com/download/magic-realms"
  }
];

export function GameGrid() {
  const [displayedGames, setDisplayedGames] = useState(allGames.slice(0, 8));
  const [isLoading, setIsLoading] = useState(false);
  const [hasMoreGames, setHasMoreGames] = useState(true);

  const handleLoadMore = async () => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const currentCount = displayedGames.length;
    const nextBatch = allGames.slice(currentCount, currentCount + 4);
    
    if (nextBatch.length > 0) {
      setDisplayedGames(prev => [...prev, ...nextBatch]);
    }
    
    // Check if there are more games to load
    if (currentCount + nextBatch.length >= allGames.length) {
      setHasMoreGames(false);
    }
    
    setIsLoading(false);
  };

  return (
    <div className="px-4 py-6">
      {/* Section header */}
      <div className="mb-6">
        <h2 className="text-white text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
          Featured Games
        </h2>
        <p className="text-white/60 text-sm">
          Discover the latest and greatest games
        </p>
      </div>

      {/* Games grid - 2 columns */}
      <div className="grid grid-cols-2 gap-4">
        {displayedGames.map((game, index) => (
          <div
            key={game.id}
            className={`animate-in fade-in slide-in-from-bottom-4 duration-500`}
            style={{ animationDelay: `${(index % 4) * 100}ms` }}
          >
            <GameCard {...game} />
          </div>
        ))}
      </div>

      {/* Load more button */}
      {hasMoreGames && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="backdrop-blur-xl bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/15 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Loading...</span>
              </>
            ) : (
              <span>Load More Games</span>
            )}
          </button>
        </div>
      )}

      {/* End message when all games are loaded */}
      {!hasMoreGames && (
        <div className="mt-8 text-center">
          <p className="text-white/60 text-sm">
            🎮 You've seen all available games! Check back later for new releases.
          </p>
        </div>
      )}
    </div>
  );
}
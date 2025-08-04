import { Search, Menu, User } from 'lucide-react';

export function Header() {
  return (
    <header className="relative z-20 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="..\assets\Logo.svg"
              alt = "Logo"
              className="w-8 h-8 object-contain rounded"
             />
            <h1 className="text-white text-lg bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Get Games
            </h1>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="p-2 text-white/80 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-white/80 hover:text-white transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 text-white/80 hover:text-white transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search bar */}
        <div className="mt-3 relative">
          <input
            type="text"
            placeholder="Search games..."
            className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
        </div>
      </div>
    </header>
  );
}
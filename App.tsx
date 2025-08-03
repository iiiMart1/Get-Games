import { Web3Background } from './components/Web3Background';
import { Header } from './components/Header';
import { GameGrid } from './components/GameGrid';

export default function App() {
  return (
    <div className="min-h-screen text-white relative">
      {/* Web 3 themed background */}
      <Web3Background />
      
      {/* Main content */}
      <div className="relative z-10">
        {/* Header */}
        <Header />
        
        {/* Main content area */}
        <main className="pb-6">
          <GameGrid />
        </main>
      </div>
    </div>
  );
}
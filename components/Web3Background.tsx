export function Web3Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 border border-cyan-400 rotate-45 animate-spin-slow opacity-60" />
      <div className="absolute top-1/3 right-1/4 w-6 h-6 border border-purple-400 rotate-12 animate-ping opacity-40" />
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-bounce opacity-70" />
      <div className="absolute bottom-1/3 right-1/3 w-5 h-5 border border-pink-400 rounded-full animate-pulse opacity-50" />
      
      {/* Scan lines effect */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_2px,rgba(0,255,255,0.03)_2px,rgba(0,255,255,0.03)_4px,transparent_4px)] bg-[length:100%_4px] animate-pulse" />
    </div>
  );
}
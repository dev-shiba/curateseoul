export default function RibbonBadge({ text }: { text: string }) {
  return (
    <div className="relative w-[360px] h-[64px] drop-shadow-md flex items-center justify-center transition-transform">
      <svg viewBox="0 0 360 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
        {/* Tails (Folded behind) */}
        <path d="M0 16 L40 16 L40 48 L0 48 L12 32 L0 16 Z" fill="#D4B890" />
        <path d="M360 16 L320 16 L320 48 L360 48 L348 32 L360 16 Z" fill="#D4B890" />

        {/* Connecting Folds (Triangles) */}
        <path d="M24 50 L40 48 V16 L24 14 V50 Z" fill="#B08D55" />
        <path d="M336 50 L320 48 V16 L336 14 V50 Z" fill="#B08D55" />

        {/* Main Body - Rectangular */}
        <rect x="24" y="10" width="312" height="44" fill="#FFFDF8" stroke="#D4B890" strokeWidth="1.5" />
      </svg>

      <div className="relative z-10 flex items-center gap-2 pb-1">
        <span className="text-sm">✨</span>
        <span className="text-brand-gold-dark font-bold text-base tracking-widest uppercase">
          {text}
        </span>
        <span className="text-sm">✨</span>
      </div>
    </div>
  );
}

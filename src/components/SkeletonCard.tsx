export default function SkeletonCard() {
  return (
    <div className="glass-card overflow-hidden h-full flex flex-col animate-pulse">
      <div className="aspect-video w-full bg-white/5"></div>
      <div className="p-5 flex-grow flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="w-16 h-5 bg-white/10 rounded-full"></div>
          <div className="w-10 h-4 bg-white/10 rounded"></div>
        </div>
        <div className="w-3/4 h-6 bg-white/10 rounded"></div>
        <div className="mt-auto w-1/3 h-4 bg-white/10 rounded"></div>
      </div>
    </div>
  );
}

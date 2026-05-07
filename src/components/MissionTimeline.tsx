interface TimelineEntry {
  _id?: string;
  date: string;
  event: string;
}

interface MissionTimelineProps {
  timeline: TimelineEntry[];
}

export default function MissionTimeline({ timeline }: MissionTimelineProps) {
  if (!timeline || timeline.length === 0) {
    return <p className="text-slate-400">No timeline data available.</p>;
  }

  const sortedTimeline = [...timeline].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="relative pl-6 py-4">
      {/* Vertical tracking line */}
      <div className="absolute top-0 bottom-0 left-[11px] w-0.5 bg-white/10"></div>
      
      <div className="space-y-8">
        {sortedTimeline.map((item, index) => (
          <div key={item._id || index} className="relative">
            {/* Dot */}
            <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-[#0a0a0f]"></div>
            
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-cyan-400 mb-1">
                {new Date(item.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <p className="text-slate-300">
                {item.event}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

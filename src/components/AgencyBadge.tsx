interface AgencyBadgeProps {
  agency: string;
}

export default function AgencyBadge({ agency }: AgencyBadgeProps) {
  const getBadgeColor = () => {
    switch (agency) {
      case 'NASA': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'ISRO': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      case 'ESA': return 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30';
      case 'CNSA': return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'JAXA': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'Roscosmos': return 'bg-rose-500/20 text-rose-300 border-rose-500/30';
      default: return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
    }
  };

  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getBadgeColor()}`}>
      {agency}
    </span>
  );
}

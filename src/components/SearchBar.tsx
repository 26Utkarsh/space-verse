import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
}

export default function SearchBar({ value, onChange, onSubmit }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto group">
      <input
        type="search"
        placeholder="Search missions, agencies, or planets..."
        value={value}
        onChange={onChange}
        className="w-full px-6 py-4 bg-[#0a0e17] border border-slate-800 rounded-full focus:outline-none focus:border-[#00f0ff]/50 text-sm font-mono text-white placeholder-slate-500 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]"
      />
      {onSubmit && (
         <button 
           onClick={onSubmit}
           className="hidden"
         >
         </button>
      )}
    </div>
  );
}

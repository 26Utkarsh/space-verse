export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/10 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-slate-400 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} CosmosArchive. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <span className="text-slate-500 text-sm">Data from NASA, ISRO, ESA, CNSA, JAXA, Roscosmos</span>
        </div>
      </div>
    </footer>
  );
}

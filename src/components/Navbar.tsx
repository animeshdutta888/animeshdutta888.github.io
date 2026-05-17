const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Resume", "#resume"],
  ["Contact", "#contact"],
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="font-display text-lg font-bold tracking-[0.18em] text-white">
          AD
        </a>
        <div className="hidden gap-6 text-sm text-slate-300 md:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-white">
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

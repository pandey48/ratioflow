function Navbar() {
  const waitlistHref =
    "mailto:hello@ratioflow.in?subject=RatioFlow%20Waitlist&body=Hi%20RatioFlow%2C%0A%0AI'd%20like%20to%20join%20the%20waitlist.";

  return (
    <header className="relative z-50 w-full border-b border-white/10 bg-[#07090d]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-10">
        
        <a
          href="/"
          className="text-xl font-bold tracking-[-0.05em] text-white sm:text-2xl"
        >
          Ratio<span className="text-amber-400">Flow</span>
        </a>

        <a
          href={waitlistHref}
          className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-gray-200 transition hover:border-amber-400/40 hover:text-amber-400 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          Join waitlist
        </a>

      </nav>
    </header>
  );
}

export default Navbar;
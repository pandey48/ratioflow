function Navbar() {
  const waitlistHref =
    "mailto:hello@ratioflow.in?subject=RatioFlow%20Waitlist";

  return (
    <header className="relative z-50 w-full border-b border-white/10 bg-[#07090d]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-10">

        {/* Logo + Text */}
        <a
          href="/"
          aria-label="RatioFlow Home"
          className="flex items-center gap-2.5"
        >
          <img
            src="/ratioflow-logo.jpg"
            alt=""
            className="h-9 w-9 rounded-full object-cover sm:h-11 sm:w-11"
          />

          <span className="text-xl font-bold tracking-[-0.04em] text-white sm:text-2xl">
            Ratio<span className="text-amber-400">Flow</span>
          </span>
        </a>

        {/* Join Waitlist */}
        <a
          href={waitlistHref}
          className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-gray-200 transition hover:border-amber-400 hover:text-amber-400 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          Join waitlist
        </a>

      </nav>
    </header>
  );
}

export default Navbar;
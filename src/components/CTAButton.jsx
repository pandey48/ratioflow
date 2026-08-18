function CTAButton() {
  const waitlistHref =
    "mailto:hello@ratioflow.in?subject=RatioFlow%20Waitlist&body=Hi%20RatioFlow%2C%0A%0AI'd%20like%20to%20join%20the%20waitlist.";

  return (
    <a
      href={waitlistHref}
      className="inline-flex min-h-12 w-full max-w-[220px] items-center justify-center gap-3 rounded-full bg-amber-400 px-6 text-sm font-bold text-[#161108] shadow-lg shadow-amber-400/10 transition hover:-translate-y-0.5 hover:bg-amber-300 sm:min-h-14 sm:w-auto sm:min-w-[200px]"
    >
      Join the waitlist

      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#161108] text-sm text-amber-400">
        ↗
      </span>
    </a>
  );
}

export default CTAButton;
import CTAButton from "./CTAButton";

function Hero() {
  return (
    <section
      className="relative flex min-h-[620px] w-full items-center overflow-hidden bg-[#07090d] bg-cover bg-center bg-no-repeat px-5 py-20 sm:min-h-[680px] sm:px-8 lg:min-h-[calc(100vh-80px)] lg:px-10"
      style={{
        backgroundImage: `
          linear-gradient(
            180deg,
            rgba(7,9,13,0.55),
            rgba(7,9,13,0.82)
          ),
          url("/ratioflow-bg.webp")
        `,
      }}
    >
      <div className="absolute inset-0 bg-[#07090d]/20" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">

        <p className="mb-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-300 sm:mb-6 sm:text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          Legal intelligence, simplified
        </p>

        <h1 className="max-w-4xl text-[42px] font-bold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[84px]">
          Make sense of the law.
          <br />
          <span className="text-amber-400">Move forward.</span>
        </h1>

        <p className="mt-6 max-w-xl text-sm leading-6 text-gray-300 sm:mt-7 sm:text-base sm:leading-7 lg:text-lg">
          RatioFlow turns complex legal information into clear, actionable
          answers — built for the people who need to understand what comes next.
        </p>

        <div className="mt-8 sm:mt-9">
          <CTAButton />
        </div>

        <p className="mt-4 text-[11px] text-gray-500 sm:text-xs">
          Early access · Built for India
        </p>

      </div>
    </section>
  );
}

export default Hero;
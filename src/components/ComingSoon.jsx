import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "⚖",
    title: "Judgment Translator",
    text: "Understand any court order in plain language.",
  },
  {
    icon: "⌕",
    title: "Legal Research AI",
    text: "Ask questions and get answers with citations.",
  },
  {
    icon: "▣",
    title: "eCourts Dashboard",
    text: "Keep cases, hearings, and important dates in one place.",
  },
  {
    icon: "◉",
    title: "Court Audio Notes",
    text: "Record hearings and get instant transcripts.",
  },
];

function ComingSoon() {
  return (
    <section className="w-full bg-[#07090d] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto w-full max-w-7xl">

        <div className="max-w-2xl">
          <p className="mb-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            What&apos;s coming
          </p>

          <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
            Less searching.
            <br />
            <span className="text-gray-500">More understanding.</span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              text={feature.text}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ComingSoon;
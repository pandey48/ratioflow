function FeatureCard({ icon, title, text }) {
  return (
    <article
      className="
        group rounded-2xl border border-white/10
        bg-white/[0.04] p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:border-amber-400/30
        hover:bg-white/[0.07]
        sm:p-7
      "
    >
      <div
        className="
          mb-6 flex h-11 w-11 items-center justify-center
          rounded-xl
          border border-amber-400/20
          bg-amber-400/10
          text-xl text-amber-400
        "
      >
        {icon}
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-400 sm:text-[15px]">
        {text}
      </p>
    </article>
  );
}

export default FeatureCard;
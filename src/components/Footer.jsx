function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07090d] px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 sm:gap-10 md:flex-row md:items-end md:justify-between">

        <div>
          <a
            href="/"
            className="text-xl font-bold tracking-[-0.05em] text-white"
          >
            Ratio<span className="text-amber-400">Flow</span>
          </a>

          <p className="mt-2 text-sm text-gray-500">
            Legal clarity, without the legalese.
          </p>
        </div>

        <div className="flex flex-col gap-5 sm:items-start md:items-end">
          
          <div className="flex flex-wrap gap-5 text-sm text-gray-400">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-amber-400"
            >
              LinkedIn
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-amber-400"
            >
              X
            </a>

            <a
              href="mailto:hello@ratioflow.in"
              className="transition hover:text-amber-400"
            >
              Email
            </a>
          </div>

          <small className="text-xs text-gray-600">
            © {new Date().getFullYear()} RatioFlow. All rights reserved.
          </small>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
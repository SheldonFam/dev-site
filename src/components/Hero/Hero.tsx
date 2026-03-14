export function Hero() {
  return (
    <section
      id="about"
      className="max-w-[1100px] mx-auto px-8 md:px-8 min-h-screen flex flex-col justify-center pt-[60px]"
    >
      <div className="inline-flex items-center gap-2 bg-accent-glow border border-accent-border text-accent px-3.5 py-1.5 rounded-full text-xs font-medium w-fit mb-6">
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse-dot" />
        Available for opportunities
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5 text-text-primary">
        Hi, I'm{" "}
        <span className="bg-gradient-to-br from-accent to-purple-500 bg-clip-text text-transparent">
          Sheldon Fam
        </span>
      </h1>

      <p className="text-lg text-text-secondary mb-8">
        Frontend Engineer with 2+ years building high-traffic Angular and React
        applications for government and enterprise platforms. Delivered
        production systems serving 15M+ users.
      </p>

      <div className="flex gap-4 flex-wrap">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-accent text-white hover:bg-blue-600 hover:-translate-y-0.5 transition-all"
        >
          Get in Touch
        </a>
        <a
          href="#experience"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-transparent text-text-primary border border-border-custom hover:border-text-muted hover:bg-surface transition-all"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}

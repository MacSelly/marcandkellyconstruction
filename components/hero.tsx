import Image from 'next/image'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0">
        <Image
          src="/hero-painter.png"
          alt="Marc & Kelly Construction team working on a commercial building exterior in Accra, Ghana"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/30" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-6 py-24">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-accent" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            Painting &middot; Plastering &middot; Tiling &middot; POP Design
          </span>
        </div>

        <h1 className="mt-6 max-w-3xl font-heading text-5xl font-bold uppercase leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl">
          Accra&apos;s most trusted<br />
          <span className="text-accent">construction finish.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/70 text-pretty">
          Marc &amp; Kelly Construction has been delivering premium painting,
          plastering, tiling and POP design across Accra for over 20 years.
          From the University of Ghana Hospital to luxury residences — we build
          finishes that last.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#work"
            className="bg-accent px-8 py-4 text-center text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-opacity hover:opacity-90"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            className="border border-primary-foreground/30 px-8 py-4 text-center text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Get a Free Quote
          </a>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-8">
          {[
            ['20+', 'Years in business'],
            ['500+', 'Projects completed'],
            ['100%', 'Certified & insured'],
          ].map(([stat, label]) => (
            <div key={label}>
              <dt className="font-heading text-3xl font-bold text-accent sm:text-4xl">
                {stat}
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-wide text-primary-foreground/60">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

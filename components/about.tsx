import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="border-y border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="overflow-hidden border border-primary-foreground/15">
            <Image
              src="/Gemini_Generated_Image_8ixqe58ixqe58ixq.png"
              alt="Marc & Kelly Construction team — professional painters and construction specialists in Accra, Ghana"
              width={600}
              height={750}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 hidden bg-accent px-6 py-5 sm:block">
            <span className="font-heading text-4xl font-bold text-accent-foreground">
              20+
            </span>
            <p className="text-xs uppercase tracking-wide text-accent-foreground/80">
              Years of excellence
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              About Us
            </span>
          </div>
          <h2 className="mt-4 font-heading text-4xl font-bold uppercase tracking-tight text-balance sm:text-5xl">
            Building Ghana&apos;s finest finishes for over two decades
          </h2>
          <div className="mt-6 space-y-4 text-primary-foreground/70 leading-relaxed">
            <p>
              Founded over 20 years ago, Marc &amp; Kelly Construction has grown
              into one of Accra&apos;s most trusted names in painting, plastering,
              tiling and POP design. Our portfolio spans landmark projects like
              the University of Ghana Hospital through to the finest luxury
              residences in Dansoman and beyond.
            </p>
            <p>
              Every project gets the same commitment — proper surface
              preparation, quality materials, and craftsmen who take pride in
              what they put their name to. That&apos;s why our clients keep
              calling us back.
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              'Certified by Sunville Paints',
              'Fully licensed & insured',
              'Painting, plastering & tiling',
              'POP design specialists',
              'Residential & commercial',
              'Free on-site estimates',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-accent text-xs font-bold text-accent-foreground">
                  &#10003;
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

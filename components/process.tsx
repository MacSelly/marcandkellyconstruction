import { process } from '@/lib/projects'

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-accent" />
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          How It Works
        </span>
      </div>
      <h2 className="mt-4 max-w-2xl font-heading text-4xl font-bold uppercase tracking-tight text-foreground text-balance sm:text-5xl">
        How we work — simple and stress-free
      </h2>

      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {process.map((item) => (
          <div key={item.step} className="border-t-2 border-accent pt-5">
            <span className="font-mono text-sm font-medium text-accent">
              {item.step}
            </span>
            <h3 className="mt-2 font-heading text-xl font-semibold uppercase tracking-tight text-foreground">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

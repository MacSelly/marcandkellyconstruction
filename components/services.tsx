import { services } from '@/lib/projects'

export function Services() {
  return (
    <section id="services" className="border-y border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-accent" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Our Services
            </span>
        </div>
        <h2 className="mt-4 max-w-2xl font-heading text-4xl font-bold uppercase tracking-tight text-foreground text-balance sm:text-5xl">
          Everything your building needs, done right
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="bg-card p-8 transition-colors hover:bg-secondary"
            >
              <span className="font-heading text-5xl font-bold text-border">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-heading text-xl font-semibold uppercase tracking-tight text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

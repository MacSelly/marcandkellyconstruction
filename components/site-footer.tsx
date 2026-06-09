export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-12 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center bg-accent font-heading text-lg font-bold text-accent-foreground">
            M
          </span>
          <span className="font-heading text-lg font-semibold uppercase tracking-wide">
            Marc<span className="text-accent">&</span>Kelly<span className="text-accent"> Construction</span>
          </span>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {['Work', 'Services', 'Process', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-primary-foreground/60 transition-colors hover:text-accent"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Marc & Kelly Construction. Licensed &amp; insured.</p>
          <p>Dansoman &middot; Accra, Ghana</p>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { useState } from 'react'
import Image from 'next/image'
import { projects } from '@/lib/projects'

const ALL = 'All'

export function Portfolio() {
  const categories = [ALL, ...Array.from(new Set(projects.map((p) => p.category)))]
  const [active, setActive] = useState(ALL)

  const filtered = active === ALL ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Selected Work
            </span>
          </div>
          <h2 className="mt-4 max-w-xl font-heading text-4xl font-bold uppercase tracking-tight text-foreground text-balance sm:text-5xl">
            Craftsmanship in every coat
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
          From precision interior painting to decorative POP ceilings and full
          exterior finishes — a look at the work we&apos;re proud of.
        </p>
      </div>

      {/* Category filter tabs */}
      <div className="mt-10 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors ${
              active === cat
                ? 'bg-accent text-accent-foreground'
                : 'border border-border text-muted-foreground hover:border-accent hover:text-accent'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <article
            key={project.slug}
            className={`group relative overflow-hidden border border-border bg-card ${
              project.size === 'tall' ? 'lg:row-span-2' : ''
            } ${project.size === 'wide' ? 'sm:col-span-2' : ''}`}
          >
            <div
              className={`relative overflow-hidden ${
                project.size === 'tall' ? 'aspect-[3/4] lg:h-full' : 'aspect-[4/3]'
              }`}
            >
              <Image
                src={project.image || '/placeholder.svg'}
                alt={`${project.name} — ${project.scope}`}
                fill
                quality={100}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 bg-accent px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-accent-foreground">
                {project.category}
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-xl font-semibold uppercase tracking-tight text-foreground">
                  {project.name}
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {project.year}
                </span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-wide text-accent">
                {project.location}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.scope}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

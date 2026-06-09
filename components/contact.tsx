'use client'

import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const WHATSAPP_NUMBER = '233249659930'

export function Contact() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      type: (form.elements.namedItem('type') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const json = await res.json()
        throw new Error(json.error || 'Something went wrong.')
      }

      setState('success')
    } catch (err) {
      setState('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left — contact info */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Get In Touch
            </span>
          </div>
          <h2 className="mt-4 font-heading text-4xl font-bold uppercase tracking-tight text-foreground text-balance sm:text-5xl">
            Let&apos;s talk about your project
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
            Tell us about your project and we&apos;ll get back to you within one
            business day with a free on-site estimate — no obligation.
          </p>

          <dl className="mt-10 space-y-5">
            {[
              ['Phone', '+233 249 659 930'],
              ['Email', 'markselly19@gmail.com'],
              ['Service Area', 'Dansoman — Accra, Ghana'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between border-b border-border pb-4"
              >
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  {label}
                </dt>
                <dd className="font-heading text-base font-medium text-foreground">
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Marc%20%26%20Kelly%20Construction%2C%20I%20would%20like%20a%20quote%20for%20my%20project.`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center gap-3 bg-[#25D366] px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 shrink-0"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat with us on WhatsApp
          </a>

          {/* Google Maps link */}
          <a
            href="https://maps.google.com/?q=Dansoman,Accra,Ghana"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0 text-accent">
              <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            View us on Google Maps — Dansoman, Accra
          </a>
        </div>

        {/* Right — quote form */}
        <div className="border border-border bg-card p-6 sm:p-8">
          {state === 'success' ? (
            <div className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
              <span className="flex h-14 w-14 items-center justify-center bg-accent text-2xl font-bold text-accent-foreground">
                &#10003;
              </span>
              <h3 className="mt-5 font-heading text-2xl font-semibold uppercase text-foreground">
                Request received
              </h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Thanks for reaching out. The Marc &amp; Kelly team will be in
                touch within one business day to schedule your free estimate.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20just%20submitted%20an%20enquiry%20on%20your%20website.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-2 bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Or reach us instantly on WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your full name" required />
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="+233 XX XXX XXXX"
                />
              </div>
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
              <div>
                <label
                  htmlFor="type"
                  className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted-foreground"
                >
                  Service needed
                </label>
                <select
                  id="type"
                  name="type"
                  className="w-full border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
                >
                  <option>Interior painting</option>
                  <option>Exterior painting</option>
                  <option>Plastering & rendering</option>
                  <option>Tiling</option>
                  <option>POP ceiling design</option>
                  <option>Full renovation</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted-foreground"
                >
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Property type, size, location, timeline..."
                  className="w-full resize-none border border-input bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-accent"
                />
              </div>

              {state === 'error' && (
                <p className="text-sm text-destructive">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={state === 'submitting'}
                className="w-full bg-accent px-6 py-4 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {state === 'submitting' ? 'Sending…' : 'Request Free Estimate'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full border border-input bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-accent"
      />
    </div>
  )
}

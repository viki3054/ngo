import { Mail, MapPin, Phone } from 'lucide-react'
import { PageShell } from '../components/PageShell'
import { Reveal } from '../components/Reveal'

export function ContactPage() {
  return (
    <PageShell>
      <div className="space-y-10">
        <section className="card p-8">
          <Reveal>
            <h1 className="text-3xl font-black tracking-tight">Contact us</h1>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-3 max-w-3xl text-fg/75">
              For collaborations, volunteering, and support—reach out. We usually respond
              within 1–2 working days.
            </p>
          </Reveal>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="card space-y-4 p-6">
            <div className="text-lg font-extrabold">Send a message</div>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="space-y-1 text-sm">
                <div className="font-semibold">Name</div>
                <input className="w-full rounded-xl border bg-bg/40 px-3 py-2" />
              </label>
              <label className="space-y-1 text-sm">
                <div className="font-semibold">Phone</div>
                <input className="w-full rounded-xl border bg-bg/40 px-3 py-2" />
              </label>
            </div>
            <label className="space-y-1 text-sm">
              <div className="font-semibold">Email</div>
              <input className="w-full rounded-xl border bg-bg/40 px-3 py-2" />
            </label>
            <label className="space-y-1 text-sm">
              <div className="font-semibold">Message</div>
              <textarea className="min-h-28 w-full rounded-xl border bg-bg/40 px-3 py-2" />
            </label>
            <button type="button" className="btn-primary w-full">
              Send (placeholder)
            </button>
            <div className="text-xs text-fg/60">This is a UI-only form for now.</div>
          </div>

          <div className="card p-6">
            <div className="text-lg font-extrabold">Details</div>
            <div className="mt-4 space-y-3 text-sm text-fg/75">
              <div className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" /> City, Maharashtra, India
              </div>
              <div className="flex gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-primary" />
                <a className="link" href="mailto:hello@patsantha.org">
                  hello@patsantha.org
                </a>
              </div>
              <div className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-primary" />
                <a className="link" href="tel:+919999999999">
                  +91 99999 99999
                </a>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border bg-bg/40 p-6 text-sm text-fg/70">
              Map embed placeholder. (I can add a real Google Maps iframe once you share
              the address.)
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  )
}

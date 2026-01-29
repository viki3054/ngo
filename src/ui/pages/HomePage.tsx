import { ArrowRight, Leaf, School, ShieldPlus, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageShell } from '../components/PageShell'
import { Reveal } from '../components/Reveal'

export function HomePage() {
  return (
    <PageShell>
      <section className="grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border bg-card/60 px-4 py-2 text-xs font-semibold text-fg/80">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Community programs • Transparency • Real impact
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="text-balance text-4xl font-black tracking-tight sm:text-5xl">
              Patsantha — small steps, big change.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="max-w-xl text-pretty text-base text-fg/75 sm:text-lg">
              We work with communities across Maharashtra to support education, health,
              and livelihood opportunities—so every family can move forward with dignity.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="flex flex-wrap gap-3">
              <Link to="/donate" className="btn-primary">
                Support our work <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/volunteer" className="btn-ghost">
                Volunteer
              </Link>
              <Link to="/gallery" className="btn-ghost">
                View gallery
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="card relative overflow-hidden p-6">
          <div className="absolute inset-0 bg-[linear-gradient(110deg,hsl(var(--primary)/0.18),transparent_35%,hsl(var(--ring)/0.14))]" />
          <div className="relative grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border bg-bg/40 p-4">
              <div className="flex items-center gap-2 font-semibold">
                <School className="h-4 w-4 text-primary" /> Education
              </div>
              <div className="mt-2 text-sm text-fg/70">
                School kits, mentoring, and awareness programs.
              </div>
            </div>
            <div className="rounded-2xl border bg-bg/40 p-4">
              <div className="flex items-center gap-2 font-semibold">
                <ShieldPlus className="h-4 w-4 text-primary" /> Health
              </div>
              <div className="mt-2 text-sm text-fg/70">
                Checkups, hygiene drives, and medical support.
              </div>
            </div>
            <div className="rounded-2xl border bg-bg/40 p-4">
              <div className="flex items-center gap-2 font-semibold">
                <Users className="h-4 w-4 text-primary" /> Livelihood
              </div>
              <div className="mt-2 text-sm text-fg/70">
                Skill training and self-help group support.
              </div>
            </div>
            <div className="rounded-2xl border bg-bg/40 p-4">
              <div className="flex items-center gap-2 font-semibold">
                <Leaf className="h-4 w-4 text-primary" /> Environment
              </div>
              <div className="mt-2 text-sm text-fg/70">
                Clean-up drives and plantation initiatives.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-3">
        {[{
          title: 'Transparent support',
          desc: 'Clear updates on where help goes and what it changes.',
        },
        {
          title: 'Local partnerships',
          desc: 'Working with teachers, clinics, and community leaders.',
        },
        {
          title: 'Long-term impact',
          desc: 'Programs designed to build skills and resilience.',
        }].map((c, i) => (
          <Reveal key={c.title} delay={0.04 * i}>
            <div className="card p-6">
              <div className="text-lg font-extrabold">{c.title}</div>
              <div className="mt-2 text-sm text-fg/70">{c.desc}</div>
            </div>
          </Reveal>
        ))}
      </section>
    </PageShell>
  )
}

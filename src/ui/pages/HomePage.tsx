import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Leaf, School, ShieldPlus, Sparkles, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageShell } from '../components/PageShell'
import { Reveal } from '../components/Reveal'
import { Marquee } from '../components/Marquee'
import { StatsStrip } from '../components/StatsStrip'
import { TestimonialCarousel } from '../components/TestimonialCarousel'

export function HomePage() {
  const reduceMotion = useReducedMotion()

  return (
    <PageShell>
      <section className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2">
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
              Education, health, livelihood, and environment—delivered with local partners.
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

        <div className="card relative overflow-hidden p-5 sm:p-6">
          <div className="absolute inset-0 bg-[linear-gradient(110deg,hsl(var(--primary)/0.20),transparent_35%,hsl(var(--ring)/0.16))]" />
          <motion.div
            aria-hidden
            className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-primary/20 blur-2xl"
            animate={reduceMotion ? {} : { y: [0, -10, 0], x: [0, -8, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden
            className="absolute -bottom-10 -left-10 h-52 w-52 rounded-full bg-[hsl(var(--ring)/0.16)] blur-2xl"
            animate={reduceMotion ? {} : { y: [0, 10, 0], x: [0, 10, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
          />
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
            <div className="col-span-full rounded-2xl border bg-bg/40 p-4">
              <div className="flex items-center gap-2 text-sm font-extrabold">
                <Sparkles className="h-4 w-4 text-primary" /> Next drive
              </div>
              <div className="mt-1 text-sm text-fg/75">
                Community awareness session + distribution (placeholder)
              </div>
              <div className="mt-3 flex gap-3">
                <Link to="/volunteer" className="btn-primary">
                  Join
                </Link>
                <Link to="/contact" className="btn-ghost">
                  Partner with us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 sm:mt-14">
        <Reveal>
          <div className="mb-4 text-sm font-extrabold text-fg/80">Impact at a glance</div>
        </Reveal>
        <Reveal delay={0.06}>
          <StatsStrip />
        </Reveal>
      </section>

      <section className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-2">
        <Reveal>
          <TestimonialCarousel />
        </Reveal>
        <Reveal delay={0.06}>
          <div className="card p-6">
            <div className="text-lg font-extrabold">Supported by partners</div>
            <div className="mt-4">
              <Marquee>
                {['Schools', 'Clinics', 'Local leaders', 'Volunteers', 'Donors', 'Communities'].map((x) => (
                  <div
                    key={x}
                    className="rounded-full border bg-bg/40 px-4 py-2 text-sm font-semibold text-fg/75"
                  >
                    {x}
                  </div>
                ))}
              </Marquee>
            </div>
            <div className="mt-4 text-sm text-fg/70">
              We collaborate to keep programs practical, respectful, and measurable.
            </div>
          </div>
        </Reveal>
      </section>
    </PageShell>
  )
}

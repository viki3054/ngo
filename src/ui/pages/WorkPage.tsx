import { GraduationCap, HandHeart, Stethoscope, TreePine } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageShell } from '../components/PageShell'
import { Reveal } from '../components/Reveal'

const programs = [
  {
    title: 'Education support',
    desc: 'School kits, mentoring, scholarship guidance, and digital awareness.',
    Icon: GraduationCap,
  },
  {
    title: 'Health & hygiene',
    desc: 'Health checkups, menstrual hygiene sessions, and nutrition awareness.',
    Icon: Stethoscope,
  },
  {
    title: 'Livelihood & skills',
    desc: 'Skill training and support for self-help groups and small businesses.',
    Icon: HandHeart,
  },
  {
    title: 'Environment drives',
    desc: 'Clean-up and plantation initiatives with local participation.',
    Icon: TreePine,
  },
]

export function WorkPage() {
  return (
    <PageShell>
      <section className="card p-5 sm:p-8">
        <Reveal>
          <h1 className="text-3xl font-black tracking-tight">Our Work</h1>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-3 max-w-3xl text-fg/75">
            These are the key areas where Patsantha focuses efforts. Want to help? You
            can volunteer time or support a specific program.
          </p>
        </Reveal>
      </section>

      <section className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2">
        {programs.map((p, i) => (
          <Reveal key={p.title} delay={0.04 * i}>
            <div className="card group p-5 sm:p-6 transition hover:-translate-y-0.5 hover:shadow-soft">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <p.Icon className="h-5 w-5" />
                </span>
                <div className="text-lg font-extrabold">{p.title}</div>
              </div>
              <div className="mt-3 text-sm text-fg/70">{p.desc}</div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link to="/donate" className="btn-primary w-full sm:w-auto">
                  Donate
                </Link>
                <Link to="/volunteer" className="btn-ghost w-full sm:w-auto">
                  Volunteer
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </PageShell>
  )
}

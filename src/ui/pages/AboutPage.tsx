import { PageShell } from '../components/PageShell'
import { Reveal } from '../components/Reveal'

export function AboutPage() {
  return (
    <PageShell>
      <div className="space-y-8 sm:space-y-10">
        <section className="card p-5 sm:p-8">
          <Reveal>
            <h1 className="text-3xl font-black tracking-tight">About Patsantha</h1>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-3 max-w-3xl text-fg/75">
              Patsantha is a community-focused NGO working on education access, health
              awareness, and livelihood support. We partner with local leaders to ensure
              programs fit real needs and create lasting outcomes.
            </p>
          </Reveal>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'Mission',
              desc: 'Enable dignified growth through education, health, and skills.',
            },
            {
              title: 'Vision',
              desc: 'Stronger communities where every family can thrive.',
            },
            {
              title: 'Values',
              desc: 'Respect, transparency, inclusion, and measurable impact.',
            },
          ].map((x, i) => (
            <Reveal key={x.title} delay={0.04 * i}>
              <div className="card p-6">
                <div className="text-lg font-extrabold">{x.title}</div>
                <div className="mt-2 text-sm text-fg/70">{x.desc}</div>
              </div>
            </Reveal>
          ))}
        </section>

        <section className="card p-5 sm:p-8">
          <Reveal>
            <h2 className="text-2xl font-black tracking-tight">How we work</h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: 'Listen first',
                desc: 'We start with community conversations and on-ground visits.',
              },
              {
                title: 'Act with partners',
                desc: 'We collaborate with schools, clinics, and local groups.',
              },
              {
                title: 'Measure progress',
                desc: 'We track outcomes and share updates with supporters.',
              },
              {
                title: 'Improve continuously',
                desc: 'We iterate programs based on feedback and results.',
              },
            ].map((x, i) => (
              <Reveal key={x.title} delay={0.03 * i}>
                <div className="rounded-2xl border bg-bg/40 p-5">
                  <div className="font-extrabold">{x.title}</div>
                  <div className="mt-2 text-sm text-fg/70">{x.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  )
}

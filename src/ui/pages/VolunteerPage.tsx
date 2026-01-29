import { PageShell } from '../components/PageShell'
import { Reveal } from '../components/Reveal'

export function VolunteerPage() {
  return (
    <PageShell>
      <div className="space-y-10">
        <section className="card p-8">
          <Reveal>
            <h1 className="text-3xl font-black tracking-tight">Volunteer with us</h1>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-3 max-w-3xl text-fg/75">
              Contribute your time and skills—teaching support, event coordination,
              design, fundraising, field work, and more.
            </p>
          </Reveal>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="card p-6">
            <div className="text-lg font-extrabold">How it works</div>
            <ol className="mt-4 space-y-3 text-sm text-fg/75">
              <li>1) Share your interests and availability.</li>
              <li>2) We match you to a program or upcoming drive.</li>
              <li>3) Quick onboarding + join your first activity.</li>
            </ol>
          </div>

          <form className="card space-y-4 p-6">
            <div className="text-lg font-extrabold">Volunteer form</div>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="space-y-1 text-sm">
                <div className="font-semibold">Full name</div>
                <input
                  className="w-full rounded-xl border bg-bg/40 px-3 py-2"
                  placeholder="Your name"
                />
              </label>
              <label className="space-y-1 text-sm">
                <div className="font-semibold">Phone</div>
                <input
                  className="w-full rounded-xl border bg-bg/40 px-3 py-2"
                  placeholder="+91 ..."
                />
              </label>
            </div>
            <label className="space-y-1 text-sm">
              <div className="font-semibold">Email</div>
              <input
                className="w-full rounded-xl border bg-bg/40 px-3 py-2"
                placeholder="you@example.com"
              />
            </label>
            <label className="space-y-1 text-sm">
              <div className="font-semibold">How would you like to help?</div>
              <textarea
                className="min-h-28 w-full rounded-xl border bg-bg/40 px-3 py-2"
                placeholder="Teaching, coordination, design, field work..."
              />
            </label>
            <button type="button" className="btn-primary w-full">
              Submit (placeholder)
            </button>
            <div className="text-xs text-fg/60">
              This demo form doesn’t submit yet. I can connect it to email/Google Forms.
            </div>
          </form>
        </section>
      </div>
    </PageShell>
  )
}

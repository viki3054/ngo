import { QrCode, ShieldCheck } from 'lucide-react'
import { PageShell } from '../components/PageShell'
import { Reveal } from '../components/Reveal'

export function DonatePage() {
  return (
    <PageShell>
      <div className="space-y-8 sm:space-y-10">
        <section className="card p-5 sm:p-8">
          <Reveal>
            <h1 className="text-3xl font-black tracking-tight">Donate</h1>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-3 max-w-3xl text-fg/75">
              Your support helps fund education kits, health drives, and community
              programs. Replace the placeholders below with your real UPI/Bank details.
            </p>
          </Reveal>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="card p-5 sm:p-6">
            <div className="flex items-center gap-2 text-lg font-extrabold">
              <QrCode className="h-5 w-5 text-primary" /> UPI (recommended)
            </div>
            <div className="mt-3 text-sm text-fg/70">
              UPI ID: <span className="font-semibold">patsantha@upi</span>
            </div>
            <div className="mt-4 rounded-2xl border bg-bg/40 p-5 sm:p-6 text-sm text-fg/70">
              Add QR image here (optional). For now this is a placeholder.
            </div>
          </div>

          <div className="card p-5 sm:p-6">
            <div className="flex items-center gap-2 text-lg font-extrabold">
              <ShieldCheck className="h-5 w-5 text-primary" /> Bank transfer
            </div>
            <div className="mt-3 grid gap-2 text-sm text-fg/70">
              <div>
                Account name: <span className="font-semibold">Patsantha NGO</span>
              </div>
              <div>
                Account no: <span className="font-semibold">0000000000</span>
              </div>
              <div>
                IFSC: <span className="font-semibold">XXXX000000</span>
              </div>
              <div>
                Bank: <span className="font-semibold">Your Bank</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  )
}

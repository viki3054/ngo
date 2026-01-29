import { Link } from 'react-router-dom'
import { PageShell } from '../components/PageShell'

export function NotFoundPage() {
  return (
    <PageShell>
      <div className="card mx-auto max-w-2xl p-10 text-center">
        <div className="text-4xl font-black tracking-tight">404</div>
        <div className="mt-2 text-fg/70">That page doesn’t exist.</div>
        <div className="mt-6 flex justify-center gap-3">
          <Link to="/" className="btn-primary">
            Go home
          </Link>
          <Link to="/contact" className="btn-ghost">
            Contact us
          </Link>
        </div>
      </div>
    </PageShell>
  )
}

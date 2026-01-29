import { HeartHandshake } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t bg-card/30">
      <div className="container-pad grid gap-10 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-extrabold tracking-tight">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-primary text-primaryFg shadow-soft">
              <HeartHandshake className="h-5 w-5" />
            </span>
            <span>Patsantha NGO</span>
          </div>
          <p className="max-w-sm text-sm text-fg/70">
            Community-first work across education, health, and livelihood support.
            Built with care and transparency.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="space-y-2">
            <div className="font-semibold">Explore</div>
            <div className="space-y-1 text-fg/75">
              <Link className="block link" to="/about">
                About
              </Link>
              <Link className="block link" to="/work">
                Our Work
              </Link>
              <Link className="block link" to="/gallery">
                Gallery
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <div className="font-semibold">Get involved</div>
            <div className="space-y-1 text-fg/75">
              <Link className="block link" to="/volunteer">
                Volunteer
              </Link>
              <Link className="block link" to="/donate">
                Donate
              </Link>
              <Link className="block link" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="font-semibold">Contact</div>
          <div className="space-y-1 text-fg/75">
            <div>City, Maharashtra, India</div>
            <a className="block link" href="mailto:hello@patsantha.org">
              hello@patsantha.org
            </a>
            <a className="block link" href="tel:+919999999999">
              +91 99999 99999
            </a>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container-pad flex flex-col gap-2 py-6 text-xs text-fg/65 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Patsantha NGO. All rights reserved.</div>
          <div className="text-fg/55">Made for impact • Dark/Light mode supported</div>
        </div>
      </div>
    </footer>
  )
}

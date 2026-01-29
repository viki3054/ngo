import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { HeartHandshake, Menu, Moon, Sun, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { cn } from '../../lib/cn'
import { useTheme } from '../../theme/ThemeProvider'

const nav = [
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Our Work' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/volunteer', label: 'Volunteer' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const reduceMotion = useReducedMotion()

  const navLinkClass = useMemo(
    () =>
      ({ isActive }: { isActive: boolean }) =>
        cn(
          'rounded-lg px-3 py-2 text-sm font-semibold transition',
          'hover:bg-muted',
          isActive && 'bg-muted',
        ),
    [],
  )

  return (
    <header className="sticky top-0 z-50 border-b bg-bg/70 backdrop-blur">
      <div className="container-pad flex h-14 items-center justify-between sm:h-16">
        <Link to="/" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-primary text-primaryFg shadow-soft">
            <HeartHandshake className="h-5 w-5" />
          </span>
          <span className="hidden sm:block">Patsantha NGO</span>
          <span className="sm:hidden">Patsantha</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/donate" className="btn-primary hidden sm:inline-flex">
            Donate
          </Link>

          <button
            type="button"
            onClick={toggleTheme}
            className="btn-ghost"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            type="button"
            className="btn-ghost md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={reduceMotion ? { height: 'auto' } : { height: 'auto', opacity: 1 }}
            exit={reduceMotion ? { height: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t bg-bg/90 backdrop-blur md:hidden"
          >
            <div className="container-pad flex flex-col gap-1 py-3">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={navLinkClass}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/donate"
                className="btn-primary mt-2"
                onClick={() => setOpen(false)}
              >
                Donate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

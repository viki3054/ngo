import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

type Testimonial = {
  quote: string
  name: string
  role: string
}

export function TestimonialCarousel() {
  const reduceMotion = useReducedMotion()
  const items = useMemo<Testimonial[]>(
    () => [
      {
        quote: 'Patsantha’s work reached our school quickly and respectfully.',
        name: 'Community Teacher',
        role: 'Education partner',
      },
      {
        quote: 'The health awareness session helped families take preventive steps.',
        name: 'Local Nurse',
        role: 'Health camp volunteer',
      },
      {
        quote: 'Volunteering here felt organized and meaningful.',
        name: 'Volunteer',
        role: 'Program support',
      },
    ],
    [],
  )

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % items.length)
    }, 4500)
    return () => window.clearInterval(id)
  }, [items.length])

  const active = items[index]

  return (
    <div className="card overflow-hidden">
      <div className="flex items-center justify-between border-b bg-bg/40 px-6 py-4">
        <div className="flex items-center gap-2 font-extrabold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Quote className="h-4 w-4" />
          </span>
          Voices from the community
        </div>
        <div className="flex gap-1">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={
                'h-2.5 w-2.5 rounded-full transition ' +
                (i === index ? 'bg-primary' : 'bg-border hover:bg-fg/20')
              }
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="px-6 py-7">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="text-pretty text-lg font-semibold text-fg/85">“{active.quote}”</div>
            <div className="mt-4 text-sm font-extrabold">{active.name}</div>
            <div className="text-xs text-fg/60">{active.role}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

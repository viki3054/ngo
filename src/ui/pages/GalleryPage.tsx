import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { cn } from '../../lib/cn'
import { galleryItems } from '../sample-data/gallery'
import { PageShell } from '../components/PageShell'
import { Reveal } from '../components/Reveal'

type Category = 'All' | (typeof galleryItems)[number]['category']

export function GalleryPage() {
  const [category, setCategory] = useState<Category>('All')
  const [activeId, setActiveId] = useState<string | null>(null)
  const reduceMotion = useReducedMotion()

  const categories = useMemo(() => {
    const set = new Set(galleryItems.map((g) => g.category))
    return ['All', ...Array.from(set)] as Category[]
  }, [])

  const filtered = useMemo(() => {
    if (category === 'All') return galleryItems
    return galleryItems.filter((g) => g.category === category)
  }, [category])

  const active = useMemo(() => filtered.find((x) => x.id === activeId) ?? null, [activeId, filtered])

  return (
    <PageShell>
      <section className="card p-8">
        <Reveal>
          <h1 className="text-3xl font-black tracking-tight">Photo Gallery</h1>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-3 max-w-3xl text-fg/75">
            A quick glimpse of the work Patsantha has done. Replace these placeholder
            photos with real images anytime.
          </p>
        </Reveal>
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => {
                setCategory(c)
                setActiveId(null)
              }}
              className={cn(
                'btn-ghost rounded-full px-4',
                category === c && 'bg-primary text-primaryFg hover:bg-primary/90',
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((g, i) => (
          <Reveal key={g.id} delay={0.02 * i}>
            <button
              type="button"
              onClick={() => setActiveId(g.id)}
              className="card group overflow-hidden text-left"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={g.src}
                  alt={g.alt}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,hsl(var(--bg)/0.85),transparent_60%)] opacity-0 transition group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition group-hover:opacity-100">
                  <div className="text-sm font-extrabold">{g.title}</div>
                  <div className="text-xs text-fg/70">{g.category}</div>
                </div>
              </div>
            </button>
          </Reveal>
        ))}
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveId(null)}
          >
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="card w-full max-w-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b bg-bg/60 px-4 py-3">
                <div>
                  <div className="text-sm font-extrabold">{active.title}</div>
                  <div className="text-xs text-fg/65">{active.category}</div>
                </div>
                <button type="button" className="btn-ghost" onClick={() => setActiveId(null)}>
                  <X className="h-4 w-4" />
                </button>
              </div>
              <img src={active.src} alt={active.alt} className="max-h-[70vh] w-full object-contain" />
              {active.description ? (
                <div className="p-4 text-sm text-fg/75">{active.description}</div>
              ) : null}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageShell>
  )
}

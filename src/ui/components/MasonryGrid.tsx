import { motion, useReducedMotion } from 'framer-motion'

export type MasonryItem = {
  id: string
  src: string
  alt: string
  title?: string
  subtitle?: string
}

export function MasonryGrid({
  items,
  onOpen,
}: {
  items: MasonryItem[]
  onOpen: (id: string) => void
}) {
  const reduceMotion = useReducedMotion()

  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {items.map((item, i) => (
        <motion.button
          key={item.id}
          type="button"
          onClick={() => onOpen(item.id)}
          className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border bg-bg/40 text-left shadow-soft/30 transition hover:-translate-y-0.5 hover:shadow-soft"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.35, delay: Math.min(0.18, i * 0.015) }}
        >
          <div className="relative">
            <img
              src={item.src}
              alt={item.alt}
              className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.01]"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,hsl(var(--bg)/0.9),transparent_60%)] opacity-0 transition group-hover:opacity-100" />
            {(item.title || item.subtitle) && (
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 opacity-0 transition group-hover:opacity-100">
                {item.title ? <div className="text-sm font-extrabold">{item.title}</div> : null}
                {item.subtitle ? <div className="text-xs text-fg/70">{item.subtitle}</div> : null}
              </div>
            )}
          </div>
        </motion.button>
      ))}
    </div>
  )
}

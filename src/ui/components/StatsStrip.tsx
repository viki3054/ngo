import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'framer-motion'
import { useEffect, useMemo, useRef } from 'react'

function Stat({ label, value, suffix }: { label: string; value: number; suffix?: string }) {
  const reduceMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (latest) => Math.round(latest))

  useEffect(() => {
    if (!inView) return
    if (reduceMotion) {
      motionValue.set(value)
      return
    }
    const controls = animate(motionValue, value, { duration: 1.2, ease: 'easeOut' })
    return () => controls.stop()
  }, [inView, motionValue, reduceMotion, value])

  const formatted = useTransform(rounded, (latest) => latest.toLocaleString('en-IN'))

  return (
    <div ref={ref} className="rounded-2xl border bg-bg/35 p-5">
      <div className="text-xs font-semibold text-fg/60">{label}</div>
      <div className="mt-2 flex items-baseline gap-1">
        <motion.div className="text-3xl font-black tracking-tight">{formatted}</motion.div>
        {suffix ? <div className="text-sm font-bold text-fg/70">{suffix}</div> : null}
      </div>
    </div>
  )
}

export function StatsStrip() {
  const stats = useMemo(
    () => [
      { label: 'Drives conducted', value: 48, suffix: '+' },
      { label: 'Families supported', value: 1250, suffix: '+' },
      { label: 'Volunteers', value: 180, suffix: '+' },
      { label: 'Communities reached', value: 22 },
    ],
    [],
  )

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <Stat key={s.label} label={s.label} value={s.value} suffix={s.suffix} />
      ))}
    </div>
  )
}

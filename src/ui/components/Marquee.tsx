import type { PropsWithChildren } from 'react'

export function Marquee({ children }: PropsWithChildren) {
  return (
    <div className="relative overflow-hidden rounded-2xl border bg-card/40">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--bg)),transparent_12%,transparent_88%,hsl(var(--bg)))]" />
      <div className="flex">
        <div className="flex min-w-full items-center gap-6 px-4 py-3 sm:px-6 sm:py-4 animate-marquee">{children}</div>
        <div className="flex min-w-full items-center gap-6 px-4 py-3 sm:px-6 sm:py-4 animate-marquee">{children}</div>
      </div>
    </div>
  )
}

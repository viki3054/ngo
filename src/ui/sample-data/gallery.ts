export type GalleryCategory = 'Education' | 'Health' | 'Livelihood' | 'Environment'

export type GalleryItem = {
  id: string
  title: string
  category: GalleryCategory
  src: string
  alt: string
  description?: string
  width: number
  height: number
  album: string
}

export const albums = [
  { id: 'education', title: 'Education', coverSrc: '/gallery/01.svg' },
  { id: 'health', title: 'Health', coverSrc: '/gallery/02.svg' },
  { id: 'livelihood', title: 'Livelihood', coverSrc: '/gallery/03.svg' },
  { id: 'environment', title: 'Environment', coverSrc: '/gallery/04.svg' },
] as const

const base = [
  { src: '/gallery/01.svg', category: 'Education', album: 'education' },
  { src: '/gallery/02.svg', category: 'Health', album: 'health' },
  { src: '/gallery/03.svg', category: 'Livelihood', album: 'livelihood' },
  { src: '/gallery/04.svg', category: 'Environment', album: 'environment' },
  { src: '/gallery/05.svg', category: 'Education', album: 'education' },
  { src: '/gallery/06.svg', category: 'Health', album: 'health' },
  { src: '/gallery/07.svg', category: 'Livelihood', album: 'livelihood' },
  { src: '/gallery/08.svg', category: 'Environment', album: 'environment' },
] as const

// Demo structure for 50+ photos. Replace `src` values with real images in /public/gallery.
export const galleryItems: GalleryItem[] = Array.from({ length: 60 }).map((_, i) => {
  const b = base[i % base.length]
  const n = i + 1

  const variants = [
    { w: 1200, h: 900 },
    { w: 1200, h: 800 },
    { w: 1200, h: 1000 },
    { w: 1200, h: 760 },
  ]
  const v = variants[i % variants.length]

  return {
    id: `g${n}`,
    title: `Activity photo ${n}`,
    category: b.category,
    album: b.album,
    src: b.src,
    alt: `${b.category} activity photo ${n}`,
    description: 'Replace this placeholder with the real event caption.',
    width: v.w,
    height: v.h,
  }
})


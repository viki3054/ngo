import { useMemo, useState } from 'react'
import PhotoAlbum, { type Photo } from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { Search, SlidersHorizontal } from 'lucide-react'
import { cn } from '../../lib/cn'
import { albums, galleryItems, type GalleryCategory } from '../sample-data/gallery'
import { PageShell } from '../components/PageShell'
import { Reveal } from '../components/Reveal'

type AlbumId = 'all' | (typeof albums)[number]['id']
type Layout = 'masonry' | 'rows'

export function GalleryPage() {
  const [album, setAlbum] = useState<AlbumId>('all')
  const [query, setQuery] = useState('')
  const [layout, setLayout] = useState<Layout>('masonry')
  const [visibleCount, setVisibleCount] = useState(24)
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return galleryItems.filter((g) => {
      const inAlbum = album === 'all' ? true : g.album === album
      const inQuery = q.length === 0 ? true : `${g.title} ${g.category}`.toLowerCase().includes(q)
      return inAlbum && inQuery
    })
  }, [album, query])

  const visible = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount])

  const photos = useMemo<Photo[]>(
    () =>
      visible.map((g) => ({
        src: g.src,
        width: g.width,
        height: g.height,
        alt: g.alt,
        key: g.id,
      })),
    [visible],
  )

  const slides = useMemo(
    () =>
      filtered.map((g) => ({
        src: g.src,
        alt: g.alt,
        title: g.title,
        description: g.description,
      })),
    [filtered],
  )

  const categories = useMemo(() => {
    const set = new Set<GalleryCategory>(galleryItems.map((g) => g.category))
    return Array.from(set)
  }, [])

  return (
    <PageShell>
      <section className="card p-8">
        <Reveal>
          <h1 className="text-3xl font-black tracking-tight">Photo Gallery</h1>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-3 max-w-3xl text-fg/75">
            Browse albums and open photos in a slideshow. This layout is built for 50+ images.
          </p>
        </Reveal>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-fg/50" />
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setVisibleCount(24)
                }}
                placeholder="Search (education, health, ... )"
                className="w-full rounded-2xl border bg-bg/40 py-3 pl-10 pr-3 text-sm"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-2xl border bg-bg/40 px-3 py-3 text-sm font-semibold text-fg/75">
              <SlidersHorizontal className="h-4 w-4" />
              Layout
            </span>
            <button
              type="button"
              onClick={() => setLayout('masonry')}
              className={cn('btn-ghost rounded-2xl', layout === 'masonry' && 'bg-muted')}
            >
              Masonry
            </button>
            <button
              type="button"
              onClick={() => setLayout('rows')}
              className={cn('btn-ghost rounded-2xl', layout === 'rows' && 'bg-muted')}
            >
              Rows
            </button>
          </div>
        </div>

        <div className="mt-5 text-xs text-fg/60">Categories: {categories.join(' • ')}</div>
      </section>

      <section className="mt-10">
        <Reveal>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="card overflow-hidden md:col-span-3">
              <div className="flex items-center justify-between border-b bg-bg/40 px-5 py-4">
                <div>
                  <div className="text-sm font-extrabold">Albums</div>
                  <div className="text-xs text-fg/60">Pick a collection</div>
                </div>
                <div className="text-xs font-semibold text-fg/60">{filtered.length} photos</div>
              </div>

              <div className="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-4">
                <button
                  type="button"
                  onClick={() => {
                    setAlbum('all')
                    setVisibleCount(24)
                  }}
                  className={cn(
                    'group relative overflow-hidden rounded-2xl border bg-bg/40 text-left transition hover:-translate-y-0.5 hover:shadow-soft',
                    album === 'all' && 'ring-2 ring-ring',
                  )}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src="/gallery/01.svg" alt="All" className="h-full w-full object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="text-sm font-extrabold">All photos</div>
                    <div className="text-xs text-fg/60">Everything in one place</div>
                  </div>
                </button>

                {albums.map((a) => (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => {
                      setAlbum(a.id)
                      setVisibleCount(24)
                    }}
                    className={cn(
                      'group relative overflow-hidden rounded-2xl border bg-bg/40 text-left transition hover:-translate-y-0.5 hover:shadow-soft',
                      album === a.id && 'ring-2 ring-ring',
                    )}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={a.coverSrc} alt={a.title} className="h-full w-full object-cover" />
                    </div>
                    <div className="p-4">
                      <div className="text-sm font-extrabold">{a.title}</div>
                      <div className="text-xs text-fg/60">Open album</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="card p-5">
              <div className="text-sm font-extrabold">Tips</div>
              <ul className="mt-3 space-y-2 text-sm text-fg/70">
                <li>• Click any photo to open slideshow</li>
                <li>• Use search + albums for 50+ photos</li>
                <li>• Replace demo images in public/gallery</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mt-10">
        <Reveal>
          <div className="card p-5">
            <PhotoAlbum
              layout={layout}
              photos={photos}
              spacing={12}
              padding={0}
              targetRowHeight={layout === 'rows' ? 260 : undefined}
              columns={
                layout === 'masonry'
                  ? (containerWidth) => {
                      if (containerWidth < 640) return 1
                      if (containerWidth < 1024) return 2
                      return 3
                    }
                  : undefined
              }
              onClick={({ index }) => setLightboxIndex(index)}
            />

            <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
              <div className="text-sm text-fg/70">
                Showing <span className="font-semibold">{Math.min(visibleCount, filtered.length)}</span> of{' '}
                <span className="font-semibold">{filtered.length}</span>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="btn-ghost"
                  onClick={() => setVisibleCount(24)}
                  disabled={filtered.length <= 24}
                >
                  Reset
                </button>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => setVisibleCount((n) => Math.min(n + 24, filtered.length))}
                  disabled={visibleCount >= filtered.length}
                >
                  Load more
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
      />
    </PageShell>
  )
}


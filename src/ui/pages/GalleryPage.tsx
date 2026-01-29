import { useMemo, useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { ArrowLeft, Images, Search } from 'lucide-react'
import { cn } from '../../lib/cn'
import { albums, galleryItems, type GalleryCategory } from '../sample-data/gallery'
import { PageShell } from '../components/PageShell'
import { Reveal } from '../components/Reveal'
import { MasonryGrid } from '../components/MasonryGrid'

type AlbumId = 'all' | (typeof albums)[number]['id']

type View = 'albums' | 'photos'

export function GalleryPage() {
  const [view, setView] = useState<View>('albums')
  const [album, setAlbum] = useState<AlbumId>('all')
  const [query, setQuery] = useState('')
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

  const albumCounts = useMemo(() => {
    const counts = new Map<string, number>()
    for (const item of galleryItems) counts.set(item.album, (counts.get(item.album) ?? 0) + 1)
    return counts
  }, [])

  const highlights = useMemo(() => galleryItems.slice(0, 9), [])

  const showPhotosSection = view === 'photos' || query.trim().length > 0

  const visibleMasonryItems = useMemo(
    () =>
      visible.map((g) => ({
        id: g.id,
        src: g.src,
        alt: g.alt,
        title: g.title,
        subtitle: g.category,
      })),
    [visible],
  )

  const highlightMasonryItems = useMemo(
    () =>
      highlights.map((g) => ({
        id: g.id,
        src: g.src,
        alt: g.alt,
        title: g.title,
        subtitle: g.category,
      })),
    [highlights],
  )

  function openLightboxById(id: string) {
    const idx = filtered.findIndex((x) => x.id === id)
    if (idx >= 0) setLightboxIndex(idx)
  }

  return (
    <PageShell>
      <section className="card p-5 sm:p-8">
        <Reveal>
          <h1 className="text-3xl font-black tracking-tight">Photo Gallery</h1>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-3 max-w-3xl text-fg/75">
            Album-first gallery (better for 50+ photos). Open an album to view photos as a masonry grid + slideshow.
          </p>
        </Reveal>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xl">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-fg/50" />
            <input
              value={query}
              onChange={(e) => {
                const next = e.target.value
                setQuery(next)
                setVisibleCount(24)
                if (next.trim().length > 0) {
                  setAlbum('all')
                  setView('photos')
                }
              }}
              placeholder="Search photos (education, health, ... )"
              className="w-full rounded-2xl border bg-bg/40 py-3 pl-10 pr-3 text-sm"
            />
          </div>

          {view === 'photos' ? (
            <div className="text-xs font-semibold text-fg/60">Click any photo to open slideshow</div>
          ) : (
            <div className="flex items-center gap-2 text-xs text-fg/60">
              <Images className="h-4 w-4" /> {galleryItems.length} photos • {categories.length} categories
            </div>
          )}
        </div>
      </section>

      {view === 'albums' ? (
        <>
          <section className="mt-8 sm:mt-10">
            <Reveal>
              <div className="grid gap-4 md:grid-cols-4">
                <div className="card overflow-hidden md:col-span-3">
                  <div className="flex items-center justify-between border-b bg-bg/40 px-5 py-4">
                    <div>
                      <div className="text-sm font-extrabold">Albums</div>
                      <div className="text-xs text-fg/60">Choose an album (recommended)</div>
                    </div>
                    <div className="text-xs font-semibold text-fg/60">{galleryItems.length} photos</div>
                  </div>

                  <div className="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-4">
                    {albums.map((a) => (
                      <button
                        key={a.id}
                        type="button"
                        onClick={() => {
                          setAlbum(a.id)
                          setVisibleCount(24)
                          setView('photos')
                        }}
                        className={
                          'group relative overflow-hidden rounded-2xl border bg-bg/40 text-left transition hover:-translate-y-0.5 hover:shadow-soft'
                        }
                      >
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={a.coverSrc}
                            alt={a.title}
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                          />
                        </div>
                        <div className="p-4">
                          <div className="text-sm font-extrabold">{a.title}</div>
                          <div className="mt-1 text-xs text-fg/60">
                            {(albumCounts.get(a.id) ?? 0).toLocaleString('en-IN')} photos
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="card p-5">
                  <div className="text-sm font-extrabold">Highlights</div>
                  <div className="mt-2 text-xs text-fg/60">A few recent photos</div>
                  <div className="mt-4">
                    <MasonryGrid
                      items={highlightMasonryItems}
                      onOpen={(id) => {
                        setAlbum('all')
                        setView('photos')
                        setVisibleCount(24)
                        setQuery('')
                        // Open relative to full filtered list (all)
                        const idx = galleryItems.findIndex((x) => x.id === id)
                        if (idx >= 0) setLightboxIndex(idx)
                      }}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn-primary mt-5 w-full"
                    onClick={() => {
                      setAlbum('all')
                      setVisibleCount(24)
                      setView('photos')
                    }}
                  >
                    View all photos
                  </button>
                </div>
              </div>
            </Reveal>
          </section>
        </>
      ) : null}

      {showPhotosSection ? (
        <section className="mt-8 sm:mt-10">
          <Reveal>
            <div className="card p-5">
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="btn-ghost"
                    onClick={() => {
                      setView('albums')
                      setAlbum('all')
                      setQuery('')
                      setVisibleCount(24)
                    }}
                  >
                    <ArrowLeft className="h-4 w-4" /> Back to albums
                  </button>
                  <div className="text-sm font-extrabold">
                    {query.trim().length > 0
                      ? `Search results`
                      : album === 'all'
                        ? 'All photos'
                        : `Album: ${albums.find((a) => a.id === album)?.title ?? album}`}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {albums.map((a) => (
                    <button
                      key={a.id}
                      type="button"
                      className={cn(
                        'btn-ghost rounded-full px-4',
                        album === a.id && query.trim().length === 0 && 'bg-muted',
                      )}
                      onClick={() => {
                        setAlbum(a.id)
                        setQuery('')
                        setVisibleCount(24)
                      }}
                      title={`Open ${a.title}`}
                    >
                      {a.title}
                    </button>
                  ))}
                </div>
              </div>

              <MasonryGrid items={visibleMasonryItems} onOpen={openLightboxById} />

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
      ) : null}

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
      />
    </PageShell>
  )
}


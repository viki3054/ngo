import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from '../ui/Layout'
import { AboutPage } from '../ui/pages/AboutPage'
import { ContactPage } from '../ui/pages/ContactPage'
import { DonatePage } from '../ui/pages/DonatePage'
import { GalleryPage } from '../ui/pages/GalleryPage'
import { HomePage } from '../ui/pages/HomePage'
import { NotFoundPage } from '../ui/pages/NotFoundPage'
import { VolunteerPage } from '../ui/pages/VolunteerPage'
import { WorkPage } from '../ui/pages/WorkPage'

export function AppRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="volunteer" element={<VolunteerPage />} />
          <Route path="donate" element={<DonatePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

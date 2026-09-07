import { useEffect, useState } from 'react'
import AutoResizeIframe from '../components/AutoResizeIframe'
import AboutSection from '../components/AboutSection'

// Exact heights from Stitch screen metadata
const DESKTOP_HEIGHT = '6716px'
const MOBILE_HEIGHT  = '6458px'

export default function Home() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <main>
      <AutoResizeIframe
        src={isMobile ? '/mobile-home.html' : '/desktop-home.html'}
        title="Funngro — Home"
        defaultHeight={isMobile ? MOBILE_HEIGHT : DESKTOP_HEIGHT}
      />
      <AboutSection />
    </main>
  )
}

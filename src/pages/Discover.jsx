import { useEffect, useState } from 'react'
import AutoResizeIframe from '../components/AutoResizeIframe'

// Exact heights from Stitch screen metadata
const DESKTOP_HEIGHT = '6338px'
const MOBILE_HEIGHT  = '5156px'

export default function Discover() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <main>
      <AutoResizeIframe
      src={isMobile ? `${import.meta.env.BASE_URL}mobile-discover.html` : `${import.meta.env.BASE_URL}desktop-discover.html`}
        title="Funngro — Discover Projects"
        defaultHeight={isMobile ? MOBILE_HEIGHT : DESKTOP_HEIGHT}
      />
    </main>
  )
}

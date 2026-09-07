/**
 * AutoResizeIframe
 * Uses a known default height (from Stitch screen dimensions)
 * so the iframe never collapses while Tailwind CDN loads.
 * Attempts auto-grow after load as a bonus.
 */
export default function AutoResizeIframe({ src, title, defaultHeight = '7000px' }) {
  return (
    <div style={{ width: '100%', minHeight: defaultHeight, position: 'relative' }}>
      <iframe
        src={src}
        title={title}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
          background: '#101412',
        }}
        onLoad={(e) => {
          // Try to grow beyond defaultHeight if content is taller
          try {
            const doc = e.target.contentWindow.document
            const h = Math.max(
              doc.body.scrollHeight,
              doc.documentElement.scrollHeight
            )
            if (h > 200) {
              e.target.parentElement.style.minHeight = h + 'px'
              e.target.style.height = h + 'px'
            }
          } catch (_) {}
        }}
        scrolling="no"
        loading="eager"
      />
    </div>
  )
}

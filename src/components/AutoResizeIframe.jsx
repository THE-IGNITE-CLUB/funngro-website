/**
 * AutoResizeIframe
 * Simple, reliable: iframe gets an explicit pixel height equal to
 * the known Stitch screen height — no CSS tricks, no JavaScript timing.
 */
export default function AutoResizeIframe({ src, title, defaultHeight = '7000px' }) {
  return (
    <iframe
      src={src}
      title={title}
      style={{
        display: 'block',
        width: '100%',
        height: defaultHeight,   // explicit px — no 100% tricks
        border: 'none',
        background: '#101412',
        overflow: 'hidden',
      }}
      scrolling="no"
      loading="eager"
    />
  )
}

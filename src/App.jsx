import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import Discover from './pages/Discover'

const pageMeta = {
  '/': {
    title: "Funngro — Earn online with India's biggest brands",
    description: "70 lakh young Indians earn on Funngro by working with India's biggest brands. Brand promotion, content, referrals, sampling — paid in UPI. Free, forever."
  },
  '/discover': {
    title: 'Funngro | Discover Projects & Opportunities — Earn Online',
    description: 'Browse 1,000+ live projects from 5,000+ brands on Funngro. Teens earn real money with UPI payouts. Join 70 lakh young Indian earners today.'
  }
}

function App() {
  const location = useLocation()

  useEffect(() => {
    const meta = pageMeta[location.pathname] || pageMeta['/']
    document.title = meta.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', meta.description)
  }, [location])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/discover" element={<Discover />} />
    </Routes>
  )
}

export default App

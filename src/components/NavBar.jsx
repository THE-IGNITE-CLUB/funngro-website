import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 2rem',
    background: scrolled
      ? 'rgba(8,12,10,0.97)'
      : 'rgba(8,12,10,0.82)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(0,230,118,0.15)',
    transition: 'background 0.3s ease',
  }

  const logoImgStyle = {
    height: '36px',
    width: 'auto',
    objectFit: 'contain',
    display: 'block',
  }

  const linksStyle = {
    display: 'flex',
    gap: '0.25rem',
    alignItems: 'center',
  }

  const getLinkStyle = ({ isActive }) => ({
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontWeight: isActive ? 600 : 400,
    fontSize: '0.875rem',
    padding: '0.375rem 1rem',
    borderRadius: '9999px',
    textDecoration: 'none',
    color: isActive ? '#00E676' : 'rgba(224,227,223,0.7)',
    background: isActive ? 'rgba(0,230,118,0.1)' : 'transparent',
    border: isActive ? '1px solid rgba(0,230,118,0.3)' : '1px solid transparent',
    transition: 'all 0.2s ease',
    letterSpacing: '0.01em',
  })

  return (
    <nav style={navStyle} aria-label="Main navigation">
      {/* Funngro Logo — exact original, no modifications */}
      <NavLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        <img
          src="/LOGO.JPG"
          alt="Funngro — Earn online with India's biggest brands"
          style={logoImgStyle}
        />
      </NavLink>

      <div style={linksStyle}>
        <NavLink to="/" end style={getLinkStyle}>
          Home
        </NavLink>
        <NavLink to="/discover" style={getLinkStyle}>
          Discover
        </NavLink>
      </div>
    </nav>
  )
}

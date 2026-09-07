/* ─────────────────────────────────────────────
   AboutSection.jsx  –  Funngro About Us
   Shark Tank · Founders · Timeline · Testimonials
   Design: Blockbuster Cyber-Emerald dark system
───────────────────────────────────────────── */

import { useState } from 'react'

/* ── Image paths — each "folder.jpg" contains a screen.png ── */
const T = (folder) => `/stitch_funngro_revamp_website/${folder}/screen.png`

/* ── Testimonials data ── */
const testimonials = [
  {
    img: T('image_from_https_www.funngro.com_assets_sayandeep_ccdexwxb.jpg'),
    name: 'Sayandeep',
    quote: 'Funngro gave me the platform to use my skills for real projects. The income is great, but the experience is invaluable.',
  },
  {
    img: T('image_from_https_www.funngro.com_assets_sayyam_mehta_aeedvr_7.jpg'),
    name: 'Sayyam Mehta',
    quote: 'Working with professional clients while still in school gives you an edge nobody else has. Funngro is the launchpad.',
  },
  {
    img: T('image_from_https_www.funngro.com_assets_yashraj_singh_b3l6hm7t.jpg'),
    name: 'Yashraj Singh',
    quote: 'I earned my first ₹10,000 within a month. Funngro turns your free time into real income — instantly via UPI.',
  },
  {
    img: T('image_from_https_www.funngro.com_assets_naitik_mishra_cg3pxfil.jpg'),
    name: 'Naitik Mishra',
    quote: 'The brands are real, the projects are real, and the money hits my UPI in seconds. No other platform comes close.',
  },
  {
    img: T('image_from_https_www.funngro.com_assets_anshika_paapwhhq.jpg'),
    name: 'Anshika',
    quote: 'I was able to fund my own education. Funngro made me financially independent before I turned 18.',
  },
  {
    img: T('image_from_https_www.funngro.com_assets_sarthak_jen2w_kg.jpg'),
    name: 'Sarthak',
    quote: 'Funngro is the only platform that takes young earners seriously. Real tasks, real pay, real brands.',
  },
  {
    img: T('image_from_https_www.funngro.com_assets_ashwani_sirn6cf8.jpg'),
    name: 'Ashwani',
    quote: 'I recommend Funngro to every student I know. The best way to start your earning journey in India.',
  },
  {
    img: T('image_from_https_www.funngro.com_assets_ujjwal_dubey_cjknhre1.jpg'),
    name: 'Ujjwal Dubey',
    quote: 'From zero to earning every week — Funngro made it possible with zero investment and zero risk.',
  },
  {
    img: T('image_from_https_www.funngro.com_assets_swarnim_prateek_dtj_8wo4.jpg'),
    name: 'Swarnim Prateek',
    quote: "The variety of projects is amazing. I've worked with brands I actually use every day — that's surreal.",
  },
  {
    img: T('image_from_https_www.funngro.com_assets_ankush_borana_etwvzpar.jpg'),
    name: 'Ankush Borana',
    quote: 'Funngro helped me earn ₹25,000 while preparing for board exams. The tasks fit perfectly around my schedule.',
  },
]

/* ── Founders data ── */
const founders = [
  {
    tag: 'Founder · CEO',
    name: 'Payal Jain',
    desc: 'IIM Calcutta alumna with two decades across Worldline, Syntel and Capgemini before starting Funngro. Pitched on Shark Tank India Season 2 and closed an investment from Amit Jain and Namita Thapar. Leads vision, product and the Teenlancer engine.',
    linkedin: 'https://www.linkedin.com/in/payal-jain-8780191/',
  },
  {
    tag: 'Co-founder · CFO',
    name: 'Anik Jain',
    desc: 'IIM Calcutta PGDCM. Two decades in BFSI and insurtech across ICICI Lombard, Reliance Life, Marsh, Mahindra and most recently CEO of Symbo. Owns finance, partnerships and the unit economics that took Funngro to its first profitable quarter.',
    linkedin: 'https://www.linkedin.com/in/anik-jain/',
  },
]

/* ── Journey milestones ── */
const milestones = [
  { year: 'FY22',     isGold: false, title: 'Founded.',                       body: 'Two founders. An MVP. Users doubled in the first 30 days. Zero paid marketing.' },
  { year: 'Dec 2022', isGold: true,  title: 'Shark Tank India · Season 2',    body: 'National broadcast. Investment offer from the Sharks — Amit Jain & Namita Thapar. Users doubled again in 30 days.' },
  { year: '2023',     isGold: false, title: 'One million users. Zero ad spend.', body: "Pure referral growth. India's youth found us because the payouts were real." },
  { year: 'Q4 FY25',  isGold: false, title: 'First profitable quarter.',       body: '3M users. Ranked #9 education app in India on Google Play. Turned the corner on unit economics.' },
  { year: 'FY26',     isGold: false, title: 'Scale + profit.',                 body: '70 Lakh+ young Indians earning. 5,000+ brands. 1,000+ live projects. 10 of 12 months profitable.' },
]

/* ═══════════════════════════════════════════
   Sub-components
═══════════════════════════════════════════ */

function Label({ children }) {
  return (
    <p style={{
      fontFamily: "'Hanken Grotesk', sans-serif",
      fontSize: '0.6875rem', fontWeight: 700,
      letterSpacing: '0.12em', textTransform: 'uppercase',
      color: '#00E676', textAlign: 'center', marginBottom: '1rem',
    }}>
      {children}
    </p>
  )
}

function Divider() {
  return (
    <div style={{
      width: '1px', height: '64px',
      background: 'linear-gradient(to bottom, transparent, #00E676, transparent)',
      margin: '0 auto',
    }} />
  )
}

function FounderCard({ tag, name, desc, linkedin }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: 'rgba(13,19,16,0.72)',
        border: `1px solid ${hov ? 'rgba(0,230,118,0.4)' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: '1rem', padding: '2rem',
        backdropFilter: 'blur(16px)',
        boxShadow: hov ? '0 0 32px -8px rgba(0,230,118,0.2)' : 'none',
        transition: 'all 0.25s ease',
        display: 'flex', flexDirection: 'column', gap: '1rem',
      }}
    >
      <span style={{
        fontFamily: "'Hanken Grotesk', sans-serif",
        fontSize: '0.6875rem', fontWeight: 700,
        letterSpacing: '0.12em', textTransform: 'uppercase',
        color: '#00F0FF', background: 'rgba(0,240,255,0.08)',
        border: '1px solid rgba(0,240,255,0.2)',
        borderRadius: '9999px', padding: '0.25rem 0.75rem',
        width: 'fit-content',
      }}>{tag}</span>

      <p style={{
        fontFamily: "'Outfit', sans-serif", fontSize: '1.5rem',
        fontWeight: 700, color: '#e0e3df', letterSpacing: '-0.02em',
      }}>{name}</p>

      <p style={{
        fontFamily: "'Hanken Grotesk', sans-serif",
        fontSize: '0.9375rem', lineHeight: 1.7, color: '#bacbb9', flexGrow: 1,
      }}>{desc}</p>

      <a
        href={linkedin} target="_blank" rel="noopener noreferrer"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontSize: '0.8125rem', fontWeight: 600, color: '#00E676',
          background: 'rgba(0,230,118,0.06)', border: '1px solid rgba(0,230,118,0.3)',
          borderRadius: '9999px', padding: '0.5rem 1.125rem',
          textDecoration: 'none', width: 'fit-content', transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,230,118,0.15)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,230,118,0.06)'}
      >
        LinkedIn ▸
      </a>
    </div>
  )
}

function TestimonialCard({ img, name, quote }) {
  const [hov, setHov] = useState(false)
  const [imgErr, setImgErr] = useState(false)

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: 'rgba(13,19,16,0.72)',
        border: `1px solid ${hov ? 'rgba(0,230,118,0.35)' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: '1rem', padding: '1.5rem',
        backdropFilter: 'blur(16px)',
        transform: hov ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.25s ease',
        display: 'flex', flexDirection: 'column', gap: '1rem',
        minWidth: '260px', maxWidth: '280px', flexShrink: 0,
      }}
    >
      <p style={{
        fontFamily: "'Hanken Grotesk', sans-serif",
        fontSize: '0.9375rem', lineHeight: 1.7,
        color: '#bacbb9', fontStyle: 'italic', flexGrow: 1,
      }}>
        &ldquo;{quote}&rdquo;
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {!imgErr ? (
          <img
            src={img}
            alt={name}
            onError={() => setImgErr(true)}
            style={{
              width: '44px', height: '44px', borderRadius: '50%',
              objectFit: 'cover', border: '2px solid rgba(0,230,118,0.45)',
              flexShrink: 0, background: '#1a2a1e',
            }}
            loading="lazy"
          />
        ) : (
          /* Fallback avatar with initials */
          <div style={{
            width: '44px', height: '44px', borderRadius: '50%',
            background: 'rgba(0,230,118,0.15)', border: '2px solid rgba(0,230,118,0.45)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, fontFamily: "'Outfit', sans-serif",
            fontWeight: 700, fontSize: '1rem', color: '#00E676',
          }}>
            {name[0]}
          </div>
        )}
        <div>
          <p style={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 600,
            fontSize: '0.9375rem', color: '#e0e3df', letterSpacing: '-0.01em',
          }}>{name}</p>
          <p style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: '0.75rem', color: '#00E676', fontWeight: 500,
          }}>Teen Earner · Funngro</p>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   Main export
═══════════════════════════════════════════ */

export default function AboutSection() {
  return (
    <section id="about" aria-label="About Funngro" style={{
      background: '#080C0A',
      padding: '6rem 1.5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(0,230,118,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '5rem' }}>

        {/* ── ABOUT ── */}
        <div>
          <Label>· ABOUT US ·</Label>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800,
            letterSpacing: '-0.03em', color: '#e0e3df',
            textAlign: 'center', lineHeight: 1.15, marginBottom: '1.25rem',
          }}>
            Built so young Indians<br />can earn for real.
          </h2>
          <p style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: '1.0625rem', lineHeight: 1.75, color: '#bacbb9',
            textAlign: 'center', maxWidth: '640px', margin: '0 auto',
          }}>
            Funngro started in 2022 to give young Indians a real way to turn their time online
            into income. Four years on, seventy lakh young Indians have made this their first
            earning platform.
          </p>

          {/* Shark Tank Badge */}
          <div style={{
            margin: '2.5rem auto 0', maxWidth: '580px',
            background: 'rgba(255,208,67,0.06)',
            border: '1px solid rgba(255,208,67,0.45)', borderRadius: '1rem',
            padding: '1.25rem 2rem', textAlign: 'center',
            boxShadow: '0 0 40px -10px rgba(255,208,67,0.25)',
            backdropFilter: 'blur(8px)',
          }}>
            <div style={{ fontSize: '2rem', lineHeight: 1, marginBottom: '0.5rem' }}>🦈</div>
            <p style={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 700,
              fontSize: '1.125rem', color: '#FFD043', letterSpacing: '-0.01em',
              marginBottom: '0.375rem',
            }}>
              As Seen on Shark Tank India Season 2
            </p>
            <p style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: '0.875rem', color: 'rgba(255,208,67,0.75)',
            }}>
              Backed by Sharks{' '}
              <strong style={{ color: '#FFD043' }}>Amit Jain</strong> &amp;{' '}
              <strong style={{ color: '#FFD043' }}>Namita Thapar</strong>
            </p>
          </div>
        </div>

        <Divider />

        {/* ── FOUNDERS ── */}
        <div>
          <Label>· FOUNDED BY ·</Label>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 700,
            letterSpacing: '-0.02em', color: '#e0e3df',
            textAlign: 'center', marginBottom: '2.5rem',
          }}>
            Two operators. Two decades each.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {founders.map(f => <FounderCard key={f.name} {...f} />)}
          </div>
        </div>

        <Divider />

        {/* ── TIMELINE ── */}
        <div>
          <Label>· THE JOURNEY ·</Label>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 700,
            letterSpacing: '-0.02em', color: '#e0e3df',
            textAlign: 'center', marginBottom: '3rem',
          }}>
            Four years. Five inflection points.
          </p>
          <div style={{
            position: 'relative', paddingLeft: '2.5rem',
            maxWidth: '640px', margin: '0 auto',
          }}>
            {/* connector line */}
            <div style={{
              position: 'absolute', left: '7px', top: '8px', bottom: '8px',
              width: '2px',
              background: 'linear-gradient(to bottom, #00E676, rgba(0,230,118,0.1))',
              borderRadius: '2px',
            }} />
            {milestones.map((m, i) => (
              <div key={i} style={{ position: 'relative', paddingBottom: '2.5rem', paddingLeft: '1.25rem' }}>
                {/* dot */}
                <div style={{
                  position: 'absolute', left: '-2.5rem', top: '4px',
                  width: '16px', height: '16px', borderRadius: '50%',
                  background: m.isGold ? '#FFD043' : '#00E676',
                  border: `3px solid ${m.isGold ? 'rgba(255,208,67,0.3)' : 'rgba(0,230,118,0.3)'}`,
                  boxShadow: `0 0 12px 2px ${m.isGold ? 'rgba(255,208,67,0.4)' : 'rgba(0,230,118,0.35)'}`,
                }} />
                <p style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: '0.75rem', fontWeight: 700,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: m.isGold ? '#FFD043' : '#00E676', marginBottom: '0.375rem',
                }}>{m.year}</p>
                <p style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: '1.125rem', fontWeight: 700,
                  color: '#e0e3df', letterSpacing: '-0.01em', marginBottom: '0.375rem',
                }}>{m.title}</p>
                <p style={{
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: '0.9375rem', color: '#bacbb9', lineHeight: 1.65,
                }}>{m.body}</p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── TESTIMONIALS ── */}
        <div>
          <Label>· WHAT THEY SAY ·</Label>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 700,
            letterSpacing: '-0.02em', color: '#e0e3df',
            textAlign: 'center', marginBottom: '0.75rem',
          }}>
            70 Lakh earners. Real stories.
          </p>
          <p style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: '1.0625rem', lineHeight: 1.75, color: '#bacbb9',
            textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.5rem',
          }}>
            From students to side-hustlers — here's what India's young earners say about Funngro.
          </p>

          {/* Draggable horizontal scroll row */}
          <div
            style={{
              display: 'flex', gap: '1rem',
              overflowX: 'auto', paddingBottom: '0.75rem',
              scrollbarWidth: 'none', msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              cursor: 'grab',
            }}
            onMouseDown={e => {
              const el = e.currentTarget
              el.style.cursor = 'grabbing'
              const startX = e.pageX - el.offsetLeft
              const scrollLeft = el.scrollLeft
              const onMove = ev => { el.scrollLeft = scrollLeft - (ev.pageX - el.offsetLeft - startX) }
              const onUp = () => {
                el.style.cursor = 'grab'
                window.removeEventListener('mousemove', onMove)
                window.removeEventListener('mouseup', onUp)
              }
              window.addEventListener('mousemove', onMove)
              window.addEventListener('mouseup', onUp)
            }}
          >
            {testimonials.map(t => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

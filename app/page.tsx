'use client'

import Image from 'next/image'
import { useState } from 'react'

const navItems = [
  { label: 'Why QUAD', href: '#why-quad' },
  { label: 'Memes', href: '#memes' },
  { label: 'Receipts', href: '#receipts' },
  { label: 'Bridge to Canton', href: '#bridge' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="QUAD home">
          <Image className="brand-logo" src="/quad-logo.png" alt="QUAD 10 to the 15th logo" width={48} height={48} priority />
          <span>$QUAD</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((open) => !open)}>
          <span>{menuOpen ? 'Close' : 'Menu'}</span>
          <span className="menu-lines" aria-hidden="true"><i /><i /></span>
        </button>
      </header>
      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} id="mobile-menu" aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<span aria-hidden="true">↗</span></a>)}
        </nav>
      </div>
      <div className="ticker" aria-label="QUAD announcement">
        <div className="ticker-track"><span>THEY KEPT SAYING QUADRILLIONS <b>◆</b> WE MADE IT A TICKER <b>◆</b> ONE QUADRILLION = 10¹⁵ <b>◆</b></span><span aria-hidden="true">THEY KEPT SAYING QUADRILLIONS <b>◆</b> WE MADE IT A TICKER <b>◆</b> ONE QUADRILLION = 10¹⁵ <b>◆</b></span></div>
      </div>
    </>
  )
}

function FloatingNote() {
  return (
    <div className="artwork" aria-label="QUADRILLION novelty banknote">
      <div className="orbit orbit-one" aria-hidden="true" />
      <div className="orbit orbit-two" aria-hidden="true" />
      <div className="note-safe-zone">
        <Image className="banknote" src="/quadrillion-banknote.jpeg" alt="A fictional ten-dollar QUADRILLION novelty banknote" width={1200} height={550} priority />
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <main id="top" className="quad-page">
      <Header />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">COMMUNITY MEME / CANTON NETWORK</p>
          <h1 id="hero-title"><span>QUADRILLION</span><em>AFTER A TRILLION.</em></h1>
          <p className="hero-description">They kept saying quadrillions. We made it a ticker.</p>
          <div className="hero-actions">
            <button className="buy-button" type="button">BUY $QUAD <span aria-hidden="true">↗</span></button>
            <a className="scroll-link" href="#what-is-this">WHAT IS THIS? <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <FloatingNote />
        <div className="hero-index" aria-hidden="true">001 <span /> COMMUNITY ISSUE</div>
      </section>
      <div id="what-is-this" className="anchor-target" aria-hidden="true" />
    </main>
  )
}

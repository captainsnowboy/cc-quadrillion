'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const links = [
  { label: 'Why QUAD', href: '#why-quad' },
  { label: 'Memes', href: '#memes' },
  { label: 'Receipts', href: '#receipts' },
  { label: 'Bridge to Canton', href: '#bridge' },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="QUAD home" onClick={() => setIsOpen(false)}>
            <Image className="brand-mark" src="/quad-logo.png" alt="Gold QUAD 10 to the 15th logo" width={44} height={44} priority />
            <span>$QUAD</span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {links.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
          </nav>
          <button className="menu-button" type="button" aria-expanded={isOpen} aria-controls="mobile-nav" aria-label={isOpen ? 'Close menu' : 'Open menu'} onClick={() => setIsOpen((open) => !open)}>
            {isOpen ? <X size={22} strokeWidth={1.8} /> : <Menu size={22} strokeWidth={1.8} />}
          </button>
        </div>
        {isOpen && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => <a key={link.label} href={link.href} onClick={() => setIsOpen(false)}>{link.label}</a>)}
        </nav>}
      </header>
      <div className="ticker" aria-label="QUAD announcement">
        <div className="ticker-track"><span>THEY KEPT SAYING QUADRILLIONS <b>✳</b> WE MADE IT A TICKER <b>✳</b> ONE QUADRILLION = 10¹⁵ <b>✳</b></span><span aria-hidden="true">THEY KEPT SAYING QUADRILLIONS <b>✳</b> WE MADE IT A TICKER <b>✳</b> ONE QUADRILLION = 10¹⁵ <b>✳</b></span></div>
      </div>
    </>
  )
}

export function HeroArtwork() {
  return <div className="artwork" aria-label="Floating QUADRILLIONS novelty banknote">
    <div className="orbit orbit-one" />
    <div className="orbit orbit-two" />
    <div className="artwork-safe-zone"><Image className="banknote" src="/quadrillion-banknote.jpeg" alt="A fictional QUADRILLIONS novelty banknote" width={900} height={406} priority /></div>
  </div>
}

export function Hero() {
  return <main id="top" className="hero">
    <div className="hero-inner">
      <section className="hero-copy" aria-labelledby="hero-title">
        <p className="eyebrow">COMMUNITY MEME / CANTON NETWORK</p>
        <h1 id="hero-title"><span>QUADRILLIONS</span><em>AFTER A TRILLION.</em></h1>
        <p className="hero-description">They kept saying quadrillions. We made it a ticker.</p>
        <div className="hero-actions"><button className="buy-button" type="button">BUY $QUAD</button><a className="scroll-link" href="#what-is-this">WHAT IS THIS? <span aria-hidden="true">↓</span></a></div>
      </section>
      <HeroArtwork />
    </div>
  </main>
}

export function Page() {
  return <div className="quad-page"><SiteHeader /><Hero /><div id="what-is-this" className="future-anchor" aria-hidden="true" /></div>
}

export default Page

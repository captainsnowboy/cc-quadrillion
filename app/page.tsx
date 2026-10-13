'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

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

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.12 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>{children}</div>
}

function ContentSections() {
  return (
    <div className="content-sections">
      <section id="what-is-this" className="content-section what-section" aria-labelledby="what-title">
        <div className="section-inner">
          <Reveal className="section-kicker">01 / THE BIG NUMBER</Reveal>
          <Reveal className="what-heading-wrap"><h2 id="what-title">WHAT IS<br /><span>QUADRILLION?</span></h2><div className="sticker">10¹⁵<br /><small>THAT&apos;S A LOT</small></div></Reveal>
          <div className="what-grid">
            <Reveal className="feature-card"><p className="card-label">THE SHORT VERSION</p><h3>QUAD IS A<br />COMMUNITY-DRIVEN<br /><em>MEME.</em></h3><p>QUADRILLION is a community-driven meme on Canton.</p></Reveal>
            <Reveal className="what-copy"><p>Canton is building toward a future where massive financial markets can move and settle onchain.</p><p className="pull-quote">They were talking about the market.<br /><strong>We were talking about the ticker.</strong></p></Reveal>
            <Reveal className="mini-card"><span className="mini-mark">Q</span><p>BUILT FOR WHAT&apos;S NEXT.</p></Reveal>
          </div>
        </div>
      </section>
      <section id="why-quad" className="content-section why-section" aria-labelledby="why-title">
        <div className="section-inner">
          <Reveal className="section-kicker">02 / WHY $QUAD</Reveal>
          <div className="why-header"><Reveal><h2 id="why-title">WHY<br /><span>QUAD?</span></h2></Reveal><Reveal className="number-lockup"><span>10</span><sup>15</sup></Reveal></div>
          <div className="why-grid">
            <Reveal className="why-lead"><p>Canton&apos;s goal is to bring traditional finance onchain. Traditional financial markets already settle enormous amounts of value every year, measured in quadrillions.</p></Reveal>
            <Reveal className="why-panel"><p className="card-label">THE INSPIRATION</p><p>Canton repeatedly talks about that scale across interviews, discussions, programming, and promotional material. This is the inspiration behind the meme.</p></Reveal>
            <Reveal className="why-quote"><p>They kept talking about quadrillions.</p><strong>We made it a ticker</strong><span aria-hidden="true">↗</span></Reveal>
          </div>
        </div>
      </section>
    </div>
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
          <p className="hero-description">They kept saying <strong>quadrillions.</strong><br />We made it a ticker.</p>
          <div className="hero-actions">
            <button className="buy-button" type="button">BUY $QUAD <span aria-hidden="true">↗</span></button>
            <a className="scroll-link" href="#what-is-this">WHAT IS THIS? <span className="scroll-arrow" aria-hidden="true">↓</span></a>
          </div>
        </div>
        <FloatingNote />
      </section>
      <ContentSections />
    </main>
  )
}

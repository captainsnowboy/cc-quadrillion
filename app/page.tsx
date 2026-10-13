'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

const navItems = [
  { label: 'Why QUAD', href: '#why-quad' },
  { label: 'Memes', href: '#memes' },
  { label: 'Receipts', href: '#receipts' },
  { label: 'Bridge to Canton', href: '#bridge' },
  { label: 'How to Buy $QUAD', href: '#buy-quad' },
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
      <section id="whats-canton" className="content-section canton-section" aria-labelledby="canton-title">
        <div className="section-inner canton-inner">
          <Reveal className="section-kicker">03 / WHAT&apos;S CANTON?</Reveal>
          <div className="canton-heading"><Reveal><h2 id="canton-title">WHAT&apos;S<br /><span>CANTON?</span></h2></Reveal><Reveal className="canton-stamp">ONCHAIN<br /><small>THE NETWORK</small></Reveal></div>
          <div className="canton-grid">
            <Reveal className="canton-feature"><p className="card-label">THE SIMPLE VERSION</p><h3>A NETWORK<br />BUILT FOR<br /><em>WHAT&apos;S NEXT.</em></h3></Reveal>
            <Reveal className="canton-copy"><p>Canton is building toward a future where massive financial markets can move and settle onchain.</p><p>It&apos;s the infrastructure underneath the conversation about quadrillions — a network designed for real-world financial activity.</p></Reveal>
            <Reveal className="canton-detail"><span className="detail-number">03</span><p>BIG MARKETS.<br />ONE SHARED<br />LEDGER.</p></Reveal>
          </div>
        </div>
      </section>
      <BillSection />
      <BridgeSection />
      <BuyQuadSection />
    </div>
  )
}

function BridgeSection() {
  const steps = [
    ['01', 'CREATE YOUR ONESWAP ACCOUNT', 'Sign up with your email and password, then finish verification. OneSwap creates the platform wallet used by the trading app.', '↗'],
    ['02', 'FUND THE PLATFORM WALLET', 'Use a live CC route’s exact input asset. Copy your Canton party ID or receive QR from OneSwap, then send that asset from its issuer, an exchange, or another Canton wallet.', '→'],
    ['03', 'ACCEPT THE INCOMING TRANSFER', 'Open Offers in OneSwap after the sender submits the transfer. Accept it to add the incoming asset to your spendable balance, or enable auto-accept for future transfers.', '↓'],
    ['04', 'SWAP INTO CC', 'Choose a funded route into CC, review the live quote, price impact, pool fee, and minimum received after slippage, then confirm the swap.', '↗'],
    ['05', 'CHECK YOUR BALANCE', 'After Canton settles the transaction, CC appears in your OneSwap wallet. There is no bridge wait or claim step after a completed swap.', '✓'],
  ]

  return (
    <section id="bridge" className="content-section bridge-section" aria-labelledby="bridge-title">
      <div className="section-inner">
        <Reveal className="section-kicker">05 / GET ASSETS ONTO CANTON</Reveal>
        <div className="bridge-heading"><Reveal><h2 id="bridge-title">BRIDGE<br /><span>TO CANTON.</span></h2></Reveal><Reveal className="bridge-callout">READ THE LIVE<br /><strong>ROUTE FIRST.</strong></Reveal></div>
        <Reveal className="bridge-note">OneSwap’s verified flow is a funded Canton wallet and swap route — not a universal bridge for every chain or token.</Reveal>
        <div className="bridge-steps">{steps.map(([number, title, copy, arrow], index) => <Reveal key={number} className={`bridge-step bridge-step-${index + 1}`}><span className="step-number">{number}</span><div><h3>{title}</h3><p>{copy}</p></div><span className="step-arrow" aria-hidden="true">{arrow}</span></Reveal>)}</div>
        <a className="external-guide" href="https://www.oneswap.cc/buy/cc" target="_blank" rel="noreferrer">OPEN ONESWAP&apos;S CC GUIDE <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  )
}

function BuyQuadSection() {
  return (
    <section id="buy-quad" className="content-section buy-quad-section" aria-labelledby="buy-quad-title">
      <div className="section-inner">
        <Reveal className="section-kicker">06 / THE NEXT MOVE</Reveal>
        <div className="buy-quad-heading"><Reveal><h2 id="buy-quad-title">HOW TO<br /><span>BUY $QUAD.</span></h2></Reveal><Reveal className="coming-stamp">COMING<br /><strong>SOON</strong></Reveal></div>
        <div className="buy-quad-grid"><Reveal className="coming-panel"><span className="panel-number">06</span><p className="panel-label">PURCHASE ROUTE</p><h3>NOT LIVE<br />YET.</h3><p>There is no verified QUAD token identifier or purchase route available in this project yet. We&apos;re not going to invent one.</p></Reveal><Reveal className="buy-quad-copy"><p>Bridging or swapping an asset into Canton does not automatically buy QUAD.</p><p>When a real route exists, this section can hold the verified Token Identifier, the supported steps, and a genuine external link.</p><span className="status-line"><i /> WAIT FOR THE VERIFIED ROUTE</span></Reveal></div>
      </div>
    </section>
  )
}

function BillSection() {
  const [flipped, setFlipped] = useState(false)

  return (
    <section id="quadrillion-bill" className="bill-section content-section" aria-labelledby="bill-title">
      <div className="section-inner bill-inner">
        <Reveal className="section-kicker">04 / THE QUADRILLION BILL</Reveal>
        <div className="bill-heading"><Reveal><h2 id="bill-title">THE<br /><span>QUADRILLION BILL.</span></h2></Reveal><Reveal className="bill-note">NOVELTY /<br />NOT LEGAL TENDER</Reveal></div>
        <div className="bill-layout">
          <Reveal className="bill-copy"><p className="bill-intro">If you&apos;re seeing this, you deserve your own Quadrillion bill.</p><p className="bill-support">A little piece of the big number. Tap the bill to turn it over.</p><button className="print-button" type="button" onClick={() => { const link = document.createElement('a'); link.href = '/quadrillion-banknote.jpeg'; link.download = 'quadrillion-banknote.jpeg'; link.click() }}>PRINT YOUR BILL <span aria-hidden="true">↗</span></button></Reveal>
          <Reveal className={`bill-stage ${flipped ? 'is-flipped' : ''}`}><button className="bill-flip" type="button" aria-label={flipped ? 'Return the Quadrillion bill to its front view' : 'Flip the Quadrillion bill'} onClick={() => setFlipped((value) => !value)}><span className="bill-card"><Image src="/quadrillion-banknote.jpeg" alt="Quadrillion novelty banknote" width={1200} height={550} priority /><span className="bill-back">SINGLE-SIDED<br /><strong>QUADRILLION</strong><small>FLIP VIEW</small></span></span></button><span className="flip-hint">CLICK TO FLIP</span></Reveal>
        </div>
      </div>
    </section>
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

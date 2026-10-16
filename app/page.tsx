'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

const navItems = [
  { label: 'Why QUAD', href: '#why-quad' },
  { label: 'Memes', href: '#memes' },
  { label: 'Receipts', href: '#receipts' },
  { label: 'Bridge to Canton', href: '#bridge' },
  { label: 'Join Quadrillion', href: '#join-quadrillion' },
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
        <div className="section-inner what-redesign-inner">
          <Reveal className="what-redesign-heading"><h2 id="what-title">WTF IS QUADRILLION?</h2></Reveal>
          <div className="what-redesign-cards">
            <Reveal className="what-redesign-card"><p>QUADRILLION is the first community driven meme on Canton</p></Reveal>
            <Reveal className="what-redesign-card what-redesign-card-two"><p>Canton is the only public blockchain with privacy that works, powering Wall Street and trillions onchain (soon <span>Quadrillion</span>).</p></Reveal>
          </div>
        </div>
      </section>
      <section id="why-quad" className="content-section why-section" aria-labelledby="why-title">
        <div className="section-inner lore-inner">
          <Reveal className="lore-heading-wrap"><h2 id="why-title">THE LORE</h2></Reveal>
          <div className="lore-story">
            <div className="lore-beat"><Reveal><h3>the ticker wasn&apos;t from a random word.</h3></Reveal><Reveal><p>QUADRILLION came from the same conversations the Canton team keeps having, the ones where they talk about the real size of traditional finance. The DTCC alone moves roughly 3.7 to 4.7 quadrillion dollars in transactions every year. Canton was built to bring that scale onchain.</p></Reveal></div>
            <div className="lore-beat"><Reveal><h3>They kept saying the word.</h3></Reveal><Reveal><p>They kept pointing at the number. So the community took the biggest number they kept repeating and turned it into a coin.</p></Reveal></div>
            <div className="lore-beat"><Reveal><h3>That&apos;s the whole idea.</h3></Reveal><Reveal><p>A simple piece of the conversation that everyone can hold, trade, and carry while the actual quadrillions slowly start moving on the network. The name isn&apos;t random. It&apos;s a reminder of the size of the opportunity.</p></Reveal></div>
          </div>
        </div>
      </section>
      <BillSection />
      <BridgeSection />
      <TokenomicsSection />
      <ReceiptsSection />
      <MemesSection />
      <JoinSection />
      <SiteFooter />
    </div>
  )
}

function BridgeSection() {
  const steps = [
    ['01', 'GET A WALLET', 'Go to oneswap.cc, sign up and create a wallet'],
    ['02', 'CONNECT EVM', 'Go to "bridge" and connect your evm wallet'],
    ['03', 'BRIDGE ASSETS', 'Bridge your assets from EVM chains to CC on the Canton network'],
    ['04', '', ''],
  ]

  return (
    <section id="bridge" className="content-section bridge-section" aria-labelledby="bridge-title">
      <div className="section-inner bridge-inner">
        <Reveal className="bridge-heading"><h2 id="bridge-title">BRIDGE TO CANTON</h2></Reveal>
        <div className="bridge-content-wrap">
          <div className="bridge-steps">{steps.map(([number, title, copy]) => <Reveal key={number} className="bridge-step"><span className="step-number">{number}</span>{title ? <div><h3>{title}</h3><p>{copy}</p></div> : null}</Reveal>)}</div>
          <Reveal className="bridge-buy-wrap"><button className="bridge-buy-button" type="button">Buy $QUAD</button></Reveal>
          <div className="bridge-coming-soon" aria-hidden="true">COMING SOON</div>
        </div>
      </div>
    </section>
  )
}

function TokenomicsSection() {
  const [copied, setCopied] = useState(false)
  const tokenIdentifier = ''

  async function copyIdentifier() {
    if (!tokenIdentifier) return
    await navigator.clipboard.writeText(tokenIdentifier)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <section id="tokenomics" className="content-section tokenomics-section" aria-labelledby="tokenomics-title">
      <div className="section-inner">
        <Reveal className="tokenomics-heading"><h2 id="tokenomics-title">TOKENOMICS</h2></Reveal>
        <div className="tokenomics-content-wrap">
          <div className="tokenomics-cards">
            <Reveal className="tokenomics-card"><h3>TOTAL SUPPLY</h3><div className="tokenomics-reserved" aria-label="Total supply reserved for future value" /></Reveal>
            <Reveal className="tokenomics-card"><h3>TOKEN IDENTIFIER</h3><div className="tokenomics-reserved" aria-label="Token identifier reserved for future value" /><button type="button" disabled={!tokenIdentifier} onClick={copyIdentifier}>{copied ? 'COPIED' : 'COPY'}</button></Reveal>
          </div>
          <div className="tokenomics-coming-soon" aria-hidden="true">COMING SOON</div>
        </div>
      </div>
    </section>
  )
}

function ReceiptsSection() {
  const receipts = [
    ['THE FOUR QUADRILLION CLAIM', '@CantonNetwork · 27 Aug 2026', 'Yuval Rooz discusses DTCC\'s $4 quadrillion annual transaction scale and production trades on Canton.', 'https://x.com/CantonNetwork/status/2092771827747823842'],
    ['QUADRILLIONS.', '@CantonNetwork · 5 Jun 2026', 'A short Canton Network video built around one word: Quadrillions.', 'https://x.com/CantonNetwork/status/2062694138307584233'],
    ['THE QUADRILLIONS PODCAST', '@CantonNetwork · 19 Feb 2026', 'Episode 6 featuring Yuval Rooz, Jason Yanowitz, Mathew McDermott, and Nick Shalek.', 'https://x.com/CantonNetwork/status/2024513305092772216'],
    ['PRIVACY, ON THE RECORD', '@CantonNetwork · 6 Feb 2026', 'A Quadrillions clip featuring Wesarn_real discussing privacy.', 'https://x.com/CantonNetwork/status/2019765017554657572'],
    ['STABLECOINS & PRIVACY', '@CantonNetwork · 4 Feb 2026', 'Episode 5 of Quadrillions, featuring Wesarn_real.', 'https://x.com/CantonNetwork/status/2019159275894181890'],
    ['QUADRILLIONS!!!', 'Yuval Rooz · 20 Dec 2025', 'Yuval highlights the scale of DTCC in a post quoting a Schwab Network video.', 'https://x.com/YuvalRooz/status/2002372239337877746'],
    ['NEW GOALS. QUADRILLIONS.', 'Yuval Rooz · 15 May 2026', 'A post connecting the industry\'s ambitions with the word Quadrillions.', 'https://x.com/YuvalRooz/status/2055215971325882428'],
    ['WHY THE PODCAST IS CALLED QUADRILLIONS', 'Yuval Rooz · 12 May 2026', 'Yuval contrasts crypto market figures with the scale of real financial markets.', 'https://x.com/YuvalRooz/status/2054191986123415658'],
    ['NOT EVEN A DROP', 'Yuval Rooz · 11 Jan 2026', 'Yuval uses a drop-in-the-bucket comparison to make a point about financial scale.', 'https://x.com/yuvalrooz/status/2109982541335671002'],
    ['THE BIGGER PICTURE', 'Yuval Rooz · 11 Jan 2026', 'Another post from Yuval Rooz in the wider Quadrillions conversation.', 'https://x.com/yuvalrooz/status/2109992002695950713'],
    ['THE QUADRILLIONS PODCAST', 'Yuval Rooz · 12 Dec 2025', 'Yuval explains why the podcast was given the name Quadrillions.', 'https://x.com/YuvalRooz/status/1999333753320247744'],
    ['A QUADRILLION-DOLLAR-SIZED IDEA', 'Eric Saraniecki (@wesarn_real) · 17 Dec 2025', 'A post about driving large-scale utility through the DTCC and Treasuries announcement.', 'https://x.com/wesarn_real/status/2001316802010169594'],
    ['YUVAL ROOZ ON X', 'Original post', '', 'https://x.com/YuvalRooz/status/2010443967939387406'],
  ]

  return (
    <section id="receipts" className="content-section receipts-section" aria-labelledby="receipts-title">
      <div className="section-inner receipts-inner">
        <Reveal className="receipts-heading"><h2 id="receipts-title">THE RECEIPTS</h2></Reveal>
        <Reveal className="receipts-support">Quadrillion isn&apos;t just random. here are proofs of where it was mentioned</Reveal>
        <div className="receipts-carousel" role="region" aria-label="Quadrillion source posts">
          <div className="receipts-track">{receipts.map(([title, source, description, href], index) => <Reveal key={href} className={`receipt-card receipt-card-${index % 4}`}><a href={href} target="_blank" rel="noreferrer"><span className="receipt-index">{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><span className="receipt-source">{source}</span>{description ? <p>{description}</p> : <p>OPEN ORIGINAL POST</p>}<span className="receipt-view">VIEW POST ↗</span></a></Reveal>)}</div>
        </div>
        <p className="receipts-disclaimer">QUADRILLION ($QUAD) is an independent, community-driven meme project. It is not affiliated with, endorsed by, sponsored by, or officially connected to Canton Network, Digital Asset, or their teams. References above are provided for context and do not imply their support or approval of QUAD.</p>
      </div>
    </section>
  )
}

function MemesSection() {
  const [selected, setSelected] = useState<string | null>(null)
  const images = [
    { src: '/quadrillion-banknote.jpeg', alt: 'Quadrillion novelty banknote', className: 'meme-tall' },
    { src: '/quad-logo.png', alt: 'QUAD logo', className: 'meme-logo' },
    { src: '/quadrillion-banknote.jpeg', alt: 'Quadrillion banknote detail', className: 'meme-wide' },
  ]

  return (
    <section id="memes" className="content-section memes-section" aria-labelledby="memes-title">
      <div className="section-inner">
        <Reveal className="section-kicker">08 / COMMUNITY WALL</Reveal>
        <div className="memes-heading"><Reveal><h2 id="memes-title">MEMES<br /><span>ONLY.</span></h2></Reveal><Reveal className="meme-caption">THE INTERNET<br />UNDERSTANDS.</Reveal></div>
        <div className="meme-wall">{images.map((image, index) => <Reveal key={`${image.src}-${index}`} className={`meme-tile ${image.className}`}><button type="button" aria-label={`Open ${image.alt}`} onClick={() => setSelected(image.src)}><Image src={image.src} alt={image.alt} width={1200} height={550} /></button></Reveal>)}</div>
        <p className="meme-empty-note">Original meme drops will live here as the community makes them.</p>
      </div>
      {selected ? <div className="meme-lightbox" role="dialog" aria-modal="true" aria-label="Expanded meme" onClick={() => setSelected(null)}><button type="button" className="lightbox-close" aria-label="Close expanded meme" onClick={() => setSelected(null)}>CLOSE ×</button><Image src={selected} alt="Expanded QUAD meme" width={1200} height={550} onClick={(event) => event.stopPropagation()} /></div> : null}
    </section>
  )
}

function JoinSection() {
  return (
    <section id="join-quadrillion" className="content-section join-section" aria-labelledby="join-title">
      <div className="section-inner join-inner">
        <Reveal className="section-kicker">09 / THE COMMUNITY</Reveal>
        <Reveal className="join-heading"><h2 id="join-title">JOIN<br /><span>QUADRILLION.</span></h2></Reveal>
        <Reveal className="join-copy"><p>The big number is only the beginning. Bring the meme, the receipts, and whatever comes next.</p></Reveal>
        <div className="join-links"><Reveal className="join-link join-link-primary"><span>QUAD COMMUNITY</span><strong>DESTINATION PENDING</strong><small>Only verified QUAD channels appear here.</small></Reveal><Reveal className="join-link join-link-secondary"><span>X / TELEGRAM / DISCORD</span><strong>NOT CONNECTED</strong><small>We won&apos;t invent a community link.</small></Reveal></div>
        <Image className="join-logo" src="/quad-logo.png" alt="QUAD logo" width={160} height={160} />
      </div>
    </section>
  )
}

function SiteFooter() {
  return <footer className="site-footer"><div><a className="footer-brand" href="#top"><Image src="/quad-logo.png" alt="QUAD logo" width={36} height={36} /><span>$QUAD</span></a><p>QUAD is an independent community-driven meme. Not affiliated with, endorsed by, or sponsored by Canton Network or Digital Asset.</p></div><nav aria-label="Footer navigation">{navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}<a href="#join-quadrillion">Join Quadrillion</a></nav><p className="footer-risk">QUAD is a meme with no intrinsic value.</p></footer>
}

function BillSection() {
  const [flipped, setFlipped] = useState(false)

  return (
    <section id="quadrillion-bill" className="bill-section content-section" aria-labelledby="bill-title">
      <div className="section-inner bill-inner">
        <div className="bill-heading"><Reveal><h2 id="bill-title">THE<br /><span>QUADRILLION BILL.</span></h2></Reveal></div>
        <Reveal className="bill-copy"><p className="bill-intro">if you&apos;re seeing this you deserve your own Quadrillion bill</p></Reveal>
        <Reveal className={`bill-stage ${flipped ? 'is-flipped' : ''}`}>
          <button className="bill-flip" type="button" aria-label={flipped ? 'Return the Quadrillion bill to its front view' : 'Flip the Quadrillion bill'} onClick={() => setFlipped((value) => !value)}>
            <span className="bill-card">
              <Image src="/quadrillion-banknote.jpeg" alt="Quadrillion novelty banknote" width={1200} height={550} priority />
              <span className="bill-back"><Image src="/quadrillion-banknote.jpeg" alt="" width={1200} height={550} /></span>
            </span>
          </button>
        </Reveal>
        <Reveal className="bill-print-wrap"><button className="print-button" type="button" onClick={() => { const link = document.createElement('a'); link.href = '/quadrillion-banknote.jpeg'; link.download = 'quadrillion-bill.jpeg'; link.click() }}>PRINT YOUR BILL</button></Reveal>
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

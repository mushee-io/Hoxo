import Image from "next/image";
import Link from "next/link";

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M7 10V8a5 5 0 0 1 10 0v2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="5" y="10" width="14" height="10" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="15" r="1.3" fill="currentColor" />
    </svg>
  );
}

function ExternalArrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon icon-sm">
      <path d="M7 17 17 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon icon-sm">
      <path d="M5 4h4.2l3.3 4.8L16.8 4H20l-5.9 6.8L20.5 20h-4.2l-3.7-5.2L8 20H4.8l5.9-6.9L5 4Z" fill="currentColor" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon icon-sm icon-fill">
      <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.82c.56.1.76-.24.76-.54v-1.88c-3.12.68-3.77-1.5-3.77-1.5-.51-1.29-1.24-1.63-1.24-1.63-1.02-.69.08-.67.08-.67 1.13.08 1.72 1.15 1.72 1.15 1 1.7 2.64 1.21 3.27.93.1-.72.39-1.21.71-1.49-2.5-.28-5.14-1.25-5.14-5.53 0-1.22.44-2.21 1.15-3-.11-.28-.5-1.43.11-2.96 0 0 .95-.3 3.07 1.15a10.7 10.7 0 0 1 5.58 0c2.12-1.45 3.06-1.15 3.06-1.15.62 1.53.23 2.68.12 2.96.72.79 1.15 1.78 1.15 3 0 4.29-2.65 5.25-5.17 5.53.41.35.77 1.03.77 2.07v3.06c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
    </svg>
  );
}

const features = [
  {
    title: "Private transfers",
    text: "Move stablecoins through a smoother, quieter flow designed around discretion and clean execution.",
  },
  {
    title: "Stablecoin-first UX",
    text: "Built around the assets people actually use for payments, treasury movement, and digital cash rails.",
  },
  {
    title: "Arbitrum settlement",
    text: "Fast, efficient rails for low-friction settlement, better responsiveness, and a premium payment feel.",
  },
  {
    title: "Payment links",
    text: "Generate simple receiving links for individuals, merchants, and teams without cluttered wallet flows.",
  },
  {
    title: "Focused interface",
    text: "Send, receive, activity, and privacy mode are organized into one clean surface with no noise.",
  },
  {
    title: "Ready for expansion",
    text: "Designed to grow into smart accounts, permissions, gas abstraction, and embedded payment products.",
  },
];

const comparisons = [
  ["Built mainly for storage", "Multiple moving parts", "Built for fast stablecoin payments"],
  ["Public transaction patterns", "Bridge and gas friction", "Cleaner privacy-oriented flow"],
  ["Generic asset browsing", "Hard for normal users", "Focused payment experience"],
  ["Weak merchant usability", "Too much technical overhead", "Ready for payment links and checkout"],
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <div className="bg-orb bg-orb-one" />
      <div className="bg-orb bg-orb-two" />
      <div className="bg-grid" />

      <header className="topbar container">
        <Link href="/" className="brand" aria-label="Hoxo home">
          <div className="brand-logo-wrap">
            <Image src="/hoxo-logo.jpeg" alt="Hoxo logo" width={56} height={56} className="brand-logo" priority />
          </div>
          <div>
            <div className="brand-title">HOXO</div>
            <div className="brand-subtitle">by Mushee</div>
          </div>
        </Link>

        <nav className="nav-links">
          <a href="#product">Product</a>
          <a href="#security">Security</a>
          <a href="#compare">Compare</a>
          <a href="https://mushee.xyz/" target="_blank" rel="noreferrer">Mushee</a>
          <a href="https://x.com/mushee_io" target="_blank" rel="noreferrer">X</a>
        </nav>

        <Link href="/app" className="button button-primary">
          <LockIcon />
          <span>Open App</span>
        </Link>
      </header>

      <section className="hero container">
        <div className="hero-copy">
          <div className="eyebrow">Private stablecoin rails on Arbitrum</div>
          <h1>
            Private stablecoin transfers.
            <span>Fast Arbitrum settlement.</span>
          </h1>
          <p className="hero-text">
            Hoxo is a privacy-first wallet by Mushee for sending stablecoins through a cleaner,
            more discreet, and more premium payment experience.
          </p>
          <div className="hero-actions">
            <Link href="/app" className="button button-primary button-large">
              <LockIcon />
              <span>Open App</span>
            </Link>
            <a href="#product" className="button button-secondary button-large">
              <span>Explore Product</span>
            </a>
          </div>
          <div className="hero-meta">
            <span>Built by Mushee</span>
            <span>Stablecoin-native</span>
            <span>Privacy-first UX</span>
            <span>Settlement on Arbitrum</span>
          </div>
        </div>

        <div className="hero-card">
          <div className="wallet-preview">
            <div className="wallet-preview-header">
              <div>
                <div className="muted-label">Hoxo wallet</div>
                <div className="balance">$24,840.12</div>
                <div className="muted-text">Available in stablecoins</div>
              </div>
              <div className="route-card">
                <span className="muted-label">Settlement</span>
                <strong>Arbitrum</strong>
              </div>
            </div>

            <div className="wallet-grid">
              <div className="panel">
                <div className="panel-header">
                  <span className="muted-label">Send</span>
                  <span className="chip">Private mode</span>
                </div>
                <div className="field-box">
                  <span className="field-label">Asset</span>
                  <div className="field-row"><strong>USDC</strong><span>12,500.00</span></div>
                </div>
                <div className="field-box">
                  <span className="field-label">Recipient</span>
                  <div className="field-row"><strong>hoxo.link/alex</strong></div>
                </div>
                <div className="field-box">
                  <span className="field-label">Amount</span>
                  <div className="field-row"><strong>2,400.00 USDC</strong></div>
                </div>
              </div>

              <div className="panel">
                <div className="panel-header">
                  <span className="muted-label">Activity</span>
                  <span className="muted-text">Today</span>
                </div>
                {[
                  ["Private transfer", "-1,200 USDC"],
                  ["Stealth receive", "+780 USDC"],
                  ["Settlement fee", "0.0009 ETH"],
                  ["Payment link claim", "+420 USDC"],
                ].map(([name, value]) => (
                  <div className="activity-row" key={name}>
                    <span>{name}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="stats-row">
              {[
                ["Private Mode", "Enabled"],
                ["Fee Estimate", "$0.18"],
                ["Route", "Arbitrum"],
              ].map(([label, value]) => (
                <div className="stat-box" key={label}>
                  <span className="field-label">{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rail-strip">
        <div className="container rail-strip-inner">
          <span>Privacy-first UX</span>
          <span>Stablecoin-ready</span>
          <span>Arbitrum settlement</span>
          <span>Fast confirmation</span>
          <span>Payment-focused design</span>
        </div>
      </section>

      <section id="product" className="section container">
        <div className="section-heading">
          <div className="eyebrow eyebrow-muted">Why Hoxo</div>
          <h2>A better way to move digital cash.</h2>
          <p>
            Most wallets are built for holding assets. Hoxo is built for sending value cleanly,
            privately, and with less friction.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-icon" />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section container split-section">
        <article className="story-card">
          <div className="eyebrow eyebrow-muted">Experience</div>
          <h2>A wallet experience that feels calm and premium.</h2>
          <p>
            Hoxo removes clutter and puts the payment flow first. Send, receive, track activity,
            and switch into private mode from one clear surface.
          </p>
          <ul className="check-list">
            <li>Send and receive from one focused dashboard</li>
            <li>Designed around stablecoin movement instead of generic asset browsing</li>
            <li>Made for individuals, merchants, and cleaner digital payments</li>
          </ul>
        </article>

        <article className="story-visual">
          <div className="visual-card">
            <div className="visual-large">
              <div className="panel-header">
                <span className="muted-label">Receive</span>
                <span className="chip">Fresh route</span>
              </div>
              <div className="qr-placeholder">
                <div className="qr-box" />
                <strong>hoxo.link/receive/xt4n</strong>
              </div>
              <div className="field-box">
                <span className="field-label">Preferred asset</span>
                <div className="field-row"><strong>USDT · USDC · DAI</strong></div>
              </div>
            </div>
            <div className="visual-stack">
              <div className="panel panel-small">
                <div className="muted-label">Mode</div>
                <h3>Private</h3>
                <p>Optimized for discreet stablecoin movement and low-friction settlement.</p>
              </div>
              <div className="panel panel-small">
                <div className="muted-label">Next</div>
                <h3>Payment links and merchant checkout</h3>
                <p>Expandable into smart accounts, permissions, and app-based billing.</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section id="compare" className="section container">
        <div className="section-heading">
          <div className="eyebrow eyebrow-muted">Compare</div>
          <h2>Why Hoxo feels different.</h2>
        </div>

        <div className="compare-table">
          <div className="compare-row compare-head">
            <div />
            <strong>Standard wallet</strong>
            <strong>Bridge-heavy flow</strong>
            <strong>Hoxo</strong>
          </div>
          {comparisons.map((row, index) => (
            <div className="compare-row" key={row[0]}>
              <span className="compare-index">0{index + 1}</span>
              <span>{row[0]}</span>
              <span>{row[1]}</span>
              <strong>{row[2]}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="security" className="section container security-grid">
        <article className="story-card">
          <div className="eyebrow eyebrow-muted">Security & privacy</div>
          <h2>Privacy matters when money moves.</h2>
          <p>
            Hoxo is built around the idea that sending value should feel safe, controlled, and
            intentional. The product language stays clean, the flow stays focused, and the wallet
            experience stays premium.
          </p>
        </article>

        <div className="mini-grid">
          {["Better recipient protection", "Cleaner transfer paths", "Lower payment friction", "Built for real usage"].map((item) => (
            <div className="mini-card" key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="closing-card">
          <div className="eyebrow eyebrow-muted">Closing</div>
          <h2>Private digital payments, reimagined.</h2>
          <p>
            Hoxo combines stablecoin usability, cleaner privacy flows, and fast Arbitrum settlement
            into one wallet experience.
          </p>
          <div className="hero-actions">
            <Link href="/app" className="button button-primary button-large">
              <LockIcon />
              <span>Open App</span>
            </Link>
            <a href="https://mushee.xyz/" target="_blank" rel="noreferrer" className="button button-secondary button-large">
              <span>Visit Mushee</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer container">
        <div className="footer-brand">
          <div className="brand-logo-wrap brand-logo-wrap-small">
            <Image src="/hoxo-logo.jpeg" alt="Hoxo logo" width={44} height={44} className="brand-logo" />
          </div>
          <div>
            <div className="brand-title">HOXO</div>
            <div className="footer-copy">A privacy-first stablecoin wallet built by Mushee.</div>
          </div>
        </div>

        <div className="footer-links">
          <a href="https://mushee.xyz/" target="_blank" rel="noreferrer"><ExternalArrow />Website</a>
          <a href="https://x.com/mushee_io" target="_blank" rel="noreferrer"><XIcon />X</a>
          <a href="https://github.com" target="_blank" rel="noreferrer"><GitHubIcon />GitHub</a>
        </div>
      </footer>
    </main>
  );
}

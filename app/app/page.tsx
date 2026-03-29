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

const activities = [
  ["Private transfer to hoxo.link/cleo", "-2,000 USDC", "Settled"],
  ["Stealth receive", "+1,280 USDC", "Confirmed"],
  ["Payment link claim", "+640 USDC", "Confirmed"],
  ["Settlement fee", "0.0008 ETH", "Paid"],
];

export default function AppPreviewPage() {
  return (
    <main className="site-shell app-shell">
      <div className="bg-orb bg-orb-one" />
      <div className="bg-orb bg-orb-two" />
      <div className="bg-grid" />

      <header className="topbar container">
        <Link href="/" className="brand" aria-label="Hoxo home">
          <div className="brand-logo-wrap brand-logo-wrap-small">
            <Image src="/hoxo-logo.jpeg" alt="Hoxo logo" width={48} height={48} className="brand-logo" priority />
          </div>
          <div>
            <div className="brand-title">HOXO APP</div>
            <div className="brand-subtitle">private mode enabled</div>
          </div>
        </Link>

        <div className="app-header-actions">
          <span className="chip chip-strong">
            <LockIcon />
            Private Mode
          </span>
          <Link href="/" className="button button-secondary">Back to site</Link>
        </div>
      </header>

      <section className="container app-dashboard">
        <aside className="app-sidebar">
          <div className="sidebar-card logo-card">
            <div className="brand-logo-wrap brand-logo-wrap-large">
              <Image src="/hoxo-logo.jpeg" alt="Hoxo logo" width={84} height={84} className="brand-logo" />
            </div>
            <h2>Hoxo</h2>
            <p>Private stablecoin transfers with fast Arbitrum settlement.</p>
          </div>

          <div className="sidebar-card nav-card">
            <span className="sidebar-label">Navigation</span>
            <a className="sidebar-link active" href="#">Dashboard</a>
            <a className="sidebar-link" href="#">Send</a>
            <a className="sidebar-link" href="#">Receive</a>
            <a className="sidebar-link" href="#">Activity</a>
            <a className="sidebar-link" href="#">Settings</a>
          </div>
        </aside>

        <div className="app-main">
          <section className="app-hero-card">
            <div>
              <div className="eyebrow eyebrow-muted">Portfolio value</div>
              <h1>$24,840.12</h1>
              <p>Available across private stablecoin rails and Arbitrum settlement routes.</p>
            </div>
            <div className="hero-actions app-hero-actions">
              <button className="button button-primary button-large" type="button">
                <LockIcon />
                <span>Open App</span>
              </button>
              <button className="button button-secondary button-large" type="button">Receive funds</button>
            </div>
          </section>

          <section className="app-grid app-stats-grid">
            {[
              ["Available USDC", "12,500.00"],
              ["Available USDT", "8,600.00"],
              ["Pending private route", "3,740.12"],
            ].map(([label, value]) => (
              <article className="metric-card" key={label}>
                <span className="field-label">{label}</span>
                <strong>{value}</strong>
              </article>
            ))}
          </section>

          <section className="app-grid app-body-grid">
            <article className="panel app-send-panel">
              <div className="panel-header">
                <span className="muted-label">Send private payment</span>
                <span className="chip">Arbitrum route</span>
              </div>

              <div className="field-box">
                <span className="field-label">Asset</span>
                <div className="field-row"><strong>USDC</strong><span>Balance: 12,500.00</span></div>
              </div>

              <div className="field-box">
                <span className="field-label">Recipient</span>
                <div className="field-row"><strong>hoxo.link/alex</strong></div>
              </div>

              <div className="field-box">
                <span className="field-label">Amount</span>
                <div className="field-row"><strong>2,400.00 USDC</strong></div>
              </div>

              <div className="field-box">
                <span className="field-label">Estimated fee</span>
                <div className="field-row"><strong>$0.18</strong><span>Settled on Arbitrum</span></div>
              </div>

              <button className="button button-primary send-button" type="button">
                <LockIcon />
                <span>Open App</span>
              </button>
            </article>

            <article className="panel">
              <div className="panel-header">
                <span className="muted-label">Recent activity</span>
                <span className="muted-text">Live preview</span>
              </div>
              <div className="activity-list-large">
                {activities.map(([title, amount, status]) => (
                  <div className="activity-row activity-row-large" key={title}>
                    <div>
                      <strong>{title}</strong>
                      <span>{status}</span>
                    </div>
                    <em>{amount}</em>
                  </div>
                ))}
              </div>
            </article>
          </section>
        </div>
      </section>
    </main>
  );
}

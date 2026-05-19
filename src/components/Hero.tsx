import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      {/* Atmospheric backdrop layers */}
      <div className="hero__grain" aria-hidden />
      <div className="hero__vignette" aria-hidden />
      <div className="hero__spotlight" aria-hidden />

      {/* Top nav */}
      <header className="hero__nav">
        <a className="hero__logo" href="/" aria-label="RFX home">
          <span className="hero__logo-mark">◆</span>
          <span className="hero__logo-word">RFX</span>
        </a>

        <nav className="hero__links" aria-label="Primary">
          <a href="#players">Players</a>
          <a href="#scouts">Scouts</a>
          <a href="#clubs">Clubs</a>
        </nav>

        <div className="hero__nav-right">
          <a className="hero__cta-link" href="#download">
            GET THE APP
          </a>
          <button className="hero__menu" aria-label="Open menu">
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Main hero stage */}
      <div className="hero__stage">
        {/* Wraparound display type */}
        <h1 className="hero__title" aria-label="RFX — Seen">
          <span className="hero__title-left">SE</span>
          <span className="hero__title-right">EN</span>
        </h1>

        {/* The athlete cutout — pops above the layout */}
        <div className="hero__athlete">
          <img
            src="/kruz-held.png"
            alt="Kruz Held — featured RFX player"
            className="hero__athlete-img"
          />
          <div className="hero__athlete-name">
            <span className="hero__athlete-name-first">KRUZ</span>
            <span className="hero__athlete-name-last">HELD</span>
            <span className="hero__athlete-meta">
              <span className="hero__tick">\\</span> Chicago Fire II · MLS NEXT Pro
            </span>
          </div>
        </div>

        {/* Corner metadata — left */}
        <div className="hero__meta hero__meta--tl">
          <span className="hero__tick">\\</span> Est. 2024
        </div>
        <div className="hero__meta hero__meta--bl">
          <span className="hero__tick">\\</span> Let&apos;s play.
        </div>

        {/* Corner metadata — right */}
        <div className="hero__meta hero__meta--tr">
          <span className="hero__tick">\\</span> Miami · Global
        </div>

        {/* Stat block, right side */}
        <div className="hero__stat">
          <div className="hero__stat-label">[ scouted ]</div>
          <div className="hero__stat-value">/12k+</div>
          <div className="hero__stat-sub">players on the platform</div>
        </div>

        {/* Featured-player card, bottom left */}
        <aside className="hero__featured" aria-label="Featured player">
          <div className="hero__featured-img" aria-hidden />
          <button
            className="hero__featured-arrow"
            aria-label="Next featured player"
          >
            ↗
          </button>
          <div className="hero__featured-progress">
            <span>01</span>
            <i />
            <span>04</span>
          </div>
        </aside>

        {/* Community proof, bottom right */}
        <div className="hero__community">
          <div className="hero__avatars" aria-hidden>
            <span />
            <span />
            <span />
          </div>
          <div className="hero__community-text">
            <div className="hero__community-line">Trusted by scouts at</div>
            <div className="hero__community-strong">FA · MLS Next · USL</div>
          </div>
        </div>
      </div>

      {/* Bottom strap with three taglines, like the reference */}
      <footer className="hero__strap">
        <p>
          A platform where overlooked soccer talent finally gets a stage —
          highlights, stats, scouts in one place.
        </p>
        <p>
          Built for the kid in the small town and the scout looking three states
          away.
        </p>
        <p>
          Post a clip. Track your stats. Get found.
          <br />
          That&apos;s the whole pitch.
        </p>
      </footer>
    </section>
  )
}

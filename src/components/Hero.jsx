import { useState } from "react";

const STATS = [
  { value: "50+",  label: "Destinations" },
  { value: "12K+", label: "Happy Travellers" },
  { value: "4.9",  label: "Avg. Rating" },
];

export default function Hero({ onExploreClick, searchQuery, onSearchChange }) {
  const [focused, setFocused] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    onExploreClick();
  }

  return (
    <section
      id="home"
      aria-label="Hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: 74,
      }}
    >
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=2000&auto=format&fit=crop&q=85"
          alt=""
          aria-hidden="true"
          style={{
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center",
          }}
        />
        {/* Premium multi-stop gradient — cinematic feel */}
        <div style={{
          position: "absolute", inset: 0,
          background:
            "linear-gradient(120deg, rgba(11,18,32,0.78) 0%, rgba(11,18,32,0.56) 32%, rgba(11,18,32,0.26) 55%, rgba(11,18,32,0.62) 82%, rgba(11,18,32,0.92) 100%)",
        }} />
        {/* Subtle grain overlay for premium feel */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.06, mixBlendMode: "overlay",
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }} />
      </div>

      {/* Content — premium left-aligned on desktop, centered on mobile */}
      <div className="container-p" style={{
        position: "relative", zIndex: 2,
        width: "100%",
        paddingTop: 40,
        paddingBottom: 80,
      }}>
        <div style={{
          maxWidth: 760,
        }}>
          {/* Eyebrow */}
          <div className="reveal-up" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "7px 16px 7px 8px",
            borderRadius: "var(--r-full)",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.16)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            marginBottom: 28,
          }}>
            <span style={{
              width: 28, height: 28, borderRadius: "50%",
              background: "var(--primary)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontSize: "0.78rem",
              boxShadow: "0 0 0 4px rgba(14,165,233,0.25)",
            }}>✈</span>
            <span style={{
              fontFamily: "var(--font-heading)",
              fontSize: "0.78rem",
              fontWeight: 600,
              color: "rgba(255,255,255,0.88)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}>Curated Journeys · Est. 2025</span>
          </div>

          {/* H1 — Editorial Playfair Display */}
          <h1 className="reveal-up delay-1" style={{
            color: "#fff",
            marginBottom: 26,
          }}>
            Discover the world,<br />
            <span style={{
              fontStyle: "italic",
              color: "transparent",
              WebkitTextStroke: "1px rgba(255,255,255,0.65)",
              background: "linear-gradient(120deg, #38BDF8, #7DD3FC, #A78BFA)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              paddingLeft: 4,
            }}> one destination</span>
            <br /> at a time.
          </h1>

          {/* Lead */}
          <p className="reveal-up delay-2" style={{
            fontSize: "clamp(1rem, 1.4vw, 1.1rem)",
            color: "rgba(226,232,240,0.88)",
            lineHeight: 1.75,
            maxWidth: 540,
            marginBottom: 44,
            fontWeight: 400,
          }}>
            Hand-picked escapes, iconic cities and hidden gems — crafted for
            curious travellers who value a seamless, unforgettable journey.
          </p>

          {/* CTA row */}
          <div className="reveal-up delay-3 hero-cta-row" style={{
            display: "flex", flexWrap: "wrap",
            gap: 12, alignItems: "center",
            marginBottom: 48,
          }}>
            <button
              onClick={onExploreClick}
              className="btn-primary"
              style={{
                padding: "15px 28px",
                fontSize: "0.96rem",
                borderRadius: "var(--r-md)",
                background: "var(--primary)",
              }}
            >
              Explore Destinations
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>

            <a
              href="#about"
              style={{
                display: "inline-flex", alignItems: "center", gap: 12,
                padding: "15px 20px",
                color: "#fff",
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "0.94rem",
                borderRadius: "var(--r-md)",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                transition: "background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span style={{
                width: 32, height: 32, borderRadius: "50%",
                background: "rgba(255,255,255,0.16)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.75rem",
              }}>▶</span>
              Watch Story
            </a>
          </div>

          {/* Premium floating search card */}
          <form
            onSubmit={handleSubmit}
            role="search"
            aria-label="Search destinations"
            className="reveal-up delay-4 hero-search-form"
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "stretch",
              gap: 8,
              padding: 12,
              background: "rgba(255,255,255,0.94)",
              borderRadius: "var(--r-xl)",
              boxShadow: focused
                ? "0 0 0 4px rgba(14,165,233,0.22), 0 30px 60px -20px rgba(11,18,32,0.45)"
                : "0 30px 60px -20px rgba(11,18,32,0.45)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              transition: "box-shadow var(--dur-fast)",
              maxWidth: 640,
            }}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "6px 14px 6px 18px",
              minWidth: 0,
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke={focused ? "var(--primary)" : "var(--text-muted)"}
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
                style={{ transition: "stroke var(--dur-fast)", flexShrink: 0 }}>
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <div style={{ display: "flex", flexDirection: "column", minWidth: 0, flex: 1 }}>
                <label htmlFor="hero-search" style={{
                  fontSize: "0.68rem",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: 1,
                }}>Where to?</label>
                <input
                  id="hero-search"
                  type="text"
                  value={searchQuery}
                  onChange={e => onSearchChange(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder="Dubai, Paris, Bali…"
                  aria-label="Search destinations or countries"
                  style={{
                    border: "none", outline: "none", background: "transparent",
                    fontSize: "1rem", fontWeight: 500,
                    color: "var(--text-heading)",
                    fontFamily: "var(--font-body)",
                    padding: "2px 0",
                    width: "100%",
                  }}
                />
              </div>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange("")}
                  aria-label="Clear search"
                  style={{
                    width: 28, height: 28, borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--text-muted)", background: "transparent",
                    cursor: "pointer", flexShrink: 0,
                    transition: "background var(--dur-fast), color var(--dur-fast)",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "var(--surface-2)"; e.currentTarget.style.color = "var(--text-heading)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--text-muted)"; }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>

            <button
              type="submit"
              className="btn-dark"
              style={{
                padding: "14px 26px",
                fontSize: "0.92rem",
                borderRadius: "calc(var(--r-xl) - 10px)",
              }}
            >
              Search
            </button>
          </form>

          {/* Stats row */}
          <div className="reveal-up delay-5 hero-stats" style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(24px, 6vw, 64px)",
            marginTop: 68,
            paddingTop: 32,
            borderTop: "1px solid rgba(255,255,255,0.10)",
          }}>
            {STATS.map((s) => (
              <div key={s.label} style={{ textAlign: "left" }}>
                <p style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1,
                  marginBottom: 6,
                  letterSpacing: "-0.02em",
                }}>{s.value}</p>
                <p style={{
                  fontSize: "0.78rem",
                  color: "rgba(148,163,184,0.92)",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={onExploreClick}
        aria-label="Scroll to destinations"
        className="scroll-cue"
        style={{
          position: "absolute", bottom: 32, right: "clamp(20px, 4vw, 48px)",
          zIndex: 3,
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "10px 18px 10px 14px",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.16)",
          color: "rgba(255,255,255,0.82)",
          fontSize: "0.74rem",
          fontFamily: "var(--font-heading)",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          borderRadius: "var(--r-full)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          cursor: "pointer",
          transition: "background var(--dur-fast), transform var(--dur-fast)",
        }}
        onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.14)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}
      >
        <span style={{
          width: 22, height: 22, borderRadius: "50%",
          background: "rgba(255,255,255,0.16)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
            style={{ animation: "gentle-float 2.2s ease-in-out infinite" }}>
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
        Scroll
      </button>
    </section>
  );
}

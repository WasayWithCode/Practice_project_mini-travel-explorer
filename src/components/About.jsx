const WHY = [
  {
    iconPath: "M12 2l10 6v8l-10 6L2 16V8l10-6z M12 22V12 M2 8l10 4 10-4 M12 12L2 8 M12 12l10-4",
    title: "50+ Curated Destinations",
    body: "From iconic world cities to hidden gems, every destination is vetted by our travel experts before it reaches you.",
  },
  {
    iconPath: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
    title: "12K+ Happy Travellers",
    body: "Thousands of travellers return home with unforgettable memories, year after year, trusting us with their journeys.",
  },
  {
    iconPath: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm1-13h-2v6l5.25 3.15.75-1.23-4-2.42z",
    title: "24/7 Expert Support",
    body: "From the moment you plan until after you return — our travel specialists are always one message away.",
  },
  {
    iconPath: "M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z",
    title: "Tailored Itineraries",
    body: "Every trip is designed around you — your pace, your interests, your budget — no two feel the same.",
  },
];

const VALUE_PROPS = [
  {
    icon: "🎯",
    title: "Handpicked Destinations",
    body: "We personally curate every location — you only see the destinations we'd travel to ourselves.",
  },
  {
    icon: "💎",
    title: "Transparent Pricing",
    body: "No hidden fees, no last-minute surprises. Every price you see is the price you'll pay.",
  },
  {
    icon: "🛡",
    title: "Safe & Reliable",
    body: "All tours are insured and vetted, with verified local partners you can trust in every city.",
  },
];

export default function About() {
  return (
    <section id="about" aria-label="About Mini Travel Explorer" style={{ background: "var(--bg)" }}>
      {/* ═══ Mission block — asymmetric layout ═══ */}
      <div className="container-p" style={{ paddingTop: 120, paddingBottom: 110 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr)",
          gap: "clamp(48px, 8vw, 96px)",
          alignItems: "center",
        }}>
          <div className="about-mission-grid" style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 1fr",
            gap: "clamp(40px, 6vw, 72px)",
            alignItems: "center",
          }}>
            {/* Image group with layered composition */}
            <div className="about-image-group" style={{ position: "relative" }}>
              {/* Main image */}
              <div style={{
                position: "relative",
                borderRadius: "var(--r-2xl)",
                overflow: "hidden",
                aspectRatio: "4 / 5",
                boxShadow: "var(--shadow-lg)",
              }}>
                <img
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=900&auto=format&fit=crop&q=80"
                  alt="Traveller enjoying a scenic mountain view"
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Floating accent image (offset card) */}
              <div className="about-accent-image" style={{
                position: "absolute",
                bottom: -36,
                right: -30,
                width: "50%",
                minWidth: 200,
                aspectRatio: "1 / 1",
                borderRadius: "var(--r-xl)",
                overflow: "hidden",
                border: "8px solid var(--bg)",
                boxShadow: "var(--shadow-xl)",
              }}>
                <img
                  src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&auto=format&fit=crop&q=80"
                  alt="Road trip through a scenic landscape"
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Floating stat card */}
              <div className="about-stat-card" style={{
                position: "absolute",
                top: 28,
                left: -20,
                background: "#fff",
                borderRadius: "var(--r-xl)",
                padding: "20px 22px",
                boxShadow: "var(--shadow-lg)",
                border: "1px solid var(--border-subtle)",
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "18px 24px",
                minWidth: 260,
              }}>
                {[
                  { v: "50+",  l: "Destinations" },
                  { v: "12K+", l: "Travellers" },
                  { v: "6",    l: "Years" },
                  { v: "4.9",  l: "Avg. Rating" },
                ].map(s => (
                  <div key={s.l}>
                    <p style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.6rem",
                      fontWeight: 700,
                      color: "var(--text-heading)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                      marginBottom: 4,
                    }}>{s.v}</p>
                    <p style={{
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      fontFamily: "var(--font-heading)",
                      color: "var(--text-muted)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}>{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Text content */}
            <div>
              <div className="eyebrow">About Us</div>

              <h2 style={{ marginBottom: 22 }}>
                We make travel <span style={{
                  color: "var(--primary)",
                  fontStyle: "italic",
                }}>effortless</span>,
                <br /> beautiful &amp; unforgettable.
              </h2>

              <p className="lead" style={{ marginBottom: 20 }}>
                Mini Travel Explorer connects curious travellers with the world's
                most extraordinary places — from sunlit Mediterranean coasts to
                bustling Eastern metropolises.
              </p>
              <p style={{ fontSize: "0.95rem", color: "var(--text-body)", lineHeight: 1.8, marginBottom: 34, maxWidth: 520 }}>
                We believe every journey should feel personal. That's why we take
                the time to craft each itinerary with care — partnering with local
                guides, trusted stays and community-first experiences across the
                globe.
              </p>

              {/* Value props */}
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 18 }}>
                {VALUE_PROPS.map(p => (
                  <li key={p.title} style={{ display: "flex", gap: 16 }}>
                    <span style={{
                      width: 46, height: 46, flexShrink: 0,
                      borderRadius: "var(--r-md)",
                      background: "var(--primary-50)",
                      border: "1px solid rgba(14,165,233,0.12)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.25rem",
                    }}>{p.icon}</span>
                    <div>
                      <h4 style={{ marginBottom: 4 }}>{p.title}</h4>
                      <p style={{
                        fontSize: "0.88rem", color: "var(--text-body)", lineHeight: 1.65,
                      }}>{p.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ Why Choose Us — modern card grid ═══ */}
      <div style={{ background: "var(--accent-50)", borderTop: "1px solid var(--border-subtle)" }}>
        <div className="container-p" style={{ paddingTop: 108, paddingBottom: 116 }}>

          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="eyebrow" style={{ justifyContent: "center", display: "inline-flex" }}>Why Choose Us</div>
            <h2 style={{ marginBottom: 16 }}>Everything for a perfect trip</h2>
            <p style={{
              fontSize: "1rem",
              color: "var(--text-body)",
              maxWidth: 540,
              margin: "0 auto",
              lineHeight: 1.75,
            }}>
              Thoughtful details and dependable support — so you can focus entirely on
              exploring, not planning.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: 22,
          }}>
            {WHY.map((item, i) => (
              <div key={item.title}
                style={{
                  padding: "34px 28px 32px",
                  borderRadius: "var(--r-xl)",
                  background: "#fff",
                  border: "1px solid var(--border-subtle)",
                  boxShadow: "var(--shadow-xs)",
                  transition: "transform 380ms var(--ease-out), box-shadow 380ms var(--ease-out), border-color 380ms var(--ease-out)",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "var(--shadow-xs)";
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                }}>
                {/* Accent gradient line on top */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: `linear-gradient(90deg, transparent 0%, ${i % 2 === 0 ? "var(--primary)" : "var(--gold)"} 50%, transparent 100%)`,
                  opacity: 0.85,
                }} />

                <div style={{
                  width: 52, height: 52,
                  borderRadius: "var(--r-md)",
                  background: i % 2 === 0 ? "var(--primary-50)" : "var(--gold-50)",
                  border: "1px solid rgba(15,23,42,0.03)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 22,
                  color: i % 2 === 0 ? "var(--primary-600)" : "#92622A",
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={item.iconPath} />
                  </svg>
                </div>

                <h3 style={{ fontSize: "1.1rem", marginBottom: 10, lineHeight: 1.3 }}>{item.title}</h3>
                <p style={{
                  fontSize: "0.89rem", color: "var(--text-body)", lineHeight: 1.7,
                }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

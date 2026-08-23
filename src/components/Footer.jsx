const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const DEST_LINKS = [
  { label: "Dubai, UAE", href: "#destinations" },
  { label: "Istanbul, Turkey", href: "#destinations" },
  { label: "Paris, France", href: "#destinations" },
  { label: "Bali, Indonesia", href: "#destinations" },
  { label: "London, UK", href: "#destinations" },
  { label: "Maldives", href: "#destinations" },
];

const SOCIAL = [
  {
    label: "Twitter / X",
    href: "#",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "YouTube",
    href: "#",
    path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

const PlaneMark = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
  </svg>
);

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="footer-link"
      style={{
        display: "block",
        fontSize: ".88rem",
        color: "#94A3B8",
        marginBottom: 12,
        fontFamily: "var(--font-heading)",
        transition: "color var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
        transformOrigin: "left center",
        textDecoration: "none",
        width: "fit-content",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#FFFFFF";
        e.currentTarget.style.transform = "translateX(3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#94A3B8";
        e.currentTarget.style.transform = "translateX(0)";
      }}
    >
      {children}
    </a>
  );
}

function ColHead({ children }) {
  return (
    <h4 style={{
      fontFamily: "var(--font-heading)",
      fontSize: ".74rem",
      fontWeight: 700,
      color: "#CBD5E1",
      textTransform: "uppercase",
      letterSpacing: ".2em",
      marginBottom: 22,
      paddingBottom: 12,
      borderBottom: "1px solid rgba(255,255,255,.07)",
    }}>{children}</h4>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#0B1220",
        fontFamily: "var(--font-heading)",
        position: "relative",
        overflow: "hidden",
      }}
      aria-label="Site footer"
    >
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background:
            "radial-gradient(800px 260px at 90% -10%, rgba(14,165,233,.14), transparent 60%)," +
            "radial-gradient(520px 220px at 8% 110%, rgba(199,155,87,.12), transparent 60%)",
        }}
      />

      <div className="container-p" style={{ paddingTop: "clamp(56px,7vw,80px)", paddingBottom: 28, position: "relative" }}>

        {/* ── Top strip: brand + newsletter ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 40,
          paddingBottom: 48,
          borderBottom: "1px solid rgba(255,255,255,.07)",
          alignItems: "start",
        }} className="footer-top">

          <div>
            <a href="#home" style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 18, textDecoration: "none" }}>
              <span style={{
                width: 44, height: 44, borderRadius: "var(--r-lg)",
                background: "linear-gradient(135deg, #0EA5E9 0%, #0369A1 60%, #0F172A 140%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff",
                boxShadow: "0 10px 30px -10px rgba(14,165,233,.55)",
              }}>{PlaneMark}</span>
              <div style={{ lineHeight: 1.05 }}>
                <div style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "1.05rem",
                  color: "#F8FAFC",
                  letterSpacing: "-.01em",
                }}>
                  Mini <span style={{ color: "#38BDF8" }}>Travel</span>
                </div>
                <div style={{
                  fontSize: ".62rem",
                  fontWeight: 700,
                  letterSpacing: ".32em",
                  textTransform: "uppercase",
                  color: "#94A3B8",
                  marginTop: 2,
                }}>Explorer</div>
              </div>
            </a>
            <p style={{
              fontSize: ".92rem", color: "#94A3B8", lineHeight: 1.75, maxWidth: 420, margin: 0,
            }}>
              Thoughtfully curated journeys to the world&apos;s most remarkable destinations — planned, booked, and enjoyed without the stress.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: 38, height: 38, borderRadius: "var(--r-md)",
                    background: "rgba(255,255,255,.05)",
                    border: "1px solid rgba(255,255,255,.07)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#94A3B8",
                    transition: "all var(--dur-base) var(--ease-out)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--primary)";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.borderColor = "var(--primary)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 18px -6px rgba(14,165,233,.55)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,.05)";
                    e.currentTarget.style.color = "#94A3B8";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,.07)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <ColHead>Stay Inspired</ColHead>
            <p style={{ fontSize: ".88rem", color: "#94A3B8", lineHeight: 1.7, margin: "0 0 16px", maxWidth: 360 }}>
              Travel tips, new destinations, and exclusive offers — delivered once a month.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter signup"
              className="newsletter-form"
              style={{
                display: "flex",
                padding: 6,
                background: "rgba(255,255,255,.05)",
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: "var(--r-lg)",
                gap: 6,
              }}
            >
              <label htmlFor="nl-email" className="sr-only">Email address</label>
              <input
                id="nl-email"
                type="email"
                placeholder="your@email.com"
                style={{
                  flex: 1, minWidth: 0,
                  padding: "10px 14px",
                  borderRadius: "var(--r-md)",
                  border: "1px solid transparent",
                  background: "transparent",
                  color: "#E2E8F0",
                  fontSize: ".86rem",
                  outline: "none",
                  fontFamily: "var(--font-heading)",
                  transition: "border-color var(--dur-base) var(--ease-out)",
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(14,165,233,.55)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "transparent"; }}
              />
              <button
                type="submit"
                aria-label="Subscribe"
                style={{
                  padding: "10px 16px",
                  borderRadius: "var(--r-md)",
                  background: "var(--primary)",
                  color: "#fff",
                  border: "1px solid transparent",
                  cursor: "pointer",
                  fontSize: ".86rem",
                  fontWeight: 600,
                  flexShrink: 0,
                  fontFamily: "var(--font-heading)",
                  display: "inline-flex", alignItems: "center", gap: 6,
                  transition: "all var(--dur-base) var(--ease-out)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#0284C7"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "var(--primary)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Subscribe
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </form>
            <p style={{ fontSize: ".74rem", color: "#64748B", marginTop: 10 }}>
              No spam, ever. Unsubscribe in one click.
            </p>
          </div>
        </div>

        {/* ── Links columns ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr) 1.3fr",
          gap: 40,
          padding: "48px 0",
        }} className="footer-links">
          <div>
            <ColHead>Quick Links</ColHead>
            {QUICK_LINKS.map((l) => <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>)}
          </div>

          <div>
            <ColHead>Company</ColHead>
            <FooterLink href="#about">About Us</FooterLink>
            <FooterLink href="#about">Our Team</FooterLink>
            <FooterLink href="#destinations">Destinations</FooterLink>
            <FooterLink href="#contact">Careers</FooterLink>
          </div>

          <div>
            <ColHead>Support</ColHead>
            <FooterLink href="#contact">Help Center</FooterLink>
            <FooterLink href="#contact">Booking Policy</FooterLink>
            <FooterLink href="#contact">Privacy Policy</FooterLink>
            <FooterLink href="#contact">Terms of Service</FooterLink>
          </div>

          <div>
            <ColHead>Top Destinations</ColHead>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px 24px",
            }} className="footer-dests">
              {DEST_LINKS.map((l) => <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>)}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{
          paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,.07)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}>
          <p style={{ fontSize: ".8rem", color: "#64748B", margin: 0, fontFamily: "var(--font-heading)" }}>
            © {year} Mini Travel Explorer. All rights reserved.
          </p>
          <p style={{ fontSize: ".8rem", color: "#475569", margin: 0, fontFamily: "var(--font-heading)" }}>
            Crafted with care using{" "}
            <span style={{ color: "#38BDF8", fontWeight: 600 }}>React</span>
            {" & "}
            <span style={{ color: "#22D3EE", fontWeight: 600 }}>Tailwind CSS</span>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .footer-top { grid-template-columns: 1fr !important; }
          .footer-links { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .footer-links { grid-template-columns: 1fr !important; }
          .footer-dests { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

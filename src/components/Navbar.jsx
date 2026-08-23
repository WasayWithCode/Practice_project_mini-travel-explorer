import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home",         href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "About",        href: "#about" },
  { label: "Contact",      href: "#contact" },
];

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* Premium: translucent when on top, white-strong with shadow when scrolled */
  const navStyle = {
    position: "fixed",
    top: 0, left: 0, right: 0,
    zIndex: 50,
    height: 74,
    fontFamily: "var(--font-body)",
    background: scrolled
      ? "rgba(255,255,255,0.85)"
      : "rgba(255,255,255,0.65)",
    backdropFilter: scrolled ? "saturate(180%) blur(14px)" : "saturate(160%) blur(10px)",
    WebkitBackdropFilter: scrolled ? "saturate(180%) blur(14px)" : "saturate(160%) blur(10px)",
    borderBottom: scrolled ? "1px solid rgba(15,23,42,0.06)" : "1px solid transparent",
    boxShadow: scrolled ? "0 1px 2px rgba(15,23,42,0.04)" : "none",
    transition: "background var(--transition), backdrop-filter var(--transition), box-shadow var(--transition), border-color var(--transition)",
  };

  const innerLinkBase = {
    display: "block",
    padding: "8px 16px",
    borderRadius: "var(--r-sm)",
    fontSize: "0.88rem",
    fontWeight: 500,
    color: "var(--text-subheading)",
    letterSpacing: "0.005em",
    transition: "color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)",
  };

  return (
    <nav style={navStyle} aria-label="Main navigation">
      <div className="container-p" style={{ height: "100%" }}>
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
          gap: 20,
          minWidth: 0,
        }}>

          {/* ── Logo mark ── */}
          <a href="#home" className="nav-brand" style={{
            display: "flex", alignItems: "center", gap: 12,
            textDecoration: "none",
            flexShrink: 0,
          }}>
            <span style={{
              width: 40, height: 40,
              borderRadius: "var(--r-md)",
              background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-600) 100%)",
              boxShadow: "0 6px 16px rgba(14,165,233,0.35)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff",
              flexShrink: 0,
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
              </svg>
            </span>
            <span style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "1rem",
              color: "var(--text-heading)",
              letterSpacing: "-0.015em",
              lineHeight: 1,
            }}>
              Mini<span style={{ color: "var(--primary)" }}>Travel</span>
              <br />
              <span style={{ fontWeight: 500, fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.18em", textTransform: "uppercase" }}>Explorer</span>
            </span>
          </a>

          {/* ── Desktop nav links ── */}
          <ul className="nav-desktop-links" style={{
            alignItems: "center", gap: 2, listStyle: "none", margin: 0, padding: 0,
          }}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  style={innerLinkBase}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = "var(--primary)";
                    e.currentTarget.style.background = "var(--primary-50)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = "var(--text-subheading)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >{label}</a>
              </li>
            ))}
          </ul>

          {/* ── Desktop CTA ── */}
          <a
            href="#destinations"
            className="btn-primary nav-desktop-cta"
            style={{ padding: "11px 22px", fontSize: "0.86rem" }}
          >
            Explore
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>

          {/* ── Mobile burger ── */}
          <button
            className="nav-toggle"
            onClick={() => setOpen(p => !p)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            style={{
              width: 44, height: 44,
              display: "flex",
              flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: 5, borderRadius: "var(--r-sm)",
              background: "rgba(15,23,42,0.04)",
              border: "1px solid rgba(15,23,42,0.08)",
            }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: "block",
                width: 22, height: 2, borderRadius: 2,
                background: "var(--text-heading)",
                transition: "transform 0.28s var(--ease-out), opacity 0.2s",
                transformOrigin: "center",
                transform:
                  i === 0 && open ? "translateY(7px) rotate(45deg)" :
                  i === 2 && open ? "translateY(-7px) rotate(-45deg)" : "none",
                opacity: i === 1 && open ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        id="mobile-menu"
        className="nav-mobile-menu"
        style={{
          overflow: "hidden",
          maxHeight: open ? 420 : 0,
          opacity: open ? 1 : 0,
          transition: "max-height 0.35s var(--ease-out), opacity 0.25s",
          borderTop: open ? "1px solid var(--border-subtle)" : "none",
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: open ? "var(--shadow-md)" : "none",
        }}
        aria-label="Mobile navigation"
      >
        <div style={{ padding: "16px 24px 28px" }}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "14px 4px",
                fontSize: "1rem",
                fontWeight: 500,
                color: "var(--text-subheading)",
                borderBottom: "1px solid var(--border-subtle)",
              }}
            >{label}</a>
          ))}
          <a
            href="#destinations"
            onClick={() => setOpen(false)}
            className="btn-primary"
            style={{ width: "100%", marginTop: 22, padding: "14px 20px" }}
          >
            Explore Destinations
          </a>
        </div>
      </div>
    </nav>
  );
}

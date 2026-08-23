import { useEffect } from "react";

function Chip({ children, tone = "slate" }) {
  const toneMap = {
    blue:   { bg: "var(--primary-50)",   fg: "var(--primary-600)" },
    slate:  { bg: "var(--surface-2)",    fg: "var(--text-subheading)" },
    amber:  { bg: "var(--gold-50)",      fg: "#92622A" },
  };
  const t = toneMap[tone] || toneMap.slate;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      padding: "7px 14px",
      borderRadius: "var(--r-full)",
      fontSize: "0.8rem",
      fontWeight: 600,
      fontFamily: "var(--font-heading)",
      background: t.bg,
      color: t.fg,
      lineHeight: 1.2,
    }}>{children}</span>
  );
}

export default function DestinationDetails({ destination, onClose }) {
  useEffect(() => {
    if (!destination) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [destination]);

  useEffect(() => {
    if (!destination) return;
    const fn = e => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [destination, onClose]);

  if (!destination) return null;

  const { name, country, description, price, rating, image,
          highlights, bestTime, duration, activities } = destination;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "rgba(11,18,32,0.60)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(0px, 2vw, 32px)",
      }}
    >
      {/* Panel */}
      <div
        className="modal-panel"
        onClick={e => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 820,
          maxHeight: "90vh",
          background: "var(--surface)",
          borderRadius: "var(--r-2xl)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 40px 80px -20px rgba(11,18,32,0.35)",
          animation: "fade-up 380ms var(--ease-out) both",
        }}
      >
        {/* ═══ Immersive header image ═══ */}
        <div className="modal-hero" style={{ position: "relative", height: 300, flexShrink: 0 }}>
          <img src={image} alt={`${name}, ${country}`} loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{
            position: "absolute", inset: 0,
            background:
              "linear-gradient(180deg, rgba(11,18,32,0) 40%, rgba(11,18,32,0.82) 100%)",
          }} />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position: "absolute", top: 20, right: 20,
              width: 40, height: 40, borderRadius: "50%",
              background: "rgba(255,255,255,0.96)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "var(--text-heading)",
              boxShadow: "var(--shadow-md)",
              cursor: "pointer", border: "none",
              transition: "transform var(--dur-fast), background var(--dur-fast)",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.08)"; e.currentTarget.style.background = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.background = "rgba(255,255,255,0.96)"; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Header content */}
          <div style={{
            position: "absolute", left: 28, right: 28, bottom: 26,
          }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "5px 12px",
              borderRadius: "var(--r-full)",
              background: "var(--primary)",
              color: "#fff",
              marginBottom: 14,
              boxShadow: "0 4px 14px rgba(14,165,233,0.40)",
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}>{country}</span>
            </div>

            <h2 id="modal-title" style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}>{name}</h2>
          </div>
        </div>

        {/* ═══ Scrollable body ═══ */}
        <div className="modal-body" style={{ overflowY: "auto", flex: 1, padding: "32px 32px 36px" }}>

          {/* Rating + Price row */}
          <div className="modal-summary-row" style={{
            display: "flex", flexWrap: "wrap",
            alignItems: "center", justifyContent: "space-between",
            gap: 16,
            marginBottom: 24,
          }}>
            {/* Rating pill */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "8px 16px",
              borderRadius: "var(--r-md)",
              background: "var(--gold-50)",
              border: "1px solid rgba(199,155,87,0.20)",
            }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 3 }} aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill={i < Math.floor(rating) ? "var(--gold)" : "none"} stroke={i < Math.floor(rating) ? "none" : "#CBD5E1"} strokeWidth="1.5">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span style={{
                fontFamily: "var(--font-heading)", fontWeight: 700,
                fontSize: "0.88rem", color: "#92622A",
              }}>{rating.toFixed(1)} rating</span>
            </div>

            {/* Price */}
            <div style={{ textAlign: "right" }}>
              <span style={{
                display: "block",
                fontSize: "0.7rem",
                fontWeight: 700,
                fontFamily: "var(--font-heading)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: 4,
              }}>Starting from</span>
              <span style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.25rem",
                fontWeight: 700,
                color: "var(--text-heading)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}>${price}</span>
            </div>
          </div>

          {/* Description */}
          <p style={{
            fontSize: "0.98rem",
            color: "var(--text-body)",
            lineHeight: 1.8,
            marginBottom: 26,
          }}>{description}</p>

          {/* Info chips */}
          <div style={{
            display: "flex", flexWrap: "wrap", gap: 10,
            marginBottom: 32,
          }}>
            {duration && <Chip tone="blue">⏱ {duration}</Chip>}
            {bestTime && <Chip tone="amber">📅 {bestTime}</Chip>}
            <Chip tone="slate">💰 From ${price}</Chip>
          </div>

          {/* Highlights (Attractions) */}
          {highlights?.length > 0 && (
            <div style={{ marginBottom: 30 }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 12,
                marginBottom: 18,
              }}>
                <span style={{
                  width: 34, height: 34, borderRadius: "var(--r-md)",
                  background: "var(--primary-50)", color: "var(--primary)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                </span>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "var(--text-heading)",
                  margin: 0,
                }}>Popular Attractions</h3>
              </div>

              <ul style={{
                listStyle: "none",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "12px 16px",
              }}>
                {highlights.map(h => (
                  <li key={h} style={{
                    display: "flex", alignItems: "center", gap: 12,
                    padding: "11px 14px",
                    borderRadius: "var(--r-md)",
                    background: "var(--accent-50)",
                    border: "1px solid var(--border-subtle)",
                  }}>
                    <span style={{
                      width: 22, height: 22, borderRadius: "50%",
                      background: "var(--primary)",
                      color: "#fff",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "0.65rem", fontWeight: 700,
                      flexShrink: 0,
                      boxShadow: "0 2px 6px rgba(14,165,233,0.35)",
                    }}>✓</span>
                    <span style={{
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      color: "var(--text-subheading)",
                    }}>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Activities */}
          {activities?.length > 0 && (
            <div style={{ marginBottom: 34 }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 12,
                marginBottom: 16,
              }}>
                <span style={{
                  width: 34, height: 34, borderRadius: "var(--r-md)",
                  background: "var(--gold-50)", color: "#92622A",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z" />
                  </svg>
                </span>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "var(--text-heading)",
                  margin: 0,
                }}>Activities</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {activities.map(a => <Chip key={a} tone="amber">{a}</Chip>)}
              </div>
            </div>
          )}

          {/* CTAs */}
          <div style={{
            display: "flex", flexDirection: "column", gap: 12,
            paddingTop: 26,
            borderTop: "1px solid var(--border-subtle)",
          }}>
            <button className="btn-primary"
              style={{ padding: "15px 22px", fontSize: "0.96rem", borderRadius: "var(--r-md)" }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
              </svg>
              Explore This Tour
            </button>

            <button
              onClick={onClose}
              className="btn-outline"
              style={{ padding: "14px 22px", fontSize: "0.9rem", borderRadius: "var(--r-md)" }}>
              ← Back to all destinations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

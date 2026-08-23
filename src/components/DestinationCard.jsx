export default function DestinationCard({ destination, onViewDetails }) {
  const { name, country, description, price, rating, image, duration } = destination;

  return (
    <article
      className="destination-card"
      style={{
        background: "var(--surface)",
        borderRadius: "var(--r-xl)",
        overflow: "hidden",
        border: "1px solid var(--border-subtle)",
        boxShadow: "var(--shadow-sm)",
        display: "flex",
        flexDirection: "column",
        transition: "transform 420ms var(--ease-out), box-shadow 420ms var(--ease-out), border-color 420ms var(--ease-out)",
        cursor: "pointer",
        position: "relative",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "var(--shadow-card-hover)";
        e.currentTarget.style.borderColor = "var(--border)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "var(--shadow-sm)";
        e.currentTarget.style.borderColor = "var(--border-subtle)";
      }}
    >
      {/* ═══ Image — editorial crop ═══ */}
      <div style={{
        position: "relative",
        aspectRatio: "4 / 3",
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <img
          src={image}
          alt={`${name}, ${country}`}
          loading="lazy"
          style={{
            width: "100%", height: "100%",
            objectFit: "cover",
            transition: "transform 800ms var(--ease-out)",
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        />

        {/* Vignette gradient overlay for depth */}
        <div style={{
          position: "absolute", inset: 0,
          background:
            "linear-gradient(180deg, rgba(11,18,32,0) 45%, rgba(11,18,32,0.45) 100%)",
          pointerEvents: "none",
        }} />

        {/* Top row: rating badge + duration */}
        <div style={{
          position: "absolute", top: 18, left: 18, right: 18,
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-start",
          pointerEvents: "none",
        }}>
          {/* Rating pill */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "6px 12px",
            borderRadius: "var(--r-full)",
            background: "rgba(255,255,255,0.96)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            boxShadow: "0 2px 10px rgba(15,23,42,0.12)",
          }}>
            <svg width="13" height="13" viewBox="0 0 20 20" fill="var(--gold)" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span style={{
              fontSize: "0.76rem", fontWeight: 700,
              fontFamily: "var(--font-heading)",
              color: "var(--text-heading)",
              letterSpacing: "0.01em",
            }}>{rating.toFixed(1)}</span>
          </div>

          {/* Duration pill */}
          {duration && (
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "6px 12px",
              borderRadius: "var(--r-full)",
              background: "rgba(11,18,32,0.58)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              color: "#fff",
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span style={{
                fontSize: "0.74rem", fontWeight: 600,
                fontFamily: "var(--font-heading)",
                letterSpacing: "0.02em",
              }}>{duration}</span>
            </div>
          )}
        </div>
      </div>

      {/* ═══ Content — editorial flow ═══ */}
      <div style={{
        padding: "24px 24px 22px",
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}>

        {/* Country / location line */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          marginBottom: 10,
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span style={{
            fontFamily: "var(--font-heading)",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--primary)",
          }}>{country}</span>
        </div>

        {/* Name (Playfair display heading for editorial feel) */}
        <h3 style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "1.55rem",
          lineHeight: 1.18,
          letterSpacing: "-0.015em",
          color: "var(--text-heading)",
          marginBottom: 12,
        }}>{name}</h3>

        {/* Description */}
        <p className="clamp-3" style={{
          fontSize: "0.9rem",
          color: "var(--text-body)",
          lineHeight: 1.7,
          marginBottom: 22,
          flex: 1,
        }}>{description}</p>

        {/* Divider line */}
        <div style={{
          height: 1,
          background: "var(--border-subtle)",
          marginBottom: 20,
        }} />

        {/* Footer row: Price + CTA */}
        <div className="destination-card-footer" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          marginTop: "auto",
        }}>
          <div>
            <span style={{
              display: "block",
              fontSize: "0.66rem",
              fontWeight: 700,
              fontFamily: "var(--font-heading)",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: 4,
            }}>Starts from</span>
            <div style={{
              display: "inline-flex",
              alignItems: "baseline",
              gap: 3,
            }}>
              <span style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.9rem",
                fontWeight: 700,
                color: "var(--text-heading)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}>${price}</span>
              <span style={{
                fontSize: "0.8rem",
                color: "var(--text-muted)",
                fontWeight: 500,
              }}>/ person</span>
            </div>
          </div>

          <button
            onClick={() => onViewDetails(destination)}
            className="btn-primary"
            style={{
              padding: "11px 20px",
              fontSize: "0.84rem",
              borderRadius: "var(--r-md)",
            }}
          >
            View
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

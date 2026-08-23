import { useState, useRef, useEffect } from "react";

const PRICE_FILTERS = [
  { label: "All",         value: "all" },
  { label: "Under $500",  value: "under500" },
  { label: "$500–$1000",  value: "500to1000" },
  { label: "Above $1000", value: "above1000" },
];

const SORT_OPTIONS = [
  { label: "Most Popular",     value: "rating_desc" },
  { label: "Price: Low to High",  value: "price_asc" },
  { label: "Price: High to Low",  value: "price_desc" },
  { label: "Name: A–Z",           value: "name_asc" },
];

export { PRICE_FILTERS, SORT_OPTIONS };

export default function FilterBar({ priceFilter, onPriceChange, sortBy, onSortChange }) {
  const [open, setOpen] = useState(false);
  const sortRef = useRef(null);

  useEffect(() => {
    function onClick(e) {
      if (sortRef.current && !sortRef.current.contains(e.target)) setOpen(false);
    }
    function onKey(e) { if (e.key === "Escape") setOpen(false); }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const activeSort = SORT_OPTIONS.find(o => o.value === sortBy) || SORT_OPTIONS[0];

  return (
    <div className="filter-bar" style={{
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: 14,
    }}>
      {/* Filter pills — premium minimal style */}
      <div className="price-filter-group" role="group" aria-label="Filter by price" style={{
        display: "flex", flexWrap: "wrap", gap: 6,
        padding: 4,
        background: "var(--surface-2)",
        borderRadius: "var(--r-md)",
      }}>
        {PRICE_FILTERS.map(f => {
          const active = priceFilter === f.value;
          return (
            <button
              key={f.value}
              onClick={() => onPriceChange(f.value)}
              aria-pressed={active}
              style={{
                padding: "8px 16px",
                borderRadius: "calc(var(--r-md) - 4px)",
                fontSize: "0.82rem",
                fontWeight: 600,
                fontFamily: "var(--font-heading)",
                cursor: "pointer",
                border: "none",
                background: active ? "#fff" : "transparent",
                color: active ? "var(--text-heading)" : "var(--text-body)",
                boxShadow: active ? "0 2px 6px rgba(15,23,42,0.06)" : "none",
                transition: "all var(--dur-fast) var(--ease-out)",
                whiteSpace: "nowrap",
                letterSpacing: "0.005em",
              }}
              onMouseEnter={e => { if (!active) e.currentTarget.style.color = "var(--text-heading)"; }}
              onMouseLeave={e => { if (!active) e.currentTarget.style.color = "var(--text-body)"; }}
            >{f.label}</button>
          );
        })}
      </div>

      {/* Custom sort dropdown */}
      <div className="sort-menu" ref={sortRef} style={{ position: "relative", flexShrink: 0 }}>
        <button
          type="button"
          onClick={() => setOpen(v => !v)}
          aria-haspopup="listbox"
          aria-expanded={open}
          style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "10px 14px 10px 14px",
            borderRadius: "var(--r-md)",
            border: "1.5px solid var(--border)",
            background: "#fff",
            color: "var(--text-heading)",
            fontSize: "0.82rem",
            fontWeight: 600,
            fontFamily: "var(--font-heading)",
            cursor: "pointer",
            transition: "all var(--dur-fast)",
            minWidth: 170,
            justifyContent: "space-between",
          }}
          onMouseEnter={e => { if (!open) e.currentTarget.style.borderColor = "var(--border-strong)"; }}
          onMouseLeave={e => { if (!open) e.currentTarget.style.borderColor = "var(--border)"; }}
        >
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-heading)", minWidth: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 6h18M6 12h12M10 18h4" />
            </svg>
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{activeSort.label}</span>
          </span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
            style={{ transition: "transform var(--dur-fast)", transform: open ? "rotate(180deg)" : "none" }}>
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {open && (
          <ul role="listbox" style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            right: 0,
            minWidth: "100%",
            padding: 6,
            margin: 0,
            listStyle: "none",
            background: "#fff",
            border: "1px solid var(--border)",
            borderRadius: "var(--r-md)",
            boxShadow: "var(--shadow-lg)",
            zIndex: 20,
            animation: "fade-up 180ms var(--ease-out) both",
          }}>
            {SORT_OPTIONS.map(o => {
              const active = o.value === sortBy;
              return (
                <li key={o.value} role="option" aria-selected={active}>
                  <button
                    onClick={() => { onSortChange(o.value); setOpen(false); }}
                    style={{
                      display: "flex", alignItems: "center", gap: 10,
                      width: "100%",
                      padding: "9px 12px",
                      borderRadius: "calc(var(--r-md) - 4px)",
                      fontSize: "0.85rem",
                      fontWeight: active ? 600 : 500,
                      fontFamily: "var(--font-heading)",
                      textAlign: "left",
                      cursor: "pointer",
                      background: active ? "var(--primary-50)" : "transparent",
                      color: active ? "var(--primary)" : "var(--text-subheading)",
                      transition: "background var(--dur-fast)",
                      border: "none",
                    }}
                    onMouseEnter={e => { if (!active) e.currentTarget.style.background = "var(--surface-2)"; }}
                    onMouseLeave={e => { if (!active) e.currentTarget.style.background = "transparent"; }}
                  >
                    <span style={{
                      width: 16, height: 16, flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      {active && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </span>
                    {o.label}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

import { useState } from "react";

export default function SearchBar({ searchQuery, onSearchChange }) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="search-bar" style={{
      position: "relative",
      display: "flex",
      alignItems: "center",
      width: "100%",
      maxWidth: 320,
      minWidth: 0,
      background: "var(--surface)",
      border: `1.5px solid ${focused ? "var(--primary)" : "var(--border)"}`,
      borderRadius: "var(--r-md)",
      transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
      boxShadow: focused ? "0 0 0 4px var(--primary-50)" : "none",
    }}>
      <span style={{
        paddingLeft: 14, display: "flex", alignItems: "center", flexShrink: 0,
        color: focused ? "var(--primary)" : "var(--text-muted)",
        transition: "color var(--dur-fast)",
      }}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </span>

      <input
        type="text"
        value={searchQuery}
        onChange={e => onSearchChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Search destinations…"
        aria-label="Search destinations"
        style={{
          flex: 1, minWidth: 0,
          padding: "12px 10px",
          border: "none", outline: "none",
          fontSize: "0.9rem",
          color: "var(--text-heading)",
          background: "transparent",
          fontFamily: "var(--font-body)",
        }}
      />

      {searchQuery && (
        <button
          onClick={() => onSearchChange("")}
          aria-label="Clear search"
          style={{
            marginRight: 8,
            width: 28, height: 28, borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "var(--text-muted)",
            background: "transparent", cursor: "pointer",
            transition: "all var(--dur-fast)",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "var(--surface-2)"; e.currentTarget.style.color = "var(--text-heading)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--text-muted)"; }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}

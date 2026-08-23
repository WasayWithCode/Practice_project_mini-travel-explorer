import { useState, useMemo, useRef } from "react";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import DestinationCard from "../components/DestinationCard";
import DestinationDetails from "../components/DestinationDetails";
import About from "../components/About";
import Contact from "../components/Contact";
import destinations from "../data/destinations";

function matchPrice(price, f) {
  if (f === "all")       return true;
  if (f === "under500")  return price < 500;
  if (f === "500to1000") return price >= 500 && price <= 1000;
  if (f === "above1000") return price > 1000;
  return true;
}

function sort(list, by) {
  const a = [...list];
  if (by === "price_asc")   return a.sort((x, y) => x.price - y.price);
  if (by === "price_desc")  return a.sort((x, y) => y.price - x.price);
  if (by === "name_asc")    return a.sort((x, y) => x.name.localeCompare(y.name));
  if (by === "rating_desc") return a.sort((x, y) => y.rating - x.rating);
  return a;
}

export default function Home() {
  const [query,    setQuery]    = useState("");
  const [price,    setPrice]    = useState("all");
  const [sortBy,   setSortBy]   = useState("rating_desc");
  const [selected, setSelected] = useState(null);

  const destRef = useRef(null);

  function scrollToDest() {
    destRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function handleHeroSearch(q) {
    setQuery(q);
    setTimeout(scrollToDest, 100);
  }

  const visible = useMemo(() => {
    const q = query.toLowerCase().trim();
    const filtered = destinations.filter(d =>
      (d.name.toLowerCase().includes(q) || d.country.toLowerCase().includes(q)) &&
      matchPrice(d.price, price)
    );
    return sort(filtered, sortBy);
  }, [query, price, sortBy]);

  const isFiltered = query !== "" || price !== "all";

  return (
    <>
      {/* Hero */}
      <Hero
        onExploreClick={scrollToDest}
        searchQuery={query}
        onSearchChange={handleHeroSearch}
      />

      {/* ── Destinations ── */}
      <section
        id="destinations"
        ref={destRef}
        aria-label="Popular Destinations"
        style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--border)" }}
      >
        <div className="section-container" style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>

          {/* Section header */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{
              display: "inline-block",
              padding: "5px 14px", borderRadius: 99,
              background: "var(--primary-subtle)", color: "var(--primary)",
              fontSize: "0.78rem", fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "0.07em",
              marginBottom: 16,
            }}>🌍 Explore</span>

            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              color: "var(--text-heading)",
              letterSpacing: "-0.03em",
              marginBottom: 10,
            }}>Popular Destinations</h2>

            <p style={{ fontSize: "0.95rem", color: "var(--text-body)", maxWidth: 420, margin: "0 auto" }}>
              Handpicked places to inspire your next adventure
            </p>
          </div>

          {/* ── Toolbar ── */}
          <div className="destination-toolbar" style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 20px",
            borderRadius: 14,
            background: "var(--surface)",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow-xs)",
            marginBottom: 32,
          }}>
            {/* Left: search */}
            <SearchBar searchQuery={query} onSearchChange={setQuery} />

            {/* Right: filters + sort */}
            <FilterBar
              priceFilter={price}
              onPriceChange={setPrice}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          </div>

          {/* Result count + clear */}
          <div className="results-row" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 28,
            flexWrap: "wrap",
            gap: 8,
          }}>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}
               aria-live="polite" aria-atomic="true">
              {visible.length > 0
                ? `${visible.length} destination${visible.length !== 1 ? "s" : ""} found`
                : "No destinations match your filters"}
            </p>
            {isFiltered && (
              <button
                onClick={() => { setQuery(""); setPrice("all"); }}
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "var(--primary)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  fontFamily: "var(--font-body)",
                  textDecoration: "underline",
                  textUnderlineOffset: 2,
                }}
              >Clear filters</button>
            )}
          </div>

          {/* Cards — responsive: 1 / 2 / 3 columns (mobile / tablet / desktop) */}
          {visible.length > 0 ? (
            <div className="dest-grid">
              {visible.map(d => (
                <DestinationCard
                  key={d.id}
                  destination={d}
                  onViewDetails={setSelected}
                />
              ))}
            </div>
          ) : (
            /* Empty state */
            <div style={{
              textAlign: "center",
              padding: "80px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}>
              <span style={{ fontSize: "3.5rem" }} aria-hidden="true">🔍</span>
              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "var(--text-heading)",
              }}>No destinations found</h3>
              <p style={{ color: "var(--text-body)", fontSize: "0.9rem", maxWidth: 320 }}>
                Try a different search term or remove a price filter.
              </p>
              <button
                onClick={() => { setQuery(""); setPrice("all"); }}
                style={{
                  marginTop: 8,
                  padding: "10px 24px",
                  borderRadius: 10,
                  background: "var(--primary)",
                  color: "#fff",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                }}
              >Show all destinations</button>
            </div>
          )}
        </div>
      </section>

      {/* About */}
      <About />

      {/* Contact */}
      <Contact />

      {/* Details modal */}
      <DestinationDetails
        destination={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}

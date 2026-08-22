import { useState, useMemo, useRef } from "react";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import DestinationCard from "../components/DestinationCard";
import DestinationDetails from "../components/DestinationDetails";
import destinations from "../data/destinations";

// Price filter options
const PRICE_FILTERS = [
  { label: "All", value: "all" },
  { label: "Under $500", value: "under500" },
  { label: "$500 – $1000", value: "500to1000" },
  { label: "Above $1000", value: "above1000" },
];

function matchesPrice(price, filter) {
  if (filter === "all") return true;
  if (filter === "under500") return price < 500;
  if (filter === "500to1000") return price >= 500 && price <= 1000;
  if (filter === "above1000") return price > 1000;
  return true;
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [selectedDestination, setSelectedDestination] = useState(null);

  // Ref to scroll to destinations section when CTA is clicked
  const destinationsRef = useRef(null);

  function handleExploreClick() {
    destinationsRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  // Derived list — re-computed only when search or filter changes
  const filteredDestinations = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return destinations.filter((dest) => {
      const matchesSearch =
        dest.name.toLowerCase().includes(query) ||
        dest.country.toLowerCase().includes(query);
      return matchesSearch && matchesPrice(dest.price, priceFilter);
    });
  }, [searchQuery, priceFilter]);

  return (
    <>
      {/* Hero */}
      <Hero onExploreClick={handleExploreClick} />

      {/* Destinations section */}
      <section
        id="destinations"
        ref={destinationsRef}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
            Popular Destinations
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Handpicked places to inspire your next journey
          </p>
        </div>

        {/* Search + Filter controls */}
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between mb-8">
          <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

          {/* Price filter buttons */}
          <div className="flex flex-wrap gap-2">
            {PRICE_FILTERS.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setPriceFilter(filter.value)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors duration-200 whitespace-nowrap
                  ${
                    priceFilter === filter.value
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-600"
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-gray-400 text-sm mb-6">
          {filteredDestinations.length === 0
            ? "No destinations found"
            : `Showing ${filteredDestinations.length} destination${filteredDestinations.length !== 1 ? "s" : ""}`}
        </p>

        {/* Destination cards grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                onViewDetails={setSelectedDestination}
              />
            ))}
          </div>
        ) : (
          // Empty state
          <div className="text-center py-20">
            <p className="text-6xl mb-4">🔍</p>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No destinations found</h3>
            <p className="text-gray-400">Try a different search term or remove the price filter.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setPriceFilter("all");
              }}
              className="mt-6 text-blue-600 hover:underline text-sm font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      {/* Destination details modal */}
      <DestinationDetails
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />
    </>
  );
}

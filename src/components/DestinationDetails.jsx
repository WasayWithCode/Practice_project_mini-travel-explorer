// Full-screen modal that shows detailed info about a selected destination

export default function DestinationDetails({ destination, onClose }) {
  if (!destination) return null;

  const { name, country, description, price, rating, image, highlights, bestTime, duration } =
    destination;

  // Close when clicking the backdrop
  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={`${name} details`}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Hero image */}
        <div className="relative h-64 overflow-hidden rounded-t-2xl">
          <img src={image} alt={`${name}, ${country}`} className="w-full h-full object-cover" />
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-700 rounded-full w-9 h-9 flex items-center justify-center shadow-md transition-colors duration-200"
            aria-label="Close details"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {/* Country badge */}
          <span className="absolute bottom-4 left-4 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
            📍 {country}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h2 className="text-3xl font-bold text-gray-800">{name}</h2>
            <span className="text-yellow-400 text-lg font-semibold whitespace-nowrap ml-4">
              ★ {rating}
            </span>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

          {/* Trip info pills */}
          <div className="flex flex-wrap gap-3 mb-6">
            <InfoPill icon="💰" label={`From $${price}`} />
            {bestTime && <InfoPill icon="📅" label={`Best: ${bestTime}`} />}
            {duration && <InfoPill icon="⏱️" label={duration} />}
          </div>

          {/* Highlights */}
          {highlights && highlights.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Highlights</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2 text-gray-600 text-sm">
                    <span className="text-green-500 font-bold">✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors duration-200">
              Book Now
            </button>
            <button
              onClick={onClose}
              className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 rounded-xl transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Small reusable pill for trip info
function InfoPill({ icon, label }) {
  return (
    <span className="flex items-center gap-1.5 bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1.5 rounded-full">
      <span>{icon}</span>
      <span>{label}</span>
    </span>
  );
}

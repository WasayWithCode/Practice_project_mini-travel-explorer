// Renders a single star rating display
function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <span className="flex items-center gap-1 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < fullStars) return <span key={i}>★</span>;
        if (i === fullStars && hasHalf) return <span key={i} className="opacity-60">★</span>;
        return <span key={i} className="text-gray-300">★</span>;
      })}
      <span className="text-gray-600 text-sm ml-1 font-medium">{rating}</span>
    </span>
  );
}

export default function DestinationCard({ destination, onViewDetails }) {
  const { name, country, description, price, rating, image } = destination;

  return (
    <article className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col group">
      {/* Destination image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={image}
          alt={`${name}, ${country}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Country badge overlaid on image */}
        <span className="absolute top-3 left-3 bg-white/90 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
          📍 {country}
        </span>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>

        <StarRating rating={rating} />

        <p className="text-gray-500 text-sm mt-3 mb-4 leading-relaxed flex-1 line-clamp-3">
          {description}
        </p>

        {/* Price + button row */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div>
            <span className="text-xs text-gray-400 uppercase tracking-wide">From</span>
            <p className="text-2xl font-bold text-blue-600">${price}</p>
          </div>
          <button
            onClick={() => onViewDetails(destination)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors duration-200 text-sm"
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}

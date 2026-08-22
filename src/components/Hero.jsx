export default function Hero({ onExploreClick }) {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden"
    >
      {/* Background decorative circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        {/* Badge */}
        <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
          🌍 Discover the World
        </span>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          Your Next Adventure
          <br />
          <span className="text-yellow-300">Starts Here</span>
        </h1>

        {/* Description */}
        <p className="text-blue-100 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Explore breathtaking destinations around the world. Find your perfect
          getaway, discover hidden gems, and create memories that last a lifetime.
        </p>

        {/* CTA Button */}
        <button
          onClick={onExploreClick}
          className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
        >
          Explore Destinations ✈️
        </button>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto text-center">
          {[
            { value: "50+", label: "Destinations" },
            { value: "10K+", label: "Happy Travelers" },
            { value: "4.9★", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl sm:text-3xl font-bold text-yellow-300">{stat.value}</p>
              <p className="text-blue-200 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

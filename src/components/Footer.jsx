const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "About", href: "#about" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <span className="text-2xl">✈️</span>
              <span>Mini Travel Explorer</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your gateway to the world's most beautiful destinations. Start
              exploring and make every journey unforgettable.
            </p>
          </div>

          {/* Quick links column */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About / info column */}
          <div id="about">
            <h4 className="text-white font-semibold text-base mb-4 uppercase tracking-wider">
              About This Project
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mini Travel Explorer is a beginner-friendly practice project built
              with React and Tailwind CSS to learn component structure, responsive
              design, and Git collaboration.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          &copy; {currentYear} Mini Travel Explorer. Built with ❤️ using React &amp; Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}

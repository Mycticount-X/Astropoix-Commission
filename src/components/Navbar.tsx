import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 glass-effect border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex items-center space-x-2 animate-fade-in-down z-50 relative">
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-astro-yellow to-astro-orange flex items-center justify-center font-bold text-2xl text-white shadow-lg">
                A
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-astro-purple rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">Astropoix</h1>
              <p className="text-xs font-semibold gradient-text-purple tracking-wide">COMMISSION</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {['Home', 'About', 'Portfolio', 'Pricing', 'FAQ', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-gray-300 hover:text-astro-orange transition-colors duration-300 font-bold"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden lg:block animate-fade-in-down">
            <a href="#pricing" className="glow-button px-6 py-3 bg-gradient-to-r from-astro-orange to-astro-yellow text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300">
              Purchase Now
            </a>
          </div>

          <button 
            className={`lg:hidden hamburger ${isMenuOpen ? 'active' : ''} z-50`} 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-night-dark mobile-menu-overlay transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-astro-purple rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-astro-orange rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
        </div>

        <div className="flex flex-col items-center justify-center h-full space-y-8 relative z-10">
          {['Home', 'About', 'Portfolio', 'Pricing', 'FAQ', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              onClick={closeMenu}
              className="text-2xl font-bold text-gray-300 hover:gradient-text transition-all duration-300 mobile-link"
            >
              {item}
            </a>
          ))}

          <a 
            href="#pricing" 
            onClick={closeMenu}
            className="mt-8 px-8 py-4 bg-gradient-to-r from-astro-orange to-astro-yellow text-white font-bold rounded-full text-xl shadow-lg shadow-astro-orange/30 mobile-link hover:scale-105 transition-transform"
          >
            Purchase Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
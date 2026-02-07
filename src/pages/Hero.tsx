import { useEffect, useState } from 'react';

const Hero = () => {
  const [stars, setStars] = useState<Array<{ id: number; top: string; left: string; delay: string }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
      }));
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      <div className="absolute inset-0 gradient-bg opacity-90"></div>

      <div className="absolute inset-0" id="stars-container">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-astro-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div 
        className="absolute bottom-20 right-10 w-72 h-72 bg-astro-orange rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" 
        style={{ animationDelay: '2s' }}
      ></div>
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-astro-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" 
        style={{ animationDelay: '4s' }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass-effect rounded-full mb-6">
            <span className="w-2 h-2 bg-yellow-400 opacity-5 rounded-full animate-pulse"></span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="block gradient-text-purple pb-2">Bring Your Dreams</span>
            <span className="block gradient-text">Come to Life</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto font-bold">
            Professional website development services at affordable prices
          </p>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto font-bold">
            Perfect for business owners, students, and anyone who needs a fast & simple website
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <a href="#pricing" className="glow-button w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-astro-orange to-astro-yellow text-white font-bold rounded-full text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              View Packages & Pricing
            </a>
            <a href="#portfolio" className="w-full sm:w-auto px-8 py-4 glass-effect text-white font-semibold rounded-full text-lg border-2 border-astro-purple border-opacity-30 hover:border-opacity-60 hover:scale-105 transition-all duration-300">
              View Portfolio
            </a>
          </div>

          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-red-500 bg-opacity-90 rounded-full animate-pulse-glow">
            <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className="text-xl font-bold text-white">40% OFF - All Packages!</span>
            <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in-up" 
          style={{ animationDelay: '0.3s' }}
        >
          <div className="glass-effect rounded-2xl p-6 stats-card cursor-pointer">
            <div className="text-4xl font-bold gradient-text mb-2">1-2</div>
            <div className="text-gray-300">Weeks Delivery</div>
          </div>
          <div className="glass-effect rounded-2xl p-6 stats-card cursor-pointer">
            <div className="text-4xl font-bold gradient-text mb-2">100%</div>
            <div className="text-gray-300">Free Source Code</div>
          </div>
          <div className="glass-effect rounded-2xl p-6 stats-card cursor-pointer">
            <div className="text-4xl font-bold gradient-text mb-2">40%</div>
            <div className="text-gray-300">Special Discount</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
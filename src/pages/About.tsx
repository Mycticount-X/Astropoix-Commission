import { useEffect, useState } from 'react';

const About = () => {
  const [stars, setStars] = useState<Array<{ id: number; top: string; left: string; delay: string }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
      }));
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <section id="about" className="relative py-20 md:py-32 bg-night-dark overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-astro-purple to-transparent opacity-50"></div>
      
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
              opacity: 0.5
            }}
          />
        ))}
      </div>

      <div className="absolute top-20 right-10 w-64 h-64 bg-astro-purple rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-astro-orange rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass-effect rounded-full mb-4">
            <span className="text-astro-orange">✨</span>
            <span className="text-sm text-gray-400">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Why Choose <span className="gradient-text">Astropoix</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From simple scripts to complex vision systems, we transform your technical needs into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          
          <div className="relative group">
            <div className="glass-effect rounded-3xl p-8 hover:scale-[1.02] transition-transform duration-500 border border-white/5">
              <div className="aspect-square bg-gradient-to-br from-astro-purple to-astro-orange rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 font-mono text-xs text-white p-6 leading-loose select-none">
                   <div>import React from 'react';</div>
                   <div>import CV from 'opencv';</div>
                   <br/>
                   <div>const App = () =&gt; {'{'}</div>
                   <div className="pl-4">return (</div>
                   <div className="pl-8">&lt;Universe /&gt;</div>
                   <div className="pl-4">);</div>
                   <div>{'}'};</div>
                </div>

                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm shadow-2xl">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                    </svg>
                  </div>
                  <div className="text-white text-2xl font-bold drop-shadow-md">Polymath Coder</div>
                  <div className="text-white text-sm opacity-90">Versatile & Efficient</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <FeatureItem 
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>}
              color="from-astro-orange to-astro-yellow"
              title="Fast Delivery"
              desc="Get your project ready in just 7-14 working days. We value your time and deliver quality work on schedule."
            />
            <FeatureItem 
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>}
              color="from-astro-purple to-astro-purple-dark"
              title="Customizable Logic"
              desc="Whether it's a specific algorithm or a UI tweak, full source code is provided for your modification."
            />
            <FeatureItem 
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>}
              color="from-astro-yellow to-astro-orange"
              title="Professional Quality"
              desc="Clean code architecture, efficient algorithms, and responsive layouts for all devices."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <ServiceCard 
            title="CLI App" 
            desc="Efficient Automation"
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />}
            color="emerald" 
          />
          <ServiceCard 
            title="Frontend Website" 
            desc="React & Tailwind"
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />} 
            color="cyan"
          />
          <ServiceCard 
            title="Mobile Apps" 
            desc="iOS & Android"
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />} 
            color="rose"
          />
          <ServiceCard 
            title="Computer Vision" 
            desc="AI & Image Processing"
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 5 8.268 7.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />} 
            color="violet"
          />
        </div>

        <div className="mt-8">
          <div className="grid md:grid-cols-3 gap-8">
            <TargetCard 
              title="Business Owners"
              desc="Automate workflows or build a stunning brand presence."
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>}
            />
             <TargetCard 
              title="Students & Researchers"
              desc="Assistance with assignments, Final Projects, or Thesis experiments."
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>}
            />
             <TargetCard 
              title="Tech Enthusiasts"
              desc="Anyone needing custom tools, scripts, or rapid prototypes."
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

const FeatureItem = ({ icon, color, title, desc }: { icon: any, color: string, title: string, desc: string }) => (
  <div className={`glass-effect rounded-2xl p-6 border-2 border-transparent hover:border-white/10 transition-all duration-300 group `}>
    <div className="flex items-start space-x-4">
      <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {icon}
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-astro-yellow transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  </div>
);


const colorVariants: Record<string, { outer: string; inner: string; shadow: string }> = {
  emerald: {
    outer: "hover:border-emerald-400",
    inner: "group-hover:border-emerald-400",
    shadow: "hover:shadow-emerald-500/30",
  },
  cyan: {
    outer: "hover:border-cyan-400",
    inner: "group-hover:border-cyan-400",
    shadow: "hover:shadow-cyan-500/30",
  },
  rose: {
    outer: "hover:border-rose-400",
    inner: "group-hover:border-rose-400",
    shadow: "hover:shadow-rose-500/30",
  },
  violet: {
    outer: "hover:border-violet-500",
    inner: "group-hover:border-violet-500",
    shadow: "hover:shadow-violet-500/30",
  },
};

const ServiceCard = ({ 
  title, 
  desc, 
  icon, 
  color = "emerald" 
}: { 
  title: string; 
  desc: string; 
  icon: any; 
  color: "emerald" | "cyan" | "rose" | "violet"; 
}) => {
  const variant = colorVariants[color];

  return (
    <div className={`glass-effect rounded-2xl p-6 text-center transition-all duration-300 border border-white/10 ${variant.outer} hover:shadow-lg ${variant.shadow} hover:-translate-y-2 group cursor-default`}>
      <div className={`w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 
        group-hover:bg-white group-hover:text-night-dark 
        border-2 border-transparent ${variant.inner}
        transition-all duration-300 text-gray-300 shadow-inner`}
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {icon}
        </svg>
      </div>
      <h4 className="text-white font-bold mb-1 text-lg group-hover:text-white transition-colors">{title}</h4>
      <p className="text-gray-500 text-sm group-hover:text-gray-300 transition-colors">{desc}</p>
    </div>
  );
};

const TargetCard = ({ title, desc, icon }: { title: string, desc: string, icon: any }) => (
    <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-astro-purple to-astro-orange rounded-3xl blur opacity-0 group-hover:opacity-80 transition-opacity duration-500 -z-10"></div>
        
        <div className="h-full glass-effect bg-[#0f0f16]/80 rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all flex flex-col items-center text-center hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-white/5 group-hover:scale-110 transition-transform duration-300">
                 <svg className="w-8 h-8 text-astro-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     {icon}
                 </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
    </div>
);

export default About;
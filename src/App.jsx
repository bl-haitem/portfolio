import { useState, useEffect, useCallback, Suspense } from "react";
import { Home, User, Wrench, Briefcase, Mail } from "lucide-react";

// Import sections from separate files
import About from './sections/About';
import Services from './sections/Services';
import Works from './sections/Works';
import Contact from './sections/Contact';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = useCallback((section) => {
    setActiveSection(section);
    // التمرير إلى أعلى الصفحة بسلاسة
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = "/i.png";
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-white overflow-x-hidden pb-20 relative">
      
      {/* Enhanced animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Enhanced bottom navigation */}
      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-lg z-50 p-4">
        <div className="bg-black/90 backdrop-blur-2xl border border-gray-600/50 shadow-2xl rounded-3xl p-2">
          <div className="flex justify-around items-center">
            {[
              { icon: Home, label: 'Home', section: 'Home' },
              { icon: User, label: 'About', section: 'About' },
              { icon: Wrench, label: 'Services', section: 'Services' },
              { icon: Briefcase, label: 'Works', section: 'Works' },
              { icon: Mail, label: 'Contact', section: 'Contact' },
            ].map(({ icon: Icon, label, section }) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`relative flex flex-col items-center p-3 rounded-2xl text-sm font-medium transition-all duration-500 ${
                  activeSection === section
                    ? 'text-black bg-white shadow-xl scale-110'
                    : 'text-gray-400 hover:text-white hover:bg-white/10 hover:scale-105'
                }`}
                aria-label={`Navigate to ${label} section`}
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-xs hidden sm:block">{label}</span>
                
                {/* Active indicator */}
                {activeSection === section && (
                  <>
                    <div className="absolute inset-0 bg-white rounded-2xl animate-pulse opacity-30" />
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full" />
                  </>
                )}
                
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-white/20 rounded-2xl opacity-0 ${
                  activeSection !== section ? 'group-hover:opacity-100' : ''
                } transition-opacity duration-300 blur-sm`} />
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="relative">
              <div className="w-16 h-16 border-2 border-gray-600 border-t-white rounded-full animate-spin" />
              <div className="absolute inset-0 w-16 h-16 border-2 border-transparent border-t-white/50 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
            </div>
          </div>
        }>
          {activeSection === 'Home' && (
            <section className="min-h-screen flex items-center justify-center px-4 py-20">
              <div className="max-w-8xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                  {/* Enhanced Hero Content */}
                  <div className="space-y-10 text-center lg:text-left relative">
                    
                    {/* Main title with enhanced effects */}
                    <div className={`transition-all duration-1500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                      <div className="relative group">
                        {/* Enhanced glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-white/8 to-white/15 rounded-3xl blur-2xl group-hover:from-white/20 group-hover:via-white/12 group-hover:to-white/20 transition-all duration-1000 animate-pulse" />
                        
                        <div className="relative bg-gradient-to-br from-black/80 via-black/60 to-black/40 backdrop-blur-2xl p-10 rounded-3xl border border-gray-700/50 shadow-2xl group-hover:border-white/30 transition-all duration-700 overflow-hidden">
                          {/* Animated background elements */}
                          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl animate-pulse" />
                          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-lg" />

                          <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-white/40 rounded-full" />
                          
                          <h1 className="relative z-10">
                            <div className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                              <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
                                HAITEM
                              </span>
                              <span className="block bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent mt-2 relative">
                                BELAIB
                                {/* Enhanced underline */}
                                <div className="absolute -bottom-3 left-0 w-32 h-1 bg-gradient-to-r from-white via-white/60 to-transparent rounded-full animate-pulse" />
                                <div className="absolute -bottom-4 left-0 w-24 h-0.5 bg-gradient-to-r from-white/60 to-transparent rounded-full" />
                              </span>
                            </div>
                          </h1>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced subtitle */}
                    <div className={`transition-all duration-1500 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/4 to-transparent rounded-2xl blur-xl group-hover:from-white/12 group-hover:via-white/6 transition-all duration-700" />
                        
                        <div className="relative bg-gradient-to-br from-black/70 via-black/50 to-black/30 backdrop-blur-xl p-8 rounded-2xl border border-gray-600/50 shadow-xl group-hover:border-white/20 transition-all duration-700 overflow-hidden">
                          {/* Corner decorations */}
                          <div className="absolute top-0 left-8 w-8 h-0.5 bg-gradient-to-r from-white/60 to-transparent" />
                          <div className="absolute bottom-0 right-8 w-8 h-0.5 bg-gradient-to-l from-white/60 to-transparent" />
                          <div className="absolute top-4 right-4 w-1 h-1 bg-white/50 rounded-full" />
                          <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/30 rounded-full" />
                          
                          <p className="text-lg md:text-xl lg:text-2xl text-gray-100 max-w-2xl mx-auto lg:mx-0 relative z-10 leading-relaxed">
                            <span className="text-white font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Full-Stack Developer</span>
                            <span className="text-gray-300"> & </span>
                            <span className="text-white font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Project Manager</span>
                            <br className="hidden md:block" />
                            <span className="text-gray-200"> Passionate about  </span>
                            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent font-bold animate-pulse">Startups & Innovation</span>
                            <span className="text-gray-200">.</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced action buttons */}
                    <div className={`transition-all duration-1500 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                      <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                        <a
                          href="mailto:haitembelaib@gmail.com"
                          className="group relative overflow-hidden px-10 py-5 bg-gradient-to-r from-white to-gray-100 text-black rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border-2 border-transparent hover:border-white/50"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                          <span className="relative z-10 flex items-center gap-3">
                            <Mail className="w-5 h-5" />
                            Get In Touch
                          </span>
                          <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                        </a>
                        
                        <button
                          onClick={() => handleNavClick('Works')}
                          className="group relative overflow-hidden px-10 py-5 border-2 border-white text-white rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 bg-gradient-to-r from-black/90 to-black/70 backdrop-blur-xl"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/15 to-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                          <span className="relative z-10 flex items-center gap-3">
                            <Briefcase className="w-5 h-5" />
                            View My Work
                          </span>
                          <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Hero Image */}
                  <div className="flex flex-col items-center lg:items-end relative">
                    <div className={`relative transition-all duration-2000 delay-2000 ${isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'}`}>
                      {imageLoaded ? (
                        <div className="relative group">
                          {/* Enhanced glow effects */}
                          <div className="absolute -inset-4 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-3xl blur-2xl group-hover:from-white/15 group-hover:via-white/8 transition-all duration-700"></div>
                          
                          <div className="relative overflow-hidden rounded-3xl">
                            <img
                              src="/i.png"
                              alt="Haitem Belaib"
                              className="relative w-80 h-96 md:w-96 md:h-[500px] object-cover shadow-2xl group-hover:scale-105 transition-all duration-700 border border-gray-800"
                            />
                            
                            {/* Strong dark gradient from bottom to top */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 via-black/20 to-transparent rounded-3xl group-hover:opacity-0 transition-all duration-700" />
                          </div>
                          
                          {/* Enhanced ring effect */}
                          <div className="absolute inset-0 rounded-3xl ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-700" />
                          <div className="absolute inset-0 rounded-3xl ring-4 ring-white/5 group-hover:ring-white/10 transition-all duration-700 blur-sm" />

                          {/* Enhanced floating elements */}
                          <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-white/40 to-white/20 rounded-full animate-pulse blur-sm" />
                          <div className="absolute -bottom-8 -left-8 w-16 h-16 border-2 border-white/30 rounded-full animate-spin" style={{animationDuration: '10s'}} />
                          <div className="absolute top-1/3 -left-12 w-8 h-8 bg-gradient-to-r from-white/50 to-transparent rounded-full animate-bounce" style={{animationDuration: '3s'}} />
                          <div className="absolute bottom-1/3 -right-10 w-6 h-6 bg-white/20 rounded-full animate-pulse" />
                        </div>
                      ) : (
                        <div className="w-80 h-96 md:w-96 md:h-[500px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl flex items-center justify-center animate-pulse border border-gray-700">
                          <div className="relative">
                            <div className="w-16 h-16 border-2 border-gray-600 border-t-white rounded-full animate-spin" />
                            <div className="absolute inset-0 w-16 h-16 border-2 border-transparent border-t-white/50 rounded-full animate-spin" style={{ animationDirection: 'reverse' }} />
                          </div>
                        </div>
                      )}

                      {/* Enhanced quote */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3 z-30 w-full max-w-[280px]">
                        <div className="relative group/quote">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-lg blur-md group-hover/quote:from-white/15 group-hover/quote:to-white/8 transition-all duration-700"></div>
                          
                          <div className="relative bg-gradient-to-br from-black/80 via-black/60 to-black/40 backdrop-blur-2xl p-3 rounded-lg border border-gray-800/50 shadow-2xl group-hover/quote:border-white/20 transition-all duration-500 overflow-hidden">
                            {/* Quote decorations */}
                            <div className="absolute top-0.5 left-0.5 text-white/20 text-sm font-bold">"</div>
                            <div className="absolute bottom-0.5 right-0.5 text-white/20 text-sm font-bold">"</div>
                            
                            <p className="text-xs text-white italic leading-snug drop-shadow-lg relative z-10 px-1">
                              "Creativity is not what I keep inside, but what I set free for others to live."
                            </p>
                            <p className="text-gray-300 mt-1 font-semibold text-xs text-center relative z-10">
                              – Haitem Belaib
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeSection === 'About' && <About />}
          {activeSection === 'Services' && <Services />}
          {activeSection === 'Works' && <Works />}
          {activeSection === 'Contact' && <Contact />}
        </Suspense>
      </main>
    </div>
  );
}

export default App;

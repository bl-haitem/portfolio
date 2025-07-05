import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Services from "./sections/Services";
import Works from "./sections/Works";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  // Define heights for fixed elements
  // Adjust these values based on your actual Navbar and Let's Talk button heights
  // استخدم قيم تقريبية بالبكسل، يمكنك قياسها بدقة باستخدام أدوات المطور (F12) في المتصفح
  const NAVBAR_HEIGHT_PX = 72; // Approximate height of your bottom navbar (e.g., 60px content + 12px padding)
  const HEADER_HEIGHT_PX = 64; // Approximate height of your top header (e.g., 40px content + 24px padding-top)

  return (
    <div className="h-screen w-full bg-gradient-to-br from-gray-950 via-zinc-900 to-black text-white font-sans relative overflow-hidden flex flex-col">
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div
          className="absolute inset-0 opacity-20 transition-all duration-700 ease-out"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%,
                rgba(99, 102, 241, 0.4) 0%,
                rgba(99, 102, 241, 0.2) 25%,
                transparent 60%),
              radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%,
                rgba(139, 92, 246, 0.35) 0%,
                rgba(139, 92, 246, 0.15) 30%,
                transparent 65%),
              radial-gradient(circle at 50% 50%,
                rgba(59, 130, 246, 0.25) 0%,
                rgba(59, 130, 246, 0.1) 40%,
                transparent 70%)
            `,
            filter: 'blur(1px)',
          }}
        />

        {/* Enhanced Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/20 rounded-full"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `floatParticle ${8 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
                filter: 'blur(0.5px)',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
              }}
            />
          ))}
        </div>

        {/* High-Quality Dot Pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, rgba(255,255,255,0.6) 1px, transparent 0),
              radial-gradient(circle at 30px 30px, rgba(99, 102, 241, 0.4) 0.8px, transparent 0)
            `,
            backgroundSize: '60px 60px, 100px 100px',
            animation: 'breatheDots 12s ease-in-out infinite'
          }}
        />
      </div>

      {/* Premium Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)`,
            animation: 'floatLight 15s ease-in-out infinite',
            filter: 'blur(60px)'
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.6}px, ${mousePosition.y * -0.6}px)`,
            animation: 'floatLight 18s ease-in-out infinite reverse',
            filter: 'blur(50px)'
          }}
        />
        <div
          className="absolute top-1/2 right-1/2 w-72 h-72 bg-blue-500/12 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`,
            animation: 'floatLight 20s ease-in-out infinite',
            filter: 'blur(40px)'
          }}
        />
      </div>

      {/* Header Area (branding and contact button) - Fixed at top */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center px-4 md:px-6 z-30"
           style={{ height: `${HEADER_HEIGHT_PX}px` }}> {/* Use fixed height here */}
        {/* Top Corner Branding */}
        <div className={`transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
          <div className="flex items-center gap-2 md:gap-3">
            <span className="text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-white via-gray-100 to-indigo-200 bg-clip-text text-transparent">
              Haitem Belaib
            </span>
            <div className="flex items-center gap-1 md:gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50" />
              <span className="text-xs text-gray-400 hidden sm:inline">Available</span>
            </div>
          </div>
        </div>

        {/* Enhanced Contact Button */}
        <div className={`transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
          <a
            href="mailto:haitembelaib@gmail.com"
            className="group relative px-3 py-2 md:px-5 md:py-3 bg-gradient-to-r from-white/10 to-white/20 hover:from-white/20 hover:to-white/30 border border-white/20 hover:border-white/40 rounded-full transition-all duration-500 backdrop-blur-md overflow-hidden"
            style={{
              boxShadow: '0 8px 32px rgba(255, 255, 255, 0.1)',
            }}
          >
            <span className="relative z-10 text-sm font-medium">Let's Talk</span>
          </a>
        </div>
      </div>

      {/* Main Content Area (Now takes remaining space) */}
      <div
        className="flex-grow flex flex-col items-center justify-center text-center px-4 md:px-6 relative overflow-hidden"
        style={{
          paddingTop: `${HEADER_HEIGHT_PX}px`, // Push content down to clear fixed header
          paddingBottom: `${NAVBAR_HEIGHT_PX}px`, // Push content up to clear fixed navbar
          minHeight: `calc(100vh - ${HEADER_HEIGHT_PX}px - ${NAVBAR_HEIGHT_PX}px)` // Ensure it fills remaining space
        }}
      >
        {/* Conditional Rendering of Sections */}
        {activeSection === 'Home' && (
          <>
            {/* Enhanced Profile Section */}
            <div className={`relative mb-6 md:mb-8 lg:mb-10 transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div
                className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 group cursor-pointer mx-auto"
                style={{
                  animation: 'floatProfile 10s ease-in-out infinite'
                }}
              >
                {/* Multi-layered High-Quality Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/40 via-purple-500/35 to-blue-500/40 rounded-full blur-2xl animate-pulse"
                     style={{ filter: 'blur(30px)' }} />
                <div className="absolute inset-1 bg-gradient-to-r from-white/25 via-white/15 to-white/25 rounded-full blur-xl"
                     style={{ filter: 'blur(20px)' }} />
                <div className="absolute inset-2 bg-gradient-to-r from-indigo-300/30 via-purple-300/25 to-blue-300/30 rounded-full blur-lg"
                     style={{ filter: 'blur(15px)' }} />

                {/* Enhanced Rotating Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400/50 via-purple-400/50 to-blue-400/50 p-0.5"
                     style={{ animation: 'rotateBorder 25s linear infinite' }}>
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-950 via-zinc-900 to-black" />
                </div>

                {/* Profile Image with Enhanced Effects */}
                <div className="absolute inset-1 rounded-full overflow-hidden">
                  <img
                    src="i.png" // تأكد من أن هذا المسار صحيح لصورة ملفك الشخصي
                    alt="Haitem Belaib"
                    width="512" // <<<<<<< إضافة مهمة لتحسين CLS >>>>>>>
                    height="512" // <<<<<<< إضافة مهمة لتحسين CLS >>>>>>>
                    // افترضت أن الصورة مربعة وأن حجمها الأصلي لا يقل عن 512x512 بكسل.
                    // يرجى التحقق من الأبعاد الفعلية لصورة i.png وتعديل هذه القيم إذا لزم الأمر.
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    style={{
                      filter: 'drop-shadow(0 0 30px rgba(99, 102, 241, 0.4)) contrast(1.1) brightness(1.05)',
                    }}
                  />
                </div>

                {/* Enhanced Interaction Effects */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-ping" />
              </div>
            </div>

            {/* Optimized Typography */}
            <div className={`transition-all duration-1000 delay-400 space-y-4 md:space-y-6 max-w-4xl mx-auto ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="space-y-2 md:space-y-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-none">
                  <span className="bg-gradient-to-r from-white via-indigo-100 to-purple-100 bg-clip-text text-transparent">
                    Haitem Belaib
                  </span>
                  <sup className="text-gray-500 text-xs md:text-sm opacity-60 ml-1">®</sup>
                </h1>
              </div>

              <div className="space-y-3 md:space-y-4">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed mx-auto">
                  <span className="bg-gradient-to-r from-gray-300 via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                    CS Student @ ESTIN | Full-Stack Developer | Project Manager | Passionate about Startups & Innovation
                  </span>
                </p>
              </div>
            </div>
          </>
        )}

        {activeSection === 'About' && <About />}
        {activeSection === 'Services' && <Services />}
        {activeSection === 'Works' && <Works />}
        {activeSection === 'Contact' && <Contact />}
      </div>

      {/* Footer / Navigation Bar Area - Fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center py-4 md:py-6">
        <div
          className="
            bg-black/70 backdrop-blur-xl border border-white/25 rounded-2xl
            px-2 py-3 sm:px-3 md:px-4 md:py-4 shadow-2xl
            max-w-fit mx-auto
            flex items-center
          "
          style={{
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 60px rgba(99, 102, 241, 0.1)'
          }}
        >
          <div className="flex gap-1 sm:gap-2 md:gap-3">
            {['Home', 'About', 'Services', 'Works', 'Contact'].map((item, index) => (
              <Button
                key={item}
                variant="ghost"
                onClick={() => handleNavClick(item)}
                className={`relative text-xs sm:text-sm px-2 sm:px-3 md:px-4 py-2 md:py-3 rounded-xl transition-all duration-500 overflow-hidden font-medium ${
                  activeSection === item
                    ? 'text-black bg-white shadow-lg shadow-white/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/15'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  boxShadow: activeSection === item ? '0 0 20px rgba(255, 255, 255, 0.5)' : 'none'
                }}
              >
                <span className="relative z-10">{item}</span>
                {activeSection === item && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white rounded-xl animate-pulse" />
                )}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Animations */}
      <style jsx>{`
        @keyframes floatProfile {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }

        @keyframes floatLight {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }

        @keyframes breatheDots {
          0%, 100% { opacity: 0.08; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.05); }
        }

        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.6; }
          25% { transform: translateY(-20px) translateX(10px) rotate(90deg); opacity: 0.2; }
          50% { transform: translateY(-5px) translateX(-15px) rotate(180deg); opacity: 0.8; }
          75% { transform: translateY(15px) translateX(5px) rotate(270deg); opacity: 0.3; }
        }

        @keyframes rotateBorder {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        /* Custom Scrollbar Styles for Webkit (Chrome, Edge, Safari) */
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px; /* Reduced width even further for minimal look */
          border-radius: 2.5px; /* Maintain rounded caps */
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.01); /* Even more subtle track */
          border-radius: 2.5px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(99, 102, 241, 0.2); /* Very faint blue-purple thumb */
          border-radius: 2.5px;
          border: none; /* Removed border completely for a cleaner look */
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(99, 102, 241, 0.4); /* Slightly more visible on hover */
        }

        /* Hide scrollbar for Firefox (if you want to hide it completely) */
        .custom-scrollbar {
            scrollbar-width: thin; /* "auto" or "thin" for Firefox */
            scrollbar-color: rgba(99, 102, 241, 0.2) rgba(255, 255, 255, 0.01); /* thumb color track color */
        }
      `}</style>
    </div>
  );
}

export default App;
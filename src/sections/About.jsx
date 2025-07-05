import React, { useEffect, useState, useRef } from 'react';
import { Briefcase, Building, Laptop, PenTool, BookOpen } from 'lucide-react'; 

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const scrollRef = useRef(null); // Ref to the scrollable main card

  // --- FIX 1: Move experienceItems definition BEFORE useEffect that uses it ---
  const experienceItems = [
    { icon: Laptop, title: 'Full Stack Developer', company: 'Freelance & Personal Projects', years: '2024 - Present', iconColor: 'text-green-300' },
    { icon: Building, title: 'Property Rental Agent', company: 'Self-employed / Freelance', years: 'Jul 2024 - Present', iconColor: 'text-blue-300' },
    { icon: PenTool, title: 'Graphic & UI/UX Designer', company: 'Freelance / Self-employed', years: 'May 2022 - Present', iconColor: 'text-yellow-300' },
    { icon: Briefcase, title: 'ByteCraft Communication', company: 'Bytecraft', years: 'Oct 2024 - Present', iconColor: 'text-teal-300' },
    { icon: BookOpen, title: 'Technical Content Creator', company: 'haitem.tech', years: 'Oct 2022 - Mar 2023', iconColor: 'text-red-300' },
    { icon: BookOpen, title: 'Computer Science Student', company: 'ESTIN', years: '2024 - Present', iconColor: 'text-indigo-300' },
  ];
  // --- END FIX 1 ---

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Effect to check if scroll indicator is needed
  useEffect(() => {
    const checkScroll = () => {
      if (scrollRef.current) {
        // If scrollHeight is greater than clientHeight, content is overflowing
        setShowScrollIndicator(scrollRef.current.scrollHeight > scrollRef.current.clientHeight);
      }
    };

    // Initial check and re-check on resize
    checkScroll();
    window.addEventListener('resize', checkScroll);
    // Also check after component mounts and potentially after content loads/renders
    const loadTimer = setTimeout(checkScroll, 300); // Small delay to allow content to render

    return () => {
      window.removeEventListener('resize', checkScroll);
      clearTimeout(loadTimer);
    };
  }, [experienceItems]); // This dependency is fine now that experienceItems is defined earlier

  const cardBgColor = 'rgba(0,0,0,0.6)'; // Equivalent to bg-black/60

  // Define heights for fixed elements from App.jsx. These are estimates, adjust to match your App.jsx values
  const NAVBAR_HEIGHT_PX = 72; 
  const HEADER_HEIGHT_PX = 64; 
  // Calculate total vertical space taken by fixed elements + desired padding/margin
  // تم تعديل 4 * 16 إلى 64 + 64 لتعكس بشكل أفضل الهوامش الإجمالية المرئية حول البطاقة
  // هذه القيمة يجب أن تكون كافية لتغطية الهوامش العلوية والسفلية لـ div الخارجي والمسافة الإضافية
  const VERTICAL_OFFSET_PX = NAVBAR_HEIGHT_PX + HEADER_HEIGHT_PX + 64 + 64; // Header + Navbar + p-4 (top) + p-4 (bottom) + extra buffer for general layout. You might need to fine-tune this value.

  return (
    <div className={`
      flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 // Adjusted padding here for outer div
      max-w-5xl mx-auto h-full text-center
      transition-all duration-700 ease-out
      ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
    `}>
      {/* Main Card Container - With calculated max-height and ref */}
      <div 
        ref={scrollRef} // Attach ref here
        className="
          bg-black/60 backdrop-blur-lg rounded-3xl
          border-t border-r border-l border-white/20
          p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl
          relative w-full
          flex flex-col // Essential for internal scrolling
          overflow-y-auto custom-scrollbar // Allows scrolling if content is too tall
          transform transition-transform duration-300 ease-in-out hover:scale-[1.005]
        " 
        style={{
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), 0 0 80px rgba(99, 102, 241, 0.15)',
          // Calculate max-height dynamically based on viewport and fixed elements
          // استخدام min() لضمان عدم تجاوز ارتفاع معين حتى على الشاشات الكبيرة جدًا
          maxHeight: `min(calc(100vh - ${VERTICAL_OFFSET_PX}px), 900px)` // Added a max of 900px to prevent card from becoming excessively tall on very large screens
        }}
      >
        {/* Decorative Gradient Overlay (Background effect inside the card) */}
        <div className="absolute inset-0 z-0 opacity-20" style={{
          background: `radial-gradient(circle at 10% 20%, rgba(99,102,241,0.2) 0%, transparent 50%),
                       radial-gradient(circle at 90% 80%, rgba(139,92,246,0.2) 0%, transparent 50%)`
        }}></div>

        {/* Content Wrapper - all content is inside this div, relative to card, higher z-index */}
        <div className="relative z-10 flex-grow flex flex-col items-center justify-start pb-16"> {/* Increased bottom padding */}
          <h1 className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 md:mb-12
            bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent
            tracking-tight
          ">
            About Me
          </h1>

          <div className="space-y-5 md:space-y-8 text-base sm:text-lg lg:text-xl mb-12">
            {/* Added min-height or line-height for better stability, or ensure consistent number of lines */}
            <p className="
              text-gray-200 leading-relaxed max-w-2xl mx-auto
              bg-gradient-to-r from-gray-300 via-indigo-100 to-purple-100 bg-clip-text text-transparent
              min-h-[2em] // <<< إضافة: لتحديد الحد الأدنى للارتفاع لسطرين تقريبًا
            ">
              I'm a **Computer Science student at ESTIN in Béjaïa** (École Supérieure en Sciences et Technologies de l’Informatique et du Numérique).
            </p>
            <p className="
              text-gray-200 leading-relaxed max-w-2xl mx-auto
              bg-gradient-to-r from-gray-300 via-indigo-100 to-purple-100 bg-clip-text text-transparent
              min-h-[2em] // <<< إضافة: لتحديد الحد الأدنى للارتفاع لسطرين تقريبًا
            ">
              I’ve been leading and delivering digital projects — from planning to production — with a strong attention to detail and team dynamics.
            </p>
            <p className="
              text-gray-200 leading-relaxed max-w-2xl mx-auto
              bg-gradient-to-r from-gray-300 via-indigo-100 to-purple-100 bg-clip-text text-transparent
              min-h-[2em] // <<< إضافة: لتحديد الحد الأدنى للارتفاع لسطرين تقريبًا
            ">
              I thrive at the intersection of technology and execution, turning ideas into structured, user-focused solutions.
            </p>
          </div>

          {/* Section: Experience & Education */}
          <h2 className="
            text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8
            bg-gradient-to-r from-white via-green-200 to-teal-200 bg-clip-text text-transparent
            tracking-tight
          ">
            Experience & Education
          </h2>

          <div className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8
            w-full
          ">
            {experienceItems.map((item, index) => (
              <div 
                key={index} 
                className="
                  bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 
                  flex flex-col items-center justify-center text-center 
                  hover:bg-white/10 hover:border-white/20 
                  transition-all duration-300 ease-in-out 
                  transform hover:-translate-y-1 hover:shadow-lg 
                  min-h-[150px] sm:min-h-[160px] // <<< إضافة: لتحديد الحد الأدنى لارتفاع البطاقات
                "
              >
                <item.icon className={`w-8 h-8 sm:w-9 sm:h-9 ${item.iconColor} mb-3`} />
                <p className="text-base sm:text-lg font-semibold text-white mb-1">{item.title}</p>
                <p className="text-sm text-gray-300">{item.company}</p>
                <p className="text-xs text-gray-400 mt-1">{item.years}</p>
              </div>
            ))}
          </div>
        </div> {/* End of Content Wrapper */}
        
        {/* Visual Scroll Indicator (Fade Effect) - Now conditionally rendered */}
        <div 
          className={`absolute bottom-0 left-0 w-full h-24 pointer-events-none z-20 transition-opacity duration-300 ${showScrollIndicator ? 'opacity-100' : 'opacity-0'}`}
          style={{
            background: `linear-gradient(to top, ${cardBgColor} 0%, transparent 100%)`,
            maskImage: `linear-gradient(to top, black 0%, transparent 100%)`, 
            WebkitMaskImage: `linear-gradient(to top, black 0%, transparent 100%)` 
          }}
        />
      </div>
    </div>
  );
}

export default About;
import React, { useEffect, useState } from 'react';
import { Code, LayoutDashboard } from 'lucide-react'; // No need for Palette if not used

function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`
      flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12
      max-w-6xl mx-auto h-full text-center
      transition-all duration-700 ease-out
      ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
    `}>
      <div className="
        bg-black/60 backdrop-blur-lg border border-white/20 rounded-3xl
        p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl
        relative w-full
        flex flex-col justify-start
        max-h-[calc(100vh - 180px)] sm:max-h-[calc(100vh - 160px)] md:max-h-[calc(100vh - 140px)]
        overflow-y-auto custom-scrollbar
      " style={{
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), 0 0 80px rgba(99, 102, 241, 0.15)'
      }}>
        {/* Decorative Gradient Overlay */}
        <div className="absolute inset-0 z-0 opacity-20" style={{
          background: `radial-gradient(circle at 10% 20%, rgba(99,102,241,0.2) 0%, transparent 50%),
                       radial-gradient(circle at 90% 80%, rgba(139,92,246,0.2) 0%, transparent 50%)`
        }}></div>

        <h1 className="
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 relative z-10
          bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent
          tracking-tight
        ">
          My Services
        </h1>

        <p className="
          text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed
          text-gray-300 mb-8 relative z-10 max-w-3xl mx-auto
        ">
          I offer comprehensive digital solutions, from robust development to strategic execution and engaging content.
        </p>

        {/* Services Grid */}
        <div className="
          grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 relative z-10
        ">
          {/* Service Card 1: Full-Stack Web Development (Further Summarized) */}
          <div className="
            bg-white/10 border border-white/15 rounded-xl p-4 sm:p-5 md:p-6 shadow-xl
            flex flex-col items-center justify-start
            transform hover:scale-105 transition-transform duration-300
            min-h-[260px] sm:min-h-[280px] md:min-h-[300px] // Existing min-h is good for reserving space
          ">
            <div className="bg-indigo-500/30 rounded-full p-2 sm:p-3 mb-3 md:mb-4">
              <Code className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-indigo-300" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2
                bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent">
              Full-Stack Web Development
            </h2>
            <p className="
                text-sm sm:text-base md:text-base leading-relaxed
                text-gray-300 flex-grow
                // <<<<<<< إضافة: حد أقصى للارتفاع (max-height) لتحديد المساحة للنص >>>>>>>
                // هذا يضمن عدم وجود تغيير كبير في التخطيط حتى لو كان هناك اختلاف بسيط في تحميل الخطوط
                // أو إذا تم تغيير كمية النص بشكل ديناميكي (على الرغم من أنه ليس كذلك هنا).
                // يجب أن تكون هذه القيمة كافية لاستيعاب أكبر قدر من النص المتوقع.
                // يمكنك تعديلها بناءً على تصميمك الفعلي وحجم النص.
                max-h-[120px] sm:max-h-[140px] md:max-h-[160px] overflow-hidden
            ">
              I build **high-performance, user-centric web applications** from concept to deployment. I deliver scalable, secure, and seamless digital experiences tailored to your unique business needs.
            </p>
          </div>

          {/* Service Card 2: Project & Digital Strategy (Further Summarized) */}
          <div className="
            bg-white/10 border border-white/15 rounded-xl p-4 sm:p-5 md:p-6 shadow-xl
            flex flex-col items-center justify-start
            transform hover:scale-105 transition-transform duration-300
            min-h-[260px] sm:min-h-[280px] md:min-h-[300px] // Existing min-h is good for reserving space
          ">
            <div className="bg-purple-500/30 rounded-full p-2 sm:p-3 mb-3 md:mb-4">
              <LayoutDashboard className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-300" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2
                bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
              Project & Digital Strategy
            </h2>
            <p className="
                text-sm sm:text-base md:text-base leading-relaxed
                text-gray-300 flex-grow
                // <<<<<<< إضافة: حد أقصى للارتفاع (max-height) لتحديد المساحة للنص >>>>>>>
                max-h-[120px] sm:max-h-[140px] md:max-h-[160px] overflow-hidden
            ">
              I lead digital projects from inception to delivery, covering **strategic planning, team leadership, and risk management**. My expertise extends to ** Design, business model development, community management, and content creation**, ensuring comprehensive digital solutions.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Services;
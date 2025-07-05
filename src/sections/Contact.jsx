import React, { useEffect, useState } from 'react';
import { Mail, Linkedin, PhoneCall, MapPin } from 'lucide-react'; 

function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Define heights for fixed elements from App.jsx. Adjust if necessary.
  // سنستخدم نفس منطق الـ max-h في Services.jsx قدر الإمكان
  // ولكن يجب أن تكون حذرًا، فالأرقام الثابتة مثل 180px قد لا تكون متجاوبة
  // إذا كانت الناف بار أو الهيدر يتغير ارتفاعها.
  // القيم الحالية لـ max-h في Services.jsx هي:
  // max-h-[calc(100vh - 180px)] sm:max-h-[calc(100vh - 160px)] md:max-h-[calc(100vh - 140px)]
  // سنطبقها هنا.

  // Common classes for all small cards
  const commonCardClasses = `
    bg-white/5 border border-white/10 rounded-xl
    p-4 sm:p-5 md:p-6
    flex flex-col items-center justify-center text-center
    group hover:bg-white/15 hover:border-white/20
    transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg
    w-full 
    md:w-[calc(50%-1rem)] // 1rem for gap-x-8
    lg:w-[calc(50%-1.5rem)] // 1.5rem for gap-x-12
    min-w-0 
    overflow-hidden 
    box-border 
    relative z-10 
  `;

  // Define a max-height for paragraph text to prevent shifts due to font loading/wrapping
  // هذه القيم تقريبية ويجب تعديلها لتناسب محتواك بالضبط
  const pMaxHeightClasses = "max-h-[30px] sm:max-h-[35px] md:max-h-[40px] overflow-hidden";


  return (
    <div className={`
      flex flex-col items-center justify-center 
      p-4 md:p-8 lg:p-12 // Padding for the section itself
      max-w-6xl mx-auto h-full text-center 
      transition-all duration-700 ease-out
      ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
    `}>
      {/* Main Card Container (The "Big Card") */}
      <div 
        className="
          bg-black/60 backdrop-blur-lg rounded-3xl
          border-t border-r border-l border-white/20
          p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 
          shadow-2xl relative w-full
          flex flex-col items-center // Keep items-center for horizontal alignment of content
          justify-start // Changed to justify-start for proper scroll behavior
          transform transition-transform duration-300 ease-in-out hover:scale-[1.005]
          
          // Applying the same scrollbar classes as in Services.jsx
          overflow-y-auto custom-scrollbar overflow-x-hidden 
        " 
        style={{
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), 0 0 80px rgba(99, 102, 241, 0.15)',
          // Applying the same max-h calculation as in Services.jsx
          maxHeight: 'min(calc(100vh - 180px), 850px)', // Added 850px as upper limit to prevent excessive height on very large screens
          minHeight: 'min(500px, 70vh)' 
        }}
      >
        {/* Decorative Gradient Overlay */}
        <div className="absolute inset-0 z-0 opacity-20" style={{
          background: `radial-gradient(circle at 15% 25%, rgba(99,102,241,0.25) 0%, transparent 60%),
                       radial-gradient(circle at 85% 75%, rgba(139,92,246,0.25) 0%, transparent 60%)`
        }}></div>

        {/* Content Wrapper inside the Big Card (now flex-col for its children) */}
        <div className="relative z-10 w-full flex flex-col items-center"> 
          <h1 className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 relative z-10
            bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent
            tracking-tight
          ">
            Contact Me
          </h1>

          <p className="
            text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed
            text-gray-300 mb-8 relative z-10 max-w-3xl mx-auto
          ">
            Feel free to reach out directly through email, connect on professional networks, or send a quick message.
          </p>

          {/* Contact Methods Flex Container for "Small Cards" */}
          <div className="
            flex flex-wrap justify-center 
            gap-y-6 gap-x-4 
            md:gap-x-8 md:gap-y-8 
            lg:gap-x-12 lg:gap-y-10 
            w-full 
            mx-auto max-w-3xl 
          "> 
            {/* Email Card */}
            <a 
              href="mailto:haitembelaib@gmail.com"
              className={commonCardClasses + ' animate-fade-in-up animation-delay-100'} 
            >
              <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 mb-3 group-hover:text-blue-300 transition-colors" />
              <p className="
                text-sm sm:text-base 
                text-white font-semibold mb-1
              ">Email Me</p>
              <p className={`
                text-xs sm:text-sm text-gray-300 
                break-words 
                min-w-0 
                px-1 
                max-w-full 
                text-balance 
                ${pMaxHeightClasses} // <<<<< إضافة: لتحديد أقصى ارتفاع للنص
              `}>haitembelaib@gmail.com</p>
            </a>

            {/* LinkedIn Card */}
            <a 
              href="https://www.linkedin.com/in/haitem-belaib-61b621353" 
              target="_blank" 
              rel="noopener noreferrer"
              className={commonCardClasses + ' animate-fade-in-up animation-delay-200'} 
            >
              <Linkedin className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-400 mb-3 group-hover:text-indigo-300 transition-colors" />
              <p className="
                text-sm sm:text-base 
                text-white font-semibold mb-1
              ">Connect on LinkedIn</p>
              <p className={`
                text-xs sm:text-sm text-gray-300 
                break-words
                min-w-0
                px-1
                max-w-full 
                text-balance
                ${pMaxHeightClasses} // <<<<< إضافة: لتحديد أقصى ارتفاع للنص
              `}>Haitem Belaib</p>
            </a>

            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/213562301066" 
              target="_blank" 
              rel="noopener noreferrer"
              className={commonCardClasses + ' animate-fade-in-up animation-delay-300'} 
            >
              <PhoneCall className="w-10 h-10 sm:w-12 sm:h-12 text-green-400 mb-3 group-hover:text-green-300 transition-colors" />
              <p className="
                text-sm sm:text-base 
                text-white font-semibold mb-1
              ">WhatsApp Me</p>
              <p className={`
                text-xs sm:text-sm text-gray-300
                break-words
                min-w-0
                px-1
                max-w-full 
                text-balance
                ${pMaxHeightClasses} // <<<<< إضافة: لتحديد أقصى ارتفاع للنص
              `}>+213 562301066</p>
            </a>

            {/* Location Card */}
            <div 
              className={commonCardClasses + ' animate-fade-in-up animation-delay-400'} 
            >
              <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-red-400 mb-3 group-hover:text-red-300 transition-colors" />
              <p className="
                text-sm sm:text-base 
                text-white font-semibold mb-1
              ">Location</p>
              <p className={`
                text-xs sm:text-sm text-gray-300
                break-words
                min-w-0
                px-1
                max-w-full 
                text-balance
                ${pMaxHeightClasses} // <<<<< إضافة: لتحديد أقصى ارتفاع للنص
              `}>Jijel, Béjaïa, Remote</p> 
            </div>

          </div> {/* End Contact Methods Flex Container */}
        </div> {/* End Content Wrapper */}
      </div> {/* End Main Card Container */}
    </div>
  );
}

export default Contact;
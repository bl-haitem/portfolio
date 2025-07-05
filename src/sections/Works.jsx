import React, { useEffect, useState } from 'react';
import { Github, ExternalLink, Calendar, Users, Award, Link } from 'lucide-react';

// استيراد الصور مباشرة هنا
// هذا هو الأسلوب المفضل في React/Vite/Webpack لضمان مسارات صحيحة ومعالجة الصورة عند البناء
// تأكد من أن المسارات صحيحة بناءً على هيكل مجلدات مشروعك.
// إذا كانت صورك موجودة في مجلد public مباشرة، فإن المسارات './ii.png' ستكون صحيحة،
// ولكن الأفضل هو استيرادها كالتالي لضمان التحسين والتعامل الصحيح مع الـ asset pipeline.
// على سبيل المثال، إذا كانت الصور في 'src/assets/images':
// import RoleCraftImage from '../assets/images/ii.png';
// import WajihniImage from '../assets/images/i3.png';
// import HatomasStoreImage from '../assets/images/i4.png';
// import PortfolioImage from '../assets/images/i5.png';

// بما أنك تستخدم 'public/ii.png' مباشرة، هذا يعني أنها ستكون متاحة على الجذر في النشر النهائي.
// للتعامل مع هذا في التطوير، يمكن استخدام المسار النسبي أو المطلق إذا كان الخادم يدعم ذلك.
// للمساعدة في CLS، يكفي إضافة العرض والارتفاع.

function Works() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Define values for max-h calculation based on your other sections
  // Adjust these values to match your actual Navbar, Header/Hero section heights, and section vertical padding.
  const NAVBAR_HEIGHT_PX = 72; // Example: Your Navbar height
  const HEADER_HEIGHT_PX = 0; // Example: If you have no fixed header above this section, set to 0. Otherwise, provide its height.
  const SECTION_VERTICAL_PADDING_PX = (4 * 16) * 2; // p-4 (16px) on top and bottom of the main section div

  // Your Latest Projects Data
  const latestProjects = [
    {
      id: 1,
      title: "RoleCraft",
      description: "A website to help teams define member roles in hackathons.",
      image: "ii.png", // <<< تم التعديل: إزالة 'public/' إذا كنت تستخدمها مباشرة من جذر النشر
      // لتجنب المشاكل في بيئات التطوير/البناء، الأفضل هو استيرادها كما في التعليقات أعلاه.
      // لكن لأجل CLS، التركيز على width/height.
      imageWidth: 600, // <<<<<<< إضافة مهمة لتحسين CLS >>>>>>>
      imageHeight: 360, // <<<<<<< إضافة مهمة لتحسين CLS >>>>>>>
      // *** هام: قم بتعديل هذه القيم لتناسب الأبعاد الفعلية لصورك! ***
      // هذه القيم (600x360) هي مجرد مثال لنسبة عرض إلى ارتفاع 16:9 شائعة.
      // إذا كانت صورك لها نسبة عرض إلى ارتفاع مختلفة (مثلاً 4:3 أو 1:1)، قم بتعديلها.
      githubLink: null,
      liveLink: "https://rolecraft.vercel.app/",
    },
    {
      id: 2,
      title: "Wajihni (Bac Orientation)",
      description: "A platform to help Algerian high school students choose their university specialization based on their abilities and interests.",
      image: "i3.png", // <<< تم التعديل
      imageWidth: 600, // <<<<<<< إضافة مهمة لتحسين CLS >>>>>>>
      imageHeight: 360, // <<<<<<< إضافة مهمة لتحسين CLS >>>>>>>
      githubLink: null,
      liveLink: "https://bac-orientation.vercel.app/",
    },
    {
      id: 3,
      title: "HATOMAS STORE",
      description: "An e-commerce website with an admin dashboard.",
      image: "i4.png", // <<< تم التعديل
      imageWidth: 600, // <<<<<<< إضافة مهمة لتحسين CLS >>>>>>>
      imageHeight: 360, // <<<<<<< إضافة مهمة لتحسين CLS >>>>>>>
      githubLink: null,
      liveLink: "https://haitomas-store.web.app/",
    },
    {
      id: 4,
      title: "Haitem Belaib Portfolio",
      description: "My current personal portfolio website.",
      image: "i5.png", // <<< تم التعديل
      imageWidth: 600, // <<<<<<< إضافة مهمة لتحسين CLS >>>>>>>
      imageHeight: 360, // <<<<<<< إضافة مهمة لتحسين CLS >>>>>>>
      githubLink: null,
      liveLink: "YOUR_PORTFOLIO_LIVE_LINK",
    },
  ];

  // Your Event Participations Data
  const eventParticipations = [
    {
      id: 1,
      name: "NexTrace CTF",
      type: "CTF",
      achievement: "Ranked 13/26 teams – organized by Nexus Club.",
      link: null,
    },
    {
      id: 2,
      name: "DevClash",
      type: "Coding Event",
      achievement: "Coding event by Nexus Club.",
      link: null,
    },
    {
      id: 3,
      name: "CodeCraft",
      type: "Coding Event",
      achievement: "Was part of the organizing team at Bytecraft.",
      link: null,
    },
    {
      id: 4,
      name: (
        <>
          HACKINI CTF – with{" "}
          <a
            href="https://www.axmed.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline inline-flex items-center gap-1 text-sm"
          >
            Ahmed Belmahnouf <ExternalLink className="w-4 h-4 inline" />
          </a>
        </>
      ),
      type: "CTF",
      achievement:
        "Organized by Shellmates Club, where our team ( cogit0wn ) ranked 21st out of 100 participants.",
      link: null,
    },
  ];

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
          flex flex-col items-center justify-start // Changed to justify-start for proper scroll behavior
          transform transition-transform duration-300 ease-in-out hover:scale-[1.005]

          overflow-y-auto custom-scrollbar overflow-x-hidden
        "
        style={{
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), 0 0 80px rgba(99, 102, 241, 0.15)',
          // Consistent maxHeight calculation
          maxHeight: `calc(100vh - ${NAVBAR_HEIGHT_PX}px - ${HEADER_HEIGHT_PX}px - ${SECTION_VERTICAL_PADDING_PX}px)`,
          minHeight: 'min(500px, 70vh)'
        }}
      >
        {/* Decorative Gradient Overlay */}
        <div className="absolute inset-0 z-0 opacity-20" style={{
          background: `radial-gradient(circle at 15% 25%, rgba(99,102,241,0.25) 0%, transparent 60%),
                       radial-gradient(circle at 85% 75%, rgba(139,92,246,0.25) 0%, transparent 60%)`
        }}></div>

        {/* Content Wrapper inside the Big Card */}
        <div className="relative z-10 w-full flex flex-col items-center">

          {/* Sub-section: Latest Projects */}
          <h2 className="
            text-2xl sm:text-3xl md:text-4xl font-bold mb-6 mt-0
            bg-gradient-to-r from-indigo-200 to-white bg-clip-text text-transparent
          ">
            Latest Projects
          </h2>
          <div className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10
            w-full max-w-4xl mx-auto mb-16
          ">
            {latestProjects.map(project => (
              <div
                key={project.id}
                className="
                  bg-white/10 border border-white/15 rounded-xl p-4 sm:p-5 md:p-6 shadow-xl
                  flex flex-col items-start text-left
                  transform hover:scale-[1.02] transition-transform duration-300
                  group
                "
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    width={project.imageWidth} // <<<<<<< إضافة مهمة لتحسين CLS >>>>>>>
                    height={project.imageHeight} // <<<<<<< إضافة مهمة لتحسين CLS >>>>>>>
                    className="rounded-lg mb-4 w-full h-40 object-cover object-center border border-white/5"
                  />
                )}
                <h3 className="text-xl sm:text-2xl font-semibold mb-2
                  bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent
                ">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-3 flex-grow">
                  {project.description}
                </p>
                <div className="flex gap-4 mt-auto pt-2">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group-hover:text-white"
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm">GitHub</span>
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group-hover:text-white"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Sub-section: Event Participations */}
          <h2 className="
            text-2xl sm:text-3xl md:text-4xl font-bold mb-6 mt-10
            bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent
          ">
            Event Participations
          </h2>
          <div className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10
            w-full max-w-4xl mx-auto
          ">
            {eventParticipations.map(event => (
              <div
                key={event.id}
                className="
                  bg-white/10 border border-white/15 rounded-xl p-4 sm:p-5 md:p-6 shadow-xl
                  flex flex-col items-start text-left
                  transform hover:scale-[1.02] transition-transform duration-300
                  group
                "
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-2
                  bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent
                ">
                  {event.name}
                </h3>
                {event.date && (
                  <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base mb-1">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>{event.date}</span>
                  </div>
                )}
                {event.type && (
                  <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base mb-3">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span>{event.type}</span>
                  </div>
                )}
                {event.achievement && (
                  <p className="text-sm sm:text-base text-gray-300 flex-grow mb-4">
                    <Award className="w-4 h-4 inline-block mr-2 text-yellow-400" />
                    {event.achievement}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div> {/* End Content Wrapper */}
      </div> {/* End Main Card Container */}
    </div>
  );
}

export default Works;
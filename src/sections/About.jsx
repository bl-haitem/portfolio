import React, { useEffect, useState } from 'react';
import { Briefcase, Building, Laptop, PenTool, BookOpen, Sparkles, Code, Palette } from 'lucide-react'; 

function About() {
  const [isVisible, setIsVisible] = useState(false);

  const experienceItems = [
    { 
      icon: Laptop, 
      title: 'Full Stack Developer', 
      company: 'Freelance & Personal Projects', 
      years: '2024 - Present', 
      iconColor: 'text-green-300',
      bgGradient: 'from-green-500/20 to-emerald-500/20'
    },
    { 
      icon: Building, 
      title: 'Property Rental Agent', 
      company: 'Self-employed / Freelance', 
      years: 'Jul 2024 - Present', 
      iconColor: 'text-blue-300',
      bgGradient: 'from-blue-500/20 to-cyan-500/20'
    },
    { 
      icon: PenTool, 
      title: 'Graphic & UI/UX Designer', 
      company: 'Freelance / Self-employed', 
      years: 'May 2022 - Present', 
      iconColor: 'text-yellow-300',
      bgGradient: 'from-yellow-500/20 to-orange-500/20'
    },
    { 
      icon: Briefcase, 
      title: 'ByteCraft Communication', 
      company: 'Bytecraft', 
      years: 'Oct 2024 - Present', 
      iconColor: 'text-teal-300',
      bgGradient: 'from-teal-500/20 to-cyan-500/20'
    },
    { 
      icon: BookOpen, 
      title: 'Technical Content Creator', 
      company: { 
        name: 'haitem.tech', 
        url: 'https://www.instagram.com/haitem.tech/' 
      },
      years: 'Oct 2022 - Mar 2023', 
      iconColor: 'text-red-300',
      bgGradient: 'from-red-500/20 to-pink-500/20'
    },
    { 
      icon: BookOpen, 
      title: 'Computer Science Student', 
      company: 'ESTIN', 
      years: '2024 - Present', 
      iconColor: 'text-indigo-300',
      bgGradient: 'from-indigo-500/20 to-purple-500/20'
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-20">
          
          {/* Enhanced Title Section */}
          <div className={`text-center transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="relative group inline-block">
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-white/8 to-white/15 rounded-3xl blur-2xl group-hover:from-white/20 group-hover:via-white/12 group-hover:to-white/20 transition-all duration-1000 animate-pulse" />
              
              <div className="relative bg-gradient-to-br from-black/80 via-black/60 to-black/40 backdrop-blur-2xl px-12 py-8 rounded-3xl border border-gray-700/50 shadow-2xl group-hover:border-white/30 transition-all duration-700 overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-lg" />
                <div className="absolute top-4 right-8 w-1.5 h-1.5 bg-white/40 rounded-full" />
                
                <h1 className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                  <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                    ABOUT ME
                  </span>
                  {/* Enhanced underline */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-white via-white/60 to-white rounded-full animate-pulse" />
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-white/60 via-white/80 to-white/60 rounded-full" />
                </h1>
              </div>
            </div>
          </div>

          {/* Enhanced Description Section */}
          <div className={`transition-all duration-1500 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Main Description Card */}
              <div className="lg:col-span-2 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/4 to-transparent rounded-2xl blur-xl group-hover:from-white/12 group-hover:via-white/6 transition-all duration-700" />
                
                <div className="relative bg-gradient-to-br from-black/70 via-black/50 to-black/30 backdrop-blur-xl p-8 rounded-2xl border border-gray-600/50 shadow-xl group-hover:border-white/20 transition-all duration-700 overflow-hidden h-full">
                  {/* Corner decorations */}
                  <div className="absolute top-0 left-8 w-8 h-0.5 bg-gradient-to-r from-white/60 to-transparent" />
                  <div className="absolute bottom-0 right-8 w-8 h-0.5 bg-gradient-to-l from-white/60 to-transparent" />
                  <div className="absolute top-4 right-4 w-1 h-1 bg-white/50 rounded-full" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/30 rounded-full" />
                  
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <Code className="w-6 h-6 text-white" />
                      <h2 className="text-xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Who I Am</h2>
                    </div>
                    
                    <p className="text-gray-200 leading-relaxed text-lg">
                      I'm a <span className="text-white font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Computer Science student at ESTIN in Béjaïa</span> (École Supérieure en Sciences et Technologies de l'Informatique et du Numérique).
                    </p>
                    <p className="text-gray-200 leading-relaxed text-lg">
                      I've been leading and delivering digital projects — from planning to production — with a strong attention to detail and team dynamics.
                    </p>
                    <p className="text-gray-200 leading-relaxed text-lg">
                      I thrive at the intersection of technology and execution, turning ideas into structured, user-focused solutions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Highlight Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/4 to-transparent rounded-2xl blur-xl group-hover:from-white/12 group-hover:via-white/6 transition-all duration-700" />
                
                <div className="relative bg-gradient-to-br from-black/70 via-black/50 to-black/30 backdrop-blur-xl p-6 rounded-2xl border border-gray-600/50 shadow-xl group-hover:border-white/20 transition-all duration-700 overflow-hidden h-full">
                  {/* Corner decorations */}
                  <div className="absolute top-0 left-6 w-6 h-0.5 bg-gradient-to-r from-white/60 to-transparent" />
                  <div className="absolute bottom-0 right-6 w-6 h-0.5 bg-gradient-to-l from-white/60 to-transparent" />
                  <div className="absolute top-3 right-3 w-1 h-1 bg-white/50 rounded-full" />
                  <div className="absolute bottom-3 left-3 w-1 h-1 bg-white/30 rounded-full" />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-5 h-5 text-white animate-pulse" />
                      <h3 className="text-lg font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Core Skills</h3>
                    </div>
                    
                    <div className="flex-grow space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse" />
                        <span className="text-gray-200 text-sm">Full-Stack Development</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse" />
                        <span className="text-gray-200 text-sm">Project Management</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" />
                        <span className="text-gray-200 text-sm">Communication & Presentation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse" />
                        <span className="text-gray-200 text-sm">Content Creation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-pink-400 rounded-full animate-pulse" />
                        <span className="text-gray-200 text-sm">Problem Solving</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse" />
                        <span className="text-gray-200 text-sm">Embedded Systems Development</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Experience Section */}
          <div className={`transition-all duration-1500 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="text-center mb-12">
              <div className="relative group inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 rounded-2xl blur-xl group-hover:from-white/15 group-hover:via-white/8 group-hover:to-white/15 transition-all duration-700 animate-pulse" />
                
                <div className="relative bg-gradient-to-br from-black/70 via-black/50 to-black/30 backdrop-blur-xl px-8 py-4 rounded-2xl border border-gray-600/50 shadow-xl group-hover:border-white/20 transition-all duration-700">
                  <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                    EXPERIENCE & EDUCATION
                  </h2>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experienceItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative group transition-all duration-500 delay-${index * 100}`}
                >
                  {/* Enhanced glow effect for each card */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700`} />
                  
                  <div className="relative bg-gradient-to-br from-black/80 via-black/60 to-black/40 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50 shadow-xl group-hover:border-white/30 transition-all duration-700 overflow-hidden transform hover:scale-105 hover:-translate-y-2 min-h-[200px] flex flex-col">
                    {/* Animated background elements */}
                    <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-lg animate-pulse" />
                    <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-tr from-white/3 to-transparent rounded-full blur-md" />
                    
                    {/* Corner decorations */}
                    <div className="absolute top-2 left-4 w-6 h-0.5 bg-gradient-to-r from-white/40 to-transparent" />
                    <div className="absolute bottom-2 right-4 w-6 h-0.5 bg-gradient-to-l from-white/40 to-transparent" />
                    <div className="absolute top-3 right-3 w-1 h-1 bg-white/40 rounded-full" />
                    <div className="absolute bottom-3 left-3 w-1 h-1 bg-white/30 rounded-full" />
                    
                    <div className="relative z-10 flex flex-col items-center text-center flex-grow">
                      {/* Icon with enhanced effects */}
                      <div className="relative mb-4 group/icon">
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.bgGradient} rounded-full blur-md group-hover/icon:blur-lg transition-all duration-300`} />
                        <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-3 rounded-full border border-white/20">
                          <item.icon className={`w-8 h-8 ${item.iconColor} drop-shadow-lg`} />
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-300 mb-2 leading-snug">
                        {typeof item.company === 'string' ? (
                          item.company
                        ) : (
                          <a
                            href={item.company.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors"
                          >
                            {item.company.name}
                          </a>
                        )}
                      </p>
                      <div className="mt-auto">
                        <span className="text-xs bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent font-medium px-3 py-1 rounded-full border border-white/20 bg-white/5">
                          {item.years}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

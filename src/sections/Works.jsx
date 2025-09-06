import React, { useEffect, useState } from 'react';
import { Github, ExternalLink, Calendar, Users, Award, Link, Folder, Trophy, Code2, Star } from 'lucide-react';

function Works() {
  const [isVisible, setIsVisible] = useState(false);

  // Your Latest Projects Data
  const latestProjects = [
    {
      id: 1,
      title: "RoleCraft",
      description: "A website to help teams define member roles in hackathons.",
      image: "ii.png",
      imageWidth: 600,
      imageHeight: 360,
      githubLink: null,
      liveLink: "https://rolecraft.vercel.app/",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Wajihni (Bac Orientation)",
      description: "A platform to help Algerian high school students choose their university specialization based on their abilities and interests.",
      image: "i3.png",
      imageWidth: 600,
      imageHeight: 360,
      githubLink: null,
      liveLink: "https://bac-orientation.vercel.app/",
      category: "Educational Platform",
    },
    {
      id: 3,
      title: "HATOMAS STORE",
      description: "An e-commerce website with an admin dashboard.",
      image: "i4.png",
      imageWidth: 600,
      imageHeight: 360,
      githubLink: null,
      liveLink: "https://haitomas-store.web.app/",
      category: "E-commerce",
    },
    {
      id: 4,
      title: "Haitem Belaib Portfolio",
      description: "My current personal portfolio website.",
      image: "https://h.top4top.io/p_3536bxzkw1.png",
      imageWidth: 600,
      imageHeight: 360,
      githubLink: null,
      liveLink: "YOUR_PORTFOLIO_LIVE_LINK",
      category: "Portfolio",
    },
    {
      id: 5,
      title: "AquaGuard",
      description: "Challenge in junction Hackathon",
      image: "s.jpg",
      imageWidth: 600,
      imageHeight: 360,
      githubLink: null,
      liveLink: "https://aquaguard-alpha.vercel.app/",
      category: "Hackathon",
    },
    {
      id: 6,
      title: "IDC",
      description: "This project combines an Arduino-based ultrasonic distance sensor system with a real-time web interface built using modern frontend technologies. It detects and reports intrusions dynamically.",
      image: "n.png",
      imageWidth: 600,
      imageHeight: 360,
      githubLink: null,
      liveLink: "https://ids-bl-haitems-projects.vercel.app/",
      category: "IoT Security",
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
      icon: "🔒",
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      id: 2,
      name: "DevClash",
      type: "Coding Event",
      achievement: "Coding event by Nexus Club.",
      link: null,
      icon: "💻",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 3,
      name: "CodeCraft",
      type: "Coding Event",
      achievement: "Was part of the organizing team at Bytecraft.",
      link: null,
      icon: "🛠️",
      color: "from-green-500/20 to-emerald-500/20"
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
      icon: "🏆",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 5,
      name: "junction x Algiers",
      type: "Hackathon",
      achievement: "Hackathon by club CELEC",
      link: null,
      icon: "🚀",
      color: "from-yellow-500/20 to-orange-500/20"
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
        <div className="space-y-16">
          
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
                    MY WORKS
                  </span>
                  {/* Enhanced underline */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-white via-white/60 to-white rounded-full animate-pulse" />
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-white/60 via-white/80 to-white/60 rounded-full" />
                </h1>
              </div>
            </div>
          </div>

          {/* Projects and Events Grid */}
          <div className={`transition-all duration-1500 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Projects Section */}
              <div className="space-y-8">
                <div className="text-center lg:text-left">
                  <div className="relative group inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-indigo-500/5 to-indigo-500/10 rounded-2xl blur-xl group-hover:from-indigo-500/15 group-hover:via-indigo-500/8 group-hover:to-indigo-500/15 transition-all duration-700 animate-pulse" />
                    
                    <div className="relative bg-gradient-to-br from-black/70 via-black/50 to-black/30 backdrop-blur-xl px-8 py-4 rounded-2xl border border-gray-600/50 shadow-xl group-hover:border-white/20 transition-all duration-700">
                      <div className="flex items-center gap-3">
                        <Folder className="w-6 h-6 text-indigo-300" />
                        <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
                          PROJECTS
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {[...latestProjects].reverse().map((project, index) => (
                    <div 
                      key={project.id}
                      className={`relative group transition-all duration-500 delay-${index * 100}`}
                    >
                      {/* Enhanced glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                      
                      <div className="relative bg-gradient-to-br from-black/80 via-black/60 to-black/40 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50 shadow-xl group-hover:border-white/30 transition-all duration-700 overflow-hidden transform hover:scale-105 hover:-translate-y-2">
                        {/* Animated background elements */}
                        <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-lg animate-pulse" />
                        <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-tr from-white/3 to-transparent rounded-full blur-md" />
                        
                        {/* Corner decorations */}
                        <div className="absolute top-2 left-6 w-8 h-0.5 bg-gradient-to-r from-white/40 to-transparent" />
                        <div className="absolute bottom-2 right-6 w-8 h-0.5 bg-gradient-to-l from-white/40 to-transparent" />
                        <div className="absolute top-4 right-4 w-1 h-1 bg-white/40 rounded-full" />
                        <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/30 rounded-full" />
                        
                        <div className="relative z-10">
                          {project.image && (
                            <div className="relative mb-4 overflow-hidden rounded-lg">
                              <img
                                src={project.image}
                                alt={project.title}
                                width={project.imageWidth}
                                height={project.imageHeight}
                                className="w-full h-48 object-cover object-center border border-white/10 group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                              
                              {/* Category badge */}
                              <div className="absolute top-3 left-3">
                                <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-xl rounded-full border border-white/20 text-white">
                                  {project.category}
                                </span>
                              </div>
                            </div>
                          )}
                          
                          <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                            {project.title}
                          </h3>
                          
                          <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                            {project.description}
                          </p>
                          
                          <div className="flex gap-4 pt-2 border-t border-white/10">
                            {project.githubLink && (
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                              >
                                <Github className="w-4 h-4" />
                                GitHub
                              </a>
                            )}
                            {project.liveLink && (
                              <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                              >
                                <ExternalLink className="w-4 h-4" />
                                Live Demo
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Events Section */}
              <div className="space-y-8">
                <div className="text-center lg:text-left">
                  <div className="relative group inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-purple-500/10 rounded-2xl blur-xl group-hover:from-purple-500/15 group-hover:via-purple-500/8 group-hover:to-purple-500/15 transition-all duration-700 animate-pulse" />
                    
                    <div className="relative bg-gradient-to-br from-black/70 via-black/50 to-black/30 backdrop-blur-xl px-8 py-4 rounded-2xl border border-gray-600/50 shadow-xl group-hover:border-white/20 transition-all duration-700">
                      <div className="flex items-center gap-3">
                        <Trophy className="w-6 h-6 text-purple-300" />
                        <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                          EVENTS
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {eventParticipations.map((event, index) => (
                    <div 
                      key={event.id}
                      className={`relative group transition-all duration-500 delay-${index * 100}`}
                    >
                      {/* Enhanced glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${event.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700`} />
                      
                      <div className="relative bg-gradient-to-br from-black/80 via-black/60 to-black/40 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50 shadow-xl group-hover:border-white/30 transition-all duration-700 overflow-hidden transform hover:scale-105 hover:-translate-y-2">
                        {/* Animated background elements */}
                        <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-lg animate-pulse" />
                        <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-tr from-white/3 to-transparent rounded-full blur-md" />
                        
                        {/* Corner decorations */}
                        <div className="absolute top-2 left-6 w-8 h-0.5 bg-gradient-to-r from-white/40 to-transparent" />
                        <div className="absolute bottom-2 right-6 w-8 h-0.5 bg-gradient-to-l from-white/40 to-transparent" />
                        <div className="absolute top-4 right-4 w-1 h-1 bg-white/40 rounded-full" />
                        <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/30 rounded-full" />
                        
                        <div className="relative z-10">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="text-2xl flex-shrink-0 mt-1">
                              {event.icon}
                            </div>
                            <div className="flex-grow">
                              <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                                {event.name}
                              </h3>
                              
                              <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                                <Users className="w-4 h-4 text-gray-500" />
                                <span>{event.type}</span>
                              </div>
                            </div>
                          </div>
                          
                          {event.achievement && (
                            <div className="flex items-start gap-2 p-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20">
                              <Award className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                              <p className="text-sm text-gray-300 leading-relaxed">
                                {event.achievement}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Custom Message Section */}
          <div className={`text-center transition-all duration-1500 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/8 via-white/12 to-white/8 rounded-3xl blur-2xl group-hover:from-white/12 group-hover:via-white/16 transition-all duration-1000"></div>
              
              <div className="relative bg-gradient-to-br from-black/70 via-black/50 to-black/30 backdrop-blur-xl p-12 rounded-3xl border border-gray-600/50 shadow-xl group-hover:border-white/20 transition-all duration-700 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl animate-pulse" />
                <div className="absolute -bottom-8 -left-8 w-20 h-20 border-2 border-white/20 rounded-full animate-spin" style={{animationDuration: '15s'}} />
                
                <div className="relative z-10">

                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
                    <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                      + A lot of projects and participations
                    </span>
                  </h2>
                  
                  <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                    Always working on new challenges, learning cutting-edge technologies, 
                    and contributing to the developer community through various projects and events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;

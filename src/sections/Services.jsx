import React, { useEffect, useState } from 'react';
import { Code, LayoutDashboard, Users, Sparkles } from 'lucide-react'; 

function Services() {
  const [isVisible, setIsVisible] = useState(false);

  const servicesData = [
    {
      icon: Code,
      title: 'Full-Stack Web Development',
      description: 'I build **high-performance, user-centric web applications** from concept to deployment. I deliver scalable, secure, and seamless digital experiences tailored to your unique business needs.',
      iconColor: 'text-indigo-300',
      bgGradient: 'from-indigo-500/20 to-blue-500/20',
      iconBg: 'bg-indigo-500/30',
      titleGradient: 'from-white to-indigo-100'
    },
    {
      icon: LayoutDashboard,
      title: 'Project & Digital Strategy',
      description: 'I manage digital projects end-to-end — from strategic planning and inception to execution and delivery. My expertise includes digital strategy, team leadership, risk management, and business model development, ensuring impactful and sustainable digital solutions.',
      iconColor: 'text-purple-300',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
      iconBg: 'bg-purple-500/30',
      titleGradient: 'from-white to-purple-100'
    },
    {
      icon: Users,
      title: 'Community Management',
      description: 'I create and nurture **engaging digital communities** that foster meaningful connections. Through strategic **content creation, audience engagement, and brand building**, I help businesses develop loyal customer relationships and drive organic growth.',
      iconColor: 'text-green-300',
      bgGradient: 'from-green-500/20 to-emerald-500/20',
      iconBg: 'bg-green-500/30',
      titleGradient: 'from-white to-green-100'
    }
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
                    MY SERVICES
                  </span>
                  {/* Enhanced underline */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-white via-white/60 to-white rounded-full animate-pulse" />
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-white/60 via-white/80 to-white/60 rounded-full" />
                </h1>
              </div>
            </div>
          </div>

          {/* Enhanced Subtitle */}
          <div className={`text-center transition-all duration-1500 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="relative group max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/4 to-transparent rounded-2xl blur-xl group-hover:from-white/12 group-hover:via-white/6 transition-all duration-700" />
              
              <div className="relative bg-gradient-to-br from-black/70 via-black/50 to-black/30 backdrop-blur-xl p-6 rounded-2xl border border-gray-600/50 shadow-xl group-hover:border-white/20 transition-all duration-700 overflow-hidden">
                {/* Corner decorations */}
                <div className="absolute top-0 left-8 w-8 h-0.5 bg-gradient-to-r from-white/60 to-transparent" />
                <div className="absolute bottom-0 right-8 w-8 h-0.5 bg-gradient-to-l from-white/60 to-transparent" />
                <div className="absolute top-4 right-4 w-1 h-1 bg-white/50 rounded-full" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/30 rounded-full" />
                
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Sparkles className="w-6 h-6 text-white animate-pulse" />
                  <h2 className="text-xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">What I Offer</h2>
                </div>
                
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed relative z-10">
                  I offer comprehensive digital solutions, from robust development to strategic execution and engaging content.
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Services Grid */}
          <div className={`transition-all duration-1500 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                <div 
                  key={index}
                  className={`relative group transition-all duration-500 delay-${index * 200}`}
                >
                  {/* Enhanced glow effect for each card */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700`} />
                  
                  <div className="relative bg-gradient-to-br from-black/80 via-black/60 to-black/40 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 shadow-xl group-hover:border-white/30 transition-all duration-700 overflow-hidden transform hover:scale-105 hover:-translate-y-2 min-h-[400px] flex flex-col">
                    {/* Animated background elements */}
                    <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-lg animate-pulse" />
                    <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-tr from-white/3 to-transparent rounded-full blur-md" />
                    
                    {/* Corner decorations */}
                    <div className="absolute top-2 left-6 w-8 h-0.5 bg-gradient-to-r from-white/40 to-transparent" />
                    <div className="absolute bottom-2 right-6 w-8 h-0.5 bg-gradient-to-l from-white/40 to-transparent" />
                    <div className="absolute top-4 right-4 w-1 h-1 bg-white/40 rounded-full" />
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/30 rounded-full" />
                    
                    <div className="relative z-10 flex flex-col items-center text-center h-full">
                      {/* Icon with enhanced effects */}
                      <div className="relative mb-6 group/icon">
                        <div className={`absolute inset-0 bg-gradient-to-r ${service.bgGradient} rounded-full blur-md group-hover/icon:blur-lg transition-all duration-300`} />
                        <div className={`relative ${service.iconBg} p-4 rounded-full border border-white/20`}>
                          <service.icon className={`w-10 h-10 ${service.iconColor} drop-shadow-lg`} />
                        </div>
                      </div>
                      
                      <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${service.titleGradient} bg-clip-text text-transparent leading-tight`}>
                        {service.title}
                      </h3>
                      
                      <div className="flex-grow flex items-center">
                        <p className="text-gray-200 leading-relaxed text-base">
                          {service.description.split('**').map((part, i) => 
                            i % 2 === 1 ? (
                              <span key={i} className="text-white font-semibold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                                {part}
                              </span>
                            ) : (
                              part
                            )
                          )}
                        </p>
                      </div>

                      {/* Service highlight */}
                      <div className="mt-6 pt-4 border-t border-white/10 w-full">
                        <div className="flex items-center justify-center gap-2">
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.bgGradient.replace('/20', '/60')} rounded-full animate-pulse`} />
                          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                            {index === 0 ? 'Development' : index === 1 ? 'Strategy' : 'Community'}
                          </span>
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.bgGradient.replace('/20', '/60')} rounded-full animate-pulse`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className={`text-center transition-all duration-1500 delay-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="relative group max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/4 to-transparent rounded-2xl blur-xl group-hover:from-white/12 group-hover:via-white/6 transition-all duration-700" />
              
              <div className="relative bg-gradient-to-br from-black/70 via-black/50 to-black/30 backdrop-blur-xl p-6 rounded-2xl border border-gray-600/50 shadow-xl group-hover:border-white/20 transition-all duration-700 overflow-hidden">
                {/* Corner decorations */}
                <div className="absolute top-4 right-4 w-1 h-1 bg-white/40 rounded-full" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/30 rounded-full" />
                
                <div className="relative z-10">
                  <p className="text-lg text-gray-200 mb-4">
                    Ready to transform your digital presence?
                  </p>
                  <p className="text-white font-semibold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    Let's create something amazing together.
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

export default Services;

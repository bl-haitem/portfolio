import React, { useEffect, useState } from 'react';
import { Mail, Linkedin, PhoneCall, MapPin, Send, Star } from 'lucide-react'; 

function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className={`transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          
          {/* Enhanced Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-3xl blur-3xl"></div>
            
            <div className="relative bg-gradient-to-br from-black/80 via-black/60 to-black/40 backdrop-blur-2xl p-10 rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden">
              {/* Background decorations */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-lg" />
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
                <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                  GET IN
                </span>
                <span className="block bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent relative">
                  TOUCH
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-white via-white/60 to-white rounded-full animate-pulse" />
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Ready to bring your ideas to life? Let's connect and create something 
                <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent font-bold animate-pulse"> extraordinary together</span>.
              </p>
            </div>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            
            {/* Email Card */}
            <div className={`transition-all duration-1500 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <a href="mailto:haitembelaib@gmail.com" className="group block relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent rounded-2xl blur-xl group-hover:from-blue-500/30 group-hover:via-blue-400/15 transition-all duration-700"></div>
                
                <div className="relative bg-gradient-to-br from-black/80 via-black/60 to-black/40 backdrop-blur-2xl p-8 rounded-2xl border border-gray-600/50 shadow-xl group-hover:border-blue-400/30 transition-all duration-700 overflow-hidden h-full">
                  {/* Background elements */}
                  <div className="absolute top-0 left-8 w-8 h-0.5 bg-gradient-to-r from-blue-400/60 to-transparent" />
                  <div className="absolute bottom-0 right-8 w-8 h-0.5 bg-gradient-to-l from-blue-400/60 to-transparent" />
                  <div className="absolute top-4 right-4 w-1 h-1 bg-blue-400/50 rounded-full animate-pulse" />
                  
                  <div className="flex flex-col items-center text-center h-full relative z-10">
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg animate-pulse"></div>
                      <Mail className="w-12 h-12 text-blue-400 relative z-10 group-hover:scale-110 transition-all duration-500" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                      Email Me
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed break-all">
                      haitembelaib@gmail.com
                    </p>
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-blue-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className={`transition-all duration-1500 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <a href="https://www.linkedin.com/in/haitem-belaib-61b621353" target="_blank" rel="noopener noreferrer" className="group block relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-indigo-400/10 to-transparent rounded-2xl blur-xl group-hover:from-indigo-500/30 group-hover:via-indigo-400/15 transition-all duration-700"></div>
                
                <div className="relative bg-gradient-to-br from-black/80 via-black/60 to-black/40 backdrop-blur-2xl p-8 rounded-2xl border border-gray-600/50 shadow-xl group-hover:border-indigo-400/30 transition-all duration-700 overflow-hidden h-full">
                  {/* Background elements */}
                  <div className="absolute top-0 left-8 w-8 h-0.5 bg-gradient-to-r from-indigo-400/60 to-transparent" />
                  <div className="absolute bottom-0 right-8 w-8 h-0.5 bg-gradient-to-l from-indigo-400/60 to-transparent" />
                  <div className="absolute top-4 right-4 w-1 h-1 bg-indigo-400/50 rounded-full animate-pulse" />
                  
                  <div className="flex flex-col items-center text-center h-full relative z-10">
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 bg-indigo-400/20 rounded-full blur-lg animate-pulse"></div>
                      <Linkedin className="w-12 h-12 text-indigo-400 relative z-10 group-hover:scale-110 transition-all duration-500" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-100 transition-colors">
                      LinkedIn
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Connect professionally
                    </p>
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-indigo-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className={`transition-all duration-1500 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <a href="https://wa.me/213562301066" target="_blank" rel="noopener noreferrer" className="group block relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-green-400/10 to-transparent rounded-2xl blur-xl group-hover:from-green-500/30 group-hover:via-green-400/15 transition-all duration-700"></div>
                
                <div className="relative bg-gradient-to-br from-black/80 via-black/60 to-black/40 backdrop-blur-2xl p-8 rounded-2xl border border-gray-600/50 shadow-xl group-hover:border-green-400/30 transition-all duration-700 overflow-hidden h-full">
                  {/* Background elements */}
                  <div className="absolute top-0 left-8 w-8 h-0.5 bg-gradient-to-r from-green-400/60 to-transparent" />
                  <div className="absolute bottom-0 right-8 w-8 h-0.5 bg-gradient-to-l from-green-400/60 to-transparent" />
                  <div className="absolute top-4 right-4 w-1 h-1 bg-green-400/50 rounded-full animate-pulse" />
                  
                  <div className="flex flex-col items-center text-center h-full relative z-10">
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 bg-green-400/20 rounded-full blur-lg animate-pulse"></div>
                      <PhoneCall className="w-12 h-12 text-green-400 relative z-10 group-hover:scale-110 transition-all duration-500" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-100 transition-colors">
                      WhatsApp
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      +213 562301066
                    </p>
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-green-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </a>
            </div>

            {/* Location Card */}
            <div className={`transition-all duration-1500 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="group block relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-red-400/10 to-transparent rounded-2xl blur-xl group-hover:from-red-500/30 group-hover:via-red-400/15 transition-all duration-700"></div>
                
                <div className="relative bg-gradient-to-br from-black/80 via-black/60 to-black/40 backdrop-blur-2xl p-8 rounded-2xl border border-gray-600/50 shadow-xl group-hover:border-red-400/30 transition-all duration-700 overflow-hidden h-full">
                  {/* Background elements */}
                  <div className="absolute top-0 left-8 w-8 h-0.5 bg-gradient-to-r from-red-400/60 to-transparent" />
                  <div className="absolute bottom-0 right-8 w-8 h-0.5 bg-gradient-to-l from-red-400/60 to-transparent" />
                  <div className="absolute top-4 right-4 w-1 h-1 bg-red-400/50 rounded-full animate-pulse" />
                  
                  <div className="flex flex-col items-center text-center h-full relative z-10">
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 bg-red-400/20 rounded-full blur-lg animate-pulse"></div>
                      <MapPin className="w-12 h-12 text-red-400 relative z-10 group-hover:scale-110 transition-all duration-500" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-100 transition-colors">
                      Location
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Jijel, Béjaïa, Remote
                    </p>
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-red-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className={`transition-all duration-1500 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="relative group text-center">
              <div className="absolute inset-0 bg-gradient-to-r from-white/8 via-white/12 to-white/8 rounded-3xl blur-2xl group-hover:from-white/12 group-hover:via-white/16 transition-all duration-1000"></div>
              
              <div className="relative bg-gradient-to-br from-black/70 via-black/50 to-black/30 backdrop-blur-xl p-12 rounded-3xl border border-gray-600/50 shadow-xl group-hover:border-white/20 transition-all duration-700 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl animate-pulse" />
                <div className="absolute -bottom-8 -left-8 w-20 h-20 border-2 border-white/20 rounded-full animate-spin" style={{animationDuration: '15s'}} />
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 mx-1 animate-pulse fill-yellow-400" style={{animationDelay: `${i * 200}ms`}} />
                    ))}
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Ready to Start Your Project?
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                    I'm always excited to work on new challenges and bring innovative ideas to life. 
                    Let's discuss how we can collaborate to create something amazing.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:haitembelaib@gmail.com"
                      className="group/btn relative overflow-hidden px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-black rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                      <span className="relative z-10 flex items-center gap-3">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    </a>
                    
                    <a
                      href="https://www.linkedin.com/in/haitem-belaib-61b621353"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative overflow-hidden px-8 py-4 border-2 border-white text-white rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 bg-gradient-to-r from-black/90 to-black/70 backdrop-blur-xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                      <span className="relative z-10 flex items-center gap-3">
                        <Linkedin className="w-5 h-5" />
                        Connect
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

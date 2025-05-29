
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Brain, Target, Users } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <section 
      className="overflow-hidden relative bg-gradient-intense" 
      id="hero" 
      style={{
        padding: isMobile ? '60px 12px 40px' : '80px 20px 60px'
      }}
    >
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-mentor-gradient opacity-30 blur-3xl rounded-full"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div 
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-mentor-100 text-mentor-600 border border-mentor-200 mb-3 sm:mb-6 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.1s" }}
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-mentor-500 text-white mr-2">01</span>
              <span>Transformação</span>
            </div>
            
            <h1 
              className="section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.3s" }}
            >
              Mentoria IA: Transforme<br className="hidden sm:inline" />
              Sua Carreira em Tech
            </h1>
            
            <p 
              style={{ animationDelay: "0.5s" }} 
              className="section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-300 font-normal text-base sm:text-lg text-left"
            >
              A mentoria personalizada que acelera seu crescimento profissional com inteligência artificial. Aprenda com especialistas e transforme sua carreira em tecnologia.
            </p>
            
            <div 
              className="flex justify-center sm:justify-start opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.7s" }}
            >
              <a 
                href="#inscricao" 
                className="flex items-center justify-center group w-full sm:w-auto text-center glow-button text-white font-medium py-4 px-8 rounded-full"
              >
                Garantir Minha Vaga
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 sm:mt-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.9s" }}>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-mentor-400">500+</div>
                <div className="text-xs sm:text-sm text-gray-400">Alunos Formados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-mentor-400">95%</div>
                <div className="text-xs sm:text-sm text-gray-400">Taxa de Sucesso</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-mentor-400">12x</div>
                <div className="text-xs sm:text-sm text-gray-400">ROI Médio</div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
            <div className="relative z-10 animate-fade-in" style={{ animationDelay: "0.9s" }}>
              {/* AI/Tech visualization */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl glow-card corner-glow p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-mentor-500/20 rounded-lg p-4 backdrop-blur-sm border-glow edge-light">
                    <Brain className="w-8 h-8 text-mentor-400 mb-2" />
                    <h3 className="text-sm font-semibold text-white">IA Personalizada</h3>
                    <p className="text-xs text-gray-400">Aprendizado adaptativo</p>
                  </div>
                  <div className="bg-mentor-500/20 rounded-lg p-4 backdrop-blur-sm border-glow edge-light">
                    <Target className="w-8 h-8 text-mentor-400 mb-2" />
                    <h3 className="text-sm font-semibold text-white">Foco em Resultados</h3>
                    <p className="text-xs text-gray-400">Objetivos claros</p>
                  </div>
                </div>
                <div className="bg-mentor-500/20 rounded-lg p-4 backdrop-blur-sm border-glow edge-light">
                  <Users className="w-8 h-8 text-mentor-400 mb-2" />
                  <h3 className="text-sm font-semibold text-white">Mentoria 1:1</h3>
                  <p className="text-xs text-gray-400">Acompanhamento personalizado com especialistas</p>
                </div>
                
                {/* Animated elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-mentor-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-mentor-300 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                <div className="absolute top-1/2 right-8 w-1 h-1 bg-mentor-200 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-mentor-100/10 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </section>
  );
};

export default Hero;

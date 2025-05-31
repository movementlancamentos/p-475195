import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [workingImagePath, setWorkingImagePath] = useState<string>('');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Test multiple image paths with the new astronaut image as first priority
    const imagesToTest = [
      '/lovable-uploads/91d75fbd-b67f-4c9c-9f5c-2cacc0cbe70e.png', // New astronaut image
      '/astronaut-bg.png', // Existing astronaut image
      '/hero-image.jpg', // Existing hero image
      '/lovable-uploads/140f197a-0ed6-497b-b1ca-db1955d48f3d.png', // Previous uploads
      '/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png',
      '/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png'
    ];
    
    const testImage = (path: string, index: number) => {
      return new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          console.log(`✅ Image ${index + 1} loaded successfully: ${path}`);
          resolve(path);
        };
        img.onerror = () => {
          console.log(`❌ Image ${index + 1} failed to load: ${path}`);
          reject(path);
        };
        img.src = path;
      });
    };
    
    // Test images sequentially and use the first one that works
    const findWorkingImage = async () => {
      for (let i = 0; i < imagesToTest.length; i++) {
        try {
          const workingPath = await testImage(imagesToTest[i], i);
          console.log(`🎉 Using working image: ${workingPath}`);
          setWorkingImagePath(workingPath);
          return;
        } catch (error) {
          // Continue to next image
        }
      }
      console.log('⚠️ No background images found, using gradient fallback');
      setWorkingImagePath(''); // Will use gradient fallback
    };
    
    findWorkingImage();
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Determine background style based on what image is available
  const getBackgroundStyle = () => {
    const baseStyle = {
      padding: isMobile ? '60px 12px 40px' : '80px 20px 60px',
    };

    if (workingImagePath) {
      // Use individual CSS properties to avoid conflicts
      return {
        ...baseStyle,
        backgroundImage: `url('${workingImagePath}')`,
        backgroundPosition: isMobile ? 'center center' : 'right center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: '#0a0a0a'
      };
    } else {
      // Clean gradient fallback without conflicting properties
      return {
        ...baseStyle,
        background: `
          radial-gradient(ellipse at top, rgba(59, 130, 246, 0.5) 0%, rgba(37, 99, 235, 0.35) 25%, rgba(30, 64, 175, 0.2) 50%, transparent 70%),
          radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.4) 0%, transparent 50%),
          radial-gradient(circle at 20% 80%, rgba(30, 64, 175, 0.3) 0%, transparent 50%),
          #000000
        `
      };
    }
  };
  
  return (
    <section 
      className="overflow-hidden relative" 
      id="hero" 
      style={getBackgroundStyle()}
    >
      {/* Overlay optimized for astronaut image readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/20"></div>
      
      {/* Subtle glow effects */}
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-mentor-gradient opacity-5 blur-3xl rounded-full"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        <div className="flex flex-col items-start max-w-3xl">
          <div className="w-full">
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
              className="section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-300 font-normal text-base sm:text-lg text-left max-w-2xl"
            >
              A mentoria personalizada que acelera seu crescimento profissional com inteligência artificial. Aprenda com especialistas e transforme sua carreira em tecnologia.
            </p>
            
            <div 
              className="flex justify-start opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.7s" }}
            >
              <a 
                href="#inscricao" 
                className="flex items-center justify-center group text-center glow-button text-white font-medium py-4 px-8 rounded-full"
              >
                Garantir Minha Vaga
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 sm:mt-12 opacity-0 animate-fade-in max-w-lg" style={{ animationDelay: "0.9s" }}>
              <div className="text-left">
                <div className="text-2xl sm:text-3xl font-bold text-mentor-400">500+</div>
                <div className="text-xs sm:text-sm text-gray-400">Alunos Formados</div>
              </div>
              <div className="text-left">
                <div className="text-2xl sm:text-3xl font-bold text-mentor-400">95%</div>
                <div className="text-xs sm:text-sm text-gray-400">Taxa de Sucesso</div>
              </div>
              <div className="text-left">
                <div className="text-2xl sm:text-3xl font-bold text-mentor-400">12x</div>
                <div className="text-xs sm:text-sm text-gray-400">ROI Médio</div>
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

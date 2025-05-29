
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Brain, Users, BookOpen, Award, Network, Headphones } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "glow-card corner-glow opacity-0 p-4 sm:p-6 rounded-2xl",
        "lg:hover:bg-gradient-to-br lg:hover:from-gray-800 lg:hover:to-mentor-900/20",
        "transition-all duration-300"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="rounded-full bg-mentor-500/20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-mentor-400 mb-4 sm:mb-5 border-glow edge-light">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">{title}</h3>
      <p className="text-gray-400 text-sm sm:text-base">{description}</p>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-12 sm:py-16 md:py-20 pb-0 relative bg-gradient-blue" id="beneficios" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-mentor-100 text-mentor-600 border border-mentor-200 mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>Benefícios</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            Por que Escolher <br className="hidden sm:block" />
            <span className="text-mentor-400">Nossa Mentoria IA?</span>
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            Desenvolvemos uma metodologia única que combina expertise humana com inteligência artificial para acelerar seu crescimento profissional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <FeatureCard
            icon={<Brain className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Aprendizado Personalizado"
            description="IA que se adapta ao seu ritmo e estilo de aprendizagem, criando um plano de estudos único para você."
            index={0}
          />
          <FeatureCard
            icon={<Users className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Mentoria 1:1"
            description="Sessões individuais com mentores especialistas que acompanham seu progresso de perto."
            index={1}
          />
          <FeatureCard
            icon={<BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Projetos Práticos"
            description="Desenvolva projetos reais para construir um portfólio impressionante que destaque você no mercado."
            index={2}
          />
          <FeatureCard
            icon={<Network className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Network Exclusivo"
            description="Conecte-se com outros profissionais, mentores e recrutadores da nossa comunidade premium."
            index={3}
          />
          <FeatureCard
            icon={<Award className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Certificação Reconhecida"
            description="Receba certificados que são valorizados pelas principais empresas de tecnologia do mercado."
            index={4}
          />
          <FeatureCard
            icon={<Headphones className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Suporte Contínuo"
            description="Acesso 24/7 à nossa comunidade e suporte técnico durante toda sua jornada de aprendizado."
            index={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

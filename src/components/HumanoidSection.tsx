
import React from "react";

const HumanoidSection = () => {
  return (
    <section className="w-full py-6 sm:py-10 bg-black" id="beneficios">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-mentor-100 text-mentor-600 border border-mentor-200">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-mentor-500 text-white mr-2">01</span>
              <span>Metodologia</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-700"></div>
        </div>
        
        {/* Main content */}
        <div className="max-w-5xl pl-4 sm:pl-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-tight mb-8 sm:mb-12 text-white">
            Nossa metodologia combina 
            <span className="text-mentor-400"> inteligência artificial com experiência humana</span> para acelerar seu aprendizado e garantir resultados reais.
          </h2>
          
          {/* Benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50">
              <div className="text-mentor-400 text-2xl mb-3">🎯</div>
              <h3 className="text-white font-semibold mb-2">Aprendizado Personalizado</h3>
              <p className="text-gray-400 text-sm">IA adapta o conteúdo ao seu ritmo e estilo de aprendizagem</p>
            </div>
            
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50">
              <div className="text-mentor-400 text-2xl mb-3">👨‍💻</div>
              <h3 className="text-white font-semibold mb-2">Mentoria 1:1</h3>
              <p className="text-gray-400 text-sm">Sessões individuais com especialistas da área</p>
            </div>
            
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50">
              <div className="text-mentor-400 text-2xl mb-3">💼</div>
              <h3 className="text-white font-semibold mb-2">Projetos Reais</h3>
              <p className="text-gray-400 text-sm">Portfólio com projetos do mercado de trabalho</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanoidSection;

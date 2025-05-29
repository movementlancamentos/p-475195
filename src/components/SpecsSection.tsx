
import React from "react";

const SpecsSection = () => {
  return (
    <section className="w-full py-6 sm:py-10 bg-black" id="programa">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-mentor-100 text-mentor-600 border border-mentor-200">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-mentor-500 text-white mr-2">02</span>
              <span>Programa</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-700"></div>
        </div>
        
        {/* Main content */}
        <div className="max-w-5xl pl-4 sm:pl-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-tight mb-8 sm:mb-12 text-white">
            Um programa completo para transformar sua carreira em tecnologia. 
            <span className="text-mentor-400"> 12 semanas de imersão total</span> com metodologia comprovada e resultados garantidos.
          </h2>
          
          {/* Program structure */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50">
              <div className="text-mentor-400 text-3xl font-bold mb-2">12</div>
              <div className="text-white font-semibold mb-1">Semanas</div>
              <div className="text-gray-400 text-sm">Programa intensivo completo</div>
            </div>
            
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50">
              <div className="text-mentor-400 text-3xl font-bold mb-2">48</div>
              <div className="text-white font-semibold mb-1">Horas de Mentoria</div>
              <div className="text-gray-400 text-sm">Sessões 1:1 personalizadas</div>
            </div>
            
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50">
              <div className="text-mentor-400 text-3xl font-bold mb-2">6</div>
              <div className="text-white font-semibold mb-1">Projetos Práticos</div>
              <div className="text-gray-400 text-sm">Para seu portfólio profissional</div>
            </div>
            
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50">
              <div className="text-mentor-400 text-3xl font-bold mb-2">24/7</div>
              <div className="text-white font-semibold mb-1">Suporte</div>
              <div className="text-gray-400 text-sm">Comunidade sempre ativa</div>
            </div>
            
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50">
              <div className="text-mentor-400 text-3xl font-bold mb-2">∞</div>
              <div className="text-white font-semibold mb-1">Acesso Vitalício</div>
              <div className="text-gray-400 text-sm">Conteúdo sempre atualizado</div>
            </div>
            
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50">
              <div className="text-mentor-400 text-3xl font-bold mb-2">95%</div>
              <div className="text-white font-semibold mb-1">Taxa de Sucesso</div>
              <div className="text-gray-400 text-sm">Resultados comprovados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;

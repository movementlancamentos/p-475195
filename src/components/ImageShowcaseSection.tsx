
import React from "react";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-black" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white mb-3 sm:mb-4">
            Resultados Comprovados
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            Veja como nossos alunos estão transformando suas carreiras com nossa metodologia
            de mentoria personalizada e inteligência artificial.
          </p>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll bg-gray-900/50 border border-gray-700/50">
          <div className="w-full">
            <img 
              src="/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png" 
              alt="Transformação de carreira através da Mentoria IA" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-gray-900/70 p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4 text-white">
              Tecnologia de Ponta para Seu Crescimento
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Utilizamos as mais avançadas tecnologias de IA para personalizar seu aprendizado,
              acelerar seu progresso e garantir que você alcance seus objetivos profissionais
              de forma eficiente e sustentável.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;

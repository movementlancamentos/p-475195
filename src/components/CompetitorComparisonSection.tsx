
import React from "react";
import { Zap, Clock, Target, TrendingUp } from "lucide-react";

const CompetitorComparisonSection = () => {
  const comparisons = [
    {
      icon: Zap,
      advantage: "Fazer 100 roteiros de criativos em 1 hora",
      disadvantage: "Enquanto você demora 1 semana para criar conteúdo",
      color: "from-mentor-600 to-mentor-500"
    },
    {
      icon: Clock,
      advantage: "Criar um exército de Vendas que vende 24/7",
      disadvantage: "Enquanto você dorme, a IA está vendendo",
      color: "from-blue-600 to-blue-500"
    },
    {
      icon: Target,
      advantage: "Fazer uma Análise Cirúrgica de Leads",
      disadvantage: "Sabe exatamente quem vai comprar e quando",
      color: "from-purple-600 to-purple-500"
    },
    {
      icon: TrendingUp,
      advantage: "Escalar Sem precisar aumentar folha salarial",
      disadvantage: "Cresce 10x sem aumentar a equipe em 1 pessoa",
      color: "from-green-600 to-green-500"
    }
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
              Porque enquanto você está lendo isso, seu concorrente está usando IA para:
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comparisons.map((comparison, index) => {
              const IconComponent = comparison.icon;
              return (
                <div 
                  key={index}
                  className="glow-card corner-glow rounded-2xl p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-mentor-400/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${comparison.color} flex items-center justify-center shrink-0`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                        {comparison.advantage}
                      </h3>
                      
                      <div className="border-l-4 border-red-500 pl-4">
                        <p className="text-gray-400 text-sm font-medium">
                          {comparison.disadvantage}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="glow-card corner-glow rounded-2xl p-8 bg-gradient-to-r from-mentor-900/50 to-mentor-800/50 backdrop-blur-sm">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Não Fique Para Trás Nesta Revolução
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Enquanto você hesita, seus concorrentes estão dominando o mercado com IA
              </p>
              <button className="glow-button text-white font-bold py-4 px-8 rounded-full transition-all duration-300">
                Quero Dominar a IA Agora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitorComparisonSection;

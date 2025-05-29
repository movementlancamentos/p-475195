
import React from "react";
import { Target, Zap, DoorOpen, TrendingUp, Clock, Lock, Trophy } from "lucide-react";

const LaunchPhasesSection = () => {
  const phases = [
    {
      number: "01",
      title: "Pré-Lançamento",
      description: "Construindo expectativa e interesse no mercado",
      icon: Target,
      color: "from-mentor-600 to-mentor-500"
    },
    {
      number: "02", 
      title: "Aquecimento",
      description: "Despertando interesse e educando o público",
      icon: Zap,
      color: "from-mentor-500 to-mentor-400"
    },
    {
      number: "03",
      title: "Abertura",
      description: "Primeiras vagas disponíveis para inscrição",
      icon: DoorOpen,
      color: "from-mentor-400 to-mentor-300"
    },
    {
      number: "04",
      title: "Momentum",
      description: "Acelerando as inscrições com prova social",
      icon: TrendingUp,
      color: "from-green-500 to-green-400"
    },
    {
      number: "05",
      title: "Urgência",
      description: "Últimas oportunidades e escassez real",
      icon: Clock,
      color: "from-yellow-500 to-yellow-400"
    },
    {
      number: "06",
      title: "Fechamento",
      description: "Vagas esgotadas e lista de espera ativa",
      icon: Lock,
      color: "from-red-500 to-red-400"
    },
    {
      number: "07",
      title: "Pós-Lançamento",
      description: "Acompanhamento e preparação próxima turma",
      icon: Trophy,
      color: "from-purple-500 to-purple-400"
    }
  ];

  return (
    <section className="w-full py-16 bg-black" id="fases-lancamento">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-mentor-100 text-mentor-600 border border-mentor-200">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-mentor-500 text-white mr-2">🚀</span>
            <span>Metodologia de Lançamento</span>
          </div>
          <div className="flex-1 h-[1px] bg-gray-700"></div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            As 7 Fases do <span className="text-mentor-400">Lançamento Perfeito</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Nossa estratégia comprovada que já gerou mais de R$ 10 milhões em vendas digitais
          </p>
        </div>

        {/* Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {phases.map((phase, index) => {
            const IconComponent = phase.icon;
            return (
              <div 
                key={index}
                className="group relative bg-gray-900/50 rounded-2xl p-6 border border-gray-700/50 hover:border-mentor-500/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                {/* Phase Number */}
                <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-r from-mentor-600 to-mentor-500 flex items-center justify-center text-white font-bold text-sm">
                  {phase.number}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${phase.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-mentor-400 transition-colors">
                  {phase.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {phase.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-mentor-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-mentor-600/20 to-mentor-400/20 rounded-2xl p-8 border border-mentor-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Quer Aplicar Esta Metodologia no Seu Negócio?
            </h3>
            <p className="text-gray-400 mb-6">
              Aprenda como replicar este sistema que já transformou centenas de carreiras
            </p>
            <button className="bg-mentor-500 hover:bg-mentor-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Quero Aprender Esta Metodologia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchPhasesSection;

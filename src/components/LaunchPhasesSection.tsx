
import React from "react";
import { Target, Zap, DoorOpen, TrendingUp, Clock, Lock, Trophy } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LaunchPhasesSection = () => {
  const phases = [
    {
      number: "01",
      title: "Pré-Lançamento",
      description: "Construindo expectativa e interesse no mercado",
      icon: Target,
      color: "from-mentor-600 to-mentor-500",
      details: [
        "Criação de conteúdo educativo e teaser",
        "Construção da lista de interessados",
        "Validação da proposta de valor",
        "Preparação de materiais de marketing"
      ]
    },
    {
      number: "02", 
      title: "Aquecimento",
      description: "Despertando interesse e educando o público",
      icon: Zap,
      color: "from-mentor-500 to-mentor-400",
      details: [
        "Webinars e lives educativas",
        "Compartilhamento de cases de sucesso",
        "Criação de urgência e escassez",
        "Engajamento nas redes sociais"
      ]
    },
    {
      number: "03",
      title: "Abertura",
      description: "Primeiras vagas disponíveis para inscrição",
      icon: DoorOpen,
      color: "from-mentor-400 to-mentor-300",
      details: [
        "Lançamento oficial das inscrições",
        "Primeiros desconto para early birds",
        "Comunicação massiva para a lista",
        "Ativação de afiliados e parceiros"
      ]
    },
    {
      number: "04",
      title: "Momentum",
      description: "Acelerando as inscrições com prova social",
      icon: TrendingUp,
      color: "from-blue-500 to-blue-400",
      details: [
        "Divulgação de números de vendas",
        "Depoimentos de novos alunos",
        "Campanhas de remarketing intensas",
        "Promoções limitadas por tempo"
      ]
    },
    {
      number: "05",
      title: "Urgência",
      description: "Últimas oportunidades e escassez real",
      icon: Clock,
      color: "from-blue-600 to-blue-500",
      details: [
        "Contagem regressiva para encerramento",
        "Comunicação sobre vagas limitadas",
        "Última chance de desconto",
        "Intensificação da comunicação"
      ]
    },
    {
      number: "06",
      title: "Fechamento",
      description: "Vagas esgotadas e lista de espera ativa",
      icon: Lock,
      color: "from-blue-700 to-blue-600",
      details: [
        "Encerramento oficial das vendas",
        "Abertura da lista de espera",
        "Agradecimento aos novos alunos",
        "Início da preparação da turma"
      ]
    },
    {
      number: "07",
      title: "Pós-Lançamento",
      description: "Acompanhamento e preparação próxima turma",
      icon: Trophy,
      color: "from-blue-800 to-blue-700",
      details: [
        "Onboarding dos novos alunos",
        "Coleta de feedback e melhorias",
        "Análise de métricas e resultados",
        "Planejamento do próximo lançamento"
      ]
    }
  ];

  return (
    <section className="w-full py-16 bg-gradient-intense" id="fases-lancamento">
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

        {/* Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="multiple" className="space-y-4">
            {phases.map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <AccordionItem 
                  key={index} 
                  value={`phase-${index}`}
                  className="glow-card corner-glow rounded-2xl border border-gray-700/50 bg-gray-900/30 backdrop-blur-sm"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center gap-4 w-full">
                      {/* Phase Number */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-mentor-600 to-mentor-500 flex items-center justify-center text-white font-bold text-sm edge-light shrink-0">
                        {phase.number}
                      </div>

                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${phase.color} flex items-center justify-center transition-transform duration-300 border-glow corner-glow shrink-0`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-left">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-mentor-400 transition-colors">
                          {phase.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="px-6 pb-6">
                    <div className="ml-28 space-y-3">
                      <h4 className="text-mentor-400 font-semibold mb-3">Atividades principais:</h4>
                      <ul className="space-y-2">
                        {phase.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-3 text-gray-300">
                            <span className="w-2 h-2 rounded-full bg-mentor-400 mt-2 shrink-0"></span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glow-card corner-glow rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Quer Aplicar Esta Metodologia no Seu Negócio?
            </h3>
            <p className="text-gray-400 mb-6">
              Aprenda como replicar este sistema que já transformou centenas de carreiras
            </p>
            <button className="glow-button text-white font-bold py-4 px-8 rounded-full transition-all duration-300">
              Quero Aprender Esta Metodologia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchPhasesSection;

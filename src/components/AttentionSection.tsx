
import React from "react";
import { AlertTriangle } from "lucide-react";

const AttentionSection = () => {
  return (
    <section className="w-full py-12 bg-black">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="glow-card corner-glow rounded-2xl p-8 border-2 border-red-500/30 bg-gradient-to-r from-red-900/20 via-gray-900/50 to-red-900/20 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
                  ATENÇÃO LANÇADOR:
                </h2>
                
                <p className="text-lg sm:text-xl text-gray-200 mb-4 leading-relaxed">
                  Se você está trabalhando 14 horas por dia, refém do operacional, perdendo vendas porque não consegue produzir conteúdo rápido o suficiente…
                </p>
                
                <p className="text-xl sm:text-2xl font-bold text-red-400">
                  Este é o momento mais importante do seu negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttentionSection;

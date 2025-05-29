
import React, { useState } from "react";
import { toast } from "sonner";

const DetailsSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    toast.success("Inscrição realizada com sucesso! Entraremos em contato em breve.");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      experience: ""
    });
  };

  return (
    <section id="inscricao" className="w-full bg-black py-12">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {/* Left Card - Program Details */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant border border-gray-700/50">
            <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex items-end bg-gradient-to-br from-mentor-900 to-mentor-700">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/20"></div>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold relative z-10">
                Transforme sua carreira
              </h2>
            </div>
            
            <div className="bg-gray-900 p-4 sm:p-8 border border-gray-700">
              <h3 className="text-lg sm:text-xl font-display mb-6 sm:mb-8 text-white">
                O que você vai ganhar com a Mentoria IA
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-mentor-500 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-800/80 backdrop-blur-sm border border-gray-600">
                      <span className="font-semibold text-base text-white">Carreira:</span> <span className="text-gray-300">Transição completa para tech</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-mentor-500 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-800/80 backdrop-blur-sm border border-gray-600">
                      <span className="font-semibold text-base text-white">Salário:</span> <span className="text-gray-300">Aumento médio de 300%</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-mentor-500 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-800/80 backdrop-blur-sm border border-gray-600">
                      <span className="font-semibold text-base text-white">Tempo:</span> <span className="text-gray-300">Resultados em 12 semanas</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-mentor-500 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-800/80 backdrop-blur-sm border border-gray-600">
                      <span className="font-semibold text-base text-white">Garantia:</span> <span className="text-gray-300">30 dias ou dinheiro de volta</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-mentor-500 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-800/80 backdrop-blur-sm border border-gray-600">
                      <span className="font-semibold text-base text-white">Suporte:</span> <span className="text-gray-300">Comunidade vitalícia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Registration Form */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant border border-gray-700/50">
            <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex flex-col items-start bg-gradient-to-br from-mentor-800 to-mentor-600">
              <div className="inline-block px-4 sm:px-6 py-2 border border-white text-white rounded-full text-xs mb-4">
                🔥 Últimas vagas disponíveis
              </div>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold mt-auto">
                Garanta sua vaga agora
              </h2>
            </div>
            
            <div className="bg-gray-900 p-4 sm:p-8 border border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <input 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    placeholder="Nome completo *" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-mentor-500 focus:border-transparent placeholder-gray-400" 
                    required 
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="E-mail *" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-mentor-500 focus:border-transparent placeholder-gray-400" 
                    required 
                  />
                </div>
                
                <div>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="WhatsApp *" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-mentor-500 focus:border-transparent placeholder-gray-400" 
                    required 
                  />
                </div>
                
                <div>
                  <select 
                    name="experience" 
                    value={formData.experience} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-mentor-500 focus:border-transparent"
                  >
                    <option value="">Nível de experiência</option>
                    <option value="iniciante">Iniciante (sem experiência)</option>
                    <option value="basico">Básico (1-2 anos)</option>
                    <option value="intermediario">Intermediário (3-5 anos)</option>
                    <option value="avancado">Avançado (5+ anos)</option>
                  </select>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="w-full px-6 py-4 bg-mentor-500 hover:bg-mentor-600 text-white font-bold rounded-full transition-colors duration-300 text-lg"
                  >
                    🚀 GARANTIR MINHA VAGA
                  </button>
                </div>
                
                <p className="text-xs text-gray-400 text-center">
                  Ao se inscrever, você concorda com nossos termos de uso e política de privacidade.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;

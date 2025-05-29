
import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Você entrou na lista VIP! 🎉",
        description: "Será o primeiro a saber sobre novas turmas e ofertas exclusivas."
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="lista-vip" className="bg-black py-16 border-t border-gray-800">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-mentor-100 text-mentor-600 border border-mentor-200">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-mentor-500 text-white mr-2">04</span>
              <span>Lista VIP</span>
            </div>
          </div>
          
          <h2 className="text-5xl font-display font-bold mb-4 text-white">
            Entre na Lista <span className="text-mentor-400">VIP</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Seja o primeiro a saber sobre novas turmas, desconto exclusivos e conteúdos especiais da Mentoria IA
          </p>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50">
              <div className="text-2xl mb-2">🔥</div>
              <h3 className="text-white font-semibold mb-2">Acesso Antecipado</h3>
              <p className="text-gray-400 text-sm">Garanta sua vaga antes do lançamento público</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50">
              <div className="text-2xl mb-2">💰</div>
              <h3 className="text-white font-semibold mb-2">Desconto Exclusivo</h3>
              <p className="text-gray-400 text-sm">Até 50% OFF para membros VIP</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50">
              <div className="text-2xl mb-2">🎁</div>
              <h3 className="text-white font-semibold mb-2">Bônus Gratuitos</h3>
              <p className="text-gray-400 text-sm">Ebooks, templates e conteúdos exclusivos</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-center justify-center max-w-2xl mx-auto">
            <div className="relative flex-grow w-full md:w-auto">
              <input 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                placeholder="Seu melhor e-mail" 
                className="w-full px-6 py-4 rounded-full border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-mentor-500 placeholder-gray-400" 
                required 
              />
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="bg-mentor-500 hover:bg-mentor-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 whitespace-nowrap"
            >
              {isSubmitting ? "Entrando..." : "🚀 ENTRAR NA LISTA VIP"}
            </button>
          </form>
          
          <p className="text-gray-500 text-sm mt-4">
            📧 Sem spam. Apenas conteúdo de valor e oportunidades exclusivas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

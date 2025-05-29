
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-gray-800 py-12">
      <div className="section-container">
        <div className="text-center">
          <div className="mb-6">
            <div className="text-2xl font-bold text-white mb-2">
              Mentoria <span className="text-mentor-400">IA</span>
            </div>
            <p className="text-gray-400">Transformando carreiras através da tecnologia</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Programa</h3>
              <ul className="space-y-2">
                <li><a href="#beneficios" className="text-gray-400 hover:text-mentor-400 transition-colors">Benefícios</a></li>
                <li><a href="#programa" className="text-gray-400 hover:text-mentor-400 transition-colors">Estrutura</a></li>
                <li><a href="#depoimentos" className="text-gray-400 hover:text-mentor-400 transition-colors">Depoimentos</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2">
                <li><a href="mailto:contato@mentoria-ia.com" className="text-gray-400 hover:text-mentor-400 transition-colors">contato@mentoria-ia.com</a></li>
                <li><a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-mentor-400 transition-colors">WhatsApp</a></li>
                <li><a href="#" className="text-gray-400 hover:text-mentor-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-mentor-400 transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="text-gray-400 hover:text-mentor-400 transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="text-gray-400 hover:text-mentor-400 transition-colors">Política de Reembolso</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-500 text-sm">
              © 2024 Mentoria IA. Todos os direitos reservados. |{" "}
              <span className="text-mentor-400">CNPJ: 00.000.000/0001-00</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

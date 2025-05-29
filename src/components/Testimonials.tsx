
import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  beforeRole: string;
  salary: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "Em 3 meses consegui minha primeira vaga como desenvolvedor júnior. A mentoria personalizada e os projetos práticos foram fundamentais para minha transição de carreira.",
    author: "Ana Silva",
    role: "Desenvolvedora Full Stack na Nubank",
    beforeRole: "Ex-Professora",
    salary: "R$ 8.000/mês",
    gradient: "from-blue-700 via-indigo-800 to-purple-900",
    backgroundImage: "/background-section1.png"
  },
  {
    content: "Saí de um salário de R$ 2.500 para R$ 12.000 em 6 meses. A metodologia com IA realmente acelera o aprendizado e os mentores são excepcionais.",
    author: "Carlos Mendes",
    role: "Engenheiro de Software na iFood",
    beforeRole: "Ex-Vendedor",
    salary: "R$ 12.000/mês",
    gradient: "from-indigo-900 via-purple-800 to-orange-500",
    backgroundImage: "/background-section2.png"
  },
  {
    content: "A transição mais certeira que já fiz na vida. Em 4 meses estava trabalhando remotamente para uma empresa americana. O networking da comunidade é incrível!",
    author: "Mariana Costa",
    role: "Product Manager na Stripe",
    beforeRole: "Ex-Administradora",
    salary: "US$ 8.000/mês",
    gradient: "from-purple-800 via-pink-700 to-red-500",
    backgroundImage: "/background-section3.png"
  },
  {
    content: "Nunca pensei que conseguiria trabalhar com tecnologia. O programa me deu toda a base necessária e hoje sou líder técnico na minha empresa dos sonhos.",
    author: "Rafael Santos",
    role: "Tech Lead na Mercado Livre",
    beforeRole: "Ex-Contador",
    salary: "R$ 18.000/mês",
    gradient: "from-orange-600 via-red-500 to-purple-600",
    backgroundImage: "/background-section1.png"
  }
];

const TestimonialCard = ({ content, author, role, beforeRole, salary, backgroundImage }: TestimonialProps) => {
  return (
    <div 
      className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden border border-gray-700/50" 
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-4 right-4 w-20 h-20 bg-mentor-500/20 rounded-full backdrop-blur-sm z-10"></div>
      
      <div className="relative z-10">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-16">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl text-white">{author}</h4>
          <p className="text-mentor-300 font-medium">{role}</p>
          <p className="text-gray-300 text-sm">{beforeRole}</p>
          <div className="mt-2 inline-block bg-mentor-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            {salary}
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 bg-black relative border-t border-gray-800" id="depoimentos" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-mentor-100 text-mentor-600 border border-mentor-200">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-mentor-500 text-white mr-2">03</span>
            <span>Depoimentos</span>
          </div>
        </div>
        
        <h2 className="text-5xl font-display font-bold mb-4 text-left text-white">
          Histórias de <span className="text-mentor-400">Transformação</span>
        </h2>
        <p className="text-xl text-gray-400 mb-12 text-left max-w-3xl">
          Conheça alguns dos nossos alunos que transformaram suas carreiras e multiplicaram seus salários em poucos meses.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              content={testimonial.content} 
              author={testimonial.author} 
              role={testimonial.role} 
              beforeRole={testimonial.beforeRole}
              salary={testimonial.salary}
              gradient={testimonial.gradient} 
              backgroundImage={testimonial.backgroundImage} 
            />
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 p-8 bg-gray-900/50 rounded-2xl border border-gray-700/50">
          <div className="text-center">
            <div className="text-4xl font-bold text-mentor-400 mb-2">500+</div>
            <div className="text-gray-300">Alunos Transformados</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-mentor-400 mb-2">95%</div>
            <div className="text-gray-300">Taxa de Empregabilidade</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-mentor-400 mb-2">12x</div>
            <div className="text-gray-300">ROI Médio em Salário</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-mentor-400 mb-2">4.9/5</div>
            <div className="text-gray-300">Avaliação dos Alunos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

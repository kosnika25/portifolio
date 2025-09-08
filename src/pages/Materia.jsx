import { FaLaptopCode, FaProjectDiagram, FaCalculator, FaDatabase, FaCode, FaBrain, FaUsers, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../App.css';
import { SiReact } from 'react-icons/si'; // ✅ Adicione esta linha
import React,{useEffect} from 'react';

const Materia = () => {
    useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
  const subjects = [
    {
      id: 1,
      name: "Projeto Integrador",
      description: "Desenvolvimento de projetos multidisciplinares com aplicação prática dos conhecimentos adquiridos.",
      icon: <FaProjectDiagram className="subject-icon" />,
      color: "#4361ee"
    },
    
  
 {
      id: 2,
      name: "Engenharia de Software",
      description: "Metodologias, processos e técnicas para desenvolvimento sistemático de software de qualidade.",
      icon: <FaLaptopCode className="subject-icon" />,
      color: "#3a0ca3"
    },
    {
      id: 3,
      name: "Matemática Discreta",
      description: "Fundamentos matemáticos para ciência da computação, incluindo lógica, teoria dos grafos e combinatória.",
      icon: <FaCalculator className="subject-icon" />,
      color: "#7209b7"
    },
    {
      id: 4,
      name: "Estrutura de Dados",
      description: "Organização, armazenamento e acesso eficiente a dados em sistemas computacionais.",
      icon: <FaDatabase className="subject-icon" />,
      color: "#f72585"
    },
    {
      id: 5,
      name: "Técnicas Avançadas em Programação Web",
      description: "Desenvolvimento de aplicações web modernas com frameworks e tecnologias atuais.",
      icon: <SiReact className="subject-icon" />,
      color: "#4895ef"
    },
    {
      id: 6,
      name: "Técnicas Avançadas de Programação",
      description: "Padrões de projeto, algoritmos avançados e boas práticas de desenvolvimento.",
      icon: <FaCode className="subject-icon" />,
      color: "#4cc9f0"
    },
    {
      id: 7,
      name: "Inteligência Corporativa",
      description: "Uso de dados e análise para suporte à tomada de decisões empresariais.",
      icon: <FaBrain className="subject-icon" />,
      color: "#560bad"
    },
    {
      id: 8,
      name: "Gestão Ágil de Projetos de Software",
      description: "Metodologias ágeis como Scrum e Kanban aplicadas ao desenvolvimento de software.",
      icon: <FaChartLine className="subject-icon" />,
      color: "#b5179e"
    },
    {
      id: 9,
      name: "Interação Humano-Computador",
      description: "Princípios de design de interfaces e experiência do usuário (UX/UI).",
      icon: <FaUsers className="subject-icon" />,
      color: "#7209b7"
    },
    {
      id: 10,
      name: "Banco de Dados",
      description: "Projeto, implementação e administração de sistemas de banco de dados relacionais e não-relacionais.",
      icon: <FaDatabase className="subject-icon" />,
      color: "#4361ee"
    }
  
];
  return (
    <section className="subjects-section">
      <div className="container">
        <h1 className="section-title animate-fade">Matérias do Curso</h1>
        <p className="section-subtitle1 animate-fade delay-1">Conheça as disciplinas que compõem a grade curricular</p>
        
        <div className="subjects-grid">
          {subjects.map((subject, index) => (
            <div 
              className="subject-card animate-fade" 
              style={{ 
                animationDelay: `${index * 0.1}s`,
                borderTop: `4px solid ${subject.color}`
              }}
              key={subject.id}
            >
              <div className="subject-icon-container" style={{ color: subject.color }}>
                {subject.icon}
              </div>
              <h3>{subject.name}</h3>
              <p>{subject.description}</p>
            </div>
            
          ))}
       
        </div>
<div className="btn-container">
  <Link to="/materias" className="btn-M">Ver mais detalhes</Link>
</div>
        
      </div>
      
    </section>
  );
};

export default Materia; 
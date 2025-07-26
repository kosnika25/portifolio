import React, {useEffect} from 'react';
import { FaGithub } from 'react-icons/fa';
import '../App.css';

const Projects = () => {
    useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
  const projects = [
    {
      id: 1,
      title: "Comercio",
      description: "Plataforma de comercio para opções de compras ",
      tags: ["React", "JavaScript", "HTML" , "CSS"],
      image: "projeto1.jpg", // Apenas o nome do arquivo
      github: "https://github.com/kosnika25/projetoboer",
    },
    {
      id: 2,
      title: "Produto Fornecedor",
      description: "Uma plataforma para cadastrar produto e fornecedor",
      tags: ["JavaScript", "C#", "HTML", "CSS"],
      image: "produtoFornecedor.png",
      github: "https://github.com/kosnika25/ProdutoFornecedor",
    },
    // ... outros projetos
  
     {
      id: 3,
      title: "Cursos",
      description: "Site para uma grade curricular de cursos",
      tags: ["HTML", "CSS"],
      image: "cursosTI.png",
      github: "https://github.com/kosnika25/testeProjetoLigia1",
    },
      
      {
      id: 4,
      title: "Caféteria",
      description: "Site para uma caféteria",
      tags: ["HTML", "CSS"],
      image: "imgCafeteria.png",
      github: "https://github.com/kosnika25/cafeteria",
    },

    {
      id: 5,
      title: "Portifólio",
      description: "Site com a grade Curricular e Projetos",
      tags: ["HTML", "CSS"],
      image: "imgPortifolio.png",
      github: "https://github.com/kosnika25/portifolio",
    },

    {
      id: 6,
      title: "Atividade Crud Site",
      description: "Atividade feito em sala de aula com crud para adicionar dentre outros afazeres exemplos cidade,estado e Cliente",
      tags: ["JAVA SCRIPT","C#","HTML", "CSS"],
      image: "projeto4.avif",
      github: "https://github.com/kosnika25/atv1",
    },

      {
      id: 7,
      title: "Vejo o github com outros projetos incluindo logicas e exercicios",
      description: "Exercicios com praticas na linguagem C#",
      tags: ["C#"],
      image: "projeto4.avif",
      github: "https://github.com/kosnika25/linguagemC-",
    },
           {
      id: 8,
      title: "Vejo o github com outros projetos incluindo logicas e exercicios",
      description: "Exercicios com praticas na linguagem C++",
      tags: ["C++"],
      image: "projeto4.avif",
      github: "https://github.com/kosnika25/exercicio-linguagem-C-",
    },
    // ... outros projetos
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <h1 className="animate-fade">Meus Projetos</h1>
        <p className="section-subtitle animate-fade delay-1">Alguns dos trabalhos que desenvolvi durante meu curso na FATEC</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              className="project-card animate-fade" 
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              key={project.id}
            >
              <div className="project-image">
                <img 
                 src={`${process.env.PUBLIC_URL}/img/${project.image}`} 
                  alt={project.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/img/default-project.jpg';
                  }}
                />
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Código
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
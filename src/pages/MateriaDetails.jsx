import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp, FaLaptopCode, FaChartLine, FaDatabase, FaCodeBranch, FaBook, FaUsers, FaBrain, FaProjectDiagram, FaCode, FaSitemap } from 'react-icons/fa';
import '../App.css';
import { SiReact } from 'react-icons/si';
import LinguaInglesa from './LinguaInglesa';

const MateriaDetails = () => {
    useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
  const { materiaId } = useParams();
  const [expandedCard, setExpandedCard] = useState(null);

  const materias = [
    {
      id: 1,
      nome: "Projeto Integrador",
      icone: <FaCodeBranch className="materia-icon" />,
      descricao: "Integração prática de conhecimentos multidisciplinares em projetos reais.",
      detalhes: {
        ementa: "Desenvolvimento de sistemas completos com metodologias ágeis.",
        habilidades: ["Trabalho em equipe", "Gestão de projetos", "Prototipagem"],
        tecnologias: ["React", "Node.js", "MySQL"]
      },
      cor: "#8A2BE2",
      rota: "Projeto-Integrador"
    },
    {
      id: 2,
      nome: "Engenharia de Software",
      icone: <FaLaptopCode className="materia-icon" />,
      descricao: "Fundamentos de engenharia de software e padrões de projeto.",
      detalhes: {
        ementa: "Ciclo de vida de software, UML, arquitetura de sistemas.",
        habilidades: ["Modelagem", "Documentação", "Padrões de projeto"],
        tecnologias: ["Java", "Astah", "C#"]
      },
      cor: "#1E90FF",
      rota: "EngenhariaSoftware"
    },
    {
      id: 3,
      nome: "Língua Inglesa",
      icone: <FaBook className="materia-icon" />,
      descricao: "Compreensão e produção de textos técnicos em inglês voltados à área de tecnologia.",
      detalhes: {
        ementa: "Leitura, interpretação e vocabulário técnico da computação.",
        habilidades: ["Leitura técnica", "Tradução", "Vocabulário específico"],
        tecnologias: ["Textos técnicos", "Plataformas de leitura", "Glossários"]
      },
      cor: "#228B22",
      rota:"LinguaInglesa"
    },
    {
      id: 4,
      nome: "Gestão Ágil de Projetos",
      icone: <FaProjectDiagram className="materia-icon" />,
      descricao: "Aplicação de metodologias ágeis como Scrum e Kanban em projetos de software.",
      detalhes: {
        ementa: "Scrum, Kanban, planejamento ágil e gestão de equipes.",
        habilidades: ["Scrum Master", "Daily Meetings", "Sprint Planning"],
        tecnologias: ["Trello", "Jira", "Scrum Board"]
      },
      cor: "#FF8C00",
      rota: "GestaoAgil"
    },
    {
      id: 5,
      nome: "Inteligência Corporativa",
      icone: <FaBrain className="materia-icon" />,
      descricao: "Uso estratégico de dados para tomada de decisões empresariais.",
      detalhes: {
        ementa: "Business Intelligence, dashboards, análise de dados.",
        habilidades: ["Análise de KPIs", "Relatórios", "Visualização de dados"],
        tecnologias: ["Power BI", "Excel", "SQL"]
      },
      cor: "#800080",
      rota:"InteligenciaCorporativa"
    },
    {
      id: 6,
      nome: "Técnicas Avançadas em Programação Web",
      icone: <SiReact className="materia-icon" />,
      descricao: "Criação de aplicações modernas com frameworks e boas práticas.",
      detalhes: {
        ementa: "React, consumo de APIs, rotas, hooks.",
        habilidades: ["SPA", "Componentização", "Integração com back-end"],
        tecnologias: ["React", "Axios", "React Router"]
      },
      cor: "#4682B4",
      rota:"TecnicasWeb"
    },
    {
      id: 7,
      nome: "Técnicas Avançadas de Programação",
      icone: <FaCode className="materia-icon" />,
      descricao: "Padrões de projeto e técnicas modernas de desenvolvimento.",
      detalhes: {
        ementa: "Design Patterns, testes automatizados, refatoração.",
        habilidades: ["Clean Code", "Refatoração", "Testes"],
        tecnologias: ["Java", "Jest", "Git"]
      },
      cor: "#DC143C",
      rota: "TecnicasAvancadas"
    },
    {
      id: 8,
      nome: "Estruturas de Dados",
      icone: <FaSitemap className="materia-icon" />,
      descricao: "Estudo de listas, pilhas, filas, árvores e algoritmos.",
      detalhes: {
        ementa: "Algoritmos de ordenação, busca, estruturas lineares e não-lineares.",
        habilidades: ["Análise de algoritmos", "Uso eficiente de memória"],
        tecnologias: ["C", "Python", "Visualgo"]
      },
      cor: "#DAA520",
      rota: "EstruturaDados"
    },
    {
      id: 9,
      nome: "Banco de Dados",
      icone: <FaDatabase className="materia-icon" />,
      descricao: "Modelagem, criação e gerenciamento de bases de dados relacionais e não-relacionais.",
      detalhes: {
        ementa: "SQL, NoSQL, modelagem ER, transações.",
        habilidades: ["CRUD", "Normalização", "Modelagem de dados"],
        tecnologias: ["MySQL", "MongoDB", "PostgreSQL"]
      },
      cor: "#4169E1",
      rota: "BancoDados"
    },
    {
      id: 10,
      nome: "Interação Humano-Computador",
      icone: <FaUsers className="materia-icon" />,
      descricao: "Design de interfaces e usabilidade para sistemas interativos.",
      detalhes: {
        ementa: "UX, UI, prototipação, acessibilidade digital.",
        habilidades: ["Design centrado no usuário", "Teste de usabilidade"],
        tecnologias: ["Figma", "Adobe XD", "Heurísticas de Nielsen"]
      },
      cor: "#FF1493",
      rota:"InteracaoHumano"
    }
  ];// Adicione mais matérias conforme necessário


  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const filteredMaterias = materiaId
    ? materias.filter((m) => m.id === parseInt(materiaId))
    : materias;

  return (
    <section className="materias-detail-section">
      <div className="container">
        <h1 className="section-title">
          {materiaId ? 'Detalhes da Matéria' : 'Grade Curricular Completa'}
        </h1>

        <div className="materias-grid">
          {filteredMaterias.length === 0 ? (
            <p style={{ color: 'red', fontWeight: 'bold' }}>Matéria não encontrada.</p>
          ) : (
            filteredMaterias.map((materia) => (
              <div
                key={materia.id}
                className={`materia-card ${expandedCard === materia.id ? 'expanded' : ''}`}
                style={{ borderTop: `4px solid ${materia.cor}` }}
              >
                <div className="materia-header" onClick={() => toggleExpand(materia.id)}>
                  <div className="materia-icon-container" style={{ color: materia.cor }}>
                    {materia.icone}
                  </div>
                  <div className="materia-title">
                    <h3>{materia.nome}</h3>
                    <span className="materia-level" style={{ backgroundColor: materia.cor }}>
                      {materia.nivel}
                    </span>
                  </div>
                  <div className="materia-toggle">
                    {expandedCard === materia.id ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>

                <div className="materia-content">
                  <p>{materia.descricao}</p>

                  {expandedCard === materia.id && (
                    <div className="materia-details">
                      <div className="detail-item">
                        <h4>Ementa:</h4>
                        <p>{materia.detalhes.ementa}</p>
                      </div>

                      <div className="detail-item">
                        <h4>Habilidades Desenvolvidas:</h4>
                        <ul>
                          {materia.detalhes.habilidades.map((hab, idx) => (
                            <li key={idx}>{hab}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="detail-item">
                        <h4>Tecnologias Utilizadas:</h4>
                        <div className="tech-tags">
                          {materia.detalhes.tecnologias.map((tech, idx) => (
                            <span key={idx} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}
                </div>

                {!materiaId && (
                <Link
  to={`/${materia.rota}`}
  className="saiba-mais-btn"
  style={{ backgroundColor: materia.cor }}
>
  Ver Detalhes Completos
</Link>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default MateriaDetails;

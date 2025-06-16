import { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import '../App.css';

const Home = () => {
  useEffect(() => {
    document.title = "Portfólio | Home";
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content animate-fade">
            <h1>
              <Typewriter
                options={{
                  strings: ['Olá, eu sou Karen', 'Estudante da FATEC Jales'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="subtitle delay-1">Desenvolvedora | Analise de Desenvolvimento de Sistemas</p>
            <div className="hero-buttons delay-2">
              <a href="/projects" className="btn">Ver Projetos</a>
              <a href="/contact" className="btn btn-outline">Contato</a>
            </div>
          </div>

        </div>
      </section>

      <section className="skills">
        <div className="container">
          <h2 className="animate-fade">Minhas Habilidades</h2>
          <div className="skills-grid">
            {[
              { name: 'HTML & CSS', icon: '🔷', level: 90 },
              { name: 'JavaScript', icon: '🟨', level: 85 },
              { name: 'React.js', icon: '⚛️', level: 80 },
              { name: 'UI/UX Design', icon: '🎨', level: 75 },
              { name: 'C#', icon: '💠', level: 75 },          // Emoji alternativo para C#
              { name: 'Java', icon: '☕', level: 75 },         // Ícone clássico do Java
              { name: 'C', icon: '🔵', level: 75 }
            ].map((skill, index) => (
              <div className="skill-card animate-fade" style={{ animationDelay: `${index * 0.1 + 0.2}s` }} key={skill.name}>
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <h3>{skill.name}</h3>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                    data-level={skill.level}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
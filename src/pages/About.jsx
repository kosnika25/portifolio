import React, {useEffect} from 'react';

const About = () => {
    useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
  return (
    <div className="container">
      <br></br>
      <br></br>

      <h1>Sobre Mim</h1>
      <br></br>


      <p>Estudante de Analise e Desenvolvimento de Sistemas na FATEC Jales com interesse em entrar no mundo da tecnologia explorar áreas e sempre aprendendo.
        <br></br>E não apenas construo sistemas — transformo ideias em soluções inteligentes.

        Minha missão na tecnologia vai além do desenvolvimento: busco criar experiências que resolvem problemas reais, unem design e funcionalidade, e conectam pessoas ao que realmente importa.

        Em cada projeto, aplico o que aprendo no curso de Análise e Desenvolvimento de Sistemas para entregar código limpo, interfaces intuitivas e resultados consistentes.

        Acredito que tecnologia de verdade é aquela que simplifica, encanta e evolui com o mundo. E é exatamente isso que me move todos os dias.
      </p>
      <section>
        <h2>Formação Acadêmica</h2>
        <br></br>

        <p>EE "Profª Zélia de Lourdes Zaccarelli Lopes” Pontalinda 3º ensino médio técnico (10/02/2021 até (20/12/2024))</p>
        <p>FATEC Jales - [Analise e Desenvolvimento de Sisstemas] (10/02/2025 até 20/12/2026)</p>
      </section>
    </div>
  );
};

export default About;
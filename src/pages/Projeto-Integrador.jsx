import React, {useEffect}from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


const ProjetoIntegrador = () => {
      useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    return (
        <div className="container-pi">
            <br />
            <br />

            <h1 className="titulo-pi"> 📘 Projeto Integrador</h1>
            <br />

            <p className="texto-pi">
                O Projeto Integrador (PI) é uma abordagem acadêmica que busca integrar e aplicar os conhecimentos adquiridos ao longo de um curso ou disciplinas específicas.

                Diferentemente do Trabalho de Conclusão de Curso (TCC), o Projeto Integrador visa promover uma visão holística dos conhecimentos e competências adquiridos, por meio da conexão entre diferentes áreas e disciplinas.

                Neste artigo, exploraremos em detalhes o conceito de PI, destacando seus objetivos e diferenças em relação ao TCC. Além disso, apresentaremos dicas valiosas para a execução bem-sucedida de um Projeto Integrador, desde a escolha do tema até a sua implementação.

                Se você quer expandir suas habilidades acadêmicas e profissionais, continue a leitura e descubra como o PI pode contribuir significativamente para o seu desenvolvimento.
            </p>
            <p className="texto-pi">Destaca pela sua abordagem baseada em situações-problemas, que visam promover a aplicação prática dos conhecimentos teóricos adquiridos durante um curso ou disciplinas específicas.

                Por meio disso, os estudantes são desafiados a analisar, propor soluções e implementar ações concretas para resolver problemas reais ou simulados.

                Outro aspecto fundamental do Projeto Integrador é o desenvolvimento da habilidade de trabalho em grupo.

                Os alunos são estimulados a compartilhar ideias, debater, negociar e buscar consenso para alcançar os objetivos propostos. Essa dinâmica de grupo favorece o desenvolvimento de competências essenciais, como:</p>

            <section className="secao-pi">
                <h4>Habilidades Desenvolvidas:</h4>
                <ul>
                    <li>capacidade de comunicação</li>
                    <li>liderança</li>
                    <li>gestão de conflitos</li>
                    <li>trabalho em equipe</li>
                </ul>
            </section>
            <br></br>
            <br></br>
            <h2>Estrutura e formatação do projeto integrador</h2>
            <p className="texto-pi">A formatação deve seguir as normas da ABNT, com margens, fontes, espaçamento, citações e referências conforme as diretrizes estabelecidas, muito parecido com o TCC. Além de precisar conter elementos pré e pós-textuais, como:</p>
            <section className="secao-pi">
                <h4>Habilidades Desenvolvidas:</h4>
                <ul>
                    <li>capa: apresenta informações como o nome da instituição, título do projeto, nome dos autores e outras informações relevantes;</li>
                    <li>resumo: um breve resumo que apresenta de forma sucinta o objetivo, metodologia e principais resultados;</li>
                    <li>sumário: lista os tópicos e seções do projeto, facilitando a navegação pelo conteúdo;
                    </li>
                    <li>introdução: apresenta o contexto, justificativa e objetivos do PI;
                    </li>
                    <li>revisão bibliográfica: aborda os principais estudos e referências teóricas relacionadas ao tema;
                    </li>
                    <li>metodologia: descreve os procedimentos e métodos utilizados para realizar o projeto, incluindo a coleta de dados, análise e instrumentos utilizados;</li>
                    <li>desenvolvimento: é a parte central do PI, onde são apresentados os resultados da pesquisa, análises, discussões e conclusões;</li>
                    <li>considerações finais: apresenta as principais conclusões, destacando os resultados e contribuições;
                    </li>
                    <li>referências: lista todas as fontes bibliográficas citadas no PI, seguindo as normas da ABNT.
                    </li>

                </ul>
            </section>
        </div>
    );
};

export default ProjetoIntegrador;

import React, {useEffect} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


const GestaoAgil = () => {
      useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    return (
        <div className="container-pi">
            <br />
            <br />

            <h1 className="titulo-pi"> 🧩 Gestão Ágil de Projetos</h1>

            <p className="texto-pi">
Gestão Ágil de Projetos é uma abordagem moderna de gerenciamento que foca na entrega contínua de valor ao cliente, por meio de ciclos curtos (iterações), comunicação constante e adaptação às mudanças. É amplamente utilizada em equipes de desenvolvimento de software.

Diferente das metodologias tradicionais, como o modelo cascata, a gestão ágil valoriza a colaboração entre as partes interessadas e a flexibilidade para ajustes durante o projeto. Scrum, Kanban e XP são exemplos de metodologias ágeis populares. </p>




    <section className="secao-pi">
                <h4>Características da Gestão Ágil de Projetos:
                </h4>
                <ul>
                     <li>Ciclos de desenvolvimento rápidos e focados na entrega de partes funcionais do produto.</li>
                    <li>Daily Scrum, Sprint Planning e Retrospective para acompanhamento e melhoria contínua.</li>
                    <li>Foco em entregar o que é mais importante para o cliente primeiro.</li> 
                    <li>Product Owner, Scrum Master e Equipe de Desenvolvimento, cada um com suas responsabilidades.</li>
                    <li>Capacidade de ajustar o projeto conforme novas necessidades surgem.</li>
                    <li>Auxiliam na visualização do fluxo de tarefas e na organização do time.</li>
               </ul>
            </section>
        </div>
    );
};

export default GestaoAgil;

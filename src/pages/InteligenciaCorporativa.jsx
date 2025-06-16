import React, {useEffect} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


const InteligenciaCorporativa = () => {
      useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    return (
        <div className="container-pi">
            <br />
            <br />

            <h1 className="titulo-pi"> 🧠 Inteligência Corporativa</h1>

            <p className="texto-pi">

Inteligência Corporativa (ou Business Intelligence – BI) é o conjunto de processos, tecnologias e práticas utilizadas pelas empresas para coletar, organizar, analisar e apresentar dados relevantes, com o objetivo de apoiar a tomada de decisões estratégicas.

Ela transforma grandes volumes de dados brutos em informações úteis e acessíveis, permitindo que gestores visualizem tendências, identifiquem oportunidades de negócio, otimizem processos e tomem decisões mais informadas.

O uso de ferramentas como dashboards, relatórios dinâmicos, bancos de dados analíticos e sistemas de apoio à decisão é fundamental nesse processo.
      </p>
        


    <section className="secao-pi">
                <h4>Características Inteligência Corporativa :
                </h4>
                <ul>
                     <li>Conjunto de políticas e práticas que garantem a qualidade, segurança e uso ético dos dados.</li>
                    <li>Relatórios são gerados automaticamente com base em dados atualizados em tempo real.</li>
                    <li>Diferentes perfis de usuários acessam dados de acordo com suas funções e permissões.</li> 
               </ul>
            </section>
        </div>
    );
};

export default InteligenciaCorporativa;

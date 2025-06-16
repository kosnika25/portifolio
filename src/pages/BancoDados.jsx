import React, {useEffect} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


const BancoDados = () => {
      useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    return (
        <div className="container-pi">
            <br />
            <br />

            <h1 className="titulo-pi"> 🗄️ Banco de Dados</h1>

            <p className="texto-pi">

Banco de Dados é um sistema organizado que permite armazenar, gerenciar e recuperar grandes volumes de informações de forma rápida, segura e eficiente. Na computação, os bancos de dados são essenciais para aplicações que precisam lidar com dados estruturados, como sistemas de vendas, sites, aplicativos, ERPs e muito mais.

Eles funcionam por meio de Sistemas Gerenciadores de Banco de Dados (SGBD), como MySQL, PostgreSQL, Oracle e SQL Server, que fornecem ferramentas para manipular os dados por meio da linguagem SQL.
      </p>
        


    <section className="secao-pi">
                <h4>Características de Banco de Dados:
                </h4>
                <ul>
                     <li>Os dados continuam armazenados mesmo após o sistema ser desligado.</li>
                    <li>Regras e permissões garantem que os dados sejam consistentes e protegidos.</li>
                    <li>Linguagem padrão para criar, manipular e consultar dados em tabelas.</li> 
                    <li>Entidades, atributos e relacionamentos definidos através de diagramas (modelo ER).</li>
                    <li>Técnica para organizar os dados, eliminando redundâncias e inconsistências.</li>
                    <li>Garantem que múltiplos usuários possam acessar os dados com integridade simultaneamente.</li>
               </ul>
            </section>
        </div>
    );
};

export default BancoDados;

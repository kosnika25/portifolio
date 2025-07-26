import React, {useEffect} from 'react';
import '../App.css';


const EstruturaDados = () => {
      useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    return (
        <div className="container-pi">
            <br />
            <br />

            <h1 className="titulo-pi"> 🧱 Estrutura de Dados</h1>

            <p className="texto-pi">
Estrutura de Dados é uma área fundamental da computação que trata da organização, gerenciamento e armazenamento de dados de forma eficiente. Estruturas de dados permitem que os algoritmos processem informações rapidamente e com menor uso de recursos.

Saber escolher a estrutura adequada pode melhorar significativamente o desempenho de um sistema, reduzir o consumo de memória e otimizar o tempo de execução dos programas. É um dos pilares para resolver problemas computacionais de forma eficaz.      </p>
        


    <section className="secao-pi">
                <h4>Características da Estrutura de Dados:
                </h4>
                <ul>
                     <li>Cada estrutura possui vantagens e desvantagens quanto ao tempo e espaço de execução.</li>
                    <li>Esconde os detalhes de implementação e permite foco na lógica de uso.</li>
                    <li>Utilizadas em algoritmos de busca, ordenação, sistemas de arquivos, inteligência artificial, compiladores e muito mais.</li> 
               </ul>
            </section>
        </div>
    );
};

export default EstruturaDados;

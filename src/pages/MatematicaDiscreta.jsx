import React, {useEffect} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


const MatematicaDiscreta = () => {
      useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    return (
        <div className="container-pi">
            <br />
            <br />

            <h1 className="titulo-pi">📘 Matemática Discreta na Computação</h1>

            <p className="texto-pi">

                Matemática Discreta é uma área da matemática voltada para o estudo de estruturas que assumem valores
                 distintos e separados, em oposição à matemática contínua. Na computação, ela é fundamental por fornecer
                  as bases teóricas para algoritmos, estruturas de dados, lógica de programação, linguagens formais, criptografia,
                   grafos, entre outros.

                Essa disciplina desenvolve o raciocínio lógico e a capacidade de abstração, essenciais para resolver problemas computacionais
                 e construir soluções eficientes. Além disso, conceitos como conjuntos, funções, relações, proposições lógicas e princípios de
                  contagem estão amplamente presentes no desenvolvimento de softwares e sistemas.
            </p>



            <section className="secao-pi">
                <h4>Características da Matemática Discreta na TI:
                </h4>
                <ul>
                    <li>Base para instruções condicionais, verificações e construção de algoritmos.</li>
                    <li>Usada para organizar dados, modelar bancos de dados e relações entre entidades.</li>
                    <li>Essenciais na modelagem matemática de algoritmos e bancos de dados relacionais.</li>
                    <li>Aplicados em redes de computadores, estruturas de dados, inteligência artificial e algoritmos de busca.</li>
                </ul>
            </section>
        </div>
    );
};

export default MatematicaDiscreta;

import React, { useEffect } from 'react'; 

import '../App.css';


const InteraçãoHumano = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container-pi">
            <br />
            <br />

            <h1 className="titulo-pi">👤 Interação Humano-Computador (IHC)</h1>

            <p className="texto-pi">
Interação Humano-Computador (IHC) é a área da computação que estuda como as pessoas interagem com sistemas computacionais e como projetar interfaces mais intuitivas, acessíveis e eficientes. O objetivo é criar experiências digitais agradáveis e produtivas, focadas nas necessidades e limitações humanas.

A IHC combina conhecimentos de psicologia, design, ergonomia e computação para melhorar a usabilidade e a experiência do usuário (UX). Com o avanço das tecnologias, ela se tornou essencial no desenvolvimento de aplicações móveis, sites, softwares e sistemas embarcados.
      </p>
        


    <section className="secao-pi">
                <h4>Características do Uso da Língua Inglesa na Área de TI:
                </h4>
                <ul>
                     <li>Qualidade da interface em termos de facilidade de uso, aprendizado e eficiência.</li>
                    <li>Metodologia que envolve os usuários durante todo o processo de desenvolvimento.</li>
                    <li>Criação de modelos visuais e testes com usuários para validar soluções.</li> 
                    <li>Conjunto de princípios para avaliar a usabilidade de uma interface.</li>
               </ul>
            </section>
        </div>
    );
};

export default InteraçãoHumano;

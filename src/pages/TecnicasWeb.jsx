import React, {useEffect} from 'react';
import '../App.css';


const TecnicasWeb = () => {
    
    
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    return (
        <div className="container-pi">
            <br />
            <br />

            <h1 className="titulo-pi"> 🌐 Técnicas Avançadas de Programação</h1>

            <p className="texto-pi">
Técnicas Avançadas de Programação Web envolvem a criação de aplicações modernas, rápidas e interativas para a internet. Isso inclui o uso de frameworks, APIs, segurança da informação, renderização dinâmica, integração com bancos de dados e desenvolvimento responsivo.

O foco está na construção de sistemas web robustos e profissionais, que envolvem tanto o front-end quanto o back-end, com boas práticas de usabilidade, escalabilidade e desempenho.</p>



    <section className="secao-pi">
                <h4>Características das Técnicas Avançadas de Programação Web:
                </h4>
                <ul>
                     <li>Facilitam a criação de interfaces dinâmicas e componentes reutilizáveis.</li>
                    <li>Permitem comunicação eficiente entre front-end e back-end.</li>
                    <li>Combina o conhecimento de cliente (HTML/CSS/JS) e servidor (Node.js, Java, PHP, etc.).</li> 
                    <li>Adaptação da interface a diferentes dispositivos e inclusão de todos os usuários.</li>
                    <li>Controle eficiente dos dados da aplicação e navegação entre páginas.</li>
               </ul>
            </section>
        </div>
    );
};

export default TecnicasWeb;

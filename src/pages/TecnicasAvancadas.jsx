import React, {useEffect} from 'react';
import '../App.css';


const TecnicasAvancadas = () => {
      useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    return (
        <div className="container-pi">
            <br />
            <br />

            <h1 className="titulo-pi"> 💻 Técnicas Avançadas de Programação</h1>

            <p className="texto-pi">

Técnicas Avançadas de Programação abordam conceitos que vão além da lógica básica, explorando práticas modernas, eficientes e seguras no desenvolvimento de software. São conhecimentos que ajudam a escrever código mais limpo, reutilizável, modular e fácil de manter.

Essas técnicas envolvem o uso de padrões de projeto (design patterns), programação orientada a objetos, tratamento de erros, testes automatizados, uso de bibliotecas e frameworks, entre outros recursos essenciais em ambientes profissionais.      </p>
        


    <section className="secao-pi">
                <h4>Características das Técnicas Avançadas de Programação:
                </h4>
                <ul>
                     <li>Uso de classes, herança, polimorfismo e encapsulamento.</li>
                    <li>Soluções reutilizáveis para problemas recorrentes no desenvolvimento de software.</li>
                    <li>Garante que o código funcione corretamente por meio de testes unitários e de integração.</li> 
                    <li>Permite capturar e tratar erros de execução com segurança.</li>
                    <li>Melhorar a estrutura do código sem alterar seu comportamento externo.</li>
                    <li>Facilita o desenvolvimento com ferramentas prontas e bem testadas.</li>
               </ul>
            </section>
        </div>
    );
};

export default TecnicasAvancadas;

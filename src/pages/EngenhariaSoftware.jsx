import React, {useEffect} from 'react';
import '../App.css';


const EngenhariaSoftware = () => {
       useEffect(() => {
                window.scrollTo(0, 0);
            }, []);
    return (
        <div className="container-pi">
            <br />
            <br />

            <h1 className="titulo-pi"> 💻 Engenharia de software</h1>
            <br />

            <p className="texto-pi">


                A Engenharia de Software é uma das profissões mais promissoras e em alta no mercado atual, oferecendo uma vasta gama de oportunidades devido à crescente digitalização das empresas e à inovação tecnológica. Com a constante evolução do setor, os engenheiros de software têm a chance de atuar em diversas frentes, como o desenvolvimento de sistemas, gestão de bancos de dados, inteligência artificial e muito mais.
                <br></br>
                Como objetivo explorar essa carreira, detalhar suas atribuições, vantagens e a crescente demanda por esses profissionais qualificados. Se você está em dúvida sobre seguir essa carreira ou deseja entender mais sobre as oportunidades que ela oferece, continue lendo!


                Toda a parte técnica e científica dos sistemas, desde o desenvolvimento até a gestão. Ele pode cuidar tanto das aplicações visíveis aos usuários (que é chamada de front-end) quanto dos bastidores –– nesse caso, o back-end.
            </p>
        


    <section className="secao-pi">
                <h4>Veja algumas das possíveis atribuições desse profissional:
                </h4>
                <ul>
                     <li>no desenvolvimento, ele pode criar jogos e softwares para computadores, videogames e dispositivos móveis (tablets e smartphones);</li>
                    <li>na arquitetura de softwares, o profissional fica responsável pela parte estrutural das aplicações, com um alto controle de qualidade para garantir eficiência; </li>
                    <li>por falar em eficiência, ainda há os testes nos sistemas e apps para localizar possíveis falhas e corrigi-las;</li> 
                    <li>na parte de gestão, que acontece quando os sistemas já estão disponíveis, o engenheiro faz o gerenciamento do negócio e projetos das empresas que utilizam o software.</li>
               </ul>
            </section>
            <br />
            <section className="secao-pi">
                <h4>Entre as principais atribuições do engenheiro de software, estão:
                </h4>
                <ul>
                    <li>Desenvolver softwares e apps</li>
                    <li>Gerenciar projetos ligados aos softwares</li>
                    <li>Arquitetar o design estrutural dos programas</li>
                    <li>Realizar testes nos sistemas</li>
                </ul>
            </section>
        </div>
    );
};

export default EngenhariaSoftware;

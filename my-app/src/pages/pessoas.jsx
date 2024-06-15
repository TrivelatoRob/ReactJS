import React from "react";
import './styles/pessoas.css'


function Pessoas({pessoas}){
    
    return (
        pessoas.map((element) =>{
            return (<div className="lista">
                <ul>
                <li>Nome: {element['nome']}</li>
                <li>Sobrenome: {element['sobrenome']}</li>
                <li>Idade: {element['idade']}</li>
                <li>Profissão: {element['profissão']}</li>

                </ul>
            </div>)
        })
    )

}

export default Pessoas

import React from "react";
import './styles/pessoas.css'


function Pessoas(pessoas){
    
    return (
        pessoas.map((element) =>{
            return (<div className="grid">
                <ul className="lista">
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

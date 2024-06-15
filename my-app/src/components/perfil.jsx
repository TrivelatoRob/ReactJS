import React from "react";


function Perfil({nome, sobrenome, idade}){

    return (
        <div>
            <p>Bem vindo, {nome} {sobrenome}</p>
            {idade ? <p>Sua idade é: {idade} </p> : <p>"Idade Não informada"</p> }
        </div>
    )
  
}

export default Perfil
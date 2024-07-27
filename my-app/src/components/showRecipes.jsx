import React, { useContext, useState } from "react";
import Card from "./card";
import { UserContext } from "../context/userContext";
import "./styles/card.css"


function ShowRecipes () {
    
    const { receitas, setReceitas} = useContext(UserContext)
    const [filtro, setFiltro] = useState("");
    const [receitaFiltrada, setReceitaFiltrada] = useState('')




    const handleFiltrar = (event) => {
        const { target } = event
        setFiltro(target.value);
        let receitaFiltrada = receitas.filter((receita) => receita.strMeal.toLowerCase().includes(filtro)  )
        setReceitaFiltrada(receitaFiltrada)
      }

      




	return(
        <div>      
        <input disabled={!receitas}type="text" placeholder="Filtrar..." onChange={( event ) => handleFiltrar(event)}/>
        <div className='cardContainer'>
		{ receitaFiltrada ? receitaFiltrada.map((element) => (
            <Card title={element.strMeal} image={element.strMealThumb} />
        )): receitas && receitas.map((element) => (
            <Card title={element.strMeal} image={element.strMealThumb} />
        ))}
        </div>
        </div>
        
	)
}

export default ShowRecipes
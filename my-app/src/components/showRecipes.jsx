import React, { useContext, useState } from "react";
import RecipeReviewCard from "./card";
import { UserContext } from "../context/userContext";
import "./styles/card.css"


function ShowRecipes () {
    
    const { receitas } = useContext(UserContext);
    const [filtro, setFiltro] = useState("");
    const [receitaFiltrada, setReceitaFiltrada] = useState('');

   
    const handleFiltrar = (event) => {        
        const { target } = event
        setFiltro(target.value);
    }

    const handleListar = async () => {        
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${filtro}`);
          const data = await response.json();
          console.log(data);
          if (data && data.meals) {
              setReceitaFiltrada(data.meals);
          }
      }

      




	return(
        <div>
          <label>Ou Por Ingrediente:</label><br />     
        <input type="text" placeholder="Filtrar..." onChange={( event ) => handleFiltrar(event)}/>
        <button disabled={!filtro} onClick={handleListar}>Pesquisar</button>
        <div className='cardContainer'>
		{ receitaFiltrada ? receitaFiltrada.map((element) => (
            <RecipeReviewCard id={element.idMeal} title={element.strMeal} image={element.strMealThumb} />
        )): receitas && receitas.map((element) => (
            <RecipeReviewCard id= {element.idMeal} title={element.strMeal} image={element.strMealThumb} />
        ))}
        </div>
        </div>
    )
}


export default ShowRecipes
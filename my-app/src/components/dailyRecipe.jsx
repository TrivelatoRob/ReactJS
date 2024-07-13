import React, { useState, useEffect } from 'react'
import './styles/dailyRecipe.css'


function DailyRecipe() {
    const [receita, setReceita] = useState([])
    useEffect(() => { 
        
		const fetchReceita = async () => {
			const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')          
				const data = await response.json();
                console.log(data)
			  	setReceita(data);
		  };
		fetchReceita();
		}, [])


        return(
            <div>
                <h2>Receita do dia!</h2>
                { receita.meals ? receita.meals.map((receita) => {
                    return(
                        <div>
                           <h3>{receita.strMeal}</h3>
                           <img src={receita.strMealThumb} /><br />
                           <a href={receita.strYoutube} target='blank'><button>Saiba Mais</button></a>
                        </div>
                    )
                }): <div>
                        <p>Carregando...</p>
                        
                    </div>}
            </div>

        )
    }
export default DailyRecipe
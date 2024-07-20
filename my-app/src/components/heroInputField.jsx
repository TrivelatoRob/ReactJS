import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/userContext'



function HeroInputField() {

    const [options, setOptions] = useState('')


    useEffect(() =>{
        const fetchCategories = async () => {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')          
                const data = await response.json();
                console.log(data)

                if (data && data.meals) {
                    setOptions(data.meals);
                }
        };
        fetchCategories();
        }, [])
        
    return(
		<div>
            <h2>Ou procure uma nova receita:</h2>
            <label>Categorias</label><br />
            <select>
                {options.length > 0 ? options.map ((element) => (
                    <option>{element.strCategory}</option>)): <option>Erro!</option>}
           
            </select>
            
        </div>
	)
}


export default HeroInputField
import React from "react";



function Filtrar () {
    const { receitas} = useContext(UserContext)
    console.log(receitas);
	return(
        <div className='cardContainer'>
		{ receitas && receitas.filter((filtro) => (
            <Card title={element.strMeal} image={element.strMealThumb} />
        ))}
        </div>
	)
}


export default Filtrar
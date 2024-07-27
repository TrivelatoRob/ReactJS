import React, { useContext, useEffect } from 'react'
import DailyRecipe from '../components/dailyRecipe'
import { UserContext } from '../context/userContext'
import HeroInputField from '../components/heroInputField'
import ShowRecipes from '../components/showRecipes'




function Hero() {
    const {user, setUser} = useContext(UserContext)

    useEffect(() =>{
        let email = localStorage.getItem('email')
        if(!email) {
            email = 'usuario'
        }
        setUser(email)
        
    })
 

	return(
		<div className='workpage'>
            <h1>Bem-vindo, {user ? user : 'usuario' }!</h1>

            <DailyRecipe />

            <HeroInputField />

            <ShowRecipes />

            
            
        </div>
	)
}


export default Hero
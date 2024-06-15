import React, { useEffect, useContext} from 'react'
import Perfil from '../components/perfil'
import './styles/main.css'
import { UserContext } from '../context/userContext'
import Pessoas from './pessoas'


function Main(){
    const {pessoas, setPessoas} = useContext(UserContext)

    useEffect(() => { 
		const fetchUsers = async () => {
			const response = await fetch('/pessoas.json');
				const data = await response.json();
				console.log(data)
			  	setPessoas(data);
		  };
		fetchUsers();
		}, [])

    

    return(

        <div>
            <div className='main-content'>
                <div>
                <h3>Teste de Perfil</h3>
                <Perfil nome={'Roberto'} sobrenome={'Trivelato'} idade={'36'} />
                <Pessoas pessoas={pessoas} />
                </div>
            </div>
        </div>
    )
}

export default Main
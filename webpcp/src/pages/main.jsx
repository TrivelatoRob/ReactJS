import React, { useEffect, useContext} from 'react'
import Profile from '../components/profile'
import './styles/main.css'
import { UserContext } from '../context/userContext'
import Pecas from './pecas'


function Main(){
    const {pecas, setPecas} = useContext(UserContext)

    useEffect(() => { 
		const fetchUsers = async () => {
			const response = await fetch('/pecas.json');
				const data = await response.json();
				console.log(data)
			  	setPecas(data);
		  };
		fetchUsers();
		}, [])

    

    return(

        <div>
            <div className='main-content'>
                <div>
                <h3>Teste de Perfil</h3>
                <Profile bitola={'45mm'} material={'SAE 1045'} tratamento={''} />
                <Pecas pecas={pecas} />
                </div>
            </div>
        </div>
    )
}

export default Main
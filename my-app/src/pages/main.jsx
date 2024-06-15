import React from 'react'
import Perfil from '../components/perfil'
import './styles/main.css'


function Main(){

    return(

        <div>
            <div className='main-content'>
                <h3>Teste de Perfil</h3>
                <Perfil nome={'Roberto'} sobrenome={'Trivelato'} idade={'36'} />
            </div>
        </div>
    )
}

export default Main
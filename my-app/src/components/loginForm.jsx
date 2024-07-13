import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

import './styles/loginForm.css'

function LoginForm() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate()

    
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const dados = await fetch('./usuarios.json')
        const usuarios = await dados.json()
        console.log(usuarios);
        
        
        for(let usuario of usuarios){
            if(usuario.email === email  && usuario.senha === senha){
                navigate('/hero')
            }
            else{
                alert('Senha ou email incorretos')
            }
        }
    }


        const handleEmail = (target) =>{
            setEmail(target.value);
        }
        const handleSenha = (target) =>{
            setSenha(target.value);
        }

	return(
		<div className='login'>
            <form onSubmit={(event) => handleSubmit (event)}>
                <label></label>
                <input type="email" placeholder='e-mail' onChange={({target}) => handleEmail(target)} 
                value={email} required/>
                <input type="password" placeholder='senha' onChange={({target}) => handleSenha(target)} 
                value={senha} required/>
                <button type='submit' >Entrar</button>

            </form>
				
				
		</div>
		
	)
}

export default LoginForm
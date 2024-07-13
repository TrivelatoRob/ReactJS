import React, { useEffect, useContext } from 'react'
import './styles/main.css'
import Footer from '../components/footer'
import Header from '../components/header'
import LoginForm from '../components/loginForm'

function Main() {
			

	return(
		<div>
			<Header/>
		
			<div className='main-content'>
				<LoginForm />
				
			</div>
			<Footer/>
		</div>
	)
}


export default  Main 
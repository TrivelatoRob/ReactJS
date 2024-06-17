import './App.css';
import Main from './pages/main'
import { UserProvider } from './context/userContext';

function App() {
  return (
    <div className="App">
     
     <Main />
     
    </div>
  );
}

function AppWrapper(){
  return(
    <UserProvider>
      <App />
    </UserProvider>
  )
  
}

export default AppWrapper
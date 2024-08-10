import React, { createContext, useState } from 'react';

// Create a context with a default value
const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [pessoas, setPessoas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState('');
  const [receitas, setReceitas] = useState(null);
  const [filtro, setFiltro] = useState('')
  const [recipeInfo, setRecipeInfo] = useState()



  const values = { 
    pessoas,
    setPessoas,
    loading,
    setLoading,
    user,
    setUser,
    receitas,
    setReceitas,
    filtro,
    setFiltro,
    recipeInfo,
    setRecipeInfo,
    }

  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
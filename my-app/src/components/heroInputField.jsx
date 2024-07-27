import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";

function HeroInputField() {
  const [options, setOptions] = useState("");
  const [selection, setSelection] = useState("");
  const { setReceitas } = useContext(UserContext);
  
  


  useEffect(() => {
    const fetchOptions = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
      );
      const data = await response.json();
      console.log(data);

      if (data && data.meals) {
        setOptions(data.meals);
      }
    };
    fetchOptions();
  }, []);

    const handleSelection = (event) => {
      const { target } = event
      setSelection(target.value);
      };
  
    const fetchRecipes = async () => {
      console.log(selection);
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selection}`
      );
      const data = await response.json();
      console.log(data);
      if (data && data.meals) {
          setReceitas(data.meals);
      }
    };
    
    
          
      



  return (
    <div>
      <h2>Ou procure uma nova receita:</h2>
      <label>Por Categorias:</label>
      <br />
      <select
        onChange={( event ) => handleSelection(event)}>
        <option disabled={selection}>Selecione uma categoria</option>
        {options.length > 0 ? (
          options.map((element) => <option>{element.strCategory}</option>)
        ) : (
          <option>Erro!</option>
        )}
      </select>
      <button disabled={!selection} onClick={fetchRecipes}>Pesquisar</button>
      <br />
      <br />
    </div>
  );
}

export default HeroInputField;

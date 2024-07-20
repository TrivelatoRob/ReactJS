import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";

function HeroInputField() {
  const [options, setOptions] = useState("");
  const [selection, setSelection] = useState("");
  const { receitas, setReceitas } = useContext(UserContext)


  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
      );
      const data = await response.json();
      console.log(data);

      if (data && data.meals) {
        setOptions(data.meals);
      }
    };
    fetchCategories();
  }, []);

  const handleSelection = (event) => {
    let selecao = event.value;
    //let escolhido = selecao.filter((element) => element.selected)
    setSelection(selecao);
  };
  
  const fetchCategories = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?c=${selection}`
    );
    const data = await response.json();
    if (data && data.meals) {
        setReceitas(data.meals)
    }
  };



  return (
    <div>
      <h2>Ou procure uma nova receita:</h2>
      <label>Categorias</label>
      <br />
      <select
        onChange={({ event }) => handleSelection(event)}
        value={selection}
      >
        <option disabled={selection}>Selecione uma categoria</option>
        {options.length > 0 ? (
          options.map((element) => <option>{element.strCategory}</option>)
        ) : (
          <option>Erro!</option>
        )}
      </select>
      <button disabled={!selection} onClick={fetchCategories}>Pesquisar</button>
      <ul>
      {receitas.length > 0 ? (
          receitas.map((element) => <li>{element.strMeal}</li>)): (
            <li>Erro</li>
          )}
      </ul>

    </div>
  );
}

export default HeroInputField;

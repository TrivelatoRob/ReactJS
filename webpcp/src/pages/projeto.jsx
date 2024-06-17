import React from 'react';
import './styles/projeto.css'


function Projeto(){
    return(
        <div className='projeto'>
            <h3>Cadastro de peças</h3>
            <form>
                <label for="numero"> Digite o numero da peça:</label>
                <p></p>
                <input type="text"  id="numero" name="numero"></input>
                <p></p>
                <label for="cliente">Cliente</label>
                <select name="cliente" id="cliente">
                    <option value="CNH">CNH</option>
                    <option value="Landini">Landini</option>
                    <option value="Sandvik">Sandvik</option>
                    <option value="PROK">Prok</option>
                </select>
                <p></p>
                <label for="bitola"> Digite a bitola da materia prima da peça em mm:</label>
                <p></p>
                <input type="text"  id="bitola" name="bitola"></input>
                <p></p>
                <label for="material"> Digite o material da peça:</label>
                <p></p>
                <input type="text"  id="material" name="material"></input>
                <p></p>
                <button type="submit">Cadastrar</button>
                
            </form>
        </div>
    )
}

export default Projeto

